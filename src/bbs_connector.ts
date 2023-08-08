export class BBSConnector {
   address = "";     
   protocol: string | undefined;

   ws_connection: WebSocket | undefined;     
   
   on_error = (err: Event)=> {};
   on_open = ()=> {};
   on_close = ()=> {};
   on_data = (data: Uint8Array)=> {};

   connected = false;
   
   connect() {
      // empty string means no protocol (undefined)
      let protocol = this.protocol === '' ? undefined : this.protocol;

      this.ws_connection = new WebSocket(`${this.address}`,protocol);
      this.ws_connection.binaryType = "arraybuffer";

      this.ws_connection.onerror = (err)=>{
         console.log('websocket connection error');         
         this.connected = false;
         this.on_error(err);
      };
               
      this.ws_connection.onopen = () => {
         console.log('websocket connected');         
         this.connected = true;
         this.on_open();
      };
   
      this.ws_connection.onclose = () => {
         console.log('websocket disconnected');         
         this.connected = false;
         this.on_close();
      };      

      this.ws_connection.onmessage = (e) => {      
         if (e.data instanceof ArrayBuffer) {            
            this.on_data(new Uint8Array(e.data)); 
            let l = Array.from(new Uint8Array(e.data));
            //console.log(`ACIA.receive_data(${JSON.stringify(l)});`);
         }
         else {
            console.log(`websocket Received string: '${e.data}'`);
         }
      };
   }

   send_data_to_bbs(data: number[]) {
      let bytes = new Uint8Array(data);
      if(this.ws_connection !== undefined && this.ws_connection.readyState === this.ws_connection.OPEN) {         
         this.ws_connection.send(bytes);
      }
      else {
         console.log("websocket disconnected, can't send!");
      }
   }   
   
   close() {
      if(this.ws_connection !== undefined) {         
         this.ws_connection.close();
         this.connected = false;
      }
   }
}
