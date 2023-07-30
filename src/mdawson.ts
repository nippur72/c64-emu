//
// functions originally copied from https://www.mdawson.net/vic20chrome/vic20.php
// and adapted for this emulator
//

import { loadBytes } from "./filesystem";

function binToArray(data: string) {
   let bincodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.!";
   var v=0,cnt=0,out=[],ii=0;
   for(var i=0;i<data.length;i++) {
      v+=bincodes.indexOf(data[i])<<cnt;
      cnt+=6;
      if(cnt>=8) {
         out[ii++]=(v&255);
         cnt-=8;
         v>>=8;
      }
   }
   return out;
}

export function externalLoad(cmd: string, url: string, format?: string, subfile?: string) {	
	console.log("externalLoad cmd="+cmd+" url="+url+" format="+format+" subfile="+subfile);
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';	
	script.src= 'https://www.mdawson.net/vic20chrome/vic20/prgtojsloader.php?cmd='+cmd+'&prgurl='+url+'&subfile='+subfile;
	head.appendChild(script);
}

(window as any).mdawson_loadBytes = loadBytes;

declare function mdawson_loadBytes(src: Uint8Array): void;

(window as any).loadPrg= function(src: any) {   
   if(src.length !== 1) return;

   let bin = binToArray(src[0]);
   
   mdawson_loadBytes(new Uint8Array(bin));
}
