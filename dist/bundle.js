/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.js":
/*!*******************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var emscripten_module = (() => {
  var _scriptDir = "file:///C:/Users/Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.js";
  
  return (
function(emscripten_module = {})  {

var Module=typeof emscripten_module!="undefined"?emscripten_module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="emscripten_module.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! emscripten_module.wasm */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm"), __webpack_require__.b).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["d"];updateMemoryViews();wasmTable=Module["asm"]["C"];addOnInit(Module["asm"]["e"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}var ASM_CONSTS={54768:()=>{return cbm_6499_reset()},54797:($0,$1)=>{audio_buf_ready($0,$1)},54826:$0=>{vdp_screen_update($0)},54853:$0=>{vdp_screen_update($0)},54880:$0=>{vdp_screen_update($0)},54907:$0=>{return modem_read($0)},54934:($0,$1)=>{modem_write($0,$1)},54958:($0,$1)=>{return cbm_6499_read($0,$1)},54992:($0,$1)=>{cbm_6499_write($0,$1)}};function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:HEAPF64[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var wasmImports={"a":___assert_fail,"b":_emscripten_asm_const_int,"c":_emscripten_memcpy_big};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["e"]).apply(null,arguments)};var _sys_init=Module["_sys_init"]=function(){return(_sys_init=Module["_sys_init"]=Module["asm"]["f"]).apply(null,arguments)};var _sys_config=Module["_sys_config"]=function(){return(_sys_config=Module["_sys_config"]=Module["asm"]["g"]).apply(null,arguments)};var _sys_reset=Module["_sys_reset"]=function(){return(_sys_reset=Module["_sys_reset"]=Module["asm"]["h"]).apply(null,arguments)};var _sys_exec=Module["_sys_exec"]=function(){return(_sys_exec=Module["_sys_exec"]=Module["asm"]["i"]).apply(null,arguments)};var _sys_exec_us=Module["_sys_exec_us"]=function(){return(_sys_exec_us=Module["_sys_exec_us"]=Module["asm"]["j"]).apply(null,arguments)};var _sys_ex=Module["_sys_ex"]=function(){return(_sys_ex=Module["_sys_ex"]=Module["asm"]["k"]).apply(null,arguments)};var _sys_vdp=Module["_sys_vdp"]=function(){return(_sys_vdp=Module["_sys_vdp"]=Module["asm"]["l"]).apply(null,arguments)};var _sys_key_down=Module["_sys_key_down"]=function(){return(_sys_key_down=Module["_sys_key_down"]=Module["asm"]["m"]).apply(null,arguments)};var _sys_key_up=Module["_sys_key_up"]=function(){return(_sys_key_up=Module["_sys_key_up"]=Module["asm"]["n"]).apply(null,arguments)};var _sys_quick_load=Module["_sys_quick_load"]=function(){return(_sys_quick_load=Module["_sys_quick_load"]=Module["asm"]["o"]).apply(null,arguments)};var _sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=function(){return(_sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=Module["asm"]["p"]).apply(null,arguments)};var _sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=function(){return(_sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=Module["asm"]["q"]).apply(null,arguments)};var _sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=function(){return(_sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=Module["asm"]["r"]).apply(null,arguments)};var _sys_joystick=Module["_sys_joystick"]=function(){return(_sys_joystick=Module["_sys_joystick"]=Module["asm"]["s"]).apply(null,arguments)};var _sys_set_joystick_type=Module["_sys_set_joystick_type"]=function(){return(_sys_set_joystick_type=Module["_sys_set_joystick_type"]=Module["asm"]["t"]).apply(null,arguments)};var _sys_insert_tape=Module["_sys_insert_tape"]=function(){return(_sys_insert_tape=Module["_sys_insert_tape"]=Module["asm"]["u"]).apply(null,arguments)};var _sys_remove_tape=Module["_sys_remove_tape"]=function(){return(_sys_remove_tape=Module["_sys_remove_tape"]=Module["asm"]["v"]).apply(null,arguments)};var _sys_tape_play=Module["_sys_tape_play"]=function(){return(_sys_tape_play=Module["_sys_tape_play"]=Module["asm"]["w"]).apply(null,arguments)};var _sys_tape_stop=Module["_sys_tape_stop"]=function(){return(_sys_tape_stop=Module["_sys_tape_stop"]=Module["asm"]["x"]).apply(null,arguments)};var _sys_cas_port=Module["_sys_cas_port"]=function(){return(_sys_cas_port=Module["_sys_cas_port"]=Module["asm"]["y"]).apply(null,arguments)};var _sys_set_exrom=Module["_sys_set_exrom"]=function(){return(_sys_set_exrom=Module["_sys_set_exrom"]=Module["asm"]["z"]).apply(null,arguments)};var _sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=function(){return(_sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=Module["asm"]["A"]).apply(null,arguments)};var _sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=function(){return(_sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=Module["asm"]["B"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module["asm"]["D"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module["asm"]["E"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["F"]).apply(null,arguments)};Module["ccall"]=ccall;Module["cwrap"]=cwrap;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


  return emscripten_module.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emscripten_module);

/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/node_modules/file-saver/FileSaver.js":
/*!***********************************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/node_modules/file-saver/FileSaver.js ***!
  \***********************************************************************************************/
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/audio.ts":
/*!***********************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/audio.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audioContextResume: () => (/* binding */ audioContextResume),
/* harmony export */   audio_buf_ready: () => (/* binding */ audio_buf_ready),
/* harmony export */   goAudio: () => (/* binding */ goAudio),
/* harmony export */   stopAudio: () => (/* binding */ stopAudio)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs_connector.ts":
/*!*******************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs_connector.ts ***!
  \*******************************************************************************/
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/browser.ts":
/*!*************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/browser.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/audio.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesystem */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/cbm_6499.ts":
/*!***********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/cbm_6499.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cbm_6499_read: () => (/* binding */ cbm_6499_read),
/* harmony export */   cbm_6499_reset: () => (/* binding */ cbm_6499_reset),
/* harmony export */   cbm_6499_write: () => (/* binding */ cbm_6499_write),
/* harmony export */   videotel: () => (/* binding */ videotel)
/* harmony export */ });
/* harmony import */ var _m6821__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m6821 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6821.ts");
/* harmony import */ var _m6850__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m6850 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6850.ts");
/* harmony import */ var _bbs_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bbs_connector */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs_connector.ts");



let PIA = new _m6821__WEBPACK_IMPORTED_MODULE_0__.M6821();
let ACIA = new _m6850__WEBPACK_IMPORTED_MODULE_1__.M6850();
let videotel = new _bbs_connector__WEBPACK_IMPORTED_MODULE_2__.BBSConnector();
window.ACIA = ACIA;
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
function cbm_6499_write(addr, data) {
    if (addr < 0xDF00)
        PIA.write(addr, data);
    else
        ACIA.cpu_write(addr, data);
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6821.ts":
/*!********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6821.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6821: () => (/* binding */ M6821)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/utils.ts");
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
    ring(value) {
        if (value)
            this.CRA = this.CRA | 0b10000000;
        else
            this.CRA = this.CRA & 0b01111111;
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6850.ts":
/*!********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6850.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6850: () => (/* binding */ M6850)
/* harmony export */ });
/* harmony import */ var _speed_limiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speed_limiter */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/speed_limiter.ts");
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
        this.buffer = new _speed_limiter__WEBPACK_IMPORTED_MODULE_0__.SpeedLimiter();
        // send data to BBS connector
        this.transmit_data = (data) => { };
    }
    get_status_byte(ticks) {
        this.STATUS_RECEIVER_FULL = this.buffer.get_status(ticks);
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
                this.RECEIVE_DATA = this.buffer.get_byte(ticks);
            }
            return this.RECEIVE_DATA;
        }
    }
    cpu_write(addr, data) {
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
                this.buffer.reset();
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
            this.STATUS_TRANSMITTER_EMPTY = 0;
            this.transmit_data(this.TRANSMIT_DATA);
            this.STATUS_TRANSMITTER_EMPTY = 1;
        }
    }
    // external world interface
    // called from BBS connector
    receive_data(data) {
        this.buffer.receive_data(data);
        debug(`ACIA: received ${data.length} bytes`);
    }
}
function debug(m) {
    //console.log(m);
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/speed_limiter.ts":
/*!****************************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/speed_limiter.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedLimiter: () => (/* binding */ SpeedLimiter)
/* harmony export */ });
class SpeedLimiter {
    constructor() {
        this.receive_buffer = [];
        this.ticks = 0;
        this.max_count = 985248 / (1200 / 9); // 1200 baud       
    }
    reset() {
        this.receive_buffer = [];
    }
    receive_data(data) {
        data.forEach(e => this.receive_buffer.push(e));
    }
    get_status(ticks) {
        let diff = ticks - this.ticks;
        if (diff < this.max_count)
            return 0;
        return this.receive_buffer.length === 0 ? 0 : 1;
    }
    get_byte(ticks) {
        this.ticks = ticks;
        let data = this.receive_buffer[0];
        this.receive_buffer = this.receive_buffer.slice(1);
        return data;
    }
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts":
/*!************************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c64: () => (/* binding */ c64),
/* harmony export */   get_wasm_instance: () => (/* binding */ get_wasm_instance),
/* harmony export */   load_wasm: () => (/* binding */ load_wasm)
/* harmony export */ });
/* harmony import */ var _emscripten_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emscripten_module */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.js");
/* harmony import */ var _emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emulator.ts");
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
        wasm_instance = instance;
        return instance;
    });
}
function get_wasm_instance() {
    return wasm_instance;
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emulator.ts":
/*!**************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emulator.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   oneFrame: () => (/* binding */ oneFrame)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/options.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/video.ts");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard.ts");
/* harmony import */ var _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./petscii_bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/petscii_bbs.ts");
/* harmony import */ var _fetchProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchProgram */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/fetchProgram.ts");

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
        if (is_retrocampus || options.petsciibbs !== undefined) {
            _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.petscii.address = (_a = options.wstcp) !== null && _a !== void 0 ? _a : "wss://bbs.sblendorio.eu:8080";
            _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__.petscii.protocol = (_b = options.protocol) !== null && _b !== void 0 ? _b : "bbs";
            if (options.load === undefined)
                (0,_fetchProgram__WEBPACK_IMPORTED_MODULE_5__.fetchProgram)("nippur72/terminal.prg");
        }
        (0,_video__WEBPACK_IMPORTED_MODULE_2__.calculateGeometry)();
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.go();
    });
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/fetchProgram.ts":
/*!******************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/fetchProgram.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchProgram: () => (/* binding */ fetchProgram)
/* harmony export */ });
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts":
/*!****************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBytes: () => (/* binding */ loadBytes),
/* harmony export */   save_file: () => (/* binding */ save_file)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/utils.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/node_modules/file-saver/FileSaver.js");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard.ts":
/*!**************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   poll_keyboard: () => (/* binding */ poll_keyboard)
/* harmony export */ });
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/audio.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _keyboard_IT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard_IT */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard_IT.ts");



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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard_IT.ts":
/*!*****************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/keyboard_IT.ts ***!
  \*****************************************************************************/
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/mdawson.ts":
/*!*************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/mdawson.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   externalLoad: () => (/* binding */ externalLoad)
/* harmony export */ });
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filesystem */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts");
//
// functions originally copied from https://www.mdawson.net/vic20chrome/vic20.php
// and adapted for this emulator
//

function binToArray(data) {
    let bincodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.!";
    var v = 0, cnt = 0, out = [], ii = 0;
    for (var i = 0; i < data.length; i++) {
        v += bincodes.indexOf(data[i]) << cnt;
        cnt += 6;
        if (cnt >= 8) {
            out[ii++] = (v & 255);
            cnt -= 8;
            v >>= 8;
        }
    }
    return out;
}
function externalLoad(cmd, url, format, subfile) {
    console.log("externalLoad cmd=" + cmd + " url=" + url + " format=" + format + " subfile=" + subfile);
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.mdawson.net/vic20chrome/vic20/prgtojsloader.php?cmd=' + cmd + '&prgurl=' + url + '&subfile=' + subfile;
    head.appendChild(script);
}
window.mdawson_loadBytes = _filesystem__WEBPACK_IMPORTED_MODULE_0__.loadBytes;
window.loadPrg = function (src) {
    if (src.length !== 1)
        return;
    let bin = binToArray(src[0]);
    mdawson_loadBytes(new Uint8Array(bin));
};


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/options.ts":
/*!*************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/options.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseQueryStringCommands: () => (/* binding */ parseQueryStringCommands)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _fetchProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchProgram */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/fetchProgram.ts");
/* harmony import */ var _mdawson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdawson */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/mdawson.ts");
/* harmony import */ var _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cbm_6499/cbm_6499 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/cbm_6499.ts");
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
                (0,_mdawson__WEBPACK_IMPORTED_MODULE_2__.externalLoad)("loadPrg", name);
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/petscii_bbs.ts":
/*!*****************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/petscii_bbs.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modem_read: () => (/* binding */ modem_read),
/* harmony export */   modem_write: () => (/* binding */ modem_write),
/* harmony export */   petscii: () => (/* binding */ petscii)
/* harmony export */ });
/* harmony import */ var _bbs_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbs_connector */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs_connector.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/utils.ts");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/utils.ts":
/*!***********************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/utils.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   array2String: () => (/* binding */ array2String),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   paste: () => (/* binding */ paste),
/* harmony export */   string2Uint8Array: () => (/* binding */ string2Uint8Array)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/video.ts":
/*!***********************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/video.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateGeometry: () => (/* binding */ calculateGeometry),
/* harmony export */   vdp_screen_update: () => (/* binding */ vdp_screen_update)
/* harmony export */ });
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");

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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm":
/*!*********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm ***!
  \*********************************************************************************/
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
/*!***********************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/index.ts ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emulator.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/video.ts");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/audio.ts");
/* harmony import */ var _petscii_bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./petscii_bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/petscii_bbs.ts");
/* harmony import */ var _cbm_6499_cbm_6499__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cbm_6499/cbm_6499 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/cbm_6499.ts");
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filesystem */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/browser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




//import { loadPrg } from "./mdawson";





