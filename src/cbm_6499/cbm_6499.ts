
import { M6821 } from "./m6821";
import { M6850 } from "./m6850";

import { BBSConnector } from "../bbs_connector";

let PIA = new M6821();
let ACIA = new M6850();

export let videotel = new BBSConnector();

(window as any).ACIA = ACIA;

videotel.on_error = ()=>{
   // sets NO CARRIER
   ACIA.STATUS_NO_CARRIER = 1;
   console.log("NO CARRIER");
};

videotel.on_close = ()=>{
   // sets NO CARRIER
   ACIA.STATUS_NO_CARRIER = 1;
   console.log("NO CARRIER");
};

videotel.on_open = ()=>{
   // clears NO CARRIER
   ACIA.STATUS_NO_CARRIER = 0;
   PIA.PA &= 127;
   console.log("CARRIER DETECT");
};

videotel.on_data = (data)=>{
   ACIA.receive_data(data);
}

ACIA.transmit_data = (data) => {
   videotel.send_data_to_bbs([data]);
}

PIA.afterdialtone = ()=>videotel.connect();

// function called from C64 when the whole system is reset
export function cbm_6499_reset()
{
   PIA.reset(); 
}

// function called from C64 when CPU reads I/O in the range $DE00-DFFF
export function cbm_6499_read(addr: number, ticks: number)
{   
   if(addr < 0xDF00) return PIA.read(addr);
   else              return ACIA.cpu_read(addr, ticks);
}

// function called from C64 when CPU writes I/O in the range $DE00-DFFF
export function cbm_6499_write(addr: number, data: number)
{
   if(addr < 0xDF00) PIA.write(addr, data);
   else              ACIA.cpu_write(addr, data);
}

