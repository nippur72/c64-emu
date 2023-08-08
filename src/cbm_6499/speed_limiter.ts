export class SpeedLimiter {

    receive_buffer: number[] = [];  
    ticks = 0;
    max_count = 985248 / (1200 / 9); // 1200 baud       
 
    reset() {
       this.receive_buffer = [];         
    }
 
    receive_data(data: Uint8Array) {
       data.forEach(e=>this.receive_buffer.push(e));   
    } 
 
    get_status(ticks: number) {      
       let diff = ticks - this.ticks;            
       if(diff < this.max_count) return 0;            
       return this.receive_buffer.length === 0 ? 0 : 1;
    }
 
    get_byte(ticks: number) {
       this.ticks = ticks;
       let data = this.receive_buffer[0];
       this.receive_buffer = this.receive_buffer.slice(1);                        
       return data;
    }
 }
 
 