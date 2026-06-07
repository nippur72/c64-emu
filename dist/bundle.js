/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./emscripten_module.js":
/*!******************************!*\
  !*** ./emscripten_module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var emscripten_module = (() => {
  var _scriptDir = "file:///C:/Users/UTENTE/Desktop/USB/GitHub/retrocomputing/c64-emu/emscripten_module.js";
  
  return (
function(emscripten_module = {})  {

var Module=typeof emscripten_module!="undefined"?emscripten_module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="emscripten_module.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! emscripten_module.wasm */ "./emscripten_module.wasm"), __webpack_require__.b).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["d"];updateMemoryViews();wasmTable=Module["asm"]["C"];addOnInit(Module["asm"]["e"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}var ASM_CONSTS={54768:()=>{return cbm_6499_reset()},54797:($0,$1)=>{audio_buf_ready($0,$1)},54826:$0=>{vdp_screen_update($0)},54853:$0=>{vdp_screen_update($0)},54880:$0=>{vdp_screen_update($0)},54907:$0=>{return modem_read($0)},54934:($0,$1)=>{modem_write($0,$1)},54958:($0,$1)=>{return cbm_6499_read($0,$1)},54992:($0,$1)=>{cbm_6499_write($0,$1)}};function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:HEAPF64[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var wasmImports={"a":___assert_fail,"b":_emscripten_asm_const_int,"c":_emscripten_memcpy_big};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["e"]).apply(null,arguments)};var _sys_init=Module["_sys_init"]=function(){return(_sys_init=Module["_sys_init"]=Module["asm"]["f"]).apply(null,arguments)};var _sys_config=Module["_sys_config"]=function(){return(_sys_config=Module["_sys_config"]=Module["asm"]["g"]).apply(null,arguments)};var _sys_reset=Module["_sys_reset"]=function(){return(_sys_reset=Module["_sys_reset"]=Module["asm"]["h"]).apply(null,arguments)};var _sys_exec=Module["_sys_exec"]=function(){return(_sys_exec=Module["_sys_exec"]=Module["asm"]["i"]).apply(null,arguments)};var _sys_exec_us=Module["_sys_exec_us"]=function(){return(_sys_exec_us=Module["_sys_exec_us"]=Module["asm"]["j"]).apply(null,arguments)};var _sys_ex=Module["_sys_ex"]=function(){return(_sys_ex=Module["_sys_ex"]=Module["asm"]["k"]).apply(null,arguments)};var _sys_vdp=Module["_sys_vdp"]=function(){return(_sys_vdp=Module["_sys_vdp"]=Module["asm"]["l"]).apply(null,arguments)};var _sys_key_down=Module["_sys_key_down"]=function(){return(_sys_key_down=Module["_sys_key_down"]=Module["asm"]["m"]).apply(null,arguments)};var _sys_key_up=Module["_sys_key_up"]=function(){return(_sys_key_up=Module["_sys_key_up"]=Module["asm"]["n"]).apply(null,arguments)};var _sys_quick_load=Module["_sys_quick_load"]=function(){return(_sys_quick_load=Module["_sys_quick_load"]=Module["asm"]["o"]).apply(null,arguments)};var _sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=function(){return(_sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=Module["asm"]["p"]).apply(null,arguments)};var _sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=function(){return(_sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=Module["asm"]["q"]).apply(null,arguments)};var _sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=function(){return(_sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=Module["asm"]["r"]).apply(null,arguments)};var _sys_joystick=Module["_sys_joystick"]=function(){return(_sys_joystick=Module["_sys_joystick"]=Module["asm"]["s"]).apply(null,arguments)};var _sys_set_joystick_type=Module["_sys_set_joystick_type"]=function(){return(_sys_set_joystick_type=Module["_sys_set_joystick_type"]=Module["asm"]["t"]).apply(null,arguments)};var _sys_insert_tape=Module["_sys_insert_tape"]=function(){return(_sys_insert_tape=Module["_sys_insert_tape"]=Module["asm"]["u"]).apply(null,arguments)};var _sys_remove_tape=Module["_sys_remove_tape"]=function(){return(_sys_remove_tape=Module["_sys_remove_tape"]=Module["asm"]["v"]).apply(null,arguments)};var _sys_tape_play=Module["_sys_tape_play"]=function(){return(_sys_tape_play=Module["_sys_tape_play"]=Module["asm"]["w"]).apply(null,arguments)};var _sys_tape_stop=Module["_sys_tape_stop"]=function(){return(_sys_tape_stop=Module["_sys_tape_stop"]=Module["asm"]["x"]).apply(null,arguments)};var _sys_cas_port=Module["_sys_cas_port"]=function(){return(_sys_cas_port=Module["_sys_cas_port"]=Module["asm"]["y"]).apply(null,arguments)};var _sys_set_exrom=Module["_sys_set_exrom"]=function(){return(_sys_set_exrom=Module["_sys_set_exrom"]=Module["asm"]["z"]).apply(null,arguments)};var _sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=function(){return(_sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=Module["asm"]["A"]).apply(null,arguments)};var _sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=function(){return(_sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=Module["asm"]["B"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module["asm"]["D"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module["asm"]["E"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["F"]).apply(null,arguments)};Module["ccall"]=ccall;Module["cwrap"]=cwrap;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


  return emscripten_module.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emscripten_module);

/***/ }),

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if ( true && module.exports) {
  module.exports.saveAs = saveAs;
} else if (( true && __webpack_require__.amdD !== null) && (__webpack_require__.amdO !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./src/audio.ts":
/*!**********************!*\
  !*** ./src/audio.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audioContextResume: () => (/* binding */ audioContextResume),
/* harmony export */   audio_buf_ready: () => (/* binding */ audio_buf_ready),
/* harmony export */   goAudio: () => (/* binding */ goAudio),
/* harmony export */   stopAudio: () => (/* binding */ stopAudio)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const AUDIO_BUFSIZE = 1024; // must match .c
let audio_buffers_queue = [];
function audio_buf_ready(ptr, size) {
    if (!audio_playing)
        return;
    let start = ptr / (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.get_wasm_instance)().HEAPF32.BYTES_PER_ELEMENT;
    let buffer = (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.get_wasm_instance)().HEAPF32.subarray(start, start + size);
    audio_buffers_queue.push([...buffer]); // push a cloned copy
}
// ********************************* AUDIO BUFFER TO BROWSER AUDIO ************************************
const bufferSize = AUDIO_BUFSIZE;
let audioContext = undefined;
let speakerSound;
function createAudioContext() {
    audioContext = new window.AudioContext(); // new (window.AudioContext || window.webkitAudioContext)();   
    speakerSound = audioContext.createScriptProcessor(bufferSize, 1, 1);
    speakerSound.onaudioprocess = function (e) {
        const output = e.outputBuffer.getChannelData(0);
        if (audio_buffers_queue.length === 0) {
            // console.log("warning: audio queue is empty");
            return;
        }
        else if (audio_buffers_queue.length > 10) {
            // console.log(`warning: audio queue is getting longer: ${audio_buffers_queue.length}`);
            audio_buffers_queue = [];
            return;
        }
        const buffer = audio_buffers_queue[0];
        audio_buffers_queue = audio_buffers_queue.slice(1);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = buffer[i];
        }
    };
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
let audio_playing = undefined;
function goAudio() {
    if (audioContext === undefined)
        createAudioContext();
    if (speakerSound === undefined)
        return;
    if (audioContext === undefined)
        return;
    speakerSound.connect(audioContext.destination);
    audio_playing = true;
    audio_buffers_queue = [];
}
function stopAudio() {
    if (audio_playing !== undefined && audio_playing === true) {
        if (speakerSound === undefined)
            return;
        if (audioContext === undefined)
            return;
        speakerSound.disconnect(audioContext.destination);
        audio_playing = false;
    }
}
function audioContextResume() {
    return __awaiter(this, void 0, void 0, function* () {
        if (audioContext === undefined)
            createAudioContext();
        if (audio_playing === undefined)
            goAudio();
        if (speakerSound === undefined)
            return;
        if (audioContext === undefined)
            return;
        if (audioContext.state === 'suspended') {
            yield audioContext.resume();
            audio_buffers_queue = [];
        }
    });
}


/***/ }),

/***/ "./src/bbs_connector.ts":
/*!******************************!*\
  !*** ./src/bbs_connector.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBSConnector: () => (/* binding */ BBSConnector)
/* harmony export */ });
class BBSConnector {
    constructor() {
        this.address = "";
        this.on_error = (err) => { };
        this.on_open = () => { };
        this.on_close = () => { };
        this.on_data = (data) => { };
        this.connected = false;
    }
    connect() {
        // empty string means no protocol (undefined)
        let protocol = this.protocol === '' ? undefined : this.protocol;
        this.ws_connection = new WebSocket(`${this.address}`, protocol);
        this.ws_connection.binaryType = "arraybuffer";
        this.ws_connection.onerror = (err) => {
            console.log('websocket connection error');
            this.connected = false;
            this.on_error(err);
        };
        this.ws_connection.onopen = () => {
            console.log('websocket connected');
            this.connected = true;
            this.on_open();
        };
        this.ws_connection.onclose = () => {
            console.log('websocket disconnected');
            this.connected = false;
            this.on_close();
        };
        this.ws_connection.onmessage = (e) => {
            if (e.data instanceof ArrayBuffer) {
                this.on_data(new Uint8Array(e.data));
                let l = Array.from(new Uint8Array(e.data));
                //console.log(`ACIA.receive_data(${JSON.stringify(l)});`);
            }
            else {
                console.log(`websocket Received string: '${e.data}'`);
            }
        };
    }
    send_data_to_bbs(data) {
        let bytes = new Uint8Array(data);
        if (this.ws_connection !== undefined && this.ws_connection.readyState === this.ws_connection.OPEN) {
            this.ws_connection.send(bytes);
        }
        else {
            console.log("websocket disconnected, can't send!");
        }
    }
    close() {
        if (this.ws_connection !== undefined) {
            this.ws_connection.close();
            this.connected = false;
        }
    }
}


/***/ }),

/***/ "./src/browser.ts":
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "./src/audio.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesystem */ "./src/filesystem.ts");
// handles interaction between browser and emulation 
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let aspect = 1.3;
function onResize() {
    const canvas = document.getElementById("canvas");
    if (window.innerWidth > (window.innerHeight * aspect)) {
        canvas.style.width = `${aspect * 100}vmin`;
        canvas.style.height = "100vmin";
    }
    else if (window.innerWidth > window.innerHeight) {
        canvas.style.width = "100vmax";
        canvas.style.height = `${(1 / aspect) * 100}vmax`;
    }
    else {
        canvas.style.width = "100vmin";
        canvas.style.height = `${(1 / aspect) * 100}vmin`;
    }
    const trueHeight = canvas.offsetHeight;
}
function goFullScreen() {
    const canvas = document.getElementById("canvas");
    canvas.requestFullscreen();
    onResize();
}
window.addEventListener("resize", onResize);
window.addEventListener("dblclick", goFullScreen);
onResize();
// **** save state on close ****
window.onbeforeunload = function (e) {
};
// **** visibility change ****
window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.stopped = true;
        (0,_audio__WEBPACK_IMPORTED_MODULE_0__.stopAudio)();
    }
    else if (document.visibilityState === "visible") {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.go();
        (0,_audio__WEBPACK_IMPORTED_MODULE_0__.goAudio)();
    }
});
// **** drag & drop ****
const dropZone = document.getElementById('screen');
// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});
// Get file data on drop
dropZone.addEventListener('drop', e => {
    (0,_audio__WEBPACK_IMPORTED_MODULE_0__.audioContextResume)();
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files; // Array of all files
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        const reader = new FileReader();
        reader.onload = e2 => droppedFile(file.name, new Uint8Array(e2.target.result));
        reader.readAsArrayBuffer(file);
    }
});
function droppedFile(outName, bytes) {
    return __awaiter(this, void 0, void 0, function* () {
        const prg = /\.prg$/i;
        if (prg.test(outName)) {
            yield (0,_filesystem__WEBPACK_IMPORTED_MODULE_2__.loadBytes)(bytes);
            return;
        }
    });
}


/***/ }),

/***/ "./src/cbm_6499/cbm_6499.ts":
/*!**********************************!*\
  !*** ./src/cbm_6499/cbm_6499.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cbm_6499_read: () => (/* binding */ cbm_6499_read),
/* harmony export */   cbm_6499_reset: () => (/* binding */ cbm_6499_reset),
/* harmony export */   cbm_6499_write: () => (/* binding */ cbm_6499_write),
/* harmony export */   videotel: () => (/* binding */ videotel)
/* harmony export */ });
/* harmony import */ var _m6821__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m6821 */ "./src/cbm_6499/m6821.ts");
/* harmony import */ var _m6850__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m6850 */ "./src/cbm_6499/m6850.ts");
/* harmony import */ var _bbs_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bbs_connector */ "./src/bbs_connector.ts");



let PIA = new _m6821__WEBPACK_IMPORTED_MODULE_0__.M6821();
let ACIA = new _m6850__WEBPACK_IMPORTED_MODULE_1__.M6850();
let videotel = new _bbs_connector__WEBPACK_IMPORTED_MODULE_2__.BBSConnector();
window.ACIA = ACIA;
window.PIA = PIA;
window.videotel = videotel;
videotel.on_error = () => {
    // sets NO CARRIER
    ACIA.STATUS_NO_CARRIER = 1;
    console.log("NO CARRIER");
};
videotel.on_close = () => {
    // sets NO CARRIER
    ACIA.STATUS_NO_CARRIER = 1;
    console.log("NO CARRIER");
};
videotel.on_open = () => {
    // clears NO CARRIER
    ACIA.STATUS_NO_CARRIER = 0;
    PIA.PA &= 127;
    console.log("CARRIER DETECT");
};
videotel.on_data = (data) => {
    ACIA.receive_data(data);
};
ACIA.transmit_data = (data) => {
    //console.log(array2String([data]));
    //console.log(`0x${data.toString(16)} = ${data}`);
    videotel.send_data_to_bbs([data]);
};
PIA.number_decoder.afterdialtone = (numtel) => {
    videotel.connect();
    /*
    if(numtel === "0522750051") {
       console.log("good number!");
       videotel.connect();
    }
    else {
       ACIA.STATUS_NO_CARRIER = 1;
       console.log("bad number!");
    }
    */
};
// function called from C64 when the whole system is reset
function cbm_6499_reset() {
    PIA.reset();
}
// function called from C64 when CPU reads I/O in the range $DE00-DFFF
function cbm_6499_read(addr, ticks) {
    if (addr < 0xDF00)
        return PIA.read(addr);
    else
        return ACIA.cpu_read(addr, ticks);
}
// function called from C64 when CPU writes I/O in the range $DE00-DFFF
function cbm_6499_write(addr, data, ticks) {
    if (addr < 0xDF00)
        PIA.write(addr, data);
    else
        ACIA.cpu_write(addr, data, ticks);
}
// funzione ring per modalità "answer"
window.ring = function () {
    let cnt = 0;
    let num = 13;
    function gen_int() {
        if (cnt < num) {
            PIA.CRA = 0x3f | (1 << 7);
            PIA.PA = 255;
            setTimeout(gen_int, 100);
            cnt++;
        }
        else {
            setTimeout(() => videotel.connect(), 3000);
        }
    }
    gen_int();
};


/***/ }),

/***/ "./src/cbm_6499/m6821.ts":
/*!*******************************!*\
  !*** ./src/cbm_6499/m6821.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6821: () => (/* binding */ M6821)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/*
Note varie:

PIA = Motorola 6821
   Enable = cpu clock
   /RW = cpu /RW
   /RESET = cpu /RESET
   CS0 = sempre posto a 1 (VCC)
   CS1 = sempre posto a 1 (VCC)
   /CS2 = /IO1 (cpu I/O) range $DE00-$DEFF.
   RS0,RS1 = [A1:A0]
   /IRQA,/IRQB = /IRQ cpu, cleared by reading data register
   CA1 = (interrupt input) segnale di RING
   CB1 = (interrupt input) 0 (GND)
   CA2 = (configurato come output) pin A14 della rom interna (bank switching)
   CB2 = (configurato come output) permette di switchare il pin EXROM (cart off)
*/


class M6821 {
    constructor() {
        this.CRA = 0;
        this.CRB = 0;
        this.PA = 0;
        this.PB = 0;
        this.DDRA = 0;
        this.DDRB = 0;
        // dialtone detection
        this.number_decoder = new NumberDecoder();
    }
    reset() {
        this.CRA = 0;
        this.CRB = 0;
        this.PA = 0;
        this.PB = 0;
        this.DDRA = 0;
        this.DDRB = 0;
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.set_cbm_6499_nbank(1);
        debug(`PIA: RESET`);
    }
    read(addr) {
        let CRA2 = (this.CRA >> 2) & 1;
        let CRB2 = (this.CRB >> 2) & 1;
        let RS = addr & 3;
        if (RS === 0b00 && CRA2 === 1) {
            debug(`PIA: read PA = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.PA, 2)}`);
            this.CRA = this.CRA & 0b00111111; // clear interrupt flag
            return this.PA;
        }
        else if (RS === 0b00 && CRA2 === 0) {
            debug(`PIA: read DDRA = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.DDRA, 2)}`);
            return this.DDRA;
        }
        else if (RS === 0b01) {
            debug(`PIA: read CRA = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.CRA, 2)}`);
            return this.CRA;
        }
        else if (RS === 0b10 && CRB2 === 1) {
            debug(`PIA: read PB = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.PB, 2)}`);
            this.CRB = this.CRB & 0b00111111; // clear also interrupt flag 
            return this.PB;
        }
        else if (RS === 0b10 && CRB2 === 0) {
            debug(`PIA: read DDRB = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.DDRB, 2)}`);
            return this.DDRB;
        }
        else if (RS === 0b11) {
            debug(`PIA: read CRB = $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(this.CRB, 2)}`);
            return this.CRB;
        }
    }
    write(addr, data) {
        let CRA2 = (this.CRA >> 2) & 1;
        let CRB2 = (this.CRB >> 2) & 1;
        let RS = addr & 3;
        if (RS === 0b01)
            this.write_CRA(data);
        else if (RS === 0b11)
            this.write_CRB(data);
        else if (RS === 0b00 && CRA2 === 1)
            this.write_PA(data);
        else if (RS === 0b00 && CRA2 === 0)
            this.write_DDRA(data);
        else if (RS === 0b10 && CRB2 === 1)
            this.write_PB(data);
        else if (RS === 0b10 && CRB2 === 0)
            this.write_DDRB(data);
    }
    write_CRA(data) {
        this.CRA = data;
        // bank switching
        if (data & 0b00110000) {
            let bank = (data >> 3) & 1;
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.set_cbm_6499_nbank(bank);
            debug(`6499: ROM bank switch to ${bank}`);
        }
        debug(`PIA: set CRA to $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(data, 2)}`);
    }
    write_CRB(data) {
        this.CRB = data;
        // EXROM pin trigger
        if (data & 0b00110000) {
            let exrom = (data >> 3) & 1;
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.set_exrom(!!exrom);
            debug(`6499: EXROM switch to ${!!exrom}`);
        }
        debug(`PIA: set CRB to $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(data, 2)}`);
    }
    write_DDRA(data) {
        this.DDRA = data;
        debug(`PIA: set DDRA to binary ${data.toString(16)}`);
    }
    write_DDRB(data) {
        this.DDRB = data;
        debug(`PIA: set DDRB to binary ${data.toString(16)}`);
    }
    write_PA(data) {
        this.PA = data;
        debug(`PIA: set PA to $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(data, 2)}`);
    }
    write_PB(data) {
        // dialtone detection starts bbs delayed
        let PB5 = (data >> 5) & 1;
        let old_PB5 = (this.PB >> 5) & 1;
        let PB6 = (data >> 6) & 1;
        let old_PB6 = (this.PB >> 6) & 1;
        let PB7 = (data >> 7) & 1;
        let old_PB7 = (this.PB >> 7) & 1;
        this.number_decoder.tick(PB6, PB5, data);
        //console.log(data.toString(2));
        if (PB5 === 0 && old_PB5 === 1) {
            debug("PIA: dialing...");
        }
        if (PB7 !== old_PB7) {
            // PB7 changed
            debug(`******** PB7: ${PB7}`);
        }
        this.PB = data;
        debug(`PIA: set PB to $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(data, 2)}`);
    }
}
function debug(m) {
    //console.log(m);
}
class NumberDecoder {
    constructor() {
        this.started = false;
        this.pulses = 0;
        this.telnumber = [];
        this.old_PB6 = 0;
        this.old_PB5 = 0;
        this.afterdialtone = (number) => { };
    }
    tick(PB6, PB5, data) {
        if (!this.started) {
            if (PB5 === 1 && this.old_PB5 === 0) {
                this.started = true;
                this.pulses = 0;
                this.telnumber = [];
                console.log("dialing started");
            }
        }
        else {
            if (PB6 === 0 && this.old_PB6 === 1) {
                // dialtone click
                // console.log("PB6 down (dial)");
                this.pulses++;
                const audio = new Audio("dialtone_click.mp3"); // taken from "https://www.fesliyanstudios.com/play-mp3/387"
                audio.play();
            }
            if (PB6 === 1 && this.old_PB6 === 0) {
                // end of dialtone click
            }
            if (PB5 === 0 && this.old_PB5 === 1) {
                // end of digit
                this.telnumber.push(this.pulses % 10);
                this.pulses = 0;
                // cancel old timer
                if (this.finish_timer)
                    clearTimeout(this.finish_timer);
                this.finish_timer = setTimeout(() => {
                    this.number_composed(this.telnumber.join(""));
                    this.finish_timer = undefined;
                }, 3000);
                // console.log("PB5 down (end number)");
            }
        }
        this.old_PB5 = PB5;
        this.old_PB6 = PB6;
    }
    number_composed(telnum) {
        console.log(`dialing completed! called ${telnum}`);
        this.started = false;
        this.afterdialtone(telnum);
    }
}


/***/ }),

/***/ "./src/cbm_6499/m6850.ts":
/*!*******************************!*\
  !*** ./src/cbm_6499/m6850.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6850: () => (/* binding */ M6850)
/* harmony export */ });
/* harmony import */ var _speed_limiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speed_limiter */ "./src/cbm_6499/speed_limiter.ts");
/*
ACIA = motorola 6850
    CS2 = /IO2 (cpu I/O) range $DF00-$DFFF.

6850 status register
   0 - receive buffer full
   1 - transmit buffer empty
   2 - no carrier
   3 - /clear to send
   4 - framing error
   5 - receiver overrun
   6 - parity error
   7 - /IRQ

6850 control register
   CR1|CR0 = 00 no divide
             01 divide by 16
             10 divide by 64
             11 master reset
    
    CR4|CR3|CR2 = bit/parity/stop bit

*/

const config_bits = [
    { bits: 7, parity: "even", stop_bits: 2 },
    { bits: 7, parity: "odd", stop_bits: 2 },
    { bits: 7, parity: "even", stop_bits: 1 },
    { bits: 7, parity: "odd", stop_bits: 1 },
    { bits: 8, parity: "none", stop_bits: 2 },
    { bits: 8, parity: "none", stop_bits: 1 },
    { bits: 8, parity: "even", stop_bits: 1 },
    { bits: 8, parity: "odd", stop_bits: 1 }
];
const clock_divider = ["none", "16", "64"];
class M6850 {
    constructor() {
        this.CONTROL = 0;
        this.TRANSMIT_DATA = 0;
        this.RECEIVE_DATA = 0;
        // status register bits
        this.STATUS_RECEIVER_FULL = 0;
        this.STATUS_TRANSMITTER_EMPTY = 1;
        this.STATUS_NO_CARRIER = 1;
        this.STATUS_CLEAR_TO_SEND = 0;
        this.STATUS_FRAMING_ERROR = 0;
        this.STATUS_RECEIVER_OVERRUN = 0;
        this.STATUS_PARITY_ERROR = 0;
        this.STATUS_IRQ = 0;
        this.limiter = new _speed_limiter__WEBPACK_IMPORTED_MODULE_0__.SpeedLimiter(1200, 1200);
        // send data to BBS connector
        this.transmit_data = (data) => { };
    }
    get_status_byte(ticks) {
        this.STATUS_RECEIVER_FULL = this.limiter.rx_full(ticks);
        this.STATUS_TRANSMITTER_EMPTY = this.limiter.tx_empty(ticks);
        let status = (this.STATUS_RECEIVER_FULL << 0) |
            (this.STATUS_TRANSMITTER_EMPTY << 1) |
            (this.STATUS_NO_CARRIER << 2) |
            (this.STATUS_CLEAR_TO_SEND << 3) |
            (this.STATUS_FRAMING_ERROR << 4) |
            (this.STATUS_RECEIVER_OVERRUN << 5) |
            (this.STATUS_PARITY_ERROR << 6) |
            (this.STATUS_IRQ << 7);
        return status;
    }
    cpu_read(addr, ticks) {
        let RS = addr & 1;
        if (RS === 0) {
            let data = this.get_status_byte(ticks);
            return data;
        }
        else {
            this.get_status_byte(ticks);
            if (this.STATUS_RECEIVER_FULL) {
                this.RECEIVE_DATA = this.limiter.read_byte(ticks);
            }
            return this.RECEIVE_DATA;
        }
    }
    cpu_write(addr, data, ticks) {
        let RS = addr & 1;
        if (RS === 0) {
            debug(`ACIA: set control = (${data.toString(2)})`);
            this.CONTROL = data;
            let CR10 = (this.CONTROL & 0b00000011);
            let CR432 = (this.CONTROL & 0b00011100) >> 2;
            let CR65 = (this.CONTROL & 0b01100000) >> 5;
            let CR7 = (this.CONTROL & 0b10000000) >> 7;
            // master reset
            if (CR10 === 0b11) {
                debug(`ACIA: master RESET`);
                this.limiter.reset();
                this.TRANSMIT_DATA = 0;
                this.RECEIVE_DATA = 0;
                this.STATUS_RECEIVER_FULL = 0;
                this.STATUS_TRANSMITTER_EMPTY = 1;
                //this.STATUS_NO_CARRIER        = 1;
                this.STATUS_CLEAR_TO_SEND = 0;
                this.STATUS_FRAMING_ERROR = 0;
                this.STATUS_RECEIVER_OVERRUN = 0;
                this.STATUS_PARITY_ERROR = 0;
                this.STATUS_IRQ = 0;
            }
            else {
                debug(`ACIA: clock divide by ${clock_divider[CR10]}`);
            }
            let { bits, parity, stop_bits } = config_bits[CR432];
            debug(`ACIA: bit config: ${bits} bits/parity ${parity}/stop bits${stop_bits}`);
            debug(`ACIA: CR6|5 = ${CR65.toString(2)}`);
            debug(`ACIA: CR7 = ${CR7}`);
        }
        else {
            debug(`ACIA: set transmit data = (${data})`);
            this.TRANSMIT_DATA = data;
            this.transmit_data(this.TRANSMIT_DATA);
            this.limiter.tx_byte_sent(ticks);
        }
    }
    // external world interface
    // called from BBS connector
    receive_data(data) {
        this.limiter.push_rx_data(data);
        debug(`ACIA: received ${data.length} bytes`);
    }
}
function debug(m) {
    //console.log(m);
}


