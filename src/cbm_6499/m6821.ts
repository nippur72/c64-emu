/*
Note varie:

PIA = Motorola 6821
   Enable = cpu clock
   /RW = cpu /RW
   /RESET = cpu /RESET
   CS0 = sempre posto a 1 (VCC)
   CS1 = sempre posto a 1 (VCC)
   /CS2 = /IO1 (cpu I/O) range $DE00-$DEFF.
   RS0,RS1 = [A1:A0]
   /IRQA,/IRQB = /IRQ cpu, cleared by reading data register
   CA1 = (interrupt input) segnale di RING
   CB1 = (interrupt input) 0 (GND)
   CA2 = (configurato come output) pin A14 della rom interna (bank switching)
   CB2 = (configurato come output) permette di switchare il pin EXROM (cart off)
*/

import { c64 } from "../emscripten_wrapper";
import { hex } from "../utils";

export class M6821 {
   CRA = 0;
   CRB = 0;

   PA = 0;
   PB = 0;

   DDRA = 0;
   DDRB = 0;

   // dialtone detection
   number_decoder = new NumberDecoder();   

   ring(value: boolean) {
      if(value) this.CRA = this.CRA | 0b10000000; 
      else      this.CRA = this.CRA & 0b01111111; 
      //c64.set_external_irq(value);
   }
 
   reset() {
      this.CRA = 0;
      this.CRB = 0;    
      this.PA = 0;
      this.PB = 0;
      this.DDRA = 0;
      this.DDRB = 0;
      c64.set_cbm_6499_nbank(1);
      debug(`PIA: RESET`);    
   }
 
   read(addr: number) {
      let CRA2 = (this.CRA >> 2) & 1;
      let CRB2 = (this.CRB >> 2) & 1;
      let RS = addr & 3;
      if(RS === 0b00 && CRA2 === 1) { 
         debug(`PIA: read PA = $${hex(this.PA,2)}`); 
         this.CRA = this.CRA & 0b00111111; // clear interrupt flag
         return this.PA; 
      }
      else if(RS === 0b00 && CRA2 === 0) { 
         debug(`PIA: read DDRA = $${hex(this.DDRA,2)}`);         
         return this.DDRA; 
      }
      else if(RS === 0b01) { 
         debug(`PIA: read CRA = $${hex(this.CRA,2)}`);         
         return this.CRA; 
      }
      else if(RS === 0b10 && CRB2 === 1) { 
         debug(`PIA: read PB = $${hex(this.PB,2)}`);        
         this.CRB = this.CRB & 0b00111111; // clear also interrupt flag 
         return this.PB; 
      }
      else if(RS === 0b10 && CRB2 === 0) { 
         debug(`PIA: read DDRB = $${hex(this.DDRB,2)}`);         
         return this.DDRB; 
      }
      else if(RS === 0b11) { 
         debug(`PIA: read CRB = $${hex(this.CRB,2)}`);         
         return this.CRB; 
      }
   }
 
   write(addr: number, data: number) {
      let CRA2 = (this.CRA >> 2) & 1;
      let CRB2 = (this.CRB >> 2) & 1;
      let RS = addr & 3;
           if(RS === 0b01) this.write_CRA(data);
      else if(RS === 0b11) this.write_CRB(data);
      else if(RS === 0b00 && CRA2 === 1) this.write_PA(data);      
      else if(RS === 0b00 && CRA2 === 0) this.write_DDRA(data);      
      else if(RS === 0b10 && CRB2 === 1) this.write_PB(data);      
      else if(RS === 0b10 && CRB2 === 0) this.write_DDRB(data);      
   }

   write_CRA(data: number) {   
      this.CRA = data;
      // bank switching
      if(data & 0b00110000) {
         let bank = (data >> 3) & 1;
         c64.set_cbm_6499_nbank(bank);         
         debug(`6499: ROM bank switch to ${bank}`);         
      }
      debug(`PIA: set CRA to $${hex(data,2)}`);         
   }

   write_CRB(data: number) {
      this.CRB = data;
      // EXROM pin trigger
      if(data & 0b00110000) {
         let exrom = (data >> 3) & 1;
         c64.set_exrom(!!exrom);         
         debug(`6499: EXROM switch to ${!!exrom}`);         
      }
      debug(`PIA: set CRB to $${hex(data,2)}`);         
   }   

   write_DDRA(data: number) {
      this.DDRA = data;
      debug(`PIA: set DDRA to binary ${data.toString(16)}`);         
   }

   write_DDRB(data: number) {   
      this.DDRB = data;
      debug(`PIA: set DDRB to binary ${data.toString(16)}`);         
   }

   write_PA(data: number) {
      this.PA = data;
      debug(`PIA: set PA to $${hex(data,2)}`);         
   }
 
   write_PB(data: number) {
      // dialtone detection starts bbs delayed
      let PB5 = (data >> 5) & 1;  let old_PB5 = (this.PB >> 5) & 1;
      let PB6 = (data >> 6) & 1;  let old_PB6 = (this.PB >> 6) & 1;
      let PB7 = (data >> 7) & 1;  let old_PB7 = (this.PB >> 7) & 1;

      this.number_decoder.tick(PB6, PB5, data);

      //console.log(data.toString(2));
      
      if(PB5 === 0 && old_PB5 === 1) {         

         debug("PIA: dialing...");
      }

      if(PB7 !== old_PB7) {
         // PB7 changed
         debug(`******** PB7: ${PB7}`);
      }

      this.PB = data;
      debug(`PIA: set PB to $${hex(data,2)}`);                      
   }
}

function debug(m: string) {
   //console.log(m);
}

class NumberDecoder
{
   started = false;
   pulses = 0;
   telnumber: number[] = [];
   finish_timer: number|undefined;

   old_PB6 = 0;
   old_PB5 = 0;

   afterdialtone = (number: string)=>{};
   
   tick(PB6: number, PB5: number, data: number) {
      if(!this.started) {
         if(PB5 === 1 && this.old_PB5 === 0) {
            this.started = true;
            this.pulses = 0;
            this.telnumber = [];
            console.log("dialing started");
         }
      }
      else {
         if(PB6 === 0 && this.old_PB6 === 1) {
            // dialtone click
            // console.log("PB6 down (dial)");
            this.pulses++;
            const audio = new Audio("dialtone_click.mp3"); // taken from "https://www.fesliyanstudios.com/play-mp3/387"
            audio.play();
         }      
         if(PB6 === 1 && this.old_PB6 === 0) {
            // end of dialtone click
         }
         if(PB5 === 0 && this.old_PB5 === 1) {
            // end of digit
            this.telnumber.push(this.pulses % 10);
            this.pulses = 0;

            // cancel old timer
            if(this.finish_timer) clearTimeout(this.finish_timer);
            this.finish_timer = setTimeout(()=>{
               this.number_composed(this.telnumber.join(""));
               this.finish_timer = undefined;
            }, 3000) as any as number;

            // console.log("PB5 down (end number)");
         }
      }
      this.old_PB5 = PB5;
      this.old_PB6 = PB6;      
   }

   number_composed(telnum: string) {
      console.log(`dialing completed! called ${telnum}`);
      this.started = false;
      this.afterdialtone(telnum);
   }
}

