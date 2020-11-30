//********************************************************************

let modem_send_to_ws = undefined;

let modem_transmit_buffer = [];
let modem_receive_buffer = [];

const MODEM_DATA_OUT = 0xD7F2;
const MODEM_DATA_IN  = 0xD7F0;
const MODEM_DATA_REQ = 0xD7F3;
const MODEM_ACK      = 0xD7F1;
const MODEM_CONNST   = 0xD7F4;

// function called from C64 when CPU reads in the range $D7F0-$D7FF
function modem_read(addr)
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
      if(modem_send_to_ws == undefined) return 2;
      else return 0;
   }
}

let modem_state = 0;

// function called from C64 when CPU writes in the range $D7F0-$D7FF
function modem_write(addr,data)
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
      if(modem_send_to_ws != undefined) {
          modem_send_to_ws(modem_transmit_buffer);
          modem_transmit_buffer = [];
      }
      else {
        bbs();
      }
   }
}

let wstcp_address = "wss://bbs.sblendorio.eu:8080";

function bbs() {
   let ws_connection = new WebSocket(wstcp_address, 'bbs');

   ws_connection.onerror = function(err) {
      console.log('BBS: connection error');
      printm(`${new Date().toLocaleTimeString()} ERROR CONNECTING TO WEBSOCKET\r`);
   };

   ws_connection.onopen = function() {
      console.log('BBS: connected');
      printm(`${new Date().toLocaleTimeString()} CONNECTED\r`);
   };

   ws_connection.onclose = function() {
      console.log('BBS: disconnected');
      modem_send_to_ws = undefined;
   };

   ws_connection.onmessage = function(e) {
      if (typeof e.data === 'string') {
         console.log("Received string: '" + e.data + "'");
      }
      else {
         e.data.arrayBuffer().then(data=>{
            let bytes = new Uint8Array(data);
            //console.log(`${bytes.length} bytes arrived`);
            bytes.forEach(e=>modem_receive_buffer.push(e));
         });
      }
   };

   modem_send_to_ws = (data) => {
      let bytes = new Uint8Array(data);
      if(ws_connection.readyState === ws_connection.OPEN) {
         //console.log(`transmitting ${bytes.length} bytes`);
         ws_connection.send(bytes);
      }
      else {
         console.log("BBS: can't send, BBS is disconnected");
      }
   };
}

function string2Array(str) {
   let arr = [];

   for(let t=0; t<str.length; t++)
      arr.push(str.charCodeAt(t) & 0xFF);

   return new Uint8Array(arr);
}

function array2String(data) {
   let str = "";

   for(var index=0; index<data.length; index++)
      str += String.fromCharCode(data[index]);

   return str;
}

function printm(msg) {
   let data = string2Array(msg);
   data.forEach(e=>modem_receive_buffer.push(e));
}