/***/ }),

/***/ "./src/cbm_6499/speed_limiter.ts":
/*!***************************************!*\
  !*** ./src/cbm_6499/speed_limiter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedLimiter: () => (/* binding */ SpeedLimiter)
/* harmony export */ });
class SpeedLimiter {
    constructor(rx_baudrate, tx_baudrate) {
        this.rx_buffer = [];
        this.rx_ticks = 0;
        this.tx_ticks = 0;
        this.rx_max_count = 985248 / (rx_baudrate / 9);
        this.tx_max_count = 985248 / (tx_baudrate / 9);
    }
    reset() {
        this.rx_buffer = [];
    }
    push_rx_data(data) {
        data.forEach(e => this.rx_buffer.push(e));
    }
    rx_full(ticks) {
        let diff = ticks - this.rx_ticks;
        if (diff < this.rx_max_count)
            return 0;
        return this.rx_buffer.length === 0 ? 0 : 1;
    }
    read_byte(ticks) {
        this.rx_ticks = ticks;
        let data = this.rx_buffer[0];
        this.rx_buffer = this.rx_buffer.slice(1);
        return data;
    }
    tx_empty(ticks) {
        let diff = ticks - this.tx_ticks;
        if (diff < this.tx_max_count)
            return 0;
        return 1;
    }
    tx_byte_sent(ticks) {
        this.tx_ticks = ticks;
        return;
    }
}


/***/ }),

/***/ "./src/emscripten_wrapper.ts":
/*!***********************************!*\
  !*** ./src/emscripten_wrapper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c64: () => (/* binding */ c64),
/* harmony export */   get_wasm_instance: () => (/* binding */ get_wasm_instance),
/* harmony export */   load_wasm: () => (/* binding */ load_wasm)
/* harmony export */ });
/* harmony import */ var _emscripten_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emscripten_module */ "./emscripten_module.js");
/* harmony import */ var _emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator */ "./src/emulator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let wasm_instance;
/*
let rom_load;

let io_read;
let io_write;

let keyboard_reset;
let keyboard_press;
let keyboard_release;
let keyboard_poll;
*/
const c64 = {
    tape: {},
    init: () => { },
    config: (conf) => { },
    ex: (cycles) => { },
    exec: () => { },
    exec_us: (msec) => { },
    vdp: () => { },
    reset: () => { },
    key_down: (key) => { },
    key_up: (key) => { },
    joystick: () => { },
    emu_joy: (joy) => { },
    load_prg: (bytes, size) => { },
    peek: (address) => { return 0; },
    poke: (address, data) => { },
    cas_port: () => { },
    mem_read: (address) => { return 0; },
    mem_write: (address, data) => { },
    mem_read_word: (address) => { return 0; },
    mem_write_word: (address, data) => { },
    go: () => {
        c64.stopped = false;
        (0,_emulator__WEBPACK_IMPORTED_MODULE_1__.oneFrame)(undefined);
    },
    stopped: true,
    // CBM 6499 ADATTATORE TELEMATICO emulation
    set_exrom: (value) => { },
    set_cbm_6499_nbank: (value) => { },
    set_emulate_cbm_6499: (value) => { },
    set_external_irq: (value) => { }
};
function load_wasm() {
    return __awaiter(this, void 0, void 0, function* () {
        let instance = yield (0,_emscripten_module__WEBPACK_IMPORTED_MODULE_0__["default"])();
        c64.init = instance.cwrap("sys_init", null);
        c64.config = instance.cwrap("sys_config", null, ['number']);
        c64.exec = instance.cwrap("sys_exec", null);
        c64.ex = instance.cwrap("sys_ex", ['number']);
        c64.exec_us = instance.cwrap("sys_exec_us", ['number']);
        c64.vdp = instance.cwrap("sys_vdp", null);
        c64.reset = instance.cwrap("sys_reset", null);
        c64.key_down = instance.cwrap("sys_key_down", null, ['number']);
        c64.key_up = instance.cwrap("sys_key_up", null, ['number']);
        c64.joystick = instance.cwrap("sys_joystick", null, ['number']);
        c64.emu_joy = instance.cwrap("sys_set_joystick_type", null, ['number']);
        c64.load_prg = instance.cwrap("sys_quick_load", null, ['array', 'number']);
        //c64.insert_cartdrige = instance.cwrap("sys_insert_rom_cartdrige" , null, ['array', 'number'] );
        c64.peek = instance.cwrap("sys_mem_cpu_rd", 'number', ['number']);
        c64.poke = instance.cwrap("sys_mem_cpu_wr", null, ['number', 'number']);
        //c64.dump_vic = instance.cwrap("sys_dump_vic"   , null );
        c64.cas_port = instance.cwrap("sys_cas_port", 'number');
        /*
        c64.tape.insert = instance.cwrap("sys_insert_tape"  , 'bool', ['array', 'number'] );
        c64.tape.remove = instance.cwrap("sys_remove_tape"  , null );
        c64.tape.play   = instance.cwrap("sys_tape_play"    , null );
        c64.tape.stop   = instance.cwrap("sys_tape_stop"    , null );
        */
        c64.mem_read = c64.peek;
        c64.mem_write = c64.poke;
        c64.mem_write_word = function (address, word) {
            c64.mem_write(address + 0, word & 0xFF);
            c64.mem_write(address + 1, (word & 0xFF00) >> 8);
        };
        c64.mem_read_word = function (address) {
            const lo = c64.mem_read(address + 0);
            const hi = c64.mem_read(address + 1);
            return lo + hi * 256;
        };
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
        c64.set_exrom = instance.cwrap("sys_set_exrom", null, ['bool']);
        c64.set_cbm_6499_nbank = instance.cwrap("sys_set_cbm_6499_nbank", null, ['number']);
        c64.set_emulate_cbm_6499 = instance.cwrap("sys_set_emulate_cbm_6499", null, ['bool']);
        c64.set_external_irq = instance.cwrap("sys_set_external_irq", null, ['bool']);
        wasm_instance = instance;
        return instance;
    });
}
function get_wasm_instance() {
    return wasm_instance;
}


/***/ }),

/***/ "./src/emulator.ts":
/*!*************************!*\
  !*** ./src/emulator.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   oneFrame: () => (/* binding */ oneFrame)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "./src/video.ts");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.ts");
/* harmony import */ var _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./petscii_bbs */ "./src/petscii_bbs.ts");
/* harmony import */ var _fetchProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchProgram */ "./src/fetchProgram.ts");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// TODO start bbs only when required
// TODO riunificare Terminale/PETSCII bbs con 6499
// TODO push CIA TOD to flooh/chips
// TODO update to new c64 in flooh/chips
// normal BBS starts with ?load=nippur72/terminal.prg
// prestel BBS starts with ?cbm6499=true
/******************/






let stopped = false; // allows to stop/resume the emulation
let last_keyboardpoll = 0;
let last_timestamp = 0;
function oneFrame(timestamp) {
    let stamp = timestamp == undefined ? last_timestamp : timestamp;
    let usec = (stamp - last_timestamp) * 1000;
    last_timestamp = stamp;
    if (usec > 32000)
        usec = 32000;
    if (stamp - last_keyboardpoll > 15) {
        (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.poll_keyboard)();
        last_keyboardpoll = stamp;
    }
    _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.exec_us(usec);
    if (!stopped)
        requestAnimationFrame(oneFrame);
}
function main() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.config(0);
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.ex(5000); // wait for memory pattern writing
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_write(204, 1); // flags system not booted yet
        let options = yield (0,_options__WEBPACK_IMPORTED_MODULE_1__.parseQueryStringCommands)();
        // autostart terminal if loaded from bbs.sblendorio.ue or bbs.retrocampus.com
        let href = window.location.href;
        let is_retrocampus = href.match(/^http:\/\/(bbs\.sblendorio\.eu|bbs\.retrocampus\.com)/g);
        _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.petscii.address = (_a = options.wstcp) !== null && _a !== void 0 ? _a : "wss://bbs.sblendorio.eu:8080";
        _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.petscii.protocol = (_b = options.protocol) !== null && _b !== void 0 ? _b : "bbs";
        if (is_retrocampus || options.petsciibbs !== undefined) {
            if (options.load === undefined)
                (0,_fetchProgram__WEBPACK_IMPORTED_MODULE_5__.fetchProgram)("nippur72/terminal.prg");
        }
        (0,_video__WEBPACK_IMPORTED_MODULE_2__.calculateGeometry)();
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.go();
    });
}


/***/ }),

/***/ "./src/externalLoad.ts":
/*!*****************************!*\
  !*** ./src/externalLoad.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   externalLoad: () => (/* binding */ externalLoad)
/* harmony export */ });
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "./src/filesystem.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function externalLoad(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("externalLoad url=" + url);
        try {
            const proxyUrl = 'https://vercel-cors-proxy-kappa.vercel.app/?url=' + encodeURIComponent(url);
            const response = yield fetch(proxyUrl);
            if (!response.ok) {
                let errorBody = "";
                try {
                    errorBody = yield response.text();
                }
                catch (_) { }
                throw new Error(`HTTP error! status: ${response.status}. Body: ${errorBody}`);
            }
            const arrayBuffer = yield response.arrayBuffer();
            const bytes = new Uint8Array(arrayBuffer);
            (0,_filesystem__WEBPACK_IMPORTED_MODULE_0__.loadBytes)(bytes);
            console.log("Successfully loaded external program via Vercel Proxy.");
            return bytes;
        }
        catch (error) {
            console.error("Error loading external program:", error);
            return undefined;
        }
    });
}


/***/ }),

/***/ "./src/fetchProgram.ts":
/*!*****************************!*\
  !*** ./src/fetchProgram.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchProgram: () => (/* binding */ fetchProgram)
/* harmony export */ });
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "./src/filesystem.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function fetchProgram(name) {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log(`wanting to load ${name}`);
        try {
            const response = yield fetch(`software/${name}`);
            if (response.status === 404)
                return false;
            const bytes = new Uint8Array(yield response.arrayBuffer());
            (0,_filesystem__WEBPACK_IMPORTED_MODULE_0__.loadBytes)(bytes);
            return true;
        }
        catch (err) {
            return false;
        }
    });
}


/***/ }),

/***/ "./src/filesystem.ts":
/*!***************************!*\
  !*** ./src/filesystem.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBytes: () => (/* binding */ loadBytes),
/* harmony export */   save_file: () => (/* binding */ save_file)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function loadBytes(bytes) {
    wait_and_load(bytes);
}
function wait_and_load(buffer) {
    if (_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_read(204) !== 0) {
        // cursor not flashing, system not yet booted
        setTimeout(() => wait_and_load(buffer), 100);
        return;
    }
    do_load(buffer);
    console.log(`loaded ${buffer.length} bytes`);
}
function do_load(buffer) {
    _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.load_prg(buffer, buffer.length);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.paste)("RUN\r");
}
const BASTXT = 0x002b;
const PROGND = 0x002d;
function save_file(filename, start, end) {
    return __awaiter(this, void 0, void 0, function* () {
        if (start === undefined)
            start = _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_read_word(BASTXT);
        if (end === undefined)
            end = _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_read_word(PROGND) - 1;
        const prg = [start & 0xFF, start >> 8];
        for (let i = 0, t = start; t <= end; i++, t++) {
            prg.push(_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_read(t));
        }
        const bytes = new Uint8Array(prg);
        yield download(filename, bytes);
        console.log(`saved "${filename}" ${bytes.length} bytes from ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(start, 4)}h to ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(end, 4)}h`);
        //cpu.reset();
    });
}
function download(fileName, bytes) {
    return __awaiter(this, void 0, void 0, function* () {
        let blob = new Blob([bytes], { type: "application/octet-stream" });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, fileName);
        console.log(`downloaded "${fileName}"`);
    });
}


/***/ }),

/***/ "./src/keyboard.ts":
/*!*************************!*\
  !*** ./src/keyboard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   poll_keyboard: () => (/* binding */ poll_keyboard)
/* harmony export */ });
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "./src/audio.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _keyboard_IT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard_IT */ "./src/keyboard_IT.ts");



let last_scroll_lock = undefined;
let control_pressed = false;
let alt_pressed = false;
let shift_pressed = false;
function keyDown(e) {
    if (e.code === "ControlLeft")
        control_pressed = true;
    if (e.code === "AltLeft")
        alt_pressed = true;
    if (e.code === "ShiftLeft")
        shift_pressed = true;
    if (e.code === "ControlRight")
        control_pressed = true;
    if (e.code === "AltRight")
        alt_pressed = true;
    if (e.code === "ShiftRight")
        shift_pressed = true;
    /*
    console.log("keyDown");
    console.log(e);
    */
    // from Chrome 71 audio is suspended by default and must resume within an user-generated event
    (0,_audio__WEBPACK_IMPORTED_MODULE_0__.audioContextResume)();
    if (last_scroll_lock === undefined)
        last_scroll_lock = e.getModifierState("ScrollLock");
    if (e.getModifierState("ScrollLock") != last_scroll_lock) {
        let scroll_lock_key_pressed = e.getModifierState("ScrollLock");
        last_scroll_lock = scroll_lock_key_pressed;
        let emu_joystick = scroll_lock_key_pressed ? 3 : 0;
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.emu_joy(emu_joystick);
        console.log(`Joystick emulation ${emu_joystick == 3 ? "enabled" : "disabled"}`);
    }
    // disable auto repeat, as it is handled on the firmware
    if (e.repeat) {
        e.preventDefault();
        return;
    }
    // *** special (non characters) keys ***
    // RESET key is CTRL+ALT+BREAK
    if (e.code === "Pause" && e.altKey && e.ctrlKey) {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.reset();
        e.preventDefault();
        return;
    }
    // if keyboard ITA
    {
        const hardware_keys = (0,_keyboard_IT__WEBPACK_IMPORTED_MODULE_2__.pckey_to_hardware_keys_ITA)(e.code, e.key, e.shiftKey, e.ctrlKey, e.altKey, e.getModifierState("AltGraph"));
        if (hardware_keys.length === 0)
            return;
        keyboard_buffer.push({ type: "press", hardware_keys });
        //key_pressed.push(hardware_keys);
        key_press_map[e.code] = hardware_keys;
        //console.log(`map after press: ${Object.keys(key_press_map).join(",")}`);
        e.preventDefault();
    }
}
function keyUp(e) {
    if (e.code === "ControlLeft")
        control_pressed = false;
    if (e.code === "AltLeft")
        alt_pressed = false;
    if (e.code === "ShiftLeft")
        shift_pressed = false;
    if (e.code === "ControlRight")
        control_pressed = false;
    if (e.code === "AltRight")
        alt_pressed = false;
    if (e.code === "ShiftRight")
        shift_pressed = false;
    //console.log(e.code);
    /*
    console.log("keyUp");
    console.log(e);
    */
    // fix a bug in Chrome: pressing "ALT-GR @" results in keydown of "ò" instead of "@"
    //if(e.key === 'ò' && e.keyCode === 192 && e.which === 192) {
    //   e.key = '@';
    //}
    const hardware_keys = (0,_keyboard_IT__WEBPACK_IMPORTED_MODULE_2__.pckey_to_hardware_keys_ITA)(e.code, e.key, e.shiftKey, e.ctrlKey, e.altKey, e.getModifierState("AltGraph"));
    if (hardware_keys.length === 0)
        return;
    keyboard_buffer.push({ type: "release", hardware_keys });
    // fix shift problem
    //key_pressed.forEach(k=>keyboard_buffer.push({ type: "release", hardware_keys: k }));
    //key_pressed = [];
    let code = e.code;
    //console.log(`map before release: ${Object.keys(key_press_map).join(",")}`);
    // fix shift problem
    if (key_press_map[code] !== undefined) {
        let k = key_press_map[code];
        keyboard_buffer.push({ type: "release", hardware_keys: k });
        delete key_press_map[code];
    }
    e.preventDefault();
}
// connect DOM events
const element = document;
element.onkeydown = keyDown;
element.onkeyup = keyUp;
element.onkeypress = function (e) {
    if (e.key == "à")
        accentate("a");
    else if (e.key == "è")
        accentate("e");
    else if (e.key == "é")
        accentate("e");
    else if (e.key == "ì")
        accentate("i");
    else if (e.key == "ò")
        accentate("o");
    else if (e.key == "ù")
        accentate("u");
};
/*
function accentate(key) {
   keyDown(fakeEvent(key));
   keyUp(fakeEvent(key));
   keyDown(fakeEvent("'"));
   keyUp(fakeEvent("'"));
}
*/
function accentate(key) {
    setTimeout(() => keyDown(fakeEvent(key)), 0);
    setTimeout(() => keyUp(fakeEvent(key)), 20);
    setTimeout(() => keyDown(fakeEvent("'")), 40);
    setTimeout(() => keyUp(fakeEvent("'")), 60);
}
window.onfocus = function () {
    reset_keyboard(); // release all keys to prevent ALT always pressed after ALT+TAB
};
function fakeEvent(key) {
    return {
        key: key,
        code: "",
        shiftKey: false,
        ctrlKey: false,
        altKey: false,
        getModifierState: () => false,
        preventDefault: () => false
    };
}
let keyboard_buffer = [];
//let key_pressed = [];
let key_press_map = {};
function reset_keyboard() {
    let keys = Object.keys(key_press_map);
    keys.forEach(k => {
        //console.log(`clearing ${k}`);
        keyboard_buffer.push({ type: "release", hardware_keys: key_press_map[k] });
        delete key_press_map[k];
    });
    key_press_map = {};
}
let keyboard_buffer_empty = true;
function poll_keyboard() {
    // poll keyboard
    while (keyboard_buffer.length > 0) {
        let key_event = keyboard_buffer[0];
        keyboard_buffer = keyboard_buffer.slice(1);
        keyboard_buffer_empty = keyboard_buffer.length == 0;
        if (key_event.type === "press") {
            let keys = key_event.hardware_keys;
            //keys.forEach((k) => console.log(k));
            keys.forEach((k) => _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.key_down(k));
        }
        else if (key_event.type === "release") {
            let keys = key_event.hardware_keys;
            //keys.forEach((k) => console.log(k));
            keys.forEach((k) => _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.key_up(k));
            if (keyboard_buffer_empty && !control_pressed && !alt_pressed && !shift_pressed) {
                for (let t = 0; t < 256; t++)
                    _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.key_up(t);
            }
        }
    }
}


/***/ }),

/***/ "./src/keyboard_IT.ts":
/*!****************************!*\
  !*** ./src/keyboard_IT.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pckey_to_hardware_keys_ITA: () => (/* binding */ pckey_to_hardware_keys_ITA)
/* harmony export */ });
/*
     7   6   5   4   3   2   1   0
    --------------------------------
  7| F7  F5  F3  F1  CDN CRT RET DEL    CRT=Cursor-Right, CDN=Cursor-Down
   |
  6| HOM UA  =   RSH /   ;   *   BP     BP=British Pound, RSH=Should be Right-SHIFT,
   |                                    UA=Up Arrow
  5| -   @   :   .   ,   L   P   +
   |
  4| 0   O   K   M   N   J   I   9
   |
  3| 8   U   H   B   V   G   Y   7
   |
  2| 6   T   F   C   X   D   R   5
   |
  1| 4   E   S   Z   LSH A   W   3      LSH=Should be Left-SHIFT
   |
  0| 2   Q   CBM SPC STP CTL LA  1      LA=Left Arrow, CTL=Should be CTRL, STP=RUN/STOP
   |                                    CBM=Commodore key

   */
function pckey_to_hardware_keys_ITA(code, key, shift, control, cbm, altgraph) {
    //console.log(code, key, e);
    //console.log(e.getModifierState("ScrollLock"));
    let hardware_keys = [];
    if (key === "1")
        hardware_keys.push("1".charCodeAt(0));
    if (key === "2")
        hardware_keys.push("2".charCodeAt(0));
    if (key === "3")
        hardware_keys.push("3".charCodeAt(0));
    if (key === "4")
        hardware_keys.push("4".charCodeAt(0));
    if (key === "5")
        hardware_keys.push("5".charCodeAt(0));
    if (key === "6")
        hardware_keys.push("6".charCodeAt(0));
    if (key === "7")
        hardware_keys.push("7".charCodeAt(0));
    if (key === "8")
        hardware_keys.push("8".charCodeAt(0));
    if (key === "9")
        hardware_keys.push("9".charCodeAt(0));
    if (key === "0")
        hardware_keys.push("0".charCodeAt(0));
    if (key === "!")
        hardware_keys.push("!".charCodeAt(0));
    if (key === '"')
        hardware_keys.push('"'.charCodeAt(0));
    if (key === "£")
        hardware_keys.push("~".charCodeAt(0));
    if (key === "#")
        hardware_keys.push("#".charCodeAt(0));
    if (key === "$")
        hardware_keys.push("$".charCodeAt(0));
    if (key === "%")
        hardware_keys.push("%".charCodeAt(0));
    if (key === "&")
        hardware_keys.push("&".charCodeAt(0));
    if (key === "/")
        hardware_keys.push("/".charCodeAt(0));
    if (key === "(")
        hardware_keys.push("(".charCodeAt(0));
    if (key === ")")
        hardware_keys.push(")".charCodeAt(0));
    if (key === "=")
        hardware_keys.push("=".charCodeAt(0));
    if (key === "'")
        hardware_keys.push("'".charCodeAt(0));
    if (key === "?")
        hardware_keys.push("?".charCodeAt(0));
    if (key === "^")
        hardware_keys.push("^".charCodeAt(0));
    if (key === "[")
        hardware_keys.push("[".charCodeAt(0));
    if (key === "]")
        hardware_keys.push("]".charCodeAt(0));
    if (key === "°")
        hardware_keys.push("[".charCodeAt(0));
    if (key === "§")
        hardware_keys.push("]".charCodeAt(0));
    if (key === "+")
        hardware_keys.push("+".charCodeAt(0));
    if (key === "*")
        hardware_keys.push("*".charCodeAt(0));
    if (key === "ç")
        hardware_keys.push("@".charCodeAt(0));
    if (key === "@")
        hardware_keys.push("@".charCodeAt(0));
    if (key === "#")
        hardware_keys.push("#".charCodeAt(0));
    if (key === "<")
        hardware_keys.push("<".charCodeAt(0));
    if (key === ">")
        hardware_keys.push(">".charCodeAt(0));
    if (key === ",")
        hardware_keys.push(",".charCodeAt(0));
    if (key === ";")
        hardware_keys.push(";".charCodeAt(0));
    if (key === ".")
        hardware_keys.push(".".charCodeAt(0));
    if (key === ":")
        hardware_keys.push(":".charCodeAt(0));
    if (key === "-")
        hardware_keys.push("-".charCodeAt(0));
    if (key === "q")
        hardware_keys.push("q".toUpperCase().charCodeAt(0));
    if (key === "w")
        hardware_keys.push("w".toUpperCase().charCodeAt(0));
    if (key === "e")
        hardware_keys.push("e".toUpperCase().charCodeAt(0));
    if (key === "r")
        hardware_keys.push("r".toUpperCase().charCodeAt(0));
    if (key === "t")
        hardware_keys.push("t".toUpperCase().charCodeAt(0));
    if (key === "y")
        hardware_keys.push("y".toUpperCase().charCodeAt(0));
    if (key === "u")
        hardware_keys.push("u".toUpperCase().charCodeAt(0));
    if (key === "i")
        hardware_keys.push("i".toUpperCase().charCodeAt(0));
    if (key === "o")
        hardware_keys.push("o".toUpperCase().charCodeAt(0));
    if (key === "p")
        hardware_keys.push("p".toUpperCase().charCodeAt(0));
    if (key === "a")
        hardware_keys.push("a".toUpperCase().charCodeAt(0));
    if (key === "s")
        hardware_keys.push("s".toUpperCase().charCodeAt(0));
    if (key === "d")
        hardware_keys.push("d".toUpperCase().charCodeAt(0));
    if (key === "f")
        hardware_keys.push("f".toUpperCase().charCodeAt(0));
    if (key === "g")
        hardware_keys.push("g".toUpperCase().charCodeAt(0));
    if (key === "h")
        hardware_keys.push("h".toUpperCase().charCodeAt(0));
    if (key === "j")
        hardware_keys.push("j".toUpperCase().charCodeAt(0));
    if (key === "k")
        hardware_keys.push("k".toUpperCase().charCodeAt(0));
    if (key === "l")
        hardware_keys.push("l".toUpperCase().charCodeAt(0));
    if (key === "z")
        hardware_keys.push("z".toUpperCase().charCodeAt(0));
    if (key === "x")
        hardware_keys.push("x".toUpperCase().charCodeAt(0));
    if (key === "c")
        hardware_keys.push("c".toUpperCase().charCodeAt(0));
    if (key === "v")
        hardware_keys.push("v".toUpperCase().charCodeAt(0));
    if (key === "b")
        hardware_keys.push("b".toUpperCase().charCodeAt(0));
    if (key === "n")
        hardware_keys.push("n".toUpperCase().charCodeAt(0));
    if (key === "m")
        hardware_keys.push("m".toUpperCase().charCodeAt(0));
    if (key === "Q")
        hardware_keys.push("Q".toLowerCase().charCodeAt(0));
    if (key === "W")
        hardware_keys.push("W".toLowerCase().charCodeAt(0));
    if (key === "E")
        hardware_keys.push("E".toLowerCase().charCodeAt(0));
    if (key === "R")
        hardware_keys.push("R".toLowerCase().charCodeAt(0));
    if (key === "T")
        hardware_keys.push("T".toLowerCase().charCodeAt(0));
    if (key === "Y")
        hardware_keys.push("Y".toLowerCase().charCodeAt(0));
    if (key === "U")
        hardware_keys.push("U".toLowerCase().charCodeAt(0));
    if (key === "I")
        hardware_keys.push("I".toLowerCase().charCodeAt(0));
    if (key === "O")
        hardware_keys.push("O".toLowerCase().charCodeAt(0));
    if (key === "P")
        hardware_keys.push("P".toLowerCase().charCodeAt(0));
    if (key === "A")
        hardware_keys.push("A".toLowerCase().charCodeAt(0));
    if (key === "S")
        hardware_keys.push("S".toLowerCase().charCodeAt(0));
    if (key === "D")
        hardware_keys.push("D".toLowerCase().charCodeAt(0));
    if (key === "F")
        hardware_keys.push("F".toLowerCase().charCodeAt(0));
    if (key === "G")
        hardware_keys.push("G".toLowerCase().charCodeAt(0));
    if (key === "H")
        hardware_keys.push("H".toLowerCase().charCodeAt(0));
    if (key === "J")
        hardware_keys.push("J".toLowerCase().charCodeAt(0));
    if (key === "K")
        hardware_keys.push("K".toLowerCase().charCodeAt(0));
    if (key === "L")
        hardware_keys.push("L".toLowerCase().charCodeAt(0));
    if (key === "Z")
        hardware_keys.push("Z".toLowerCase().charCodeAt(0));
    if (key === "X")
        hardware_keys.push("X".toLowerCase().charCodeAt(0));
    if (key === "C")
        hardware_keys.push("C".toLowerCase().charCodeAt(0));
    if (key === "V")
        hardware_keys.push("V".toLowerCase().charCodeAt(0));
    if (key === "B")
        hardware_keys.push("B".toLowerCase().charCodeAt(0));
    if (key === "N")
        hardware_keys.push("N".toLowerCase().charCodeAt(0));
    if (key === "M")
        hardware_keys.push("M".toLowerCase().charCodeAt(0));
    if (key === "_") {
        hardware_keys.push(64);
        hardware_keys.push(0x0F);
    } // simulate underscore
    // FKEYS
    if (code === "F1")
        hardware_keys.push(0xF1);
    if (code === "F2")
        hardware_keys.push(0xF2);
    if (code === "F3")
        hardware_keys.push(0xF3);
    if (code === "F4")
        hardware_keys.push(0xF4);
    if (code === "F5")
        hardware_keys.push(0xF5);
    if (code === "F6")
        hardware_keys.push(0xF6);
    if (code === "F7")
        hardware_keys.push(0xF7);
    if (code === "F8")
        hardware_keys.push(0xF8);
    if (code === "Space")
        hardware_keys.push(0x20);
    if (code === "ArrowLeft")
        hardware_keys.push(0x08);
    if (code === "ArrowRight")
        hardware_keys.push(0x09);
    if (code === "ArrowDown")
        hardware_keys.push(0x0a);
    if (code === "ArrowUp")
        hardware_keys.push(0x0b);
    if (code === "Delete")
        hardware_keys.push(0x01);
    if (code === "Insert")
        hardware_keys.push(0x10);
    if (code === "Backspace" && shift)
        hardware_keys.push(0x10);
    if (code === "Backspace" && !shift)
        hardware_keys.push(0x01);
    if (code === "Enter")
        hardware_keys.push(0x0D);
    if (code === "NumpadEnter")
        hardware_keys.push(0x0D);
    if (code === "Escape")
        hardware_keys.push(0x03); // run stop
    if (code === "Escape" && shift)
        hardware_keys.push(0x07); // shift + run stop
    if (code === "Home")
        hardware_keys.push(0x0C);
    if (code === "Home" && shift)
        hardware_keys.push(0x02);
    if (code === "Backquote")
        hardware_keys.push(0x04); // left arrow
    if (control && !altgraph)
        hardware_keys.push(0x0E); // emulate CTRL
    //if(cbm)                  hardware_keys.push( 0x0F );  // emulate CBM
    if (code === "End")
        hardware_keys.push("@".charCodeAt(0));
    /*
    if(code === "ControlRight") hardware_keys.push( 0x0E );
    if(code === "Tab")          hardware_keys.push( 0x0E );  // emulate CTRL
    */
    if ((code === "ControlLeft" || code === "ControlRight") && !altgraph)
        hardware_keys.push(0x0E); // emulate CTRL
    if ((code === "AltLeft" || code == "AltRight"))
        hardware_keys.push(0x0F); // emulate CBM
    if (code === "PageUp")
        hardware_keys.push(0xFF); // emulate RESTORE
    if (code === "PageDown")
        hardware_keys.push(35); // "#"
    return hardware_keys;
}


