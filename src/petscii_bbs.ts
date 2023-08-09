//********************************************************************

import { BBSConnector } from "./bbs_connector";
import { string2Uint8Array } from "./utils";

let modem_transmit_buffer: number[] = [];
let modem_receive_buffer: number[] = [];

const MODEM_DATA_OUT = 0xD7F2;
const MODEM_DATA_IN  = 0xD7F0;
const MODEM_DATA_REQ = 0xD7F3;
const MODEM_ACK      = 0xD7F1;
const MODEM_CONNST   = 0xD7F4;

// function called from C64 when CPU reads in the range $D7F0-$D7FF
export function modem_read(addr: number)
{
   if(addr == MODEM_DATA_IN) {
      if(modem_receive_buffer.length == 0) return 0;
      else return modem_receive_buffer[0];
   }
   else if(addr == MODEM_DATA_REQ) {
      if(modem_receive_buffer.length == 0) return 0;
      else return 255;
   }
   else if(addr == MODEM_CONNST) {
      if(!petscii.connected) return 2;
      else return 0;
   }
}

let modem_state = 0;

// function called from C64 when CPU writes in the range $D7F0-$D7FF
export function modem_write(addr: number, data: number)
{
   if(addr==MODEM_ACK)
   {
      if(data==0) {
         modem_state = 0;
      }
      if(data==1 && modem_state==0) {
         modem_receive_buffer = modem_receive_buffer.slice(1);
         modem_state = 1;
      }
   }
   if(addr==MODEM_DATA_OUT) {
      modem_transmit_buffer.push(data);
      petscii.send_data_to_bbs(modem_transmit_buffer);
      modem_transmit_buffer = [];
      if(!petscii.connected) petscii.connect();      
   }
}

// **********************************************************************************************

export let petscii = new BBSConnector();

petscii.on_error = (err)=> {
   console.log('BBS: connection error');
   printm(`${new Date().toLocaleTimeString()} ERROR CONNECTING TO WEBSOCKET\r`);
};

petscii.on_open = () => {
   console.log('BBS: connected');
   // printm(`${new Date().toLocaleTimeString()} CONNECTED\r`);
};

petscii.on_close = () => {
   console.log('BBS: disconnected');      
};

petscii.on_data = (bytes) => {
   bytes.forEach(e=>modem_receive_buffer.push(e));
};
   
function printm(msg: string) {
   let data = string2Uint8Array(msg);
   data.forEach(e=>modem_receive_buffer.push(e));
}