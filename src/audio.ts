import { get_wasm_instance } from "./emscripten_wrapper";

const AUDIO_BUFSIZE = 1024;  // must match .c

let audio_buffers_queue: number[][] = [];

export function audio_buf_ready(ptr: number, size: number) {
   if(!audio_playing) return;

   let start = ptr / get_wasm_instance().HEAPF32.BYTES_PER_ELEMENT;
   let buffer = get_wasm_instance().HEAPF32.subarray(start,start+size) as number[];

   audio_buffers_queue.push([ ...buffer ]);  // push a cloned copy
}

// ********************************* AUDIO BUFFER TO BROWSER AUDIO ************************************

const bufferSize = AUDIO_BUFSIZE;

let audioContext: AudioContext|undefined = undefined;
let speakerSound: ScriptProcessorNode | undefined;

function createAudioContext() {
   audioContext = new window.AudioContext(); // new (window.AudioContext || window.webkitAudioContext)();   
   speakerSound = audioContext.createScriptProcessor(bufferSize, 1, 1);

   speakerSound.onaudioprocess = function(e) {
      const output = e.outputBuffer.getChannelData(0);

      if(audio_buffers_queue.length === 0) {
         // console.log("warning: audio queue is empty");
         return;
      }
      else if(audio_buffers_queue.length > 10) {
         // console.log(`warning: audio queue is getting longer: ${audio_buffers_queue.length}`);
         audio_buffers_queue = [];
         return;
      }

      const buffer = audio_buffers_queue[0];
      audio_buffers_queue = audio_buffers_queue.slice(1);

      for(let i=0; i<bufferSize; i++) {
         output[i] = buffer[i];
      }
   }
}

/*
let ch0 = [];
let ch1 = [];

function csave() {
   const wavData = {
      sampleRate: 48000,
      channelData: [ new Float32Array(ch0), new Float32Array(ch1) ]
   };
     
   const buffer = encodeSync(wavData, { bitDepth: 16, float: false });      
   
   let blob = new Blob([buffer], {type: "application/octet-stream"});   
   const fileName = "csaved.wav";
   saveAs(blob, fileName);
}
*/

let audio_playing: boolean|undefined = undefined;

export function goAudio() {
   if(audioContext === undefined) createAudioContext();

   if(speakerSound === undefined) return;
   if(audioContext === undefined) return;
   speakerSound.connect(audioContext.destination);
   audio_playing = true;
   audio_buffers_queue = [];
}

export function stopAudio() {
   if(audio_playing !== undefined && audio_playing === true) {
      if(speakerSound === undefined) return;
      if(audioContext === undefined) return;
      speakerSound.disconnect(audioContext.destination);
      audio_playing = false;
   }
}

export async function audioContextResume() {
   if(audioContext === undefined) createAudioContext();
   if(audio_playing === undefined) goAudio();

   if(speakerSound === undefined) return;
   if(audioContext === undefined) return;

   if(audioContext.state === 'suspended') {
      await audioContext.resume();
      audio_buffers_queue = [];
   }
}