// publish on global
window.vdp_screen_update = _video__WEBPACK_IMPORTED_MODULE_2__.vdp_screen_update;
window.audio_buf_ready = _audio__WEBPACK_IMPORTED_MODULE_3__.audio_buf_ready;
//(window as any).loadPrg = loadPrg;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBRTlFLElBQUcsR0FBRyxLQUFLLEdBQUcsRUFBVTtRQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLENBQUM7UUFBQyxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0tBQUcsQ0FBRSxzQkFBc0I7SUFFekcsUUFBUTtJQUNSLElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3ZELElBQUcsSUFBSSxLQUFLLElBQUk7UUFBWSxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUks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Ly4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L2Vtc2NyaXB0ZW5fbW9kdWxlLmpzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvRmlsZVNhdmVyLmpzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2F1ZGlvLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2Jic19jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvYnJvd3Nlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9jYm1fNjQ5OS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9tNjgyMS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9tNjg1MC50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9zcGVlZF9saW1pdGVyLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2Vtc2NyaXB0ZW5fd3JhcHBlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9lbXVsYXRvci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9mZXRjaFByb2dyYW0udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZmlsZXN5c3RlbS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9rZXlib2FyZF9JVC50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9tZGF3c29uLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvcGV0c2NpaV9iYnMudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvdmlkZW8udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9hbWQgZGVmaW5lIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZW1zY3JpcHRlbl9tb2R1bGUgPSAoKCkgPT4ge1xyXG4gIHZhciBfc2NyaXB0RGlyID0gaW1wb3J0Lm1ldGEudXJsO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbmZ1bmN0aW9uKGVtc2NyaXB0ZW5fbW9kdWxlID0ge30pICB7XHJcblxyXG52YXIgTW9kdWxlPXR5cGVvZiBlbXNjcmlwdGVuX21vZHVsZSE9XCJ1bmRlZmluZWRcIj9lbXNjcmlwdGVuX21vZHVsZTp7fTt2YXIgcmVhZHlQcm9taXNlUmVzb2x2ZSxyZWFkeVByb21pc2VSZWplY3Q7TW9kdWxlW1wicmVhZHlcIl09bmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3JlYWR5UHJvbWlzZVJlc29sdmU9cmVzb2x2ZTtyZWFkeVByb21pc2VSZWplY3Q9cmVqZWN0fSk7dmFyIG1vZHVsZU92ZXJyaWRlcz1PYmplY3QuYXNzaWduKHt9LE1vZHVsZSk7dmFyIGFyZ3VtZW50c189W107dmFyIHRoaXNQcm9ncmFtPVwiLi90aGlzLnByb2dyYW1cIjt2YXIgcXVpdF89KHN0YXR1cyx0b1Rocm93KT0+e3Rocm93IHRvVGhyb3d9O3ZhciBFTlZJUk9OTUVOVF9JU19XRUI9dHJ1ZTt2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSPWZhbHNlO3ZhciBzY3JpcHREaXJlY3Rvcnk9XCJcIjtmdW5jdGlvbiBsb2NhdGVGaWxlKHBhdGgpe2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3JldHVybiBNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKHBhdGgsc2NyaXB0RGlyZWN0b3J5KX1yZXR1cm4gc2NyaXB0RGlyZWN0b3J5K3BhdGh9dmFyIHJlYWRfLHJlYWRBc3luYyxyZWFkQmluYXJ5LHNldFdpbmRvd1RpdGxlO2lmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKXtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3NjcmlwdERpcmVjdG9yeT1zZWxmLmxvY2F0aW9uLmhyZWZ9ZWxzZSBpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCImJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3NjcmlwdERpcmVjdG9yeT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY31pZihfc2NyaXB0RGlyKXtzY3JpcHREaXJlY3Rvcnk9X3NjcmlwdERpcn1pZihzY3JpcHREaXJlY3RvcnkuaW5kZXhPZihcImJsb2I6XCIpIT09MCl7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZWxzZXtzY3JpcHREaXJlY3Rvcnk9XCJcIn17cmVhZF89dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5zZW5kKG51bGwpO3JldHVybiB4aHIucmVzcG9uc2VUZXh0fTtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3JlYWRCaW5hcnk9dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfX1yZWFkQXN5bmM9KHVybCxvbmxvYWQsb25lcnJvcik9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCx0cnVlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIub25sb2FkPSgpPT57aWYoeGhyLnN0YXR1cz09MjAwfHx4aHIuc3RhdHVzPT0wJiZ4aHIucmVzcG9uc2Upe29ubG9hZCh4aHIucmVzcG9uc2UpO3JldHVybn1vbmVycm9yKCl9O3hoci5vbmVycm9yPW9uZXJyb3I7eGhyLnNlbmQobnVsbCl9fXNldFdpbmRvd1RpdGxlPXRpdGxlPT5kb2N1bWVudC50aXRsZT10aXRsZX1lbHNle312YXIgb3V0PU1vZHVsZVtcInByaW50XCJdfHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO3ZhciBlcnI9TW9kdWxlW1wicHJpbnRFcnJcIl18fGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oTW9kdWxlLG1vZHVsZU92ZXJyaWRlcyk7bW9kdWxlT3ZlcnJpZGVzPW51bGw7aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInF1aXRcIl0pcXVpdF89TW9kdWxlW1wicXVpdFwiXTt2YXIgd2FzbUJpbmFyeTtpZihNb2R1bGVbXCJ3YXNtQmluYXJ5XCJdKXdhc21CaW5hcnk9TW9kdWxlW1wid2FzbUJpbmFyeVwiXTt2YXIgbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdfHx0cnVlO2lmKHR5cGVvZiBXZWJBc3NlbWJseSE9XCJvYmplY3RcIil7YWJvcnQoXCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkXCIpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgRVhJVFNUQVRVUzt2YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLGhlYXAsb3V0SWR4LG1heEJ5dGVzVG9Xcml0ZSl7aWYoIShtYXhCeXRlc1RvV3JpdGU+MCkpcmV0dXJuIDA7dmFyIHN0YXJ0SWR4PW91dElkeDt2YXIgZW5kSWR4PW91dElkeCttYXhCeXRlc1RvV3JpdGUtMTtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgdT1zdHIuY2hhckNvZGVBdChpKTtpZih1Pj01NTI5NiYmdTw9NTczNDMpe3ZhciB1MT1zdHIuY2hhckNvZGVBdCgrK2kpO3U9NjU1MzYrKCh1JjEwMjMpPDwxMCl8dTEmMTAyM31pZih1PD0xMjcpe2lmKG91dElkeD49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPXV9ZWxzZSBpZih1PD0yMDQ3KXtpZihvdXRJZHgrMT49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTE5Mnx1Pj42O2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2UgaWYodTw9NjU1MzUpe2lmKG91dElkeCsyPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjI0fHU+PjEyO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfWVsc2V7aWYob3V0SWR4KzM+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yNDB8dT4+MTg7aGVhcFtvdXRJZHgrK109MTI4fHU+PjEyJjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzfX1oZWFwW291dElkeF09MDtyZXR1cm4gb3V0SWR4LXN0YXJ0SWR4fWZ1bmN0aW9uIHN0cmluZ1RvVVRGOChzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7cmV0dXJuIHN0cmluZ1RvVVRGOEFycmF5KHN0cixIRUFQVTgsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl9dmFyIEhFQVA4LEhFQVBVOCxIRUFQMTYsSEVBUFUxNixIRUFQMzIsSEVBUFUzMixIRUFQRjMyLEhFQVBGNjQ7ZnVuY3Rpb24gdXBkYXRlTWVtb3J5Vmlld3MoKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjtNb2R1bGVbXCJIRUFQOFwiXT1IRUFQOD1uZXcgSW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVAxNlwiXT1IRUFQMTY9bmV3IEludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUDMyXCJdPUhFQVAzMj1uZXcgSW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQVThcIl09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVBVMTZcIl09SEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUzMlwiXT1IRUFQVTMyPW5ldyBVaW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjMyXCJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjY0XCJdPUhFQVBGNjQ9bmV3IEZsb2F0NjRBcnJheShiKX12YXIgd2FzbVRhYmxlO3ZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRQT1NUUlVOX189W107dmFyIHJ1bnRpbWVJbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBwcmVSdW4oKXtpZihNb2R1bGVbXCJwcmVSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVSdW5cIl09W01vZHVsZVtcInByZVJ1blwiXV07d2hpbGUoTW9kdWxlW1wicHJlUnVuXCJdLmxlbmd0aCl7YWRkT25QcmVSdW4oTW9kdWxlW1wicHJlUnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pfWZ1bmN0aW9uIGluaXRSdW50aW1lKCl7cnVudGltZUluaXRpYWxpemVkPXRydWU7Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyl9ZnVuY3Rpb24gcG9zdFJ1bigpe2lmKE1vZHVsZVtcInBvc3RSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwb3N0UnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicG9zdFJ1blwiXT1bTW9kdWxlW1wicG9zdFJ1blwiXV07d2hpbGUoTW9kdWxlW1wicG9zdFJ1blwiXS5sZW5ndGgpe2FkZE9uUG9zdFJ1bihNb2R1bGVbXCJwb3N0UnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUE9TVFJVTl9fKX1mdW5jdGlvbiBhZGRPblByZVJ1bihjYil7X19BVFBSRVJVTl9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uSW5pdChjYil7X19BVElOSVRfXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPblBvc3RSdW4oY2Ipe19fQVRQT1NUUlVOX18udW5zaGlmdChjYil9dmFyIHJ1bkRlcGVuZGVuY2llcz0wO3ZhciBydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsO3ZhciBkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtmdW5jdGlvbiBhZGRSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMrKztpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9fWZ1bmN0aW9uIHJlbW92ZVJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcy0tO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX1pZihydW5EZXBlbmRlbmNpZXM9PTApe2lmKHJ1bkRlcGVuZGVuY3lXYXRjaGVyIT09bnVsbCl7Y2xlYXJJbnRlcnZhbChydW5EZXBlbmRlbmN5V2F0Y2hlcik7cnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbH1pZihkZXBlbmRlbmNpZXNGdWxmaWxsZWQpe3ZhciBjYWxsYmFjaz1kZXBlbmRlbmNpZXNGdWxmaWxsZWQ7ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7Y2FsbGJhY2soKX19fWZ1bmN0aW9uIGFib3J0KHdoYXQpe2lmKE1vZHVsZVtcIm9uQWJvcnRcIl0pe01vZHVsZVtcIm9uQWJvcnRcIl0od2hhdCl9d2hhdD1cIkFib3J0ZWQoXCIrd2hhdCtcIilcIjtlcnIod2hhdCk7QUJPUlQ9dHJ1ZTtFWElUU1RBVFVTPTE7d2hhdCs9XCIuIEJ1aWxkIHdpdGggLXNBU1NFUlRJT05TIGZvciBtb3JlIGluZm8uXCI7dmFyIGU9bmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcih3aGF0KTtyZWFkeVByb21pc2VSZWplY3QoZSk7dGhyb3cgZX12YXIgZGF0YVVSSVByZWZpeD1cImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIjtmdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpe3JldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpfXZhciB3YXNtQmluYXJ5RmlsZTtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXt3YXNtQmluYXJ5RmlsZT1cImVtc2NyaXB0ZW5fbW9kdWxlLndhc21cIjtpZighaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSl7d2FzbUJpbmFyeUZpbGU9bG9jYXRlRmlsZSh3YXNtQmluYXJ5RmlsZSl9fWVsc2V7d2FzbUJpbmFyeUZpbGU9bmV3IFVSTChcImVtc2NyaXB0ZW5fbW9kdWxlLndhc21cIixpbXBvcnQubWV0YS51cmwpLmhyZWZ9ZnVuY3Rpb24gZ2V0QmluYXJ5KGZpbGUpe3RyeXtpZihmaWxlPT13YXNtQmluYXJ5RmlsZSYmd2FzbUJpbmFyeSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHdhc21CaW5hcnkpfWlmKHJlYWRCaW5hcnkpe3JldHVybiByZWFkQmluYXJ5KGZpbGUpfXRocm93XCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwifWNhdGNoKGVycil7YWJvcnQoZXJyKX19ZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZSgpe2lmKCF3YXNtQmluYXJ5JiYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpKXtpZih0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtpZighcmVzcG9uc2VbXCJva1wiXSl7dGhyb3dcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiK3dhc21CaW5hcnlGaWxlK1wiJ1wifXJldHVybiByZXNwb25zZVtcImFycmF5QnVmZmVyXCJdKCl9KS5jYXRjaChmdW5jdGlvbigpe3JldHVybiBnZXRCaW5hcnkod2FzbUJpbmFyeUZpbGUpfSl9fXJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX1mdW5jdGlvbiBjcmVhdGVXYXNtKCl7dmFyIGluZm89e1wiYVwiOndhc21JbXBvcnRzfTtmdW5jdGlvbiByZWNlaXZlSW5zdGFuY2UoaW5zdGFuY2UsbW9kdWxlKXt2YXIgZXhwb3J0cz1pbnN0YW5jZS5leHBvcnRzO01vZHVsZVtcImFzbVwiXT1leHBvcnRzO3dhc21NZW1vcnk9TW9kdWxlW1wiYXNtXCJdW1wiZFwiXTt1cGRhdGVNZW1vcnlWaWV3cygpO3dhc21UYWJsZT1Nb2R1bGVbXCJhc21cIl1bXCJDXCJdO2FkZE9uSW5pdChNb2R1bGVbXCJhc21cIl1bXCJlXCJdKTtyZW1vdmVSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKX1hZGRSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKTtmdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdChyZXN1bHQpe3JlY2VpdmVJbnN0YW5jZShyZXN1bHRbXCJpbnN0YW5jZVwiXSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlcil7cmV0dXJuIGdldEJpbmFyeVByb21pc2UoKS50aGVuKGZ1bmN0aW9uKGJpbmFyeSl7cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSxpbmZvKX0pLnRoZW4oZnVuY3Rpb24oaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZX0pLnRoZW4ocmVjZWl2ZXIsZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiBcIityZWFzb24pO2Fib3J0KHJlYXNvbil9KX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFzeW5jKCl7aWYoIXdhc21CaW5hcnkmJnR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZz09XCJmdW5jdGlvblwiJiYhaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSYmdHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaCh3YXNtQmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlc3VsdD1XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXNwb25zZSxpbmZvKTtyZXR1cm4gcmVzdWx0LnRoZW4ocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQsZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogXCIrcmVhc29uKTtlcnIoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCl9KX0pfWVsc2V7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpfX1pZihNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0pe3RyeXt2YXIgZXhwb3J0cz1Nb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0oaW5mbyxyZWNlaXZlSW5zdGFuY2UpO3JldHVybiBleHBvcnRzfWNhdGNoKGUpe2VycihcIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6IFwiK2UpO3JlYWR5UHJvbWlzZVJlamVjdChlKX19aW5zdGFudGlhdGVBc3luYygpLmNhdGNoKHJlYWR5UHJvbWlzZVJlamVjdCk7cmV0dXJue319dmFyIEFTTV9DT05TVFM9ezU0NzY4OigpPT57cmV0dXJuIGNibV82NDk5X3Jlc2V0KCl9LDU0Nzk3OigkMCwkMSk9PnthdWRpb19idWZfcmVhZHkoJDAsJDEpfSw1NDgyNjokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNTQ4NTM6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDU0ODgwOiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw1NDkwNzokMD0+e3JldHVybiBtb2RlbV9yZWFkKCQwKX0sNTQ5MzQ6KCQwLCQxKT0+e21vZGVtX3dyaXRlKCQwLCQxKX0sNTQ5NTg6KCQwLCQxKT0+e3JldHVybiBjYm1fNjQ5OV9yZWFkKCQwLCQxKX0sNTQ5OTI6KCQwLCQxKT0+e2NibV82NDk5X3dyaXRlKCQwLCQxKX19O2Z1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBfX19hc3NlcnRfZmFpbChjb25kaXRpb24sZmlsZW5hbWUsbGluZSxmdW5jKXthYm9ydChcIkFzc2VydGlvbiBmYWlsZWQ6IFwiK1VURjhUb1N0cmluZyhjb25kaXRpb24pK1wiLCBhdDogXCIrW2ZpbGVuYW1lP1VURjhUb1N0cmluZyhmaWxlbmFtZSk6XCJ1bmtub3duIGZpbGVuYW1lXCIsbGluZSxmdW5jP1VURjhUb1N0cmluZyhmdW5jKTpcInVua25vd24gZnVuY3Rpb25cIl0pfXZhciByZWFkRW1Bc21BcmdzQXJyYXk9W107ZnVuY3Rpb24gcmVhZEVtQXNtQXJncyhzaWdQdHIsYnVmKXtyZWFkRW1Bc21BcmdzQXJyYXkubGVuZ3RoPTA7dmFyIGNoO2J1Zj4+PTI7d2hpbGUoY2g9SEVBUFU4W3NpZ1B0cisrXSl7YnVmKz1jaCE9MTA1JmJ1ZjtyZWFkRW1Bc21BcmdzQXJyYXkucHVzaChjaD09MTA1P0hFQVAzMltidWZdOkhFQVBGNjRbYnVmKys+PjFdKTsrK2J1Zn1yZXR1cm4gcmVhZEVtQXNtQXJnc0FycmF5fWZ1bmN0aW9uIHJ1bkVtQXNtRnVuY3Rpb24oY29kZSxzaWdQdHIsYXJnYnVmKXt2YXIgYXJncz1yZWFkRW1Bc21BcmdzKHNpZ1B0cixhcmdidWYpO3JldHVybiBBU01fQ09OU1RTW2NvZGVdLmFwcGx5KG51bGwsYXJncyl9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2ludChjb2RlLHNpZ1B0cixhcmdidWYpe3JldHVybiBydW5FbUFzbUZ1bmN0aW9uKGNvZGUsc2lnUHRyLGFyZ2J1Zil9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LHNyYyxudW0pe0hFQVBVOC5jb3B5V2l0aGluKGRlc3Qsc3JjLHNyYytudW0pfWZ1bmN0aW9uIGdldENGdW5jKGlkZW50KXt2YXIgZnVuYz1Nb2R1bGVbXCJfXCIraWRlbnRdO3JldHVybiBmdW5jfWZ1bmN0aW9uIHdyaXRlQXJyYXlUb01lbW9yeShhcnJheSxidWZmZXIpe0hFQVA4LnNldChhcnJheSxidWZmZXIpfWZ1bmN0aW9uIGNjYWxsKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsYXJncyxvcHRzKXt2YXIgdG9DPXtcInN0cmluZ1wiOnN0cj0+e3ZhciByZXQ9MDtpZihzdHIhPT1udWxsJiZzdHIhPT11bmRlZmluZWQmJnN0ciE9PTApe3ZhciBsZW49KHN0ci5sZW5ndGg8PDIpKzE7cmV0PXN0YWNrQWxsb2MobGVuKTtzdHJpbmdUb1VURjgoc3RyLHJldCxsZW4pfXJldHVybiByZXR9LFwiYXJyYXlcIjphcnI9Pnt2YXIgcmV0PXN0YWNrQWxsb2MoYXJyLmxlbmd0aCk7d3JpdGVBcnJheVRvTWVtb3J5KGFycixyZXQpO3JldHVybiByZXR9fTtmdW5jdGlvbiBjb252ZXJ0UmV0dXJuVmFsdWUocmV0KXtpZihyZXR1cm5UeXBlPT09XCJzdHJpbmdcIil7cmV0dXJuIFVURjhUb1N0cmluZyhyZXQpfWlmKHJldHVyblR5cGU9PT1cImJvb2xlYW5cIilyZXR1cm4gQm9vbGVhbihyZXQpO3JldHVybiByZXR9dmFyIGZ1bmM9Z2V0Q0Z1bmMoaWRlbnQpO3ZhciBjQXJncz1bXTt2YXIgc3RhY2s9MDtpZihhcmdzKXtmb3IodmFyIGk9MDtpPGFyZ3MubGVuZ3RoO2krKyl7dmFyIGNvbnZlcnRlcj10b0NbYXJnVHlwZXNbaV1dO2lmKGNvbnZlcnRlcil7aWYoc3RhY2s9PT0wKXN0YWNrPXN0YWNrU2F2ZSgpO2NBcmdzW2ldPWNvbnZlcnRlcihhcmdzW2ldKX1lbHNle2NBcmdzW2ldPWFyZ3NbaV19fX12YXIgcmV0PWZ1bmMuYXBwbHkobnVsbCxjQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJldCl7aWYoc3RhY2shPT0wKXN0YWNrUmVzdG9yZShzdGFjayk7cmV0dXJuIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpfXJldD1vbkRvbmUocmV0KTtyZXR1cm4gcmV0fWZ1bmN0aW9uIGN3cmFwKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsb3B0cyl7dmFyIG51bWVyaWNBcmdzPSFhcmdUeXBlc3x8YXJnVHlwZXMuZXZlcnkodHlwZT0+dHlwZT09PVwibnVtYmVyXCJ8fHR5cGU9PT1cImJvb2xlYW5cIik7dmFyIG51bWVyaWNSZXQ9cmV0dXJuVHlwZSE9PVwic3RyaW5nXCI7aWYobnVtZXJpY1JldCYmbnVtZXJpY0FyZ3MmJiFvcHRzKXtyZXR1cm4gZ2V0Q0Z1bmMoaWRlbnQpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBjY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3VtZW50cyxvcHRzKX19dmFyIHdhc21JbXBvcnRzPXtcImFcIjpfX19hc3NlcnRfZmFpbCxcImJcIjpfZW1zY3JpcHRlbl9hc21fY29uc3RfaW50LFwiY1wiOl9lbXNjcmlwdGVuX21lbWNweV9iaWd9O3ZhciBhc209Y3JlYXRlV2FzbSgpO3ZhciBfX193YXNtX2NhbGxfY3RvcnM9ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcImFzbVwiXVtcImVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5pdD1Nb2R1bGVbXCJfc3lzX2luaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbml0PU1vZHVsZVtcIl9zeXNfaW5pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJmXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJnXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3Jlc2V0PU1vZHVsZVtcIl9zeXNfcmVzZXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19yZXNldD1Nb2R1bGVbXCJfc3lzX3Jlc2V0XCJdPU1vZHVsZVtcImFzbVwiXVtcImhcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXhlYz1Nb2R1bGVbXCJfc3lzX2V4ZWNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19leGVjPU1vZHVsZVtcIl9zeXNfZXhlY1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJpXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4ZWNfdXM9TW9kdWxlW1wiX3N5c19leGVjX3VzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXhlY191cz1Nb2R1bGVbXCJfc3lzX2V4ZWNfdXNcIl09TW9kdWxlW1wiYXNtXCJdW1wialwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leD1Nb2R1bGVbXCJfc3lzX2V4XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXg9TW9kdWxlW1wiX3N5c19leFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJrXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJsXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2tleV9kb3duPU1vZHVsZVtcIl9zeXNfa2V5X2Rvd25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19rZXlfZG93bj1Nb2R1bGVbXCJfc3lzX2tleV9kb3duXCJdPU1vZHVsZVtcImFzbVwiXVtcIm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPU1vZHVsZVtcImFzbVwiXVtcIm5cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcXVpY2tfbG9hZD1Nb2R1bGVbXCJfc3lzX3F1aWNrX2xvYWRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19xdWlja19sb2FkPU1vZHVsZVtcIl9zeXNfcXVpY2tfbG9hZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJvXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luc2VydF9yb21fY2FydGRyaWdlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZT1Nb2R1bGVbXCJfc3lzX2luc2VydF9yb21fY2FydGRyaWdlXCJdPU1vZHVsZVtcImFzbVwiXVtcInBcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfbWVtX2NwdV9yZD1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfcmRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19tZW1fY3B1X3JkPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV9yZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJxXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX21lbV9jcHVfd3I9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3dyXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfbWVtX2NwdV93cj1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfd3JcIl09TW9kdWxlW1wiYXNtXCJdW1wiclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19qb3lzdGljaz1Nb2R1bGVbXCJfc3lzX2pveXN0aWNrXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfam95c3RpY2s9TW9kdWxlW1wiX3N5c19qb3lzdGlja1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9qb3lzdGlja190eXBlPU1vZHVsZVtcIl9zeXNfc2V0X2pveXN0aWNrX3R5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfam95c3RpY2tfdHlwZT1Nb2R1bGVbXCJfc3lzX3NldF9qb3lzdGlja190eXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5zZXJ0X3RhcGU9TW9kdWxlW1wiX3N5c19pbnNlcnRfdGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2luc2VydF90YXBlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3RhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1widVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19yZW1vdmVfdGFwZT1Nb2R1bGVbXCJfc3lzX3JlbW92ZV90YXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcmVtb3ZlX3RhcGU9TW9kdWxlW1wiX3N5c19yZW1vdmVfdGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ2XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ3XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ4XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2Nhc19wb3J0PU1vZHVsZVtcIl9zeXNfY2FzX3BvcnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19jYXNfcG9ydD1Nb2R1bGVbXCJfc3lzX2Nhc19wb3J0XCJdPU1vZHVsZVtcImFzbVwiXVtcInlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPU1vZHVsZVtcImFzbVwiXVtcInpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPU1vZHVsZVtcImFzbVwiXVtcIkFcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTk9TW9kdWxlW1wiX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5PU1vZHVsZVtcIl9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIl09TW9kdWxlW1wiYXNtXCJdW1wiQlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZXJybm9fbG9jYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4oX19fZXJybm9fbG9jYXRpb249TW9kdWxlW1wiYXNtXCJdW1wiX19lcnJub19sb2NhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tTYXZlPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrU2F2ZT1Nb2R1bGVbXCJhc21cIl1bXCJEXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja1Jlc3RvcmU9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tSZXN0b3JlPU1vZHVsZVtcImFzbVwiXVtcIkVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrQWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tBbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJGXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O01vZHVsZVtcImNjYWxsXCJdPWNjYWxsO01vZHVsZVtcImN3cmFwXCJdPWN3cmFwO3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xyXG5cclxuXHJcbiAgcmV0dXJuIGVtc2NyaXB0ZW5fbW9kdWxlLnJlYWR5XHJcbn1cclxuKTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgZW1zY3JpcHRlbl9tb2R1bGU7IiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMy4yXG4gKiAyMDE2LTA2LTE2IDE4OjI1OjE5XG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogTUlUXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYgKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUsIGluZGVudDogNCwgbGF4YnJlYWs6IHRydWUsIGxheGNvbW1hOiB0cnVlLCBzbWFydHRhYnM6IHRydWUsIHBsdXNwbHVzOiB0cnVlICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvRmlsZVNhdmVyLmpzICovXG5cbnZhciBzYXZlQXMgPSBzYXZlQXMgfHwgKGZ1bmN0aW9uKHZpZXcpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXG5cdGlmICh0eXBlb2YgdmlldyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIC9NU0lFIFsxLTldXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhclxuXHRcdCAgZG9jID0gdmlldy5kb2N1bWVudFxuXHRcdCAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcblx0XHQsIGdldF9VUkwgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB2aWV3LlVSTCB8fCB2aWV3LndlYmtpdFVSTCB8fCB2aWV3O1xuXHRcdH1cblx0XHQsIHNhdmVfbGluayA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKVxuXHRcdCwgY2FuX3VzZV9zYXZlX2xpbmsgPSBcImRvd25sb2FkXCIgaW4gc2F2ZV9saW5rXG5cdFx0LCBjbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdHZhciBldmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIik7XG5cdFx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH1cblx0XHQsIGlzX3NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qodmlldy5IVE1MRWxlbWVudCkgfHwgdmlldy5zYWZhcmlcblx0XHQsIGlzX2Nocm9tZV9pb3MgPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgdGhyb3dfb3V0c2lkZSA9IGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHQodmlldy5zZXRJbW1lZGlhdGUgfHwgdmlldy5zZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhyb3cgZXg7XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cdFx0LCBmb3JjZV9zYXZlYWJsZV90eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxuXHRcdC8vIHRoZSBCbG9iIEFQSSBpcyBmdW5kYW1lbnRhbGx5IGJyb2tlbiBhcyB0aGVyZSBpcyBubyBcImRvd25sb2FkZmluaXNoZWRcIiBldmVudCB0byBzdWJzY3JpYmUgdG9cblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDEwMDAgKiA0MCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHQvLyBub3RlOiB5b3VyIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgVVRGLTE2IFUrRkVGRiB0byBFRiBCQiBCRlxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkVGRiksIGJsb2JdLCB7dHlwZTogYmxvYi50eXBlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmxvYjtcblx0XHR9XG5cdFx0LCBGaWxlU2F2ZXIgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHQvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xuXHRcdFx0dmFyXG5cdFx0XHRcdCAgZmlsZXNhdmVyID0gdGhpc1xuXHRcdFx0XHQsIHR5cGUgPSBibG9iLnR5cGVcblx0XHRcdFx0LCBmb3JjZSA9IHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGVcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgoaXNfY2hyb21lX2lvcyB8fCAoZm9yY2UgJiYgaXNfc2FmYXJpKSkgJiYgdmlldy5GaWxlUmVhZGVyKSB7XG5cdFx0XHRcdFx0XHQvLyBTYWZhcmkgZG9lc24ndCBhbGxvdyBkb3dubG9hZGluZyBvZiBibG9iIHVybHNcblx0XHRcdFx0XHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdXJsID0gaXNfY2hyb21lX2lvcyA/IHJlYWRlci5yZXN1bHQgOiByZWFkZXIucmVzdWx0LnJlcGxhY2UoL15kYXRhOlteO10qOy8sICdkYXRhOmF0dGFjaG1lbnQvZmlsZTsnKTtcblx0XHRcdFx0XHRcdFx0dmFyIHBvcHVwID0gdmlldy5vcGVuKHVybCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0XHRpZighcG9wdXApIHZpZXcubG9jYXRpb24uaHJlZiA9IHVybDtcblx0XHRcdFx0XHRcdFx0dXJsPXVuZGVmaW5lZDsgLy8gcmVsZWFzZSByZWZlcmVuY2UgYmVmb3JlIGRpc3BhdGNoaW5nXG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZm9yY2UpIHtcblx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuZWQgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBBcHBsZSBkb2VzIG5vdCBhbGxvdyB3aW5kb3cub3Blbiwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS9kb2N1bWVudGF0aW9uL1Rvb2xzL0NvbmNlcHR1YWwvU2FmYXJpRXh0ZW5zaW9uR3VpZGUvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzLmh0bWxcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdDtcblx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cblx0XHRcdGlmIChjYW5fdXNlX3NhdmVfbGluaykge1xuXHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmc19lcnJvcigpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIiwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiO1xuXG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lKTtcblx0XHR9O1xuXHR9XG5cblx0RlNfcHJvdG8uYWJvcnQgPSBmdW5jdGlvbigpe307XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9PSBudWxsKSkge1xuICBkZWZpbmUoXCJGaWxlU2F2ZXIuanNcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRfd2FzbV9pbnN0YW5jZSB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuY29uc3QgQVVESU9fQlVGU0laRSA9IDEwMjQ7ICAvLyBtdXN0IG1hdGNoIC5jXHJcblxyXG5sZXQgYXVkaW9fYnVmZmVyc19xdWV1ZTogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1ZGlvX2J1Zl9yZWFkeShwdHI6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgIGlmKCFhdWRpb19wbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICBsZXQgc3RhcnQgPSBwdHIgLyBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgIGxldCBidWZmZXIgPSBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuc3ViYXJyYXkoc3RhcnQsc3RhcnQrc2l6ZSkgYXMgbnVtYmVyW107XHJcblxyXG4gICBhdWRpb19idWZmZXJzX3F1ZXVlLnB1c2goWyAuLi5idWZmZXIgXSk7ICAvLyBwdXNoIGEgY2xvbmVkIGNvcHlcclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFVRElPIEJVRkZFUiBUTyBCUk9XU0VSIEFVRElPICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuY29uc3QgYnVmZmVyU2l6ZSA9IEFVRElPX0JVRlNJWkU7XHJcblxyXG5sZXQgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHR8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgc3BlYWtlclNvdW5kOiBTY3JpcHRQcm9jZXNzb3JOb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0KCkge1xyXG4gICBhdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpOyAvLyBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTsgICBcclxuICAgc3BlYWtlclNvdW5kID0gYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCAxLCAxKTtcclxuXHJcbiAgIHNwZWFrZXJTb3VuZC5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZS5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XHJcblxyXG4gICAgICBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndhcm5pbmc6IGF1ZGlvIHF1ZXVlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB3YXJuaW5nOiBhdWRpbyBxdWV1ZSBpcyBnZXR0aW5nIGxvbmdlcjogJHthdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aH1gKTtcclxuICAgICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF1ZGlvX2J1ZmZlcnNfcXVldWVbMF07XHJcbiAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBhdWRpb19idWZmZXJzX3F1ZXVlLnNsaWNlKDEpO1xyXG5cclxuICAgICAgZm9yKGxldCBpPTA7IGk8YnVmZmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgIG91dHB1dFtpXSA9IGJ1ZmZlcltpXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi8qXHJcbmxldCBjaDAgPSBbXTtcclxubGV0IGNoMSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY3NhdmUoKSB7XHJcbiAgIGNvbnN0IHdhdkRhdGEgPSB7XHJcbiAgICAgIHNhbXBsZVJhdGU6IDQ4MDAwLFxyXG4gICAgICBjaGFubmVsRGF0YTogWyBuZXcgRmxvYXQzMkFycmF5KGNoMCksIG5ldyBGbG9hdDMyQXJyYXkoY2gxKSBdXHJcbiAgIH07XHJcbiAgICAgXHJcbiAgIGNvbnN0IGJ1ZmZlciA9IGVuY29kZVN5bmMod2F2RGF0YSwgeyBiaXREZXB0aDogMTYsIGZsb2F0OiBmYWxzZSB9KTsgICAgICBcclxuICAgXHJcbiAgIGxldCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7ICAgXHJcbiAgIGNvbnN0IGZpbGVOYW1lID0gXCJjc2F2ZWQud2F2XCI7XHJcbiAgIHNhdmVBcyhibG9iLCBmaWxlTmFtZSk7XHJcbn1cclxuKi9cclxuXHJcbmxldCBhdWRpb19wbGF5aW5nOiBib29sZWFufHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb0F1ZGlvKCkge1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgY3JlYXRlQXVkaW9Db250ZXh0KCk7XHJcblxyXG4gICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBzcGVha2VyU291bmQuY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICBhdWRpb19wbGF5aW5nID0gdHJ1ZTtcclxuICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcEF1ZGlvKCkge1xyXG4gICBpZihhdWRpb19wbGF5aW5nICE9PSB1bmRlZmluZWQgJiYgYXVkaW9fcGxheWluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBzcGVha2VyU291bmQuZGlzY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICBhdWRpb19wbGF5aW5nID0gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1ZGlvQ29udGV4dFJlc3VtZSgpIHtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIGNyZWF0ZUF1ZGlvQ29udGV4dCgpO1xyXG4gICBpZihhdWRpb19wbGF5aW5nID09PSB1bmRlZmluZWQpIGdvQXVkaW8oKTtcclxuXHJcbiAgIGlmKHNwZWFrZXJTb3VuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICBpZihhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XHJcbiAgICAgIGF3YWl0IGF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcclxuICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJCU0Nvbm5lY3RvciB7XHJcbiAgIGFkZHJlc3MgPSBcIlwiOyAgICAgXHJcbiAgIHByb3RvY29sOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICB3c19jb25uZWN0aW9uOiBXZWJTb2NrZXQgfCB1bmRlZmluZWQ7ICAgICBcclxuICAgXHJcbiAgIG9uX2Vycm9yID0gKGVycjogRXZlbnQpPT4ge307XHJcbiAgIG9uX29wZW4gPSAoKT0+IHt9O1xyXG4gICBvbl9jbG9zZSA9ICgpPT4ge307XHJcbiAgIG9uX2RhdGEgPSAoZGF0YTogVWludDhBcnJheSk9PiB7fTtcclxuXHJcbiAgIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICBcclxuICAgY29ubmVjdCgpIHtcclxuICAgICAgLy8gZW1wdHkgc3RyaW5nIG1lYW5zIG5vIHByb3RvY29sICh1bmRlZmluZWQpXHJcbiAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgPT09ICcnID8gdW5kZWZpbmVkIDogdGhpcy5wcm90b2NvbDtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5hZGRyZXNzfWAscHJvdG9jb2wpO1xyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbmVycm9yID0gKGVycik9PntcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0aW9uIGVycm9yJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMub25fZXJyb3IoZXJyKTtcclxuICAgICAgfTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGVkJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5vbl9vcGVuKCk7XHJcbiAgICAgIH07XHJcbiAgIFxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBkaXNjb25uZWN0ZWQnKTsgICAgICAgICBcclxuICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5vbl9jbG9zZSgpO1xyXG4gICAgICB9OyAgICAgIFxyXG5cclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9ubWVzc2FnZSA9IChlKSA9PiB7ICAgICAgXHJcbiAgICAgICAgIGlmIChlLmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uX2RhdGEobmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7IFxyXG4gICAgICAgICAgICBsZXQgbCA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYEFDSUEucmVjZWl2ZV9kYXRhKCR7SlNPTi5zdHJpbmdpZnkobCl9KTtgKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHdlYnNvY2tldCBSZWNlaXZlZCBzdHJpbmc6ICcke2UuZGF0YX0nYCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgc2VuZF9kYXRhX3RvX2JicyhkYXRhOiBudW1iZXJbXSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy53c19jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IHRoaXMud3NfY29ubmVjdGlvbi5PUEVOKSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5zZW5kKGJ5dGVzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgZGlzY29ubmVjdGVkLCBjYW4ndCBzZW5kIVwiKTtcclxuICAgICAgfVxyXG4gICB9ICAgXHJcbiAgIFxyXG4gICBjbG9zZSgpIHtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQpIHsgICAgICAgICBcclxuICAgICAgICAgdGhpcy53c19jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8vIGhhbmRsZXMgaW50ZXJhY3Rpb24gYmV0d2VlbiBicm93c2VyIGFuZCBlbXVsYXRpb24gXHJcblxyXG5pbXBvcnQgeyBnb0F1ZGlvLCBzdG9wQXVkaW8sIGF1ZGlvQ29udGV4dFJlc3VtZSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5sZXQgYXNwZWN0ID0gMS4zO1xyXG5cclxuZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgICBcclxuXHJcbiAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gKHdpbmRvdy5pbm5lckhlaWdodCphc3BlY3QpKVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBgJHthc3BlY3QqMTAwfXZtaW5gO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2bWluXCI7XHJcbiAgIH1cclxuICAgZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gXCIxMDB2bWF4XCI7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHsoMS9hc3BlY3QpKjEwMH12bWF4YDtcclxuICAgfVxyXG4gICBlbHNlXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IFwiMTAwdm1pblwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7KDEvYXNwZWN0KSoxMDB9dm1pbmA7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHRydWVIZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvRnVsbFNjcmVlbigpIFxyXG57XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgIFxyXG4gICBjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4oKTsgXHJcbiAgIG9uUmVzaXplKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBnb0Z1bGxTY3JlZW4pO1xyXG5cclxub25SZXNpemUoKTtcclxuXHJcbi8vICoqKiogc2F2ZSBzdGF0ZSBvbiBjbG9zZSAqKioqXHJcblxyXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgIFxyXG59O1xyXG5cclxuLy8gKioqKiB2aXNpYmlsaXR5IGNoYW5nZSAqKioqXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgIGlmKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJoaWRkZW5cIilcclxuICAge1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgIHN0b3BBdWRpbygpO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIilcclxuICAgeyAgICAgIFxyXG4gICAgICBjNjQuZ28oKTtcclxuICAgICAgZ29BdWRpbygpO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiBkcmFnICYgZHJvcCAqKioqXHJcblxyXG5jb25zdCBkcm9wWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbi8vIE9wdGlvbmFsLiAgIFNob3cgdGhlIGNvcHkgaWNvbiB3aGVuIGRyYWdnaW5nIG92ZXIuICBTZWVtcyB0byBvbmx5IHdvcmsgZm9yIGNocm9tZS5cclxuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgZS5kYXRhVHJhbnNmZXIhLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbn0pO1xyXG5cclxuLy8gR2V0IGZpbGUgZGF0YSBvbiBkcm9wXHJcbmRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcclxuICAgYXVkaW9Db250ZXh0UmVzdW1lKCk7XHJcblxyXG4gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIhLmZpbGVzOyAvLyBBcnJheSBvZiBhbGwgZmlsZXNcclxuXHJcbiAgIGZvcihsZXQgaT0wOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBsZXQgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOyAgICAgIFxyXG4gICAgICByZWFkZXIub25sb2FkID0gZTIgPT4gZHJvcHBlZEZpbGUoZmlsZS5uYW1lLCBuZXcgVWludDhBcnJheShlMi50YXJnZXQhLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7IFxyXG4gICB9XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJvcHBlZEZpbGUob3V0TmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkge1xyXG4gICBjb25zdCBwcmcgPSAvXFwucHJnJC9pO1xyXG4gICBpZihwcmcudGVzdChvdXROYW1lKSkgeyAgICBcclxuICAgICAgYXdhaXQgbG9hZEJ5dGVzKGJ5dGVzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBNNjgyMSB9IGZyb20gXCIuL202ODIxXCI7XHJcbmltcG9ydCB7IE02ODUwIH0gZnJvbSBcIi4vbTY4NTBcIjtcclxuXHJcbmltcG9ydCB7IEJCU0Nvbm5lY3RvciB9IGZyb20gXCIuLi9iYnNfY29ubmVjdG9yXCI7XHJcblxyXG5sZXQgUElBID0gbmV3IE02ODIxKCk7XHJcbmxldCBBQ0lBID0gbmV3IE02ODUwKCk7XHJcblxyXG5leHBvcnQgbGV0IHZpZGVvdGVsID0gbmV3IEJCU0Nvbm5lY3RvcigpO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLkFDSUEgPSBBQ0lBO1xyXG5cclxudmlkZW90ZWwub25fZXJyb3IgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX2Nsb3NlID0gKCk9PntcclxuICAgLy8gc2V0cyBOTyBDQVJSSUVSXHJcbiAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICBjb25zb2xlLmxvZyhcIk5PIENBUlJJRVJcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9vcGVuID0gKCk9PntcclxuICAgLy8gY2xlYXJzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDA7XHJcbiAgIFBJQS5QQSAmPSAxMjc7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ0FSUklFUiBERVRFQ1RcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9kYXRhID0gKGRhdGEpPT57XHJcbiAgIEFDSUEucmVjZWl2ZV9kYXRhKGRhdGEpO1xyXG59XHJcblxyXG5BQ0lBLnRyYW5zbWl0X2RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICB2aWRlb3RlbC5zZW5kX2RhdGFfdG9fYmJzKFtkYXRhXSk7XHJcbn1cclxuXHJcblBJQS5udW1iZXJfZGVjb2Rlci5hZnRlcmRpYWx0b25lID0gKG51bXRlbDogc3RyaW5nKT0+IHtcclxuICAgdmlkZW90ZWwuY29ubmVjdCgpO1xyXG4gICAvKlxyXG4gICBpZihudW10ZWwgPT09IFwiMDUyMjc1MDA1MVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ29vZCBudW1iZXIhXCIpO1xyXG4gICAgICB2aWRlb3RlbC5jb25uZWN0KCk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhZCBudW1iZXIhXCIpO1xyXG4gICB9XHJcbiAgICovXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIHRoZSB3aG9sZSBzeXN0ZW0gaXMgcmVzZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3Jlc2V0KClcclxue1xyXG4gICBQSUEucmVzZXQoKTsgXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSByZWFkcyBJL08gaW4gdGhlIHJhbmdlICRERTAwLURGRkZcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3JlYWQoYWRkcjogbnVtYmVyLCB0aWNrczogbnVtYmVyKVxyXG57ICAgXHJcbiAgIGlmKGFkZHIgPCAweERGMDApIHJldHVybiBQSUEucmVhZChhZGRyKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgcmV0dXJuIEFDSUEuY3B1X3JlYWQoYWRkciwgdGlja3MpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkciA8IDB4REYwMCkgUElBLndyaXRlKGFkZHIsIGRhdGEpO1xyXG4gICBlbHNlICAgICAgICAgICAgICBBQ0lBLmNwdV93cml0ZShhZGRyLCBkYXRhKTtcclxufVxyXG5cclxuIiwiLypcclxuTm90ZSB2YXJpZTpcclxuXHJcblBJQSA9IE1vdG9yb2xhIDY4MjFcclxuICAgRW5hYmxlID0gY3B1IGNsb2NrXHJcbiAgIC9SVyA9IGNwdSAvUldcclxuICAgL1JFU0VUID0gY3B1IC9SRVNFVFxyXG4gICBDUzAgPSBzZW1wcmUgcG9zdG8gYSAxIChWQ0MpXHJcbiAgIENTMSA9IHNlbXByZSBwb3N0byBhIDEgKFZDQylcclxuICAgL0NTMiA9IC9JTzEgKGNwdSBJL08pIHJhbmdlICRERTAwLSRERUZGLlxyXG4gICBSUzAsUlMxID0gW0ExOkEwXVxyXG4gICAvSVJRQSwvSVJRQiA9IC9JUlEgY3B1LCBjbGVhcmVkIGJ5IHJlYWRpbmcgZGF0YSByZWdpc3RlclxyXG4gICBDQTEgPSAoaW50ZXJydXB0IGlucHV0KSBzZWduYWxlIGRpIFJJTkdcclxuICAgQ0IxID0gKGludGVycnVwdCBpbnB1dCkgMCAoR05EKVxyXG4gICBDQTIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBpbiBBMTQgZGVsbGEgcm9tIGludGVybmEgKGJhbmsgc3dpdGNoaW5nKVxyXG4gICBDQjIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBlcm1ldHRlIGRpIHN3aXRjaGFyZSBpbCBwaW4gRVhST00gKGNhcnQgb2ZmKVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBoZXggfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNNjgyMSB7XHJcbiAgIENSQSA9IDA7XHJcbiAgIENSQiA9IDA7XHJcblxyXG4gICBQQSA9IDA7XHJcbiAgIFBCID0gMDtcclxuXHJcbiAgIEREUkEgPSAwO1xyXG4gICBERFJCID0gMDtcclxuXHJcbiAgIC8vIGRpYWx0b25lIGRldGVjdGlvblxyXG4gICBudW1iZXJfZGVjb2RlciA9IG5ldyBOdW1iZXJEZWNvZGVyKCk7ICAgXHJcblxyXG4gICByaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgIGlmKHZhbHVlKSB0aGlzLkNSQSA9IHRoaXMuQ1JBIHwgMGIxMDAwMDAwMDsgXHJcbiAgICAgIGVsc2UgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMTExMTExMTsgICAgICAgXHJcbiAgIH1cclxuIFxyXG4gICByZXNldCgpIHtcclxuICAgICAgdGhpcy5DUkEgPSAwO1xyXG4gICAgICB0aGlzLkNSQiA9IDA7ICAgIFxyXG4gICAgICB0aGlzLlBBID0gMDtcclxuICAgICAgdGhpcy5QQiA9IDA7XHJcbiAgICAgIHRoaXMuRERSQSA9IDA7XHJcbiAgICAgIHRoaXMuRERSQiA9IDA7XHJcbiAgICAgIGM2NC5zZXRfY2JtXzY0OTlfbmJhbmsoMSk7XHJcbiAgICAgIGRlYnVnKGBQSUE6IFJFU0VUYCk7ICAgIFxyXG4gICB9XHJcbiBcclxuICAgcmVhZChhZGRyOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBBID0gJCR7aGV4KHRoaXMuUEEsMil9YCk7IFxyXG4gICAgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMDExMTExMTsgLy8gY2xlYXIgaW50ZXJydXB0IGZsYWdcclxuICAgICAgICAgcmV0dXJuIHRoaXMuUEE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMCkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBERFJBID0gJCR7aGV4KHRoaXMuRERSQSwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuRERSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBDUkEgPSAkJHtoZXgodGhpcy5DUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkNSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBCID0gJCR7aGV4KHRoaXMuUEIsMil9YCk7ICAgICAgICBcclxuICAgICAgICAgdGhpcy5DUkIgPSB0aGlzLkNSQiAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGFsc28gaW50ZXJydXB0IGZsYWcgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQiA9ICQke2hleCh0aGlzLkREUkIsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkI7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JCID0gJCR7aGV4KHRoaXMuQ1JCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkI7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuIFxyXG4gICB3cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgQ1JBMiA9ICh0aGlzLkNSQSA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBDUkIyID0gKHRoaXMuQ1JCID4+IDIpICYgMTtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDM7XHJcbiAgICAgICAgICAgaWYoUlMgPT09IDBiMDEpIHRoaXMud3JpdGVfQ1JBKGRhdGEpO1xyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB0aGlzLndyaXRlX0NSQihkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB0aGlzLndyaXRlX1BBKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHRoaXMud3JpdGVfRERSQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB0aGlzLndyaXRlX1BCKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHRoaXMud3JpdGVfRERSQihkYXRhKTsgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JBKGRhdGE6IG51bWJlcikgeyAgIFxyXG4gICAgICB0aGlzLkNSQSA9IGRhdGE7XHJcbiAgICAgIC8vIGJhbmsgc3dpdGNoaW5nXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBiYW5rID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKGJhbmspOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogUk9NIGJhbmsgc3dpdGNoIHRvICR7YmFua31gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9DUkIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuQ1JCID0gZGF0YTtcclxuICAgICAgLy8gRVhST00gcGluIHRyaWdnZXJcclxuICAgICAgaWYoZGF0YSAmIDBiMDAxMTAwMDApIHtcclxuICAgICAgICAgbGV0IGV4cm9tID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2V4cm9tKCEhZXhyb20pOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogRVhST00gc3dpdGNoIHRvICR7ISFleHJvbX1gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JCIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9ICAgXHJcblxyXG4gICB3cml0ZV9ERFJBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkREUkEgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgRERSQSB0byBiaW5hcnkgJHtkYXRhLnRvU3RyaW5nKDE2KX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfRERSQihkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5ERFJCID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkIgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX1BBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLlBBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IFBBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcbiBcclxuICAgd3JpdGVfUEIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIC8vIGRpYWx0b25lIGRldGVjdGlvbiBzdGFydHMgYmJzIGRlbGF5ZWRcclxuICAgICAgbGV0IFBCNSA9IChkYXRhID4+IDUpICYgMTsgIGxldCBvbGRfUEI1ID0gKHRoaXMuUEIgPj4gNSkgJiAxO1xyXG4gICAgICBsZXQgUEI2ID0gKGRhdGEgPj4gNikgJiAxOyAgbGV0IG9sZF9QQjYgPSAodGhpcy5QQiA+PiA2KSAmIDE7XHJcbiAgICAgIGxldCBQQjcgPSAoZGF0YSA+PiA3KSAmIDE7ICBsZXQgb2xkX1BCNyA9ICh0aGlzLlBCID4+IDcpICYgMTtcclxuXHJcbiAgICAgIHRoaXMubnVtYmVyX2RlY29kZXIudGljayhQQjYsIFBCNSwgZGF0YSk7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKGRhdGEudG9TdHJpbmcoMikpO1xyXG4gICAgICBcclxuICAgICAgaWYoUEI1ID09PSAwICYmIG9sZF9QQjUgPT09IDEpIHsgICAgICAgICBcclxuXHJcbiAgICAgICAgIGRlYnVnKFwiUElBOiBkaWFsaW5nLi4uXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihQQjcgIT09IG9sZF9QQjcpIHtcclxuICAgICAgICAgLy8gUEI3IGNoYW5nZWRcclxuICAgICAgICAgZGVidWcoYCoqKioqKioqIFBCNzogJHtQQjd9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuUEIgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgUEIgdG8gJCR7aGV4KGRhdGEsMil9YCk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICAvL2NvbnNvbGUubG9nKG0pO1xyXG59XHJcblxyXG5jbGFzcyBOdW1iZXJEZWNvZGVyXHJcbntcclxuICAgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICBwdWxzZXMgPSAwO1xyXG4gICB0ZWxudW1iZXI6IG51bWJlcltdID0gW107XHJcbiAgIGZpbmlzaF90aW1lcjogbnVtYmVyfHVuZGVmaW5lZDtcclxuXHJcbiAgIG9sZF9QQjYgPSAwO1xyXG4gICBvbGRfUEI1ID0gMDtcclxuXHJcbiAgIGFmdGVyZGlhbHRvbmUgPSAobnVtYmVyOiBzdHJpbmcpPT57fTtcclxuICAgXHJcbiAgIHRpY2soUEI2OiBudW1iZXIsIFBCNTogbnVtYmVyLCBkYXRhOiBudW1iZXIpIHtcclxuICAgICAgaWYoIXRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICBpZihQQjUgPT09IDEgJiYgdGhpcy5vbGRfUEI1ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucHVsc2VzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50ZWxudW1iZXIgPSBbXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWFsaW5nIHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgaWYoUEI2ID09PSAwICYmIHRoaXMub2xkX1BCNiA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBkaWFsdG9uZSBjbGlja1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBCNiBkb3duIChkaWFsKVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wdWxzZXMrKztcclxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oXCJkaWFsdG9uZV9jbGljay5tcDNcIik7IC8vIHRha2VuIGZyb20gXCJodHRwczovL3d3dy5mZXNsaXlhbnN0dWRpb3MuY29tL3BsYXktbXAzLzM4N1wiXHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICBpZihQQjYgPT09IDEgJiYgdGhpcy5vbGRfUEI2ID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvZiBkaWFsdG9uZSBjbGlja1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKFBCNSA9PT0gMCAmJiB0aGlzLm9sZF9QQjUgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gZW5kIG9mIGRpZ2l0XHJcbiAgICAgICAgICAgIHRoaXMudGVsbnVtYmVyLnB1c2godGhpcy5wdWxzZXMgJSAxMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHVsc2VzID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbmNlbCBvbGQgdGltZXJcclxuICAgICAgICAgICAgaWYodGhpcy5maW5pc2hfdGltZXIpIGNsZWFyVGltZW91dCh0aGlzLmZpbmlzaF90aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX3RpbWVyID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICB0aGlzLm51bWJlcl9jb21wb3NlZCh0aGlzLnRlbG51bWJlci5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgdGhpcy5maW5pc2hfdGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0sIDMwMDApIGFzIGFueSBhcyBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBCNSBkb3duIChlbmQgbnVtYmVyKVwiKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub2xkX1BCNSA9IFBCNTtcclxuICAgICAgdGhpcy5vbGRfUEI2ID0gUEI2OyAgICAgIFxyXG4gICB9XHJcblxyXG4gICBudW1iZXJfY29tcG9zZWQodGVsbnVtOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2coYGRpYWxpbmcgY29tcGxldGVkISBjYWxsZWQgJHt0ZWxudW19YCk7XHJcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFmdGVyZGlhbHRvbmUodGVsbnVtKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCIvKlxyXG5BQ0lBID0gbW90b3JvbGEgNjg1MFxyXG4gICAgQ1MyID0gL0lPMiAoY3B1IEkvTykgcmFuZ2UgJERGMDAtJERGRkYuICAgXHJcblxyXG42ODUwIHN0YXR1cyByZWdpc3RlclxyXG4gICAwIC0gcmVjZWl2ZSBidWZmZXIgZnVsbCBcclxuICAgMSAtIHRyYW5zbWl0IGJ1ZmZlciBlbXB0eVxyXG4gICAyIC0gbm8gY2FycmllclxyXG4gICAzIC0gL2NsZWFyIHRvIHNlbmRcclxuICAgNCAtIGZyYW1pbmcgZXJyb3JcclxuICAgNSAtIHJlY2VpdmVyIG92ZXJydW5cclxuICAgNiAtIHBhcml0eSBlcnJvclxyXG4gICA3IC0gL0lSUVxyXG5cclxuNjg1MCBjb250cm9sIHJlZ2lzdGVyXHJcbiAgIENSMXxDUjAgPSAwMCBubyBkaXZpZGVcclxuICAgICAgICAgICAgIDAxIGRpdmlkZSBieSAxNlxyXG4gICAgICAgICAgICAgMTAgZGl2aWRlIGJ5IDY0XHJcbiAgICAgICAgICAgICAxMSBtYXN0ZXIgcmVzZXQgXHJcbiAgICBcclxuICAgIENSNHxDUjN8Q1IyID0gYml0L3Bhcml0eS9zdG9wIGJpdFxyXG5cclxuKi9cclxuXHJcbmltcG9ydCB7IFNwZWVkTGltaXRlciB9IGZyb20gXCIuL3NwZWVkX2xpbWl0ZXJcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ19iaXRzID0gW1xyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm5vbmVcIiwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJub25lXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAxIH1cclxuXTtcclxuXHJcbmNvbnN0IGNsb2NrX2RpdmlkZXIgPSBbIFwibm9uZVwiLCBcIjE2XCIsIFwiNjRcIiBdO1xyXG5cclxuZXhwb3J0IGNsYXNzIE02ODUwXHJcbnsgICBcclxuICAgQ09OVFJPTCA9IDA7XHJcbiAgIFRSQU5TTUlUX0RBVEEgPSAwOyBcclxuICAgUkVDRUlWRV9EQVRBID0gMDsgIFxyXG5cclxuICAgLy8gc3RhdHVzIHJlZ2lzdGVyIGJpdHNcclxuICAgU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgID0gMDtcclxuICAgU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgID0gMDtcclxuICAgU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgID0gMDtcclxuICAgU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDsgICBcclxuXHJcbiAgIGJ1ZmZlciA9IG5ldyBTcGVlZExpbWl0ZXIoKTtcclxuICAgICAgICAgXHJcbiAgIGdldF9zdGF0dXNfYnl0ZSh0aWNrczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgPSB0aGlzLmJ1ZmZlci5nZXRfc3RhdHVzKHRpY2tzKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdGF0dXMgPSBcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgIDw8IDApIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZIDw8IDEpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgIDw8IDIpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgIDw8IDMpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgIDw8IDQpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gIDw8IDUpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgIDw8IDYpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgIDw8IDcpOyAgIFxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICB9XHJcblxyXG4gICBjcHVfcmVhZChhZGRyOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRfc3RhdHVzX2J5dGUodGlja3MpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgeyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmdldF9zdGF0dXNfYnl0ZSh0aWNrcyk7XHJcbiAgICAgICAgIGlmKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSB0aGlzLmJ1ZmZlci5nZXRfYnl0ZSh0aWNrcyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHRoaXMuUkVDRUlWRV9EQVRBO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNwdV93cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMTtcclxuICAgICAgaWYoUlMgPT09IDApIHtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IHNldCBjb250cm9sID0gKCR7ZGF0YS50b1N0cmluZygyKX0pYCk7XHJcbiAgICAgICAgIHRoaXMuQ09OVFJPTCA9IGRhdGE7XHJcblxyXG4gICAgICAgICBsZXQgQ1IxMCAgPSAodGhpcy5DT05UUk9MICYgMGIwMDAwMDAxMSk7XHJcbiAgICAgICAgIGxldCBDUjQzMiA9ICh0aGlzLkNPTlRST0wgJiAwYjAwMDExMTAwKSA+PiAyO1xyXG4gICAgICAgICBsZXQgQ1I2NSAgPSAodGhpcy5DT05UUk9MICYgMGIwMTEwMDAwMCkgPj4gNTtcclxuICAgICAgICAgbGV0IENSNyAgID0gKHRoaXMuQ09OVFJPTCAmIDBiMTAwMDAwMDApID4+IDc7XHJcblxyXG4gICAgICAgICAvLyBtYXN0ZXIgcmVzZXRcclxuICAgICAgICAgaWYoQ1IxMCA9PT0gMGIxMSkge1xyXG4gICAgICAgICAgICBkZWJ1ZyhgQUNJQTogbWFzdGVyIFJFU0VUYCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnJlc2V0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5UUkFOU01JVF9EQVRBID0gMDtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDE7XHJcbiAgICAgICAgICAvL3RoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19GUkFNSU5HX0VSUk9SICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19JUlEgICAgICAgICAgICAgICA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWcoYEFDSUE6IGNsb2NrIGRpdmlkZSBieSAke2Nsb2NrX2RpdmlkZXJbQ1IxMF19YCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGxldCB7IGJpdHMsIHBhcml0eSwgc3RvcF9iaXRzIH0gPSBjb25maWdfYml0c1tDUjQzMl07XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBiaXQgY29uZmlnOiAke2JpdHN9IGJpdHMvcGFyaXR5ICR7cGFyaXR5fS9zdG9wIGJpdHMke3N0b3BfYml0c31gKTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IENSNnw1ID0gJHtDUjY1LnRvU3RyaW5nKDIpfWApO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogQ1I3ID0gJHtDUjd9YCk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBzZXQgdHJhbnNtaXQgZGF0YSA9ICgke2RhdGF9KWApO1xyXG4gICAgICAgICB0aGlzLlRSQU5TTUlUX0RBVEEgPSBkYXRhO1xyXG4gICAgICAgICB0aGlzLlNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDA7XHJcbiAgICAgICAgIHRoaXMudHJhbnNtaXRfZGF0YSh0aGlzLlRSQU5TTUlUX0RBVEEpO1xyXG4gICAgICAgICB0aGlzLlNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDE7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLy8gZXh0ZXJuYWwgd29ybGQgaW50ZXJmYWNlXHJcblxyXG4gICAvLyBjYWxsZWQgZnJvbSBCQlMgY29ubmVjdG9yXHJcbiAgIHJlY2VpdmVfZGF0YShkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgIHRoaXMuYnVmZmVyLnJlY2VpdmVfZGF0YShkYXRhKTsgICAgICAgICAgICBcclxuICAgICAgZGVidWcoYEFDSUE6IHJlY2VpdmVkICR7ZGF0YS5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIHNlbmQgZGF0YSB0byBCQlMgY29ubmVjdG9yXHJcbiAgIHRyYW5zbWl0X2RhdGEgPSAoZGF0YTogbnVtYmVyKT0+e307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICAvL2NvbnNvbGUubG9nKG0pO1xyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgU3BlZWRMaW1pdGVyIHtcclxuXHJcbiAgICByZWNlaXZlX2J1ZmZlcjogbnVtYmVyW10gPSBbXTsgIFxyXG4gICAgdGlja3MgPSAwO1xyXG4gICAgbWF4X2NvdW50ID0gOTg1MjQ4IC8gKDEyMDAgLyA5KTsgLy8gMTIwMCBiYXVkICAgICAgIFxyXG4gXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgIHRoaXMucmVjZWl2ZV9idWZmZXIgPSBbXTsgICAgICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgcmVjZWl2ZV9kYXRhKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgIGRhdGEuZm9yRWFjaChlPT50aGlzLnJlY2VpdmVfYnVmZmVyLnB1c2goZSkpOyAgIFxyXG4gICAgfSBcclxuIFxyXG4gICAgZ2V0X3N0YXR1cyh0aWNrczogbnVtYmVyKSB7ICAgICAgXHJcbiAgICAgICBsZXQgZGlmZiA9IHRpY2tzIC0gdGhpcy50aWNrczsgICAgICAgICAgICBcclxuICAgICAgIGlmKGRpZmYgPCB0aGlzLm1heF9jb3VudCkgcmV0dXJuIDA7ICAgICAgICAgICAgXHJcbiAgICAgICByZXR1cm4gdGhpcy5yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT09IDAgPyAwIDogMTtcclxuICAgIH1cclxuIFxyXG4gICAgZ2V0X2J5dGUodGlja3M6IG51bWJlcikge1xyXG4gICAgICAgdGhpcy50aWNrcyA9IHRpY2tzO1xyXG4gICAgICAgbGV0IGRhdGEgPSB0aGlzLnJlY2VpdmVfYnVmZmVyWzBdO1xyXG4gICAgICAgdGhpcy5yZWNlaXZlX2J1ZmZlciA9IHRoaXMucmVjZWl2ZV9idWZmZXIuc2xpY2UoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuIH1cclxuIFxyXG4gIiwiaW1wb3J0IGVtc2NyaXB0ZW5fbW9kdWxlIGZyb20gXCIuLi9lbXNjcmlwdGVuX21vZHVsZVwiO1xyXG5pbXBvcnQgeyBvbmVGcmFtZSB9IGZyb20gXCIuL2VtdWxhdG9yXCI7XHJcblxyXG5sZXQgd2FzbV9pbnN0YW5jZTogYW55O1xyXG5cclxuLypcclxubGV0IHJvbV9sb2FkO1xyXG5cclxubGV0IGlvX3JlYWQ7XHJcbmxldCBpb193cml0ZTtcclxuXHJcbmxldCBrZXlib2FyZF9yZXNldDtcclxubGV0IGtleWJvYXJkX3ByZXNzO1xyXG5sZXQga2V5Ym9hcmRfcmVsZWFzZTtcclxubGV0IGtleWJvYXJkX3BvbGw7XHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgYzY0ID0geyBcclxuICAgdGFwZTogeyB9LFxyXG4gICBpbml0OiAoKT0+e30sXHJcbiAgIGNvbmZpZzogKGNvbmY6IG51bWJlcik9Pnt9LFxyXG4gICBleDogKGN5Y2xlczogbnVtYmVyKT0+e30sXHJcbiAgIGV4ZWM6ICgpPT57fSxcclxuICAgZXhlY191czogKG1zZWM6IG51bWJlcik9Pnt9LFxyXG4gICB2ZHA6ICgpPT57fSxcclxuICAgcmVzZXQ6ICgpPT57fSxcclxuICAga2V5X2Rvd246IChrZXk6IG51bWJlcik9Pnt9LFxyXG4gICBrZXlfdXA6IChrZXk6IG51bWJlcik9Pnt9LFxyXG4gICBqb3lzdGljazogKCk9Pnt9LFxyXG4gICBlbXVfam95OiAoam95OiBudW1iZXIpPT57fSxcclxuICAgbG9hZF9wcmc6IChieXRlczogVWludDhBcnJheSwgc2l6ZTogbnVtYmVyKT0+e30sXHJcbiAgIHBlZWs6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBwb2tlOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIGNhc19wb3J0OiAoKT0+e30sXHJcbiAgIG1lbV9yZWFkOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgbWVtX3dyaXRlOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIG1lbV9yZWFkX3dvcmQ6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBtZW1fd3JpdGVfd29yZDogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBnbzogKCk9PntcclxuICAgICAgYzY0LnN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgb25lRnJhbWUodW5kZWZpbmVkKTtcclxuICAgfSxcclxuXHJcbiAgIHN0b3BwZWQ6IHRydWUsXHJcblxyXG4gICAvLyBDQk0gNjQ5OSBBREFUVEFUT1JFIFRFTEVNQVRJQ08gZW11bGF0aW9uXHJcbiAgIHNldF9leHJvbTogKHZhbHVlOiBib29sZWFuKSA9PiB7fSxcclxuICAgc2V0X2NibV82NDk5X25iYW5rOiAodmFsdWU6IG51bWJlcikgPT4ge30sXHJcbiAgIHNldF9lbXVsYXRlX2NibV82NDk5OiAodmFsdWU6IGJvb2xlYW4pID0+IHt9LCAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRfd2FzbSgpIHsgICBcclxuICAgXHJcbiAgIGxldCBpbnN0YW5jZSA9IGF3YWl0IGVtc2NyaXB0ZW5fbW9kdWxlKCk7XHJcbiAgIFxyXG4gICBjNjQuaW5pdCAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbml0XCIsIG51bGwpO1xyXG4gICBjNjQuY29uZmlnICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19jb25maWdcIiwgbnVsbCwgWydudW1iZXInXSk7XHJcbiAgIGM2NC5leGVjICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2V4ZWNcIiwgbnVsbCk7XHJcbiAgIGM2NC5leCAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2V4XCIsIFsnbnVtYmVyJ10pO1xyXG4gICBjNjQuZXhlY191cyAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leGVjX3VzXCIsIFsnbnVtYmVyJ10pO1xyXG4gICBjNjQudmRwICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c192ZHBcIiwgbnVsbCk7XHJcbiAgIGM2NC5yZXNldCAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3Jlc2V0XCIsIG51bGwpO1xyXG5cclxuICAgYzY0LmtleV9kb3duID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfa2V5X2Rvd25cIiAsIG51bGwsIFsnbnVtYmVyJ10gKTtcclxuICAgYzY0LmtleV91cCAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfa2V5X3VwXCIgICAsIG51bGwsIFsnbnVtYmVyJ10gKTtcclxuICAgYzY0LmpveXN0aWNrID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfam95c3RpY2tcIiAsIG51bGwsIFsnbnVtYmVyJ10gKTtcclxuXHJcbiAgIGM2NC5lbXVfam95ICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9qb3lzdGlja190eXBlXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcblxyXG4gICBjNjQubG9hZF9wcmcgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3F1aWNrX2xvYWRcIiAsIG51bGwsIFsnYXJyYXknLCAnbnVtYmVyJ10gKTtcclxuICAgLy9jNjQuaW5zZXJ0X2NhcnRkcmlnZSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luc2VydF9yb21fY2FydGRyaWdlXCIgLCBudWxsLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcblxyXG4gICBjNjQucGVlayAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19tZW1fY3B1X3JkXCIgICAsICdudW1iZXInLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5wb2tlICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX21lbV9jcHVfd3JcIiAgICwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuXHJcbiAgIC8vYzY0LmR1bXBfdmljID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZHVtcF92aWNcIiAgICwgbnVsbCApO1xyXG5cclxuICAgYzY0LmNhc19wb3J0ID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfY2FzX3BvcnRcIiAgICwgJ251bWJlcicpO1xyXG5cclxuICAgLypcclxuICAgYzY0LnRhcGUuaW5zZXJ0ID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5zZXJ0X3RhcGVcIiAgLCAnYm9vbCcsIFsnYXJyYXknLCAnbnVtYmVyJ10gKTtcclxuICAgYzY0LnRhcGUucmVtb3ZlID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfcmVtb3ZlX3RhcGVcIiAgLCBudWxsICk7XHJcbiAgIGM2NC50YXBlLnBsYXkgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3RhcGVfcGxheVwiICAgICwgbnVsbCApO1xyXG4gICBjNjQudGFwZS5zdG9wICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c190YXBlX3N0b3BcIiAgICAsIG51bGwgKTtcclxuICAgKi9cclxuXHJcbiAgIGM2NC5tZW1fcmVhZCA9IGM2NC5wZWVrO1xyXG4gICBjNjQubWVtX3dyaXRlID0gYzY0LnBva2U7XHJcblxyXG4gICBjNjQubWVtX3dyaXRlX3dvcmQgPSBmdW5jdGlvbihhZGRyZXNzLCB3b3JkKSB7XHJcbiAgICAgIGM2NC5tZW1fd3JpdGUoYWRkcmVzcyArIDAsIHdvcmQgJiAweEZGKTtcclxuICAgICAgYzY0Lm1lbV93cml0ZShhZGRyZXNzICsgMSwgKHdvcmQgJiAweEZGMDApID4+IDgpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBjNjQubWVtX3JlYWRfd29yZCA9IGZ1bmN0aW9uKGFkZHJlc3MpIHtcclxuICAgICAgY29uc3QgbG8gPSBjNjQubWVtX3JlYWQoYWRkcmVzcyArIDApO1xyXG4gICAgICBjb25zdCBoaSA9IGM2NC5tZW1fcmVhZChhZGRyZXNzICsgMSk7XHJcbiAgICAgIHJldHVybiBsbytoaSoyNTY7XHJcbiAgIH0gICBcclxuXHJcbiAgIC8qXHJcbiAgIGNwdV9pbml0ICAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImNwdV9pbml0XCIsIG51bGwpO1xyXG4gICBjcHVfcmVzZXQgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfcmVzZXRcIiwgbnVsbCk7XHJcbiAgIGNwdV9ydW5faW5zdHJ1Y3Rpb24gPSBpbnN0YW5jZS5jd3JhcChcImNwdV9ydW5faW5zdHJ1Y3Rpb25cIiwgJ251bWJlcicpO1xyXG5cclxuICAgbWVtX3JlYWQgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJtZW1fcmVhZFwiLCAnbnVtYmVyJywgWydudW1iZXInXSk7XHJcbiAgIG1lbV93cml0ZSAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibWVtX3dyaXRlXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddKTtcclxuICAgcm9tX2xvYWQgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJyb21fbG9hZFwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcblxyXG4gICBpb19yZWFkICAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImlvX3JlYWRcIiwgJ251bWJlcicsIFsnbnVtYmVyJ10pO1xyXG4gICBpb193cml0ZSAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImlvX3dyaXRlXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddKTtcclxuXHJcbiAgIGxtODBjX3RpY2sgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfdGlja1wiLCAnbnVtYmVyJyk7XHJcbiAgIGxtODBjX3NldF9kZWJ1ZyAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfc2V0X2RlYnVnXCIsIG51bGwsIFsnYm9vbCddKTtcclxuICAgbG04MGNfY3RjX2VuYWJsZSAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19jdGNfZW5hYmxlXCIsIG51bGwsIFsnYm9vbCddKTtcclxuICAgbG04MGNfaW5pdCAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19pbml0XCIsIG51bGwpO1xyXG4gICBsbTgwY19yZXNldCAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3Jlc2V0XCIsIG51bGwpO1xyXG5cclxuICAgbG04MGNfdGlja19saW5lICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY190aWNrX2xpbmVcIiwgJ251bWJlcicsIFsnbnVtYmVyJ10pO1xyXG5cclxuICAga2V5Ym9hcmRfcmVzZXQgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9yZXNldFwiICAsIG51bGwgKTtcclxuICAga2V5Ym9hcmRfcHJlc3MgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9wcmVzc1wiICAsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcbiAgIGtleWJvYXJkX3JlbGVhc2UgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcmVsZWFzZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG4gICBrZXlib2FyZF9wb2xsICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3BvbGxcIiAgICwgJ251bWJlcicsIFsnbnVtYmVyJ10gKTtcclxuICAgKi9cclxuXHJcbiAgIGM2NC5zZXRfZXhyb20gICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9leHJvbVwiICAgICAgICAgICAgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIGM2NC5zZXRfY2JtXzY0OTlfbmJhbmsgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9jYm1fNjQ5OV9uYmFua1wiICAgICwgbnVsbCwgWydudW1iZXInXSApOyBcclxuICAgYzY0LnNldF9lbXVsYXRlX2NibV82NDk5ID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIiAgLCBudWxsLCBbJ2Jvb2wnXSApOyAgICAgXHJcbiAgIFxyXG4gICB3YXNtX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgIFxyXG4gICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfd2FzbV9pbnN0YW5jZSgpIHtcclxuICAgcmV0dXJuIHdhc21faW5zdGFuY2U7XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gVE9ETyBzdGFydCBiYnMgb25seSB3aGVuIHJlcXVpcmVkXHJcbi8vIFRPRE8gcml1bmlmaWNhcmUgVGVybWluYWxlL1BFVFNDSUkgYmJzIGNvbiA2NDk5XHJcbi8vIFRPRE8gcHVzaCBDSUEgVE9EIHRvIGZsb29oL2NoaXBzXHJcbi8vIFRPRE8gdXBkYXRlIHRvIG5ldyBjNjQgaW4gZmxvb2gvY2hpcHNcclxuXHJcbi8vIG5vcm1hbCBCQlMgc3RhcnRzIHdpdGggP2xvYWQ9bmlwcHVyNzIvdGVybWluYWwucHJnXHJcbi8vIHByZXN0ZWwgQkJTIHN0YXJ0cyB3aXRoID9jYm02NDk5PXRydWVcclxuXHJcbi8qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVHZW9tZXRyeSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IHBvbGxfa2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBwZXRzY2lpIH0gZnJvbSBcIi4vcGV0c2NpaV9iYnNcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcblxyXG5sZXQgc3RvcHBlZCA9IGZhbHNlOyAvLyBhbGxvd3MgdG8gc3RvcC9yZXN1bWUgdGhlIGVtdWxhdGlvblxyXG5cclxubGV0IGxhc3Rfa2V5Ym9hcmRwb2xsID0gMDtcclxuXHJcbmxldCBsYXN0X3RpbWVzdGFtcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25lRnJhbWUodGltZXN0YW1wOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgbGV0IHN0YW1wID0gdGltZXN0YW1wID09IHVuZGVmaW5lZCA/IGxhc3RfdGltZXN0YW1wIDogdGltZXN0YW1wO1xyXG4gICBsZXQgdXNlYyA9IChzdGFtcCAtIGxhc3RfdGltZXN0YW1wKSoxMDAwO1xyXG4gICBsYXN0X3RpbWVzdGFtcCA9IHN0YW1wO1xyXG5cclxuICAgaWYodXNlYyA+IDMyMDAwKSB1c2VjID0gMzIwMDA7XHJcblxyXG4gICBpZihzdGFtcCAtIGxhc3Rfa2V5Ym9hcmRwb2xsID4gMTUpIHtcclxuICAgICAgcG9sbF9rZXlib2FyZCgpO1xyXG4gICAgICBsYXN0X2tleWJvYXJkcG9sbCA9IHN0YW1wO1xyXG4gICB9XHJcblxyXG4gICBjNjQuZXhlY191cyh1c2VjKTtcclxuXHJcbiAgIGlmKCFzdG9wcGVkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25lRnJhbWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuXHJcbiAgIGM2NC5jb25maWcoMCk7XHJcblxyXG4gICBjNjQuZXgoNTAwMCk7ICAgICAvLyB3YWl0IGZvciBtZW1vcnkgcGF0dGVybiB3cml0aW5nXHJcbiAgIGM2NC5tZW1fd3JpdGUoMjA0LDEpOyAvLyBmbGFncyBzeXN0ZW0gbm90IGJvb3RlZCB5ZXRcclxuXHJcbiAgIGxldCBvcHRpb25zID0gYXdhaXQgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzKCk7XHJcblxyXG4gICAvLyBhdXRvc3RhcnQgdGVybWluYWwgaWYgbG9hZGVkIGZyb20gYmJzLnNibGVuZG9yaW8udWUgb3IgYmJzLnJldHJvY2FtcHVzLmNvbVxyXG4gICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICBsZXQgaXNfcmV0cm9jYW1wdXMgPSBocmVmLm1hdGNoKC9eaHR0cDpcXC9cXC8oYmJzXFwuc2JsZW5kb3Jpb1xcLmV1fGJic1xcLnJldHJvY2FtcHVzXFwuY29tKS9nKTsgICBcclxuXHJcbiAgIGlmKGlzX3JldHJvY2FtcHVzIHx8IG9wdGlvbnMucGV0c2NpaWJicyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBldHNjaWkuYWRkcmVzcyA9IG9wdGlvbnMud3N0Y3AgPz8gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgwXCI7XHJcbiAgICAgIHBldHNjaWkucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sID8/IFwiYmJzXCI7XHJcbiAgICAgIGlmKG9wdGlvbnMubG9hZCA9PT0gdW5kZWZpbmVkKSBmZXRjaFByb2dyYW0oXCJuaXBwdXI3Mi90ZXJtaW5hbC5wcmdcIik7XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZUdlb21ldHJ5KCk7XHJcblxyXG4gICBjNjQuZ28oKTsgICBcclxufVxyXG4iLCJpbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9ncmFtKG5hbWU6IHN0cmluZylcclxue1xyXG4gICAvL2NvbnNvbGUubG9nKGB3YW50aW5nIHRvIGxvYWQgJHtuYW1lfWApO1xyXG4gICB0cnlcclxuICAge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBzb2Z0d2FyZS8ke25hbWV9YCk7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGxvYWRCeXRlcyhieXRlcyk7XHJcbiAgIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBjYXRjaChlcnIpXHJcbiAgIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBwYXN0ZSwgaGV4IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnl0ZXMoYnl0ZXM6IFVpbnQ4QXJyYXkpIHtcclxuICAgd2FpdF9hbmRfbG9hZChieXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhaXRfYW5kX2xvYWQoYnVmZmVyOiBVaW50OEFycmF5KSB7XHJcbiAgIGlmKGM2NC5tZW1fcmVhZCgyMDQpIT09MCkge1xyXG4gICAgICAvLyBjdXJzb3Igbm90IGZsYXNoaW5nLCBzeXN0ZW0gbm90IHlldCBib290ZWRcclxuICAgICAgc2V0VGltZW91dCgoKT0+d2FpdF9hbmRfbG9hZChidWZmZXIpLCAxMDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuICAgZG9fbG9hZChidWZmZXIpO1xyXG4gICBjb25zb2xlLmxvZyhgbG9hZGVkICR7YnVmZmVyLmxlbmd0aH0gYnl0ZXNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fbG9hZChidWZmZXI6IFVpbnQ4QXJyYXkpIHtcclxuICAgYzY0LmxvYWRfcHJnKGJ1ZmZlciwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgIHBhc3RlKFwiUlVOXFxyXCIpO1xyXG59XHJcblxyXG5jb25zdCBCQVNUWFQgPSAweDAwMmI7XHJcbmNvbnN0IFBST0dORCA9IDB4MDAyZDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX2ZpbGUoZmlsZW5hbWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgaWYoc3RhcnQgPT09IHVuZGVmaW5lZCkgc3RhcnQgPSBjNjQubWVtX3JlYWRfd29yZChCQVNUWFQpO1xyXG4gICBpZihlbmQgPT09IHVuZGVmaW5lZCkgZW5kID0gYzY0Lm1lbV9yZWFkX3dvcmQoUFJPR05EKS0xO1xyXG5cclxuICAgY29uc3QgcHJnID0gWyBzdGFydCAmIDB4RkYsIHN0YXJ0ID4+IDggXTtcclxuICAgZm9yKGxldCBpPTAsdD1zdGFydDsgdDw9ZW5kOyBpKyssdCsrKSB7XHJcbiAgICAgIHByZy5wdXNoKGM2NC5tZW1fcmVhZCh0KSk7XHJcbiAgIH1cclxuICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShwcmcpO1xyXG4gICBcclxuICAgYXdhaXQgZG93bmxvYWQoZmlsZW5hbWUsIGJ5dGVzKTtcclxuXHJcbiAgIGNvbnNvbGUubG9nKGBzYXZlZCBcIiR7ZmlsZW5hbWV9XCIgJHtieXRlcy5sZW5ndGh9IGJ5dGVzIGZyb20gJHtoZXgoc3RhcnQsNCl9aCB0byAke2hleChlbmQsNCl9aGApO1xyXG4gICAvL2NwdS5yZXNldCgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkgeyAgIFxyXG4gICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7ICAgXHJcbiAgIHNhdmVBcyhibG9iLCBmaWxlTmFtZSk7XHJcbiAgIGNvbnNvbGUubG9nKGBkb3dubG9hZGVkIFwiJHtmaWxlTmFtZX1cImApO1xyXG59XHJcbiIsImltcG9ydCB7IGF1ZGlvQ29udGV4dFJlc3VtZSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQX0gZnJvbSBcIi4va2V5Ym9hcmRfSVRcIjtcclxuXHJcbmxldCBsYXN0X3Njcm9sbF9sb2NrOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxubGV0IGNvbnRyb2xfcHJlc3NlZCA9IGZhbHNlO1xyXG5sZXQgYWx0X3ByZXNzZWQgPSBmYWxzZTtcclxubGV0IHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG5cclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IHRydWU7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRMZWZ0XCIpIGFsdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKSBzaGlmdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBjb250cm9sX3ByZXNzZWQgPSB0cnVlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0UmlnaHRcIikgYWx0X3ByZXNzZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRSaWdodFwiKSBzaGlmdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgIC8qXHJcbiAgIGNvbnNvbGUubG9nKFwia2V5RG93blwiKTtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiAgICovXHJcblxyXG4gICAvLyBmcm9tIENocm9tZSA3MSBhdWRpbyBpcyBzdXNwZW5kZWQgYnkgZGVmYXVsdCBhbmQgbXVzdCByZXN1bWUgd2l0aGluIGFuIHVzZXItZ2VuZXJhdGVkIGV2ZW50XHJcbiAgIGF1ZGlvQ29udGV4dFJlc3VtZSgpO1xyXG5cclxuICAgaWYobGFzdF9zY3JvbGxfbG9jayA9PT0gdW5kZWZpbmVkKSBsYXN0X3Njcm9sbF9sb2NrID0gZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKTtcclxuXHJcbiAgIGlmKGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIikhPWxhc3Rfc2Nyb2xsX2xvY2spIHtcclxuICAgICAgbGV0IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkID0gZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKTtcclxuICAgICAgbGFzdF9zY3JvbGxfbG9jayA9IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkO1xyXG4gICAgICBsZXQgZW11X2pveXN0aWNrID0gc2Nyb2xsX2xvY2tfa2V5X3ByZXNzZWQgPyAzIDogMDtcclxuICAgICAgYzY0LmVtdV9qb3koZW11X2pveXN0aWNrKTtcclxuICAgICAgY29uc29sZS5sb2coYEpveXN0aWNrIGVtdWxhdGlvbiAke2VtdV9qb3lzdGljaz09Mz9cImVuYWJsZWRcIjpcImRpc2FibGVkXCJ9YCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIGRpc2FibGUgYXV0byByZXBlYXQsIGFzIGl0IGlzIGhhbmRsZWQgb24gdGhlIGZpcm13YXJlXHJcbiAgIGlmKGUucmVwZWF0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgIHJldHVybjtcclxuICAgfSAgIFxyXG5cclxuICAgLy8gKioqIHNwZWNpYWwgKG5vbiBjaGFyYWN0ZXJzKSBrZXlzICoqKlxyXG5cclxuICAgLy8gUkVTRVQga2V5IGlzIENUUkwrQUxUK0JSRUFLXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJQYXVzZVwiICYmIGUuYWx0S2V5ICYmIGUuY3RybEtleSkge1xyXG4gICAgICBjNjQucmVzZXQoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcblxyXG4gICAvLyBpZiBrZXlib2FyZCBJVEFcclxuICAge1xyXG4gICAgICBjb25zdCBoYXJkd2FyZV9rZXlzID0gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoZS5jb2RlLCBlLmtleSwgZS5zaGlmdEtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5nZXRNb2RpZmllclN0YXRlKFwiQWx0R3JhcGhcIikgKTtcclxuICAgICAgaWYoaGFyZHdhcmVfa2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInByZXNzXCIsIGhhcmR3YXJlX2tleXMgfSk7XHJcbiAgICAgIC8va2V5X3ByZXNzZWQucHVzaChoYXJkd2FyZV9rZXlzKTtcclxuICAgICAga2V5X3ByZXNzX21hcFtlLmNvZGVdID0gaGFyZHdhcmVfa2V5cztcclxuICAgICAgLy9jb25zb2xlLmxvZyhgbWFwIGFmdGVyIHByZXNzOiAke09iamVjdC5rZXlzKGtleV9wcmVzc19tYXApLmpvaW4oXCIsXCIpfWApO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24ga2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xyXG5cclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IGZhbHNlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0TGVmdFwiKSBhbHRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRMZWZ0XCIpIHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpIGFsdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdFJpZ2h0XCIpIHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTsgXHJcbiAgIC8vY29uc29sZS5sb2coZS5jb2RlKTtcclxuXHJcbiAgIC8qXHJcbiAgIGNvbnNvbGUubG9nKFwia2V5VXBcIik7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gZml4IGEgYnVnIGluIENocm9tZTogcHJlc3NpbmcgXCJBTFQtR1IgQFwiIHJlc3VsdHMgaW4ga2V5ZG93biBvZiBcIsOyXCIgaW5zdGVhZCBvZiBcIkBcIlxyXG4gICAvL2lmKGUua2V5ID09PSAnw7InICYmIGUua2V5Q29kZSA9PT0gMTkyICYmIGUud2hpY2ggPT09IDE5Mikge1xyXG4gICAvLyAgIGUua2V5ID0gJ0AnO1xyXG4gICAvL31cclxuXHJcbiAgIGNvbnN0IGhhcmR3YXJlX2tleXMgPSBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQShlLmNvZGUsIGUua2V5LCBlLnNoaWZ0S2V5LCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLmdldE1vZGlmaWVyU3RhdGUoXCJBbHRHcmFwaFwiKSk7XHJcbiAgIGlmKGhhcmR3YXJlX2tleXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzIH0pO1xyXG5cclxuICAgLy8gZml4IHNoaWZ0IHByb2JsZW1cclxuICAgLy9rZXlfcHJlc3NlZC5mb3JFYWNoKGs9PmtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGsgfSkpO1xyXG4gICAvL2tleV9wcmVzc2VkID0gW107XHJcblxyXG4gICBsZXQgY29kZSA9IGUuY29kZTtcclxuICAgLy9jb25zb2xlLmxvZyhgbWFwIGJlZm9yZSByZWxlYXNlOiAke09iamVjdC5rZXlzKGtleV9wcmVzc19tYXApLmpvaW4oXCIsXCIpfWApO1xyXG5cclxuICAgLy8gZml4IHNoaWZ0IHByb2JsZW1cclxuICAgaWYoa2V5X3ByZXNzX21hcFtjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBrID0ga2V5X3ByZXNzX21hcFtjb2RlXTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czogayB9KTtcclxuICAgICAgZGVsZXRlIGtleV9wcmVzc19tYXBbY29kZV07XHJcbiAgIH1cclxuXHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuLy8gY29ubmVjdCBET00gZXZlbnRzXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudDsgXHJcbmVsZW1lbnQub25rZXlkb3duID0ga2V5RG93bjtcclxuZWxlbWVudC5vbmtleXVwID0ga2V5VXA7XHJcbmVsZW1lbnQub25rZXlwcmVzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihlLmtleSA9PSBcIsOgXCIpIGFjY2VudGF0ZShcImFcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDqFwiKSBhY2NlbnRhdGUoXCJlXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6lcIikgYWNjZW50YXRlKFwiZVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOsXCIpIGFjY2VudGF0ZShcImlcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDslwiKSBhY2NlbnRhdGUoXCJvXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw7lcIikgYWNjZW50YXRlKFwidVwiKTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gYWNjZW50YXRlKGtleSkgeyAgICAgIFxyXG4gICBrZXlEb3duKGZha2VFdmVudChrZXkpKTsgICBcclxuICAga2V5VXAoZmFrZUV2ZW50KGtleSkpOyAgIFxyXG4gICBrZXlEb3duKGZha2VFdmVudChcIidcIikpO1xyXG4gICBrZXlVcChmYWtlRXZlbnQoXCInXCIpKTsgICBcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gYWNjZW50YXRlKGtleTogc3RyaW5nKSB7ICAgICAgXHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleURvd24oZmFrZUV2ZW50KGtleSkpLCAwKTtcclxuICAgc2V0VGltZW91dCgoKT0+a2V5VXAgIChmYWtlRXZlbnQoa2V5KSksMjApOyBcclxuICAgc2V0VGltZW91dCgoKT0+a2V5RG93bihmYWtlRXZlbnQoXCInXCIpKSw0MCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleVVwICAoZmFrZUV2ZW50KFwiJ1wiKSksNjApO1xyXG59XHJcblxyXG53aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICByZXNldF9rZXlib2FyZCgpOyAvLyByZWxlYXNlIGFsbCBrZXlzIHRvIHByZXZlbnQgQUxUIGFsd2F5cyBwcmVzc2VkIGFmdGVyIEFMVCtUQUJcclxufVxyXG5cclxuZnVuY3Rpb24gZmFrZUV2ZW50KGtleTogc3RyaW5nKSB7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBjb2RlOiBcIlwiLFxyXG4gICAgICBzaGlmdEtleTogZmFsc2UsXHJcbiAgICAgIGN0cmxLZXk6IGZhbHNlLFxyXG4gICAgICBhbHRLZXk6IGZhbHNlLFxyXG4gICAgICBnZXRNb2RpZmllclN0YXRlOiAoKT0+ZmFsc2UsXHJcbiAgICAgIHByZXZlbnREZWZhdWx0OiAoKT0+ZmFsc2VcclxuICAgfSBhcyBhbnkgYXMgS2V5Ym9hcmRFdmVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIEtleUJvYXJkX0M2NEV2ZW50IHtcclxuICAgdHlwZTogXCJwcmVzc1wifFwicmVsZWFzZVwiO1xyXG4gICBoYXJkd2FyZV9rZXlzOiBudW1iZXJbXTtcclxufVxyXG5cclxubGV0IGtleWJvYXJkX2J1ZmZlcjogS2V5Qm9hcmRfQzY0RXZlbnRbXSA9IFtdO1xyXG4vL2xldCBrZXlfcHJlc3NlZCA9IFtdO1xyXG5sZXQga2V5X3ByZXNzX21hcDoge1trZXk6c3RyaW5nXTogbnVtYmVyW119ID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzZXRfa2V5Ym9hcmQoKSB7XHJcblxyXG4gICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGtleV9wcmVzc19tYXApO1xyXG5cclxuICAga2V5cy5mb3JFYWNoKGs9PntcclxuICAgICAgLy9jb25zb2xlLmxvZyhgY2xlYXJpbmcgJHtrfWApO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrZXlfcHJlc3NfbWFwW2tdIH0pO1xyXG4gICAgICBkZWxldGUga2V5X3ByZXNzX21hcFtrXTtcclxuICAgfSk7XHJcblxyXG4gICBrZXlfcHJlc3NfbWFwID0ge307ICBcclxufVxyXG5cclxubGV0IGtleWJvYXJkX2J1ZmZlcl9lbXB0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9sbF9rZXlib2FyZCgpIHtcclxuICAgLy8gcG9sbCBrZXlib2FyZFxyXG4gICB3aGlsZShrZXlib2FyZF9idWZmZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQga2V5X2V2ZW50ID0ga2V5Ym9hcmRfYnVmZmVyWzBdO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIgPSBrZXlib2FyZF9idWZmZXIuc2xpY2UoMSk7XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlcl9lbXB0eSA9IGtleWJvYXJkX2J1ZmZlci5sZW5ndGggPT0gMDtcclxuXHJcbiAgICAgIGlmKGtleV9ldmVudC50eXBlID09PSBcInByZXNzXCIpIHtcclxuICAgICAgICAgbGV0IGtleXMgPSBrZXlfZXZlbnQuaGFyZHdhcmVfa2V5cztcclxuICAgICAgICAgLy9rZXlzLmZvckVhY2goKGspID0+IGNvbnNvbGUubG9nKGspKTtcclxuICAgICAgICAga2V5cy5mb3JFYWNoKChrOiBudW1iZXIpID0+IGM2NC5rZXlfZG93bihrKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihrZXlfZXZlbnQudHlwZSA9PT0gXCJyZWxlYXNlXCIpIHtcclxuICAgICAgICAgbGV0IGtleXMgPSBrZXlfZXZlbnQuaGFyZHdhcmVfa2V5cztcclxuICAgICAgICAgLy9rZXlzLmZvckVhY2goKGspID0+IGNvbnNvbGUubG9nKGspKTtcclxuICAgICAgICAga2V5cy5mb3JFYWNoKChrKSA9PiBjNjQua2V5X3VwKGspKTtcclxuICAgICAgICAgaWYoa2V5Ym9hcmRfYnVmZmVyX2VtcHR5ICYmICFjb250cm9sX3ByZXNzZWQgJiYgIWFsdF9wcmVzc2VkICYmICFzaGlmdF9wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdD0wO3Q8MjU2O3QrKykgYzY0LmtleV91cCh0KTsgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIvKlxyXG4gICAgIDcgICA2ICAgNSAgIDQgICAzICAgMiAgIDEgICAwXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIDd8IEY3ICBGNSAgRjMgIEYxICBDRE4gQ1JUIFJFVCBERUwgICAgQ1JUPUN1cnNvci1SaWdodCwgQ0ROPUN1cnNvci1Eb3duXHJcbiAgIHxcclxuICA2fCBIT00gVUEgID0gICBSU0ggLyAgIDsgICAqICAgQlAgICAgIEJQPUJyaXRpc2ggUG91bmQsIFJTSD1TaG91bGQgYmUgUmlnaHQtU0hJRlQsXHJcbiAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVQT1VcCBBcnJvd1xyXG4gIDV8IC0gICBAICAgOiAgIC4gICAsICAgTCAgIFAgICArXHJcbiAgIHxcclxuICA0fCAwICAgTyAgIEsgICBNICAgTiAgIEogICBJICAgOVxyXG4gICB8XHJcbiAgM3wgOCAgIFUgICBIICAgQiAgIFYgICBHICAgWSAgIDdcclxuICAgfFxyXG4gIDJ8IDYgICBUICAgRiAgIEMgICBYICAgRCAgIFIgICA1XHJcbiAgIHxcclxuICAxfCA0ICAgRSAgIFMgICBaICAgTFNIIEEgICBXICAgMyAgICAgIExTSD1TaG91bGQgYmUgTGVmdC1TSElGVFxyXG4gICB8XHJcbiAgMHwgMiAgIFEgICBDQk0gU1BDIFNUUCBDVEwgTEEgIDEgICAgICBMQT1MZWZ0IEFycm93LCBDVEw9U2hvdWxkIGJlIENUUkwsIFNUUD1SVU4vU1RPUFxyXG4gICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0JNPUNvbW1vZG9yZSBrZXlcclxuXHJcbiAgICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoY29kZTogc3RyaW5nLCBrZXk6IHN0cmluZywgc2hpZnQ6IGJvb2xlYW4sIGNvbnRyb2w6IGJvb2xlYW4sIGNibTogYm9vbGVhbiwgYWx0Z3JhcGg6IGJvb2xlYW4pIHtcclxuICAgLy9jb25zb2xlLmxvZyhjb2RlLCBrZXksIGUpO1xyXG4gICAvL2NvbnNvbGUubG9nKGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIikpO1xyXG5cclxuICAgbGV0IGhhcmR3YXJlX2tleXMgPSBbXTtcclxuXHJcbiAgIGlmKGtleSA9PT0gXCIxXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjFcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIyXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjJcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIzXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI0XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjRcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI1XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjVcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI2XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjZcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI3XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjdcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI4XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjhcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI5XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjlcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIhXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiFcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gJ1wiJykgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goICdcIicuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwqNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiflwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiI1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiL1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIihcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIilcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIidcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJ1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiP1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIl5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIltcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiW1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIl1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIltcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCp1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJdXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiK1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIrXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiKlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIqXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiw6dcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiI1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjxcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIixcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjtcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiO1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiOlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwicVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwid1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ3XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJlXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImVcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiclwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwidFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ0XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ5XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInlcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiaVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJpXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJvXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm9cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwicFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiYVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJhXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJzXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInNcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJmXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImdcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiaFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwialwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJqXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJrXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImtcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImxcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwibFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwielwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ6XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ4XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInhcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiY1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwidlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ2XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJiXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImJcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiblwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwibVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJtXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJRXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlFcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIldcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiV1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJFXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJSXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlJcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiVFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiWVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJZXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJVXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlVcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIklcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiSVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiT1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJPXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJQXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlBcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiU1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJTXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJEXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkRcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiR1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJHXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJIXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkhcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiSlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiS1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJLXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJMXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkxcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiWFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJYXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJDXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkNcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiVlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJCXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJOXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk5cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiTVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG5cclxuICAgaWYoa2V5ID09PSBcIl9cIikgICAgICAgICB7IGhhcmR3YXJlX2tleXMucHVzaCggNjQpOyBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIH0gIC8vIHNpbXVsYXRlIHVuZGVyc2NvcmVcclxuXHJcbiAgIC8vIEZLRVlTXHJcbiAgIGlmKGNvZGUgPT09IFwiRjFcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMSApO1xyXG4gICBpZihjb2RlID09PSBcIkYyXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjIgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGM1wiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYzICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjRcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNCApO1xyXG4gICBpZihjb2RlID09PSBcIkY1XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjUgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNlwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY2ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjdcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNyApO1xyXG4gICBpZihjb2RlID09PSBcIkY4XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjggKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiU3BhY2VcIikgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgyMCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd0xlZnRcIikgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA4ICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93UmlnaHRcIikgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDkgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dEb3duXCIpICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwYSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd1VwXCIpICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBiICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJEZWxldGVcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAxICApO1xyXG4gICBpZihjb2RlID09PSBcIkluc2VydFwiKSAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MTAgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkJhY2tzcGFjZVwiICYmICBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDEwICApO1xyXG4gICBpZihjb2RlID09PSBcIkJhY2tzcGFjZVwiICYmICFzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAxICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFbnRlclwiKSAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBEICApO1xyXG4gICBpZihjb2RlID09PSBcIk51bXBhZEVudGVyXCIpICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEQgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkVzY2FwZVwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDMgICk7ICAvLyBydW4gc3RvcFxyXG4gICBpZihjb2RlID09PSBcIkVzY2FwZVwiICYmIHNoaWZ0KSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDcgICk7ICAvLyBzaGlmdCArIHJ1biBzdG9wXHJcblxyXG4gICBpZihjb2RlID09PSBcIkhvbWVcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBDICApO1xyXG4gICBpZihjb2RlID09PSBcIkhvbWVcIiAmJiBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAyICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJCYWNrcXVvdGVcIikgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwNCAgKTsgIC8vIGxlZnQgYXJyb3dcclxuXHJcbiAgIGlmKGNvbnRyb2wgJiYgIWFsdGdyYXBoKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICAvL2lmKGNibSkgICAgICAgICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIC8vIGVtdWxhdGUgQ0JNXHJcblxyXG4gICBpZihjb2RlID09PSBcIkVuZFwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuXHJcbiAgIC8qXHJcbiAgIGlmKGNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRSApO1xyXG4gICBpZihjb2RlID09PSBcIlRhYlwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICAqL1xyXG5cclxuICAgaWYoKGNvZGUgPT09IFwiQ29udHJvbExlZnRcIiB8fCBjb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSAmJiAhYWx0Z3JhcGgpICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICBpZigoY29kZSA9PT0gXCJBbHRMZWZ0XCIgfHwgY29kZSA9PSBcIkFsdFJpZ2h0XCIpKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIC8vIGVtdWxhdGUgQ0JNXHJcblxyXG4gICBpZihjb2RlID09PSBcIlBhZ2VVcFwiKSAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RkYgKTsgIC8vIGVtdWxhdGUgUkVTVE9SRVxyXG4gICBpZihjb2RlID09PSBcIlBhZ2VEb3duXCIpICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDM1ICk7ICAgIC8vIFwiI1wiXHJcblxyXG4gICByZXR1cm4gaGFyZHdhcmVfa2V5cztcclxufVxyXG4iLCIvL1xyXG4vLyBmdW5jdGlvbnMgb3JpZ2luYWxseSBjb3BpZWQgZnJvbSBodHRwczovL3d3dy5tZGF3c29uLm5ldC92aWMyMGNocm9tZS92aWMyMC5waHBcclxuLy8gYW5kIGFkYXB0ZWQgZm9yIHRoaXMgZW11bGF0b3JcclxuLy9cclxuXHJcbmltcG9ydCB7IGxvYWRCeXRlcyB9IGZyb20gXCIuL2ZpbGVzeXN0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIGJpblRvQXJyYXkoZGF0YTogc3RyaW5nKSB7XHJcbiAgIGxldCBiaW5jb2RlcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkuIVwiO1xyXG4gICB2YXIgdj0wLGNudD0wLG91dD1bXSxpaT0wO1xyXG4gICBmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKykge1xyXG4gICAgICB2Kz1iaW5jb2Rlcy5pbmRleE9mKGRhdGFbaV0pPDxjbnQ7XHJcbiAgICAgIGNudCs9NjtcclxuICAgICAgaWYoY250Pj04KSB7XHJcbiAgICAgICAgIG91dFtpaSsrXT0odiYyNTUpO1xyXG4gICAgICAgICBjbnQtPTg7XHJcbiAgICAgICAgIHY+Pj04O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVybmFsTG9hZChjbWQ6IHN0cmluZywgdXJsOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3ViZmlsZT86IHN0cmluZykge1x0XHJcblx0Y29uc29sZS5sb2coXCJleHRlcm5hbExvYWQgY21kPVwiK2NtZCtcIiB1cmw9XCIrdXJsK1wiIGZvcm1hdD1cIitmb3JtYXQrXCIgc3ViZmlsZT1cIitzdWJmaWxlKTtcclxuXHR2YXIgaGVhZD0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuXHR2YXIgc2NyaXB0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQudHlwZT0gJ3RleHQvamF2YXNjcmlwdCc7XHRcclxuXHRzY3JpcHQuc3JjPSAnaHR0cHM6Ly93d3cubWRhd3Nvbi5uZXQvdmljMjBjaHJvbWUvdmljMjAvcHJndG9qc2xvYWRlci5waHA/Y21kPScrY21kKycmcHJndXJsPScrdXJsKycmc3ViZmlsZT0nK3N1YmZpbGU7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59XHJcblxyXG4od2luZG93IGFzIGFueSkubWRhd3Nvbl9sb2FkQnl0ZXMgPSBsb2FkQnl0ZXM7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIG1kYXdzb25fbG9hZEJ5dGVzKHNyYzogVWludDhBcnJheSk6IHZvaWQ7XHJcblxyXG4od2luZG93IGFzIGFueSkubG9hZFByZz0gZnVuY3Rpb24oc3JjOiBhbnkpIHsgICBcclxuICAgaWYoc3JjLmxlbmd0aCAhPT0gMSkgcmV0dXJuO1xyXG5cclxuICAgbGV0IGJpbiA9IGJpblRvQXJyYXkoc3JjWzBdKTtcclxuICAgXHJcbiAgIG1kYXdzb25fbG9hZEJ5dGVzKG5ldyBVaW50OEFycmF5KGJpbikpO1xyXG59XHJcbiIsImltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2dyYW0gfSBmcm9tIFwiLi9mZXRjaFByb2dyYW1cIjtcclxuaW1wb3J0IHsgZXh0ZXJuYWxMb2FkIH0gZnJvbSBcIi4vbWRhd3NvblwiO1xyXG5pbXBvcnQgeyB2aWRlb3RlbCB9IGZyb20gXCIuL2NibV82NDk5L2NibV82NDk5XCI7XHJcblxyXG50eXBlIFF1ZXJ5U3RyaW5nT2JqZWN0ID0ge1trZXk6IHN0cmluZ106c3RyaW5nfTtcclxuXHJcbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nT2JqZWN0KCkge1xyXG4gICBsZXQgYSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCImXCIpO1xyXG4gICBsZXQgbyA9IGEucmVkdWNlKChvOiBRdWVyeVN0cmluZ09iamVjdCwgdikgPT57XHJcbiAgICAgIHZhciBrdiA9IHYuc3BsaXQoXCI9XCIpO1xyXG4gICAgICBjb25zdCBrZXkgPSBrdlswXS5yZXBsYWNlKFwiP1wiLCBcIlwiKTtcclxuICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBrdlsxXTtcclxuICAgICAgb1trZXldID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBvO1xyXG4gICB9LCB7fSk7XHJcbiAgIHJldHVybiBvO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzKCkge1xyXG4gICBsZXQgb3B0aW9ucyA9IGdldFF1ZXJ5U3RyaW5nT2JqZWN0KCk7ICBcclxuXHJcbiAgIGlmKG9wdGlvbnMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYzY0LmNvbmZpZyhOdW1iZXIob3B0aW9ucy5jb25maWcpKTtcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5qb3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjNjQuZW11X2pveShOdW1iZXIob3B0aW9ucy5qb3kpKTtcclxuICAgICAgY29uc29sZS5sb2coYEpveXN0aWNrIGVtdWxhdGlvbiAke051bWJlcihvcHRpb25zLmpveSkhPTA/XCJlbmFibGVkXCI6XCJkaXNhYmxlZFwifWApO1xyXG4gICB9XHJcblxyXG4gICBpZihvcHRpb25zLmxvYWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gb3B0aW9ucy5sb2FkO1xyXG4gICAgICBpZihuYW1lLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgIC8vIGV4dGVybmFsIGxvYWRcclxuICAgICAgICAgZXh0ZXJuYWxMb2FkKFwibG9hZFByZ1wiLCBuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gaW50ZXJuYWwgbG9hZFxyXG4gICAgICAgICBhd2FpdCBmZXRjaFByb2dyYW0obmFtZSk7XHJcbiAgICAgIH0gICBcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5jYm02NDk5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmlkZW90ZWwuYWRkcmVzcyA9IG9wdGlvbnMud3N0Y3AgPz8gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgxXCI7ICAgICAgXHJcbiAgICAgIHZpZGVvdGVsLnByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbCA/PyBcImJic1wiO1xyXG4gICAgICBjNjQuc2V0X2V4cm9tKHRydWUpO1xyXG4gICAgICBjNjQuc2V0X2VtdWxhdGVfY2JtXzY0OTkodHJ1ZSk7IFxyXG4gICAgICBjNjQucmVzZXQoKTsgICAgIFxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gb3B0aW9ucztcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgeyBCQlNDb25uZWN0b3IgfSBmcm9tIFwiLi9iYnNfY29ubmVjdG9yXCI7XHJcbmltcG9ydCB7IHN0cmluZzJVaW50OEFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmxldCBtb2RlbV90cmFuc21pdF9idWZmZXI6IG51bWJlcltdID0gW107XHJcbmxldCBtb2RlbV9yZWNlaXZlX2J1ZmZlcjogbnVtYmVyW10gPSBbXTtcclxuXHJcbmNvbnN0IE1PREVNX0RBVEFfT1VUID0gMHhEN0YyO1xyXG5jb25zdCBNT0RFTV9EQVRBX0lOICA9IDB4RDdGMDtcclxuY29uc3QgTU9ERU1fREFUQV9SRVEgPSAweEQ3RjM7XHJcbmNvbnN0IE1PREVNX0FDSyAgICAgID0gMHhEN0YxO1xyXG5jb25zdCBNT0RFTV9DT05OU1QgICA9IDB4RDdGNDtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSByZWFkcyBpbiB0aGUgcmFuZ2UgJEQ3RjAtJEQ3RkZcclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGVtX3JlYWQoYWRkcjogbnVtYmVyKVxyXG57XHJcbiAgIGlmKGFkZHIgPT0gTU9ERU1fREFUQV9JTikge1xyXG4gICAgICBpZihtb2RlbV9yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgIGVsc2UgcmV0dXJuIG1vZGVtX3JlY2VpdmVfYnVmZmVyWzBdO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoYWRkciA9PSBNT0RFTV9EQVRBX1JFUSkge1xyXG4gICAgICBpZihtb2RlbV9yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgIGVsc2UgcmV0dXJuIDI1NTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGFkZHIgPT0gTU9ERU1fQ09OTlNUKSB7XHJcbiAgICAgIGlmKCFwZXRzY2lpLmNvbm5lY3RlZCkgcmV0dXJuIDI7XHJcbiAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgIH1cclxufVxyXG5cclxubGV0IG1vZGVtX3N0YXRlID0gMDtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSB3cml0ZXMgaW4gdGhlIHJhbmdlICREN0YwLSREN0ZGXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbV93cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcilcclxue1xyXG4gICBpZihhZGRyPT1NT0RFTV9BQ0spXHJcbiAgIHtcclxuICAgICAgaWYoZGF0YT09MCkge1xyXG4gICAgICAgICBtb2RlbV9zdGF0ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZGF0YT09MSAmJiBtb2RlbV9zdGF0ZT09MCkge1xyXG4gICAgICAgICBtb2RlbV9yZWNlaXZlX2J1ZmZlciA9IG1vZGVtX3JlY2VpdmVfYnVmZmVyLnNsaWNlKDEpO1xyXG4gICAgICAgICBtb2RlbV9zdGF0ZSA9IDE7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBpZihhZGRyPT1NT0RFTV9EQVRBX09VVCkge1xyXG4gICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIucHVzaChkYXRhKTtcclxuICAgICAgcGV0c2NpaS5zZW5kX2RhdGFfdG9fYmJzKG1vZGVtX3RyYW5zbWl0X2J1ZmZlcik7XHJcbiAgICAgIG1vZGVtX3RyYW5zbWl0X2J1ZmZlciA9IFtdO1xyXG4gICAgICBpZighcGV0c2NpaS5jb25uZWN0ZWQpIHBldHNjaWkuY29ubmVjdCgpOyAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmV4cG9ydCBsZXQgcGV0c2NpaSA9IG5ldyBCQlNDb25uZWN0b3IoKTtcclxuXHJcbnBldHNjaWkub25fZXJyb3IgPSAoZXJyKT0+IHtcclxuICAgY29uc29sZS5sb2coJ0JCUzogY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICBwcmludG0oYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gRVJST1IgQ09OTkVDVElORyBUTyBXRUJTT0NLRVRcXHJgKTtcclxufTtcclxuXHJcbnBldHNjaWkub25fb3BlbiA9ICgpID0+IHtcclxuICAgY29uc29sZS5sb2coJ0JCUzogY29ubmVjdGVkJyk7XHJcbiAgIC8vIHByaW50bShgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSBDT05ORUNURURcXHJgKTtcclxufTtcclxuXHJcbnBldHNjaWkub25fY2xvc2UgPSAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGRpc2Nvbm5lY3RlZCcpOyAgICAgIFxyXG59O1xyXG5cclxucGV0c2NpaS5vbl9kYXRhID0gKGJ5dGVzKSA9PiB7XHJcbiAgIGJ5dGVzLmZvckVhY2goZT0+bW9kZW1fcmVjZWl2ZV9idWZmZXIucHVzaChlKSk7XHJcbn07XHJcbiAgIFxyXG5mdW5jdGlvbiBwcmludG0obXNnOiBzdHJpbmcpIHtcclxuICAgbGV0IGRhdGEgPSBzdHJpbmcyVWludDhBcnJheShtc2cpO1xyXG4gICBkYXRhLmZvckVhY2goZT0+bW9kZW1fcmVjZWl2ZV9idWZmZXIucHVzaChlKSk7XHJcbn0iLCIvKioqKiB1dGlsaXR5IGZ1bmN0aW9ucyAqKioqL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4KHZhbHVlOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICBpZihzaXplID09PSB1bmRlZmluZWQpIHNpemUgPSAyO1xyXG4gICBsZXQgcyA9IFwiMDAwMFwiICsgdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFzdGVMaW5lKHRleHQ6IHN0cmluZykge1xyXG4gICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgIGZvcihsZXQgdD0wOyB0PGxpbmVzLmxlbmd0aDsgdCsrKSB7XHJcbiAgICAgIGNvbnN0IGxpbmVhID0gbGluZXNbdF07XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVhKTtcclxuICAgICAgcGFzdGUobGluZWEpO1xyXG4gICAgICBwYXN0ZUNoYXIoMTMpOyAgIC8vIENSXHJcbiAgIH1cclxuICAgY29uc29sZS5sb2coXCJwYXN0ZWQhXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFzdGUobGluZTogc3RyaW5nKSB7XHJcblxyXG4gICBmb3IobGV0IHQ9MDt0PGxpbmUubGVuZ3RoO3QrKykge1xyXG4gICAgICBsZXQgYyA9IGxpbmUuY2hhckNvZGVBdCh0KTtcclxuICAgICAgcGFzdGVDaGFyKGMpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlQ2hhcihjOiBudW1iZXIpIHtcclxuICAgd2hpbGUoYzY0LnBlZWsoMTk4KSAhPT0gMCkge1xyXG4gICAgICBjNjQuZXgoMTYwMDApO1xyXG4gICB9XHJcbiAgIGM2NC5wb2tlKDYzMSxjKTtcclxuICAgYzY0LnBva2UoMTk4LDEpO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBkdW1wTWVtKHN0YXJ0LCBlbmQsIHJvd3MpIHtcclxuICAgaWYoZW5kPT11bmRlZmluZWQpIGVuZD1zdGFydCsxNTtcclxuICAgaWYocm93cz09dW5kZWZpbmVkKSByb3dzPTE2O1xyXG4gICBsZXQgcz1cIlxcclxcblwiO1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjw9ZW5kO3IrPXJvd3MpIHtcclxuICAgICAgcys9IGhleChyLCA0KSArIFwiOiBcIjsgICAgICBcclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzICYmIChyK2MpPD1lbmQ7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1fcmVhZChyK2MpO1xyXG4gICAgICAgICBzKz0gaGV4KGJ5dGUpK1wiIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IChieXRlPjMyICYmIGJ5dGU8MTI3KSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkgOiAnLicgO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgIH1cclxuICAgY29uc29sZS5sb2cocyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhleER1bXAobWVtb3J5LCBzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGxldCBzPVwiXCI7XHJcbiAgIGZvcihsZXQgcj1zdGFydDtyPGVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBoZXgociwgNCkgKyBcIjogXCI7ICAgICAgXHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cztjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbW9yeVtyK2NdO1xyXG4gICAgICAgICBzKz0gaGV4KGJ5dGUpK1wiIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cztjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbW9yeVtyK2NdO1xyXG4gICAgICAgICBzKz0gKGJ5dGU+MzIgJiYgYnl0ZTwxMjcpID8gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSA6ICcuJyA7XHJcbiAgICAgIH1cclxuICAgICAgcys9XCJcXG5cIjtcclxuICAgfVxyXG4gICByZXR1cm4gcztcclxufVxyXG4qL1xyXG5cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGJpbih2YWx1ZSwgc2l6ZSkge1xyXG4gICBpZihzaXplID09PSB1bmRlZmluZWQpIHNpemUgPSA4O1xyXG4gICBsZXQgcyA9IFwiMDAwMDAwMDAwMDAwMDAwMFwiICsgdmFsdWUudG9TdHJpbmcoMik7XHJcbiAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcHVfc3RhdHVzKCkge1xyXG4gICBjb25zdCBzdGF0ZSA9IGNwdS5nZXRTdGF0ZSgpO1xyXG4gICByZXR1cm4gYEE9JHtoZXgoc3RhdGUuYSl9IEJDPSR7aGV4KHN0YXRlLmIpfSR7aGV4KHN0YXRlLmMpfSBERT0ke2hleChzdGF0ZS5kKX0ke2hleChzdGF0ZS5lKX0gSEw9JHtoZXgoc3RhdGUuaCl9JHtoZXgoc3RhdGUubCl9IElYPSR7aGV4KHN0YXRlLml4LDQpfSBJWT0ke2hleChzdGF0ZS5peSw0KX0gU1A9JHtoZXgoc3RhdGUuc3AsNCl9IFBDPSR7aGV4KHN0YXRlLnBjLDQpfSBTPSR7c3RhdGUuZmxhZ3MuU30sIFo9JHtzdGF0ZS5mbGFncy5afSwgWT0ke3N0YXRlLmZsYWdzLll9LCBIPSR7c3RhdGUuZmxhZ3MuSH0sIFg9JHtzdGF0ZS5mbGFncy5YfSwgUD0ke3N0YXRlLmZsYWdzLlB9LCBOPSR7c3RhdGUuZmxhZ3MuTn0sIEM9JHtzdGF0ZS5mbGFncy5DfWA7ICAgXHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiB3YWl0KHRpbWUpIHtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0sIHRpbWUpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gemFwKCkgeyAgICAgICAgICAgIFxyXG4gICByYW0uZm9yRWFjaCgoZSxpKT0+cmFtW2ldPTB4MDApO1xyXG4gICBsZXQgc3RhdGUgPSBjcHUuZ2V0U3RhdGUoKTtcclxuICAgc3RhdGUuaGFsdGVkID0gdHJ1ZTtcclxuICAgY3B1LnNldFN0YXRlKHN0YXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG93ZXIoKSB7ICAgICAgXHJcbiAgIHphcCgpO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5jcHUucmVzZXQoKSwgMjAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcCgpIHsgICBcclxuICAgc3RvcEF1ZGlvKCk7XHJcbiAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICBjb25zb2xlLmxvZyhcImVtdWxhdGlvbiBzdG9wcGVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnbygpIHtcclxuICAgc3RvcHBlZCA9IGZhbHNlO1xyXG4gICBvbmVGcmFtZSgpO1xyXG4gICBjb25zb2xlLmxvZyhcImVtdWxhdGlvbiByZXN1bWVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmZvKCkge1xyXG4gICBjb25zdCBhdmVyYWdlID0gYXZlcmFnZUZyYW1lVGltZS8xMDAwO1xyXG4gICBjb25zb2xlLmxvZyhgZnJhbWUgcmF0ZTogYXZlcmFnZSAke01hdGgucm91bmQoYXZlcmFnZSoxMCwyKS8xMH0gbXMgKCR7TWF0aC5yb3VuZCgxL2F2ZXJhZ2UqMTAwMCl9IEh6KWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRfYml0KHZhbHVlLCBiaXRuKSB7XHJcbiAgIHJldHVybiB2YWx1ZSB8ICgxPDxiaXRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRfYml0KHZhbHVlLCBiaXRuKSB7XHJcbiAgIHJldHVybiB2YWx1ZSAmIH4oMTw8Yml0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldCh2YWx1ZSwgYml0bWFzaykge1xyXG4gICByZXR1cm4gdmFsdWUgfCBiaXRtYXNrOyBcclxufVxyXG5cclxuZnVuY3Rpb24gc2xlZXAobXNlYykge1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT5yZXNvbHZlKCksIG1zZWMpO1xyXG4gICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0KHZhbHVlLCBiaXRtYXNrKSB7XHJcbiAgIHJldHVybiB2YWx1ZSAmICgweEZGIF4gYml0bWFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR1bXBQb2ludGVycygpIHtcclxuICAgY29uc29sZS5sb2coYFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyA8LSAgKDB4JHtoZXgoUFJPR05ELDQpfSkgJHtoZXgobWVtX3JlYWRfd29yZChQUk9HTkQpLDQpfVxyXG4gICB8ICAgICBCQVNJQyBwcm9ncmFtICAgICAgfFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyA8LSBUWFRUQUIgKDB4JHtoZXgoQkFTVFhULDQpfSkgJHtoZXgobWVtX3JlYWRfd29yZChCQVNUWFQpLDQpfVxyXG4gICB8ICAgIFN5c3RlbSB2YXJpYWJsZXMgICAgfFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAweDgwMDBcclxuYCk7XHJcbn1cclxuXHJcbmxldCBkZWJ1Z0JlZm9yZSA9IHVuZGVmaW5lZDtcclxubGV0IGRlYnVnQWZ0ZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBiaXQoYixuKSB7XHJcbiAgIHJldHVybiAoYiAmICgxPDxuKSk+MCA/IDEgOiAwO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gbm90X2JpdChiLG4pIHtcclxuICAgcmV0dXJuIChiICYgKDE8PG4pKT4wID8gMCA6IDE7XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBkdW1wU3RhY2soKSB7XHJcbiAgIGNvbnN0IHNwID0gY3B1LmdldFN0YXRlKCkuc3A7XHJcblxyXG4gICBmb3IobGV0IHQ9c3A7dDw9MHhmZmZmO3QrPTIpIHtcclxuICAgICAgY29uc3Qgd29yZCA9IG1lbV9yZWFkX3dvcmQodCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2hleCh0LDQpfTogJHtoZXgod29yZCw0KX0gICgke3dvcmR9KWApO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZHNXaXRoKHMsIHZhbHVlKSB7XHJcbiAgIHJldHVybiBzLnN1YnN0cigtdmFsdWUubGVuZ3RoKSA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGRlc3QpIHtcclxuICAgc291cmNlLmZvckVhY2goKGUsaSk9PmRlc3RbaV0gPSBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZV9sbShzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGxldCBzO1xyXG4gICBzID0gYDEwIEZPUiBUPSZIJHtoZXgoc3RhcnQsNCl9IFRPICZIJHtoZXgoZW5kLDQpfVxcbmA7XHJcbiAgIHMrPSBgMjAgUkVBRCBCOlBPS0UgVCxCXFxuYDtcclxuICAgcys9IGAzMCBORVhUXFxuYDtcclxuICAgcys9IGA0MCBTWVMgJkgke2hleChzdGFydCw0KX1cXG5gO1xyXG4gICBzKz0gYDUwIEVORFxcbmA7XHJcbiAgIGxldCBubGluZSA9IDEwMDA7XHJcbiAgIGlmKHJvd3M9PXVuZGVmaW5lZCkgcm93cz04O1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjw9ZW5kO3IrPXJvd3MpIHtcclxuICAgICAgcys9IGAke25saW5lfSBEQVRBIGA7XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IGAke2J5dGV9YDtcclxuICAgICAgICAgaWYoYyE9cm93cy0xICYmIChyK2MpIT1lbmQpIHMrPVwiLFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgICAgIG5saW5lICs9IDEwO1xyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0bXIoKVxyXG57XHJcbiAgIHJldHVybiBtZW1fcmVhZF93b3JkKFRNUkNOVCkgKyAobWVtX3JlYWRfd29yZChUTVJDTlQrMikgPDwgMTYpO1xyXG59XHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcbmxldCBjb3VudGVyX2F2ZyA9IDA7XHJcblxyXG5mdW5jdGlvbiBzdGFydF9jb3VudGVyKCkge1xyXG4gICBjb3VudGVyID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BfY291bnRlcigpIHtcclxuICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICBsZXQgY250ID0gY291bnRlcjtcclxuICAgaWYoY250ID09PSAwKSBjbnQgPSBub3dcclxuICAgbGV0IGVsYXBzZWQgPSBub3cgLSBjbnQ7ICAgXHJcbiAgIGNvdW50ZXJfYXZnID0gMC45ICogY291bnRlcl9hdmcgKyAwLjEgKiBlbGFwc2VkO1xyXG4gICByZXR1cm4gY291bnRlcl9hdmc7XHJcbn1cclxuXHJcbmxldCBMRUQgPSAwO1xyXG5mdW5jdGlvbiBsZWRfcmVhZCgpIHtcclxuICAgcmV0dXJuIExFRDtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVkX3dyaXRlKHZhbHVlKSB7XHJcbiAgIExFRCA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyBtYWtlIGEgbG9uZyB1cmwgZnJvbSBhbiBleGlzdGluZyBzYXZlZCBwcm9ncmFtXHJcbmFzeW5jIGZ1bmN0aW9uIG1ha2VCYXNlNjQoZmlsZU5hbWUpIHtcclxuICAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkRmlsZShmaWxlTmFtZSk7XHJcbiAgIGxldCBsb25nX3VybCA9IHdpbmRvdy5idG9hKGJ5dGVzKTtcclxuICAgY29uc29sZS5sb2coYGh0dHBzOi8vbmlwcHVyNzIuZ2l0aHViLmlvL2M2NC1lbXU/Yj0ke2xvbmdfdXJsfWApO1xyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nMlVpbnQ4QXJyYXkoc3RyOiBzdHJpbmcpIHtcclxuICAgbGV0IGFyciA9IFtdO1xyXG5cclxuICAgZm9yKGxldCB0PTA7IHQ8c3RyLmxlbmd0aDsgdCsrKVxyXG4gICAgICBhcnIucHVzaChzdHIuY2hhckNvZGVBdCh0KSAmIDB4RkYpO1xyXG5cclxuICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGFycik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheTJTdHJpbmcoZGF0YTogbnVtYmVyW10pIHtcclxuICAgbGV0IHN0ciA9IFwiXCI7XHJcblxyXG4gICBmb3IodmFyIGluZGV4PTA7IGluZGV4PGRhdGEubGVuZ3RoOyBpbmRleCsrKVxyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2luZGV4XSk7XHJcblxyXG4gICByZXR1cm4gc3RyO1xyXG59IiwiaW1wb3J0IHsgZ2V0X3dhc21faW5zdGFuY2UgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbi8vIGdvb2QgdmFsdWVzIGZvciBDUlQgUEFMXHJcbmNvbnN0IFNDUkVFTl9XID0gMzkyO1xyXG5jb25zdCBTQ1JFRU5fSCA9IDI3MjtcclxuY29uc3QgUE9TX1ggPSAzKjg7XHJcbmNvbnN0IFBPU19ZID0gMyo4O1xyXG5jb25zdCBQSVhFTF9XSURUSCA9IDI7XHJcblxyXG4vKlxyXG4vLyB2YWx1ZXMgZm9yIGRlYnVnXHJcbmxldCBTQ1JFRU5fVyA9IDI4NDtcclxubGV0IFNDUkVFTl9IID0gMzEyO1xyXG5sZXQgUE9TX1ggPSAwO1xyXG5sZXQgUE9TX1kgPSAwO1xyXG4qL1xyXG5cclxubGV0IHNhdHVyYXRpb24gPSAxLjA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlR2VvbWV0cnkoKSB7XHJcbiAgIC8vIGNhbnZhcyBpcyB0aGUgb3V0ZXIgY2FudmFzIHdoZXJlIHRoZSBhc3BlY3QgcmF0aW8gaXMgY29ycmVjdGVkXHJcbiAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgY2FudmFzLndpZHRoICA9IFNDUkVFTl9XICogUElYRUxfV0lEVEggLSAoUE9TX1gqUElYRUxfV0lEVEgpO1xyXG4gICBjYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0ggKiBQSVhFTF9XSURUSCAtIChQT1NfWSpQSVhFTF9XSURUSCk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qXHJcbmxldCBXVyA9IDIzMjtcclxubGV0IEhIID0gMjcyO1xyXG4qL1xyXG5cclxubGV0IFdXID0gU0NSRUVOX1c7XHJcbmxldCBISCA9IFNDUkVFTl9IO1xyXG5cclxubGV0IHZpY19paV9jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxubGV0IHZpY19paV9jb250ZXh0ID0gdmljX2lpX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZHBfc2NyZWVuX3VwZGF0ZShwdHI6IG51bWJlcikge1xyXG4gICAvKlxyXG4gICAvLyAxIHBpeGVsIHdpZGUgdmVyc2lvblxyXG4gICBsZXQgc2l6ZTEgPSBXVypISCo0O1xyXG4gICBjb25zdCBoZWFwID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTguc3ViYXJyYXkocHRyLHB0citzaXplMSk7XHJcbiAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoaGVhcCk7ICAgICAgIFxyXG4gICBjb25zdCBpbWcgPSBuZXcgSW1hZ2VEYXRhKGRhdGEsIFdXLCBISCk7XHJcbiAgIHZpY19paV9jb250ZXh0IS5wdXRJbWFnZURhdGEoaW1nLCAwLCAwKTsgICBcclxuICAgcmV0dXJuO1xyXG4gICAqL1xyXG4gICAgIFxyXG4gICAvLyAyIHBpeGVsIHdpZGUgdmVyc2lvblxyXG4gICBsZXQgc2l6ZTEgPSBXVypISCo0KlBJWEVMX1dJRFRIKlBJWEVMX1dJRFRIO1xyXG4gICBjb25zdCBoZWFwID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTguc3ViYXJyYXkocHRyLHB0citzaXplMSk7XHJcbiAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoaGVhcCk7ICAgICAgIFxyXG4gICBjb25zdCBpbWcgPSBuZXcgSW1hZ2VEYXRhKGRhdGEsIFdXKlBJWEVMX1dJRFRILCBISCpQSVhFTF9XSURUSCk7XHJcbiAgIHZpY19paV9jb250ZXh0IS5wdXRJbWFnZURhdGEoaW1nLCAtUE9TX1gsIC1QT1NfWSk7ICAgXHJcbn1cclxuXHJcbi8qXHJcblxyXG4vLyBvbGQgZHJhd2luZyBtZXRob2RcclxuXHJcbmxldCB2aWNfaWlfaW1hZ2VEYXRhID0gdmljX2lpX2NvbnRleHQhLmNyZWF0ZUltYWdlRGF0YShXVyoyLCBISCoyKTtcclxubGV0IGJtcCA9IG5ldyBVaW50MzJBcnJheSh2aWNfaWlfaW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZHBfc2NyZWVuX3VwZGF0ZV9vbGQocHRyOiBudW1iZXIpIHsgICBcclxuICAgbGV0IHN0YXJ0ID0gcHRyIC8gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTMyLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICBsZXQgc2l6ZSA9IFdXKkhIO1xyXG4gICBsZXQgYnVmZmVyID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTMyLnN1YmFycmF5KHN0YXJ0LHN0YXJ0K3NpemUpOyAgIFxyXG5cclxuICAgbGV0IHB0cjAgPSAwO1xyXG4gICBsZXQgcHRyMSA9IDA7XHJcbiAgIGxldCBwdHIyID0gV1cqMjsgICBcclxuXHJcbiAgIGZvcihsZXQgeT0wO3k8SEg7eSsrKSB7XHJcbiAgICAgIGZvcihsZXQgeD0wO3g8V1c7eCsrKSB7XHJcbiAgICAgICAgIGxldCBwaXhlbCA9IGJ1ZmZlcltwdHIwXTtcclxuICAgICAgICAgYm1wW3B0cjErK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjErK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjIrK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjIrK10gPSBwaXhlbDtcclxuICAgICAgICAgcHRyMCsrO1xyXG4gICAgICB9XHJcbiAgICAgIHB0cjEgKz0gV1cqMjtcclxuICAgICAgcHRyMiArPSBXVyoyO1xyXG4gICB9XHJcbiAgIFxyXG4gICAvLyBvbGQgZHJhd2luZyBtZXRob2RcclxuICAgLy92aWNfaWlfaW1hZ2VEYXRhLmRhdGEuc2V0KGltYWdlZGF0YV9idWY4KTtcclxuICAgLy92aWNfaWlfY29udGV4dC5wdXRJbWFnZURhdGEodmljX2lpX2ltYWdlRGF0YSwgLVBPU19YLCAtUE9TX1kpO1xyXG4gICBcclxuICAgLy8gbmV3IG1ldGhvZFxyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKHZpY19paV9pbWFnZURhdGEsIC1QT1NfWCwgLVBPU19ZKTtcclxuXHJcbiAgIC8vZnJhbWVzKys7XHJcbiAgIC8vaWYoZW5kX29mX2ZyYW1lX2hvb2sgIT09IHVuZGVmaW5lZCkgZW5kX29mX2ZyYW1lX2hvb2soKTtcclxufVxyXG4qL1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBsb2FkX3dhc20gfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL2VtdWxhdG9yXCI7XHJcbmltcG9ydCB7IHZkcF9zY3JlZW5fdXBkYXRlIH0gZnJvbSBcIi4vdmlkZW9cIjtcclxuaW1wb3J0IHsgYXVkaW9fYnVmX3JlYWR5IH0gZnJvbSBcIi4vYXVkaW9cIjtcclxuLy9pbXBvcnQgeyBsb2FkUHJnIH0gZnJvbSBcIi4vbWRhd3NvblwiO1xyXG5pbXBvcnQgeyBtb2RlbV9yZWFkLCBtb2RlbV93cml0ZSB9IGZyb20gXCIuL3BldHNjaWlfYmJzXCI7XHJcbmltcG9ydCB7IGNibV82NDk5X3dyaXRlLCBjYm1fNjQ5OV9yZWFkLCBjYm1fNjQ5OV9yZXNldCB9IGZyb20gXCIuL2NibV82NDk5L2NibV82NDk5XCI7XHJcbmltcG9ydCB7IHNhdmVfZmlsZSB9IGZyb20gXCIuL2ZpbGVzeXN0ZW1cIjtcclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Jyb3dzZXJcIjtcclxuXHJcbi8vIHB1Ymxpc2ggb24gZ2xvYmFsXHJcbih3aW5kb3cgYXMgYW55KS52ZHBfc2NyZWVuX3VwZGF0ZSA9IHZkcF9zY3JlZW5fdXBkYXRlO1xyXG4od2luZG93IGFzIGFueSkuYXVkaW9fYnVmX3JlYWR5ID0gYXVkaW9fYnVmX3JlYWR5O1xyXG4vLyh3aW5kb3cgYXMgYW55KS5sb2FkUHJnID0gbG9hZFByZztcclxuKHdpbmRvdyBhcyBhbnkpLm1vZGVtX3JlYWQgPSBtb2RlbV9yZWFkO1xyXG4od2luZG93IGFzIGFueSkubW9kZW1fd3JpdGUgPSBtb2RlbV93cml0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLnNhdmVfZmlsZSA9IHNhdmVfZmlsZTtcclxuXHJcbih3aW5kb3cgYXMgYW55KS5jYm1fNjQ5OV9yZXNldCA9IGNibV82NDk5X3Jlc2V0O1xyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfcmVhZCAgPSBjYm1fNjQ5OV9yZWFkO1xyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfd3JpdGUgPSBjYm1fNjQ5OV93cml0ZTtcclxuXHJcbih3aW5kb3cgYXMgYW55KS5jNjQgPSBjNjQ7XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgIGF3YWl0IGxvYWRfd2FzbSgpO1xyXG4gICBtYWluKCk7ICAgIFxyXG59KSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==