export class BBSConnector {
   address = "wss://bbs.sblendorio.eu";  
   port = "8080";
   protocol = "bbs";

   ws_connection: WebSocket | undefined;   
   
   on_error = (err: Event)=> {};
   on_open = ()=> {};
   on_close = ()=> {};
   on_data = (data: Uint8Array)=> {};

   last_timestamp = 0;
   
   connect() {
      this.ws_connection = new WebSocket(`${this.address}:${this.port}`, this.protocol);
      this.ws_connection.binaryType = "arraybuffer";

      this.ws_connection.onerror = (err)=>{
         console.log('websocket connection error');
         this.on_error(err);
      };
               
      this.ws_connection.onopen = () => {
         console.log('websocket connected');
         this.on_open();
      };
   
      this.ws_connection.onclose = () => {
         console.log('websocket disconnected');
         this.on_close();
      };      

      this.ws_connection.onmessage = (e) => {      
         if (e.data instanceof ArrayBuffer) {
            let u = new Uint8Array(e.data);
            this.on_data(u);
            if(e.timeStamp <= this.last_timestamp) console.log("**************");
            this.last_timestamp = e.timeStamp;
         }
         else {
            console.log("websocket Received string: '" + e.data + "'");
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
      if(this.ws_connection !== undefined) this.ws_connection.close();
   }
}
