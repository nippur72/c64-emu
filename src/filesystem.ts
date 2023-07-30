import { c64 } from "./emscripten_wrapper";
import { paste, hex } from "./utils";
import { saveAs } from "file-saver";

export function loadBytes(bytes: Uint8Array) {
   wait_and_load(bytes);
}

function wait_and_load(buffer: Uint8Array) {
   if(c64.mem_read(204)!==0) {
      // cursor not flashing, system not yet booted
      setTimeout(()=>wait_and_load(buffer), 100);
      return;
   }
   do_load(buffer);
   console.log(`loaded ${buffer.length} bytes`);
}

function do_load(buffer: Uint8Array) {
   c64.load_prg(buffer, buffer.length);
   paste("RUN\r");
}

const BASTXT = 0x002b;
const PROGND = 0x002d;

export async function save_file(filename: string, start: number, end: number) {
   if(start === undefined) start = c64.mem_read_word(BASTXT);
   if(end === undefined) end = c64.mem_read_word(PROGND)-1;

   const prg = [ start & 0xFF, start >> 8 ];
   for(let i=0,t=start; t<=end; i++,t++) {
      prg.push(c64.mem_read(t));
   }
   const bytes = new Uint8Array(prg);
   
   await download(filename, bytes);

   console.log(`saved "${filename}" ${bytes.length} bytes from ${hex(start,4)}h to ${hex(end,4)}h`);
   //cpu.reset();
}

async function download(fileName: string, bytes: Uint8Array) {   
   let blob = new Blob([bytes], {type: "application/octet-stream"});   
   saveAs(blob, fileName);
   console.log(`downloaded "${fileName}"`);
}