/***/ }),

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseQueryStringCommands: () => (/* binding */ parseQueryStringCommands)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _fetchProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchProgram */ "./src/fetchProgram.ts");
/* harmony import */ var _externalLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./externalLoad */ "./src/externalLoad.ts");
/* harmony import */ var _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cbm_6499/cbm_6499 */ "./src/cbm_6499/cbm_6499.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function getQueryStringObject() {
    let a = window.location.search.split("&");
    let o = a.reduce((o, v) => {
        var kv = v.split("=");
        const key = kv[0].replace("?", "");
        let value = kv[1];
        o[key] = value;
        return o;
    }, {});
    return o;
}
function parseQueryStringCommands() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let options = getQueryStringObject();
        if (options.config !== undefined) {
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.config(Number(options.config));
        }
        if (options.joy !== undefined) {
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.emu_joy(Number(options.joy));
            console.log(`Joystick emulation ${Number(options.joy) != 0 ? "enabled" : "disabled"}`);
        }
        if (options.load !== undefined) {
            const name = options.load;
            if (name.startsWith("http")) {
                // external load
                yield (0,_externalLoad__WEBPACK_IMPORTED_MODULE_2__.externalLoad)(name);
            }
            else {
                // internal load
                yield (0,_fetchProgram__WEBPACK_IMPORTED_MODULE_1__.fetchProgram)(name);
            }
        }
        if (options.cbm6499 !== undefined) {
            _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_3__.videotel.address = (_a = options.wstcp) !== null && _a !== void 0 ? _a : "wss://bbs.sblendorio.eu:8081";
            _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_3__.videotel.protocol = (_b = options.protocol) !== null && _b !== void 0 ? _b : "bbs";
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.set_exrom(true);
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.set_emulate_cbm_6499(true);
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.reset();
        }
        return options;
    });
}


/***/ }),

/***/ "./src/petscii_bbs.ts":
/*!****************************!*\
  !*** ./src/petscii_bbs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modem_read: () => (/* binding */ modem_read),
/* harmony export */   modem_write: () => (/* binding */ modem_write),
/* harmony export */   petscii: () => (/* binding */ petscii)
/* harmony export */ });
/* harmony import */ var _bbs_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbs_connector */ "./src/bbs_connector.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
//********************************************************************


let modem_transmit_buffer = [];
let modem_receive_buffer = [];
const MODEM_DATA_OUT = 0xD7F2;
const MODEM_DATA_IN = 0xD7F0;
const MODEM_DATA_REQ = 0xD7F3;
const MODEM_ACK = 0xD7F1;
const MODEM_CONNST = 0xD7F4;
// function called from C64 when CPU reads in the range $D7F0-$D7FF
function modem_read(addr) {
    if (addr == MODEM_DATA_IN) {
        if (modem_receive_buffer.length == 0)
            return 0;
        else
            return modem_receive_buffer[0];
    }
    else if (addr == MODEM_DATA_REQ) {
        if (modem_receive_buffer.length == 0)
            return 0;
        else
            return 255;
    }
    else if (addr == MODEM_CONNST) {
        if (!petscii.connected)
            return 2;
        else
            return 0;
    }
}
let modem_state = 0;
// function called from C64 when CPU writes in the range $D7F0-$D7FF
function modem_write(addr, data) {
    if (addr == MODEM_ACK) {
        if (data == 0) {
            modem_state = 0;
        }
        if (data == 1 && modem_state == 0) {
            modem_receive_buffer = modem_receive_buffer.slice(1);
            modem_state = 1;
        }
    }
    if (addr == MODEM_DATA_OUT) {
        modem_transmit_buffer.push(data);
        petscii.send_data_to_bbs(modem_transmit_buffer);
        modem_transmit_buffer = [];
        if (!petscii.connected)
            petscii.connect();
    }
}
// **********************************************************************************************
let petscii = new _bbs_connector__WEBPACK_IMPORTED_MODULE_0__.BBSConnector();
petscii.on_error = (err) => {
    console.log('BBS: connection error');
    printm(`${new Date().toLocaleTimeString()} ERROR CONNECTING TO WEBSOCKET\r`);
};
petscii.on_open = () => {
    console.log('BBS: connected');
    // printm(`${new Date().toLocaleTimeString()} CONNECTED\r`);
};
petscii.on_close = () => {
    console.log('BBS: disconnected');
};
petscii.on_data = (bytes) => {
    bytes.forEach(e => modem_receive_buffer.push(e));
};
function printm(msg) {
    let data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.string2Uint8Array)(msg);
    data.forEach(e => modem_receive_buffer.push(e));
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   array2String: () => (/* binding */ array2String),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   paste: () => (/* binding */ paste),
/* harmony export */   string2Uint8Array: () => (/* binding */ string2Uint8Array)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/**** utility functions ****/

function hex(value, size) {
    if (size === undefined)
        size = 2;
    let s = "0000" + value.toString(16);
    return s.substr(s.length - size);
}
function pasteLine(text) {
    const lines = text.split("\n");
    for (let t = 0; t < lines.length; t++) {
        const linea = lines[t];
        console.log(linea);
        paste(linea);
        pasteChar(13); // CR
    }
    console.log("pasted!");
}
function paste(line) {
    for (let t = 0; t < line.length; t++) {
        let c = line.charCodeAt(t);
        pasteChar(c);
    }
}
function pasteChar(c) {
    while (_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.peek(198) !== 0) {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.ex(16000);
    }
    _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.poke(631, c);
    _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.poke(198, 1);
}
/*
function dumpMem(start, end, rows) {
   if(end==undefined) end=start+15;
   if(rows==undefined) rows=16;
   let s="\r\n";
   for(let r=start;r<=end;r+=rows) {
      s+= hex(r, 4) + ": ";
      for(let c=0;c<rows && (r+c)<=end;c++) {
         const byte = mem_read(r+c);
         s+= hex(byte)+" ";
      }
      for(let c=0;c<rows && (r+c)<=end;c++) {
         const byte = mem_read(r+c);
         s+= (byte>32 && byte<127) ? String.fromCharCode(byte) : '.' ;
      }
      s+="\n";
   }
   console.log(s);
}

function hexDump(memory, start, end, rows) {
   let s="";
   for(let r=start;r<end;r+=rows) {
      s+= hex(r, 4) + ": ";
      for(let c=0;c<rows;c++) {
         const byte = memory[r+c];
         s+= hex(byte)+" ";
      }
      for(let c=0;c<rows;c++) {
         const byte = memory[r+c];
         s+= (byte>32 && byte<127) ? String.fromCharCode(byte) : '.' ;
      }
      s+="\n";
   }
   return s;
}
*/
/*
function bin(value, size) {
   if(size === undefined) size = 8;
   let s = "0000000000000000" + value.toString(2);
   return s.substr(s.length - size);
}

function cpu_status() {
   const state = cpu.getState();
   return `A=${hex(state.a)} BC=${hex(state.b)}${hex(state.c)} DE=${hex(state.d)}${hex(state.e)} HL=${hex(state.h)}${hex(state.l)} IX=${hex(state.ix,4)} IY=${hex(state.iy,4)} SP=${hex(state.sp,4)} PC=${hex(state.pc,4)} S=${state.flags.S}, Z=${state.flags.Z}, Y=${state.flags.Y}, H=${state.flags.H}, X=${state.flags.X}, P=${state.flags.P}, N=${state.flags.N}, C=${state.flags.C}`;
}
*/
/*
function wait(time) {
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve();
      }, time);
   });
}

function zap() {
   ram.forEach((e,i)=>ram[i]=0x00);
   let state = cpu.getState();
   state.halted = true;
   cpu.setState(state);
}

function power() {
   zap();
   setTimeout(()=>cpu.reset(), 200);
}

function stop() {
   stopAudio();
   stopped = true;
   console.log("emulation stopped");
}

function go() {
   stopped = false;
   oneFrame();
   console.log("emulation resumed");
}

function info() {
   const average = averageFrameTime/1000;
   console.log(`frame rate: average ${Math.round(average*10,2)/10} ms (${Math.round(1/average*1000)} Hz)`);
}

function set_bit(value, bitn) {
   return value | (1<<bitn);
}

function reset_bit(value, bitn) {
   return value & ~(1<<bitn);
}

function set(value, bitmask) {
   return value | bitmask;
}

function sleep(msec) {
   return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(), msec);
   });
}


function reset(value, bitmask) {
   return value & (0xFF ^ bitmask);
}

function dumpPointers() {
   console.log(`
   +------------------------+ <-  (0x${hex(PROGND,4)}) ${hex(mem_read_word(PROGND),4)}
   |     BASIC program      |
   +------------------------+ <- TXTTAB (0x${hex(BASTXT,4)}) ${hex(mem_read_word(BASTXT),4)}
   |    System variables    |
   +------------------------+ 0x8000
`);
}

let debugBefore = undefined;
let debugAfter = undefined;

function bit(b,n) {
   return (b & (1<<n))>0 ? 1 : 0;
}

function not_bit(b,n) {
   return (b & (1<<n))>0 ? 0 : 1;
}

function dumpStack() {
   const sp = cpu.getState().sp;

   for(let t=sp;t<=0xffff;t+=2) {
      const word = mem_read_word(t);
      console.log(`${hex(t,4)}: ${hex(word,4)}  (${word})`);
   }
}

function endsWith(s, value) {
   return s.substr(-value.length) === value;
}

function copyArray(source, dest) {
   source.forEach((e,i)=>dest[i] = e);
}

function make_lm(start, end, rows) {
   let s;
   s = `10 FOR T=&H${hex(start,4)} TO &H${hex(end,4)}\n`;
   s+= `20 READ B:POKE T,B\n`;
   s+= `30 NEXT\n`;
   s+= `40 SYS &H${hex(start,4)}\n`;
   s+= `50 END\n`;
   let nline = 1000;
   if(rows==undefined) rows=8;
   for(let r=start;r<=end;r+=rows) {
      s+= `${nline} DATA `;
      for(let c=0;c<rows && (r+c)<=end;c++) {
         const byte = mem_read(r+c);
         s+= `${byte}`;
         if(c!=rows-1 && (r+c)!=end) s+=",";
      }
      s+="\n";
      nline += 10;
   }
   console.log(s);
}

function tmr()
{
   return mem_read_word(TMRCNT) + (mem_read_word(TMRCNT+2) << 16);
}

let counter = 0;
let counter_avg = 0;

function start_counter() {
   counter = new Date().valueOf();
}

function stop_counter() {
   let now = new Date().valueOf();
   let cnt = counter;
   if(cnt === 0) cnt = now
   let elapsed = now - cnt;
   counter_avg = 0.9 * counter_avg + 0.1 * elapsed;
   return counter_avg;
}

let LED = 0;
function led_read() {
   return LED;
}

function led_write(value) {
   LED = value;
}

// make a long url from an existing saved program
async function makeBase64(fileName) {
   const bytes = await readFile(fileName);
   let long_url = window.btoa(bytes);
   console.log(`https://nippur72.github.io/c64-emu?b=${long_url}`);
}
*/
function string2Uint8Array(str) {
    let arr = [];
    for (let t = 0; t < str.length; t++)
        arr.push(str.charCodeAt(t) & 0xFF);
    return new Uint8Array(arr);
}
function array2String(data) {
    let str = "";
    for (var index = 0; index < data.length; index++)
        str += String.fromCharCode(data[index]);
    return str;
}


/***/ }),

/***/ "./src/video.ts":
/*!**********************!*\
  !*** ./src/video.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateGeometry: () => (/* binding */ calculateGeometry),
/* harmony export */   vdp_screen_update: () => (/* binding */ vdp_screen_update)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");

// good values for CRT PAL
const SCREEN_W = 392;
const SCREEN_H = 272;
const POS_X = 3 * 8;
const POS_Y = 3 * 8;
const PIXEL_WIDTH = 2;
/*
// values for debug
let SCREEN_W = 284;
let SCREEN_H = 312;
let POS_X = 0;
let POS_Y = 0;
*/
let saturation = 1.0;
function calculateGeometry() {
    // canvas is the outer canvas where the aspect ratio is corrected
    let canvas = document.getElementById("canvas");
    canvas.width = SCREEN_W * PIXEL_WIDTH - (POS_X * PIXEL_WIDTH);
    canvas.height = SCREEN_H * PIXEL_WIDTH - (POS_Y * PIXEL_WIDTH);
}
/**************************************************/
/*
let WW = 232;
let HH = 272;
*/
let WW = SCREEN_W;
let HH = SCREEN_H;
let vic_ii_canvas = document.getElementById("canvas");
let vic_ii_context = vic_ii_canvas.getContext('2d');
function vdp_screen_update(ptr) {
    /*
    // 1 pixel wide version
    let size1 = WW*HH*4;
    const heap = get_wasm_instance().HEAPU8.subarray(ptr,ptr+size1);
    const data = new Uint8ClampedArray(heap);
    const img = new ImageData(data, WW, HH);
    vic_ii_context!.putImageData(img, 0, 0);
    return;
    */
    // 2 pixel wide version
    let size1 = WW * HH * 4 * PIXEL_WIDTH * PIXEL_WIDTH;
    const heap = (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.get_wasm_instance)().HEAPU8.subarray(ptr, ptr + size1);
    const data = new Uint8ClampedArray(heap);
    const img = new ImageData(data, WW * PIXEL_WIDTH, HH * PIXEL_WIDTH);
    vic_ii_context.putImageData(img, -POS_X, -POS_Y);
}
/*

// old drawing method

let vic_ii_imageData = vic_ii_context!.createImageData(WW*2, HH*2);
let bmp = new Uint32Array(vic_ii_imageData.data.buffer);

export function vdp_screen_update_old(ptr: number) {
   let start = ptr / get_wasm_instance().HEAPU32.BYTES_PER_ELEMENT;
   let size = WW*HH;
   let buffer = get_wasm_instance().HEAPU32.subarray(start,start+size);

   let ptr0 = 0;
   let ptr1 = 0;
   let ptr2 = WW*2;

   for(let y=0;y<HH;y++) {
      for(let x=0;x<WW;x++) {
         let pixel = buffer[ptr0];
         bmp[ptr1++] = pixel;
         bmp[ptr1++] = pixel;
         bmp[ptr2++] = pixel;
         bmp[ptr2++] = pixel;
         ptr0++;
      }
      ptr1 += WW*2;
      ptr2 += WW*2;
   }
   
   // old drawing method
   //vic_ii_imageData.data.set(imagedata_buf8);
   //vic_ii_context.putImageData(vic_ii_imageData, -POS_X, -POS_Y);
   
   // new method
   vic_ii_context!.putImageData(vic_ii_imageData, -POS_X, -POS_Y);

   //frames++;
   //if(end_of_frame_hook !== undefined) end_of_frame_hook();
}
*/


/***/ }),

