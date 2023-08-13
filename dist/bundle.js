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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUU5RSxJQUFHLEdBQUcsS0FBSyxHQUFHLEVBQVU7UUFBRSxhQUFhLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUFHLENBQUUsc0JBQXNCO0lBRXpHLFFBQVE7SUFDUixJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUV2RCxJQUFHLElBQUksS0FBSyxPQUFPO1FBQVMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxXQUFXO1FBQUssYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxZQUFZO1FBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxXQUFXO1FBQUssYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxTQUFTO1FBQU8sYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUV4RCxJQUFHLElBQUksS0FBSyxRQUFRO1FBQVEsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxRQUFRO1FBQVEsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUV4RCxJQUFHLElBQUksS0FBSyxXQUFXLElBQUssS0FBSztRQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDL0QsSUFBRyxJQUFJLEtBQUssV0FBVyxJQUFJLENBQUMsS0FBSztRQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFFL0QsSUFBRyxJQUFJLEtBQUssT0FBTztRQUFTLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssYUFBYTtR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QUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9lbXNjcmlwdGVuX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL0ZpbGVTYXZlci5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9hdWRpby50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9iYnNfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvY2JtXzY0OTkudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvbTY4MjEudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvbTY4NTAudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvc3BlZWRfbGltaXRlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9lbXNjcmlwdGVuX3dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZmV0Y2hQcm9ncmFtLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2ZpbGVzeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMva2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMva2V5Ym9hcmRfSVQudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvbWRhd3Nvbi50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9vcHRpb25zLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL3BldHNjaWlfYmJzLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL3ZpZGVvLnRzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGVtc2NyaXB0ZW5fbW9kdWxlID0gKCgpID0+IHtcclxuICB2YXIgX3NjcmlwdERpciA9IGltcG9ydC5tZXRhLnVybDtcclxuICBcclxuICByZXR1cm4gKFxyXG5mdW5jdGlvbihlbXNjcmlwdGVuX21vZHVsZSA9IHt9KSAge1xyXG5cclxudmFyIE1vZHVsZT10eXBlb2YgZW1zY3JpcHRlbl9tb2R1bGUhPVwidW5kZWZpbmVkXCI/ZW1zY3JpcHRlbl9tb2R1bGU6e307dmFyIHJlYWR5UHJvbWlzZVJlc29sdmUscmVhZHlQcm9taXNlUmVqZWN0O01vZHVsZVtcInJlYWR5XCJdPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWFkeVByb21pc2VSZXNvbHZlPXJlc29sdmU7cmVhZHlQcm9taXNlUmVqZWN0PXJlamVjdH0pO3ZhciBtb2R1bGVPdmVycmlkZXM9T2JqZWN0LmFzc2lnbih7fSxNb2R1bGUpO3ZhciBhcmd1bWVudHNfPVtdO3ZhciB0aGlzUHJvZ3JhbT1cIi4vdGhpcy5wcm9ncmFtXCI7dmFyIHF1aXRfPShzdGF0dXMsdG9UaHJvdyk9Pnt0aHJvdyB0b1Rocm93fTt2YXIgRU5WSVJPTk1FTlRfSVNfV0VCPXRydWU7dmFyIEVOVklST05NRU5UX0lTX1dPUktFUj1mYWxzZTt2YXIgc2NyaXB0RGlyZWN0b3J5PVwiXCI7ZnVuY3Rpb24gbG9jYXRlRmlsZShwYXRoKXtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXtyZXR1cm4gTW9kdWxlW1wibG9jYXRlRmlsZVwiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkXyxyZWFkQXN5bmMscmVhZEJpbmFyeSxzZXRXaW5kb3dUaXRsZTtpZihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUil7aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtzY3JpcHREaXJlY3Rvcnk9c2VsZi5sb2NhdGlvbi5ocmVmfWVsc2UgaWYodHlwZW9mIGRvY3VtZW50IT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5jdXJyZW50U2NyaXB0KXtzY3JpcHREaXJlY3Rvcnk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9aWYoX3NjcmlwdERpcil7c2NyaXB0RGlyZWN0b3J5PV9zY3JpcHREaXJ9aWYoc2NyaXB0RGlyZWN0b3J5LmluZGV4T2YoXCJibG9iOlwiKSE9PTApe3NjcmlwdERpcmVjdG9yeT1zY3JpcHREaXJlY3Rvcnkuc3Vic3RyKDAsc2NyaXB0RGlyZWN0b3J5LnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWVsc2V7c2NyaXB0RGlyZWN0b3J5PVwiXCJ9e3JlYWRfPXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIuc2VuZChudWxsKTtyZXR1cm4geGhyLnJlc3BvbnNlVGV4dH07aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKX19cmVhZEFzeW5jPSh1cmwsb25sb2FkLG9uZXJyb3IpPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsdHJ1ZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLm9ubG9hZD0oKT0+e2lmKHhoci5zdGF0dXM9PTIwMHx8eGhyLnN0YXR1cz09MCYmeGhyLnJlc3BvbnNlKXtvbmxvYWQoeGhyLnJlc3BvbnNlKTtyZXR1cm59b25lcnJvcigpfTt4aHIub25lcnJvcj1vbmVycm9yO3hoci5zZW5kKG51bGwpfX1zZXRXaW5kb3dUaXRsZT10aXRsZT0+ZG9jdW1lbnQudGl0bGU9dGl0bGV9ZWxzZXt9dmFyIG91dD1Nb2R1bGVbXCJwcmludFwiXXx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgZXJyPU1vZHVsZVtcInByaW50RXJyXCJdfHxjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKE1vZHVsZSxtb2R1bGVPdmVycmlkZXMpO21vZHVsZU92ZXJyaWRlcz1udWxsO2lmKE1vZHVsZVtcImFyZ3VtZW50c1wiXSlhcmd1bWVudHNfPU1vZHVsZVtcImFyZ3VtZW50c1wiXTtpZihNb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXSl0aGlzUHJvZ3JhbT1Nb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXTtpZihNb2R1bGVbXCJxdWl0XCJdKXF1aXRfPU1vZHVsZVtcInF1aXRcIl07dmFyIHdhc21CaW5hcnk7aWYoTW9kdWxlW1wid2FzbUJpbmFyeVwiXSl3YXNtQmluYXJ5PU1vZHVsZVtcIndhc21CaW5hcnlcIl07dmFyIG5vRXhpdFJ1bnRpbWU9TW9kdWxlW1wibm9FeGl0UnVudGltZVwiXXx8dHJ1ZTtpZih0eXBlb2YgV2ViQXNzZW1ibHkhPVwib2JqZWN0XCIpe2Fib3J0KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKX12YXIgd2FzbU1lbW9yeTt2YXIgQUJPUlQ9ZmFsc2U7dmFyIEVYSVRTVEFUVVM7dmFyIFVURjhEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGY4XCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEY4QXJyYXlUb1N0cmluZyhoZWFwT3JBcnJheSxpZHgsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRJZHg9aWR4K21heEJ5dGVzVG9SZWFkO3ZhciBlbmRQdHI9aWR4O3doaWxlKGhlYXBPckFycmF5W2VuZFB0cl0mJiEoZW5kUHRyPj1lbmRJZHgpKSsrZW5kUHRyO2lmKGVuZFB0ci1pZHg+MTYmJmhlYXBPckFycmF5LmJ1ZmZlciYmVVRGOERlY29kZXIpe3JldHVybiBVVEY4RGVjb2Rlci5kZWNvZGUoaGVhcE9yQXJyYXkuc3ViYXJyYXkoaWR4LGVuZFB0cikpfXZhciBzdHI9XCJcIjt3aGlsZShpZHg8ZW5kUHRyKXt2YXIgdTA9aGVhcE9yQXJyYXlbaWR4KytdO2lmKCEodTAmMTI4KSl7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTtjb250aW51ZX12YXIgdTE9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyMjQpPT0xOTIpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgodTAmMzEpPDw2fHUxKTtjb250aW51ZX12YXIgdTI9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyNDApPT0yMjQpe3UwPSh1MCYxNSk8PDEyfHUxPDw2fHUyfWVsc2V7dTA9KHUwJjcpPDwxOHx1MTw8MTJ8dTI8PDZ8aGVhcE9yQXJyYXlbaWR4KytdJjYzfWlmKHUwPDY1NTM2KXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApfWVsc2V7dmFyIGNoPXUwLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9fXJldHVybiBzdHJ9ZnVuY3Rpb24gVVRGOFRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7cmV0dXJuIHB0cj9VVEY4QXJyYXlUb1N0cmluZyhIRUFQVTgscHRyLG1heEJ5dGVzVG9SZWFkKTpcIlwifWZ1bmN0aW9uIHN0cmluZ1RvVVRGOEFycmF5KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpe2lmKCEobWF4Qnl0ZXNUb1dyaXRlPjApKXJldHVybiAwO3ZhciBzdGFydElkeD1vdXRJZHg7dmFyIGVuZElkeD1vdXRJZHgrbWF4Qnl0ZXNUb1dyaXRlLTE7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIHU9c3RyLmNoYXJDb2RlQXQoaSk7aWYodT49NTUyOTYmJnU8PTU3MzQzKXt2YXIgdTE9c3RyLmNoYXJDb2RlQXQoKytpKTt1PTY1NTM2KygodSYxMDIzKTw8MTApfHUxJjEwMjN9aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNlIGlmKHU8PTY1NTM1KXtpZihvdXRJZHgrMj49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTIyNHx1Pj4xMjtoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNle2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M319aGVhcFtvdXRJZHhdPTA7cmV0dXJuIG91dElkeC1zdGFydElkeH1mdW5jdGlvbiBzdHJpbmdUb1VURjgoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe3JldHVybiBzdHJpbmdUb1VURjhBcnJheShzdHIsSEVBUFU4LG91dFB0cixtYXhCeXRlc1RvV3JpdGUpfXZhciBIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQRjY0O2Z1bmN0aW9uIHVwZGF0ZU1lbW9yeVZpZXdzKCl7dmFyIGI9d2FzbU1lbW9yeS5idWZmZXI7TW9kdWxlW1wiSEVBUDhcIl09SEVBUDg9bmV3IEludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQMTZcIl09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUFU4XCJdPUhFQVBVOD1uZXcgVWludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQVTE2XCJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVBVMzJcIl09SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEYzMlwiXT1IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEY2NFwiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYil9dmFyIHdhc21UYWJsZTt2YXIgX19BVFBSRVJVTl9fPVtdO3ZhciBfX0FUSU5JVF9fPVtdO3ZhciBfX0FUUE9TVFJVTl9fPVtdO3ZhciBydW50aW1lSW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlW1wicHJlUnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlUnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlUnVuXCJdPVtNb2R1bGVbXCJwcmVSdW5cIl1dO3doaWxlKE1vZHVsZVtcInByZVJ1blwiXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVtcInByZVJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKX1mdW5jdGlvbiBpbml0UnVudGltZSgpe3J1bnRpbWVJbml0aWFsaXplZD10cnVlO2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pfWZ1bmN0aW9uIHBvc3RSdW4oKXtpZihNb2R1bGVbXCJwb3N0UnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicG9zdFJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInBvc3RSdW5cIl09W01vZHVsZVtcInBvc3RSdW5cIl1dO3doaWxlKE1vZHVsZVtcInBvc3RSdW5cIl0ubGVuZ3RoKXthZGRPblBvc3RSdW4oTW9kdWxlW1wicG9zdFJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyl9ZnVuY3Rpb24gYWRkT25QcmVSdW4oY2Ipe19fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPbkluaXQoY2Ipe19fQVRJTklUX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpfXZhciBydW5EZXBlbmRlbmNpZXM9MDt2YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbDt2YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7ZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzKys7aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfX1mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMtLTtpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9aWYocnVuRGVwZW5kZW5jaWVzPT0wKXtpZihydW5EZXBlbmRlbmN5V2F0Y2hlciE9PW51bGwpe2NsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO3J1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGx9aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX1mdW5jdGlvbiBhYm9ydCh3aGF0KXtpZihNb2R1bGVbXCJvbkFib3J0XCJdKXtNb2R1bGVbXCJvbkFib3J0XCJdKHdoYXQpfXdoYXQ9XCJBYm9ydGVkKFwiK3doYXQrXCIpXCI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7RVhJVFNUQVRVUz0xO3doYXQrPVwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7cmVhZHlQcm9taXNlUmVqZWN0KGUpO3Rocm93IGV9dmFyIGRhdGFVUklQcmVmaXg9XCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsXCI7ZnVuY3Rpb24gaXNEYXRhVVJJKGZpbGVuYW1lKXtyZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChkYXRhVVJJUHJlZml4KX12YXIgd2FzbUJpbmFyeUZpbGU7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7d2FzbUJpbmFyeUZpbGU9XCJlbXNjcmlwdGVuX21vZHVsZS53YXNtXCI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpfX1lbHNle3dhc21CaW5hcnlGaWxlPW5ldyBVUkwoXCJlbXNjcmlwdGVuX21vZHVsZS53YXNtXCIsaW1wb3J0Lm1ldGEudXJsKS5ocmVmfWZ1bmN0aW9uIGdldEJpbmFyeShmaWxlKXt0cnl7aWYoZmlsZT09d2FzbUJpbmFyeUZpbGUmJndhc21CaW5hcnkpe3JldHVybiBuZXcgVWludDhBcnJheSh3YXNtQmluYXJ5KX1pZihyZWFkQmluYXJ5KXtyZXR1cm4gcmVhZEJpbmFyeShmaWxlKX10aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIn1jYXRjaChlcnIpe2Fib3J0KGVycil9fWZ1bmN0aW9uIGdldEJpbmFyeVByb21pc2UoKXtpZighd2FzbUJpbmFyeSYmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKSl7aWYodHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaCh3YXNtQmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7aWYoIXJlc3BvbnNlW1wib2tcIl0pe3Rocm93XCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIit3YXNtQmluYXJ5RmlsZStcIidcIn1yZXR1cm4gcmVzcG9uc2VbXCJhcnJheUJ1ZmZlclwiXSgpfSkuY2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gZ2V0QmluYXJ5KHdhc21CaW5hcnlGaWxlKX0pfX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBnZXRCaW5hcnkod2FzbUJpbmFyeUZpbGUpfSl9ZnVuY3Rpb24gY3JlYXRlV2FzbSgpe3ZhciBpbmZvPXtcImFcIjp3YXNtSW1wb3J0c307ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7dmFyIGV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0cztNb2R1bGVbXCJhc21cIl09ZXhwb3J0czt3YXNtTWVtb3J5PU1vZHVsZVtcImFzbVwiXVtcImRcIl07dXBkYXRlTWVtb3J5Vmlld3MoKTt3YXNtVGFibGU9TW9kdWxlW1wiYXNtXCJdW1wiQ1wiXTthZGRPbkluaXQoTW9kdWxlW1wiYXNtXCJdW1wiZVwiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIil9YWRkUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZXIpe3JldHVybiBnZXRCaW5hcnlQcm9taXNlKCkudGhlbihmdW5jdGlvbihiaW5hcnkpe3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW5mbyl9KS50aGVuKGZ1bmN0aW9uKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2V9KS50aGVuKHJlY2VpdmVyLGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogXCIrcmVhc29uKTthYm9ydChyZWFzb24pfSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYygpe2lmKCF3YXNtQmluYXJ5JiZ0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmc9PVwiZnVuY3Rpb25cIiYmIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkmJnR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZXN1bHQ9V2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzcG9uc2UsaW5mbyk7cmV0dXJuIHJlc3VsdC50aGVuKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0LGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6IFwiK3JlYXNvbik7ZXJyKFwiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb25cIik7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpfSl9KX1lbHNle3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX19aWYoTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKXt0cnl7dmFyIGV4cG9ydHM9TW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKGluZm8scmVjZWl2ZUluc3RhbmNlKTtyZXR1cm4gZXhwb3J0c31jYXRjaChlKXtlcnIoXCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiBcIitlKTtyZWFkeVByb21pc2VSZWplY3QoZSl9fWluc3RhbnRpYXRlQXN5bmMoKS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybnt9fXZhciBBU01fQ09OU1RTPXs1NDc2ODooKT0+e3JldHVybiBjYm1fNjQ5OV9yZXNldCgpfSw1NDc5NzooJDAsJDEpPT57YXVkaW9fYnVmX3JlYWR5KCQwLCQxKX0sNTQ4MjY6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDU0ODUzOiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw1NDg4MDokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNTQ5MDc6JDA9PntyZXR1cm4gbW9kZW1fcmVhZCgkMCl9LDU0OTM0OigkMCwkMSk9Pnttb2RlbV93cml0ZSgkMCwkMSl9LDU0OTU4OigkMCwkMSk9PntyZXR1cm4gY2JtXzY0OTlfcmVhZCgkMCwkMSl9LDU0OTkyOigkMCwkMSk9PntjYm1fNjQ5OV93cml0ZSgkMCwkMSl9fTtmdW5jdGlvbiBjYWxsUnVudGltZUNhbGxiYWNrcyhjYWxsYmFja3Mpe3doaWxlKGNhbGxiYWNrcy5sZW5ndGg+MCl7Y2FsbGJhY2tzLnNoaWZ0KCkoTW9kdWxlKX19ZnVuY3Rpb24gX19fYXNzZXJ0X2ZhaWwoY29uZGl0aW9uLGZpbGVuYW1lLGxpbmUsZnVuYyl7YWJvcnQoXCJBc3NlcnRpb24gZmFpbGVkOiBcIitVVEY4VG9TdHJpbmcoY29uZGl0aW9uKStcIiwgYXQ6IFwiK1tmaWxlbmFtZT9VVEY4VG9TdHJpbmcoZmlsZW5hbWUpOlwidW5rbm93biBmaWxlbmFtZVwiLGxpbmUsZnVuYz9VVEY4VG9TdHJpbmcoZnVuYyk6XCJ1bmtub3duIGZ1bmN0aW9uXCJdKX12YXIgcmVhZEVtQXNtQXJnc0FycmF5PVtdO2Z1bmN0aW9uIHJlYWRFbUFzbUFyZ3Moc2lnUHRyLGJ1Zil7cmVhZEVtQXNtQXJnc0FycmF5Lmxlbmd0aD0wO3ZhciBjaDtidWY+Pj0yO3doaWxlKGNoPUhFQVBVOFtzaWdQdHIrK10pe2J1Zis9Y2ghPTEwNSZidWY7cmVhZEVtQXNtQXJnc0FycmF5LnB1c2goY2g9PTEwNT9IRUFQMzJbYnVmXTpIRUFQRjY0W2J1ZisrPj4xXSk7KytidWZ9cmV0dXJuIHJlYWRFbUFzbUFyZ3NBcnJheX1mdW5jdGlvbiBydW5FbUFzbUZ1bmN0aW9uKGNvZGUsc2lnUHRyLGFyZ2J1Zil7dmFyIGFyZ3M9cmVhZEVtQXNtQXJncyhzaWdQdHIsYXJnYnVmKTtyZXR1cm4gQVNNX0NPTlNUU1tjb2RlXS5hcHBseShudWxsLGFyZ3MpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX2FzbV9jb25zdF9pbnQoY29kZSxzaWdQdHIsYXJnYnVmKXtyZXR1cm4gcnVuRW1Bc21GdW5jdGlvbihjb2RlLHNpZ1B0cixhcmdidWYpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRDRnVuYyhpZGVudCl7dmFyIGZ1bmM9TW9kdWxlW1wiX1wiK2lkZW50XTtyZXR1cm4gZnVuY31mdW5jdGlvbiB3cml0ZUFycmF5VG9NZW1vcnkoYXJyYXksYnVmZmVyKXtIRUFQOC5zZXQoYXJyYXksYnVmZmVyKX1mdW5jdGlvbiBjY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3Msb3B0cyl7dmFyIHRvQz17XCJzdHJpbmdcIjpzdHI9Pnt2YXIgcmV0PTA7aWYoc3RyIT09bnVsbCYmc3RyIT09dW5kZWZpbmVkJiZzdHIhPT0wKXt2YXIgbGVuPShzdHIubGVuZ3RoPDwyKSsxO3JldD1zdGFja0FsbG9jKGxlbik7c3RyaW5nVG9VVEY4KHN0cixyZXQsbGVuKX1yZXR1cm4gcmV0fSxcImFycmF5XCI6YXJyPT57dmFyIHJldD1zdGFja0FsbG9jKGFyci5sZW5ndGgpO3dyaXRlQXJyYXlUb01lbW9yeShhcnIscmV0KTtyZXR1cm4gcmV0fX07ZnVuY3Rpb24gY29udmVydFJldHVyblZhbHVlKHJldCl7aWYocmV0dXJuVHlwZT09PVwic3RyaW5nXCIpe3JldHVybiBVVEY4VG9TdHJpbmcocmV0KX1pZihyZXR1cm5UeXBlPT09XCJib29sZWFuXCIpcmV0dXJuIEJvb2xlYW4ocmV0KTtyZXR1cm4gcmV0fXZhciBmdW5jPWdldENGdW5jKGlkZW50KTt2YXIgY0FyZ3M9W107dmFyIHN0YWNrPTA7aWYoYXJncyl7Zm9yKHZhciBpPTA7aTxhcmdzLmxlbmd0aDtpKyspe3ZhciBjb252ZXJ0ZXI9dG9DW2FyZ1R5cGVzW2ldXTtpZihjb252ZXJ0ZXIpe2lmKHN0YWNrPT09MClzdGFjaz1zdGFja1NhdmUoKTtjQXJnc1tpXT1jb252ZXJ0ZXIoYXJnc1tpXSl9ZWxzZXtjQXJnc1tpXT1hcmdzW2ldfX19dmFyIHJldD1mdW5jLmFwcGx5KG51bGwsY0FyZ3MpO2Z1bmN0aW9uIG9uRG9uZShyZXQpe2lmKHN0YWNrIT09MClzdGFja1Jlc3RvcmUoc3RhY2spO3JldHVybiBjb252ZXJ0UmV0dXJuVmFsdWUocmV0KX1yZXQ9b25Eb25lKHJldCk7cmV0dXJuIHJldH1mdW5jdGlvbiBjd3JhcChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLG9wdHMpe3ZhciBudW1lcmljQXJncz0hYXJnVHlwZXN8fGFyZ1R5cGVzLmV2ZXJ5KHR5cGU9PnR5cGU9PT1cIm51bWJlclwifHx0eXBlPT09XCJib29sZWFuXCIpO3ZhciBudW1lcmljUmV0PXJldHVyblR5cGUhPT1cInN0cmluZ1wiO2lmKG51bWVyaWNSZXQmJm51bWVyaWNBcmdzJiYhb3B0cyl7cmV0dXJuIGdldENGdW5jKGlkZW50KX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gY2NhbGwoaWRlbnQscmV0dXJuVHlwZSxhcmdUeXBlcyxhcmd1bWVudHMsb3B0cyl9fXZhciB3YXNtSW1wb3J0cz17XCJhXCI6X19fYXNzZXJ0X2ZhaWwsXCJiXCI6X2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2ludCxcImNcIjpfZW1zY3JpcHRlbl9tZW1jcHlfYmlnfTt2YXIgYXNtPWNyZWF0ZVdhc20oKTt2YXIgX19fd2FzbV9jYWxsX2N0b3JzPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX3dhc21fY2FsbF9jdG9ycz1Nb2R1bGVbXCJhc21cIl1bXCJlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luaXQ9TW9kdWxlW1wiX3N5c19pbml0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfaW5pdD1Nb2R1bGVbXCJfc3lzX2luaXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiZlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19jb25maWc9TW9kdWxlW1wiX3N5c19jb25maWdcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19jb25maWc9TW9kdWxlW1wiX3N5c19jb25maWdcIl09TW9kdWxlW1wiYXNtXCJdW1wiZ1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19yZXNldD1Nb2R1bGVbXCJfc3lzX3Jlc2V0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcmVzZXQ9TW9kdWxlW1wiX3N5c19yZXNldFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJoXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4ZWM9TW9kdWxlW1wiX3N5c19leGVjXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXhlYz1Nb2R1bGVbXCJfc3lzX2V4ZWNcIl09TW9kdWxlW1wiYXNtXCJdW1wiaVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leGVjX3VzPU1vZHVsZVtcIl9zeXNfZXhlY191c1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2V4ZWNfdXM9TW9kdWxlW1wiX3N5c19leGVjX3VzXCJdPU1vZHVsZVtcImFzbVwiXVtcImpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXg9TW9kdWxlW1wiX3N5c19leFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2V4PU1vZHVsZVtcIl9zeXNfZXhcIl09TW9kdWxlW1wiYXNtXCJdW1wia1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c192ZHA9TW9kdWxlW1wiX3N5c192ZHBcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c192ZHA9TW9kdWxlW1wiX3N5c192ZHBcIl09TW9kdWxlW1wiYXNtXCJdW1wibFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19rZXlfZG93bj1Nb2R1bGVbXCJfc3lzX2tleV9kb3duXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfa2V5X2Rvd249TW9kdWxlW1wiX3N5c19rZXlfZG93blwiXT1Nb2R1bGVbXCJhc21cIl1bXCJtXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2tleV91cD1Nb2R1bGVbXCJfc3lzX2tleV91cFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2tleV91cD1Nb2R1bGVbXCJfc3lzX2tleV91cFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJuXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3F1aWNrX2xvYWQ9TW9kdWxlW1wiX3N5c19xdWlja19sb2FkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcXVpY2tfbG9hZD1Nb2R1bGVbXCJfc3lzX3F1aWNrX2xvYWRcIl09TW9kdWxlW1wiYXNtXCJdW1wib1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZT1Nb2R1bGVbXCJfc3lzX2luc2VydF9yb21fY2FydGRyaWdlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2U9TW9kdWxlW1wiX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJwXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX21lbV9jcHVfcmQ9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3JkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfbWVtX2NwdV9yZD1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfcmRcIl09TW9kdWxlW1wiYXNtXCJdW1wicVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19tZW1fY3B1X3dyPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV93clwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX21lbV9jcHVfd3I9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3dyXCJdPU1vZHVsZVtcImFzbVwiXVtcInJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfam95c3RpY2s9TW9kdWxlW1wiX3N5c19qb3lzdGlja1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2pveXN0aWNrPU1vZHVsZVtcIl9zeXNfam95c3RpY2tcIl09TW9kdWxlW1wiYXNtXCJdW1wic1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfam95c3RpY2tfdHlwZT1Nb2R1bGVbXCJfc3lzX3NldF9qb3lzdGlja190eXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2pveXN0aWNrX3R5cGU9TW9kdWxlW1wiX3N5c19zZXRfam95c3RpY2tfdHlwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luc2VydF90YXBlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3RhcGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbnNlcnRfdGFwZT1Nb2R1bGVbXCJfc3lzX2luc2VydF90YXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcmVtb3ZlX3RhcGU9TW9kdWxlW1wiX3N5c19yZW1vdmVfdGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3JlbW92ZV90YXBlPU1vZHVsZVtcIl9zeXNfcmVtb3ZlX3RhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1widlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c190YXBlX3BsYXk9TW9kdWxlW1wiX3N5c190YXBlX3BsYXlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c190YXBlX3BsYXk9TW9kdWxlW1wiX3N5c190YXBlX3BsYXlcIl09TW9kdWxlW1wiYXNtXCJdW1wid1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c190YXBlX3N0b3A9TW9kdWxlW1wiX3N5c190YXBlX3N0b3BcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c190YXBlX3N0b3A9TW9kdWxlW1wiX3N5c190YXBlX3N0b3BcIl09TW9kdWxlW1wiYXNtXCJdW1wieFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19jYXNfcG9ydD1Nb2R1bGVbXCJfc3lzX2Nhc19wb3J0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfY2FzX3BvcnQ9TW9kdWxlW1wiX3N5c19jYXNfcG9ydFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9leHJvbT1Nb2R1bGVbXCJfc3lzX3NldF9leHJvbVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9leHJvbT1Nb2R1bGVbXCJfc3lzX3NldF9leHJvbVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ6XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9jYm1fNjQ5OV9uYmFuaz1Nb2R1bGVbXCJfc3lzX3NldF9jYm1fNjQ5OV9uYmFua1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9jYm1fNjQ5OV9uYmFuaz1Nb2R1bGVbXCJfc3lzX3NldF9jYm1fNjQ5OV9uYmFua1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJBXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5PU1vZHVsZVtcIl9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OT1Nb2R1bGVbXCJfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrU2F2ZT1mdW5jdGlvbigpe3JldHVybihzdGFja1NhdmU9TW9kdWxlW1wiYXNtXCJdW1wiRFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tSZXN0b3JlPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrUmVzdG9yZT1Nb2R1bGVbXCJhc21cIl1bXCJFXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja0FsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrQWxsb2M9TW9kdWxlW1wiYXNtXCJdW1wiRlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTtNb2R1bGVbXCJjY2FsbFwiXT1jY2FsbDtNb2R1bGVbXCJjd3JhcFwiXT1jd3JhcDt2YXIgY2FsbGVkUnVuO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1mdW5jdGlvbiBydW5DYWxsZXIoKXtpZighY2FsbGVkUnVuKXJ1bigpO2lmKCFjYWxsZWRSdW4pZGVwZW5kZW5jaWVzRnVsZmlsbGVkPXJ1bkNhbGxlcn07ZnVuY3Rpb24gcnVuKCl7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1wcmVSdW4oKTtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufWZ1bmN0aW9uIGRvUnVuKCl7aWYoY2FsbGVkUnVuKXJldHVybjtjYWxsZWRSdW49dHJ1ZTtNb2R1bGVbXCJjYWxsZWRSdW5cIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtyZWFkeVByb21pc2VSZXNvbHZlKE1vZHVsZSk7aWYoTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0pTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0oKTtwb3N0UnVuKCl9aWYoTW9kdWxlW1wic2V0U3RhdHVzXCJdKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJSdW5uaW5nLi4uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpfSwxKTtkb1J1bigpfSwxKX1lbHNle2RvUnVuKCl9fWlmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5wb3AoKSgpfX1ydW4oKTtcclxuXHJcblxyXG4gIHJldHVybiBlbXNjcmlwdGVuX21vZHVsZS5yZWFkeVxyXG59XHJcbik7XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGVtc2NyaXB0ZW5fbW9kdWxlOyIsIi8qIEZpbGVTYXZlci5qc1xuICogQSBzYXZlQXMoKSBGaWxlU2F2ZXIgaW1wbGVtZW50YXRpb24uXG4gKiAxLjMuMlxuICogMjAxNi0wNi0xNiAxODoyNToxOVxuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlLCBpbmRlbnQ6IDQsIGxheGJyZWFrOiB0cnVlLCBsYXhjb21tYTogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlLCBwbHVzcGx1czogdHJ1ZSAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0ZpbGVTYXZlci5qcyAqL1xuXG52YXIgc2F2ZUFzID0gc2F2ZUFzIHx8IChmdW5jdGlvbih2aWV3KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBJRSA8MTAgaXMgZXhwbGljaXRseSB1bnN1cHBvcnRlZFxuXHRpZiAodHlwZW9mIHZpZXcgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBbMS05XVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXJcblx0XHQgIGRvYyA9IHZpZXcuZG9jdW1lbnRcblx0XHQgIC8vIG9ubHkgZ2V0IFVSTCB3aGVuIG5lY2Vzc2FyeSBpbiBjYXNlIEJsb2IuanMgaGFzbid0IG92ZXJyaWRkZW4gaXQgeWV0XG5cdFx0LCBnZXRfVVJMID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdmlldy5VUkwgfHwgdmlldy53ZWJraXRVUkwgfHwgdmlldztcblx0XHR9XG5cdFx0LCBzYXZlX2xpbmsgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImFcIilcblx0XHQsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xuXHRcdCwgY2xpY2sgPSBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIpO1xuXHRcdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHR9XG5cdFx0LCBpc19zYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHZpZXcuSFRNTEVsZW1lbnQpIHx8IHZpZXcuc2FmYXJpXG5cdFx0LCBpc19jaHJvbWVfaW9zID0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcblx0XHQsIHRocm93X291dHNpZGUgPSBmdW5jdGlvbihleCkge1xuXHRcdFx0KHZpZXcuc2V0SW1tZWRpYXRlIHx8IHZpZXcuc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IGV4O1xuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHRcdCwgZm9yY2Vfc2F2ZWFibGVfdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcblx0XHQvLyB0aGUgQmxvYiBBUEkgaXMgZnVuZGFtZW50YWxseSBicm9rZW4gYXMgdGhlcmUgaXMgbm8gXCJkb3dubG9hZGZpbmlzaGVkXCIgZXZlbnQgdG8gc3Vic2NyaWJlIHRvXG5cdFx0LCBhcmJpdHJhcnlfcmV2b2tlX3RpbWVvdXQgPSAxMDAwICogNDAgLy8gaW4gbXNcblx0XHQsIHJldm9rZSA9IGZ1bmN0aW9uKGZpbGUpIHtcblx0XHRcdHZhciByZXZva2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZmlsZSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmaWxlIGlzIGFuIG9iamVjdCBVUkxcblx0XHRcdFx0XHRnZXRfVVJMKCkucmV2b2tlT2JqZWN0VVJMKGZpbGUpO1xuXHRcdFx0XHR9IGVsc2UgeyAvLyBmaWxlIGlzIGEgRmlsZVxuXHRcdFx0XHRcdGZpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG5cdFx0fVxuXHRcdCwgZGlzcGF0Y2ggPSBmdW5jdGlvbihmaWxlc2F2ZXIsIGV2ZW50X3R5cGVzLCBldmVudCkge1xuXHRcdFx0ZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lciA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF90eXBlc1tpXV07XG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsKGZpbGVzYXZlciwgZXZlbnQgfHwgZmlsZXNhdmVyKTtcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdFx0dGhyb3dfb3V0c2lkZShleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHQvLyBwcmVwZW5kIEJPTSBmb3IgVVRGLTggWE1MIGFuZCB0ZXh0LyogdHlwZXMgKGluY2x1ZGluZyBIVE1MKVxuXHRcdFx0Ly8gbm90ZTogeW91ciBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBjb252ZXJ0IFVURi0xNiBVK0ZFRkYgdG8gRUYgQkIgQkZcblx0XHRcdGlmICgvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChibG9iLnR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgQmxvYihbU3RyaW5nLmZyb21DaGFyQ29kZSgweEZFRkYpLCBibG9iXSwge3R5cGU6IGJsb2IudHlwZX0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJsb2I7XG5cdFx0fVxuXHRcdCwgRmlsZVNhdmVyID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRmlyc3QgdHJ5IGEuZG93bmxvYWQsIHRoZW4gd2ViIGZpbGVzeXN0ZW0sIHRoZW4gb2JqZWN0IFVSTHNcblx0XHRcdHZhclxuXHRcdFx0XHQgIGZpbGVzYXZlciA9IHRoaXNcblx0XHRcdFx0LCB0eXBlID0gYmxvYi50eXBlXG5cdFx0XHRcdCwgZm9yY2UgPSB0eXBlID09PSBmb3JjZV9zYXZlYWJsZV90eXBlXG5cdFx0XHRcdCwgb2JqZWN0X3VybFxuXHRcdFx0XHQsIGRpc3BhdGNoX2FsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIHdyaXRlZW5kXCIuc3BsaXQoXCIgXCIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBvbiBhbnkgZmlsZXN5cyBlcnJvcnMgcmV2ZXJ0IHRvIHNhdmluZyB3aXRoIG9iamVjdCBVUkxzXG5cdFx0XHRcdCwgZnNfZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoKGlzX2Nocm9tZV9pb3MgfHwgKGZvcmNlICYmIGlzX3NhZmFyaSkpICYmIHZpZXcuRmlsZVJlYWRlcikge1xuXHRcdFx0XHRcdFx0Ly8gU2FmYXJpIGRvZXNuJ3QgYWxsb3cgZG93bmxvYWRpbmcgb2YgYmxvYiB1cmxzXG5cdFx0XHRcdFx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVybCA9IGlzX2Nocm9tZV9pb3MgPyByZWFkZXIucmVzdWx0IDogcmVhZGVyLnJlc3VsdC5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLCAnZGF0YTphdHRhY2htZW50L2ZpbGU7Jyk7XG5cdFx0XHRcdFx0XHRcdHZhciBwb3B1cCA9IHZpZXcub3Blbih1cmwsICdfYmxhbmsnKTtcblx0XHRcdFx0XHRcdFx0aWYoIXBvcHVwKSB2aWV3LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG5cdFx0XHRcdFx0XHRcdHVybD11bmRlZmluZWQ7IC8vIHJlbGVhc2UgcmVmZXJlbmNlIGJlZm9yZSBkaXNwYXRjaGluZ1xuXHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcblx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRvbid0IGNyZWF0ZSBtb3JlIG9iamVjdCBVUkxzIHRoYW4gbmVlZGVkXG5cdFx0XHRcdFx0aWYgKCFvYmplY3RfdXJsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGZvcmNlKSB7XG5cdFx0XHRcdFx0XHR2aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbmVkID0gdmlldy5vcGVuKG9iamVjdF91cmwsIFwiX2JsYW5rXCIpO1xuXHRcdFx0XHRcdFx0aWYgKCFvcGVuZWQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQXBwbGUgZG9lcyBub3QgYWxsb3cgd2luZG93Lm9wZW4sIHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9zYWZhcmkvZG9jdW1lbnRhdGlvbi9Ub29scy9Db25jZXB0dWFsL1NhZmFyaUV4dGVuc2lvbkd1aWRlL1dvcmtpbmd3aXRoV2luZG93c2FuZFRhYnMvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy5odG1sXG5cdFx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHQ7XG5cdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXG5cdFx0XHRpZiAoY2FuX3VzZV9zYXZlX2xpbmspIHtcblx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdHNhdmVfbGluay5kb3dubG9hZCA9IG5hbWU7XG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZnNfZXJyb3IoKTtcblx0XHR9XG5cdFx0LCBGU19wcm90byA9IEZpbGVTYXZlci5wcm90b3R5cGVcblx0XHQsIHNhdmVBcyA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEZpbGVTYXZlcihibG9iLCBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCIsIG5vX2F1dG9fYm9tKTtcblx0XHR9XG5cdDtcblx0Ly8gSUUgMTArIChuYXRpdmUgc2F2ZUFzKVxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0bmFtZSA9IG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIjtcblxuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYmxvYiwgbmFtZSk7XG5cdFx0fTtcblx0fVxuXG5cdEZTX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24oKXt9O1xuXHRGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG5cdEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuXHRGU19wcm90by5ET05FID0gMjtcblxuXHRGU19wcm90by5lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XG5cdEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuXHRGU19wcm90by5vbndyaXRlID1cblx0RlNfcHJvdG8ub25hYm9ydCA9XG5cdEZTX3Byb3RvLm9uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlZW5kID1cblx0XHRudWxsO1xuXG5cdHJldHVybiBzYXZlQXM7XG59KFxuXHQgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmXG5cdHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93XG5cdHx8IHRoaXMuY29udGVudFxuKSk7XG4vLyBgc2VsZmAgaXMgdW5kZWZpbmVkIGluIEZpcmVmb3ggZm9yIEFuZHJvaWQgY29udGVudCBzY3JpcHQgY29udGV4dFxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXG4vLyB3aXRoIGFuIGF0dHJpYnV0ZSBgY29udGVudGAgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2luZG93XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzLnNhdmVBcyA9IHNhdmVBcztcbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsKSAmJiAoZGVmaW5lLmFtZCAhPT0gbnVsbCkpIHtcbiAgZGVmaW5lKFwiRmlsZVNhdmVyLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzYXZlQXM7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0X3dhc21faW5zdGFuY2UgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbmNvbnN0IEFVRElPX0JVRlNJWkUgPSAxMDI0OyAgLy8gbXVzdCBtYXRjaCAuY1xyXG5cclxubGV0IGF1ZGlvX2J1ZmZlcnNfcXVldWU6IG51bWJlcltdW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdWRpb19idWZfcmVhZHkocHRyOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICBpZighYXVkaW9fcGxheWluZykgcmV0dXJuO1xyXG5cclxuICAgbGV0IHN0YXJ0ID0gcHRyIC8gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQRjMyLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICBsZXQgYnVmZmVyID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQRjMyLnN1YmFycmF5KHN0YXJ0LHN0YXJ0K3NpemUpIGFzIG51bWJlcltdO1xyXG5cclxuICAgYXVkaW9fYnVmZmVyc19xdWV1ZS5wdXNoKFsgLi4uYnVmZmVyIF0pOyAgLy8gcHVzaCBhIGNsb25lZCBjb3B5XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBBVURJTyBCVUZGRVIgVE8gQlJPV1NFUiBBVURJTyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmNvbnN0IGJ1ZmZlclNpemUgPSBBVURJT19CVUZTSVpFO1xyXG5cclxubGV0IGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxubGV0IHNwZWFrZXJTb3VuZDogU2NyaXB0UHJvY2Vzc29yTm9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvQ29udGV4dCgpIHtcclxuICAgYXVkaW9Db250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTsgLy8gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7ICAgXHJcbiAgIHNwZWFrZXJTb3VuZCA9IGF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgMSwgMSk7XHJcblxyXG4gICBzcGVha2VyU291bmQub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnN0IG91dHB1dCA9IGUub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgaWYoYXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3YXJuaW5nOiBhdWRpbyBxdWV1ZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhgd2FybmluZzogYXVkaW8gcXVldWUgaXMgZ2V0dGluZyBsb25nZXI6ICR7YXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBidWZmZXIgPSBhdWRpb19idWZmZXJzX3F1ZXVlWzBdO1xyXG4gICAgICBhdWRpb19idWZmZXJzX3F1ZXVlID0gYXVkaW9fYnVmZmVyc19xdWV1ZS5zbGljZSgxKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPGJ1ZmZlclNpemU7IGkrKykge1xyXG4gICAgICAgICBvdXRwdXRbaV0gPSBidWZmZXJbaV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4vKlxyXG5sZXQgY2gwID0gW107XHJcbmxldCBjaDEgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNzYXZlKCkge1xyXG4gICBjb25zdCB3YXZEYXRhID0ge1xyXG4gICAgICBzYW1wbGVSYXRlOiA0ODAwMCxcclxuICAgICAgY2hhbm5lbERhdGE6IFsgbmV3IEZsb2F0MzJBcnJheShjaDApLCBuZXcgRmxvYXQzMkFycmF5KGNoMSkgXVxyXG4gICB9O1xyXG4gICAgIFxyXG4gICBjb25zdCBidWZmZXIgPSBlbmNvZGVTeW5jKHdhdkRhdGEsIHsgYml0RGVwdGg6IDE2LCBmbG9hdDogZmFsc2UgfSk7ICAgICAgXHJcbiAgIFxyXG4gICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pOyAgIFxyXG4gICBjb25zdCBmaWxlTmFtZSA9IFwiY3NhdmVkLndhdlwiO1xyXG4gICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpO1xyXG59XHJcbiovXHJcblxyXG5sZXQgYXVkaW9fcGxheWluZzogYm9vbGVhbnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29BdWRpbygpIHtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIGNyZWF0ZUF1ZGlvQ29udGV4dCgpO1xyXG5cclxuICAgaWYoc3BlYWtlclNvdW5kID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgc3BlYWtlclNvdW5kLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgYXVkaW9fcGxheWluZyA9IHRydWU7XHJcbiAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdWRpbygpIHtcclxuICAgaWYoYXVkaW9fcGxheWluZyAhPT0gdW5kZWZpbmVkICYmIGF1ZGlvX3BsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgaWYoc3BlYWtlclNvdW5kID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgc3BlYWtlclNvdW5kLmRpc2Nvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgYXVkaW9fcGxheWluZyA9IGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdWRpb0NvbnRleHRSZXN1bWUoKSB7XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSBjcmVhdGVBdWRpb0NvbnRleHQoKTtcclxuICAgaWYoYXVkaW9fcGxheWluZyA9PT0gdW5kZWZpbmVkKSBnb0F1ZGlvKCk7XHJcblxyXG4gICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgaWYoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xyXG4gICAgICBhd2FpdCBhdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxuICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBCQlNDb25uZWN0b3Ige1xyXG4gICBhZGRyZXNzID0gXCJcIjsgICAgIFxyXG4gICBwcm90b2NvbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgd3NfY29ubmVjdGlvbjogV2ViU29ja2V0IHwgdW5kZWZpbmVkOyAgICAgXHJcbiAgIFxyXG4gICBvbl9lcnJvciA9IChlcnI6IEV2ZW50KT0+IHt9O1xyXG4gICBvbl9vcGVuID0gKCk9PiB7fTtcclxuICAgb25fY2xvc2UgPSAoKT0+IHt9O1xyXG4gICBvbl9kYXRhID0gKGRhdGE6IFVpbnQ4QXJyYXkpPT4ge307XHJcblxyXG4gICBjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgXHJcbiAgIGNvbm5lY3QoKSB7XHJcbiAgICAgIC8vIGVtcHR5IHN0cmluZyBtZWFucyBubyBwcm90b2NvbCAodW5kZWZpbmVkKVxyXG4gICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sID09PSAnJyA/IHVuZGVmaW5lZCA6IHRoaXMucHJvdG9jb2w7XHJcblxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KGAke3RoaXMuYWRkcmVzc31gLHByb3RvY29sKTtcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25lcnJvciA9IChlcnIpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGlvbiBlcnJvcicpOyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLm9uX2Vycm9yKGVycik7XHJcbiAgICAgIH07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3RlZCcpOyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMub25fb3BlbigpO1xyXG4gICAgICB9O1xyXG4gICBcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZGlzY29ubmVjdGVkJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMub25fY2xvc2UoKTtcclxuICAgICAgfTsgICAgICBcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSAoZSkgPT4geyAgICAgIFxyXG4gICAgICAgICBpZiAoZS5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vbl9kYXRhKG5ldyBVaW50OEFycmF5KGUuZGF0YSkpOyBcclxuICAgICAgICAgICAgbGV0IGwgPSBBcnJheS5mcm9tKG5ldyBVaW50OEFycmF5KGUuZGF0YSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBBQ0lBLnJlY2VpdmVfZGF0YSgke0pTT04uc3RyaW5naWZ5KGwpfSk7YCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB3ZWJzb2NrZXQgUmVjZWl2ZWQgc3RyaW5nOiAnJHtlLmRhdGF9J2ApO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgIH1cclxuXHJcbiAgIHNlbmRfZGF0YV90b19iYnMoZGF0YTogbnVtYmVyW10pIHtcclxuICAgICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgIGlmKHRoaXMud3NfY29ubmVjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMud3NfY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSB0aGlzLndzX2Nvbm5lY3Rpb24uT1BFTikgeyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uc2VuZChieXRlcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGRpc2Nvbm5lY3RlZCwgY2FuJ3Qgc2VuZCFcIik7XHJcbiAgICAgIH1cclxuICAgfSAgIFxyXG4gICBcclxuICAgY2xvc2UoKSB7XHJcbiAgICAgIGlmKHRoaXMud3NfY29ubmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIvLyBoYW5kbGVzIGludGVyYWN0aW9uIGJldHdlZW4gYnJvd3NlciBhbmQgZW11bGF0aW9uIFxyXG5cclxuaW1wb3J0IHsgZ29BdWRpbywgc3RvcEF1ZGlvLCBhdWRpb0NvbnRleHRSZXN1bWUgfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgbG9hZEJ5dGVzIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5cclxubGV0IGFzcGVjdCA9IDEuMztcclxuXHJcbmZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSE7ICAgXHJcblxyXG4gICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQqYXNwZWN0KSlcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gYCR7YXNwZWN0KjEwMH12bWluYDtcclxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiMTAwdm1pblwiO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IFwiMTAwdm1heFwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7KDEvYXNwZWN0KSoxMDB9dm1heGA7XHJcbiAgIH1cclxuICAgZWxzZVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBcIjEwMHZtaW5cIjtcclxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAkeygxL2FzcGVjdCkqMTAwfXZtaW5gO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCB0cnVlSGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodFxyXG59XHJcblxyXG5mdW5jdGlvbiBnb0Z1bGxTY3JlZW4oKSBcclxue1xyXG4gICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSE7ICBcclxuICAgY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKCk7IFxyXG4gICBvblJlc2l6ZSgpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZ29GdWxsU2NyZWVuKTtcclxuXHJcbm9uUmVzaXplKCk7XHJcblxyXG4vLyAqKioqIHNhdmUgc3RhdGUgb24gY2xvc2UgKioqKlxyXG5cclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICBcclxufTtcclxuXHJcbi8vICoqKiogdmlzaWJpbGl0eSBjaGFuZ2UgKioqKlxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICBpZihkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwiaGlkZGVuXCIpXHJcbiAgIHtcclxuICAgICAgYzY0LnN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICBzdG9wQXVkaW8oKTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpXHJcbiAgIHsgICAgICBcclxuICAgICAgYzY0LmdvKCk7XHJcbiAgICAgIGdvQXVkaW8oKTtcclxuICAgfVxyXG59KTtcclxuXHJcbi8vICoqKiogZHJhZyAmIGRyb3AgKioqKlxyXG5cclxuY29uc3QgZHJvcFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4vLyBPcHRpb25hbC4gICBTaG93IHRoZSBjb3B5IGljb24gd2hlbiBkcmFnZ2luZyBvdmVyLiAgU2VlbXMgdG8gb25seSB3b3JrIGZvciBjaHJvbWUuXHJcbmRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY3Rpb24oZSkge1xyXG4gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIGUuZGF0YVRyYW5zZmVyIS5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG59KTtcclxuXHJcbi8vIEdldCBmaWxlIGRhdGEgb24gZHJvcFxyXG5kcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZSA9PiB7XHJcbiAgIGF1ZGlvQ29udGV4dFJlc3VtZSgpO1xyXG5cclxuICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBjb25zdCBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyIS5maWxlczsgLy8gQXJyYXkgb2YgYWxsIGZpbGVzXHJcblxyXG4gICBmb3IobGV0IGk9MDsgaTxmaWxlcy5sZW5ndGg7IGkrKykgeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgbGV0IGZpbGUgPSBmaWxlc1tpXTtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsgICAgICBcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGUyID0+IGRyb3BwZWRGaWxlKGZpbGUubmFtZSwgbmV3IFVpbnQ4QXJyYXkoZTIudGFyZ2V0IS5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpOyBcclxuICAgfVxyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRyb3BwZWRGaWxlKG91dE5hbWU6IHN0cmluZywgYnl0ZXM6IFVpbnQ4QXJyYXkpIHtcclxuICAgY29uc3QgcHJnID0gL1xcLnByZyQvaTtcclxuICAgaWYocHJnLnRlc3Qob3V0TmFtZSkpIHsgICAgXHJcbiAgICAgIGF3YWl0IGxvYWRCeXRlcyhieXRlcyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHsgTTY4MjEgfSBmcm9tIFwiLi9tNjgyMVwiO1xyXG5pbXBvcnQgeyBNNjg1MCB9IGZyb20gXCIuL202ODUwXCI7XHJcblxyXG5pbXBvcnQgeyBCQlNDb25uZWN0b3IgfSBmcm9tIFwiLi4vYmJzX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQgeyBhcnJheTJTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmxldCBQSUEgPSBuZXcgTTY4MjEoKTtcclxubGV0IEFDSUEgPSBuZXcgTTY4NTAoKTtcclxuXHJcbmV4cG9ydCBsZXQgdmlkZW90ZWwgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG4od2luZG93IGFzIGFueSkuQUNJQSA9IEFDSUE7XHJcbih3aW5kb3cgYXMgYW55KS5QSUEgPSBQSUE7XHJcbih3aW5kb3cgYXMgYW55KS52aWRlb3RlbCA9IHZpZGVvdGVsO1xyXG5cclxudmlkZW90ZWwub25fZXJyb3IgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX2Nsb3NlID0gKCk9PntcclxuICAgLy8gc2V0cyBOTyBDQVJSSUVSXHJcbiAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICBjb25zb2xlLmxvZyhcIk5PIENBUlJJRVJcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9vcGVuID0gKCk9PntcclxuICAgLy8gY2xlYXJzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDA7XHJcbiAgIFBJQS5QQSAmPSAxMjc7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ0FSUklFUiBERVRFQ1RcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9kYXRhID0gKGRhdGEpPT57XHJcbiAgIEFDSUEucmVjZWl2ZV9kYXRhKGRhdGEpO1xyXG59XHJcblxyXG5BQ0lBLnRyYW5zbWl0X2RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAvL2NvbnNvbGUubG9nKGFycmF5MlN0cmluZyhbZGF0YV0pKTtcclxuICAgLy9jb25zb2xlLmxvZyhgMHgke2RhdGEudG9TdHJpbmcoMTYpfSA9ICR7ZGF0YX1gKTtcclxuICAgdmlkZW90ZWwuc2VuZF9kYXRhX3RvX2JicyhbZGF0YV0pO1xyXG59XHJcblxyXG5QSUEubnVtYmVyX2RlY29kZXIuYWZ0ZXJkaWFsdG9uZSA9IChudW10ZWw6IHN0cmluZyk9PiB7XHJcbiAgIHZpZGVvdGVsLmNvbm5lY3QoKTtcclxuICAgLypcclxuICAgaWYobnVtdGVsID09PSBcIjA1MjI3NTAwNTFcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImdvb2QgbnVtYmVyIVwiKTtcclxuICAgICAgdmlkZW90ZWwuY29ubmVjdCgpO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICBBQ0lBLlNUQVRVU19OT19DQVJSSUVSID0gMTtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWQgbnVtYmVyIVwiKTtcclxuICAgfVxyXG4gICAqL1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiB0aGUgd2hvbGUgc3lzdGVtIGlzIHJlc2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBjYm1fNjQ5OV9yZXNldCgpXHJcbntcclxuICAgUElBLnJlc2V0KCk7IFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgcmVhZHMgSS9PIGluIHRoZSByYW5nZSAkREUwMC1ERkZGXHJcbmV4cG9ydCBmdW5jdGlvbiBjYm1fNjQ5OV9yZWFkKGFkZHI6IG51bWJlciwgdGlja3M6IG51bWJlcilcclxueyAgIFxyXG4gICBpZihhZGRyIDwgMHhERjAwKSByZXR1cm4gUElBLnJlYWQoYWRkcik7XHJcbiAgIGVsc2UgICAgICAgICAgICAgIHJldHVybiBBQ0lBLmNwdV9yZWFkKGFkZHIsIHRpY2tzKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gQ1BVIHdyaXRlcyBJL08gaW4gdGhlIHJhbmdlICRERTAwLURGRkZcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3dyaXRlKGFkZHI6IG51bWJlciwgZGF0YTogbnVtYmVyLCB0aWNrczogbnVtYmVyKVxyXG57XHJcbiAgIGlmKGFkZHIgPCAweERGMDApIFBJQS53cml0ZShhZGRyLCBkYXRhKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgQUNJQS5jcHVfd3JpdGUoYWRkciwgZGF0YSwgdGlja3MpO1xyXG59XHJcblxyXG4vLyBmdW56aW9uZSByaW5nIHBlciBtb2RhbGl0w6AgXCJhbnN3ZXJcIlxyXG4od2luZG93IGFzIGFueSkucmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICBsZXQgY250ID0gMDtcclxuICAgbGV0IG51bSA9IDEzXHJcbiAgIGZ1bmN0aW9uIGdlbl9pbnQoKSB7ICAgICAgXHJcbiAgICAgIGlmKGNudCA8IG51bSkge1xyXG4gICAgICAgICBQSUEuQ1JBID0gMHgzZiB8ICgxPDw3KTsgUElBLlBBID0gMjU1OyAgICAgICAgIFxyXG4gICAgICAgICBzZXRUaW1lb3V0KGdlbl9pbnQsIDEwMCk7XHJcbiAgICAgICAgIGNudCsrOyAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCk9PnZpZGVvdGVsLmNvbm5lY3QoKSwgMzAwMCk7XHJcbiAgICAgIH0gICAgICBcclxuICAgfSBcclxuICAgZ2VuX2ludCgpOyAgIFxyXG59IiwiLypcclxuTm90ZSB2YXJpZTpcclxuXHJcblBJQSA9IE1vdG9yb2xhIDY4MjFcclxuICAgRW5hYmxlID0gY3B1IGNsb2NrXHJcbiAgIC9SVyA9IGNwdSAvUldcclxuICAgL1JFU0VUID0gY3B1IC9SRVNFVFxyXG4gICBDUzAgPSBzZW1wcmUgcG9zdG8gYSAxIChWQ0MpXHJcbiAgIENTMSA9IHNlbXByZSBwb3N0byBhIDEgKFZDQylcclxuICAgL0NTMiA9IC9JTzEgKGNwdSBJL08pIHJhbmdlICRERTAwLSRERUZGLlxyXG4gICBSUzAsUlMxID0gW0ExOkEwXVxyXG4gICAvSVJRQSwvSVJRQiA9IC9JUlEgY3B1LCBjbGVhcmVkIGJ5IHJlYWRpbmcgZGF0YSByZWdpc3RlclxyXG4gICBDQTEgPSAoaW50ZXJydXB0IGlucHV0KSBzZWduYWxlIGRpIFJJTkdcclxuICAgQ0IxID0gKGludGVycnVwdCBpbnB1dCkgMCAoR05EKVxyXG4gICBDQTIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBpbiBBMTQgZGVsbGEgcm9tIGludGVybmEgKGJhbmsgc3dpdGNoaW5nKVxyXG4gICBDQjIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBlcm1ldHRlIGRpIHN3aXRjaGFyZSBpbCBwaW4gRVhST00gKGNhcnQgb2ZmKVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBoZXggfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNNjgyMSB7XHJcbiAgIENSQSA9IDA7XHJcbiAgIENSQiA9IDA7XHJcblxyXG4gICBQQSA9IDA7XHJcbiAgIFBCID0gMDtcclxuXHJcbiAgIEREUkEgPSAwO1xyXG4gICBERFJCID0gMDtcclxuXHJcbiAgIC8vIGRpYWx0b25lIGRldGVjdGlvblxyXG4gICBudW1iZXJfZGVjb2RlciA9IG5ldyBOdW1iZXJEZWNvZGVyKCk7XHJcbiBcclxuICAgcmVzZXQoKSB7XHJcbiAgICAgIHRoaXMuQ1JBID0gMDtcclxuICAgICAgdGhpcy5DUkIgPSAwOyAgICBcclxuICAgICAgdGhpcy5QQSA9IDA7XHJcbiAgICAgIHRoaXMuUEIgPSAwO1xyXG4gICAgICB0aGlzLkREUkEgPSAwO1xyXG4gICAgICB0aGlzLkREUkIgPSAwO1xyXG4gICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKDEpO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBSRVNFVGApOyAgICBcclxuICAgfVxyXG4gXHJcbiAgIHJlYWQoYWRkcjogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBDUkEyID0gKHRoaXMuQ1JBID4+IDIpICYgMTtcclxuICAgICAgbGV0IENSQjIgPSAodGhpcy5DUkIgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMztcclxuICAgICAgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBQQSA9ICQke2hleCh0aGlzLlBBLDIpfWApOyBcclxuICAgICAgICAgdGhpcy5DUkEgPSB0aGlzLkNSQSAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGludGVycnVwdCBmbGFnXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBBOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQSA9ICQke2hleCh0aGlzLkREUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JBID0gJCR7aGV4KHRoaXMuQ1JBLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTAgJiYgQ1JCMiA9PT0gMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBQQiA9ICQke2hleCh0aGlzLlBCLDIpfWApOyAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuQ1JCID0gdGhpcy5DUkIgJiAwYjAwMTExMTExOyAvLyBjbGVhciBhbHNvIGludGVycnVwdCBmbGFnIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5QQjsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAwKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIEREUkIgPSAkJHtoZXgodGhpcy5ERFJCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5ERFJCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIENSQiA9ICQke2hleCh0aGlzLkNSQiwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuQ1JCOyBcclxuICAgICAgfVxyXG4gICB9XHJcbiBcclxuICAgd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICAgICAgIGlmKFJTID09PSAwYjAxKSB0aGlzLndyaXRlX0NSQShkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMSkgdGhpcy53cml0ZV9DUkIoZGF0YSk7XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMSkgdGhpcy53cml0ZV9QQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAwKSB0aGlzLndyaXRlX0REUkEoZGF0YSk7ICAgICAgXHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTAgJiYgQ1JCMiA9PT0gMSkgdGhpcy53cml0ZV9QQihkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAwKSB0aGlzLndyaXRlX0REUkIoZGF0YSk7ICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX0NSQShkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5DUkEgPSBkYXRhO1xyXG4gICAgICAvLyBiYW5rIHN3aXRjaGluZ1xyXG4gICAgICBpZihkYXRhICYgMGIwMDExMDAwMCkge1xyXG4gICAgICAgICBsZXQgYmFuayA9IChkYXRhID4+IDMpICYgMTtcclxuICAgICAgICAgYzY0LnNldF9jYm1fNjQ5OV9uYmFuayhiYW5rKTsgICAgICAgICBcclxuICAgICAgICAgZGVidWcoYDY0OTk6IFJPTSBiYW5rIHN3aXRjaCB0byAke2Jhbmt9YCk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZGVidWcoYFBJQTogc2V0IENSQSB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JCKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkNSQiA9IGRhdGE7XHJcbiAgICAgIC8vIEVYUk9NIHBpbiB0cmlnZ2VyXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBleHJvbSA9IChkYXRhID4+IDMpICYgMTtcclxuICAgICAgICAgYzY0LnNldF9leHJvbSghIWV4cm9tKTsgICAgICAgICBcclxuICAgICAgICAgZGVidWcoYDY0OTk6IEVYUk9NIHN3aXRjaCB0byAkeyEhZXhyb219YCk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZGVidWcoYFBJQTogc2V0IENSQiB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfSAgIFxyXG5cclxuICAgd3JpdGVfRERSQShkYXRhOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5ERFJBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkEgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX0REUkIoZGF0YTogbnVtYmVyKSB7ICAgXHJcbiAgICAgIHRoaXMuRERSQiA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBERFJCIHRvIGJpbmFyeSAke2RhdGEudG9TdHJpbmcoMTYpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9QQShkYXRhOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5QQSA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBQQSB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfVxyXG4gXHJcbiAgIHdyaXRlX1BCKGRhdGE6IG51bWJlcikge1xyXG4gICAgICAvLyBkaWFsdG9uZSBkZXRlY3Rpb24gc3RhcnRzIGJicyBkZWxheWVkXHJcbiAgICAgIGxldCBQQjUgPSAoZGF0YSA+PiA1KSAmIDE7ICBsZXQgb2xkX1BCNSA9ICh0aGlzLlBCID4+IDUpICYgMTtcclxuICAgICAgbGV0IFBCNiA9IChkYXRhID4+IDYpICYgMTsgIGxldCBvbGRfUEI2ID0gKHRoaXMuUEIgPj4gNikgJiAxO1xyXG4gICAgICBsZXQgUEI3ID0gKGRhdGEgPj4gNykgJiAxOyAgbGV0IG9sZF9QQjcgPSAodGhpcy5QQiA+PiA3KSAmIDE7XHJcblxyXG4gICAgICB0aGlzLm51bWJlcl9kZWNvZGVyLnRpY2soUEI2LCBQQjUsIGRhdGEpO1xyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnRvU3RyaW5nKDIpKTtcclxuICAgICAgXHJcbiAgICAgIGlmKFBCNSA9PT0gMCAmJiBvbGRfUEI1ID09PSAxKSB7ICAgICAgICAgXHJcblxyXG4gICAgICAgICBkZWJ1ZyhcIlBJQTogZGlhbGluZy4uLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoUEI3ICE9PSBvbGRfUEI3KSB7XHJcbiAgICAgICAgIC8vIFBCNyBjaGFuZ2VkXHJcbiAgICAgICAgIGRlYnVnKGAqKioqKioqKiBQQjc6ICR7UEI3fWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLlBCID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IFBCIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1ZyhtOiBzdHJpbmcpIHtcclxuICAgLy9jb25zb2xlLmxvZyhtKTtcclxufVxyXG5cclxuY2xhc3MgTnVtYmVyRGVjb2RlclxyXG57XHJcbiAgIHN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgcHVsc2VzID0gMDtcclxuICAgdGVsbnVtYmVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICBmaW5pc2hfdGltZXI6IG51bWJlcnx1bmRlZmluZWQ7XHJcblxyXG4gICBvbGRfUEI2ID0gMDtcclxuICAgb2xkX1BCNSA9IDA7XHJcblxyXG4gICBhZnRlcmRpYWx0b25lID0gKG51bWJlcjogc3RyaW5nKT0+e307XHJcbiAgIFxyXG4gICB0aWNrKFBCNjogbnVtYmVyLCBQQjU6IG51bWJlciwgZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIGlmKCF0aGlzLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgaWYoUEI1ID09PSAxICYmIHRoaXMub2xkX1BCNSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnB1bHNlcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGVsbnVtYmVyID0gW107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlhbGluZyBzdGFydGVkXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGlmKFBCNiA9PT0gMCAmJiB0aGlzLm9sZF9QQjYgPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gZGlhbHRvbmUgY2xpY2tcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQQjYgZG93biAoZGlhbClcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHVsc2VzKys7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiZGlhbHRvbmVfY2xpY2subXAzXCIpOyAvLyB0YWtlbiBmcm9tIFwiaHR0cHM6Ly93d3cuZmVzbGl5YW5zdHVkaW9zLmNvbS9wbGF5LW1wMy8zODdcIlxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgIH0gICAgICBcclxuICAgICAgICAgaWYoUEI2ID09PSAxICYmIHRoaXMub2xkX1BCNiA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBlbmQgb2YgZGlhbHRvbmUgY2xpY2tcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihQQjUgPT09IDAgJiYgdGhpcy5vbGRfUEI1ID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvZiBkaWdpdFxyXG4gICAgICAgICAgICB0aGlzLnRlbG51bWJlci5wdXNoKHRoaXMucHVsc2VzICUgMTApO1xyXG4gICAgICAgICAgICB0aGlzLnB1bHNlcyA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBjYW5jZWwgb2xkIHRpbWVyXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZmluaXNoX3RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5maW5pc2hfdGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaF90aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgdGhpcy5udW1iZXJfY29tcG9zZWQodGhpcy50ZWxudW1iZXIuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZmluaXNoX3RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9LCAzMDAwKSBhcyBhbnkgYXMgbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQQjUgZG93biAoZW5kIG51bWJlcilcIik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9sZF9QQjUgPSBQQjU7XHJcbiAgICAgIHRoaXMub2xkX1BCNiA9IFBCNjsgICAgICBcclxuICAgfVxyXG5cclxuICAgbnVtYmVyX2NvbXBvc2VkKHRlbG51bTogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBkaWFsaW5nIGNvbXBsZXRlZCEgY2FsbGVkICR7dGVsbnVtfWApO1xyXG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hZnRlcmRpYWx0b25lKHRlbG51bSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiLypcclxuQUNJQSA9IG1vdG9yb2xhIDY4NTBcclxuICAgIENTMiA9IC9JTzIgKGNwdSBJL08pIHJhbmdlICRERjAwLSRERkZGLiAgIFxyXG5cclxuNjg1MCBzdGF0dXMgcmVnaXN0ZXJcclxuICAgMCAtIHJlY2VpdmUgYnVmZmVyIGZ1bGwgXHJcbiAgIDEgLSB0cmFuc21pdCBidWZmZXIgZW1wdHlcclxuICAgMiAtIG5vIGNhcnJpZXJcclxuICAgMyAtIC9jbGVhciB0byBzZW5kXHJcbiAgIDQgLSBmcmFtaW5nIGVycm9yXHJcbiAgIDUgLSByZWNlaXZlciBvdmVycnVuXHJcbiAgIDYgLSBwYXJpdHkgZXJyb3JcclxuICAgNyAtIC9JUlFcclxuXHJcbjY4NTAgY29udHJvbCByZWdpc3RlclxyXG4gICBDUjF8Q1IwID0gMDAgbm8gZGl2aWRlXHJcbiAgICAgICAgICAgICAwMSBkaXZpZGUgYnkgMTZcclxuICAgICAgICAgICAgIDEwIGRpdmlkZSBieSA2NFxyXG4gICAgICAgICAgICAgMTEgbWFzdGVyIHJlc2V0IFxyXG4gICAgXHJcbiAgICBDUjR8Q1IzfENSMiA9IGJpdC9wYXJpdHkvc3RvcCBiaXRcclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBTcGVlZExpbWl0ZXIgfSBmcm9tIFwiLi9zcGVlZF9saW1pdGVyXCI7XHJcblxyXG5jb25zdCBjb25maWdfYml0cyA9IFtcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcImV2ZW5cIiwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJvZGRcIiAsIHN0b3BfYml0czogMiB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAxIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJub25lXCIsIHN0b3BfYml0czogMiB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwibm9uZVwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcImV2ZW5cIiwgc3RvcF9iaXRzOiAxIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJvZGRcIiAsIHN0b3BfYml0czogMSB9XHJcbl07XHJcblxyXG5jb25zdCBjbG9ja19kaXZpZGVyID0gWyBcIm5vbmVcIiwgXCIxNlwiLCBcIjY0XCIgXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNNjg1MFxyXG57ICAgXHJcbiAgIENPTlRST0wgPSAwO1xyXG4gICBUUkFOU01JVF9EQVRBID0gMDsgXHJcbiAgIFJFQ0VJVkVfREFUQSA9IDA7ICBcclxuXHJcbiAgIC8vIHN0YXR1cyByZWdpc3RlciBiaXRzXHJcbiAgIFNUQVRVU19SRUNFSVZFUl9GVUxMICAgICA9IDA7XHJcbiAgIFNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDE7XHJcbiAgIFNUQVRVU19OT19DQVJSSUVSICAgICAgICA9IDE7XHJcbiAgIFNUQVRVU19DTEVBUl9UT19TRU5EICAgICA9IDA7XHJcbiAgIFNUQVRVU19GUkFNSU5HX0VSUk9SICAgICA9IDA7XHJcbiAgIFNUQVRVU19SRUNFSVZFUl9PVkVSUlVOICA9IDA7XHJcbiAgIFNUQVRVU19QQVJJVFlfRVJST1IgICAgICA9IDA7XHJcbiAgIFNUQVRVU19JUlEgICAgICAgICAgICAgICA9IDA7ICAgXHJcblxyXG4gICBsaW1pdGVyID0gbmV3IFNwZWVkTGltaXRlcigxMjAwLCAxMjAwKTtcclxuICAgICAgICAgICAgXHJcbiAgIGdldF9zdGF0dXNfYnl0ZSh0aWNrczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgPSB0aGlzLmxpbWl0ZXIucnhfZnVsbCh0aWNrcyk7XHJcbiAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gdGhpcy5saW1pdGVyLnR4X2VtcHR5KHRpY2tzKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdGF0dXMgPSBcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgIDw8IDApIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZIDw8IDEpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgIDw8IDIpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgIDw8IDMpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgIDw8IDQpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gIDw8IDUpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgIDw8IDYpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgIDw8IDcpOyAgIFxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICB9XHJcblxyXG4gICBjcHVfcmVhZChhZGRyOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRfc3RhdHVzX2J5dGUodGlja3MpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgeyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmdldF9zdGF0dXNfYnl0ZSh0aWNrcyk7XHJcbiAgICAgICAgIGlmKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSB0aGlzLmxpbWl0ZXIucmVhZF9ieXRlKHRpY2tzKTsgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcy5SRUNFSVZFX0RBVEE7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY3B1X3dyaXRlKGFkZHI6IG51bWJlciwgZGF0YTogbnVtYmVyLCB0aWNrczogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAxO1xyXG4gICAgICBpZihSUyA9PT0gMCkge1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogc2V0IGNvbnRyb2wgPSAoJHtkYXRhLnRvU3RyaW5nKDIpfSlgKTtcclxuICAgICAgICAgdGhpcy5DT05UUk9MID0gZGF0YTtcclxuXHJcbiAgICAgICAgIGxldCBDUjEwICA9ICh0aGlzLkNPTlRST0wgJiAwYjAwMDAwMDExKTtcclxuICAgICAgICAgbGV0IENSNDMyID0gKHRoaXMuQ09OVFJPTCAmIDBiMDAwMTExMDApID4+IDI7XHJcbiAgICAgICAgIGxldCBDUjY1ICA9ICh0aGlzLkNPTlRST0wgJiAwYjAxMTAwMDAwKSA+PiA1O1xyXG4gICAgICAgICBsZXQgQ1I3ICAgPSAodGhpcy5DT05UUk9MICYgMGIxMDAwMDAwMCkgPj4gNztcclxuXHJcbiAgICAgICAgIC8vIG1hc3RlciByZXNldFxyXG4gICAgICAgICBpZihDUjEwID09PSAwYjExKSB7XHJcbiAgICAgICAgICAgIGRlYnVnKGBBQ0lBOiBtYXN0ZXIgUkVTRVRgKTtcclxuICAgICAgICAgICAgdGhpcy5saW1pdGVyLnJlc2V0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5UUkFOU01JVF9EQVRBID0gMDtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDE7XHJcbiAgICAgICAgICAvL3RoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19GUkFNSU5HX0VSUk9SICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19JUlEgICAgICAgICAgICAgICA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWcoYEFDSUE6IGNsb2NrIGRpdmlkZSBieSAke2Nsb2NrX2RpdmlkZXJbQ1IxMF19YCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGxldCB7IGJpdHMsIHBhcml0eSwgc3RvcF9iaXRzIH0gPSBjb25maWdfYml0c1tDUjQzMl07XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBiaXQgY29uZmlnOiAke2JpdHN9IGJpdHMvcGFyaXR5ICR7cGFyaXR5fS9zdG9wIGJpdHMke3N0b3BfYml0c31gKTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IENSNnw1ID0gJHtDUjY1LnRvU3RyaW5nKDIpfWApO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogQ1I3ID0gJHtDUjd9YCk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBzZXQgdHJhbnNtaXQgZGF0YSA9ICgke2RhdGF9KWApO1xyXG4gICAgICAgICB0aGlzLlRSQU5TTUlUX0RBVEEgPSBkYXRhOyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLnRyYW5zbWl0X2RhdGEodGhpcy5UUkFOU01JVF9EQVRBKTtcclxuICAgICAgICAgdGhpcy5saW1pdGVyLnR4X2J5dGVfc2VudCh0aWNrcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLy8gZXh0ZXJuYWwgd29ybGQgaW50ZXJmYWNlXHJcblxyXG4gICAvLyBjYWxsZWQgZnJvbSBCQlMgY29ubmVjdG9yXHJcbiAgIHJlY2VpdmVfZGF0YShkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgIHRoaXMubGltaXRlci5wdXNoX3J4X2RhdGEoZGF0YSk7ICAgICAgICAgICAgXHJcbiAgICAgIGRlYnVnKGBBQ0lBOiByZWNlaXZlZCAke2RhdGEubGVuZ3RofSBieXRlc2ApO1xyXG4gICB9XHJcblxyXG4gICAvLyBzZW5kIGRhdGEgdG8gQkJTIGNvbm5lY3RvclxyXG4gICB0cmFuc21pdF9kYXRhID0gKGRhdGE6IG51bWJlcik9Pnt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1ZyhtOiBzdHJpbmcpIHtcclxuICAgLy9jb25zb2xlLmxvZyhtKTtcclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFNwZWVkTGltaXRlciB7XHJcblxyXG4gICByeF9idWZmZXI6IG51bWJlcltdID0gW107ICAgIFxyXG5cclxuICAgcnhfdGlja3MgPSAwO1xyXG4gICB0eF90aWNrcyA9IDA7XHJcbiAgIHJ4X21heF9jb3VudDogbnVtYmVyOyBcclxuICAgdHhfbWF4X2NvdW50OiBudW1iZXI7IFxyXG5cclxuICAgY29uc3RydWN0b3IocnhfYmF1ZHJhdGU6IG51bWJlciwgdHhfYmF1ZHJhdGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJ4X21heF9jb3VudCA9IDk4NTI0OCAvIChyeF9iYXVkcmF0ZSAvIDkpO1xyXG4gICAgICB0aGlzLnR4X21heF9jb3VudCA9IDk4NTI0OCAvICh0eF9iYXVkcmF0ZSAvIDkpO1xyXG4gICB9XHJcblxyXG4gICByZXNldCgpIHtcclxuICAgICAgdGhpcy5yeF9idWZmZXIgPSBbXTsgICAgICAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICBwdXNoX3J4X2RhdGEoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICBkYXRhLmZvckVhY2goZT0+dGhpcy5yeF9idWZmZXIucHVzaChlKSk7ICAgXHJcbiAgIH0gXHJcblxyXG4gICByeF9mdWxsKHRpY2tzOiBudW1iZXIpIHsgICAgICBcclxuICAgICAgbGV0IGRpZmYgPSB0aWNrcyAtIHRoaXMucnhfdGlja3M7ICAgICAgICAgICAgXHJcbiAgICAgIGlmKGRpZmYgPCB0aGlzLnJ4X21heF9jb3VudCkgcmV0dXJuIDA7ICAgICAgICAgICAgXHJcbiAgICAgIHJldHVybiB0aGlzLnJ4X2J1ZmZlci5sZW5ndGggPT09IDAgPyAwIDogMTtcclxuICAgfVxyXG5cclxuICAgcmVhZF9ieXRlKHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yeF90aWNrcyA9IHRpY2tzO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMucnhfYnVmZmVyWzBdO1xyXG4gICAgICB0aGlzLnJ4X2J1ZmZlciA9IHRoaXMucnhfYnVmZmVyLnNsaWNlKDEpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfSAgIFxyXG5cclxuICAgdHhfZW1wdHkodGlja3M6IG51bWJlcikgeyAgICAgIFxyXG4gICAgICBsZXQgZGlmZiA9IHRpY2tzIC0gdGhpcy50eF90aWNrczsgICAgICAgICAgICBcclxuICAgICAgaWYoZGlmZiA8IHRoaXMudHhfbWF4X2NvdW50KSByZXR1cm4gMDsgICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgIH1cclxuXHJcbiAgIHR4X2J5dGVfc2VudCh0aWNrczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudHhfdGlja3MgPSB0aWNrczsgICAgICBcclxuICAgICAgcmV0dXJuO1xyXG4gICB9ICAgXHJcbn1cclxuIiwiaW1wb3J0IGVtc2NyaXB0ZW5fbW9kdWxlIGZyb20gXCIuLi9lbXNjcmlwdGVuX21vZHVsZVwiO1xyXG5pbXBvcnQgeyBvbmVGcmFtZSB9IGZyb20gXCIuL2VtdWxhdG9yXCI7XHJcblxyXG5sZXQgd2FzbV9pbnN0YW5jZTogYW55O1xyXG5cclxuLypcclxubGV0IHJvbV9sb2FkO1xyXG5cclxubGV0IGlvX3JlYWQ7XHJcbmxldCBpb193cml0ZTtcclxuXHJcbmxldCBrZXlib2FyZF9yZXNldDtcclxubGV0IGtleWJvYXJkX3ByZXNzO1xyXG5sZXQga2V5Ym9hcmRfcmVsZWFzZTtcclxubGV0IGtleWJvYXJkX3BvbGw7XHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgYzY0ID0geyBcclxuICAgdGFwZTogeyB9LFxyXG4gICBpbml0OiAoKT0+e30sXHJcbiAgIGNvbmZpZzogKGNvbmY6IG51bWJlcik9Pnt9LFxyXG4gICBleDogKGN5Y2xlczogbnVtYmVyKT0+e30sXHJcbiAgIGV4ZWM6ICgpPT57fSxcclxuICAgZXhlY191czogKG1zZWM6IG51bWJlcik9Pnt9LFxyXG4gICB2ZHA6ICgpPT57fSxcclxuICAgcmVzZXQ6ICgpPT57fSxcclxuICAga2V5X2Rvd246IChrZXk6IG51bWJlcik9Pnt9LFxyXG4gICBrZXlfdXA6IChrZXk6IG51bWJlcik9Pnt9LFxyXG4gICBqb3lzdGljazogKCk9Pnt9LFxyXG4gICBlbXVfam95OiAoam95OiBudW1iZXIpPT57fSxcclxuICAgbG9hZF9wcmc6IChieXRlczogVWludDhBcnJheSwgc2l6ZTogbnVtYmVyKT0+e30sXHJcbiAgIHBlZWs6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBwb2tlOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIGNhc19wb3J0OiAoKT0+e30sXHJcbiAgIG1lbV9yZWFkOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgbWVtX3dyaXRlOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIG1lbV9yZWFkX3dvcmQ6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBtZW1fd3JpdGVfd29yZDogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBnbzogKCk9PntcclxuICAgICAgYzY0LnN0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgb25lRnJhbWUodW5kZWZpbmVkKTtcclxuICAgfSxcclxuXHJcbiAgIHN0b3BwZWQ6IHRydWUsXHJcblxyXG4gICAvLyBDQk0gNjQ5OSBBREFUVEFUT1JFIFRFTEVNQVRJQ08gZW11bGF0aW9uXHJcbiAgIHNldF9leHJvbTogKHZhbHVlOiBib29sZWFuKSA9PiB7fSxcclxuICAgc2V0X2NibV82NDk5X25iYW5rOiAodmFsdWU6IG51bWJlcikgPT4ge30sXHJcbiAgIHNldF9lbXVsYXRlX2NibV82NDk5OiAodmFsdWU6IGJvb2xlYW4pID0+IHt9LCAgIFxyXG4gICBzZXRfZXh0ZXJuYWxfaXJxOiAodmFsdWU6IGJvb2xlYW4pID0+IHt9XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZF93YXNtKCkgeyAgIFxyXG4gICBcclxuICAgbGV0IGluc3RhbmNlID0gYXdhaXQgZW1zY3JpcHRlbl9tb2R1bGUoKTtcclxuICAgXHJcbiAgIGM2NC5pbml0ICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luaXRcIiwgbnVsbCk7XHJcbiAgIGM2NC5jb25maWcgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2NvbmZpZ1wiLCBudWxsLCBbJ251bWJlciddKTtcclxuICAgYzY0LmV4ZWMgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhlY1wiLCBudWxsKTtcclxuICAgYzY0LmV4ICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhcIiwgWydudW1iZXInXSk7XHJcbiAgIGM2NC5leGVjX3VzICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2V4ZWNfdXNcIiwgWydudW1iZXInXSk7XHJcbiAgIGM2NC52ZHAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3ZkcFwiLCBudWxsKTtcclxuICAgYzY0LnJlc2V0ICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfcmVzZXRcIiwgbnVsbCk7XHJcblxyXG4gICBjNjQua2V5X2Rvd24gPSBpbnN0YW5jZS5jd3JhcChcInN5c19rZXlfZG93blwiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG4gICBjNjQua2V5X3VwICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19rZXlfdXBcIiAgICwgbnVsbCwgWydudW1iZXInXSApO1xyXG4gICBjNjQuam95c3RpY2sgPSBpbnN0YW5jZS5jd3JhcChcInN5c19qb3lzdGlja1wiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG5cclxuICAgYzY0LmVtdV9qb3kgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2pveXN0aWNrX3R5cGVcIiAsIG51bGwsIFsnbnVtYmVyJ10gKTtcclxuXHJcbiAgIGM2NC5sb2FkX3ByZyAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfcXVpY2tfbG9hZFwiICwgbnVsbCwgWydhcnJheScsICdudW1iZXInXSApO1xyXG4gICAvL2M2NC5pbnNlcnRfY2FydGRyaWdlID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIiAsIG51bGwsIFsnYXJyYXknLCAnbnVtYmVyJ10gKTtcclxuXHJcbiAgIGM2NC5wZWVrICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX21lbV9jcHVfcmRcIiAgICwgJ251bWJlcicsIFsnbnVtYmVyJ10gKTtcclxuICAgYzY0LnBva2UgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfbWVtX2NwdV93clwiICAgLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG5cclxuICAgLy9jNjQuZHVtcF92aWMgPSBpbnN0YW5jZS5jd3JhcChcInN5c19kdW1wX3ZpY1wiICAgLCBudWxsICk7XHJcblxyXG4gICBjNjQuY2FzX3BvcnQgPSBpbnN0YW5jZS5jd3JhcChcInN5c19jYXNfcG9ydFwiICAgLCAnbnVtYmVyJyk7XHJcblxyXG4gICAvKlxyXG4gICBjNjQudGFwZS5pbnNlcnQgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbnNlcnRfdGFwZVwiICAsICdib29sJywgWydhcnJheScsICdudW1iZXInXSApO1xyXG4gICBjNjQudGFwZS5yZW1vdmUgPSBpbnN0YW5jZS5jd3JhcChcInN5c19yZW1vdmVfdGFwZVwiICAsIG51bGwgKTtcclxuICAgYzY0LnRhcGUucGxheSAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdGFwZV9wbGF5XCIgICAgLCBudWxsICk7XHJcbiAgIGM2NC50YXBlLnN0b3AgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3RhcGVfc3RvcFwiICAgICwgbnVsbCApO1xyXG4gICAqL1xyXG5cclxuICAgYzY0Lm1lbV9yZWFkID0gYzY0LnBlZWs7XHJcbiAgIGM2NC5tZW1fd3JpdGUgPSBjNjQucG9rZTtcclxuXHJcbiAgIGM2NC5tZW1fd3JpdGVfd29yZCA9IGZ1bmN0aW9uKGFkZHJlc3MsIHdvcmQpIHtcclxuICAgICAgYzY0Lm1lbV93cml0ZShhZGRyZXNzICsgMCwgd29yZCAmIDB4RkYpO1xyXG4gICAgICBjNjQubWVtX3dyaXRlKGFkZHJlc3MgKyAxLCAod29yZCAmIDB4RkYwMCkgPj4gOCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIGM2NC5tZW1fcmVhZF93b3JkID0gZnVuY3Rpb24oYWRkcmVzcykge1xyXG4gICAgICBjb25zdCBsbyA9IGM2NC5tZW1fcmVhZChhZGRyZXNzICsgMCk7XHJcbiAgICAgIGNvbnN0IGhpID0gYzY0Lm1lbV9yZWFkKGFkZHJlc3MgKyAxKTtcclxuICAgICAgcmV0dXJuIGxvK2hpKjI1NjtcclxuICAgfSAgIFxyXG5cclxuICAgLypcclxuICAgY3B1X2luaXQgICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X2luaXRcIiwgbnVsbCk7XHJcbiAgIGNwdV9yZXNldCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImNwdV9yZXNldFwiLCBudWxsKTtcclxuICAgY3B1X3J1bl9pbnN0cnVjdGlvbiA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X3J1bl9pbnN0cnVjdGlvblwiLCAnbnVtYmVyJyk7XHJcblxyXG4gICBtZW1fcmVhZCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcIm1lbV9yZWFkXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuICAgbWVtX3dyaXRlICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJtZW1fd3JpdGVcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG4gICByb21fbG9hZCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInJvbV9sb2FkXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddKTtcclxuXHJcbiAgIGlvX3JlYWQgICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiaW9fcmVhZFwiLCAnbnVtYmVyJywgWydudW1iZXInXSk7XHJcbiAgIGlvX3dyaXRlICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiaW9fd3JpdGVcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG5cclxuICAgbG04MGNfdGljayAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY190aWNrXCIsICdudW1iZXInKTtcclxuICAgbG04MGNfc2V0X2RlYnVnICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19zZXRfZGVidWdcIiwgbnVsbCwgWydib29sJ10pO1xyXG4gICBsbTgwY19jdGNfZW5hYmxlICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX2N0Y19lbmFibGVcIiwgbnVsbCwgWydib29sJ10pO1xyXG4gICBsbTgwY19pbml0ICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX2luaXRcIiwgbnVsbCk7XHJcbiAgIGxtODBjX3Jlc2V0ICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfcmVzZXRcIiwgbnVsbCk7XHJcblxyXG4gICBsbTgwY190aWNrX2xpbmUgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3RpY2tfbGluZVwiLCAnbnVtYmVyJywgWydudW1iZXInXSk7XHJcblxyXG4gICBrZXlib2FyZF9yZXNldCAgICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3Jlc2V0XCIgICwgbnVsbCApO1xyXG4gICBrZXlib2FyZF9wcmVzcyAgICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3ByZXNzXCIgICwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuICAga2V5Ym9hcmRfcmVsZWFzZSAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9yZWxlYXNlXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcbiAgIGtleWJvYXJkX3BvbGwgICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcG9sbFwiICAgLCAnbnVtYmVyJywgWydudW1iZXInXSApO1xyXG4gICAqL1xyXG5cclxuICAgYzY0LnNldF9leHJvbSAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2V4cm9tXCIgICAgICAgICAgICAgLCBudWxsLCBbJ2Jvb2wnXSApOyBcclxuICAgYzY0LnNldF9jYm1fNjQ5OV9uYmFuayAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2NibV82NDk5X25iYW5rXCIgICAgLCBudWxsLCBbJ251bWJlciddICk7IFxyXG4gICBjNjQuc2V0X2VtdWxhdGVfY2JtXzY0OTkgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBjNjQuc2V0X2V4dGVybmFsX2lycSAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZXh0ZXJuYWxfaXJxXCIgICAgICAsIG51bGwsIFsnYm9vbCddICk7ICAgIFxyXG4gICBcclxuICAgd2FzbV9pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICBcclxuICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3dhc21faW5zdGFuY2UoKSB7XHJcbiAgIHJldHVybiB3YXNtX2luc3RhbmNlO1xyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIFRPRE8gc3RhcnQgYmJzIG9ubHkgd2hlbiByZXF1aXJlZFxyXG4vLyBUT0RPIHJpdW5pZmljYXJlIFRlcm1pbmFsZS9QRVRTQ0lJIGJicyBjb24gNjQ5OVxyXG4vLyBUT0RPIHB1c2ggQ0lBIFRPRCB0byBmbG9vaC9jaGlwc1xyXG4vLyBUT0RPIHVwZGF0ZSB0byBuZXcgYzY0IGluIGZsb29oL2NoaXBzXHJcblxyXG4vLyBub3JtYWwgQkJTIHN0YXJ0cyB3aXRoID9sb2FkPW5pcHB1cjcyL3Rlcm1pbmFsLnByZ1xyXG4vLyBwcmVzdGVsIEJCUyBzdGFydHMgd2l0aCA/Y2JtNjQ5OT10cnVlXHJcblxyXG4vKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcyB9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlR2VvbWV0cnkgfSBmcm9tIFwiLi92aWRlb1wiO1xyXG5pbXBvcnQgeyBwb2xsX2tleWJvYXJkIH0gZnJvbSBcIi4va2V5Ym9hcmRcIjtcclxuaW1wb3J0IHsgcGV0c2NpaSB9IGZyb20gXCIuL3BldHNjaWlfYmJzXCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZ3JhbSB9IGZyb20gXCIuL2ZldGNoUHJvZ3JhbVwiO1xyXG5cclxubGV0IHN0b3BwZWQgPSBmYWxzZTsgLy8gYWxsb3dzIHRvIHN0b3AvcmVzdW1lIHRoZSBlbXVsYXRpb25cclxuXHJcbmxldCBsYXN0X2tleWJvYXJkcG9sbCA9IDA7XHJcblxyXG5sZXQgbGFzdF90aW1lc3RhbXAgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uZUZyYW1lKHRpbWVzdGFtcDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgIGxldCBzdGFtcCA9IHRpbWVzdGFtcCA9PSB1bmRlZmluZWQgPyBsYXN0X3RpbWVzdGFtcCA6IHRpbWVzdGFtcDtcclxuICAgbGV0IHVzZWMgPSAoc3RhbXAgLSBsYXN0X3RpbWVzdGFtcCkqMTAwMDtcclxuICAgbGFzdF90aW1lc3RhbXAgPSBzdGFtcDtcclxuXHJcbiAgIGlmKHVzZWMgPiAzMjAwMCkgdXNlYyA9IDMyMDAwO1xyXG5cclxuICAgaWYoc3RhbXAgLSBsYXN0X2tleWJvYXJkcG9sbCA+IDE1KSB7XHJcbiAgICAgIHBvbGxfa2V5Ym9hcmQoKTtcclxuICAgICAgbGFzdF9rZXlib2FyZHBvbGwgPSBzdGFtcDtcclxuICAgfVxyXG5cclxuICAgYzY0LmV4ZWNfdXModXNlYyk7XHJcblxyXG4gICBpZighc3RvcHBlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uZUZyYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcblxyXG4gICBjNjQuY29uZmlnKDApO1xyXG5cclxuICAgYzY0LmV4KDUwMDApOyAgICAgLy8gd2FpdCBmb3IgbWVtb3J5IHBhdHRlcm4gd3JpdGluZ1xyXG4gICBjNjQubWVtX3dyaXRlKDIwNCwxKTsgLy8gZmxhZ3Mgc3lzdGVtIG5vdCBib290ZWQgeWV0XHJcblxyXG4gICBsZXQgb3B0aW9ucyA9IGF3YWl0IHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcygpO1xyXG5cclxuICAgLy8gYXV0b3N0YXJ0IHRlcm1pbmFsIGlmIGxvYWRlZCBmcm9tIGJicy5zYmxlbmRvcmlvLnVlIG9yIGJicy5yZXRyb2NhbXB1cy5jb21cclxuICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgbGV0IGlzX3JldHJvY2FtcHVzID0gaHJlZi5tYXRjaCgvXmh0dHA6XFwvXFwvKGJic1xcLnNibGVuZG9yaW9cXC5ldXxiYnNcXC5yZXRyb2NhbXB1c1xcLmNvbSkvZyk7ICAgXHJcblxyXG4gICBpZihpc19yZXRyb2NhbXB1cyB8fCBvcHRpb25zLnBldHNjaWliYnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwZXRzY2lpLmFkZHJlc3MgPSBvcHRpb25zLndzdGNwID8/IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MFwiO1xyXG4gICAgICBwZXRzY2lpLnByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbCA/PyBcImJic1wiO1xyXG4gICAgICBpZihvcHRpb25zLmxvYWQgPT09IHVuZGVmaW5lZCkgZmV0Y2hQcm9ncmFtKFwibmlwcHVyNzIvdGVybWluYWwucHJnXCIpO1xyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGVHZW9tZXRyeSgpO1xyXG5cclxuICAgYzY0LmdvKCk7ICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZEJ5dGVzIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZ3JhbShuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgLy9jb25zb2xlLmxvZyhgd2FudGluZyB0byBsb2FkICR7bmFtZX1gKTtcclxuICAgdHJ5XHJcbiAgIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgc29mdHdhcmUvJHtuYW1lfWApO1xyXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBsb2FkQnl0ZXMoYnl0ZXMpO1xyXG4gICBcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKVxyXG4gICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFzdGUsIGhleCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ5dGVzKGJ5dGVzOiBVaW50OEFycmF5KSB7XHJcbiAgIHdhaXRfYW5kX2xvYWQoYnl0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWl0X2FuZF9sb2FkKGJ1ZmZlcjogVWludDhBcnJheSkge1xyXG4gICBpZihjNjQubWVtX3JlYWQoMjA0KSE9PTApIHtcclxuICAgICAgLy8gY3Vyc29yIG5vdCBmbGFzaGluZywgc3lzdGVtIG5vdCB5ZXQgYm9vdGVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PndhaXRfYW5kX2xvYWQoYnVmZmVyKSwgMTAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGRvX2xvYWQoYnVmZmVyKTtcclxuICAgY29uc29sZS5sb2coYGxvYWRlZCAke2J1ZmZlci5sZW5ndGh9IGJ5dGVzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2xvYWQoYnVmZmVyOiBVaW50OEFycmF5KSB7XHJcbiAgIGM2NC5sb2FkX3ByZyhidWZmZXIsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICBwYXN0ZShcIlJVTlxcclwiKTtcclxufVxyXG5cclxuY29uc3QgQkFTVFhUID0gMHgwMDJiO1xyXG5jb25zdCBQUk9HTkQgPSAweDAwMmQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZV9maWxlKGZpbGVuYW1lOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpIHN0YXJ0ID0gYzY0Lm1lbV9yZWFkX3dvcmQoQkFTVFhUKTtcclxuICAgaWYoZW5kID09PSB1bmRlZmluZWQpIGVuZCA9IGM2NC5tZW1fcmVhZF93b3JkKFBST0dORCktMTtcclxuXHJcbiAgIGNvbnN0IHByZyA9IFsgc3RhcnQgJiAweEZGLCBzdGFydCA+PiA4IF07XHJcbiAgIGZvcihsZXQgaT0wLHQ9c3RhcnQ7IHQ8PWVuZDsgaSsrLHQrKykge1xyXG4gICAgICBwcmcucHVzaChjNjQubWVtX3JlYWQodCkpO1xyXG4gICB9XHJcbiAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocHJnKTtcclxuICAgXHJcbiAgIGF3YWl0IGRvd25sb2FkKGZpbGVuYW1lLCBieXRlcyk7XHJcblxyXG4gICBjb25zb2xlLmxvZyhgc2F2ZWQgXCIke2ZpbGVuYW1lfVwiICR7Ynl0ZXMubGVuZ3RofSBieXRlcyBmcm9tICR7aGV4KHN0YXJ0LDQpfWggdG8gJHtoZXgoZW5kLDQpfWhgKTtcclxuICAgLy9jcHUucmVzZXQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZywgYnl0ZXM6IFVpbnQ4QXJyYXkpIHsgICBcclxuICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pOyAgIFxyXG4gICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpO1xyXG4gICBjb25zb2xlLmxvZyhgZG93bmxvYWRlZCBcIiR7ZmlsZU5hbWV9XCJgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhdWRpb0NvbnRleHRSZXN1bWUgfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEF9IGZyb20gXCIuL2tleWJvYXJkX0lUXCI7XHJcblxyXG5sZXQgbGFzdF9zY3JvbGxfbG9jazogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmxldCBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxubGV0IGFsdF9wcmVzc2VkID0gZmFsc2U7XHJcbmxldCBzaGlmdF9wcmVzc2VkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBrZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSB0cnVlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0TGVmdFwiKSBhbHRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdExlZnRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gdHJ1ZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpIGFsdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0UmlnaHRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleURvd25cIik7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gZnJvbSBDaHJvbWUgNzEgYXVkaW8gaXMgc3VzcGVuZGVkIGJ5IGRlZmF1bHQgYW5kIG11c3QgcmVzdW1lIHdpdGhpbiBhbiB1c2VyLWdlbmVyYXRlZCBldmVudFxyXG4gICBhdWRpb0NvbnRleHRSZXN1bWUoKTtcclxuXHJcbiAgIGlmKGxhc3Rfc2Nyb2xsX2xvY2sgPT09IHVuZGVmaW5lZCkgbGFzdF9zY3JvbGxfbG9jayA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcblxyXG4gICBpZihlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpIT1sYXN0X3Njcm9sbF9sb2NrKSB7XHJcbiAgICAgIGxldCBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZCA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcbiAgICAgIGxhc3Rfc2Nyb2xsX2xvY2sgPSBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZDtcclxuICAgICAgbGV0IGVtdV9qb3lzdGljayA9IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkID8gMyA6IDA7XHJcbiAgICAgIGM2NC5lbXVfam95KGVtdV9qb3lzdGljayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb3lzdGljayBlbXVsYXRpb24gJHtlbXVfam95c3RpY2s9PTM/XCJlbmFibGVkXCI6XCJkaXNhYmxlZFwifWApO1xyXG4gICB9XHJcblxyXG4gICAvLyBkaXNhYmxlIGF1dG8gcmVwZWF0LCBhcyBpdCBpcyBoYW5kbGVkIG9uIHRoZSBmaXJtd2FyZVxyXG4gICBpZihlLnJlcGVhdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgIH0gICBcclxuXHJcbiAgIC8vICoqKiBzcGVjaWFsIChub24gY2hhcmFjdGVycykga2V5cyAqKipcclxuXHJcbiAgIC8vIFJFU0VUIGtleSBpcyBDVFJMK0FMVCtCUkVBS1xyXG4gICBpZihlLmNvZGUgPT09IFwiUGF1c2VcIiAmJiBlLmFsdEtleSAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgYzY0LnJlc2V0KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgLy8gaWYga2V5Ym9hcmQgSVRBXHJcbiAgIHtcclxuICAgICAgY29uc3QgaGFyZHdhcmVfa2V5cyA9IHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGUuY29kZSwgZS5rZXksIGUuc2hpZnRLZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuZ2V0TW9kaWZpZXJTdGF0ZShcIkFsdEdyYXBoXCIpICk7XHJcbiAgICAgIGlmKGhhcmR3YXJlX2tleXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJwcmVzc1wiLCBoYXJkd2FyZV9rZXlzIH0pO1xyXG4gICAgICAvL2tleV9wcmVzc2VkLnB1c2goaGFyZHdhcmVfa2V5cyk7XHJcbiAgICAgIGtleV9wcmVzc19tYXBbZS5jb2RlXSA9IGhhcmR3YXJlX2tleXM7XHJcbiAgICAgIC8vY29uc29sZS5sb2coYG1hcCBhZnRlciBwcmVzczogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdExlZnRcIikgYWx0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gZmFsc2U7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRSaWdodFwiKSBhbHRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRSaWdodFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7IFxyXG4gICAvL2NvbnNvbGUubG9nKGUuY29kZSk7XHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleVVwXCIpO1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuICAgKi9cclxuXHJcbiAgIC8vIGZpeCBhIGJ1ZyBpbiBDaHJvbWU6IHByZXNzaW5nIFwiQUxULUdSIEBcIiByZXN1bHRzIGluIGtleWRvd24gb2YgXCLDslwiIGluc3RlYWQgb2YgXCJAXCJcclxuICAgLy9pZihlLmtleSA9PT0gJ8OyJyAmJiBlLmtleUNvZGUgPT09IDE5MiAmJiBlLndoaWNoID09PSAxOTIpIHtcclxuICAgLy8gICBlLmtleSA9ICdAJztcclxuICAgLy99XHJcblxyXG4gICBjb25zdCBoYXJkd2FyZV9rZXlzID0gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoZS5jb2RlLCBlLmtleSwgZS5zaGlmdEtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5nZXRNb2RpZmllclN0YXRlKFwiQWx0R3JhcGhcIikpO1xyXG4gICBpZihoYXJkd2FyZV9rZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5cyB9KTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIC8va2V5X3ByZXNzZWQuZm9yRWFjaChrPT5rZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrIH0pKTtcclxuICAgLy9rZXlfcHJlc3NlZCA9IFtdO1xyXG5cclxuICAgbGV0IGNvZGUgPSBlLmNvZGU7XHJcbiAgIC8vY29uc29sZS5sb2coYG1hcCBiZWZvcmUgcmVsZWFzZTogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIGlmKGtleV9wcmVzc19tYXBbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgayA9IGtleV9wcmVzc19tYXBbY29kZV07XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGsgfSk7XHJcbiAgICAgIGRlbGV0ZSBrZXlfcHJlc3NfbWFwW2NvZGVdO1xyXG4gICB9XHJcblxyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbi8vIGNvbm5lY3QgRE9NIGV2ZW50c1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQ7IFxyXG5lbGVtZW50Lm9ua2V5ZG93biA9IGtleURvd247XHJcbmVsZW1lbnQub25rZXl1cCA9IGtleVVwO1xyXG5lbGVtZW50Lm9ua2V5cHJlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCLDoFwiKSBhY2NlbnRhdGUoXCJhXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6hcIikgYWNjZW50YXRlKFwiZVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOpXCIpIGFjY2VudGF0ZShcImVcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDrFwiKSBhY2NlbnRhdGUoXCJpXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw7JcIikgYWNjZW50YXRlKFwib1wiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsO5XCIpIGFjY2VudGF0ZShcInVcIik7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXkpIHsgICAgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoa2V5KSk7ICAgXHJcbiAgIGtleVVwKGZha2VFdmVudChrZXkpKTsgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoXCInXCIpKTtcclxuICAga2V5VXAoZmFrZUV2ZW50KFwiJ1wiKSk7ICAgXHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXk6IHN0cmluZykgeyAgICAgIFxyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlEb3duKGZha2VFdmVudChrZXkpKSwgMCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleVVwICAoZmFrZUV2ZW50KGtleSkpLDIwKTsgXHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleURvd24oZmFrZUV2ZW50KFwiJ1wiKSksNDApO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlVcCAgKGZha2VFdmVudChcIidcIikpLDYwKTtcclxufVxyXG5cclxud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgcmVzZXRfa2V5Ym9hcmQoKTsgLy8gcmVsZWFzZSBhbGwga2V5cyB0byBwcmV2ZW50IEFMVCBhbHdheXMgcHJlc3NlZCBhZnRlciBBTFQrVEFCXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZha2VFdmVudChrZXk6IHN0cmluZykge1xyXG4gICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgY29kZTogXCJcIixcclxuICAgICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgICAgYWx0S2V5OiBmYWxzZSxcclxuICAgICAgZ2V0TW9kaWZpZXJTdGF0ZTogKCk9PmZhbHNlLFxyXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCk9PmZhbHNlXHJcbiAgIH0gYXMgYW55IGFzIEtleWJvYXJkRXZlbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBLZXlCb2FyZF9DNjRFdmVudCB7XHJcbiAgIHR5cGU6IFwicHJlc3NcInxcInJlbGVhc2VcIjtcclxuICAgaGFyZHdhcmVfa2V5czogbnVtYmVyW107XHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXI6IEtleUJvYXJkX0M2NEV2ZW50W10gPSBbXTtcclxuLy9sZXQga2V5X3ByZXNzZWQgPSBbXTtcclxubGV0IGtleV9wcmVzc19tYXA6IHtba2V5OnN0cmluZ106IG51bWJlcltdfSA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2tleWJvYXJkKCkge1xyXG5cclxuICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKTtcclxuXHJcbiAgIGtleXMuZm9yRWFjaChrPT57XHJcbiAgICAgIC8vY29uc29sZS5sb2coYGNsZWFyaW5nICR7a31gKTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czoga2V5X3ByZXNzX21hcFtrXSB9KTtcclxuICAgICAgZGVsZXRlIGtleV9wcmVzc19tYXBba107XHJcbiAgIH0pO1xyXG5cclxuICAga2V5X3ByZXNzX21hcCA9IHt9OyAgXHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXJfZW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxfa2V5Ym9hcmQoKSB7XHJcbiAgIC8vIHBvbGwga2V5Ym9hcmRcclxuICAgd2hpbGUoa2V5Ym9hcmRfYnVmZmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGtleV9ldmVudCA9IGtleWJvYXJkX2J1ZmZlclswXTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyID0ga2V5Ym9hcmRfYnVmZmVyLnNsaWNlKDEpO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXJfZW1wdHkgPSBrZXlib2FyZF9idWZmZXIubGVuZ3RoID09IDA7XHJcblxyXG4gICAgICBpZihrZXlfZXZlbnQudHlwZSA9PT0gXCJwcmVzc1wiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoazogbnVtYmVyKSA9PiBjNjQua2V5X2Rvd24oaykpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoa2V5X2V2ZW50LnR5cGUgPT09IFwicmVsZWFzZVwiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4gYzY0LmtleV91cChrKSk7XHJcbiAgICAgICAgIGlmKGtleWJvYXJkX2J1ZmZlcl9lbXB0eSAmJiAhY29udHJvbF9wcmVzc2VkICYmICFhbHRfcHJlc3NlZCAmJiAhc2hpZnRfcHJlc3NlZCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IHQ9MDt0PDI1Njt0KyspIGM2NC5rZXlfdXAodCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiLypcclxuICAgICA3ICAgNiAgIDUgICA0ICAgMyAgIDIgICAxICAgMFxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICA3fCBGNyAgRjUgIEYzICBGMSAgQ0ROIENSVCBSRVQgREVMICAgIENSVD1DdXJzb3ItUmlnaHQsIENETj1DdXJzb3ItRG93blxyXG4gICB8XHJcbiAgNnwgSE9NIFVBICA9ICAgUlNIIC8gICA7ICAgKiAgIEJQICAgICBCUD1Ccml0aXNoIFBvdW5kLCBSU0g9U2hvdWxkIGJlIFJpZ2h0LVNISUZULFxyXG4gICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUE9VXAgQXJyb3dcclxuICA1fCAtICAgQCAgIDogICAuICAgLCAgIEwgICBQICAgK1xyXG4gICB8XHJcbiAgNHwgMCAgIE8gICBLICAgTSAgIE4gICBKICAgSSAgIDlcclxuICAgfFxyXG4gIDN8IDggICBVICAgSCAgIEIgICBWICAgRyAgIFkgICA3XHJcbiAgIHxcclxuICAyfCA2ICAgVCAgIEYgICBDICAgWCAgIEQgICBSICAgNVxyXG4gICB8XHJcbiAgMXwgNCAgIEUgICBTICAgWiAgIExTSCBBICAgVyAgIDMgICAgICBMU0g9U2hvdWxkIGJlIExlZnQtU0hJRlRcclxuICAgfFxyXG4gIDB8IDIgICBRICAgQ0JNIFNQQyBTVFAgQ1RMIExBICAxICAgICAgTEE9TGVmdCBBcnJvdywgQ1RMPVNob3VsZCBiZSBDVFJMLCBTVFA9UlVOL1NUT1BcclxuICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENCTT1Db21tb2RvcmUga2V5XHJcblxyXG4gICAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGNvZGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHNoaWZ0OiBib29sZWFuLCBjb250cm9sOiBib29sZWFuLCBjYm06IGJvb2xlYW4sIGFsdGdyYXBoOiBib29sZWFuKSB7XHJcbiAgIC8vY29uc29sZS5sb2coY29kZSwga2V5LCBlKTtcclxuICAgLy9jb25zb2xlLmxvZyhlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpKTtcclxuXHJcbiAgIGxldCBoYXJkd2FyZV9rZXlzID0gW107XHJcblxyXG4gICBpZihrZXkgPT09IFwiMVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIxXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIyXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiM1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIzXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI0XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI1XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI2XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiN1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI3XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI4XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI5XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIwXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiIVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIhXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09ICdcIicpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAnXCInLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIn5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiRcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIlXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiVcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCImXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiZcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIvXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIihcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIpXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIilcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI9XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCInXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIidcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI/XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJeXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJbXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIltcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJdXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCsFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJbXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwqdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIitcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiK1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIipcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsOnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJAXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI8XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjxcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI+XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIixcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI7XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjtcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI6XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjpcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCItXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJxXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInFcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIndcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwid1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJlXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJyXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInJcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ5XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ1XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInVcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImlcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiaVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwib1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJvXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInBcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiYVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwic1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJzXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImRcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJnXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImhcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwialwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwia1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJrXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImxcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwielwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ4XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImNcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiYlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJiXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm5cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwibVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJRXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJXXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIldcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJSXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJUXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlRcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIllcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiVVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJVXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJJXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIklcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiT1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJQXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJBXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkFcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiU1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJEXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJGXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiR1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiSFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJIXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJKXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIktcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiS1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJMXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJaXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJDXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJWXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJOXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJNXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk1cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuXHJcbiAgIGlmKGtleSA9PT0gXCJfXCIpICAgICAgICAgeyBoYXJkd2FyZV9rZXlzLnB1c2goIDY0KTsgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICB9ICAvLyBzaW11bGF0ZSB1bmRlcnNjb3JlXHJcblxyXG4gICAvLyBGS0VZU1xyXG4gICBpZihjb2RlID09PSBcIkYxXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjEgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGMlwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYyICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjNcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMyApO1xyXG4gICBpZihjb2RlID09PSBcIkY0XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjQgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNVwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY1ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjZcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNiApO1xyXG4gICBpZihjb2RlID09PSBcIkY3XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjcgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGOFwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY4ICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIlNwYWNlXCIpICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MjAgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwOCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA5ICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93RG93blwiKSAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MGEgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dVcFwiKSAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwYiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRGVsZXRlXCIpICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJJbnNlcnRcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDEwICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgxMCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAhc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRW50ZXJcIikgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJOdW1wYWRFbnRlclwiKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBEICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAzICApOyAgLy8gcnVuIHN0b3BcclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIiAmJiBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA3ICApOyAgLy8gc2hpZnQgKyBydW4gc3RvcFxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwQyAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIgJiYgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiQmFja3F1b3RlXCIpICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDQgICk7ICAvLyBsZWZ0IGFycm93XHJcblxyXG4gICBpZihjb250cm9sICYmICFhbHRncmFwaCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgLy9pZihjYm0pICAgICAgICAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFbmRcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcblxyXG4gICAvKlxyXG4gICBpZihjb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTtcclxuICAgaWYoY29kZSA9PT0gXCJUYWJcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgKi9cclxuXHJcbiAgIGlmKChjb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIgfHwgY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgJiYgIWFsdGdyYXBoKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgaWYoKGNvZGUgPT09IFwiQWx0TGVmdFwiIHx8IGNvZGUgPT0gXCJBbHRSaWdodFwiKSkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJQYWdlVXBcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEZGICk7ICAvLyBlbXVsYXRlIFJFU1RPUkVcclxuICAgaWYoY29kZSA9PT0gXCJQYWdlRG93blwiKSAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAzNSApOyAgICAvLyBcIiNcIlxyXG5cclxuICAgcmV0dXJuIGhhcmR3YXJlX2tleXM7XHJcbn1cclxuIiwiLy9cclxuLy8gZnVuY3Rpb25zIG9yaWdpbmFsbHkgY29waWVkIGZyb20gaHR0cHM6Ly93d3cubWRhd3Nvbi5uZXQvdmljMjBjaHJvbWUvdmljMjAucGhwXHJcbi8vIGFuZCBhZGFwdGVkIGZvciB0aGlzIGVtdWxhdG9yXHJcbi8vXHJcblxyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5mdW5jdGlvbiBiaW5Ub0FycmF5KGRhdGE6IHN0cmluZykge1xyXG4gICBsZXQgYmluY29kZXMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LiFcIjtcclxuICAgdmFyIHY9MCxjbnQ9MCxvdXQ9W10saWk9MDtcclxuICAgZm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspIHtcclxuICAgICAgdis9YmluY29kZXMuaW5kZXhPZihkYXRhW2ldKTw8Y250O1xyXG4gICAgICBjbnQrPTY7XHJcbiAgICAgIGlmKGNudD49OCkge1xyXG4gICAgICAgICBvdXRbaWkrK109KHYmMjU1KTtcclxuICAgICAgICAgY250LT04O1xyXG4gICAgICAgICB2Pj49ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlcm5hbExvYWQoY21kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN1YmZpbGU/OiBzdHJpbmcpIHtcdFxyXG5cdGNvbnNvbGUubG9nKFwiZXh0ZXJuYWxMb2FkIGNtZD1cIitjbWQrXCIgdXJsPVwiK3VybCtcIiBmb3JtYXQ9XCIrZm9ybWF0K1wiIHN1YmZpbGU9XCIrc3ViZmlsZSk7XHJcblx0dmFyIGhlYWQ9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcblx0dmFyIHNjcmlwdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnR5cGU9ICd0ZXh0L2phdmFzY3JpcHQnO1x0XHJcblx0c2NyaXB0LnNyYz0gJ2h0dHBzOi8vd3d3Lm1kYXdzb24ubmV0L3ZpYzIwY2hyb21lL3ZpYzIwL3ByZ3RvanNsb2FkZXIucGhwP2NtZD0nK2NtZCsnJnByZ3VybD0nK3VybCsnJnN1YmZpbGU9JytzdWJmaWxlO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5cclxuKHdpbmRvdyBhcyBhbnkpLm1kYXdzb25fbG9hZEJ5dGVzID0gbG9hZEJ5dGVzO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBtZGF3c29uX2xvYWRCeXRlcyhzcmM6IFVpbnQ4QXJyYXkpOiB2b2lkO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmxvYWRQcmc9IGZ1bmN0aW9uKHNyYzogYW55KSB7ICAgXHJcbiAgIGlmKHNyYy5sZW5ndGggIT09IDEpIHJldHVybjtcclxuXHJcbiAgIGxldCBiaW4gPSBiaW5Ub0FycmF5KHNyY1swXSk7XHJcbiAgIFxyXG4gICBtZGF3c29uX2xvYWRCeXRlcyhuZXcgVWludDhBcnJheShiaW4pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcbmltcG9ydCB7IGV4dGVybmFsTG9hZCB9IGZyb20gXCIuL21kYXdzb25cIjtcclxuaW1wb3J0IHsgdmlkZW90ZWwgfSBmcm9tIFwiLi9jYm1fNjQ5OS9jYm1fNjQ5OVwiO1xyXG5cclxudHlwZSBRdWVyeVN0cmluZ09iamVjdCA9IHtba2V5OiBzdHJpbmddOnN0cmluZ307XHJcblxyXG5mdW5jdGlvbiBnZXRRdWVyeVN0cmluZ09iamVjdCgpIHtcclxuICAgbGV0IGEgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiJlwiKTtcclxuICAgbGV0IG8gPSBhLnJlZHVjZSgobzogUXVlcnlTdHJpbmdPYmplY3QsIHYpID0+e1xyXG4gICAgICB2YXIga3YgPSB2LnNwbGl0KFwiPVwiKTtcclxuICAgICAgY29uc3Qga2V5ID0ga3ZbMF0ucmVwbGFjZShcIj9cIiwgXCJcIik7XHJcbiAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0ga3ZbMV07XHJcbiAgICAgIG9ba2V5XSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gbztcclxuICAgfSwge30pO1xyXG4gICByZXR1cm4gbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcygpIHtcclxuICAgbGV0IG9wdGlvbnMgPSBnZXRRdWVyeVN0cmluZ09iamVjdCgpOyAgXHJcblxyXG4gICBpZihvcHRpb25zLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGM2NC5jb25maWcoTnVtYmVyKG9wdGlvbnMuY29uZmlnKSk7XHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuam95ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYzY0LmVtdV9qb3koTnVtYmVyKG9wdGlvbnMuam95KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb3lzdGljayBlbXVsYXRpb24gJHtOdW1iZXIob3B0aW9ucy5qb3kpIT0wP1wiZW5hYmxlZFwiOlwiZGlzYWJsZWRcIn1gKTtcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5sb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgaWYobmFtZS5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAvLyBleHRlcm5hbCBsb2FkXHJcbiAgICAgICAgIGV4dGVybmFsTG9hZChcImxvYWRQcmdcIiwgbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIGludGVybmFsIGxvYWRcclxuICAgICAgICAgYXdhaXQgZmV0Y2hQcm9ncmFtKG5hbWUpO1xyXG4gICAgICB9ICAgXHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuY2JtNjQ5OSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZpZGVvdGVsLmFkZHJlc3MgPSBvcHRpb25zLndzdGNwID8/IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MVwiOyAgICAgIFxyXG4gICAgICB2aWRlb3RlbC5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgPz8gXCJiYnNcIjtcclxuICAgICAgYzY0LnNldF9leHJvbSh0cnVlKTtcclxuICAgICAgYzY0LnNldF9lbXVsYXRlX2NibV82NDk5KHRydWUpOyBcclxuICAgICAgYzY0LnJlc2V0KCk7ICAgICBcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgQkJTQ29ubmVjdG9yIH0gZnJvbSBcIi4vYmJzX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQgeyBzdHJpbmcyVWludDhBcnJheSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5sZXQgbW9kZW1fdHJhbnNtaXRfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG5sZXQgbW9kZW1fcmVjZWl2ZV9idWZmZXI6IG51bWJlcltdID0gW107XHJcblxyXG5jb25zdCBNT0RFTV9EQVRBX09VVCA9IDB4RDdGMjtcclxuY29uc3QgTU9ERU1fREFUQV9JTiAgPSAweEQ3RjA7XHJcbmNvbnN0IE1PREVNX0RBVEFfUkVRID0gMHhEN0YzO1xyXG5jb25zdCBNT0RFTV9BQ0sgICAgICA9IDB4RDdGMTtcclxuY29uc3QgTU9ERU1fQ09OTlNUICAgPSAweEQ3RjQ7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgcmVhZHMgaW4gdGhlIHJhbmdlICREN0YwLSREN0ZGXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbV9yZWFkKGFkZHI6IG51bWJlcilcclxue1xyXG4gICBpZihhZGRyID09IE1PREVNX0RBVEFfSU4pIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiBtb2RlbV9yZWNlaXZlX2J1ZmZlclswXTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGFkZHIgPT0gTU9ERU1fREFUQV9SRVEpIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiAyNTU7XHJcbiAgIH1cclxuICAgZWxzZSBpZihhZGRyID09IE1PREVNX0NPTk5TVCkge1xyXG4gICAgICBpZighcGV0c2NpaS5jb25uZWN0ZWQpIHJldHVybiAyO1xyXG4gICAgICBlbHNlIHJldHVybiAwO1xyXG4gICB9XHJcbn1cclxuXHJcbmxldCBtb2RlbV9zdGF0ZSA9IDA7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIGluIHRoZSByYW5nZSAkRDdGMC0kRDdGRlxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1fd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkcj09TU9ERU1fQUNLKVxyXG4gICB7XHJcbiAgICAgIGlmKGRhdGE9PTApIHtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGRhdGE9PTEgJiYgbW9kZW1fc3RhdGU9PTApIHtcclxuICAgICAgICAgbW9kZW1fcmVjZWl2ZV9idWZmZXIgPSBtb2RlbV9yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgaWYoYWRkcj09TU9ERU1fREFUQV9PVVQpIHtcclxuICAgICAgbW9kZW1fdHJhbnNtaXRfYnVmZmVyLnB1c2goZGF0YSk7XHJcbiAgICAgIHBldHNjaWkuc2VuZF9kYXRhX3RvX2Jicyhtb2RlbV90cmFuc21pdF9idWZmZXIpO1xyXG4gICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIgPSBbXTtcclxuICAgICAgaWYoIXBldHNjaWkuY29ubmVjdGVkKSBwZXRzY2lpLmNvbm5lY3QoKTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgbGV0IHBldHNjaWkgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG5wZXRzY2lpLm9uX2Vycm9yID0gKGVycik9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgcHJpbnRtKGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IEVSUk9SIENPTk5FQ1RJTkcgVE8gV0VCU09DS0VUXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX29wZW4gPSAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3RlZCcpO1xyXG4gICAvLyBwcmludG0oYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gQ09OTkVDVEVEXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICBjb25zb2xlLmxvZygnQkJTOiBkaXNjb25uZWN0ZWQnKTsgICAgICBcclxufTtcclxuXHJcbnBldHNjaWkub25fZGF0YSA9IChieXRlcykgPT4ge1xyXG4gICBieXRlcy5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59O1xyXG4gICBcclxuZnVuY3Rpb24gcHJpbnRtKG1zZzogc3RyaW5nKSB7XHJcbiAgIGxldCBkYXRhID0gc3RyaW5nMlVpbnQ4QXJyYXkobXNnKTtcclxuICAgZGF0YS5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59IiwiLyoqKiogdXRpbGl0eSBmdW5jdGlvbnMgKioqKi9cclxuXHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleCh2YWx1ZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gMjtcclxuICAgbGV0IHMgPSBcIjAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlTGluZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICBmb3IobGV0IHQ9MDsgdDxsaW5lcy5sZW5ndGg7IHQrKykge1xyXG4gICAgICBjb25zdCBsaW5lYSA9IGxpbmVzW3RdO1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lYSk7XHJcbiAgICAgIHBhc3RlKGxpbmVhKTtcclxuICAgICAgcGFzdGVDaGFyKDEzKTsgICAvLyBDUlxyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKFwicGFzdGVkIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlKGxpbmU6IHN0cmluZykge1xyXG5cclxuICAgZm9yKGxldCB0PTA7dDxsaW5lLmxlbmd0aDt0KyspIHtcclxuICAgICAgbGV0IGMgPSBsaW5lLmNoYXJDb2RlQXQodCk7XHJcbiAgICAgIHBhc3RlQ2hhcihjKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXN0ZUNoYXIoYzogbnVtYmVyKSB7XHJcbiAgIHdoaWxlKGM2NC5wZWVrKDE5OCkgIT09IDApIHtcclxuICAgICAgYzY0LmV4KDE2MDAwKTtcclxuICAgfVxyXG4gICBjNjQucG9rZSg2MzEsYyk7XHJcbiAgIGM2NC5wb2tlKDE5OCwxKTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZHVtcE1lbShzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGlmKGVuZD09dW5kZWZpbmVkKSBlbmQ9c3RhcnQrMTU7XHJcbiAgIGlmKHJvd3M9PXVuZGVmaW5lZCkgcm93cz0xNjtcclxuICAgbGV0IHM9XCJcXHJcXG5cIjtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBoZXgociwgNCkgKyBcIjogXCI7ICAgICAgXHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSAoYnl0ZT4zMiAmJiBieXRlPDEyNykgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpIDogJy4nIDtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhEdW1wKG1lbW9yeSwgc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcz1cIlwiO1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjxlbmQ7cis9cm93cykge1xyXG4gICAgICBzKz0gaGV4KHIsIDQpICsgXCI6IFwiOyAgICAgIFxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IChieXRlPjMyICYmIGJ5dGU8MTI3KSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkgOiAnLicgO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgIH1cclxuICAgcmV0dXJuIHM7XHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBiaW4odmFsdWUsIHNpemUpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gODtcclxuICAgbGV0IHMgPSBcIjAwMDAwMDAwMDAwMDAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDIpO1xyXG4gICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3B1X3N0YXR1cygpIHtcclxuICAgY29uc3Qgc3RhdGUgPSBjcHUuZ2V0U3RhdGUoKTtcclxuICAgcmV0dXJuIGBBPSR7aGV4KHN0YXRlLmEpfSBCQz0ke2hleChzdGF0ZS5iKX0ke2hleChzdGF0ZS5jKX0gREU9JHtoZXgoc3RhdGUuZCl9JHtoZXgoc3RhdGUuZSl9IEhMPSR7aGV4KHN0YXRlLmgpfSR7aGV4KHN0YXRlLmwpfSBJWD0ke2hleChzdGF0ZS5peCw0KX0gSVk9JHtoZXgoc3RhdGUuaXksNCl9IFNQPSR7aGV4KHN0YXRlLnNwLDQpfSBQQz0ke2hleChzdGF0ZS5wYyw0KX0gUz0ke3N0YXRlLmZsYWdzLlN9LCBaPSR7c3RhdGUuZmxhZ3MuWn0sIFk9JHtzdGF0ZS5mbGFncy5ZfSwgSD0ke3N0YXRlLmZsYWdzLkh9LCBYPSR7c3RhdGUuZmxhZ3MuWH0sIFA9JHtzdGF0ZS5mbGFncy5QfSwgTj0ke3N0YXRlLmZsYWdzLk59LCBDPSR7c3RhdGUuZmxhZ3MuQ31gOyAgIFxyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gd2FpdCh0aW1lKSB7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0aW1lKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHphcCgpIHsgICAgICAgICAgICBcclxuICAgcmFtLmZvckVhY2goKGUsaSk9PnJhbVtpXT0weDAwKTtcclxuICAgbGV0IHN0YXRlID0gY3B1LmdldFN0YXRlKCk7XHJcbiAgIHN0YXRlLmhhbHRlZCA9IHRydWU7XHJcbiAgIGNwdS5zZXRTdGF0ZShzdGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvd2VyKCkgeyAgICAgIFxyXG4gICB6YXAoKTtcclxuICAgc2V0VGltZW91dCgoKT0+Y3B1LnJlc2V0KCksIDIwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3AoKSB7ICAgXHJcbiAgIHN0b3BBdWRpbygpO1xyXG4gICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gc3RvcHBlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ28oKSB7XHJcbiAgIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgb25lRnJhbWUoKTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gcmVzdW1lZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mbygpIHtcclxuICAgY29uc3QgYXZlcmFnZSA9IGF2ZXJhZ2VGcmFtZVRpbWUvMTAwMDtcclxuICAgY29uc29sZS5sb2coYGZyYW1lIHJhdGU6IGF2ZXJhZ2UgJHtNYXRoLnJvdW5kKGF2ZXJhZ2UqMTAsMikvMTB9IG1zICgke01hdGgucm91bmQoMS9hdmVyYWdlKjEwMDApfSBIeilgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgfCAoMTw8Yml0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgJiB+KDE8PGJpdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQodmFsdWUsIGJpdG1hc2spIHtcclxuICAgcmV0dXJuIHZhbHVlIHwgYml0bWFzazsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zZWMpIHtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgc2V0VGltZW91dCgoKT0+cmVzb2x2ZSgpLCBtc2VjKTtcclxuICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNldCh2YWx1ZSwgYml0bWFzaykge1xyXG4gICByZXR1cm4gdmFsdWUgJiAoMHhGRiBeIGJpdG1hc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkdW1wUG9pbnRlcnMoKSB7XHJcbiAgIGNvbnNvbGUubG9nKGBcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gICgweCR7aGV4KFBST0dORCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoUFJPR05EKSw0KX1cclxuICAgfCAgICAgQkFTSUMgcHJvZ3JhbSAgICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gVFhUVEFCICgweCR7aGV4KEJBU1RYVCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoQkFTVFhUKSw0KX1cclxuICAgfCAgICBTeXN0ZW0gdmFyaWFibGVzICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgMHg4MDAwXHJcbmApO1xyXG59XHJcblxyXG5sZXQgZGVidWdCZWZvcmUgPSB1bmRlZmluZWQ7XHJcbmxldCBkZWJ1Z0FmdGVyID0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gYml0KGIsbikge1xyXG4gICByZXR1cm4gKGIgJiAoMTw8bikpPjAgPyAxIDogMDtcclxufSBcclxuXHJcbmZ1bmN0aW9uIG5vdF9iaXQoYixuKSB7XHJcbiAgIHJldHVybiAoYiAmICgxPDxuKSk+MCA/IDAgOiAxO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZHVtcFN0YWNrKCkge1xyXG4gICBjb25zdCBzcCA9IGNwdS5nZXRTdGF0ZSgpLnNwO1xyXG5cclxuICAgZm9yKGxldCB0PXNwO3Q8PTB4ZmZmZjt0Kz0yKSB7XHJcbiAgICAgIGNvbnN0IHdvcmQgPSBtZW1fcmVhZF93b3JkKHQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtoZXgodCw0KX06ICR7aGV4KHdvcmQsNCl9ICAoJHt3b3JkfSlgKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmRzV2l0aChzLCB2YWx1ZSkge1xyXG4gICByZXR1cm4gcy5zdWJzdHIoLXZhbHVlLmxlbmd0aCkgPT09IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBkZXN0KSB7XHJcbiAgIHNvdXJjZS5mb3JFYWNoKChlLGkpPT5kZXN0W2ldID0gZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VfbG0oc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcztcclxuICAgcyA9IGAxMCBGT1IgVD0mSCR7aGV4KHN0YXJ0LDQpfSBUTyAmSCR7aGV4KGVuZCw0KX1cXG5gO1xyXG4gICBzKz0gYDIwIFJFQUQgQjpQT0tFIFQsQlxcbmA7XHJcbiAgIHMrPSBgMzAgTkVYVFxcbmA7XHJcbiAgIHMrPSBgNDAgU1lTICZIJHtoZXgoc3RhcnQsNCl9XFxuYDtcclxuICAgcys9IGA1MCBFTkRcXG5gO1xyXG4gICBsZXQgbmxpbmUgPSAxMDAwO1xyXG4gICBpZihyb3dzPT11bmRlZmluZWQpIHJvd3M9ODtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBgJHtubGluZX0gREFUQSBgO1xyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSBgJHtieXRlfWA7XHJcbiAgICAgICAgIGlmKGMhPXJvd3MtMSAmJiAocitjKSE9ZW5kKSBzKz1cIixcIjtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICAgICBubGluZSArPSAxMDtcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG1yKClcclxue1xyXG4gICByZXR1cm4gbWVtX3JlYWRfd29yZChUTVJDTlQpICsgKG1lbV9yZWFkX3dvcmQoVE1SQ05UKzIpIDw8IDE2KTtcclxufVxyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5sZXQgY291bnRlcl9hdmcgPSAwO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRfY291bnRlcigpIHtcclxuICAgY291bnRlciA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wX2NvdW50ZXIoKSB7XHJcbiAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgbGV0IGNudCA9IGNvdW50ZXI7XHJcbiAgIGlmKGNudCA9PT0gMCkgY250ID0gbm93XHJcbiAgIGxldCBlbGFwc2VkID0gbm93IC0gY250OyAgIFxyXG4gICBjb3VudGVyX2F2ZyA9IDAuOSAqIGNvdW50ZXJfYXZnICsgMC4xICogZWxhcHNlZDtcclxuICAgcmV0dXJuIGNvdW50ZXJfYXZnO1xyXG59XHJcblxyXG5sZXQgTEVEID0gMDtcclxuZnVuY3Rpb24gbGVkX3JlYWQoKSB7XHJcbiAgIHJldHVybiBMRUQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZF93cml0ZSh2YWx1ZSkge1xyXG4gICBMRUQgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8gbWFrZSBhIGxvbmcgdXJsIGZyb20gYW4gZXhpc3Rpbmcgc2F2ZWQgcHJvZ3JhbVxyXG5hc3luYyBmdW5jdGlvbiBtYWtlQmFzZTY0KGZpbGVOYW1lKSB7XHJcbiAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZEZpbGUoZmlsZU5hbWUpO1xyXG4gICBsZXQgbG9uZ191cmwgPSB3aW5kb3cuYnRvYShieXRlcyk7XHJcbiAgIGNvbnNvbGUubG9nKGBodHRwczovL25pcHB1cjcyLmdpdGh1Yi5pby9jNjQtZW11P2I9JHtsb25nX3VybH1gKTtcclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZzJVaW50OEFycmF5KHN0cjogc3RyaW5nKSB7XHJcbiAgIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgIGZvcihsZXQgdD0wOyB0PHN0ci5sZW5ndGg7IHQrKylcclxuICAgICAgYXJyLnB1c2goc3RyLmNoYXJDb2RlQXQodCkgJiAweEZGKTtcclxuXHJcbiAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyU3RyaW5nKGRhdGE6IG51bWJlcltdKSB7XHJcbiAgIGxldCBzdHIgPSBcIlwiO1xyXG5cclxuICAgZm9yKHZhciBpbmRleD0wOyBpbmRleDxkYXRhLmxlbmd0aDsgaW5kZXgrKylcclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpbmRleF0pO1xyXG5cclxuICAgcmV0dXJuIHN0cjtcclxufSIsImltcG9ydCB7IGdldF93YXNtX2luc3RhbmNlIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG4vLyBnb29kIHZhbHVlcyBmb3IgQ1JUIFBBTFxyXG5jb25zdCBTQ1JFRU5fVyA9IDM5MjtcclxuY29uc3QgU0NSRUVOX0ggPSAyNzI7XHJcbmNvbnN0IFBPU19YID0gMyo4O1xyXG5jb25zdCBQT1NfWSA9IDMqODtcclxuY29uc3QgUElYRUxfV0lEVEggPSAyO1xyXG5cclxuLypcclxuLy8gdmFsdWVzIGZvciBkZWJ1Z1xyXG5sZXQgU0NSRUVOX1cgPSAyODQ7XHJcbmxldCBTQ1JFRU5fSCA9IDMxMjtcclxubGV0IFBPU19YID0gMDtcclxubGV0IFBPU19ZID0gMDtcclxuKi9cclxuXHJcbmxldCBzYXR1cmF0aW9uID0gMS4wO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUdlb21ldHJ5KCkge1xyXG4gICAvLyBjYW52YXMgaXMgdGhlIG91dGVyIGNhbnZhcyB3aGVyZSB0aGUgYXNwZWN0IHJhdGlvIGlzIGNvcnJlY3RlZFxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGNhbnZhcy53aWR0aCAgPSBTQ1JFRU5fVyAqIFBJWEVMX1dJRFRIIC0gKFBPU19YKlBJWEVMX1dJRFRIKTtcclxuICAgY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IICogUElYRUxfV0lEVEggLSAoUE9TX1kqUElYRUxfV0lEVEgpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKlxyXG5sZXQgV1cgPSAyMzI7XHJcbmxldCBISCA9IDI3MjtcclxuKi9cclxuXHJcbmxldCBXVyA9IFNDUkVFTl9XO1xyXG5sZXQgSEggPSBTQ1JFRU5fSDtcclxuXHJcbmxldCB2aWNfaWlfY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCB2aWNfaWlfY29udGV4dCA9IHZpY19paV9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmRwX3NjcmVlbl91cGRhdGUocHRyOiBudW1iZXIpIHtcclxuICAgLypcclxuICAgLy8gMSBwaXhlbCB3aWRlIHZlcnNpb25cclxuICAgbGV0IHNpemUxID0gV1cqSEgqNDtcclxuICAgY29uc3QgaGVhcCA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFU4LnN1YmFycmF5KHB0cixwdHIrc2l6ZTEpO1xyXG4gICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGhlYXApOyAgICAgICBcclxuICAgY29uc3QgaW1nID0gbmV3IEltYWdlRGF0YShkYXRhLCBXVywgSEgpO1xyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKGltZywgMCwgMCk7ICAgXHJcbiAgIHJldHVybjtcclxuICAgKi9cclxuICAgICBcclxuICAgLy8gMiBwaXhlbCB3aWRlIHZlcnNpb25cclxuICAgbGV0IHNpemUxID0gV1cqSEgqNCpQSVhFTF9XSURUSCpQSVhFTF9XSURUSDtcclxuICAgY29uc3QgaGVhcCA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFU4LnN1YmFycmF5KHB0cixwdHIrc2l6ZTEpO1xyXG4gICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGhlYXApOyAgICAgICBcclxuICAgY29uc3QgaW1nID0gbmV3IEltYWdlRGF0YShkYXRhLCBXVypQSVhFTF9XSURUSCwgSEgqUElYRUxfV0lEVEgpO1xyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKGltZywgLVBPU19YLCAtUE9TX1kpOyAgIFxyXG59XHJcblxyXG4vKlxyXG5cclxuLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcblxyXG5sZXQgdmljX2lpX2ltYWdlRGF0YSA9IHZpY19paV9jb250ZXh0IS5jcmVhdGVJbWFnZURhdGEoV1cqMiwgSEgqMik7XHJcbmxldCBibXAgPSBuZXcgVWludDMyQXJyYXkodmljX2lpX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmRwX3NjcmVlbl91cGRhdGVfb2xkKHB0cjogbnVtYmVyKSB7ICAgXHJcbiAgIGxldCBzdGFydCA9IHB0ciAvIGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgbGV0IHNpemUgPSBXVypISDtcclxuICAgbGV0IGJ1ZmZlciA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5zdWJhcnJheShzdGFydCxzdGFydCtzaXplKTsgICBcclxuXHJcbiAgIGxldCBwdHIwID0gMDtcclxuICAgbGV0IHB0cjEgPSAwO1xyXG4gICBsZXQgcHRyMiA9IFdXKjI7ICAgXHJcblxyXG4gICBmb3IobGV0IHk9MDt5PEhIO3krKykge1xyXG4gICAgICBmb3IobGV0IHg9MDt4PFdXO3grKykge1xyXG4gICAgICAgICBsZXQgcGl4ZWwgPSBidWZmZXJbcHRyMF07XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIHB0cjArKztcclxuICAgICAgfVxyXG4gICAgICBwdHIxICs9IFdXKjI7XHJcbiAgICAgIHB0cjIgKz0gV1cqMjtcclxuICAgfVxyXG4gICBcclxuICAgLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcbiAgIC8vdmljX2lpX2ltYWdlRGF0YS5kYXRhLnNldChpbWFnZWRhdGFfYnVmOCk7XHJcbiAgIC8vdmljX2lpX2NvbnRleHQucHV0SW1hZ2VEYXRhKHZpY19paV9pbWFnZURhdGEsIC1QT1NfWCwgLVBPU19ZKTtcclxuICAgXHJcbiAgIC8vIG5ldyBtZXRob2RcclxuICAgdmljX2lpX2NvbnRleHQhLnB1dEltYWdlRGF0YSh2aWNfaWlfaW1hZ2VEYXRhLCAtUE9TX1gsIC1QT1NfWSk7XHJcblxyXG4gICAvL2ZyYW1lcysrO1xyXG4gICAvL2lmKGVuZF9vZl9mcmFtZV9ob29rICE9PSB1bmRlZmluZWQpIGVuZF9vZl9mcmFtZV9ob29rKCk7XHJcbn1cclxuKi9cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgbG9hZF93YXNtIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9lbXVsYXRvclwiO1xyXG5pbXBvcnQgeyB2ZHBfc2NyZWVuX3VwZGF0ZSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IGF1ZGlvX2J1Zl9yZWFkeSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbi8vaW1wb3J0IHsgbG9hZFByZyB9IGZyb20gXCIuL21kYXdzb25cIjtcclxuaW1wb3J0IHsgbW9kZW1fcmVhZCwgbW9kZW1fd3JpdGUgfSBmcm9tIFwiLi9wZXRzY2lpX2Jic1wiO1xyXG5pbXBvcnQgeyBjYm1fNjQ5OV93cml0ZSwgY2JtXzY0OTlfcmVhZCwgY2JtXzY0OTlfcmVzZXQgfSBmcm9tIFwiLi9jYm1fNjQ5OS9jYm1fNjQ5OVwiO1xyXG5pbXBvcnQgeyBzYXZlX2ZpbGUgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuaW1wb3J0IFwiLi9icm93c2VyXCI7XHJcblxyXG4vLyBwdWJsaXNoIG9uIGdsb2JhbFxyXG4od2luZG93IGFzIGFueSkudmRwX3NjcmVlbl91cGRhdGUgPSB2ZHBfc2NyZWVuX3VwZGF0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLmF1ZGlvX2J1Zl9yZWFkeSA9IGF1ZGlvX2J1Zl9yZWFkeTtcclxuLy8od2luZG93IGFzIGFueSkubG9hZFByZyA9IGxvYWRQcmc7XHJcbih3aW5kb3cgYXMgYW55KS5tb2RlbV9yZWFkID0gbW9kZW1fcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLm1vZGVtX3dyaXRlID0gbW9kZW1fd3JpdGU7XHJcbih3aW5kb3cgYXMgYW55KS5zYXZlX2ZpbGUgPSBzYXZlX2ZpbGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfcmVzZXQgPSBjYm1fNjQ5OV9yZXNldDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3JlYWQgID0gY2JtXzY0OTlfcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3dyaXRlID0gY2JtXzY0OTlfd3JpdGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuYzY0ID0gYzY0O1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICBhd2FpdCBsb2FkX3dhc20oKTtcclxuICAgbWFpbigpOyAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=