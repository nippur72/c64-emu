// handles interaction between browser and emulation 

import { goAudio, stopAudio, audioContextResume } from "./audio";
import { c64 } from "./emscripten_wrapper";
import { loadBytes } from "./filesystem";

let aspect = 1.3;

function onResize() {
   const canvas = document.getElementById("canvas")!;   

   if(window.innerWidth > (window.innerHeight*aspect))
   {
      canvas.style.width  = `${aspect*100}vmin`;
      canvas.style.height = "100vmin";
   }
   else if(window.innerWidth > window.innerHeight)
   {
      canvas.style.width  = "100vmax";
      canvas.style.height = `${(1/aspect)*100}vmax`;
   }
   else
   {
      canvas.style.width  = "100vmin";
      canvas.style.height = `${(1/aspect)*100}vmin`;
   }

   const trueHeight = canvas.offsetHeight
}

function goFullScreen() 
{
   const canvas = document.getElementById("canvas")!;  
   canvas.requestFullscreen(); 
   onResize();
}

window.addEventListener("resize", onResize);
window.addEventListener("dblclick", goFullScreen);

onResize();

// **** save state on close ****

window.onbeforeunload = function(e) {
   
};

// **** visibility change ****

window.addEventListener("visibilitychange", function() {
   if(document.visibilityState === "hidden")
   {
      c64.stopped = true;
      stopAudio();
   }
   else if(document.visibilityState === "visible")
   {      
      c64.go();
      goAudio();
   }
});

// **** drag & drop ****

const dropZone = document.getElementById('screen') as HTMLCanvasElement;

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function(e) {
   e.stopPropagation();
   e.preventDefault();
   e.dataTransfer!.dropEffect = 'copy';
});

// Get file data on drop
dropZone.addEventListener('drop', e => {
   audioContextResume();

   e.stopPropagation();
   e.preventDefault();
   const files = e.dataTransfer!.files; // Array of all files

   for(let i=0; i<files.length; i++) {                   
      let file = files[i];
      const reader = new FileReader();      
      reader.onload = e2 => droppedFile(file.name, new Uint8Array(e2.target!.result as ArrayBuffer));
      reader.readAsArrayBuffer(file); 
   }
});

async function droppedFile(outName: string, bytes: Uint8Array) {
   const prg = /\.prg$/i;
   if(prg.test(outName)) {    
      await loadBytes(bytes);
      return;
   }
}

