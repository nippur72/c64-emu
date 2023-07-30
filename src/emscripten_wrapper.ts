import emscripten_module from "../emscripten_module";
import { oneFrame } from "./emulator";

let wasm_instance: any;

/*
let rom_load;

let io_read;
let io_write;

let keyboard_reset;
let keyboard_press;
let keyboard_release;
let keyboard_poll;
*/

export const c64 = { 
   tape: { },
   init: ()=>{},
   config: (conf: number)=>{},
   ex: (cycles: number)=>{},
   exec: ()=>{},
   exec_us: (msec: number)=>{},
   vdp: ()=>{},
   reset: ()=>{},
   key_down: (key: number)=>{},
   key_up: (key: number)=>{},
   joystick: ()=>{},
   emu_joy: (joy: number)=>{},
   load_prg: (bytes: Uint8Array, size: number)=>{},
   peek: (address: number)=>{ return 0; },
   poke: (address: number, data: number)=>{},

   cas_port: ()=>{},
   mem_read: (address: number)=>{ return 0; },
   mem_write: (address: number, data: number)=>{},

   mem_read_word: (address: number)=>{ return 0; },
   mem_write_word: (address: number, data: number)=>{},

   go: ()=>{
      c64.stopped = false;
      oneFrame(undefined);
   },

   stopped: true,

};

export async function load_wasm() {   
   
   let instance = await emscripten_module();
   
   c64.init     = instance.cwrap("sys_init", null);
   c64.config   = instance.cwrap("sys_config", null, ['number']);
   c64.exec     = instance.cwrap("sys_exec", null);
   c64.ex       = instance.cwrap("sys_ex", ['number']);
   c64.exec_us  = instance.cwrap("sys_exec_us", ['number']);
   c64.vdp      = instance.cwrap("sys_vdp", null);
   c64.reset    = instance.cwrap("sys_reset", null);

   c64.key_down = instance.cwrap("sys_key_down" , null, ['number'] );
   c64.key_up   = instance.cwrap("sys_key_up"   , null, ['number'] );
   c64.joystick = instance.cwrap("sys_joystick" , null, ['number'] );

   c64.emu_joy  = instance.cwrap("sys_set_joystick_type" , null, ['number'] );

   c64.load_prg         = instance.cwrap("sys_quick_load" , null, ['array', 'number'] );
   //c64.insert_cartdrige = instance.cwrap("sys_insert_rom_cartdrige" , null, ['array', 'number'] );

   c64.peek        = instance.cwrap("sys_mem_cpu_rd"   , 'number', ['number'] );
   c64.poke        = instance.cwrap("sys_mem_cpu_wr"   , null, ['number', 'number'] );

   //c64.dump_vic = instance.cwrap("sys_dump_vic"   , null );

   c64.cas_port = instance.cwrap("sys_cas_port"   , 'number');

   /*
   c64.tape.insert = instance.cwrap("sys_insert_tape"  , 'bool', ['array', 'number'] );
   c64.tape.remove = instance.cwrap("sys_remove_tape"  , null );
   c64.tape.play   = instance.cwrap("sys_tape_play"    , null );
   c64.tape.stop   = instance.cwrap("sys_tape_stop"    , null );
   */

   c64.mem_read = c64.peek;
   c64.mem_write = c64.poke;

   c64.mem_write_word = function(address, word) {
      c64.mem_write(address + 0, word & 0xFF);
      c64.mem_write(address + 1, (word & 0xFF00) >> 8);
   }
   
   c64.mem_read_word = function(address) {
      const lo = c64.mem_read(address + 0);
      const hi = c64.mem_read(address + 1);
      return lo+hi*256;
   }   

   /*
   cpu_init            = instance.cwrap("cpu_init", null);
   cpu_reset           = instance.cwrap("cpu_reset", null);
   cpu_run_instruction = instance.cwrap("cpu_run_instruction", 'number');

   mem_read           = instance.cwrap("mem_read", 'number', ['number']);
   mem_write          = instance.cwrap("mem_write", null, ['number', 'number']);
   rom_load           = instance.cwrap("rom_load", null, ['number', 'number']);

   io_read            = instance.cwrap("io_read", 'number', ['number']);
   io_write           = instance.cwrap("io_write", null, ['number', 'number']);

   lm80c_tick         = instance.cwrap("lm80c_tick", 'number');
   lm80c_set_debug    = instance.cwrap("lm80c_set_debug", null, ['bool']);
   lm80c_ctc_enable   = instance.cwrap("lm80c_ctc_enable", null, ['bool']);
   lm80c_init         = instance.cwrap("lm80c_init", null);
   lm80c_reset        = instance.cwrap("lm80c_reset", null);

   lm80c_tick_line    = instance.cwrap("lm80c_tick_line", 'number', ['number']);

   keyboard_reset     = instance.cwrap("keyboard_reset"  , null );
   keyboard_press     = instance.cwrap("keyboard_press"  , null, ['number', 'number'] );
   keyboard_release   = instance.cwrap("keyboard_release", null, ['number', 'number'] );
   keyboard_poll      = instance.cwrap("keyboard_poll"   , 'number', ['number'] );
   */
   wasm_instance = instance;
   
   return instance;
}

export function get_wasm_instance() {
   return wasm_instance;
}

