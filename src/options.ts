import { set_wstcp_address } from "./bbs";
import { c64 } from "./emscripten_wrapper";
import { fetchProgram } from "./fetchProgram";
import { externalLoad } from "./mdawson";

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

   if(options.wstcp !== undefined) {
      set_wstcp_address(options.wstcp);
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
      c64.set_exrom(true);
      c64.set_emulate_cbm_6499(true); 
      c64.reset();     
   }

   return options;
}
