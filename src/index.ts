import { load_wasm } from "./emscripten_wrapper";
import { main } from "./emulator";
import { vdp_screen_update } from "./video";
import { audio_buf_ready } from "./audio";
//import { loadPrg } from "./mdawson";
import { modem_read, modem_write } from "./bbs";
import { save_file } from "./filesystem";
import "./browser";

// publish on global
(window as any).vdp_screen_update = vdp_screen_update;
(window as any).audio_buf_ready = audio_buf_ready;
//(window as any).loadPrg = loadPrg;
(window as any).modem_read = modem_read;
(window as any).modem_write = modem_write;
(window as any).save_file = save_file;

async function bootstrap() {
   await load_wasm();
   main();    
}

bootstrap();


