export class SpeedLimiter {

   rx_buffer: number[] = [];    

   rx_ticks = 0;
   tx_ticks = 0;
   rx_max_count: number; 
   tx_max_count: number; 

   constructor(rx_baudrate: number, tx_baudrate: number) {
      this.rx_max_count = 985248 / (rx_baudrate / 9);
      this.tx_max_count = 985248 / (tx_baudrate / 9);
   }

   reset() {
      this.rx_buffer = [];              
   }

   push_rx_data(data: Uint8Array) {
      data.forEach(e=>this.rx_buffer.push(e));   
   } 

   rx_full(ticks: number) {      
      let diff = ticks - this.rx_ticks;            
      if(diff < this.rx_max_count) return 0;            
      return this.rx_buffer.length === 0 ? 0 : 1;
   }

   read_byte(ticks: number) {
      this.rx_ticks = ticks;
      let data = this.rx_buffer[0];
      this.rx_buffer = this.rx_buffer.slice(1);                        
      return data;
   }   

   tx_empty(ticks: number) {      
      let diff = ticks - this.tx_ticks;            
      if(diff < this.tx_max_count) return 0;            
      return 1;
   }

   tx_byte_sent(ticks: number) {
      this.tx_ticks = ticks;      
      return;
   }   
}
