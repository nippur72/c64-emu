import { c64 } from "./emscripten_wrapper";
import { fetchProgram } from "./fetchProgram";
import { externalLoad } from "./mdawson";
import { videotel } from "./cbm_6499/cbm_6499";

type QueryStringObject = {[key: string]:string};

function getQueryStringObject() {
   let a = window.location.search.split("&");
   let o = a.reduce((o: QueryStringObject, v) =>{
      var kv = v.split("=");
      const key = kv[0].replace("?", "");
      let value: string = kv[1];
      o[key] = value;
      return o;
   }, {});
   return o;
}

export async function parseQueryStringCommands() {
   let options = getQueryStringObject();  

   if(options.config !== undefined) {
      c64.config(Number(options.config));
   }

   if(options.joy !== undefined) {
      c64.emu_joy(Number(options.joy));
      console.log(`Joystick emulation ${Number(options.joy)!=0?"enabled":"disabled"}`);
   }

   if(options.load !== undefined) {
      const name = options.load;
      if(name.startsWith("http")) {
         // external load
         externalLoad("loadPrg", name);
      }
      else {
         // internal load
         await fetchProgram(name);
      }   
   }

   if(options.cbm6499 !== undefined) {
      videotel.address = options.wstcp ?? "wss://bbs.sblendorio.eu:8081";      
      videotel.protocol = options.protocol ?? "bbs";
      c64.set_exrom(true);
      c64.set_emulate_cbm_6499(true); 
      c64.reset();     
   }

   return options;
}
