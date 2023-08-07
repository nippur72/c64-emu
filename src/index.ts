import { load_wasm } from "./emscripten_wrapper";
import { main } from "./emulator";
import { vdp_screen_update } from "./video";
import { audio_buf_ready } from "./audio";
//import { loadPrg } from "./mdawson";
import { modem_read, modem_write } from "./petscii_bbs";
import { cbm_6499_write, cbm_6499_read, cbm_6499_reset } from "./cbm_6499/cbm_6499";
import { save_file } from "./filesystem";
import { c64 } from "./emscripten_wrapper";

import "./browser";

// publish on global
(window as any).vdp_screen_update = vdp_screen_update;
(window as any).audio_buf_ready = audio_buf_ready;
//(window as any).loadPrg = loadPrg;
(window as any).modem_read = modem_read;
(window as any).modem_write = modem_write;
(window as any).save_file = save_file;

(window as any).cbm_6499_reset = cbm_6499_reset;
(window as any).cbm_6499_read  = cbm_6499_read;
(window as any).cbm_6499_write = cbm_6499_write;

(window as any).c64 = c64;

(async function() {
   await load_wasm();
   main();    
})();


