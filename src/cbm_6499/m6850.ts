/*
ACIA = motorola 6850
    CS2 = /IO2 (cpu I/O) range $DF00-$DFFF.   

6850 status register
   0 - receive buffer full 
   1 - transmit buffer empty
   2 - no carrier
   3 - /clear to send
   4 - framing error
   5 - receiver overrun
   6 - parity error
   7 - /IRQ

6850 control register
   CR1|CR0 = 00 no divide
             01 divide by 16
             10 divide by 64
             11 master reset 
    
    CR4|CR3|CR2 = bit/parity/stop bit

*/

import { SpeedLimiter } from "./speed_limiter";

const config_bits = [
    { bits: 7, parity: "even", stop_bits: 2 },
    { bits: 7, parity: "odd" , stop_bits: 2 },
    { bits: 7, parity: "even", stop_bits: 1 },
    { bits: 7, parity: "odd" , stop_bits: 1 },
    { bits: 8, parity: "none", stop_bits: 2 },
    { bits: 8, parity: "none", stop_bits: 1 },
    { bits: 8, parity: "even", stop_bits: 1 },
    { bits: 8, parity: "odd" , stop_bits: 1 }
];

const clock_divider = [ "none", "16", "64" ];

export class M6850
{   
   CONTROL = 0;
   TRANSMIT_DATA = 0; 
   RECEIVE_DATA = 0;  

   // status register bits
   STATUS_RECEIVER_FULL     = 0;
   STATUS_TRANSMITTER_EMPTY = 1;
   STATUS_NO_CARRIER        = 1;
   STATUS_CLEAR_TO_SEND     = 0;
   STATUS_FRAMING_ERROR     = 0;
   STATUS_RECEIVER_OVERRUN  = 0;
   STATUS_PARITY_ERROR      = 0;
   STATUS_IRQ               = 0;   

   buffer = new SpeedLimiter();
         
   get_status_byte(ticks: number) {
      this.STATUS_RECEIVER_FULL = this.buffer.get_status(ticks);
      
      let status = 
         (this.STATUS_RECEIVER_FULL     << 0) |
         (this.STATUS_TRANSMITTER_EMPTY << 1) |
         (this.STATUS_NO_CARRIER        << 2) |
         (this.STATUS_CLEAR_TO_SEND     << 3) |
         (this.STATUS_FRAMING_ERROR     << 4) |
         (this.STATUS_RECEIVER_OVERRUN  << 5) |
         (this.STATUS_PARITY_ERROR      << 6) |
         (this.STATUS_IRQ               << 7);   
      return status;
   }

   cpu_read(addr: number, ticks: number) {
      let RS = addr & 1;
      if(RS === 0) {
         let data = this.get_status_byte(ticks);                 
         return data;
      }
      else {         
         this.get_status_byte(ticks);
         if(this.STATUS_RECEIVER_FULL) {
            this.RECEIVE_DATA = this.buffer.get_byte(ticks);            
         }
         return this.RECEIVE_DATA;
      }
   }

   cpu_write(addr: number, data: number) {
      let RS = addr & 1;
      if(RS === 0) {
         debug(`ACIA: set control = (${data.toString(2)})`);
         this.CONTROL = data;

         let CR10  = (this.CONTROL & 0b00000011);
         let CR432 = (this.CONTROL & 0b00011100) >> 2;
         let CR65  = (this.CONTROL & 0b01100000) >> 5;
         let CR7   = (this.CONTROL & 0b10000000) >> 7;

         // master reset
         if(CR10 === 0b11) {
            debug(`ACIA: master RESET`);
            this.buffer.reset();        
            this.TRANSMIT_DATA = 0;
            this.RECEIVE_DATA = 0;

            this.STATUS_RECEIVER_FULL     = 0;
            this.STATUS_TRANSMITTER_EMPTY = 1;
          //this.STATUS_NO_CARRIER        = 1;
            this.STATUS_CLEAR_TO_SEND     = 0;
            this.STATUS_FRAMING_ERROR     = 0;
            this.STATUS_RECEIVER_OVERRUN  = 0;
            this.STATUS_PARITY_ERROR      = 0;
            this.STATUS_IRQ               = 0;                                   
         }
         else {
            debug(`ACIA: clock divide by ${clock_divider[CR10]}`);
         }

         let { bits, parity, stop_bits } = config_bits[CR432];
         debug(`ACIA: bit config: ${bits} bits/parity ${parity}/stop bits${stop_bits}`);
         debug(`ACIA: CR6|5 = ${CR65.toString(2)}`);
         debug(`ACIA: CR7 = ${CR7}`);                  
      }
      else {
         debug(`ACIA: set transmit data = (${data})`);
         this.TRANSMIT_DATA = data;
         this.STATUS_TRANSMITTER_EMPTY = 0;
         this.transmit_data(this.TRANSMIT_DATA);
         this.STATUS_TRANSMITTER_EMPTY = 1;
      }
   }

   // external world interface

   // called from BBS connector
   receive_data(data: Uint8Array) {
      this.buffer.receive_data(data);            
      debug(`ACIA: received ${data.length} bytes`);
   }

   // send data to BBS connector
   transmit_data = (data: number)=>{};
}

function debug(m: string) {
   //console.log(m);
}

