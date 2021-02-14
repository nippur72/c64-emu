
let wasm_instance;

let mem_read;
let mem_write;

/*
let rom_load;

let io_read;
let io_write;

let keyboard_reset;
let keyboard_press;
let keyboard_release;
let keyboard_poll;
*/

let c64 = { tape: { } };

function load_wasm(ready_cb) {

   // emscripten_module.js exports "emscripten_module" globally

   let instance = emscripten_module({ wasmBinary: emscripten_wasm_binary, onRuntimeInitialized: ()=>{
      // makes C exported functions available globally

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

      c64.tape.insert = instance.cwrap("sys_insert_tape"  , 'bool', ['array', 'number'] );
      c64.tape.remove = instance.cwrap("sys_remove_tape"  , null );
      c64.tape.play   = instance.cwrap("sys_tape_play"    , null );
      c64.tape.stop   = instance.cwrap("sys_tape_stop"    , null );

      mem_read = c64.peek;
      mem_write = c64.poke;

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

      // export instance globally (not strictly required)
      wasm_instance = instance;

      // finished
      ready_cb();
   }});
}