/***/ "./emscripten_module.wasm":
/*!********************************!*\
  !*** ./emscripten_module.wasm ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17b9ed45488d86f8daef.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "./src/emscripten_wrapper.ts");
/* harmony import */ var _emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator */ "./src/emulator.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "./src/video.ts");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./src/audio.ts");
/* harmony import */ var _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./petscii_bbs */ "./src/petscii_bbs.ts");
/* harmony import */ var _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cbm_6499/cbm_6499 */ "./src/cbm_6499/cbm_6499.ts");
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filesystem */ "./src/filesystem.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser */ "./src/browser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// publish on global
window.vdp_screen_update = _video__WEBPACK_IMPORTED_MODULE_2__.vdp_screen_update;
window.audio_buf_ready = _audio__WEBPACK_IMPORTED_MODULE_3__.audio_buf_ready;
window.modem_read = _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.modem_read;
window.modem_write = _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.modem_write;
window.save_file = _filesystem__WEBPACK_IMPORTED_MODULE_6__.save_file;
window.cbm_6499_reset = _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_5__.cbm_6499_reset;
window.cbm_6499_read = _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_5__.cbm_6499_read;
window.cbm_6499_write = _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_5__.cbm_6499_write;
window.c64 = _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.load_wasm)();
        (0,_emulator__WEBPACK_IMPORTED_MODULE_1__.main)();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUU5RSxJQUFHLEdBQUcsS0FBSyxHQUFHLEVBQVU7UUFBRSxhQUFhLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUFHLENBQUUsc0JBQXNCO0lBRXpHLFFBQVE7SUFDUixJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUV2RCxJQUFHLElBQUksS0FBSyxPQUFPO1FBQVMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxXQUFXO1FBQUssYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxZQUFZO1FBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxXQUFXO1FBQUssYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxTQUFTO1FBQU8sYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUV4RCxJQUFHLElBQUksS0FBSyxRQUFRO1FBQVEsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxRQUFRO1FBQVEsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUV4RCxJQUFHLElBQUksS0FBSyxXQUFXLElBQUssS0FBSztRQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDL0QsSUFBRyxJQUFJLEtBQUssV0FBVyxJQUFJLENBQUMsS0FBSztRQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFFL0QsSUFBRyxJQUFJLEtBQUssT0FBTztRQUFTLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssYUFBYTtRQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFFeEQsSUFBRyxJQUFJLEtBQUssUUFBUTtRQUFXLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUMsQ0FBRSxXQUFX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QUFlLENBQUM7QUFDakQsTUFBYyxDQUFDLFVBQVUsR0FBRyxvREFBVSxDQUFDO0FBQ3ZDLE1BQWMsQ0FBQyxXQUFXLEdBQUcscURBQVcsQ0FBQztBQUN6QyxNQUFjLENBQUMsU0FBUyxHQUFHLGtEQUFTLENBQUM7QUFFckMsTUFBYyxDQUFDLGNBQWMsR0FBRyw4REFBYyxDQUFDO0FBQy9DLE1BQWMsQ0FBQyxhQUFhLEdBQUksNkRBQWEsQ0FBQztBQUM5QyxNQUFjLENBQUMsY0FBYyxHQUFHLDhEQUFjLENBQUM7QUFFL0MsTUFBYyxDQUFDLEdBQUcsR0FBRyxvREFBRyxDQUFDO0FBRTFCLENBQUM7O1FBQ0UsTUFBTSw4REFBUyxFQUFFLENBQUM7UUFDbEIsK0NBQUksRUFBRSxDQUFDO0lBQ1YsQ0FBQztDQUFBLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYzY0LWVtdS8uL2Vtc2NyaXB0ZW5fbW9kdWxlLmpzIiwid2VicGFjazovL2M2NC1lbXUvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9GaWxlU2F2ZXIuanMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uL3NyYy9hdWRpby50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2Jic19jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uL3NyYy9icm93c2VyLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvY2JtXzY0OTkvY2JtXzY0OTkudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uL3NyYy9jYm1fNjQ5OS9tNjgyMS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2NibV82NDk5L202ODUwLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvY2JtXzY0OTkvc3BlZWRfbGltaXRlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2Vtc2NyaXB0ZW5fd3JhcHBlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2VtdWxhdG9yLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvZXh0ZXJuYWxMb2FkLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvZmV0Y2hQcm9ncmFtLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvZmlsZXN5c3RlbS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2tleWJvYXJkLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMva2V5Ym9hcmRfSVQudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uL3NyYy9vcHRpb25zLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi9zcmMvcGV0c2NpaV9iYnMudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL3ZpZGVvLnRzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZW1zY3JpcHRlbl9tb2R1bGUgPSAoKCkgPT4ge1xyXG4gIHZhciBfc2NyaXB0RGlyID0gaW1wb3J0Lm1ldGEudXJsO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbmZ1bmN0aW9uKGVtc2NyaXB0ZW5fbW9kdWxlID0ge30pICB7XHJcblxyXG52YXIgTW9kdWxlPXR5cGVvZiBlbXNjcmlwdGVuX21vZHVsZSE9XCJ1bmRlZmluZWRcIj9lbXNjcmlwdGVuX21vZHVsZTp7fTt2YXIgcmVhZHlQcm9taXNlUmVzb2x2ZSxyZWFkeVByb21pc2VSZWplY3Q7TW9kdWxlW1wicmVhZHlcIl09bmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3JlYWR5UHJvbWlzZVJlc29sdmU9cmVzb2x2ZTtyZWFkeVByb21pc2VSZWplY3Q9cmVqZWN0fSk7dmFyIG1vZHVsZU92ZXJyaWRlcz1PYmplY3QuYXNzaWduKHt9LE1vZHVsZSk7dmFyIGFyZ3VtZW50c189W107dmFyIHRoaXNQcm9ncmFtPVwiLi90aGlzLnByb2dyYW1cIjt2YXIgcXVpdF89KHN0YXR1cyx0b1Rocm93KT0+e3Rocm93IHRvVGhyb3d9O3ZhciBFTlZJUk9OTUVOVF9JU19XRUI9dHJ1ZTt2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSPWZhbHNlO3ZhciBzY3JpcHREaXJlY3Rvcnk9XCJcIjtmdW5jdGlvbiBsb2NhdGVGaWxlKHBhdGgpe2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3JldHVybiBNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKHBhdGgsc2NyaXB0RGlyZWN0b3J5KX1yZXR1cm4gc2NyaXB0RGlyZWN0b3J5K3BhdGh9dmFyIHJlYWRfLHJlYWRBc3luYyxyZWFkQmluYXJ5LHNldFdpbmRvd1RpdGxlO2lmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKXtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3NjcmlwdERpcmVjdG9yeT1zZWxmLmxvY2F0aW9uLmhyZWZ9ZWxzZSBpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCImJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3NjcmlwdERpcmVjdG9yeT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY31pZihfc2NyaXB0RGlyKXtzY3JpcHREaXJlY3Rvcnk9X3NjcmlwdERpcn1pZihzY3JpcHREaXJlY3RvcnkuaW5kZXhPZihcImJsb2I6XCIpIT09MCl7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZWxzZXtzY3JpcHREaXJlY3Rvcnk9XCJcIn17cmVhZF89dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5zZW5kKG51bGwpO3JldHVybiB4aHIucmVzcG9uc2VUZXh0fTtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3JlYWRCaW5hcnk9dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfX1yZWFkQXN5bmM9KHVybCxvbmxvYWQsb25lcnJvcik9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCx0cnVlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIub25sb2FkPSgpPT57aWYoeGhyLnN0YXR1cz09MjAwfHx4aHIuc3RhdHVzPT0wJiZ4aHIucmVzcG9uc2Upe29ubG9hZCh4aHIucmVzcG9uc2UpO3JldHVybn1vbmVycm9yKCl9O3hoci5vbmVycm9yPW9uZXJyb3I7eGhyLnNlbmQobnVsbCl9fXNldFdpbmRvd1RpdGxlPXRpdGxlPT5kb2N1bWVudC50aXRsZT10aXRsZX1lbHNle312YXIgb3V0PU1vZHVsZVtcInByaW50XCJdfHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO3ZhciBlcnI9TW9kdWxlW1wicHJpbnRFcnJcIl18fGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oTW9kdWxlLG1vZHVsZU92ZXJyaWRlcyk7bW9kdWxlT3ZlcnJpZGVzPW51bGw7aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInF1aXRcIl0pcXVpdF89TW9kdWxlW1wicXVpdFwiXTt2YXIgd2FzbUJpbmFyeTtpZihNb2R1bGVbXCJ3YXNtQmluYXJ5XCJdKXdhc21CaW5hcnk9TW9kdWxlW1wid2FzbUJpbmFyeVwiXTt2YXIgbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdfHx0cnVlO2lmKHR5cGVvZiBXZWJBc3NlbWJseSE9XCJvYmplY3RcIil7YWJvcnQoXCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkXCIpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgRVhJVFNUQVRVUzt2YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLGhlYXAsb3V0SWR4LG1heEJ5dGVzVG9Xcml0ZSl7aWYoIShtYXhCeXRlc1RvV3JpdGU+MCkpcmV0dXJuIDA7dmFyIHN0YXJ0SWR4PW91dElkeDt2YXIgZW5kSWR4PW91dElkeCttYXhCeXRlc1RvV3JpdGUtMTtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgdT1zdHIuY2hhckNvZGVBdChpKTtpZih1Pj01NTI5NiYmdTw9NTczNDMpe3ZhciB1MT1zdHIuY2hhckNvZGVBdCgrK2kpO3U9NjU1MzYrKCh1JjEwMjMpPDwxMCl8dTEmMTAyM31pZih1PD0xMjcpe2lmKG91dElkeD49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPXV9ZWxzZSBpZih1PD0yMDQ3KXtpZihvdXRJZHgrMT49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTE5Mnx1Pj42O2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2UgaWYodTw9NjU1MzUpe2lmKG91dElkeCsyPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjI0fHU+PjEyO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2V7aWYob3V0SWR4KzM+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yNDB8dT4+MTg7aGVhcFtvdXRJZHgrK109MTI4fHU+PjEyJjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfX1oZWFwW291dElkeF09MDtyZXR1cm4gb3V0SWR4LXN0YXJ0SWR4fWZ1bmN0aW9uIHN0cmluZ1RvVVRGOChzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7cmV0dXJuIHN0cmluZ1RvVVRGOEFycmF5KHN0cixIRUFQVTgsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl9dmFyIEhFQVA4LEhFQVBVOCxIRUFQMTYsSEVBUFUxNixIRUFQMzIsSEVBUFUzMixIRUFQRjMyLEhFQVBGNjQ7ZnVuY3Rpb24gdXBkYXRlTWVtb3J5Vmlld3MoKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjtNb2R1bGVbXCJIRUFQOFwiXT1IRUFQOD1uZXcgSW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVAxNlwiXT1IRUFQMTY9bmV3IEludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUDMyXCJdPUhFQVAzMj1uZXcgSW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQVThcIl09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVBVMTZcIl09SEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUzMlwiXT1IRUFQVTMyPW5ldyBVaW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjMyXCJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjY0XCJdPUhFQVBGNjQ9bmV3IEZsb2F0NjRBcnJheShiKX12YXIgd2FzbVRhYmxlO3ZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRQT1NUUlVOX189W107dmFyIHJ1bnRpbWVJbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBwcmVSdW4oKXtpZihNb2R1bGVbXCJwcmVSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVSdW5cIl09W01vZHVsZVtcInByZVJ1blwiXV07d2hpbGUoTW9kdWxlW1wicHJlUnVuXCJdLmxlbmd0aCl7YWRkT25QcmVSdW4oTW9kdWxlW1wicHJlUnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pfWZ1bmN0aW9uIGluaXRSdW50aW1lKCl7cnVudGltZUluaXRpYWxpemVkPXRydWU7Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyl9ZnVuY3Rpb24gcG9zdFJ1bigpe2lmKE1vZHVsZVtcInBvc3RSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwb3N0UnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicG9zdFJ1blwiXT1bTW9kdWxlW1wicG9zdFJ1blwiXV07d2hpbGUoTW9kdWxlW1wicG9zdFJ1blwiXS5sZW5ndGgpe2FkZE9uUG9zdFJ1bihNb2R1bGVbXCJwb3N0UnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUE9TVFJVTl9fKX1mdW5jdGlvbiBhZGRPblByZVJ1bihjYil7X19BVFBSRVJVTl9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uSW5pdChjYil7X19BVElOSVRfXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPblBvc3RSdW4oY2Ipe19fQVRQT1NUUlVOX18udW5zaGlmdChjYil9dmFyIHJ1bkRlcGVuZGVuY2llcz0wO3ZhciBydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsO3ZhciBkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtmdW5jdGlvbiBhZGRSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMrKztpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9fWZ1bmN0aW9uIHJlbW92ZVJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcy0tO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX1pZihydW5EZXBlbmRlbmNpZXM9PTApe2lmKHJ1bkRlcGVuZGVuY3lXYXRjaGVyIT09bnVsbCl7Y2xlYXJJbnRlcnZhbChydW5EZXBlbmRlbmN5V2F0Y2hlcik7cnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbH1pZihkZXBlbmRlbmNpZXNGdWxmaWxsZWQpe3ZhciBjYWxsYmFjaz1kZXBlbmRlbmNpZXNGdWxmaWxsZWQ7ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7Y2FsbGJhY2soKX19fWZ1bmN0aW9uIGFib3J0KHdoYXQpe2lmKE1vZHVsZVtcIm9uQWJvcnRcIl0pe01vZHVsZVtcIm9uQWJvcnRcIl0od2hhdCl9d2hhdD1cIkFib3J0ZWQoXCIrd2hhdCtcIilcIjtlcnIod2hhdCk7QUJPUlQ9dHJ1ZTtFWElUU1RBVFVTPTE7d2hhdCs9XCIuIEJ1aWxkIHdpdGggLXNBU1NFUlRJT05TIGZvciBtb3JlIGluZm8uXCI7dmFyIGU9bmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcih3aGF0KTtyZWFkeVByb21pc2VSZWplY3QoZSk7dGhyb3cgZX12YXIgZGF0YVVSSVByZWZpeD1cImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIjtmdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpe3JldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpfXZhciB3YXNtQmluYXJ5RmlsZTtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXt3YXNtQmluYXJ5RmlsZT1cImVtc2NyaXB0ZW5fbW9kdWxlLndhc21cIjtpZighaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSl7d2FzbUJpbmFyeUZpbGU9bG9jYXRlRmlsZSh3YXNtQmluYXJ5RmlsZSl9fWVsc2V7d2FzbUJpbmFyeUZpbGU9bmV3IFVSTChcImVtc2NyaXB0ZW5fbW9kdWxlLndhc21cIixpbXBvcnQubWV0YS51cmwpLmhyZWZ9ZnVuY3Rpb24gZ2V0QmluYXJ5KGZpbGUpe3RyeXtpZihmaWxlPT13YXNtQmluYXJ5RmlsZSYmd2FzbUJpbmFyeSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHdhc21CaW5hcnkpfWlmKHJlYWRCaW5hcnkpe3JldHVybiByZWFkQmluYXJ5KGZpbGUpfXRocm93XCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwifWNhdGNoKGVycil7YWJvcnQoZXJyKX19ZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZSgpe2lmKCF3YXNtQmluYXJ5JiYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpKXtpZih0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtpZighcmVzcG9uc2VbXCJva1wiXSl7dGhyb3dcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiK3dhc21CaW5hcnlGaWxlK1wiJ1wifXJldHVybiByZXNwb25zZVtcImFycmF5QnVmZmVyXCJdKCl9KS5jYXRjaChmdW5jdGlvbigpe3JldHVybiBnZXRCaW5hcnkod2FzbUJpbmFyeUZpbGUpfSl9fXJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX1mdW5jdGlvbiBjcmVhdGVXYXNtKCl7dmFyIGluZm89e1wiYVwiOndhc21JbXBvcnRzfTtmdW5jdGlvbiByZWNlaXZlSW5zdGFuY2UoaW5zdGFuY2UsbW9kdWxlKXt2YXIgZXhwb3J0cz1pbnN0YW5jZS5leHBvcnRzO01vZHVsZVtcImFzbVwiXT1leHBvcnRzO3dhc21NZW1vcnk9TW9kdWxlW1wiYXNtXCJdW1wiZFwiXTt1cGRhdGVNZW1vcnlWaWV3cygpO3dhc21UYWJsZT1Nb2R1bGVbXCJhc21cIl1bXCJDXCJdO2FkZE9uSW5pdChNb2R1bGVbXCJhc21cIl1bXCJlXCJdKTtyZW1vdmVSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKX1hZGRSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKTtmdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdChyZXN1bHQpe3JlY2VpdmVJbnN0YW5jZShyZXN1bHRbXCJpbnN0YW5jZVwiXSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlcil7cmV0dXJuIGdldEJpbmFyeVByb21pc2UoKS50aGVuKGZ1bmN0aW9uKGJpbmFyeSl7cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSxpbmZvKX0pLnRoZW4oZnVuY3Rpb24oaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZX0pLnRoZW4ocmVjZWl2ZXIsZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiBcIityZWFzb24pO2Fib3J0KHJlYXNvbil9KX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFzeW5jKCl7aWYoIXdhc21CaW5hcnkmJnR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZz09XCJmdW5jdGlvblwiJiYhaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSYmdHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaCh3YXNtQmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlc3VsdD1XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXNwb25zZSxpbmZvKTtyZXR1cm4gcmVzdWx0LnRoZW4ocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQsZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogXCIrcmVhc29uKTtlcnIoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCl9KX0pfWVsc2V7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpfX1pZihNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0pe3RyeXt2YXIgZXhwb3J0cz1Nb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0oaW5mbyxyZWNlaXZlSW5zdGFuY2UpO3JldHVybiBleHBvcnRzfWNhdGNoKGUpe2VycihcIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6IFwiK2UpO3JlYWR5UHJvbWlzZVJlamVjdChlKX19aW5zdGFudGlhdGVBc3luYygpLmNhdGNoKHJlYWR5UHJvbWlzZVJlamVjdCk7cmV0dXJue319dmFyIEFTTV9DT05TVFM9ezU0NzY4OigpPT57cmV0dXJuIGNibV82NDk5X3Jlc2V0KCl9LDU0Nzk3OigkMCwkMSk9PnthdWRpb19idWZfcmVhZHkoJDAsJDEpfSw1NDgyNjokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNTQ4NTM6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDU0ODgwOiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw1NDkwNzokMD0+e3JldHVybiBtb2RlbV9yZWFkKCQwKX0sNTQ5MzQ6KCQwLCQxKT0+e21vZGVtX3dyaXRlKCQwLCQxKX0sNTQ5NTg6KCQwLCQxKT0+e3JldHVybiBjYm1fNjQ5OV9yZWFkKCQwLCQxKX0sNTQ5OTI6KCQwLCQxKT0+e2NibV82NDk5X3dyaXRlKCQwLCQxKX19O2Z1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBfX19hc3NlcnRfZmFpbChjb25kaXRpb24sZmlsZW5hbWUsbGluZSxmdW5jKXthYm9ydChcIkFzc2VydGlvbiBmYWlsZWQ6IFwiK1VURjhUb1N0cmluZyhjb25kaXRpb24pK1wiLCBhdDogXCIrW2ZpbGVuYW1lP1VURjhUb1N0cmluZyhmaWxlbmFtZSk6XCJ1bmtub3duIGZpbGVuYW1lXCIsbGluZSxmdW5jP1VURjhUb1N0cmluZyhmdW5jKTpcInVua25vd24gZnVuY3Rpb25cIl0pfXZhciByZWFkRW1Bc21BcmdzQXJyYXk9W107ZnVuY3Rpb24gcmVhZEVtQXNtQXJncyhzaWdQdHIsYnVmKXtyZWFkRW1Bc21BcmdzQXJyYXkubGVuZ3RoPTA7dmFyIGNoO2J1Zj4+PTI7d2hpbGUoY2g9SEVBUFU4W3NpZ1B0cisrXSl7YnVmKz1jaCE9MTA1JmJ1ZjtyZWFkRW1Bc21BcmdzQXJyYXkucHVzaChjaD09MTA1P0hFQVAzMltidWZdOkhFQVBGNjRbYnVmKys+PjFdKTsrK2J1Zn1yZXR1cm4gcmVhZEVtQXNtQXJnc0FycmF5fWZ1bmN0aW9uIHJ1bkVtQXNtRnVuY3Rpb24oY29kZSxzaWdQdHIsYXJnYnVmKXt2YXIgYXJncz1yZWFkRW1Bc21BcmdzKHNpZ1B0cixhcmdidWYpO3JldHVybiBBU01fQ09OU1RTW2NvZGVdLmFwcGx5KG51bGwsYXJncyl9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2ludChjb2RlLHNpZ1B0cixhcmdidWYpe3JldHVybiBydW5FbUFzbUZ1bmN0aW9uKGNvZGUsc2lnUHRyLGFyZ2J1Zil9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LHNyYyxudW0pe0hFQVBVOC5jb3B5V2l0aGluKGRlc3Qsc3JjLHNyYytudW0pfWZ1bmN0aW9uIGdldENGdW5jKGlkZW50KXt2YXIgZnVuYz1Nb2R1bGVbXCJfXCIraWRlbnRdO3JldHVybiBmdW5jfWZ1bmN0aW9uIHdyaXRlQXJyYXlUb01lbW9yeShhcnJheSxidWZmZXIpe0hFQVA4LnNldChhcnJheSxidWZmZXIpfWZ1bmN0aW9uIGNjYWxsKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsYXJncyxvcHRzKXt2YXIgdG9DPXtcInN0cmluZ1wiOnN0cj0+e3ZhciByZXQ9MDtpZihzdHIhPT1udWxsJiZzdHIhPT11bmRlZmluZWQmJnN0ciE9PTApe3ZhciBsZW49KHN0ci5sZW5ndGg8PDIpKzE7cmV0PXN0YWNrQWxsb2MobGVuKTtzdHJpbmdUb1VURjgoc3RyLHJldCxsZW4pfXJldHVybiByZXR9LFwiYXJyYXlcIjphcnI9Pnt2YXIgcmV0PXN0YWNrQWxsb2MoYXJyLmxlbmd0aCk7d3JpdGVBcnJheVRvTWVtb3J5KGFycixyZXQpO3JldHVybiByZXR9fTtmdW5jdGlvbiBjb252ZXJ0UmV0dXJuVmFsdWUocmV0KXtpZihyZXR1cm5UeXBlPT09XCJzdHJpbmdcIil7cmV0dXJuIFVURjhUb1N0cmluZyhyZXQpfWlmKHJldHVyblR5cGU9PT1cImJvb2xlYW5cIilyZXR1cm4gQm9vbGVhbihyZXQpO3JldHVybiByZXR9dmFyIGZ1bmM9Z2V0Q0Z1bmMoaWRlbnQpO3ZhciBjQXJncz1bXTt2YXIgc3RhY2s9MDtpZihhcmdzKXtmb3IodmFyIGk9MDtpPGFyZ3MubGVuZ3RoO2krKyl7dmFyIGNvbnZlcnRlcj10b0NbYXJnVHlwZXNbaV1dO2lmKGNvbnZlcnRlcil7aWYoc3RhY2s9PT0wKXN0YWNrPXN0YWNrU2F2ZSgpO2NBcmdzW2ldPWNvbnZlcnRlcihhcmdzW2ldKX1lbHNle2NBcmdzW2ldPWFyZ3NbaV19fX12YXIgcmV0PWZ1bmMuYXBwbHkobnVsbCxjQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJldCl7aWYoc3RhY2shPT0wKXN0YWNrUmVzdG9yZShzdGFjayk7cmV0dXJuIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpfXJldD1vbkRvbmUocmV0KTtyZXR1cm4gcmV0fWZ1bmN0aW9uIGN3cmFwKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsb3B0cyl7dmFyIG51bWVyaWNBcmdzPSFhcmdUeXBlc3x8YXJnVHlwZXMuZXZlcnkodHlwZT0+dHlwZT09PVwibnVtYmVyXCJ8fHR5cGU9PT1cImJvb2xlYW5cIik7dmFyIG51bWVyaWNSZXQ9cmV0dXJuVHlwZSE9PVwic3RyaW5nXCI7aWYobnVtZXJpY1JldCYmbnVtZXJpY0FyZ3MmJiFvcHRzKXtyZXR1cm4gZ2V0Q0Z1bmMoaWRlbnQpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBjY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3VtZW50cyxvcHRzKX19dmFyIHdhc21JbXBvcnRzPXtcImFcIjpfX19hc3NlcnRfZmFpbCxcImJcIjpfZW1zY3JpcHRlbl9hc21fY29uc3RfaW50LFwiY1wiOl9lbXNjcmlwdGVuX21lbWNweV9iaWd9O3ZhciBhc209Y3JlYXRlV2FzbSgpO3ZhciBfX193YXNtX2NhbGxfY3RvcnM9ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcImFzbVwiXVtcImVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5pdD1Nb2R1bGVbXCJfc3lzX2luaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbml0PU1vZHVsZVtcIl9zeXNfaW5pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJmXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJnXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3Jlc2V0PU1vZHVsZVtcIl9zeXNfcmVzZXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19yZXNldD1Nb2R1bGVbXCJfc3lzX3Jlc2V0XCJdPU1vZHVsZVtcImFzbVwiXVtcImhcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXhlYz1Nb2R1bGVbXCJfc3lzX2V4ZWNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19leGVjPU1vZHVsZVtcIl9zeXNfZXhlY1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJpXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4ZWNfdXM9TW9kdWxlW1wiX3N5c19leGVjX3VzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXhlY191cz1Nb2R1bGVbXCJfc3lzX2V4ZWNfdXNcIl09TW9kdWxlW1wiYXNtXCJdW1wialwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leD1Nb2R1bGVbXCJfc3lzX2V4XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXg9TW9kdWxlW1wiX3N5c19leFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJrXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJsXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2tleV9kb3duPU1vZHVsZVtcIl9zeXNfa2V5X2Rvd25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19rZXlfZG93bj1Nb2R1bGVbXCJfc3lzX2tleV9kb3duXCJdPU1vZHVsZVtcImFzbVwiXVtcIm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPU1vZHVsZVtcImFzbVwiXVtcIm5cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcXVpY2tfbG9hZD1Nb2R1bGVbXCJfc3lzX3F1aWNrX2xvYWRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19xdWlja19sb2FkPU1vZHVsZVtcIl9zeXNfcXVpY2tfbG9hZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJvXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luc2VydF9yb21fY2FydGRyaWdlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZT1Nb2R1bGVbXCJfc3lzX2luc2VydF9yb21fY2FydGRyaWdlXCJdPU1vZHVsZVtcImFzbVwiXVtcInBcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfbWVtX2NwdV9yZD1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfcmRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19tZW1fY3B1X3JkPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV9yZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJxXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX21lbV9jcHVfd3I9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3dyXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfbWVtX2NwdV93cj1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfd3JcIl09TW9kdWxlW1wiYXNtXCJdW1wiclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19qb3lzdGljaz1Nb2R1bGVbXCJfc3lzX2pveXN0aWNrXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfam95c3RpY2s9TW9kdWxlW1wiX3N5c19qb3lzdGlja1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9qb3lzdGlja190eXBlPU1vZHVsZVtcIl9zeXNfc2V0X2pveXN0aWNrX3R5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfam95c3RpY2tfdHlwZT1Nb2R1bGVbXCJfc3lzX3NldF9qb3lzdGlja190eXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5zZXJ0X3RhcGU9TW9kdWxlW1wiX3N5c19pbnNlcnRfdGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2luc2VydF90YXBlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3RhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1widVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19yZW1vdmVfdGFwZT1Nb2R1bGVbXCJfc3lzX3JlbW92ZV90YXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcmVtb3ZlX3RhcGU9TW9kdWxlW1wiX3N5c19yZW1vdmVfdGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ2XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ3XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ4XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2Nhc19wb3J0PU1vZHVsZVtcIl9zeXNfY2FzX3BvcnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19jYXNfcG9ydD1Nb2R1bGVbXCJfc3lzX2Nhc19wb3J0XCJdPU1vZHVsZVtcImFzbVwiXVtcInlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPU1vZHVsZVtcImFzbVwiXVtcInpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPU1vZHVsZVtcImFzbVwiXVtcIkFcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTk9TW9kdWxlW1wiX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5PU1vZHVsZVtcIl9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIl09TW9kdWxlW1wiYXNtXCJdW1wiQlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZXJybm9fbG9jYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4oX19fZXJybm9fbG9jYXRpb249TW9kdWxlW1wiYXNtXCJdW1wiX19lcnJub19sb2NhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tTYXZlPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrU2F2ZT1Nb2R1bGVbXCJhc21cIl1bXCJEXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja1Jlc3RvcmU9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tSZXN0b3JlPU1vZHVsZVtcImFzbVwiXVtcIkVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrQWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tBbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJGXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O01vZHVsZVtcImNjYWxsXCJdPWNjYWxsO01vZHVsZVtcImN3cmFwXCJdPWN3cmFwO3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xyXG5cclxuXHJcbiAgcmV0dXJuIGVtc2NyaXB0ZW5fbW9kdWxlLnJlYWR5XHJcbn1cclxuKTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgZW1zY3JpcHRlbl9tb2R1bGU7IiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMy4yXG4gKiAyMDE2LTA2LTE2IDE4OjI1OjE5XG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogTUlUXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYgKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUsIGluZGVudDogNCwgbGF4YnJlYWs6IHRydWUsIGxheGNvbW1hOiB0cnVlLCBzbWFydHRhYnM6IHRydWUsIHBsdXNwbHVzOiB0cnVlICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvRmlsZVNhdmVyLmpzICovXG5cbnZhciBzYXZlQXMgPSBzYXZlQXMgfHwgKGZ1bmN0aW9uKHZpZXcpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXG5cdGlmICh0eXBlb2YgdmlldyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIC9NU0lFIFsxLTldXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhclxuXHRcdCAgZG9jID0gdmlldy5kb2N1bWVudFxuXHRcdCAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcblx0XHQsIGdldF9VUkwgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB2aWV3LlVSTCB8fCB2aWV3LndlYmtpdFVSTCB8fCB2aWV3O1xuXHRcdH1cblx0XHQsIHNhdmVfbGluayA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKVxuXHRcdCwgY2FuX3VzZV9zYXZlX2xpbmsgPSBcImRvd25sb2FkXCIgaW4gc2F2ZV9saW5rXG5cdFx0LCBjbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdHZhciBldmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIik7XG5cdFx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH1cblx0XHQsIGlzX3NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qodmlldy5IVE1MRWxlbWVudCkgfHwgdmlldy5zYWZhcmlcblx0XHQsIGlzX2Nocm9tZV9pb3MgPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgdGhyb3dfb3V0c2lkZSA9IGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHQodmlldy5zZXRJbW1lZGlhdGUgfHwgdmlldy5zZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhyb3cgZXg7XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cdFx0LCBmb3JjZV9zYXZlYWJsZV90eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxuXHRcdC8vIHRoZSBCbG9iIEFQSSBpcyBmdW5kYW1lbnRhbGx5IGJyb2tlbiBhcyB0aGVyZSBpcyBubyBcImRvd25sb2FkZmluaXNoZWRcIiBldmVudCB0byBzdWJzY3JpYmUgdG9cblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDEwMDAgKiA0MCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHQvLyBub3RlOiB5b3VyIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgVVRGLTE2IFUrRkVGRiB0byBFRiBCQiBCRlxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkVGRiksIGJsb2JdLCB7dHlwZTogYmxvYi50eXBlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmxvYjtcblx0XHR9XG5cdFx0LCBGaWxlU2F2ZXIgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHQvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xuXHRcdFx0dmFyXG5cdFx0XHRcdCAgZmlsZXNhdmVyID0gdGhpc1xuXHRcdFx0XHQsIHR5cGUgPSBibG9iLnR5cGVcblx0XHRcdFx0LCBmb3JjZSA9IHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGVcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgoaXNfY2hyb21lX2lvcyB8fCAoZm9yY2UgJiYgaXNfc2FmYXJpKSkgJiYgdmlldy5GaWxlUmVhZGVyKSB7XG5cdFx0XHRcdFx0XHQvLyBTYWZhcmkgZG9lc24ndCBhbGxvdyBkb3dubG9hZGluZyBvZiBibG9iIHVybHNcblx0XHRcdFx0XHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdXJsID0gaXNfY2hyb21lX2lvcyA/IHJlYWRlci5yZXN1bHQgOiByZWFkZXIucmVzdWx0LnJlcGxhY2UoL15kYXRhOlteO10qOy8sICdkYXRhOmF0dGFjaG1lbnQvZmlsZTsnKTtcblx0XHRcdFx0XHRcdFx0dmFyIHBvcHVwID0gdmlldy5vcGVuKHVybCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0XHRpZighcG9wdXApIHZpZXcubG9jYXRpb24uaHJlZiA9IHVybDtcblx0XHRcdFx0XHRcdFx0dXJsPXVuZGVmaW5lZDsgLy8gcmVsZWFzZSByZWZlcmVuY2UgYmVmb3JlIGRpc3BhdGNoaW5nXG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZm9yY2UpIHtcblx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuZWQgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBBcHBsZSBkb2VzIG5vdCBhbGxvdyB3aW5kb3cub3Blbiwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS9kb2N1bWVudGF0aW9uL1Rvb2xzL0NvbmNlcHR1YWwvU2FmYXJpRXh0ZW5zaW9uR3VpZGUvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzLmh0bWxcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdDtcblx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cblx0XHRcdGlmIChjYW5fdXNlX3NhdmVfbGluaykge1xuXHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmc19lcnJvcigpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIiwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiO1xuXG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lKTtcblx0XHR9O1xuXHR9XG5cblx0RlNfcHJvdG8uYWJvcnQgPSBmdW5jdGlvbigpe307XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9PSBudWxsKSkge1xuICBkZWZpbmUoXCJGaWxlU2F2ZXIuanNcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRfd2FzbV9pbnN0YW5jZSB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuY29uc3QgQVVESU9fQlVGU0laRSA9IDEwMjQ7ICAvLyBtdXN0IG1hdGNoIC5jXHJcblxyXG5sZXQgYXVkaW9fYnVmZmVyc19xdWV1ZTogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1ZGlvX2J1Zl9yZWFkeShwdHI6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgIGlmKCFhdWRpb19wbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICBsZXQgc3RhcnQgPSBwdHIgLyBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgIGxldCBidWZmZXIgPSBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuc3ViYXJyYXkoc3RhcnQsc3RhcnQrc2l6ZSkgYXMgbnVtYmVyW107XHJcblxyXG4gICBhdWRpb19idWZmZXJzX3F1ZXVlLnB1c2goWyAuLi5idWZmZXIgXSk7ICAvLyBwdXNoIGEgY2xvbmVkIGNvcHlcclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFVRElPIEJVRkZFUiBUTyBCUk9XU0VSIEFVRElPICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuY29uc3QgYnVmZmVyU2l6ZSA9IEFVRElPX0JVRlNJWkU7XHJcblxyXG5sZXQgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHR8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgc3BlYWtlclNvdW5kOiBTY3JpcHRQcm9jZXNzb3JOb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0KCkge1xyXG4gICBhdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpOyAvLyBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTsgICBcclxuICAgc3BlYWtlclNvdW5kID0gYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCAxLCAxKTtcclxuXHJcbiAgIHNwZWFrZXJTb3VuZC5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZS5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XHJcblxyXG4gICAgICBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndhcm5pbmc6IGF1ZGlvIHF1ZXVlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB3YXJuaW5nOiBhdWRpbyBxdWV1ZSBpcyBnZXR0aW5nIGxvbmdlcjogJHthdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aH1gKTtcclxuICAgICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF1ZGlvX2J1ZmZlcnNfcXVldWVbMF07XHJcbiAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBhdWRpb19idWZmZXJzX3F1ZXVlLnNsaWNlKDEpO1xyXG5cclxuICAgICAgZm9yKGxldCBpPTA7IGk8YnVmZmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgIG91dHB1dFtpXSA9IGJ1ZmZlcltpXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi8qXHJcbmxldCBjaDAgPSBbXTtcclxubGV0IGNoMSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY3NhdmUoKSB7XHJcbiAgIGNvbnN0IHdhdkRhdGEgPSB7XHJcbiAgICAgIHNhbXBsZVJhdGU6IDQ4MDAwLFxyXG4gICAgICBjaGFubmVsRGF0YTogWyBuZXcgRmxvYXQzMkFycmF5KGNoMCksIG5ldyBGbG9hdDMyQXJyYXkoY2gxKSBdXHJcbiAgIH07XHJcbiAgICAgXHJcbiAgIGNvbnN0IGJ1ZmZlciA9IGVuY29kZVN5bmMod2F2RGF0YSwgeyBiaXREZXB0aDogMTYsIGZsb2F0OiBmYWxzZSB9KTsgICAgICBcclxuICAgXHJcbiAgIGxldCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7ICAgXHJcbiAgIGNvbnN0IGZpbGVOYW1lID0gXCJjc2F2ZWQud2F2XCI7XHJcbiAgIHNhdmVBcyhibG9iLCBmaWxlTmFtZSk7XHJcbn1cclxuKi9cclxuXHJcbmxldCBhdWRpb19wbGF5aW5nOiBib29sZWFufHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb0F1ZGlvKCkge1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgY3JlYXRlQXVkaW9Db250ZXh0KCk7XHJcblxyXG4gICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBzcGVha2VyU291bmQuY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICBhdWRpb19wbGF5aW5nID0gdHJ1ZTtcclxuICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcEF1ZGlvKCkge1xyXG4gICBpZihhdWRpb19wbGF5aW5nICE9PSB1bmRlZmluZWQgJiYgYXVkaW9fcGxheWluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBzcGVha2VyU291bmQuZGlzY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICBhdWRpb19wbGF5aW5nID0gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1ZGlvQ29udGV4dFJlc3VtZSgpIHtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIGNyZWF0ZUF1ZGlvQ29udGV4dCgpO1xyXG4gICBpZihhdWRpb19wbGF5aW5nID09PSB1bmRlZmluZWQpIGdvQXVkaW8oKTtcclxuXHJcbiAgIGlmKHNwZWFrZXJTb3VuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICBpZihhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XHJcbiAgICAgIGF3YWl0IGF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcclxuICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJCU0Nvbm5lY3RvciB7XHJcbiAgIGFkZHJlc3MgPSBcIlwiOyAgICAgXHJcbiAgIHByb3RvY29sOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICB3c19jb25uZWN0aW9uOiBXZWJTb2NrZXQgfCB1bmRlZmluZWQ7ICAgICBcclxuICAgXHJcbiAgIG9uX2Vycm9yID0gKGVycjogRXZlbnQpPT4ge307XHJcbiAgIG9uX29wZW4gPSAoKT0+IHt9O1xyXG4gICBvbl9jbG9zZSA9ICgpPT4ge307XHJcbiAgIG9uX2RhdGEgPSAoZGF0YTogVWludDhBcnJheSk9PiB7fTtcclxuXHJcbiAgIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICBcclxuICAgY29ubmVjdCgpIHtcclxuICAgICAgLy8gZW1wdHkgc3RyaW5nIG1lYW5zIG5vIHByb3RvY29sICh1bmRlZmluZWQpXHJcbiAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgPT09ICcnID8gdW5kZWZpbmVkIDogdGhpcy5wcm90b2NvbDtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5hZGRyZXNzfWAscHJvdG9jb2wpO1xyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbmVycm9yID0gKGVycik9PntcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0aW9uIGVycm9yJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMub25fZXJyb3IoZXJyKTtcclxuICAgICAgfTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGVkJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5vbl9vcGVuKCk7XHJcbiAgICAgIH07XHJcbiAgIFxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBkaXNjb25uZWN0ZWQnKTsgICAgICAgICBcclxuICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5vbl9jbG9zZSgpO1xyXG4gICAgICB9OyAgICAgIFxyXG5cclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9ubWVzc2FnZSA9IChlKSA9PiB7ICAgICAgXHJcbiAgICAgICAgIGlmIChlLmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uX2RhdGEobmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7IFxyXG4gICAgICAgICAgICBsZXQgbCA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYEFDSUEucmVjZWl2ZV9kYXRhKCR7SlNPTi5zdHJpbmdpZnkobCl9KTtgKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHdlYnNvY2tldCBSZWNlaXZlZCBzdHJpbmc6ICcke2UuZGF0YX0nYCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgc2VuZF9kYXRhX3RvX2JicyhkYXRhOiBudW1iZXJbXSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy53c19jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IHRoaXMud3NfY29ubmVjdGlvbi5PUEVOKSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5zZW5kKGJ5dGVzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgZGlzY29ubmVjdGVkLCBjYW4ndCBzZW5kIVwiKTtcclxuICAgICAgfVxyXG4gICB9ICAgXHJcbiAgIFxyXG4gICBjbG9zZSgpIHtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQpIHsgICAgICAgICBcclxuICAgICAgICAgdGhpcy53c19jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8vIGhhbmRsZXMgaW50ZXJhY3Rpb24gYmV0d2VlbiBicm93c2VyIGFuZCBlbXVsYXRpb24gXHJcblxyXG5pbXBvcnQgeyBnb0F1ZGlvLCBzdG9wQXVkaW8sIGF1ZGlvQ29udGV4dFJlc3VtZSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5sZXQgYXNwZWN0ID0gMS4zO1xyXG5cclxuZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgICBcclxuXHJcbiAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gKHdpbmRvdy5pbm5lckhlaWdodCphc3BlY3QpKVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBgJHthc3BlY3QqMTAwfXZtaW5gO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2bWluXCI7XHJcbiAgIH1cclxuICAgZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gXCIxMDB2bWF4XCI7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHsoMS9hc3BlY3QpKjEwMH12bWF4YDtcclxuICAgfVxyXG4gICBlbHNlXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IFwiMTAwdm1pblwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7KDEvYXNwZWN0KSoxMDB9dm1pbmA7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHRydWVIZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvRnVsbFNjcmVlbigpIFxyXG57XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgIFxyXG4gICBjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4oKTsgXHJcbiAgIG9uUmVzaXplKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBnb0Z1bGxTY3JlZW4pO1xyXG5cclxub25SZXNpemUoKTtcclxuXHJcbi8vICoqKiogc2F2ZSBzdGF0ZSBvbiBjbG9zZSAqKioqXHJcblxyXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgIFxyXG59O1xyXG5cclxuLy8gKioqKiB2aXNpYmlsaXR5IGNoYW5nZSAqKioqXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgIGlmKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJoaWRkZW5cIilcclxuICAge1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgIHN0b3BBdWRpbygpO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIilcclxuICAgeyAgICAgIFxyXG4gICAgICBjNjQuZ28oKTtcclxuICAgICAgZ29BdWRpbygpO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiBkcmFnICYgZHJvcCAqKioqXHJcblxyXG5jb25zdCBkcm9wWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbi8vIE9wdGlvbmFsLiAgIFNob3cgdGhlIGNvcHkgaWNvbiB3aGVuIGRyYWdnaW5nIG92ZXIuICBTZWVtcyB0byBvbmx5IHdvcmsgZm9yIGNocm9tZS5cclxuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgZS5kYXRhVHJhbnNmZXIhLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbn0pO1xyXG5cclxuLy8gR2V0IGZpbGUgZGF0YSBvbiBkcm9wXHJcbmRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcclxuICAgYXVkaW9Db250ZXh0UmVzdW1lKCk7XHJcblxyXG4gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIhLmZpbGVzOyAvLyBBcnJheSBvZiBhbGwgZmlsZXNcclxuXHJcbiAgIGZvcihsZXQgaT0wOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBsZXQgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOyAgICAgIFxyXG4gICAgICByZWFkZXIub25sb2FkID0gZTIgPT4gZHJvcHBlZEZpbGUoZmlsZS5uYW1lLCBuZXcgVWludDhBcnJheShlMi50YXJnZXQhLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7IFxyXG4gICB9XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJvcHBlZEZpbGUob3V0TmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkge1xyXG4gICBjb25zdCBwcmcgPSAvXFwucHJnJC9pO1xyXG4gICBpZihwcmcudGVzdChvdXROYW1lKSkgeyAgICBcclxuICAgICAgYXdhaXQgbG9hZEJ5dGVzKGJ5dGVzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBNNjgyMSB9IGZyb20gXCIuL202ODIxXCI7XHJcbmltcG9ydCB7IE02ODUwIH0gZnJvbSBcIi4vbTY4NTBcIjtcclxuXHJcbmltcG9ydCB7IEJCU0Nvbm5lY3RvciB9IGZyb20gXCIuLi9iYnNfY29ubmVjdG9yXCI7XHJcbmltcG9ydCB7IGFycmF5MlN0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxubGV0IFBJQSA9IG5ldyBNNjgyMSgpO1xyXG5sZXQgQUNJQSA9IG5ldyBNNjg1MCgpO1xyXG5cclxuZXhwb3J0IGxldCB2aWRlb3RlbCA9IG5ldyBCQlNDb25uZWN0b3IoKTtcclxuXHJcbih3aW5kb3cgYXMgYW55KS5BQ0lBID0gQUNJQTtcclxuKHdpbmRvdyBhcyBhbnkpLlBJQSA9IFBJQTtcclxuKHdpbmRvdyBhcyBhbnkpLnZpZGVvdGVsID0gdmlkZW90ZWw7XHJcblxyXG52aWRlb3RlbC5vbl9lcnJvciA9ICgpPT57XHJcbiAgIC8vIHNldHMgTk8gQ0FSUklFUlxyXG4gICBBQ0lBLlNUQVRVU19OT19DQVJSSUVSID0gMTtcclxuICAgY29uc29sZS5sb2coXCJOTyBDQVJSSUVSXCIpO1xyXG59O1xyXG5cclxudmlkZW90ZWwub25fY2xvc2UgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX29wZW4gPSAoKT0+e1xyXG4gICAvLyBjbGVhcnMgTk8gQ0FSUklFUlxyXG4gICBBQ0lBLlNUQVRVU19OT19DQVJSSUVSID0gMDtcclxuICAgUElBLlBBICY9IDEyNztcclxuICAgY29uc29sZS5sb2coXCJDQVJSSUVSIERFVEVDVFwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX2RhdGEgPSAoZGF0YSk9PntcclxuICAgQUNJQS5yZWNlaXZlX2RhdGEoZGF0YSk7XHJcbn1cclxuXHJcbkFDSUEudHJhbnNtaXRfZGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgIC8vY29uc29sZS5sb2coYXJyYXkyU3RyaW5nKFtkYXRhXSkpO1xyXG4gICAvL2NvbnNvbGUubG9nKGAweCR7ZGF0YS50b1N0cmluZygxNil9ID0gJHtkYXRhfWApO1xyXG4gICB2aWRlb3RlbC5zZW5kX2RhdGFfdG9fYmJzKFtkYXRhXSk7XHJcbn1cclxuXHJcblBJQS5udW1iZXJfZGVjb2Rlci5hZnRlcmRpYWx0b25lID0gKG51bXRlbDogc3RyaW5nKT0+IHtcclxuICAgdmlkZW90ZWwuY29ubmVjdCgpO1xyXG4gICAvKlxyXG4gICBpZihudW10ZWwgPT09IFwiMDUyMjc1MDA1MVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ29vZCBudW1iZXIhXCIpO1xyXG4gICAgICB2aWRlb3RlbC5jb25uZWN0KCk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhZCBudW1iZXIhXCIpO1xyXG4gICB9XHJcbiAgICovXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIHRoZSB3aG9sZSBzeXN0ZW0gaXMgcmVzZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3Jlc2V0KClcclxue1xyXG4gICBQSUEucmVzZXQoKTsgXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSByZWFkcyBJL08gaW4gdGhlIHJhbmdlICRERTAwLURGRkZcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3JlYWQoYWRkcjogbnVtYmVyLCB0aWNrczogbnVtYmVyKVxyXG57ICAgXHJcbiAgIGlmKGFkZHIgPCAweERGMDApIHJldHVybiBQSUEucmVhZChhZGRyKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgcmV0dXJuIEFDSUEuY3B1X3JlYWQoYWRkciwgdGlja3MpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkciA8IDB4REYwMCkgUElBLndyaXRlKGFkZHIsIGRhdGEpO1xyXG4gICBlbHNlICAgICAgICAgICAgICBBQ0lBLmNwdV93cml0ZShhZGRyLCBkYXRhLCB0aWNrcyk7XHJcbn1cclxuXHJcbi8vIGZ1bnppb25lIHJpbmcgcGVyIG1vZGFsaXTDoCBcImFuc3dlclwiXHJcbih3aW5kb3cgYXMgYW55KS5yaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgIGxldCBjbnQgPSAwO1xyXG4gICBsZXQgbnVtID0gMTNcclxuICAgZnVuY3Rpb24gZ2VuX2ludCgpIHsgICAgICBcclxuICAgICAgaWYoY250IDwgbnVtKSB7XHJcbiAgICAgICAgIFBJQS5DUkEgPSAweDNmIHwgKDE8PDcpOyBQSUEuUEEgPSAyNTU7ICAgICAgICAgXHJcbiAgICAgICAgIHNldFRpbWVvdXQoZ2VuX2ludCwgMTAwKTtcclxuICAgICAgICAgY250Kys7ICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc2V0VGltZW91dCgoKT0+dmlkZW90ZWwuY29ubmVjdCgpLCAzMDAwKTtcclxuICAgICAgfSAgICAgIFxyXG4gICB9IFxyXG4gICBnZW5faW50KCk7ICAgXHJcbn0iLCIvKlxyXG5Ob3RlIHZhcmllOlxyXG5cclxuUElBID0gTW90b3JvbGEgNjgyMVxyXG4gICBFbmFibGUgPSBjcHUgY2xvY2tcclxuICAgL1JXID0gY3B1IC9SV1xyXG4gICAvUkVTRVQgPSBjcHUgL1JFU0VUXHJcbiAgIENTMCA9IHNlbXByZSBwb3N0byBhIDEgKFZDQylcclxuICAgQ1MxID0gc2VtcHJlIHBvc3RvIGEgMSAoVkNDKVxyXG4gICAvQ1MyID0gL0lPMSAoY3B1IEkvTykgcmFuZ2UgJERFMDAtJERFRkYuXHJcbiAgIFJTMCxSUzEgPSBbQTE6QTBdXHJcbiAgIC9JUlFBLC9JUlFCID0gL0lSUSBjcHUsIGNsZWFyZWQgYnkgcmVhZGluZyBkYXRhIHJlZ2lzdGVyXHJcbiAgIENBMSA9IChpbnRlcnJ1cHQgaW5wdXQpIHNlZ25hbGUgZGkgUklOR1xyXG4gICBDQjEgPSAoaW50ZXJydXB0IGlucHV0KSAwIChHTkQpXHJcbiAgIENBMiA9IChjb25maWd1cmF0byBjb21lIG91dHB1dCkgcGluIEExNCBkZWxsYSByb20gaW50ZXJuYSAoYmFuayBzd2l0Y2hpbmcpXHJcbiAgIENCMiA9IChjb25maWd1cmF0byBjb21lIG91dHB1dCkgcGVybWV0dGUgZGkgc3dpdGNoYXJlIGlsIHBpbiBFWFJPTSAoY2FydCBvZmYpXHJcbiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IGhleCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE02ODIxIHtcclxuICAgQ1JBID0gMDtcclxuICAgQ1JCID0gMDtcclxuXHJcbiAgIFBBID0gMDtcclxuICAgUEIgPSAwO1xyXG5cclxuICAgRERSQSA9IDA7XHJcbiAgIEREUkIgPSAwO1xyXG5cclxuICAgLy8gZGlhbHRvbmUgZGV0ZWN0aW9uXHJcbiAgIG51bWJlcl9kZWNvZGVyID0gbmV3IE51bWJlckRlY29kZXIoKTtcclxuIFxyXG4gICByZXNldCgpIHtcclxuICAgICAgdGhpcy5DUkEgPSAwO1xyXG4gICAgICB0aGlzLkNSQiA9IDA7ICAgIFxyXG4gICAgICB0aGlzLlBBID0gMDtcclxuICAgICAgdGhpcy5QQiA9IDA7XHJcbiAgICAgIHRoaXMuRERSQSA9IDA7XHJcbiAgICAgIHRoaXMuRERSQiA9IDA7XHJcbiAgICAgIGM2NC5zZXRfY2JtXzY0OTlfbmJhbmsoMSk7XHJcbiAgICAgIGRlYnVnKGBQSUE6IFJFU0VUYCk7ICAgIFxyXG4gICB9XHJcbiBcclxuICAgcmVhZChhZGRyOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBBID0gJCR7aGV4KHRoaXMuUEEsMil9YCk7IFxyXG4gICAgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMDExMTExMTsgLy8gY2xlYXIgaW50ZXJydXB0IGZsYWdcclxuICAgICAgICAgcmV0dXJuIHRoaXMuUEE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMCkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBERFJBID0gJCR7aGV4KHRoaXMuRERSQSwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuRERSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBDUkEgPSAkJHtoZXgodGhpcy5DUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkNSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBCID0gJCR7aGV4KHRoaXMuUEIsMil9YCk7ICAgICAgICBcclxuICAgICAgICAgdGhpcy5DUkIgPSB0aGlzLkNSQiAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGFsc28gaW50ZXJydXB0IGZsYWcgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQiA9ICQke2hleCh0aGlzLkREUkIsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkI7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JCID0gJCR7aGV4KHRoaXMuQ1JCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkI7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuIFxyXG4gICB3cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgQ1JBMiA9ICh0aGlzLkNSQSA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBDUkIyID0gKHRoaXMuQ1JCID4+IDIpICYgMTtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDM7XHJcbiAgICAgICAgICAgaWYoUlMgPT09IDBiMDEpIHRoaXMud3JpdGVfQ1JBKGRhdGEpO1xyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB0aGlzLndyaXRlX0NSQihkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB0aGlzLndyaXRlX1BBKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHRoaXMud3JpdGVfRERSQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB0aGlzLndyaXRlX1BCKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHRoaXMud3JpdGVfRERSQihkYXRhKTsgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JBKGRhdGE6IG51bWJlcikgeyAgIFxyXG4gICAgICB0aGlzLkNSQSA9IGRhdGE7XHJcbiAgICAgIC8vIGJhbmsgc3dpdGNoaW5nXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBiYW5rID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKGJhbmspOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogUk9NIGJhbmsgc3dpdGNoIHRvICR7YmFua31gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9DUkIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuQ1JCID0gZGF0YTtcclxuICAgICAgLy8gRVhST00gcGluIHRyaWdnZXJcclxuICAgICAgaWYoZGF0YSAmIDBiMDAxMTAwMDApIHtcclxuICAgICAgICAgbGV0IGV4cm9tID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2V4cm9tKCEhZXhyb20pOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogRVhST00gc3dpdGNoIHRvICR7ISFleHJvbX1gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JCIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9ICAgXHJcblxyXG4gICB3cml0ZV9ERFJBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkREUkEgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgRERSQSB0byBiaW5hcnkgJHtkYXRhLnRvU3RyaW5nKDE2KX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfRERSQihkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5ERFJCID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkIgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX1BBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLlBBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IFBBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcbiBcclxuICAgd3JpdGVfUEIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIC8vIGRpYWx0b25lIGRldGVjdGlvbiBzdGFydHMgYmJzIGRlbGF5ZWRcclxuICAgICAgbGV0IFBCNSA9IChkYXRhID4+IDUpICYgMTsgIGxldCBvbGRfUEI1ID0gKHRoaXMuUEIgPj4gNSkgJiAxO1xyXG4gICAgICBsZXQgUEI2ID0gKGRhdGEgPj4gNikgJiAxOyAgbGV0IG9sZF9QQjYgPSAodGhpcy5QQiA+PiA2KSAmIDE7XHJcbiAgICAgIGxldCBQQjcgPSAoZGF0YSA+PiA3KSAmIDE7ICBsZXQgb2xkX1BCNyA9ICh0aGlzLlBCID4+IDcpICYgMTtcclxuXHJcbiAgICAgIHRoaXMubnVtYmVyX2RlY29kZXIudGljayhQQjYsIFBCNSwgZGF0YSk7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKGRhdGEudG9TdHJpbmcoMikpO1xyXG4gICAgICBcclxuICAgICAgaWYoUEI1ID09PSAwICYmIG9sZF9QQjUgPT09IDEpIHsgICAgICAgICBcclxuXHJcbiAgICAgICAgIGRlYnVnKFwiUElBOiBkaWFsaW5nLi4uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihQQjcgIT09IG9sZF9QQjcpIHtcclxuICAgICAgICAgLy8gUEI3IGNoYW5nZWRcclxuICAgICAgICAgZGVidWcoYCoqKioqKioqIFBCNzogJHtQQjd9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuUEIgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgUEIgdG8gJCR7aGV4KGRhdGEsMil9YCk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICAvL2NvbnNvbGUubG9nKG0pO1xyXG59XHJcblxyXG5jbGFzcyBOdW1iZXJEZWNvZGVyXHJcbntcclxuICAgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICBwdWxzZXMgPSAwO1xyXG4gICB0ZWxudW1iZXI6IG51bWJlcltdID0gW107XHJcbiAgIGZpbmlzaF90aW1lcjogbnVtYmVyfHVuZGVmaW5lZDtcclxuXHJcbiAgIG9sZF9QQjYgPSAwO1xyXG4gICBvbGRfUEI1ID0gMDtcclxuXHJcbiAgIGFmdGVyZGlhbHRvbmUgPSAobnVtYmVyOiBzdHJpbmcpPT57fTtcclxuICAgXHJcbiAgIHRpY2soUEI2OiBudW1iZXIsIFBCNTogbnVtYmVyLCBkYXRhOiBudW1iZXIpIHtcclxuICAgICAgaWYoIXRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICBpZihQQjUgPT09IDEgJiYgdGhpcy5vbGRfUEI1ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucHVsc2VzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50ZWxudW1iZXIgPSBbXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWFsaW5nIHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgaWYoUEI2ID09PSAwICYmIHRoaXMub2xkX1BCNiA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBkaWFsdG9uZSBjbGlja1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBCNiBkb3duIChkaWFsKVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wdWxzZXMrKztcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oXCJkaWFsdG9uZV9jbGljay5tcDNcIik7IC8vIHRha2VuIGZyb20gXCJodHRwczovL3d3dy5mZXNsaXlhbnN0dWRpb3MuY29tL3BsYXktbXAzLzM4N1wiXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICBpZihQQjYgPT09IDEgJiYgdGhpcy5vbGRfUEI2ID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvZiBkaWFsdG9uZSBjbGlja1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKFBCNSA9PT0gMCAmJiB0aGlzLm9sZF9QQjUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gZW5kIG9mIGRpZ2l0XHJcbiAgICAgICAgICAgIHRoaXMudGVsbnVtYmVyLnB1c2godGhpcy5wdWxzZXMgJSAxMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHVsc2VzID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbmNlbCBvbGQgdGltZXJcclxuICAgICAgICAgICAgaWYodGhpcy5maW5pc2hfdGltZXIpIGNsZWFyVGltZW91dCh0aGlzLmZpbmlzaF90aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX3RpbWVyID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICB0aGlzLm51bWJlcl9jb21wb3NlZCh0aGlzLnRlbG51bWJlci5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgdGhpcy5maW5pc2hfdGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0sIDMwMDApIGFzIGFueSBhcyBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBCNSBkb3duIChlbmQgbnVtYmVyKVwiKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub2xkX1BCNSA9IFBCNTtcclxuICAgICAgdGhpcy5vbGRfUEI2ID0gUEI2OyAgICAgIFxyXG4gICB9XHJcblxyXG4gICBudW1iZXJfY29tcG9zZWQodGVsbnVtOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2coYGRpYWxpbmcgY29tcGxldGVkISBjYWxsZWQgJHt0ZWxudW19YCk7XHJcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFmdGVyZGlhbHRvbmUodGVsbnVtKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCIvKlxyXG5BQ0lBID0gbW90b3JvbGEgNjg1MFxyXG4gICAgQ1MyID0gL0lPMiAoY3B1IEkvTykgcmFuZ2UgJERGMDAtJERGRkYuICAgXHJcblxyXG42ODUwIHN0YXR1cyByZWdpc3RlclxyXG4gICAwIC0gcmVjZWl2ZSBidWZmZXIgZnVsbCBcclxuICAgMSAtIHRyYW5zbWl0IGJ1ZmZlciBlbXB0eVxyXG4gICAyIC0gbm8gY2FycmllclxyXG4gICAzIC0gL2NsZWFyIHRvIHNlbmRcclxuICAgNCAtIGZyYW1pbmcgZXJyb3JcclxuICAgNSAtIHJlY2VpdmVyIG92ZXJydW5cclxuICAgNiAtIHBhcml0eSBlcnJvclxyXG4gICA3IC0gL0lSUVxyXG5cclxuNjg1MCBjb250cm9sIHJlZ2lzdGVyXHJcbiAgIENSMXxDUjAgPSAwMCBubyBkaXZpZGVcclxuICAgICAgICAgICAgIDAxIGRpdmlkZSBieSAxNlxyXG4gICAgICAgICAgICAgMTAgZGl2aWRlIGJ5IDY0XHJcbiAgICAgICAgICAgICAxMSBtYXN0ZXIgcmVzZXQgXHJcbiAgICBcclxuICAgIENSNHxDUjN8Q1IyID0gYml0L3Bhcml0eS9zdG9wIGJpdFxyXG5cclxuKi9cclxuXHJcbmltcG9ydCB7IFNwZWVkTGltaXRlciB9IGZyb20gXCIuL3NwZWVkX2xpbWl0ZXJcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ19iaXRzID0gW1xyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm5vbmVcIiwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJub25lXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAxIH1cclxuXTtcclxuXHJcbmNvbnN0IGNsb2NrX2RpdmlkZXIgPSBbIFwibm9uZVwiLCBcIjE2XCIsIFwiNjRcIiBdO1xyXG5cclxuZXhwb3J0IGNsYXNzIE02ODUwXHJcbnsgICBcclxuICAgQ09OVFJPTCA9IDA7XHJcbiAgIFRSQU5TTUlUX0RBVEEgPSAwOyBcclxuICAgUkVDRUlWRV9EQVRBID0gMDsgIFxyXG5cclxuICAgLy8gc3RhdHVzIHJlZ2lzdGVyIGJpdHNcclxuICAgU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgID0gMDtcclxuICAgU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgID0gMDtcclxuICAgU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgID0gMDtcclxuICAgU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDsgICBcclxuXHJcbiAgIGxpbWl0ZXIgPSBuZXcgU3BlZWRMaW1pdGVyKDEyMDAsIDEyMDApO1xyXG4gICAgICAgICAgICBcclxuICAgZ2V0X3N0YXR1c19ieXRlKHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCA9IHRoaXMubGltaXRlci5yeF9mdWxsKHRpY2tzKTtcclxuICAgICAgdGhpcy5TVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPSB0aGlzLmxpbWl0ZXIudHhfZW1wdHkodGlja3MpO1xyXG4gICAgICBcclxuICAgICAgbGV0IHN0YXR1cyA9IFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPDwgMCkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPDwgMSkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPDwgMikgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPDwgMykgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfRlJBTUlOR19FUlJPUiAgICAgPDwgNCkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPDwgNSkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPDwgNikgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfSVJRICAgICAgICAgICAgICAgPDwgNyk7ICAgXHJcbiAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgIH1cclxuXHJcbiAgIGNwdV9yZWFkKGFkZHI6IG51bWJlciwgdGlja3M6IG51bWJlcikge1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMTtcclxuICAgICAgaWYoUlMgPT09IDApIHtcclxuICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldF9zdGF0dXNfYnl0ZSh0aWNrcyk7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKHRpY2tzKTtcclxuICAgICAgICAgaWYodGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCkge1xyXG4gICAgICAgICAgICB0aGlzLlJFQ0VJVkVfREFUQSA9IHRoaXMubGltaXRlci5yZWFkX2J5dGUodGlja3MpOyAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiB0aGlzLlJFQ0VJVkVfREFUQTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBjcHVfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBzZXQgY29udHJvbCA9ICgke2RhdGEudG9TdHJpbmcoMil9KWApO1xyXG4gICAgICAgICB0aGlzLkNPTlRST0wgPSBkYXRhO1xyXG5cclxuICAgICAgICAgbGV0IENSMTAgID0gKHRoaXMuQ09OVFJPTCAmIDBiMDAwMDAwMTEpO1xyXG4gICAgICAgICBsZXQgQ1I0MzIgPSAodGhpcy5DT05UUk9MICYgMGIwMDAxMTEwMCkgPj4gMjtcclxuICAgICAgICAgbGV0IENSNjUgID0gKHRoaXMuQ09OVFJPTCAmIDBiMDExMDAwMDApID4+IDU7XHJcbiAgICAgICAgIGxldCBDUjcgICA9ICh0aGlzLkNPTlRST0wgJiAwYjEwMDAwMDAwKSA+PiA3O1xyXG5cclxuICAgICAgICAgLy8gbWFzdGVyIHJlc2V0XHJcbiAgICAgICAgIGlmKENSMTAgPT09IDBiMTEpIHtcclxuICAgICAgICAgICAgZGVidWcoYEFDSUE6IG1hc3RlciBSRVNFVGApO1xyXG4gICAgICAgICAgICB0aGlzLmxpbWl0ZXIucmVzZXQoKTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLlRSQU5TTUlUX0RBVEEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlJFQ0VJVkVfREFUQSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgICAgICAgIC8vdGhpcy5TVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19DTEVBUl9UT19TRU5EICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19QQVJJVFlfRVJST1IgICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1ZyhgQUNJQTogY2xvY2sgZGl2aWRlIGJ5ICR7Y2xvY2tfZGl2aWRlcltDUjEwXX1gKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgbGV0IHsgYml0cywgcGFyaXR5LCBzdG9wX2JpdHMgfSA9IGNvbmZpZ19iaXRzW0NSNDMyXTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IGJpdCBjb25maWc6ICR7Yml0c30gYml0cy9wYXJpdHkgJHtwYXJpdHl9L3N0b3AgYml0cyR7c3RvcF9iaXRzfWApO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogQ1I2fDUgPSAke0NSNjUudG9TdHJpbmcoMil9YCk7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBDUjcgPSAke0NSN31gKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IHNldCB0cmFuc21pdCBkYXRhID0gKCR7ZGF0YX0pYCk7XHJcbiAgICAgICAgIHRoaXMuVFJBTlNNSVRfREFUQSA9IGRhdGE7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMudHJhbnNtaXRfZGF0YSh0aGlzLlRSQU5TTUlUX0RBVEEpO1xyXG4gICAgICAgICB0aGlzLmxpbWl0ZXIudHhfYnl0ZV9zZW50KHRpY2tzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvLyBleHRlcm5hbCB3b3JsZCBpbnRlcmZhY2VcclxuXHJcbiAgIC8vIGNhbGxlZCBmcm9tIEJCUyBjb25uZWN0b3JcclxuICAgcmVjZWl2ZV9kYXRhKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgdGhpcy5saW1pdGVyLnB1c2hfcnhfZGF0YShkYXRhKTsgICAgICAgICAgICBcclxuICAgICAgZGVidWcoYEFDSUE6IHJlY2VpdmVkICR7ZGF0YS5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIHNlbmQgZGF0YSB0byBCQlMgY29ubmVjdG9yXHJcbiAgIHRyYW5zbWl0X2RhdGEgPSAoZGF0YTogbnVtYmVyKT0+e307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICAvL2NvbnNvbGUubG9nKG0pO1xyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgU3BlZWRMaW1pdGVyIHtcclxuXHJcbiAgIHJ4X2J1ZmZlcjogbnVtYmVyW10gPSBbXTsgICAgXHJcblxyXG4gICByeF90aWNrcyA9IDA7XHJcbiAgIHR4X3RpY2tzID0gMDtcclxuICAgcnhfbWF4X2NvdW50OiBudW1iZXI7IFxyXG4gICB0eF9tYXhfY291bnQ6IG51bWJlcjsgXHJcblxyXG4gICBjb25zdHJ1Y3RvcihyeF9iYXVkcmF0ZTogbnVtYmVyLCB0eF9iYXVkcmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucnhfbWF4X2NvdW50ID0gOTg1MjQ4IC8gKHJ4X2JhdWRyYXRlIC8gOSk7XHJcbiAgICAgIHRoaXMudHhfbWF4X2NvdW50ID0gOTg1MjQ4IC8gKHR4X2JhdWRyYXRlIC8gOSk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc2V0KCkge1xyXG4gICAgICB0aGlzLnJ4X2J1ZmZlciA9IFtdOyAgICAgICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHB1c2hfcnhfZGF0YShkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaChlPT50aGlzLnJ4X2J1ZmZlci5wdXNoKGUpKTsgICBcclxuICAgfSBcclxuXHJcbiAgIHJ4X2Z1bGwodGlja3M6IG51bWJlcikgeyAgICAgIFxyXG4gICAgICBsZXQgZGlmZiA9IHRpY2tzIC0gdGhpcy5yeF90aWNrczsgICAgICAgICAgICBcclxuICAgICAgaWYoZGlmZiA8IHRoaXMucnhfbWF4X2NvdW50KSByZXR1cm4gMDsgICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIHRoaXMucnhfYnVmZmVyLmxlbmd0aCA9PT0gMCA/IDAgOiAxO1xyXG4gICB9XHJcblxyXG4gICByZWFkX2J5dGUodGlja3M6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJ4X3RpY2tzID0gdGlja3M7XHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5yeF9idWZmZXJbMF07XHJcbiAgICAgIHRoaXMucnhfYnVmZmVyID0gdGhpcy5yeF9idWZmZXIuc2xpY2UoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9ICAgXHJcblxyXG4gICB0eF9lbXB0eSh0aWNrczogbnVtYmVyKSB7ICAgICAgXHJcbiAgICAgIGxldCBkaWZmID0gdGlja3MgLSB0aGlzLnR4X3RpY2tzOyAgICAgICAgICAgIFxyXG4gICAgICBpZihkaWZmIDwgdGhpcy50eF9tYXhfY291bnQpIHJldHVybiAwOyAgICAgICAgICAgIFxyXG4gICAgICByZXR1cm4gMTtcclxuICAgfVxyXG5cclxuICAgdHhfYnl0ZV9zZW50KHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy50eF90aWNrcyA9IHRpY2tzOyAgICAgIFxyXG4gICAgICByZXR1cm47XHJcbiAgIH0gICBcclxufVxyXG4iLCJpbXBvcnQgZW1zY3JpcHRlbl9tb2R1bGUgZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fbW9kdWxlXCI7XHJcbmltcG9ydCB7IG9uZUZyYW1lIH0gZnJvbSBcIi4vZW11bGF0b3JcIjtcclxuXHJcbmxldCB3YXNtX2luc3RhbmNlOiBhbnk7XHJcblxyXG4vKlxyXG5sZXQgcm9tX2xvYWQ7XHJcblxyXG5sZXQgaW9fcmVhZDtcclxubGV0IGlvX3dyaXRlO1xyXG5cclxubGV0IGtleWJvYXJkX3Jlc2V0O1xyXG5sZXQga2V5Ym9hcmRfcHJlc3M7XHJcbmxldCBrZXlib2FyZF9yZWxlYXNlO1xyXG5sZXQga2V5Ym9hcmRfcG9sbDtcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjNjQgPSB7IFxyXG4gICB0YXBlOiB7IH0sXHJcbiAgIGluaXQ6ICgpPT57fSxcclxuICAgY29uZmlnOiAoY29uZjogbnVtYmVyKT0+e30sXHJcbiAgIGV4OiAoY3ljbGVzOiBudW1iZXIpPT57fSxcclxuICAgZXhlYzogKCk9Pnt9LFxyXG4gICBleGVjX3VzOiAobXNlYzogbnVtYmVyKT0+e30sXHJcbiAgIHZkcDogKCk9Pnt9LFxyXG4gICByZXNldDogKCk9Pnt9LFxyXG4gICBrZXlfZG93bjogKGtleTogbnVtYmVyKT0+e30sXHJcbiAgIGtleV91cDogKGtleTogbnVtYmVyKT0+e30sXHJcbiAgIGpveXN0aWNrOiAoKT0+e30sXHJcbiAgIGVtdV9qb3k6IChqb3k6IG51bWJlcik9Pnt9LFxyXG4gICBsb2FkX3ByZzogKGJ5dGVzOiBVaW50OEFycmF5LCBzaXplOiBudW1iZXIpPT57fSxcclxuICAgcGVlazogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIHBva2U6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgY2FzX3BvcnQ6ICgpPT57fSxcclxuICAgbWVtX3JlYWQ6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBtZW1fd3JpdGU6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgbWVtX3JlYWRfd29yZDogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIG1lbV93cml0ZV93b3JkOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIGdvOiAoKT0+e1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgICBvbmVGcmFtZSh1bmRlZmluZWQpO1xyXG4gICB9LFxyXG5cclxuICAgc3RvcHBlZDogdHJ1ZSxcclxuXHJcbiAgIC8vIENCTSA2NDk5IEFEQVRUQVRPUkUgVEVMRU1BVElDTyBlbXVsYXRpb25cclxuICAgc2V0X2V4cm9tOiAodmFsdWU6IGJvb2xlYW4pID0+IHt9LFxyXG4gICBzZXRfY2JtXzY0OTlfbmJhbms6ICh2YWx1ZTogbnVtYmVyKSA9PiB7fSxcclxuICAgc2V0X2VtdWxhdGVfY2JtXzY0OTk6ICh2YWx1ZTogYm9vbGVhbikgPT4ge30sICAgXHJcbiAgIHNldF9leHRlcm5hbF9pcnE6ICh2YWx1ZTogYm9vbGVhbikgPT4ge31cclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkX3dhc20oKSB7ICAgXHJcbiAgIFxyXG4gICBsZXQgaW5zdGFuY2UgPSBhd2FpdCBlbXNjcmlwdGVuX21vZHVsZSgpO1xyXG4gICBcclxuICAgYzY0LmluaXQgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5pdFwiLCBudWxsKTtcclxuICAgYzY0LmNvbmZpZyAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfY29uZmlnXCIsIG51bGwsIFsnbnVtYmVyJ10pO1xyXG4gICBjNjQuZXhlYyAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leGVjXCIsIG51bGwpO1xyXG4gICBjNjQuZXggICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leFwiLCBbJ251bWJlciddKTtcclxuICAgYzY0LmV4ZWNfdXMgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhlY191c1wiLCBbJ251bWJlciddKTtcclxuICAgYzY0LnZkcCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdmRwXCIsIG51bGwpO1xyXG4gICBjNjQucmVzZXQgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGM2NC5rZXlfZG93biA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV9kb3duXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5rZXlfdXAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV91cFwiICAgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5qb3lzdGljayA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2pveXN0aWNrXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcblxyXG4gICBjNjQuZW11X2pveSAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfam95c3RpY2tfdHlwZVwiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG5cclxuICAgYzY0LmxvYWRfcHJnICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19xdWlja19sb2FkXCIgLCBudWxsLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIC8vYzY0Lmluc2VydF9jYXJ0ZHJpZ2UgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiICwgbnVsbCwgWydhcnJheScsICdudW1iZXInXSApO1xyXG5cclxuICAgYzY0LnBlZWsgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfbWVtX2NwdV9yZFwiICAgLCAnbnVtYmVyJywgWydudW1iZXInXSApO1xyXG4gICBjNjQucG9rZSAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19tZW1fY3B1X3dyXCIgICAsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcblxyXG4gICAvL2M2NC5kdW1wX3ZpYyA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2R1bXBfdmljXCIgICAsIG51bGwgKTtcclxuXHJcbiAgIGM2NC5jYXNfcG9ydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2Nhc19wb3J0XCIgICAsICdudW1iZXInKTtcclxuXHJcbiAgIC8qXHJcbiAgIGM2NC50YXBlLmluc2VydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luc2VydF90YXBlXCIgICwgJ2Jvb2wnLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIGM2NC50YXBlLnJlbW92ZSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3JlbW92ZV90YXBlXCIgICwgbnVsbCApO1xyXG4gICBjNjQudGFwZS5wbGF5ICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c190YXBlX3BsYXlcIiAgICAsIG51bGwgKTtcclxuICAgYzY0LnRhcGUuc3RvcCAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdGFwZV9zdG9wXCIgICAgLCBudWxsICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQubWVtX3JlYWQgPSBjNjQucGVlaztcclxuICAgYzY0Lm1lbV93cml0ZSA9IGM2NC5wb2tlO1xyXG5cclxuICAgYzY0Lm1lbV93cml0ZV93b3JkID0gZnVuY3Rpb24oYWRkcmVzcywgd29yZCkge1xyXG4gICAgICBjNjQubWVtX3dyaXRlKGFkZHJlc3MgKyAwLCB3b3JkICYgMHhGRik7XHJcbiAgICAgIGM2NC5tZW1fd3JpdGUoYWRkcmVzcyArIDEsICh3b3JkICYgMHhGRjAwKSA+PiA4KTtcclxuICAgfVxyXG4gICBcclxuICAgYzY0Lm1lbV9yZWFkX3dvcmQgPSBmdW5jdGlvbihhZGRyZXNzKSB7XHJcbiAgICAgIGNvbnN0IGxvID0gYzY0Lm1lbV9yZWFkKGFkZHJlc3MgKyAwKTtcclxuICAgICAgY29uc3QgaGkgPSBjNjQubWVtX3JlYWQoYWRkcmVzcyArIDEpO1xyXG4gICAgICByZXR1cm4gbG8raGkqMjU2O1xyXG4gICB9ICAgXHJcblxyXG4gICAvKlxyXG4gICBjcHVfaW5pdCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfaW5pdFwiLCBudWxsKTtcclxuICAgY3B1X3Jlc2V0ICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X3Jlc2V0XCIsIG51bGwpO1xyXG4gICBjcHVfcnVuX2luc3RydWN0aW9uID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfcnVuX2luc3RydWN0aW9uXCIsICdudW1iZXInKTtcclxuXHJcbiAgIG1lbV9yZWFkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibWVtX3JlYWRcIiwgJ251bWJlcicsIFsnbnVtYmVyJ10pO1xyXG4gICBtZW1fd3JpdGUgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcIm1lbV93cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcbiAgIHJvbV9sb2FkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwicm9tX2xvYWRcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG5cclxuICAgaW9fcmVhZCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb19yZWFkXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuICAgaW9fd3JpdGUgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb193cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcblxyXG4gICBsbTgwY190aWNrICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3RpY2tcIiwgJ251bWJlcicpO1xyXG4gICBsbTgwY19zZXRfZGVidWcgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3NldF9kZWJ1Z1wiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2N0Y19lbmFibGUgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfY3RjX2VuYWJsZVwiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2luaXQgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfaW5pdFwiLCBudWxsKTtcclxuICAgbG04MGNfcmVzZXQgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGxtODBjX3RpY2tfbGluZSAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfdGlja19saW5lXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuXHJcbiAgIGtleWJvYXJkX3Jlc2V0ICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcmVzZXRcIiAgLCBudWxsICk7XHJcbiAgIGtleWJvYXJkX3ByZXNzICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcHJlc3NcIiAgLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG4gICBrZXlib2FyZF9yZWxlYXNlICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3JlbGVhc2VcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuICAga2V5Ym9hcmRfcG9sbCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9wb2xsXCIgICAsICdudW1iZXInLCBbJ251bWJlciddICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQuc2V0X2V4cm9tICAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZXhyb21cIiAgICAgICAgICAgICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBjNjQuc2V0X2NibV82NDk5X25iYW5rICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfY2JtXzY0OTlfbmJhbmtcIiAgICAsIG51bGwsIFsnbnVtYmVyJ10gKTsgXHJcbiAgIGM2NC5zZXRfZW11bGF0ZV9jYm1fNjQ5OSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCIgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIGM2NC5zZXRfZXh0ZXJuYWxfaXJxICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9leHRlcm5hbF9pcnFcIiAgICAgICwgbnVsbCwgWydib29sJ10gKTsgICAgXHJcbiAgIFxyXG4gICB3YXNtX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgIFxyXG4gICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfd2FzbV9pbnN0YW5jZSgpIHtcclxuICAgcmV0dXJuIHdhc21faW5zdGFuY2U7XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gVE9ETyBzdGFydCBiYnMgb25seSB3aGVuIHJlcXVpcmVkXHJcbi8vIFRPRE8gcml1bmlmaWNhcmUgVGVybWluYWxlL1BFVFNDSUkgYmJzIGNvbiA2NDk5XHJcbi8vIFRPRE8gcHVzaCBDSUEgVE9EIHRvIGZsb29oL2NoaXBzXHJcbi8vIFRPRE8gdXBkYXRlIHRvIG5ldyBjNjQgaW4gZmxvb2gvY2hpcHNcclxuXHJcbi8vIG5vcm1hbCBCQlMgc3RhcnRzIHdpdGggP2xvYWQ9bmlwcHVyNzIvdGVybWluYWwucHJnXHJcbi8vIHByZXN0ZWwgQkJTIHN0YXJ0cyB3aXRoID9jYm02NDk5PXRydWVcclxuXHJcbi8qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVHZW9tZXRyeSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IHBvbGxfa2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBwZXRzY2lpIH0gZnJvbSBcIi4vcGV0c2NpaV9iYnNcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcblxyXG5sZXQgc3RvcHBlZCA9IGZhbHNlOyAvLyBhbGxvd3MgdG8gc3RvcC9yZXN1bWUgdGhlIGVtdWxhdGlvblxyXG5cclxubGV0IGxhc3Rfa2V5Ym9hcmRwb2xsID0gMDtcclxuXHJcbmxldCBsYXN0X3RpbWVzdGFtcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25lRnJhbWUodGltZXN0YW1wOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgbGV0IHN0YW1wID0gdGltZXN0YW1wID09IHVuZGVmaW5lZCA/IGxhc3RfdGltZXN0YW1wIDogdGltZXN0YW1wO1xyXG4gICBsZXQgdXNlYyA9IChzdGFtcCAtIGxhc3RfdGltZXN0YW1wKSoxMDAwO1xyXG4gICBsYXN0X3RpbWVzdGFtcCA9IHN0YW1wO1xyXG5cclxuICAgaWYodXNlYyA+IDMyMDAwKSB1c2VjID0gMzIwMDA7XHJcblxyXG4gICBpZihzdGFtcCAtIGxhc3Rfa2V5Ym9hcmRwb2xsID4gMTUpIHtcclxuICAgICAgcG9sbF9rZXlib2FyZCgpO1xyXG4gICAgICBsYXN0X2tleWJvYXJkcG9sbCA9IHN0YW1wO1xyXG4gICB9XHJcblxyXG4gICBjNjQuZXhlY191cyh1c2VjKTtcclxuXHJcbiAgIGlmKCFzdG9wcGVkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25lRnJhbWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuXHJcbiAgIGM2NC5jb25maWcoMCk7XHJcblxyXG4gICBjNjQuZXgoNTAwMCk7ICAgICAvLyB3YWl0IGZvciBtZW1vcnkgcGF0dGVybiB3cml0aW5nXHJcbiAgIGM2NC5tZW1fd3JpdGUoMjA0LDEpOyAvLyBmbGFncyBzeXN0ZW0gbm90IGJvb3RlZCB5ZXRcclxuXHJcbiAgIGxldCBvcHRpb25zID0gYXdhaXQgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzKCk7XHJcblxyXG4gICAvLyBhdXRvc3RhcnQgdGVybWluYWwgaWYgbG9hZGVkIGZyb20gYmJzLnNibGVuZG9yaW8udWUgb3IgYmJzLnJldHJvY2FtcHVzLmNvbVxyXG4gICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICBsZXQgaXNfcmV0cm9jYW1wdXMgPSBocmVmLm1hdGNoKC9eaHR0cDpcXC9cXC8oYmJzXFwuc2JsZW5kb3Jpb1xcLmV1fGJic1xcLnJldHJvY2FtcHVzXFwuY29tKS9nKTsgICBcclxuXHJcbiAgIHBldHNjaWkuYWRkcmVzcyA9IG9wdGlvbnMud3N0Y3AgPz8gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgwXCI7XHJcbiAgIHBldHNjaWkucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sID8/IFwiYmJzXCI7XHJcbiAgIGlmKGlzX3JldHJvY2FtcHVzIHx8IG9wdGlvbnMucGV0c2NpaWJicyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmKG9wdGlvbnMubG9hZCA9PT0gdW5kZWZpbmVkKSBmZXRjaFByb2dyYW0oXCJuaXBwdXI3Mi90ZXJtaW5hbC5wcmdcIik7XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZUdlb21ldHJ5KCk7XHJcblxyXG4gICBjNjQuZ28oKTsgICBcclxufVxyXG4iLCJpbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRlcm5hbExvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQ+IHtcbiAgIGNvbnNvbGUubG9nKFwiZXh0ZXJuYWxMb2FkIHVybD1cIiArIHVybCk7XG4gICB0cnkge1xuICAgICAgY29uc3QgcHJveHlVcmwgPSAnaHR0cHM6Ly92ZXJjZWwtY29ycy1wcm94eS1rYXBwYS52ZXJjZWwuYXBwLz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm94eVVybCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICBsZXQgZXJyb3JCb2R5ID0gXCJcIjtcbiAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlcnJvckJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfS4gQm9keTogJHtlcnJvckJvZHl9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICAgIFxuICAgICAgbG9hZEJ5dGVzKGJ5dGVzKTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIGV4dGVybmFsIHByb2dyYW0gdmlhIFZlcmNlbCBQcm94eS5cIik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZXh0ZXJuYWwgcHJvZ3JhbTpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgIH1cbn1cbiIsImltcG9ydCB7IGxvYWRCeXRlcyB9IGZyb20gXCIuL2ZpbGVzeXN0ZW1cIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2dyYW0obmFtZTogc3RyaW5nKVxyXG57XHJcbiAgIC8vY29uc29sZS5sb2coYHdhbnRpbmcgdG8gbG9hZCAke25hbWV9YCk7XHJcbiAgIHRyeVxyXG4gICB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYHNvZnR3YXJlLyR7bmFtZX1gKTtcclxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgbG9hZEJ5dGVzKGJ5dGVzKTtcclxuICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIGNhdGNoKGVycilcclxuICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7ICAgICAgXHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHBhc3RlLCBoZXggfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tIFwiZmlsZS1zYXZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCeXRlcyhieXRlczogVWludDhBcnJheSkge1xyXG4gICB3YWl0X2FuZF9sb2FkKGJ5dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2FpdF9hbmRfbG9hZChidWZmZXI6IFVpbnQ4QXJyYXkpIHtcclxuICAgaWYoYzY0Lm1lbV9yZWFkKDIwNCkhPT0wKSB7XHJcbiAgICAgIC8vIGN1cnNvciBub3QgZmxhc2hpbmcsIHN5c3RlbSBub3QgeWV0IGJvb3RlZFxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT53YWl0X2FuZF9sb2FkKGJ1ZmZlciksIDEwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG4gICBkb19sb2FkKGJ1ZmZlcik7XHJcbiAgIGNvbnNvbGUubG9nKGBsb2FkZWQgJHtidWZmZXIubGVuZ3RofSBieXRlc2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb19sb2FkKGJ1ZmZlcjogVWludDhBcnJheSkge1xyXG4gICBjNjQubG9hZF9wcmcoYnVmZmVyLCBidWZmZXIubGVuZ3RoKTtcclxuICAgcGFzdGUoXCJSVU5cXHJcIik7XHJcbn1cclxuXHJcbmNvbnN0IEJBU1RYVCA9IDB4MDAyYjtcclxuY29uc3QgUFJPR05EID0gMHgwMDJkO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVfZmlsZShmaWxlbmFtZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICBpZihzdGFydCA9PT0gdW5kZWZpbmVkKSBzdGFydCA9IGM2NC5tZW1fcmVhZF93b3JkKEJBU1RYVCk7XHJcbiAgIGlmKGVuZCA9PT0gdW5kZWZpbmVkKSBlbmQgPSBjNjQubWVtX3JlYWRfd29yZChQUk9HTkQpLTE7XHJcblxyXG4gICBjb25zdCBwcmcgPSBbIHN0YXJ0ICYgMHhGRiwgc3RhcnQgPj4gOCBdO1xyXG4gICBmb3IobGV0IGk9MCx0PXN0YXJ0OyB0PD1lbmQ7IGkrKyx0KyspIHtcclxuICAgICAgcHJnLnB1c2goYzY0Lm1lbV9yZWFkKHQpKTtcclxuICAgfVxyXG4gICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHByZyk7XHJcbiAgIFxyXG4gICBhd2FpdCBkb3dubG9hZChmaWxlbmFtZSwgYnl0ZXMpO1xyXG5cclxuICAgY29uc29sZS5sb2coYHNhdmVkIFwiJHtmaWxlbmFtZX1cIiAke2J5dGVzLmxlbmd0aH0gYnl0ZXMgZnJvbSAke2hleChzdGFydCw0KX1oIHRvICR7aGV4KGVuZCw0KX1oYCk7XHJcbiAgIC8vY3B1LnJlc2V0KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcsIGJ5dGVzOiBVaW50OEFycmF5KSB7ICAgXHJcbiAgIGxldCBibG9iID0gbmV3IEJsb2IoW2J5dGVzXSwge3R5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJ9KTsgICBcclxuICAgc2F2ZUFzKGJsb2IsIGZpbGVOYW1lKTtcclxuICAgY29uc29sZS5sb2coYGRvd25sb2FkZWQgXCIke2ZpbGVOYW1lfVwiYCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXVkaW9Db250ZXh0UmVzdW1lIH0gZnJvbSBcIi4vYXVkaW9cIjtcclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBfSBmcm9tIFwiLi9rZXlib2FyZF9JVFwiO1xyXG5cclxubGV0IGxhc3Rfc2Nyb2xsX2xvY2s6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG5sZXQgY29udHJvbF9wcmVzc2VkID0gZmFsc2U7XHJcbmxldCBhbHRfcHJlc3NlZCA9IGZhbHNlO1xyXG5sZXQgc2hpZnRfcHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24ga2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XHJcblxyXG4gICBpZihlLmNvZGUgPT09IFwiQ29udHJvbExlZnRcIikgY29udHJvbF9wcmVzc2VkID0gdHJ1ZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdExlZnRcIikgYWx0X3ByZXNzZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRMZWZ0XCIpIHNoaWZ0X3ByZXNzZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IHRydWU7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRSaWdodFwiKSBhbHRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdFJpZ2h0XCIpIHNoaWZ0X3ByZXNzZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgLypcclxuICAgY29uc29sZS5sb2coXCJrZXlEb3duXCIpO1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuICAgKi9cclxuXHJcbiAgIC8vIGZyb20gQ2hyb21lIDcxIGF1ZGlvIGlzIHN1c3BlbmRlZCBieSBkZWZhdWx0IGFuZCBtdXN0IHJlc3VtZSB3aXRoaW4gYW4gdXNlci1nZW5lcmF0ZWQgZXZlbnRcclxuICAgYXVkaW9Db250ZXh0UmVzdW1lKCk7XHJcblxyXG4gICBpZihsYXN0X3Njcm9sbF9sb2NrID09PSB1bmRlZmluZWQpIGxhc3Rfc2Nyb2xsX2xvY2sgPSBlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpO1xyXG5cclxuICAgaWYoZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKSE9bGFzdF9zY3JvbGxfbG9jaykge1xyXG4gICAgICBsZXQgc2Nyb2xsX2xvY2tfa2V5X3ByZXNzZWQgPSBlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpO1xyXG4gICAgICBsYXN0X3Njcm9sbF9sb2NrID0gc2Nyb2xsX2xvY2tfa2V5X3ByZXNzZWQ7XHJcbiAgICAgIGxldCBlbXVfam95c3RpY2sgPSBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZCA/IDMgOiAwO1xyXG4gICAgICBjNjQuZW11X2pveShlbXVfam95c3RpY2spO1xyXG4gICAgICBjb25zb2xlLmxvZyhgSm95c3RpY2sgZW11bGF0aW9uICR7ZW11X2pveXN0aWNrPT0zP1wiZW5hYmxlZFwiOlwiZGlzYWJsZWRcIn1gKTtcclxuICAgfVxyXG5cclxuICAgLy8gZGlzYWJsZSBhdXRvIHJlcGVhdCwgYXMgaXQgaXMgaGFuZGxlZCBvbiB0aGUgZmlybXdhcmVcclxuICAgaWYoZS5yZXBlYXQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgcmV0dXJuO1xyXG4gICB9ICAgXHJcblxyXG4gICAvLyAqKiogc3BlY2lhbCAobm9uIGNoYXJhY3RlcnMpIGtleXMgKioqXHJcblxyXG4gICAvLyBSRVNFVCBrZXkgaXMgQ1RSTCtBTFQrQlJFQUtcclxuICAgaWYoZS5jb2RlID09PSBcIlBhdXNlXCIgJiYgZS5hbHRLZXkgJiYgZS5jdHJsS2V5KSB7XHJcbiAgICAgIGM2NC5yZXNldCgpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIC8vIGlmIGtleWJvYXJkIElUQVxyXG4gICB7XHJcbiAgICAgIGNvbnN0IGhhcmR3YXJlX2tleXMgPSBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQShlLmNvZGUsIGUua2V5LCBlLnNoaWZ0S2V5LCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLmdldE1vZGlmaWVyU3RhdGUoXCJBbHRHcmFwaFwiKSApO1xyXG4gICAgICBpZihoYXJkd2FyZV9rZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicHJlc3NcIiwgaGFyZHdhcmVfa2V5cyB9KTtcclxuICAgICAgLy9rZXlfcHJlc3NlZC5wdXNoKGhhcmR3YXJlX2tleXMpO1xyXG4gICAgICBrZXlfcHJlc3NfbWFwW2UuY29kZV0gPSBoYXJkd2FyZV9rZXlzO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGBtYXAgYWZ0ZXIgcHJlc3M6ICR7T2JqZWN0LmtleXMoa2V5X3ByZXNzX21hcCkuam9pbihcIixcIil9YCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBrZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XHJcblxyXG4gICBpZihlLmNvZGUgPT09IFwiQ29udHJvbExlZnRcIikgY29udHJvbF9wcmVzc2VkID0gZmFsc2U7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRMZWZ0XCIpIGFsdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdExlZnRcIikgc2hpZnRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IGZhbHNlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0UmlnaHRcIikgYWx0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0UmlnaHRcIikgc2hpZnRfcHJlc3NlZCA9IGZhbHNlOyBcclxuICAgLy9jb25zb2xlLmxvZyhlLmNvZGUpO1xyXG5cclxuICAgLypcclxuICAgY29uc29sZS5sb2coXCJrZXlVcFwiKTtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiAgICovXHJcblxyXG4gICAvLyBmaXggYSBidWcgaW4gQ2hyb21lOiBwcmVzc2luZyBcIkFMVC1HUiBAXCIgcmVzdWx0cyBpbiBrZXlkb3duIG9mIFwiw7JcIiBpbnN0ZWFkIG9mIFwiQFwiXHJcbiAgIC8vaWYoZS5rZXkgPT09ICfDsicgJiYgZS5rZXlDb2RlID09PSAxOTIgJiYgZS53aGljaCA9PT0gMTkyKSB7XHJcbiAgIC8vICAgZS5rZXkgPSAnQCc7XHJcbiAgIC8vfVxyXG5cclxuICAgY29uc3QgaGFyZHdhcmVfa2V5cyA9IHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGUuY29kZSwgZS5rZXksIGUuc2hpZnRLZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuZ2V0TW9kaWZpZXJTdGF0ZShcIkFsdEdyYXBoXCIpKTtcclxuICAgaWYoaGFyZHdhcmVfa2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXMgfSk7XHJcblxyXG4gICAvLyBmaXggc2hpZnQgcHJvYmxlbVxyXG4gICAvL2tleV9wcmVzc2VkLmZvckVhY2goaz0+a2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czogayB9KSk7XHJcbiAgIC8va2V5X3ByZXNzZWQgPSBbXTtcclxuXHJcbiAgIGxldCBjb2RlID0gZS5jb2RlO1xyXG4gICAvL2NvbnNvbGUubG9nKGBtYXAgYmVmb3JlIHJlbGVhc2U6ICR7T2JqZWN0LmtleXMoa2V5X3ByZXNzX21hcCkuam9pbihcIixcIil9YCk7XHJcblxyXG4gICAvLyBmaXggc2hpZnQgcHJvYmxlbVxyXG4gICBpZihrZXlfcHJlc3NfbWFwW2NvZGVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGsgPSBrZXlfcHJlc3NfbWFwW2NvZGVdO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrIH0pO1xyXG4gICAgICBkZWxldGUga2V5X3ByZXNzX21hcFtjb2RlXTtcclxuICAgfVxyXG5cclxuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG4vLyBjb25uZWN0IERPTSBldmVudHNcclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50OyBcclxuZWxlbWVudC5vbmtleWRvd24gPSBrZXlEb3duO1xyXG5lbGVtZW50Lm9ua2V5dXAgPSBrZXlVcDtcclxuZWxlbWVudC5vbmtleXByZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGUua2V5ID09IFwiw6BcIikgYWNjZW50YXRlKFwiYVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOoXCIpIGFjY2VudGF0ZShcImVcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDqVwiKSBhY2NlbnRhdGUoXCJlXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6xcIikgYWNjZW50YXRlKFwiaVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOyXCIpIGFjY2VudGF0ZShcIm9cIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDuVwiKSBhY2NlbnRhdGUoXCJ1XCIpO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBhY2NlbnRhdGUoa2V5KSB7ICAgICAgXHJcbiAgIGtleURvd24oZmFrZUV2ZW50KGtleSkpOyAgIFxyXG4gICBrZXlVcChmYWtlRXZlbnQoa2V5KSk7ICAgXHJcbiAgIGtleURvd24oZmFrZUV2ZW50KFwiJ1wiKSk7XHJcbiAgIGtleVVwKGZha2VFdmVudChcIidcIikpOyAgIFxyXG59XHJcbiovXHJcblxyXG5mdW5jdGlvbiBhY2NlbnRhdGUoa2V5OiBzdHJpbmcpIHsgICAgICBcclxuICAgc2V0VGltZW91dCgoKT0+a2V5RG93bihmYWtlRXZlbnQoa2V5KSksIDApO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlVcCAgKGZha2VFdmVudChrZXkpKSwyMCk7IFxyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlEb3duKGZha2VFdmVudChcIidcIikpLDQwKTtcclxuICAgc2V0VGltZW91dCgoKT0+a2V5VXAgIChmYWtlRXZlbnQoXCInXCIpKSw2MCk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgIHJlc2V0X2tleWJvYXJkKCk7IC8vIHJlbGVhc2UgYWxsIGtleXMgdG8gcHJldmVudCBBTFQgYWx3YXlzIHByZXNzZWQgYWZ0ZXIgQUxUK1RBQlxyXG59XHJcblxyXG5mdW5jdGlvbiBmYWtlRXZlbnQoa2V5OiBzdHJpbmcpIHtcclxuICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBrZXksXHJcbiAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgIHNoaWZ0S2V5OiBmYWxzZSxcclxuICAgICAgY3RybEtleTogZmFsc2UsXHJcbiAgICAgIGFsdEtleTogZmFsc2UsXHJcbiAgICAgIGdldE1vZGlmaWVyU3RhdGU6ICgpPT5mYWxzZSxcclxuICAgICAgcHJldmVudERlZmF1bHQ6ICgpPT5mYWxzZVxyXG4gICB9IGFzIGFueSBhcyBLZXlib2FyZEV2ZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgS2V5Qm9hcmRfQzY0RXZlbnQge1xyXG4gICB0eXBlOiBcInByZXNzXCJ8XCJyZWxlYXNlXCI7XHJcbiAgIGhhcmR3YXJlX2tleXM6IG51bWJlcltdO1xyXG59XHJcblxyXG5sZXQga2V5Ym9hcmRfYnVmZmVyOiBLZXlCb2FyZF9DNjRFdmVudFtdID0gW107XHJcbi8vbGV0IGtleV9wcmVzc2VkID0gW107XHJcbmxldCBrZXlfcHJlc3NfbWFwOiB7W2tleTpzdHJpbmddOiBudW1iZXJbXX0gPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiByZXNldF9rZXlib2FyZCgpIHtcclxuXHJcbiAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoa2V5X3ByZXNzX21hcCk7XHJcblxyXG4gICBrZXlzLmZvckVhY2goaz0+e1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGBjbGVhcmluZyAke2t9YCk7XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGtleV9wcmVzc19tYXBba10gfSk7XHJcbiAgICAgIGRlbGV0ZSBrZXlfcHJlc3NfbWFwW2tdO1xyXG4gICB9KTtcclxuXHJcbiAgIGtleV9wcmVzc19tYXAgPSB7fTsgIFxyXG59XHJcblxyXG5sZXQga2V5Ym9hcmRfYnVmZmVyX2VtcHR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsX2tleWJvYXJkKCkge1xyXG4gICAvLyBwb2xsIGtleWJvYXJkXHJcbiAgIHdoaWxlKGtleWJvYXJkX2J1ZmZlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBrZXlfZXZlbnQgPSBrZXlib2FyZF9idWZmZXJbMF07XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlciA9IGtleWJvYXJkX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyX2VtcHR5ID0ga2V5Ym9hcmRfYnVmZmVyLmxlbmd0aCA9PSAwO1xyXG5cclxuICAgICAgaWYoa2V5X2V2ZW50LnR5cGUgPT09IFwicHJlc3NcIikge1xyXG4gICAgICAgICBsZXQga2V5cyA9IGtleV9ldmVudC5oYXJkd2FyZV9rZXlzO1xyXG4gICAgICAgICAvL2tleXMuZm9yRWFjaCgoaykgPT4gY29uc29sZS5sb2coaykpO1xyXG4gICAgICAgICBrZXlzLmZvckVhY2goKGs6IG51bWJlcikgPT4gYzY0LmtleV9kb3duKGspKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGtleV9ldmVudC50eXBlID09PSBcInJlbGVhc2VcIikge1xyXG4gICAgICAgICBsZXQga2V5cyA9IGtleV9ldmVudC5oYXJkd2FyZV9rZXlzO1xyXG4gICAgICAgICAvL2tleXMuZm9yRWFjaCgoaykgPT4gY29uc29sZS5sb2coaykpO1xyXG4gICAgICAgICBrZXlzLmZvckVhY2goKGspID0+IGM2NC5rZXlfdXAoaykpO1xyXG4gICAgICAgICBpZihrZXlib2FyZF9idWZmZXJfZW1wdHkgJiYgIWNvbnRyb2xfcHJlc3NlZCAmJiAhYWx0X3ByZXNzZWQgJiYgIXNoaWZ0X3ByZXNzZWQpIHtcclxuICAgICAgICAgICAgZm9yKGxldCB0PTA7dDwyNTY7dCsrKSBjNjQua2V5X3VwKHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8qXHJcbiAgICAgNyAgIDYgICA1ICAgNCAgIDMgICAyICAgMSAgIDBcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgN3wgRjcgIEY1ICBGMyAgRjEgIENETiBDUlQgUkVUIERFTCAgICBDUlQ9Q3Vyc29yLVJpZ2h0LCBDRE49Q3Vyc29yLURvd25cclxuICAgfFxyXG4gIDZ8IEhPTSBVQSAgPSAgIFJTSCAvICAgOyAgICogICBCUCAgICAgQlA9QnJpdGlzaCBQb3VuZCwgUlNIPVNob3VsZCBiZSBSaWdodC1TSElGVCxcclxuICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVBPVVwIEFycm93XHJcbiAgNXwgLSAgIEAgICA6ICAgLiAgICwgICBMICAgUCAgICtcclxuICAgfFxyXG4gIDR8IDAgICBPICAgSyAgIE0gICBOICAgSiAgIEkgICA5XHJcbiAgIHxcclxuICAzfCA4ICAgVSAgIEggICBCICAgViAgIEcgICBZICAgN1xyXG4gICB8XHJcbiAgMnwgNiAgIFQgICBGICAgQyAgIFggICBEICAgUiAgIDVcclxuICAgfFxyXG4gIDF8IDQgICBFICAgUyAgIFogICBMU0ggQSAgIFcgICAzICAgICAgTFNIPVNob3VsZCBiZSBMZWZ0LVNISUZUXHJcbiAgIHxcclxuICAwfCAyICAgUSAgIENCTSBTUEMgU1RQIENUTCBMQSAgMSAgICAgIExBPUxlZnQgQXJyb3csIENUTD1TaG91bGQgYmUgQ1RSTCwgU1RQPVJVTi9TVE9QXHJcbiAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQk09Q29tbW9kb3JlIGtleVxyXG5cclxuICAgKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQShjb2RlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzaGlmdDogYm9vbGVhbiwgY29udHJvbDogYm9vbGVhbiwgY2JtOiBib29sZWFuLCBhbHRncmFwaDogYm9vbGVhbikge1xyXG4gICAvL2NvbnNvbGUubG9nKGNvZGUsIGtleSwgZSk7XHJcbiAgIC8vY29uc29sZS5sb2coZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKSk7XHJcblxyXG4gICBsZXQgaGFyZHdhcmVfa2V5cyA9IFtdO1xyXG5cclxuICAgaWYoa2V5ID09PSBcIjFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiMVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiMlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiM1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiNFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiNVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiNlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiN1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiOFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjlcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiOVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiMFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiIVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSAnXCInKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggJ1wiJy5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCo1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ+XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiI1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIjXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiJFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIkXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiJVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIlXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiJlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCImXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiL1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIvXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiKFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIoXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiKVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIpXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiPVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI9XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiJ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCInXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiP1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI/XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiXlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJeXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiW1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJbXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiXVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJdXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwrBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiW1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIrXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIitcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIqXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIipcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLDp1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJAXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJAXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiI1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIjXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiPFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI8XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiPlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI+XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiLFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIsXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiO1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI7XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiLlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIuXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI6XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiLVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCItXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwicVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJxXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ3XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIndcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiclwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJyXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ0XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInRcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInlcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwieVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwidVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ1XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJpXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImlcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwib1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwicFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJwXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJhXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImFcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwic1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJkXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJmXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImZcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZ1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiaFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJoXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJqXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImpcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImtcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwia1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwibFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJsXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ6XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInpcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwieFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiY1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJjXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ2XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInZcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiYlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiblwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJuXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJtXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm1cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiUVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiV1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJXXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJFXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkVcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiUlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiVFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJUXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJZXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIllcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiVVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiSVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJJXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJPXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk9cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiUFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJBXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJTXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlNcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJGXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJHXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkdcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiSFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiSlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJKXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJLXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIktcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkxcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiTFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiWlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJaXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJYXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlhcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQ1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiVlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJWXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJCXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkJcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiTlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJNXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcblxyXG4gICBpZihrZXkgPT09IFwiX1wiKSAgICAgICAgIHsgaGFyZHdhcmVfa2V5cy5wdXNoKCA2NCk7IGhhcmR3YXJlX2tleXMucHVzaCggMHgwRiApOyAgfSAgLy8gc2ltdWxhdGUgdW5kZXJzY29yZVxyXG5cclxuICAgLy8gRktFWVNcclxuICAgaWYoY29kZSA9PT0gXCJGMVwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYxICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjJcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMiApO1xyXG4gICBpZihjb2RlID09PSBcIkYzXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjMgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNFwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY0ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjVcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNSApO1xyXG4gICBpZihjb2RlID09PSBcIkY2XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjYgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGN1wiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY3ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjhcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGOCApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJTcGFjZVwiKSAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDIwICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93TGVmdFwiKSAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDggICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwOSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd0Rvd25cIikgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBhICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93VXBcIikgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MGIgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkRlbGV0ZVwiKSAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDEgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiSW5zZXJ0XCIpICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgxMCAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiQmFja3NwYWNlXCIgJiYgIHNoaWZ0KSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MTAgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQmFja3NwYWNlXCIgJiYgIXNoaWZ0KSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDEgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkVudGVyXCIpICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEQgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiTnVtcGFkRW50ZXJcIikgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRCAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRXNjYXBlXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMyAgKTsgIC8vIHJ1biBzdG9wXHJcbiAgIGlmKGNvZGUgPT09IFwiRXNjYXBlXCIgJiYgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwNyAgKTsgIC8vIHNoaWZ0ICsgcnVuIHN0b3BcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiSG9tZVwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEMgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiSG9tZVwiICYmIHNoaWZ0KSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDIgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkJhY2txdW90ZVwiKSAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA0ICApOyAgLy8gbGVmdCBhcnJvd1xyXG5cclxuICAgaWYoY29udHJvbCAmJiAhYWx0Z3JhcGgpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRSApOyAgLy8gZW11bGF0ZSBDVFJMXHJcbiAgIC8vaWYoY2JtKSAgICAgICAgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRiApOyAgLy8gZW11bGF0ZSBDQk1cclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRW5kXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJAXCIuY2hhckNvZGVBdCgwKSApO1xyXG5cclxuICAgLypcclxuICAgaWYoY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiVGFiXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRSApOyAgLy8gZW11bGF0ZSBDVFJMXHJcbiAgICovXHJcblxyXG4gICBpZigoY29kZSA9PT0gXCJDb250cm9sTGVmdFwiIHx8IGNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpICYmICFhbHRncmFwaCkgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRSApOyAgLy8gZW11bGF0ZSBDVFJMXHJcbiAgIGlmKChjb2RlID09PSBcIkFsdExlZnRcIiB8fCBjb2RlID09IFwiQWx0UmlnaHRcIikpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRiApOyAgLy8gZW11bGF0ZSBDQk1cclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiUGFnZVVwXCIpICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGRiApOyAgLy8gZW11bGF0ZSBSRVNUT1JFXHJcbiAgIGlmKGNvZGUgPT09IFwiUGFnZURvd25cIikgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMzUgKTsgICAgLy8gXCIjXCJcclxuXHJcbiAgIHJldHVybiBoYXJkd2FyZV9rZXlzO1xyXG59XHJcbiIsImltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2dyYW0gfSBmcm9tIFwiLi9mZXRjaFByb2dyYW1cIjtcclxuaW1wb3J0IHsgZXh0ZXJuYWxMb2FkIH0gZnJvbSBcIi4vZXh0ZXJuYWxMb2FkXCI7XHJcbmltcG9ydCB7IHZpZGVvdGVsIH0gZnJvbSBcIi4vY2JtXzY0OTkvY2JtXzY0OTlcIjtcclxuXHJcbnR5cGUgUXVlcnlTdHJpbmdPYmplY3QgPSB7W2tleTogc3RyaW5nXTpzdHJpbmd9O1xyXG5cclxuZnVuY3Rpb24gZ2V0UXVlcnlTdHJpbmdPYmplY3QoKSB7XHJcbiAgIGxldCBhID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIiZcIik7XHJcbiAgIGxldCBvID0gYS5yZWR1Y2UoKG86IFF1ZXJ5U3RyaW5nT2JqZWN0LCB2KSA9PntcclxuICAgICAgdmFyIGt2ID0gdi5zcGxpdChcIj1cIik7XHJcbiAgICAgIGNvbnN0IGtleSA9IGt2WzBdLnJlcGxhY2UoXCI/XCIsIFwiXCIpO1xyXG4gICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGt2WzFdO1xyXG4gICAgICBvW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIG87XHJcbiAgIH0sIHt9KTtcclxuICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nQ29tbWFuZHMoKSB7XHJcbiAgIGxldCBvcHRpb25zID0gZ2V0UXVlcnlTdHJpbmdPYmplY3QoKTsgIFxyXG5cclxuICAgaWYob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjNjQuY29uZmlnKE51bWJlcihvcHRpb25zLmNvbmZpZykpO1xyXG4gICB9XHJcblxyXG4gICBpZihvcHRpb25zLmpveSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGM2NC5lbXVfam95KE51bWJlcihvcHRpb25zLmpveSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgSm95c3RpY2sgZW11bGF0aW9uICR7TnVtYmVyKG9wdGlvbnMuam95KSE9MD9cImVuYWJsZWRcIjpcImRpc2FibGVkXCJ9YCk7XHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMubG9hZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBvcHRpb25zLmxvYWQ7XHJcbiAgICAgIGlmKG5hbWUuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcclxuICAgICAgICAgLy8gZXh0ZXJuYWwgbG9hZFxyXG4gICAgICAgICBhd2FpdCBleHRlcm5hbExvYWQobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIGludGVybmFsIGxvYWRcclxuICAgICAgICAgYXdhaXQgZmV0Y2hQcm9ncmFtKG5hbWUpO1xyXG4gICAgICB9ICAgXHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuY2JtNjQ5OSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZpZGVvdGVsLmFkZHJlc3MgPSBvcHRpb25zLndzdGNwID8/IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MVwiOyAgICAgIFxyXG4gICAgICB2aWRlb3RlbC5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgPz8gXCJiYnNcIjtcclxuICAgICAgYzY0LnNldF9leHJvbSh0cnVlKTtcclxuICAgICAgYzY0LnNldF9lbXVsYXRlX2NibV82NDk5KHRydWUpOyBcclxuICAgICAgYzY0LnJlc2V0KCk7ICAgICBcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgQkJTQ29ubmVjdG9yIH0gZnJvbSBcIi4vYmJzX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQgeyBzdHJpbmcyVWludDhBcnJheSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5sZXQgbW9kZW1fdHJhbnNtaXRfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG5sZXQgbW9kZW1fcmVjZWl2ZV9idWZmZXI6IG51bWJlcltdID0gW107XHJcblxyXG5jb25zdCBNT0RFTV9EQVRBX09VVCA9IDB4RDdGMjtcclxuY29uc3QgTU9ERU1fREFUQV9JTiAgPSAweEQ3RjA7XHJcbmNvbnN0IE1PREVNX0RBVEFfUkVRID0gMHhEN0YzO1xyXG5jb25zdCBNT0RFTV9BQ0sgICAgICA9IDB4RDdGMTtcclxuY29uc3QgTU9ERU1fQ09OTlNUICAgPSAweEQ3RjQ7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgcmVhZHMgaW4gdGhlIHJhbmdlICREN0YwLSREN0ZGXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbV9yZWFkKGFkZHI6IG51bWJlcilcclxue1xyXG4gICBpZihhZGRyID09IE1PREVNX0RBVEFfSU4pIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiBtb2RlbV9yZWNlaXZlX2J1ZmZlclswXTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGFkZHIgPT0gTU9ERU1fREFUQV9SRVEpIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiAyNTU7XHJcbiAgIH1cclxuICAgZWxzZSBpZihhZGRyID09IE1PREVNX0NPTk5TVCkge1xyXG4gICAgICBpZighcGV0c2NpaS5jb25uZWN0ZWQpIHJldHVybiAyO1xyXG4gICAgICBlbHNlIHJldHVybiAwO1xyXG4gICB9XHJcbn1cclxuXHJcbmxldCBtb2RlbV9zdGF0ZSA9IDA7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIGluIHRoZSByYW5nZSAkRDdGMC0kRDdGRlxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1fd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkcj09TU9ERU1fQUNLKVxyXG4gICB7XHJcbiAgICAgIGlmKGRhdGE9PTApIHtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGRhdGE9PTEgJiYgbW9kZW1fc3RhdGU9PTApIHtcclxuICAgICAgICAgbW9kZW1fcmVjZWl2ZV9idWZmZXIgPSBtb2RlbV9yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgaWYoYWRkcj09TU9ERU1fREFUQV9PVVQpIHtcclxuICAgICAgbW9kZW1fdHJhbnNtaXRfYnVmZmVyLnB1c2goZGF0YSk7XHJcbiAgICAgIHBldHNjaWkuc2VuZF9kYXRhX3RvX2Jicyhtb2RlbV90cmFuc21pdF9idWZmZXIpO1xyXG4gICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIgPSBbXTtcclxuICAgICAgaWYoIXBldHNjaWkuY29ubmVjdGVkKSBwZXRzY2lpLmNvbm5lY3QoKTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgbGV0IHBldHNjaWkgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG5wZXRzY2lpLm9uX2Vycm9yID0gKGVycik9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgcHJpbnRtKGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IEVSUk9SIENPTk5FQ1RJTkcgVE8gV0VCU09DS0VUXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX29wZW4gPSAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3RlZCcpO1xyXG4gICAvLyBwcmludG0oYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gQ09OTkVDVEVEXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICBjb25zb2xlLmxvZygnQkJTOiBkaXNjb25uZWN0ZWQnKTsgICAgICBcclxufTtcclxuXHJcbnBldHNjaWkub25fZGF0YSA9IChieXRlcykgPT4ge1xyXG4gICBieXRlcy5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59O1xyXG4gICBcclxuZnVuY3Rpb24gcHJpbnRtKG1zZzogc3RyaW5nKSB7XHJcbiAgIGxldCBkYXRhID0gc3RyaW5nMlVpbnQ4QXJyYXkobXNnKTtcclxuICAgZGF0YS5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59IiwiLyoqKiogdXRpbGl0eSBmdW5jdGlvbnMgKioqKi9cclxuXHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleCh2YWx1ZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gMjtcclxuICAgbGV0IHMgPSBcIjAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlTGluZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICBmb3IobGV0IHQ9MDsgdDxsaW5lcy5sZW5ndGg7IHQrKykge1xyXG4gICAgICBjb25zdCBsaW5lYSA9IGxpbmVzW3RdO1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lYSk7XHJcbiAgICAgIHBhc3RlKGxpbmVhKTtcclxuICAgICAgcGFzdGVDaGFyKDEzKTsgICAvLyBDUlxyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKFwicGFzdGVkIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlKGxpbmU6IHN0cmluZykge1xyXG5cclxuICAgZm9yKGxldCB0PTA7dDxsaW5lLmxlbmd0aDt0KyspIHtcclxuICAgICAgbGV0IGMgPSBsaW5lLmNoYXJDb2RlQXQodCk7XHJcbiAgICAgIHBhc3RlQ2hhcihjKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXN0ZUNoYXIoYzogbnVtYmVyKSB7XHJcbiAgIHdoaWxlKGM2NC5wZWVrKDE5OCkgIT09IDApIHtcclxuICAgICAgYzY0LmV4KDE2MDAwKTtcclxuICAgfVxyXG4gICBjNjQucG9rZSg2MzEsYyk7XHJcbiAgIGM2NC5wb2tlKDE5OCwxKTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZHVtcE1lbShzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGlmKGVuZD09dW5kZWZpbmVkKSBlbmQ9c3RhcnQrMTU7XHJcbiAgIGlmKHJvd3M9PXVuZGVmaW5lZCkgcm93cz0xNjtcclxuICAgbGV0IHM9XCJcXHJcXG5cIjtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBoZXgociwgNCkgKyBcIjogXCI7ICAgICAgXHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSAoYnl0ZT4zMiAmJiBieXRlPDEyNykgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpIDogJy4nIDtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhEdW1wKG1lbW9yeSwgc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcz1cIlwiO1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjxlbmQ7cis9cm93cykge1xyXG4gICAgICBzKz0gaGV4KHIsIDQpICsgXCI6IFwiOyAgICAgIFxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IChieXRlPjMyICYmIGJ5dGU8MTI3KSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkgOiAnLicgO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgIH1cclxuICAgcmV0dXJuIHM7XHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBiaW4odmFsdWUsIHNpemUpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gODtcclxuICAgbGV0IHMgPSBcIjAwMDAwMDAwMDAwMDAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDIpO1xyXG4gICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3B1X3N0YXR1cygpIHtcclxuICAgY29uc3Qgc3RhdGUgPSBjcHUuZ2V0U3RhdGUoKTtcclxuICAgcmV0dXJuIGBBPSR7aGV4KHN0YXRlLmEpfSBCQz0ke2hleChzdGF0ZS5iKX0ke2hleChzdGF0ZS5jKX0gREU9JHtoZXgoc3RhdGUuZCl9JHtoZXgoc3RhdGUuZSl9IEhMPSR7aGV4KHN0YXRlLmgpfSR7aGV4KHN0YXRlLmwpfSBJWD0ke2hleChzdGF0ZS5peCw0KX0gSVk9JHtoZXgoc3RhdGUuaXksNCl9IFNQPSR7aGV4KHN0YXRlLnNwLDQpfSBQQz0ke2hleChzdGF0ZS5wYyw0KX0gUz0ke3N0YXRlLmZsYWdzLlN9LCBaPSR7c3RhdGUuZmxhZ3MuWn0sIFk9JHtzdGF0ZS5mbGFncy5ZfSwgSD0ke3N0YXRlLmZsYWdzLkh9LCBYPSR7c3RhdGUuZmxhZ3MuWH0sIFA9JHtzdGF0ZS5mbGFncy5QfSwgTj0ke3N0YXRlLmZsYWdzLk59LCBDPSR7c3RhdGUuZmxhZ3MuQ31gOyAgIFxyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gd2FpdCh0aW1lKSB7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0aW1lKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHphcCgpIHsgICAgICAgICAgICBcclxuICAgcmFtLmZvckVhY2goKGUsaSk9PnJhbVtpXT0weDAwKTtcclxuICAgbGV0IHN0YXRlID0gY3B1LmdldFN0YXRlKCk7XHJcbiAgIHN0YXRlLmhhbHRlZCA9IHRydWU7XHJcbiAgIGNwdS5zZXRTdGF0ZShzdGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvd2VyKCkgeyAgICAgIFxyXG4gICB6YXAoKTtcclxuICAgc2V0VGltZW91dCgoKT0+Y3B1LnJlc2V0KCksIDIwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3AoKSB7ICAgXHJcbiAgIHN0b3BBdWRpbygpO1xyXG4gICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gc3RvcHBlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ28oKSB7XHJcbiAgIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgb25lRnJhbWUoKTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gcmVzdW1lZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mbygpIHtcclxuICAgY29uc3QgYXZlcmFnZSA9IGF2ZXJhZ2VGcmFtZVRpbWUvMTAwMDtcclxuICAgY29uc29sZS5sb2coYGZyYW1lIHJhdGU6IGF2ZXJhZ2UgJHtNYXRoLnJvdW5kKGF2ZXJhZ2UqMTAsMikvMTB9IG1zICgke01hdGgucm91bmQoMS9hdmVyYWdlKjEwMDApfSBIeilgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgfCAoMTw8Yml0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgJiB+KDE8PGJpdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQodmFsdWUsIGJpdG1hc2spIHtcclxuICAgcmV0dXJuIHZhbHVlIHwgYml0bWFzazsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zZWMpIHtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgc2V0VGltZW91dCgoKT0+cmVzb2x2ZSgpLCBtc2VjKTtcclxuICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNldCh2YWx1ZSwgYml0bWFzaykge1xyXG4gICByZXR1cm4gdmFsdWUgJiAoMHhGRiBeIGJpdG1hc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkdW1wUG9pbnRlcnMoKSB7XHJcbiAgIGNvbnNvbGUubG9nKGBcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gICgweCR7aGV4KFBST0dORCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoUFJPR05EKSw0KX1cclxuICAgfCAgICAgQkFTSUMgcHJvZ3JhbSAgICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gVFhUVEFCICgweCR7aGV4KEJBU1RYVCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoQkFTVFhUKSw0KX1cclxuICAgfCAgICBTeXN0ZW0gdmFyaWFibGVzICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgMHg4MDAwXHJcbmApO1xyXG59XHJcblxyXG5sZXQgZGVidWdCZWZvcmUgPSB1bmRlZmluZWQ7XHJcbmxldCBkZWJ1Z0FmdGVyID0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gYml0KGIsbikge1xyXG4gICByZXR1cm4gKGIgJiAoMTw8bikpPjAgPyAxIDogMDtcclxufSBcclxuXHJcbmZ1bmN0aW9uIG5vdF9iaXQoYixuKSB7XHJcbiAgIHJldHVybiAoYiAmICgxPDxuKSk+MCA/IDAgOiAxO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZHVtcFN0YWNrKCkge1xyXG4gICBjb25zdCBzcCA9IGNwdS5nZXRTdGF0ZSgpLnNwO1xyXG5cclxuICAgZm9yKGxldCB0PXNwO3Q8PTB4ZmZmZjt0Kz0yKSB7XHJcbiAgICAgIGNvbnN0IHdvcmQgPSBtZW1fcmVhZF93b3JkKHQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtoZXgodCw0KX06ICR7aGV4KHdvcmQsNCl9ICAoJHt3b3JkfSlgKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmRzV2l0aChzLCB2YWx1ZSkge1xyXG4gICByZXR1cm4gcy5zdWJzdHIoLXZhbHVlLmxlbmd0aCkgPT09IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBkZXN0KSB7XHJcbiAgIHNvdXJjZS5mb3JFYWNoKChlLGkpPT5kZXN0W2ldID0gZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VfbG0oc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcztcclxuICAgcyA9IGAxMCBGT1IgVD0mSCR7aGV4KHN0YXJ0LDQpfSBUTyAmSCR7aGV4KGVuZCw0KX1cXG5gO1xyXG4gICBzKz0gYDIwIFJFQUQgQjpQT0tFIFQsQlxcbmA7XHJcbiAgIHMrPSBgMzAgTkVYVFxcbmA7XHJcbiAgIHMrPSBgNDAgU1lTICZIJHtoZXgoc3RhcnQsNCl9XFxuYDtcclxuICAgcys9IGA1MCBFTkRcXG5gO1xyXG4gICBsZXQgbmxpbmUgPSAxMDAwO1xyXG4gICBpZihyb3dzPT11bmRlZmluZWQpIHJvd3M9ODtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBgJHtubGluZX0gREFUQSBgO1xyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSBgJHtieXRlfWA7XHJcbiAgICAgICAgIGlmKGMhPXJvd3MtMSAmJiAocitjKSE9ZW5kKSBzKz1cIixcIjtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICAgICBubGluZSArPSAxMDtcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG1yKClcclxue1xyXG4gICByZXR1cm4gbWVtX3JlYWRfd29yZChUTVJDTlQpICsgKG1lbV9yZWFkX3dvcmQoVE1SQ05UKzIpIDw8IDE2KTtcclxufVxyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5sZXQgY291bnRlcl9hdmcgPSAwO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRfY291bnRlcigpIHtcclxuICAgY291bnRlciA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wX2NvdW50ZXIoKSB7XHJcbiAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgbGV0IGNudCA9IGNvdW50ZXI7XHJcbiAgIGlmKGNudCA9PT0gMCkgY250ID0gbm93XHJcbiAgIGxldCBlbGFwc2VkID0gbm93IC0gY250OyAgIFxyXG4gICBjb3VudGVyX2F2ZyA9IDAuOSAqIGNvdW50ZXJfYXZnICsgMC4xICogZWxhcHNlZDtcclxuICAgcmV0dXJuIGNvdW50ZXJfYXZnO1xyXG59XHJcblxyXG5sZXQgTEVEID0gMDtcclxuZnVuY3Rpb24gbGVkX3JlYWQoKSB7XHJcbiAgIHJldHVybiBMRUQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZF93cml0ZSh2YWx1ZSkge1xyXG4gICBMRUQgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8gbWFrZSBhIGxvbmcgdXJsIGZyb20gYW4gZXhpc3Rpbmcgc2F2ZWQgcHJvZ3JhbVxyXG5hc3luYyBmdW5jdGlvbiBtYWtlQmFzZTY0KGZpbGVOYW1lKSB7XHJcbiAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZEZpbGUoZmlsZU5hbWUpO1xyXG4gICBsZXQgbG9uZ191cmwgPSB3aW5kb3cuYnRvYShieXRlcyk7XHJcbiAgIGNvbnNvbGUubG9nKGBodHRwczovL25pcHB1cjcyLmdpdGh1Yi5pby9jNjQtZW11P2I9JHtsb25nX3VybH1gKTtcclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZzJVaW50OEFycmF5KHN0cjogc3RyaW5nKSB7XHJcbiAgIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgIGZvcihsZXQgdD0wOyB0PHN0ci5sZW5ndGg7IHQrKylcclxuICAgICAgYXJyLnB1c2goc3RyLmNoYXJDb2RlQXQodCkgJiAweEZGKTtcclxuXHJcbiAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyU3RyaW5nKGRhdGE6IG51bWJlcltdKSB7XHJcbiAgIGxldCBzdHIgPSBcIlwiO1xyXG5cclxuICAgZm9yKHZhciBpbmRleD0wOyBpbmRleDxkYXRhLmxlbmd0aDsgaW5kZXgrKylcclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpbmRleF0pO1xyXG5cclxuICAgcmV0dXJuIHN0cjtcclxufSIsImltcG9ydCB7IGdldF93YXNtX2luc3RhbmNlIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG4vLyBnb29kIHZhbHVlcyBmb3IgQ1JUIFBBTFxyXG5jb25zdCBTQ1JFRU5fVyA9IDM5MjtcclxuY29uc3QgU0NSRUVOX0ggPSAyNzI7XHJcbmNvbnN0IFBPU19YID0gMyo4O1xyXG5jb25zdCBQT1NfWSA9IDMqODtcclxuY29uc3QgUElYRUxfV0lEVEggPSAyO1xyXG5cclxuLypcclxuLy8gdmFsdWVzIGZvciBkZWJ1Z1xyXG5sZXQgU0NSRUVOX1cgPSAyODQ7XHJcbmxldCBTQ1JFRU5fSCA9IDMxMjtcclxubGV0IFBPU19YID0gMDtcclxubGV0IFBPU19ZID0gMDtcclxuKi9cclxuXHJcbmxldCBzYXR1cmF0aW9uID0gMS4wO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUdlb21ldHJ5KCkge1xyXG4gICAvLyBjYW52YXMgaXMgdGhlIG91dGVyIGNhbnZhcyB3aGVyZSB0aGUgYXNwZWN0IHJhdGlvIGlzIGNvcnJlY3RlZFxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGNhbnZhcy53aWR0aCAgPSBTQ1JFRU5fVyAqIFBJWEVMX1dJRFRIIC0gKFBPU19YKlBJWEVMX1dJRFRIKTtcclxuICAgY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IICogUElYRUxfV0lEVEggLSAoUE9TX1kqUElYRUxfV0lEVEgpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKlxyXG5sZXQgV1cgPSAyMzI7XHJcbmxldCBISCA9IDI3MjtcclxuKi9cclxuXHJcbmxldCBXVyA9IFNDUkVFTl9XO1xyXG5sZXQgSEggPSBTQ1JFRU5fSDtcclxuXHJcbmxldCB2aWNfaWlfY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCB2aWNfaWlfY29udGV4dCA9IHZpY19paV9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmRwX3NjcmVlbl91cGRhdGUocHRyOiBudW1iZXIpIHtcclxuICAgLypcclxuICAgLy8gMSBwaXhlbCB3aWRlIHZlcnNpb25cclxuICAgbGV0IHNpemUxID0gV1cqSEgqNDtcclxuICAgY29uc3QgaGVhcCA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFU4LnN1YmFycmF5KHB0cixwdHIrc2l6ZTEpO1xyXG4gICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGhlYXApOyAgICAgICBcclxuICAgY29uc3QgaW1nID0gbmV3IEltYWdlRGF0YShkYXRhLCBXVywgSEgpO1xyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKGltZywgMCwgMCk7ICAgXHJcbiAgIHJldHVybjtcclxuICAgKi9cclxuICAgICBcclxuICAgLy8gMiBwaXhlbCB3aWRlIHZlcnNpb25cclxuICAgbGV0IHNpemUxID0gV1cqSEgqNCpQSVhFTF9XSURUSCpQSVhFTF9XSURUSDtcclxuICAgY29uc3QgaGVhcCA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFU4LnN1YmFycmF5KHB0cixwdHIrc2l6ZTEpO1xyXG4gICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGhlYXApOyAgICAgICBcclxuICAgY29uc3QgaW1nID0gbmV3IEltYWdlRGF0YShkYXRhLCBXVypQSVhFTF9XSURUSCwgSEgqUElYRUxfV0lEVEgpO1xyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKGltZywgLVBPU19YLCAtUE9TX1kpOyAgIFxyXG59XHJcblxyXG4vKlxyXG5cclxuLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcblxyXG5sZXQgdmljX2lpX2ltYWdlRGF0YSA9IHZpY19paV9jb250ZXh0IS5jcmVhdGVJbWFnZURhdGEoV1cqMiwgSEgqMik7XHJcbmxldCBibXAgPSBuZXcgVWludDMyQXJyYXkodmljX2lpX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmRwX3NjcmVlbl91cGRhdGVfb2xkKHB0cjogbnVtYmVyKSB7ICAgXHJcbiAgIGxldCBzdGFydCA9IHB0ciAvIGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgbGV0IHNpemUgPSBXVypISDtcclxuICAgbGV0IGJ1ZmZlciA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5zdWJhcnJheShzdGFydCxzdGFydCtzaXplKTsgICBcclxuXHJcbiAgIGxldCBwdHIwID0gMDtcclxuICAgbGV0IHB0cjEgPSAwO1xyXG4gICBsZXQgcHRyMiA9IFdXKjI7ICAgXHJcblxyXG4gICBmb3IobGV0IHk9MDt5PEhIO3krKykge1xyXG4gICAgICBmb3IobGV0IHg9MDt4PFdXO3grKykge1xyXG4gICAgICAgICBsZXQgcGl4ZWwgPSBidWZmZXJbcHRyMF07XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIHB0cjArKztcclxuICAgICAgfVxyXG4gICAgICBwdHIxICs9IFdXKjI7XHJcbiAgICAgIHB0cjIgKz0gV1cqMjtcclxuICAgfVxyXG4gICBcclxuICAgLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcbiAgIC8vdmljX2lpX2ltYWdlRGF0YS5kYXRhLnNldChpbWFnZWRhdGFfYnVmOCk7XHJcbiAgIC8vdmljX2lpX2NvbnRleHQucHV0SW1hZ2VEYXRhKHZpY19paV9pbWFnZURhdGEsIC1QT1NfWCwgLVBPU19ZKTtcclxuICAgXHJcbiAgIC8vIG5ldyBtZXRob2RcclxuICAgdmljX2lpX2NvbnRleHQhLnB1dEltYWdlRGF0YSh2aWNfaWlfaW1hZ2VEYXRhLCAtUE9TX1gsIC1QT1NfWSk7XHJcblxyXG4gICAvL2ZyYW1lcysrO1xyXG4gICAvL2lmKGVuZF9vZl9mcmFtZV9ob29rICE9PSB1bmRlZmluZWQpIGVuZF9vZl9mcmFtZV9ob29rKCk7XHJcbn1cclxuKi9cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgbG9hZF93YXNtIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9lbXVsYXRvclwiO1xyXG5pbXBvcnQgeyB2ZHBfc2NyZWVuX3VwZGF0ZSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IGF1ZGlvX2J1Zl9yZWFkeSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IG1vZGVtX3JlYWQsIG1vZGVtX3dyaXRlIH0gZnJvbSBcIi4vcGV0c2NpaV9iYnNcIjtcclxuaW1wb3J0IHsgY2JtXzY0OTlfd3JpdGUsIGNibV82NDk5X3JlYWQsIGNibV82NDk5X3Jlc2V0IH0gZnJvbSBcIi4vY2JtXzY0OTkvY2JtXzY0OTlcIjtcclxuaW1wb3J0IHsgc2F2ZV9maWxlIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vYnJvd3NlclwiO1xyXG5cclxuLy8gcHVibGlzaCBvbiBnbG9iYWxcclxuKHdpbmRvdyBhcyBhbnkpLnZkcF9zY3JlZW5fdXBkYXRlID0gdmRwX3NjcmVlbl91cGRhdGU7XHJcbih3aW5kb3cgYXMgYW55KS5hdWRpb19idWZfcmVhZHkgPSBhdWRpb19idWZfcmVhZHk7XHJcbih3aW5kb3cgYXMgYW55KS5tb2RlbV9yZWFkID0gbW9kZW1fcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLm1vZGVtX3dyaXRlID0gbW9kZW1fd3JpdGU7XHJcbih3aW5kb3cgYXMgYW55KS5zYXZlX2ZpbGUgPSBzYXZlX2ZpbGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfcmVzZXQgPSBjYm1fNjQ5OV9yZXNldDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3JlYWQgID0gY2JtXzY0OTlfcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3dyaXRlID0gY2JtXzY0OTlfd3JpdGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuYzY0ID0gYzY0O1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICBhd2FpdCBsb2FkX3dhc20oKTtcclxuICAgbWFpbigpOyAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=