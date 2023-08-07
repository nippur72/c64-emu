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

var Module=typeof emscripten_module!="undefined"?emscripten_module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="emscripten_module.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! emscripten_module.wasm */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm"), __webpack_require__.b).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["d"];updateMemoryViews();wasmTable=Module["asm"]["D"];addOnInit(Module["asm"]["e"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}var ASM_CONSTS={71152:()=>{return cbm_6499_reset()},71181:($0,$1)=>{audio_buf_ready($0,$1)},71210:$0=>{vdp_screen_update($0)},71237:$0=>{vdp_screen_update($0)},71264:$0=>{vdp_screen_update($0)},71291:$0=>{return modem_read($0)},71318:($0,$1)=>{modem_write($0,$1)},71342:$0=>{return cbm_6499_read($0)},71372:($0,$1)=>{cbm_6499_write($0,$1)}};function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:HEAPF64[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var wasmImports={"a":___assert_fail,"b":_emscripten_asm_const_int,"c":_emscripten_memcpy_big};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["e"]).apply(null,arguments)};var _sys_init=Module["_sys_init"]=function(){return(_sys_init=Module["_sys_init"]=Module["asm"]["f"]).apply(null,arguments)};var _sys_config=Module["_sys_config"]=function(){return(_sys_config=Module["_sys_config"]=Module["asm"]["g"]).apply(null,arguments)};var _sys_reset=Module["_sys_reset"]=function(){return(_sys_reset=Module["_sys_reset"]=Module["asm"]["h"]).apply(null,arguments)};var _sys_exec=Module["_sys_exec"]=function(){return(_sys_exec=Module["_sys_exec"]=Module["asm"]["i"]).apply(null,arguments)};var _sys_exec_us=Module["_sys_exec_us"]=function(){return(_sys_exec_us=Module["_sys_exec_us"]=Module["asm"]["j"]).apply(null,arguments)};var _sys_ex=Module["_sys_ex"]=function(){return(_sys_ex=Module["_sys_ex"]=Module["asm"]["k"]).apply(null,arguments)};var _sys_vdp=Module["_sys_vdp"]=function(){return(_sys_vdp=Module["_sys_vdp"]=Module["asm"]["l"]).apply(null,arguments)};var _sys_key_down=Module["_sys_key_down"]=function(){return(_sys_key_down=Module["_sys_key_down"]=Module["asm"]["m"]).apply(null,arguments)};var _sys_key_up=Module["_sys_key_up"]=function(){return(_sys_key_up=Module["_sys_key_up"]=Module["asm"]["n"]).apply(null,arguments)};var _sys_quick_load=Module["_sys_quick_load"]=function(){return(_sys_quick_load=Module["_sys_quick_load"]=Module["asm"]["o"]).apply(null,arguments)};var _sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=function(){return(_sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=Module["asm"]["p"]).apply(null,arguments)};var _sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=function(){return(_sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=Module["asm"]["q"]).apply(null,arguments)};var _sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=function(){return(_sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=Module["asm"]["r"]).apply(null,arguments)};var _sys_joystick=Module["_sys_joystick"]=function(){return(_sys_joystick=Module["_sys_joystick"]=Module["asm"]["s"]).apply(null,arguments)};var _sys_set_joystick_type=Module["_sys_set_joystick_type"]=function(){return(_sys_set_joystick_type=Module["_sys_set_joystick_type"]=Module["asm"]["t"]).apply(null,arguments)};var _sys_insert_tape=Module["_sys_insert_tape"]=function(){return(_sys_insert_tape=Module["_sys_insert_tape"]=Module["asm"]["u"]).apply(null,arguments)};var _sys_remove_tape=Module["_sys_remove_tape"]=function(){return(_sys_remove_tape=Module["_sys_remove_tape"]=Module["asm"]["v"]).apply(null,arguments)};var _sys_tape_play=Module["_sys_tape_play"]=function(){return(_sys_tape_play=Module["_sys_tape_play"]=Module["asm"]["w"]).apply(null,arguments)};var _sys_tape_stop=Module["_sys_tape_stop"]=function(){return(_sys_tape_stop=Module["_sys_tape_stop"]=Module["asm"]["x"]).apply(null,arguments)};var _sys_cas_port=Module["_sys_cas_port"]=function(){return(_sys_cas_port=Module["_sys_cas_port"]=Module["asm"]["y"]).apply(null,arguments)};var _sys_set_exrom=Module["_sys_set_exrom"]=function(){return(_sys_set_exrom=Module["_sys_set_exrom"]=Module["asm"]["z"]).apply(null,arguments)};var _sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=function(){return(_sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=Module["asm"]["A"]).apply(null,arguments)};var _sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=function(){return(_sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=Module["asm"]["B"]).apply(null,arguments)};var _sys_set_external_irq=Module["_sys_set_external_irq"]=function(){return(_sys_set_external_irq=Module["_sys_set_external_irq"]=Module["asm"]["C"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module["asm"]["E"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module["asm"]["F"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["G"]).apply(null,arguments)};Module["ccall"]=ccall;Module["cwrap"]=cwrap;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


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
PIA.afterdialtone = () => videotel.connect();
// function called from C64 when the whole system is reset
function cbm_6499_reset() {
    PIA.reset();
}
// function called from C64 when CPU reads I/O in the range $DE00-DFFF
function cbm_6499_read(addr) {
    if (addr < 0xDF00)
        return PIA.read(addr);
    else
        return ACIA.cpu_read(addr);
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
        this.afterdialtone = () => { };
    }
    ring(value) {
        if (value)
            this.CRA = this.CRA | 0b10000000;
        else
            this.CRA = this.CRA & 0b01111111;
        //c64.set_external_irq(value);
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
        let PB5 = (this.PB >> 5) & 1;
        let old_PB5 = (data >> 5) & 1;
        if (PB5 === 0 && old_PB5 === 1) {
            // cancel old timer
            if (this.pb5_timer)
                clearTimeout(this.pb5_timer);
            this.pb5_timer = setTimeout(() => {
                this.afterdialtone();
                this.pb5_timer = undefined;
            }, 3000);
            debug("PIA: dialing...");
        }
        if ((this.PB & 128) !== (data & 128)) {
            // PB7 changed
            debug(`******** PB7: ${(data & 128) >> 7}`);
        }
        this.PB = data;
        debug(`PIA: set PB to $${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hex)(data, 2)}`);
    }
}
function debug(m) {
    //console.log(m);
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
        this.receive_buffer = [];
        this.wait_after_read = 0;
        // send data to BBS connector
        this.transmit_data = (data) => { };
    }
    //save_buffer: number[] = [];
    get_status_byte() {
        this.STATUS_RECEIVER_FULL = this.receive_buffer.length === 0 ? 0 : 1;
        if (this.wait_after_read > 0)
            this.STATUS_RECEIVER_FULL = 0;
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
    cpu_read(addr) {
        let RS = addr & 1;
        if (RS === 0) {
            let data = this.get_status_byte();
            this.wait_after_read--;
            return data;
        }
        else {
            this.get_status_byte();
            if (this.STATUS_RECEIVER_FULL) {
                this.RECEIVE_DATA = this.receive_buffer[0];
                this.receive_buffer = this.receive_buffer.slice(1);
                this.wait_after_read = 3;
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
                this.receive_buffer = [];
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
                this.get_status_byte();
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
        data.forEach(e => this.receive_buffer.push(e));
        //data.forEach(e=>this.save_buffer.push(e));
        this.get_status_byte();
        debug(`ACIA: received ${data.length} bytes`);
    }
}
function debug(m) {
    //console.log(m);
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
    printm(`${new Date().toLocaleTimeString()} CONNECTED\r`);
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
let SCREEN_W = 392;
let SCREEN_H = 272;
let POS_X = 3 * 8;
let POS_Y = 3 * 8;
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
    canvas.width = SCREEN_W * 2 - (POS_X * 2);
    canvas.height = SCREEN_H * 2 - (POS_Y * 2);
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
// new method
let vic_ii_imageData = vic_ii_context.createImageData(WW * 2, HH * 2);
let bmp = new Uint32Array(vic_ii_imageData.data.buffer);
/*
// old drawing method
let vic_ii_imageData = vic_ii_context.getImageData(0, 0, WW*2, HH*2);
let imagedata_buffer = new ArrayBuffer(vic_ii_imageData.data.length);
let imagedata_buf8 = new Uint8ClampedArray(imagedata_buffer);
let bmp = new Uint32Array(imagedata_buffer);
*/
function vdp_screen_update(ptr) {
    let start = ptr / (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.get_wasm_instance)().HEAPU32.BYTES_PER_ELEMENT;
    let size = WW * HH;
    let buffer = (0,_emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.get_wasm_instance)().HEAPU32.subarray(start, start + size);
    let ptr0 = 0;
    let ptr1 = 0;
    let ptr2 = WW * 2;
    for (let y = 0; y < HH; y++) {
        for (let x = 0; x < WW; x++) {
            let pixel = buffer[ptr0];
            bmp[ptr1++] = pixel;
            bmp[ptr1++] = pixel;
            bmp[ptr2++] = pixel;
            bmp[ptr2++] = pixel;
            ptr0++;
        }
        ptr1 += WW * 2;
        ptr2 += WW * 2;
    }
    /*
    // old drawing method
    vic_ii_imageData.data.set(imagedata_buf8);
    vic_ii_context.putImageData(vic_ii_imageData, -POS_X, -POS_Y);
    */
    // new method
    vic_ii_context.putImageData(vic_ii_imageData, -POS_X, -POS_Y);
    //frames++;
    //if(end_of_frame_hook !== undefined) end_of_frame_hook();
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm":
/*!*********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0468a97478ad1da11a80.wasm";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUU5RSxJQUFHLEdBQUcsS0FBSyxHQUFHLEVBQVU7UUFBRSxhQUFhLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUFHLENBQUUsc0JBQXNCO0lBRXpHLFFBQVE7SUFDUixJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN2RCxJQUFHLElBQUksS0FBSyxJQUFJO1FBQVksYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUV2RCxJQUFHLElBQUksS0FBSyxPQUFPO1FBQVMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxXQUFXO1FBQUssYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUcsQ0FBQztJQUN4RCxJQUFHLElBQUksS0FBSyxZQUFZO1FBQUks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Q3ZDLE1BQWMsQ0FBQyxXQUFXLEdBQUcscURBQVcsQ0FBQztBQUN6QyxNQUFjLENBQUMsU0FBUyxHQUFHLGtEQUFTLENBQUM7QUFFckMsTUFBYyxDQUFDLGNBQWMsR0FBRyw4REFBYyxDQUFDO0FBQy9DLE1BQWMsQ0FBQyxhQUFhLEdBQUksNkRBQWEsQ0FBQztBQUM5QyxNQUFjLENBQUMsY0FBYyxHQUFHLDhEQUFjLENBQUM7QUFFL0MsTUFBYyxDQUFDLEdBQUcsR0FBRyxvREFBRyxDQUFDO0FBRTFCLENBQUM7O1FBQ0UsTUFBTSw4REFBUyxFQUFFLENBQUM7UUFDbEIsK0NBQUksRUFBRSxDQUFDO0lBQ1YsQ0FBQztDQUFBLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9lbXNjcmlwdGVuX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL0ZpbGVTYXZlci5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9hdWRpby50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9iYnNfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvY2JtXzY0OTkudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvbTY4MjEudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvY2JtXzY0OTkvbTY4NTAudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZW1zY3JpcHRlbl93cmFwcGVyLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2VtdWxhdG9yLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2ZldGNoUHJvZ3JhbS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9maWxlc3lzdGVtLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2tleWJvYXJkLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2tleWJvYXJkX0lULnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL21kYXdzb24udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9wZXRzY2lpX2Jicy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy92aWRlby50cyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2FtZCBkZWZpbmUiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBlbXNjcmlwdGVuX21vZHVsZSA9ICgoKSA9PiB7XHJcbiAgdmFyIF9zY3JpcHREaXIgPSBpbXBvcnQubWV0YS51cmw7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuZnVuY3Rpb24oZW1zY3JpcHRlbl9tb2R1bGUgPSB7fSkgIHtcclxuXHJcbnZhciBNb2R1bGU9dHlwZW9mIGVtc2NyaXB0ZW5fbW9kdWxlIT1cInVuZGVmaW5lZFwiP2Vtc2NyaXB0ZW5fbW9kdWxlOnt9O3ZhciByZWFkeVByb21pc2VSZXNvbHZlLHJlYWR5UHJvbWlzZVJlamVjdDtNb2R1bGVbXCJyZWFkeVwiXT1uZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVhZHlQcm9taXNlUmVzb2x2ZT1yZXNvbHZlO3JlYWR5UHJvbWlzZVJlamVjdD1yZWplY3R9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIEVOVklST05NRU5UX0lTX1dFQj10cnVlO3ZhciBFTlZJUk9OTUVOVF9JU19XT1JLRVI9ZmFsc2U7dmFyIHNjcmlwdERpcmVjdG9yeT1cIlwiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0ocGF0aCxzY3JpcHREaXJlY3RvcnkpfXJldHVybiBzY3JpcHREaXJlY3RvcnkrcGF0aH12YXIgcmVhZF8scmVhZEFzeW5jLHJlYWRCaW5hcnksc2V0V2luZG93VGl0bGU7aWYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpe2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZn1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7c2NyaXB0RGlyZWN0b3J5PWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjfWlmKF9zY3JpcHREaXIpe3NjcmlwdERpcmVjdG9yeT1fc2NyaXB0RGlyfWlmKHNjcmlwdERpcmVjdG9yeS5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXtzY3JpcHREaXJlY3Rvcnk9c2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLHNjcmlwdERpcmVjdG9yeS5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1lbHNle3NjcmlwdERpcmVjdG9yeT1cIlwifXtyZWFkXz11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnNlbmQobnVsbCk7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9O2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7cmVhZEJpbmFyeT11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSl9fXJlYWRBc3luYz0odXJsLG9ubG9hZCxvbmVycm9yKT0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLHRydWUpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5vbmxvYWQ9KCk9PntpZih4aHIuc3RhdHVzPT0yMDB8fHhoci5zdGF0dXM9PTAmJnhoci5yZXNwb25zZSl7b25sb2FkKHhoci5yZXNwb25zZSk7cmV0dXJufW9uZXJyb3IoKX07eGhyLm9uZXJyb3I9b25lcnJvcjt4aHIuc2VuZChudWxsKX19c2V0V2luZG93VGl0bGU9dGl0bGU9PmRvY3VtZW50LnRpdGxlPXRpdGxlfWVsc2V7fXZhciBvdXQ9TW9kdWxlW1wicHJpbnRcIl18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbXCJwcmludEVyclwiXXx8Y29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihNb2R1bGUsbW9kdWxlT3ZlcnJpZGVzKTttb2R1bGVPdmVycmlkZXM9bnVsbDtpZihNb2R1bGVbXCJhcmd1bWVudHNcIl0pYXJndW1lbnRzXz1Nb2R1bGVbXCJhcmd1bWVudHNcIl07aWYoTW9kdWxlW1widGhpc1Byb2dyYW1cIl0pdGhpc1Byb2dyYW09TW9kdWxlW1widGhpc1Byb2dyYW1cIl07aWYoTW9kdWxlW1wicXVpdFwiXSlxdWl0Xz1Nb2R1bGVbXCJxdWl0XCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVtcIndhc21CaW5hcnlcIl0pd2FzbUJpbmFyeT1Nb2R1bGVbXCJ3YXNtQmluYXJ5XCJdO3ZhciBub0V4aXRSdW50aW1lPU1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl18fHRydWU7aWYodHlwZW9mIFdlYkFzc2VtYmx5IT1cIm9iamVjdFwiKXthYm9ydChcIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWRcIil9dmFyIHdhc21NZW1vcnk7dmFyIEFCT1JUPWZhbHNlO3ZhciBFWElUU1RBVFVTO3ZhciBVVEY4RGVjb2Rlcj10eXBlb2YgVGV4dERlY29kZXIhPVwidW5kZWZpbmVkXCI/bmV3IFRleHREZWNvZGVyKFwidXRmOFwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGOEFycmF5VG9TdHJpbmcoaGVhcE9yQXJyYXksaWR4LG1heEJ5dGVzVG9SZWFkKXt2YXIgZW5kSWR4PWlkeCttYXhCeXRlc1RvUmVhZDt2YXIgZW5kUHRyPWlkeDt3aGlsZShoZWFwT3JBcnJheVtlbmRQdHJdJiYhKGVuZFB0cj49ZW5kSWR4KSkrK2VuZFB0cjtpZihlbmRQdHItaWR4PjE2JiZoZWFwT3JBcnJheS5idWZmZXImJlVURjhEZWNvZGVyKXtyZXR1cm4gVVRGOERlY29kZXIuZGVjb2RlKGhlYXBPckFycmF5LnN1YmFycmF5KGlkeCxlbmRQdHIpKX12YXIgc3RyPVwiXCI7d2hpbGUoaWR4PGVuZFB0cil7dmFyIHUwPWhlYXBPckFycmF5W2lkeCsrXTtpZighKHUwJjEyOCkpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7Y29udGludWV9dmFyIHUxPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjI0KT09MTkyKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHUwJjMxKTw8Nnx1MSk7Y29udGludWV9dmFyIHUyPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjQwKT09MjI0KXt1MD0odTAmMTUpPDwxMnx1MTw8Nnx1Mn1lbHNle3UwPSh1MCY3KTw8MTh8dTE8PDEyfHUyPDw2fGhlYXBPckFycmF5W2lkeCsrXSY2M31pZih1MDw2NTUzNil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKX1lbHNle3ZhciBjaD11MC02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIFVURjhUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3JldHVybiBwdHI/VVRGOEFycmF5VG9TdHJpbmcoSEVBUFU4LHB0cixtYXhCeXRlc1RvUmVhZCk6XCJcIn1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX12YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVtcIkhFQVA4XCJdPUhFQVA4PW5ldyBJbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUDE2XCJdPUhFQVAxNj1uZXcgSW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQMzJcIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBVOFwiXT1IRUFQVTg9bmV3IFVpbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUxNlwiXT1IRUFQVTE2PW5ldyBVaW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQVTMyXCJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGMzJcIl09SEVBUEYzMj1uZXcgRmxvYXQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGNjRcIl09SEVBUEY2ND1uZXcgRmxvYXQ2NEFycmF5KGIpfXZhciB3YXNtVGFibGU7dmFyIF9fQVRQUkVSVU5fXz1bXTt2YXIgX19BVElOSVRfXz1bXTt2YXIgX19BVFBPU1RSVU5fXz1bXTt2YXIgcnVudGltZUluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIHByZVJ1bigpe2lmKE1vZHVsZVtcInByZVJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZVJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZVJ1blwiXT1bTW9kdWxlW1wicHJlUnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwcmVSdW5cIl0ubGVuZ3RoKXthZGRPblByZVJ1bihNb2R1bGVbXCJwcmVSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQUkVSVU5fXyl9ZnVuY3Rpb24gaW5pdFJ1bnRpbWUoKXtydW50aW1lSW5pdGlhbGl6ZWQ9dHJ1ZTtjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUSU5JVF9fKX1mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlW1wicG9zdFJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInBvc3RSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwb3N0UnVuXCJdPVtNb2R1bGVbXCJwb3N0UnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwb3N0UnVuXCJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVtcInBvc3RSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pfWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Jbml0KGNiKXtfX0FUSU5JVF9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYil7X19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKX12YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGw7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX19ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfWlmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYocnVuRGVwZW5kZW5jeVdhdGNoZXIhPT1udWxsKXtjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsfWlmKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCl7dmFyIGNhbGxiYWNrPWRlcGVuZGVuY2llc0Z1bGZpbGxlZDtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtjYWxsYmFjaygpfX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7aWYoTW9kdWxlW1wib25BYm9ydFwiXSl7TW9kdWxlW1wib25BYm9ydFwiXSh3aGF0KX13aGF0PVwiQWJvcnRlZChcIit3aGF0K1wiKVwiO2Vycih3aGF0KTtBQk9SVD10cnVlO0VYSVRTVEFUVVM9MTt3aGF0Kz1cIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIjt2YXIgZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKHdoYXQpO3JlYWR5UHJvbWlzZVJlamVjdChlKTt0aHJvdyBlfXZhciBkYXRhVVJJUHJlZml4PVwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiO2Z1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSl7cmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCl9dmFyIHdhc21CaW5hcnlGaWxlO2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3dhc21CaW5hcnlGaWxlPVwiZW1zY3JpcHRlbl9tb2R1bGUud2FzbVwiO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKX19ZWxzZXt3YXNtQmluYXJ5RmlsZT1uZXcgVVJMKFwiZW1zY3JpcHRlbl9tb2R1bGUud2FzbVwiLGltcG9ydC5tZXRhLnVybCkuaHJlZn1mdW5jdGlvbiBnZXRCaW5hcnkoZmlsZSl7dHJ5e2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9Y2F0Y2goZXJyKXthYm9ydChlcnIpfX1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKCl7aWYoIXdhc21CaW5hcnkmJihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUikpe2lmKHR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe2lmKCFyZXNwb25zZVtcIm9rXCJdKXt0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrd2FzbUJpbmFyeUZpbGUrXCInXCJ9cmV0dXJuIHJlc3BvbnNlW1wiYXJyYXlCdWZmZXJcIl0oKX0pLmNhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX19cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZ2V0QmluYXJ5KHdhc21CaW5hcnlGaWxlKX0pfWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17XCJhXCI6d2FzbUltcG9ydHN9O2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSxtb2R1bGUpe3ZhciBleHBvcnRzPWluc3RhbmNlLmV4cG9ydHM7TW9kdWxlW1wiYXNtXCJdPWV4cG9ydHM7d2FzbU1lbW9yeT1Nb2R1bGVbXCJhc21cIl1bXCJkXCJdO3VwZGF0ZU1lbW9yeVZpZXdzKCk7d2FzbVRhYmxlPU1vZHVsZVtcImFzbVwiXVtcIkRcIl07YWRkT25Jbml0KE1vZHVsZVtcImFzbVwiXVtcImVcIl0pO3JlbW92ZVJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpfWFkZFJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KHJlc3VsdCl7cmVjZWl2ZUluc3RhbmNlKHJlc3VsdFtcImluc3RhbmNlXCJdKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVyKXtyZXR1cm4gZ2V0QmluYXJ5UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oYmluYXJ5KXtyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LGluZm8pfSkudGhlbihmdW5jdGlvbihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlfSkudGhlbihyZWNlaXZlcixmdW5jdGlvbihyZWFzb24pe2VycihcImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206IFwiK3JlYXNvbik7YWJvcnQocmVhc29uKX0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXN5bmMoKXtpZighd2FzbUJpbmFyeSYmdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nPT1cImZ1bmN0aW9uXCImJiFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpJiZ0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXt2YXIgcmVzdWx0PVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLGluZm8pO3JldHVybiByZXN1bHQudGhlbihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCxmdW5jdGlvbihyZWFzb24pe2VycihcIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiBcIityZWFzb24pO2VycihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX0pfSl9ZWxzZXtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCl9fWlmKE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXSl7dHJ5e3ZhciBleHBvcnRzPU1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXShpbmZvLHJlY2VpdmVJbnN0YW5jZSk7cmV0dXJuIGV4cG9ydHN9Y2F0Y2goZSl7ZXJyKFwiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogXCIrZSk7cmVhZHlQcm9taXNlUmVqZWN0KGUpfX1pbnN0YW50aWF0ZUFzeW5jKCkuY2F0Y2gocmVhZHlQcm9taXNlUmVqZWN0KTtyZXR1cm57fX12YXIgQVNNX0NPTlNUUz17NzExNTI6KCk9PntyZXR1cm4gY2JtXzY0OTlfcmVzZXQoKX0sNzExODE6KCQwLCQxKT0+e2F1ZGlvX2J1Zl9yZWFkeSgkMCwkMSl9LDcxMjEwOiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw3MTIzNzokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNzEyNjQ6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDcxMjkxOiQwPT57cmV0dXJuIG1vZGVtX3JlYWQoJDApfSw3MTMxODooJDAsJDEpPT57bW9kZW1fd3JpdGUoJDAsJDEpfSw3MTM0MjokMD0+e3JldHVybiBjYm1fNjQ5OV9yZWFkKCQwKX0sNzEzNzI6KCQwLCQxKT0+e2NibV82NDk5X3dyaXRlKCQwLCQxKX19O2Z1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBfX19hc3NlcnRfZmFpbChjb25kaXRpb24sZmlsZW5hbWUsbGluZSxmdW5jKXthYm9ydChcIkFzc2VydGlvbiBmYWlsZWQ6IFwiK1VURjhUb1N0cmluZyhjb25kaXRpb24pK1wiLCBhdDogXCIrW2ZpbGVuYW1lP1VURjhUb1N0cmluZyhmaWxlbmFtZSk6XCJ1bmtub3duIGZpbGVuYW1lXCIsbGluZSxmdW5jP1VURjhUb1N0cmluZyhmdW5jKTpcInVua25vd24gZnVuY3Rpb25cIl0pfXZhciByZWFkRW1Bc21BcmdzQXJyYXk9W107ZnVuY3Rpb24gcmVhZEVtQXNtQXJncyhzaWdQdHIsYnVmKXtyZWFkRW1Bc21BcmdzQXJyYXkubGVuZ3RoPTA7dmFyIGNoO2J1Zj4+PTI7d2hpbGUoY2g9SEVBUFU4W3NpZ1B0cisrXSl7YnVmKz1jaCE9MTA1JmJ1ZjtyZWFkRW1Bc21BcmdzQXJyYXkucHVzaChjaD09MTA1P0hFQVAzMltidWZdOkhFQVBGNjRbYnVmKys+PjFdKTsrK2J1Zn1yZXR1cm4gcmVhZEVtQXNtQXJnc0FycmF5fWZ1bmN0aW9uIHJ1bkVtQXNtRnVuY3Rpb24oY29kZSxzaWdQdHIsYXJnYnVmKXt2YXIgYXJncz1yZWFkRW1Bc21BcmdzKHNpZ1B0cixhcmdidWYpO3JldHVybiBBU01fQ09OU1RTW2NvZGVdLmFwcGx5KG51bGwsYXJncyl9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2ludChjb2RlLHNpZ1B0cixhcmdidWYpe3JldHVybiBydW5FbUFzbUZ1bmN0aW9uKGNvZGUsc2lnUHRyLGFyZ2J1Zil9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LHNyYyxudW0pe0hFQVBVOC5jb3B5V2l0aGluKGRlc3Qsc3JjLHNyYytudW0pfWZ1bmN0aW9uIGdldENGdW5jKGlkZW50KXt2YXIgZnVuYz1Nb2R1bGVbXCJfXCIraWRlbnRdO3JldHVybiBmdW5jfWZ1bmN0aW9uIHdyaXRlQXJyYXlUb01lbW9yeShhcnJheSxidWZmZXIpe0hFQVA4LnNldChhcnJheSxidWZmZXIpfWZ1bmN0aW9uIGNjYWxsKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsYXJncyxvcHRzKXt2YXIgdG9DPXtcInN0cmluZ1wiOnN0cj0+e3ZhciByZXQ9MDtpZihzdHIhPT1udWxsJiZzdHIhPT11bmRlZmluZWQmJnN0ciE9PTApe3ZhciBsZW49KHN0ci5sZW5ndGg8PDIpKzE7cmV0PXN0YWNrQWxsb2MobGVuKTtzdHJpbmdUb1VURjgoc3RyLHJldCxsZW4pfXJldHVybiByZXR9LFwiYXJyYXlcIjphcnI9Pnt2YXIgcmV0PXN0YWNrQWxsb2MoYXJyLmxlbmd0aCk7d3JpdGVBcnJheVRvTWVtb3J5KGFycixyZXQpO3JldHVybiByZXR9fTtmdW5jdGlvbiBjb252ZXJ0UmV0dXJuVmFsdWUocmV0KXtpZihyZXR1cm5UeXBlPT09XCJzdHJpbmdcIil7cmV0dXJuIFVURjhUb1N0cmluZyhyZXQpfWlmKHJldHVyblR5cGU9PT1cImJvb2xlYW5cIilyZXR1cm4gQm9vbGVhbihyZXQpO3JldHVybiByZXR9dmFyIGZ1bmM9Z2V0Q0Z1bmMoaWRlbnQpO3ZhciBjQXJncz1bXTt2YXIgc3RhY2s9MDtpZihhcmdzKXtmb3IodmFyIGk9MDtpPGFyZ3MubGVuZ3RoO2krKyl7dmFyIGNvbnZlcnRlcj10b0NbYXJnVHlwZXNbaV1dO2lmKGNvbnZlcnRlcil7aWYoc3RhY2s9PT0wKXN0YWNrPXN0YWNrU2F2ZSgpO2NBcmdzW2ldPWNvbnZlcnRlcihhcmdzW2ldKX1lbHNle2NBcmdzW2ldPWFyZ3NbaV19fX12YXIgcmV0PWZ1bmMuYXBwbHkobnVsbCxjQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJldCl7aWYoc3RhY2shPT0wKXN0YWNrUmVzdG9yZShzdGFjayk7cmV0dXJuIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpfXJldD1vbkRvbmUocmV0KTtyZXR1cm4gcmV0fWZ1bmN0aW9uIGN3cmFwKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsb3B0cyl7dmFyIG51bWVyaWNBcmdzPSFhcmdUeXBlc3x8YXJnVHlwZXMuZXZlcnkodHlwZT0+dHlwZT09PVwibnVtYmVyXCJ8fHR5cGU9PT1cImJvb2xlYW5cIik7dmFyIG51bWVyaWNSZXQ9cmV0dXJuVHlwZSE9PVwic3RyaW5nXCI7aWYobnVtZXJpY1JldCYmbnVtZXJpY0FyZ3MmJiFvcHRzKXtyZXR1cm4gZ2V0Q0Z1bmMoaWRlbnQpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBjY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3VtZW50cyxvcHRzKX19dmFyIHdhc21JbXBvcnRzPXtcImFcIjpfX19hc3NlcnRfZmFpbCxcImJcIjpfZW1zY3JpcHRlbl9hc21fY29uc3RfaW50LFwiY1wiOl9lbXNjcmlwdGVuX21lbWNweV9iaWd9O3ZhciBhc209Y3JlYXRlV2FzbSgpO3ZhciBfX193YXNtX2NhbGxfY3RvcnM9ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcImFzbVwiXVtcImVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5pdD1Nb2R1bGVbXCJfc3lzX2luaXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbml0PU1vZHVsZVtcIl9zeXNfaW5pdFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJmXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2NvbmZpZz1Nb2R1bGVbXCJfc3lzX2NvbmZpZ1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJnXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3Jlc2V0PU1vZHVsZVtcIl9zeXNfcmVzZXRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19yZXNldD1Nb2R1bGVbXCJfc3lzX3Jlc2V0XCJdPU1vZHVsZVtcImFzbVwiXVtcImhcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXhlYz1Nb2R1bGVbXCJfc3lzX2V4ZWNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19leGVjPU1vZHVsZVtcIl9zeXNfZXhlY1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJpXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4ZWNfdXM9TW9kdWxlW1wiX3N5c19leGVjX3VzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXhlY191cz1Nb2R1bGVbXCJfc3lzX2V4ZWNfdXNcIl09TW9kdWxlW1wiYXNtXCJdW1wialwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leD1Nb2R1bGVbXCJfc3lzX2V4XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXg9TW9kdWxlW1wiX3N5c19leFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJrXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3ZkcD1Nb2R1bGVbXCJfc3lzX3ZkcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJsXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2tleV9kb3duPU1vZHVsZVtcIl9zeXNfa2V5X2Rvd25cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19rZXlfZG93bj1Nb2R1bGVbXCJfc3lzX2tleV9kb3duXCJdPU1vZHVsZVtcImFzbVwiXVtcIm1cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfa2V5X3VwPU1vZHVsZVtcIl9zeXNfa2V5X3VwXCJdPU1vZHVsZVtcImFzbVwiXVtcIm5cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcXVpY2tfbG9hZD1Nb2R1bGVbXCJfc3lzX3F1aWNrX2xvYWRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19xdWlja19sb2FkPU1vZHVsZVtcIl9zeXNfcXVpY2tfbG9hZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJvXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luc2VydF9yb21fY2FydGRyaWdlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZT1Nb2R1bGVbXCJfc3lzX2luc2VydF9yb21fY2FydGRyaWdlXCJdPU1vZHVsZVtcImFzbVwiXVtcInBcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfbWVtX2NwdV9yZD1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfcmRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19tZW1fY3B1X3JkPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV9yZFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJxXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX21lbV9jcHVfd3I9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3dyXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfbWVtX2NwdV93cj1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfd3JcIl09TW9kdWxlW1wiYXNtXCJdW1wiclwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19qb3lzdGljaz1Nb2R1bGVbXCJfc3lzX2pveXN0aWNrXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfam95c3RpY2s9TW9kdWxlW1wiX3N5c19qb3lzdGlja1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJzXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9qb3lzdGlja190eXBlPU1vZHVsZVtcIl9zeXNfc2V0X2pveXN0aWNrX3R5cGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfam95c3RpY2tfdHlwZT1Nb2R1bGVbXCJfc3lzX3NldF9qb3lzdGlja190eXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInRcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5zZXJ0X3RhcGU9TW9kdWxlW1wiX3N5c19pbnNlcnRfdGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2luc2VydF90YXBlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3RhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1widVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19yZW1vdmVfdGFwZT1Nb2R1bGVbXCJfc3lzX3JlbW92ZV90YXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcmVtb3ZlX3RhcGU9TW9kdWxlW1wiX3N5c19yZW1vdmVfdGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ2XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfcGxheT1Nb2R1bGVbXCJfc3lzX3RhcGVfcGxheVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ3XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3RhcGVfc3RvcD1Nb2R1bGVbXCJfc3lzX3RhcGVfc3RvcFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ4XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2Nhc19wb3J0PU1vZHVsZVtcIl9zeXNfY2FzX3BvcnRcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19jYXNfcG9ydD1Nb2R1bGVbXCJfc3lzX2Nhc19wb3J0XCJdPU1vZHVsZVtcImFzbVwiXVtcInlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2V4cm9tPU1vZHVsZVtcIl9zeXNfc2V0X2V4cm9tXCJdPU1vZHVsZVtcImFzbVwiXVtcInpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2NibV82NDk5X25iYW5rPU1vZHVsZVtcIl9zeXNfc2V0X2NibV82NDk5X25iYW5rXCJdPU1vZHVsZVtcImFzbVwiXVtcIkFcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTk9TW9kdWxlW1wiX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5PU1vZHVsZVtcIl9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIl09TW9kdWxlW1wiYXNtXCJdW1wiQlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfZXh0ZXJuYWxfaXJxPU1vZHVsZVtcIl9zeXNfc2V0X2V4dGVybmFsX2lycVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9leHRlcm5hbF9pcnE9TW9kdWxlW1wiX3N5c19zZXRfZXh0ZXJuYWxfaXJxXCJdPU1vZHVsZVtcImFzbVwiXVtcIkNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrU2F2ZT1mdW5jdGlvbigpe3JldHVybihzdGFja1NhdmU9TW9kdWxlW1wiYXNtXCJdW1wiRVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tSZXN0b3JlPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrUmVzdG9yZT1Nb2R1bGVbXCJhc21cIl1bXCJGXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja0FsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrQWxsb2M9TW9kdWxlW1wiYXNtXCJdW1wiR1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTtNb2R1bGVbXCJjY2FsbFwiXT1jY2FsbDtNb2R1bGVbXCJjd3JhcFwiXT1jd3JhcDt2YXIgY2FsbGVkUnVuO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1mdW5jdGlvbiBydW5DYWxsZXIoKXtpZighY2FsbGVkUnVuKXJ1bigpO2lmKCFjYWxsZWRSdW4pZGVwZW5kZW5jaWVzRnVsZmlsbGVkPXJ1bkNhbGxlcn07ZnVuY3Rpb24gcnVuKCl7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1wcmVSdW4oKTtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufWZ1bmN0aW9uIGRvUnVuKCl7aWYoY2FsbGVkUnVuKXJldHVybjtjYWxsZWRSdW49dHJ1ZTtNb2R1bGVbXCJjYWxsZWRSdW5cIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtyZWFkeVByb21pc2VSZXNvbHZlKE1vZHVsZSk7aWYoTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0pTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0oKTtwb3N0UnVuKCl9aWYoTW9kdWxlW1wic2V0U3RhdHVzXCJdKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJSdW5uaW5nLi4uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpfSwxKTtkb1J1bigpfSwxKX1lbHNle2RvUnVuKCl9fWlmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5wb3AoKSgpfX1ydW4oKTtcclxuXHJcblxyXG4gIHJldHVybiBlbXNjcmlwdGVuX21vZHVsZS5yZWFkeVxyXG59XHJcbik7XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGVtc2NyaXB0ZW5fbW9kdWxlOyIsIi8qIEZpbGVTYXZlci5qc1xuICogQSBzYXZlQXMoKSBGaWxlU2F2ZXIgaW1wbGVtZW50YXRpb24uXG4gKiAxLjMuMlxuICogMjAxNi0wNi0xNiAxODoyNToxOVxuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmICovXG4vKmpzbGludCBiaXR3aXNlOiB0cnVlLCBpbmRlbnQ6IDQsIGxheGJyZWFrOiB0cnVlLCBsYXhjb21tYTogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlLCBwbHVzcGx1czogdHJ1ZSAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0ZpbGVTYXZlci5qcyAqL1xuXG52YXIgc2F2ZUFzID0gc2F2ZUFzIHx8IChmdW5jdGlvbih2aWV3KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHQvLyBJRSA8MTAgaXMgZXhwbGljaXRseSB1bnN1cHBvcnRlZFxuXHRpZiAodHlwZW9mIHZpZXcgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBbMS05XVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXJcblx0XHQgIGRvYyA9IHZpZXcuZG9jdW1lbnRcblx0XHQgIC8vIG9ubHkgZ2V0IFVSTCB3aGVuIG5lY2Vzc2FyeSBpbiBjYXNlIEJsb2IuanMgaGFzbid0IG92ZXJyaWRkZW4gaXQgeWV0XG5cdFx0LCBnZXRfVVJMID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdmlldy5VUkwgfHwgdmlldy53ZWJraXRVUkwgfHwgdmlldztcblx0XHR9XG5cdFx0LCBzYXZlX2xpbmsgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCBcImFcIilcblx0XHQsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xuXHRcdCwgY2xpY2sgPSBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIpO1xuXHRcdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHR9XG5cdFx0LCBpc19zYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHZpZXcuSFRNTEVsZW1lbnQpIHx8IHZpZXcuc2FmYXJpXG5cdFx0LCBpc19jaHJvbWVfaW9zID0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcblx0XHQsIHRocm93X291dHNpZGUgPSBmdW5jdGlvbihleCkge1xuXHRcdFx0KHZpZXcuc2V0SW1tZWRpYXRlIHx8IHZpZXcuc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IGV4O1xuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHRcdCwgZm9yY2Vfc2F2ZWFibGVfdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcblx0XHQvLyB0aGUgQmxvYiBBUEkgaXMgZnVuZGFtZW50YWxseSBicm9rZW4gYXMgdGhlcmUgaXMgbm8gXCJkb3dubG9hZGZpbmlzaGVkXCIgZXZlbnQgdG8gc3Vic2NyaWJlIHRvXG5cdFx0LCBhcmJpdHJhcnlfcmV2b2tlX3RpbWVvdXQgPSAxMDAwICogNDAgLy8gaW4gbXNcblx0XHQsIHJldm9rZSA9IGZ1bmN0aW9uKGZpbGUpIHtcblx0XHRcdHZhciByZXZva2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZmlsZSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmaWxlIGlzIGFuIG9iamVjdCBVUkxcblx0XHRcdFx0XHRnZXRfVVJMKCkucmV2b2tlT2JqZWN0VVJMKGZpbGUpO1xuXHRcdFx0XHR9IGVsc2UgeyAvLyBmaWxlIGlzIGEgRmlsZVxuXHRcdFx0XHRcdGZpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG5cdFx0fVxuXHRcdCwgZGlzcGF0Y2ggPSBmdW5jdGlvbihmaWxlc2F2ZXIsIGV2ZW50X3R5cGVzLCBldmVudCkge1xuXHRcdFx0ZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuXHRcdFx0dmFyIGkgPSBldmVudF90eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lciA9IGZpbGVzYXZlcltcIm9uXCIgKyBldmVudF90eXBlc1tpXV07XG5cdFx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsKGZpbGVzYXZlciwgZXZlbnQgfHwgZmlsZXNhdmVyKTtcblx0XHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdFx0dGhyb3dfb3V0c2lkZShleCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCwgYXV0b19ib20gPSBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHQvLyBwcmVwZW5kIEJPTSBmb3IgVVRGLTggWE1MIGFuZCB0ZXh0LyogdHlwZXMgKGluY2x1ZGluZyBIVE1MKVxuXHRcdFx0Ly8gbm90ZTogeW91ciBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBjb252ZXJ0IFVURi0xNiBVK0ZFRkYgdG8gRUYgQkIgQkZcblx0XHRcdGlmICgvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChibG9iLnR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgQmxvYihbU3RyaW5nLmZyb21DaGFyQ29kZSgweEZFRkYpLCBibG9iXSwge3R5cGU6IGJsb2IudHlwZX0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJsb2I7XG5cdFx0fVxuXHRcdCwgRmlsZVNhdmVyID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRmlyc3QgdHJ5IGEuZG93bmxvYWQsIHRoZW4gd2ViIGZpbGVzeXN0ZW0sIHRoZW4gb2JqZWN0IFVSTHNcblx0XHRcdHZhclxuXHRcdFx0XHQgIGZpbGVzYXZlciA9IHRoaXNcblx0XHRcdFx0LCB0eXBlID0gYmxvYi50eXBlXG5cdFx0XHRcdCwgZm9yY2UgPSB0eXBlID09PSBmb3JjZV9zYXZlYWJsZV90eXBlXG5cdFx0XHRcdCwgb2JqZWN0X3VybFxuXHRcdFx0XHQsIGRpc3BhdGNoX2FsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGZpbGVzYXZlciwgXCJ3cml0ZXN0YXJ0IHByb2dyZXNzIHdyaXRlIHdyaXRlZW5kXCIuc3BsaXQoXCIgXCIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBvbiBhbnkgZmlsZXN5cyBlcnJvcnMgcmV2ZXJ0IHRvIHNhdmluZyB3aXRoIG9iamVjdCBVUkxzXG5cdFx0XHRcdCwgZnNfZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoKGlzX2Nocm9tZV9pb3MgfHwgKGZvcmNlICYmIGlzX3NhZmFyaSkpICYmIHZpZXcuRmlsZVJlYWRlcikge1xuXHRcdFx0XHRcdFx0Ly8gU2FmYXJpIGRvZXNuJ3QgYWxsb3cgZG93bmxvYWRpbmcgb2YgYmxvYiB1cmxzXG5cdFx0XHRcdFx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHVybCA9IGlzX2Nocm9tZV9pb3MgPyByZWFkZXIucmVzdWx0IDogcmVhZGVyLnJlc3VsdC5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLCAnZGF0YTphdHRhY2htZW50L2ZpbGU7Jyk7XG5cdFx0XHRcdFx0XHRcdHZhciBwb3B1cCA9IHZpZXcub3Blbih1cmwsICdfYmxhbmsnKTtcblx0XHRcdFx0XHRcdFx0aWYoIXBvcHVwKSB2aWV3LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG5cdFx0XHRcdFx0XHRcdHVybD11bmRlZmluZWQ7IC8vIHJlbGVhc2UgcmVmZXJlbmNlIGJlZm9yZSBkaXNwYXRjaGluZ1xuXHRcdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcblx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRvbid0IGNyZWF0ZSBtb3JlIG9iamVjdCBVUkxzIHRoYW4gbmVlZGVkXG5cdFx0XHRcdFx0aWYgKCFvYmplY3RfdXJsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGZvcmNlKSB7XG5cdFx0XHRcdFx0XHR2aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgb3BlbmVkID0gdmlldy5vcGVuKG9iamVjdF91cmwsIFwiX2JsYW5rXCIpO1xuXHRcdFx0XHRcdFx0aWYgKCFvcGVuZWQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQXBwbGUgZG9lcyBub3QgYWxsb3cgd2luZG93Lm9wZW4sIHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9zYWZhcmkvZG9jdW1lbnRhdGlvbi9Ub29scy9Db25jZXB0dWFsL1NhZmFyaUV4dGVuc2lvbkd1aWRlL1dvcmtpbmd3aXRoV2luZG93c2FuZFRhYnMvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy5odG1sXG5cdFx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xuXHRcdFx0XHR9XG5cdFx0XHQ7XG5cdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXG5cdFx0XHRpZiAoY2FuX3VzZV9zYXZlX2xpbmspIHtcblx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdHNhdmVfbGluay5kb3dubG9hZCA9IG5hbWU7XG5cdFx0XHRcdFx0Y2xpY2soc2F2ZV9saW5rKTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZnNfZXJyb3IoKTtcblx0XHR9XG5cdFx0LCBGU19wcm90byA9IEZpbGVTYXZlci5wcm90b3R5cGVcblx0XHQsIHNhdmVBcyA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEZpbGVTYXZlcihibG9iLCBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCIsIG5vX2F1dG9fYm9tKTtcblx0XHR9XG5cdDtcblx0Ly8gSUUgMTArIChuYXRpdmUgc2F2ZUFzKVxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuXHRcdHJldHVybiBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0bmFtZSA9IG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIjtcblxuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYmxvYiwgbmFtZSk7XG5cdFx0fTtcblx0fVxuXG5cdEZTX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24oKXt9O1xuXHRGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG5cdEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuXHRGU19wcm90by5ET05FID0gMjtcblxuXHRGU19wcm90by5lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVzdGFydCA9XG5cdEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuXHRGU19wcm90by5vbndyaXRlID1cblx0RlNfcHJvdG8ub25hYm9ydCA9XG5cdEZTX3Byb3RvLm9uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlZW5kID1cblx0XHRudWxsO1xuXG5cdHJldHVybiBzYXZlQXM7XG59KFxuXHQgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmXG5cdHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93XG5cdHx8IHRoaXMuY29udGVudFxuKSk7XG4vLyBgc2VsZmAgaXMgdW5kZWZpbmVkIGluIEZpcmVmb3ggZm9yIEFuZHJvaWQgY29udGVudCBzY3JpcHQgY29udGV4dFxuLy8gd2hpbGUgYHRoaXNgIGlzIG5zSUNvbnRlbnRGcmFtZU1lc3NhZ2VNYW5hZ2VyXG4vLyB3aXRoIGFuIGF0dHJpYnV0ZSBgY29udGVudGAgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgd2luZG93XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzLnNhdmVBcyA9IHNhdmVBcztcbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsKSAmJiAoZGVmaW5lLmFtZCAhPT0gbnVsbCkpIHtcbiAgZGVmaW5lKFwiRmlsZVNhdmVyLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzYXZlQXM7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0X3dhc21faW5zdGFuY2UgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbmNvbnN0IEFVRElPX0JVRlNJWkUgPSAxMDI0OyAgLy8gbXVzdCBtYXRjaCAuY1xyXG5cclxubGV0IGF1ZGlvX2J1ZmZlcnNfcXVldWU6IG51bWJlcltdW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdWRpb19idWZfcmVhZHkocHRyOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICBpZighYXVkaW9fcGxheWluZykgcmV0dXJuO1xyXG5cclxuICAgbGV0IHN0YXJ0ID0gcHRyIC8gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQRjMyLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICBsZXQgYnVmZmVyID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQRjMyLnN1YmFycmF5KHN0YXJ0LHN0YXJ0K3NpemUpIGFzIG51bWJlcltdO1xyXG5cclxuICAgYXVkaW9fYnVmZmVyc19xdWV1ZS5wdXNoKFsgLi4uYnVmZmVyIF0pOyAgLy8gcHVzaCBhIGNsb25lZCBjb3B5XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBBVURJTyBCVUZGRVIgVE8gQlJPV1NFUiBBVURJTyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmNvbnN0IGJ1ZmZlclNpemUgPSBBVURJT19CVUZTSVpFO1xyXG5cclxubGV0IGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0fHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxubGV0IHNwZWFrZXJTb3VuZDogU2NyaXB0UHJvY2Vzc29yTm9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvQ29udGV4dCgpIHtcclxuICAgYXVkaW9Db250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTsgLy8gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7ICAgXHJcbiAgIHNwZWFrZXJTb3VuZCA9IGF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgMSwgMSk7XHJcblxyXG4gICBzcGVha2VyU291bmQub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnN0IG91dHB1dCA9IGUub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgaWYoYXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3YXJuaW5nOiBhdWRpbyBxdWV1ZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhgd2FybmluZzogYXVkaW8gcXVldWUgaXMgZ2V0dGluZyBsb25nZXI6ICR7YXVkaW9fYnVmZmVyc19xdWV1ZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBidWZmZXIgPSBhdWRpb19idWZmZXJzX3F1ZXVlWzBdO1xyXG4gICAgICBhdWRpb19idWZmZXJzX3F1ZXVlID0gYXVkaW9fYnVmZmVyc19xdWV1ZS5zbGljZSgxKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPGJ1ZmZlclNpemU7IGkrKykge1xyXG4gICAgICAgICBvdXRwdXRbaV0gPSBidWZmZXJbaV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4vKlxyXG5sZXQgY2gwID0gW107XHJcbmxldCBjaDEgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNzYXZlKCkge1xyXG4gICBjb25zdCB3YXZEYXRhID0ge1xyXG4gICAgICBzYW1wbGVSYXRlOiA0ODAwMCxcclxuICAgICAgY2hhbm5lbERhdGE6IFsgbmV3IEZsb2F0MzJBcnJheShjaDApLCBuZXcgRmxvYXQzMkFycmF5KGNoMSkgXVxyXG4gICB9O1xyXG4gICAgIFxyXG4gICBjb25zdCBidWZmZXIgPSBlbmNvZGVTeW5jKHdhdkRhdGEsIHsgYml0RGVwdGg6IDE2LCBmbG9hdDogZmFsc2UgfSk7ICAgICAgXHJcbiAgIFxyXG4gICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pOyAgIFxyXG4gICBjb25zdCBmaWxlTmFtZSA9IFwiY3NhdmVkLndhdlwiO1xyXG4gICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpO1xyXG59XHJcbiovXHJcblxyXG5sZXQgYXVkaW9fcGxheWluZzogYm9vbGVhbnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29BdWRpbygpIHtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIGNyZWF0ZUF1ZGlvQ29udGV4dCgpO1xyXG5cclxuICAgaWYoc3BlYWtlclNvdW5kID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgc3BlYWtlclNvdW5kLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgYXVkaW9fcGxheWluZyA9IHRydWU7XHJcbiAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdWRpbygpIHtcclxuICAgaWYoYXVkaW9fcGxheWluZyAhPT0gdW5kZWZpbmVkICYmIGF1ZGlvX3BsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgaWYoc3BlYWtlclNvdW5kID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgc3BlYWtlclNvdW5kLmRpc2Nvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgYXVkaW9fcGxheWluZyA9IGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdWRpb0NvbnRleHRSZXN1bWUoKSB7XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSBjcmVhdGVBdWRpb0NvbnRleHQoKTtcclxuICAgaWYoYXVkaW9fcGxheWluZyA9PT0gdW5kZWZpbmVkKSBnb0F1ZGlvKCk7XHJcblxyXG4gICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgaWYoYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xyXG4gICAgICBhd2FpdCBhdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBbXTtcclxuICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBCQlNDb25uZWN0b3Ige1xyXG4gICBhZGRyZXNzID0gXCJcIjsgICAgIFxyXG4gICBwcm90b2NvbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgd3NfY29ubmVjdGlvbjogV2ViU29ja2V0IHwgdW5kZWZpbmVkOyAgICAgXHJcbiAgIFxyXG4gICBvbl9lcnJvciA9IChlcnI6IEV2ZW50KT0+IHt9O1xyXG4gICBvbl9vcGVuID0gKCk9PiB7fTtcclxuICAgb25fY2xvc2UgPSAoKT0+IHt9O1xyXG4gICBvbl9kYXRhID0gKGRhdGE6IFVpbnQ4QXJyYXkpPT4ge307XHJcblxyXG4gICBjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgXHJcbiAgIGNvbm5lY3QoKSB7XHJcbiAgICAgIC8vIGVtcHR5IHN0cmluZyBtZWFucyBubyBwcm90b2NvbCAodW5kZWZpbmVkKVxyXG4gICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sID09PSAnJyA/IHVuZGVmaW5lZCA6IHRoaXMucHJvdG9jb2w7XHJcblxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KGAke3RoaXMuYWRkcmVzc31gLHByb3RvY29sKTtcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25lcnJvciA9IChlcnIpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGlvbiBlcnJvcicpOyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLm9uX2Vycm9yKGVycik7XHJcbiAgICAgIH07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3RlZCcpOyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMub25fb3BlbigpO1xyXG4gICAgICB9O1xyXG4gICBcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZGlzY29ubmVjdGVkJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMub25fY2xvc2UoKTtcclxuICAgICAgfTsgICAgICBcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSAoZSkgPT4geyAgICAgIFxyXG4gICAgICAgICBpZiAoZS5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vbl9kYXRhKG5ldyBVaW50OEFycmF5KGUuZGF0YSkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgd2Vic29ja2V0IFJlY2VpdmVkIHN0cmluZzogJyR7ZS5kYXRhfSdgKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICB9XHJcblxyXG4gICBzZW5kX2RhdGFfdG9fYmJzKGRhdGE6IG51bWJlcltdKSB7XHJcbiAgICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICBpZih0aGlzLndzX2Nvbm5lY3Rpb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLndzX2Nvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gdGhpcy53c19jb25uZWN0aW9uLk9QRU4pIHsgICAgICAgICBcclxuICAgICAgICAgdGhpcy53c19jb25uZWN0aW9uLnNlbmQoYnl0ZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBkaXNjb25uZWN0ZWQsIGNhbid0IHNlbmQhXCIpO1xyXG4gICAgICB9XHJcbiAgIH0gICBcclxuICAgXHJcbiAgIGNsb3NlKCkge1xyXG4gICAgICBpZih0aGlzLndzX2Nvbm5lY3Rpb24gIT09IHVuZGVmaW5lZCkgeyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiLy8gaGFuZGxlcyBpbnRlcmFjdGlvbiBiZXR3ZWVuIGJyb3dzZXIgYW5kIGVtdWxhdGlvbiBcclxuXHJcbmltcG9ydCB7IGdvQXVkaW8sIHN0b3BBdWRpbywgYXVkaW9Db250ZXh0UmVzdW1lIH0gZnJvbSBcIi4vYXVkaW9cIjtcclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IGxvYWRCeXRlcyB9IGZyb20gXCIuL2ZpbGVzeXN0ZW1cIjtcclxuXHJcbmxldCBhc3BlY3QgPSAxLjM7XHJcblxyXG5mdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikhOyAgIFxyXG5cclxuICAgaWYod2luZG93LmlubmVyV2lkdGggPiAod2luZG93LmlubmVySGVpZ2h0KmFzcGVjdCkpXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IGAke2FzcGVjdCoxMDB9dm1pbmA7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjEwMHZtaW5cIjtcclxuICAgfVxyXG4gICBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBcIjEwMHZtYXhcIjtcclxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAkeygxL2FzcGVjdCkqMTAwfXZtYXhgO1xyXG4gICB9XHJcbiAgIGVsc2VcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gXCIxMDB2bWluXCI7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHsoMS9hc3BlY3QpKjEwMH12bWluYDtcclxuICAgfVxyXG5cclxuICAgY29uc3QgdHJ1ZUhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHRcclxufVxyXG5cclxuZnVuY3Rpb24gZ29GdWxsU2NyZWVuKCkgXHJcbntcclxuICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikhOyAgXHJcbiAgIGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbigpOyBcclxuICAgb25SZXNpemUoKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGdvRnVsbFNjcmVlbik7XHJcblxyXG5vblJlc2l6ZSgpO1xyXG5cclxuLy8gKioqKiBzYXZlIHN0YXRlIG9uIGNsb3NlICoqKipcclxuXHJcbndpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgXHJcbn07XHJcblxyXG4vLyAqKioqIHZpc2liaWxpdHkgY2hhbmdlICoqKipcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgaWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcImhpZGRlblwiKVxyXG4gICB7XHJcbiAgICAgIGM2NC5zdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgc3RvcEF1ZGlvKCk7XHJcbiAgIH1cclxuICAgZWxzZSBpZihkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKVxyXG4gICB7ICAgICAgXHJcbiAgICAgIGM2NC5nbygpO1xyXG4gICAgICBnb0F1ZGlvKCk7XHJcbiAgIH1cclxufSk7XHJcblxyXG4vLyAqKioqIGRyYWcgJiBkcm9wICoqKipcclxuXHJcbmNvbnN0IGRyb3Bab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuLy8gT3B0aW9uYWwuICAgU2hvdyB0aGUgY29weSBpY29uIHdoZW4gZHJhZ2dpbmcgb3Zlci4gIFNlZW1zIHRvIG9ubHkgd29yayBmb3IgY2hyb21lLlxyXG5kcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBlLmRhdGFUcmFuc2ZlciEuZHJvcEVmZmVjdCA9ICdjb3B5JztcclxufSk7XHJcblxyXG4vLyBHZXQgZmlsZSBkYXRhIG9uIGRyb3BcclxuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGUgPT4ge1xyXG4gICBhdWRpb0NvbnRleHRSZXN1bWUoKTtcclxuXHJcbiAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2ZlciEuZmlsZXM7IC8vIEFycmF5IG9mIGFsbCBmaWxlc1xyXG5cclxuICAgZm9yKGxldCBpPTA7IGk8ZmlsZXMubGVuZ3RoOyBpKyspIHsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGxldCBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7ICAgICAgXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlMiA9PiBkcm9wcGVkRmlsZShmaWxlLm5hbWUsIG5ldyBVaW50OEFycmF5KGUyLnRhcmdldCEucmVzdWx0IGFzIEFycmF5QnVmZmVyKSk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTsgXHJcbiAgIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkcm9wcGVkRmlsZShvdXROYW1lOiBzdHJpbmcsIGJ5dGVzOiBVaW50OEFycmF5KSB7XHJcbiAgIGNvbnN0IHByZyA9IC9cXC5wcmckL2k7XHJcbiAgIGlmKHByZy50ZXN0KG91dE5hbWUpKSB7ICAgIFxyXG4gICAgICBhd2FpdCBsb2FkQnl0ZXMoYnl0ZXMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCB7IE02ODIxIH0gZnJvbSBcIi4vbTY4MjFcIjtcclxuaW1wb3J0IHsgTTY4NTAgfSBmcm9tIFwiLi9tNjg1MFwiO1xyXG5cclxuaW1wb3J0IHsgQkJTQ29ubmVjdG9yIH0gZnJvbSBcIi4uL2Jic19jb25uZWN0b3JcIjtcclxuXHJcbmxldCBQSUEgPSBuZXcgTTY4MjEoKTtcclxubGV0IEFDSUEgPSBuZXcgTTY4NTAoKTtcclxuXHJcbmV4cG9ydCBsZXQgdmlkZW90ZWwgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG52aWRlb3RlbC5vbl9lcnJvciA9ICgpPT57XHJcbiAgIC8vIHNldHMgTk8gQ0FSUklFUlxyXG4gICBBQ0lBLlNUQVRVU19OT19DQVJSSUVSID0gMTtcclxuICAgY29uc29sZS5sb2coXCJOTyBDQVJSSUVSXCIpO1xyXG59O1xyXG5cclxudmlkZW90ZWwub25fY2xvc2UgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX29wZW4gPSAoKT0+e1xyXG4gICAvLyBjbGVhcnMgTk8gQ0FSUklFUlxyXG4gICBBQ0lBLlNUQVRVU19OT19DQVJSSUVSID0gMDtcclxuICAgUElBLlBBICY9IDEyNztcclxuICAgY29uc29sZS5sb2coXCJDQVJSSUVSIERFVEVDVFwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX2RhdGEgPSAoZGF0YSk9PntcclxuICAgQUNJQS5yZWNlaXZlX2RhdGEoZGF0YSk7XHJcbn1cclxuXHJcbkFDSUEudHJhbnNtaXRfZGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgIHZpZGVvdGVsLnNlbmRfZGF0YV90b19iYnMoW2RhdGFdKTtcclxufVxyXG5cclxuUElBLmFmdGVyZGlhbHRvbmUgPSAoKT0+dmlkZW90ZWwuY29ubmVjdCgpO1xyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gdGhlIHdob2xlIHN5c3RlbSBpcyByZXNldFxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfcmVzZXQoKVxyXG57XHJcbiAgIFBJQS5yZXNldCgpOyBcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gQ1BVIHJlYWRzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfcmVhZChhZGRyOiBudW1iZXIpXHJcbnsgICBcclxuICAgaWYoYWRkciA8IDB4REYwMCkgcmV0dXJuIFBJQS5yZWFkKGFkZHIpO1xyXG4gICBlbHNlICAgICAgICAgICAgICByZXR1cm4gQUNJQS5jcHVfcmVhZChhZGRyKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gQ1BVIHdyaXRlcyBJL08gaW4gdGhlIHJhbmdlICRERTAwLURGRkZcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3dyaXRlKGFkZHI6IG51bWJlciwgZGF0YTogbnVtYmVyKVxyXG57XHJcbiAgIGlmKGFkZHIgPCAweERGMDApIFBJQS53cml0ZShhZGRyLCBkYXRhKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgQUNJQS5jcHVfd3JpdGUoYWRkciwgZGF0YSk7XHJcbn1cclxuXHJcbiIsIi8qXHJcbk5vdGUgdmFyaWU6XHJcblxyXG5QSUEgPSBNb3Rvcm9sYSA2ODIxXHJcbiAgIEVuYWJsZSA9IGNwdSBjbG9ja1xyXG4gICAvUlcgPSBjcHUgL1JXXHJcbiAgIC9SRVNFVCA9IGNwdSAvUkVTRVRcclxuICAgQ1MwID0gc2VtcHJlIHBvc3RvIGEgMSAoVkNDKVxyXG4gICBDUzEgPSBzZW1wcmUgcG9zdG8gYSAxIChWQ0MpXHJcbiAgIC9DUzIgPSAvSU8xIChjcHUgSS9PKSByYW5nZSAkREUwMC0kREVGRi5cclxuICAgUlMwLFJTMSA9IFtBMTpBMF1cclxuICAgL0lSUUEsL0lSUUIgPSAvSVJRIGNwdSwgY2xlYXJlZCBieSByZWFkaW5nIGRhdGEgcmVnaXN0ZXJcclxuICAgQ0ExID0gKGludGVycnVwdCBpbnB1dCkgc2VnbmFsZSBkaSBSSU5HXHJcbiAgIENCMSA9IChpbnRlcnJ1cHQgaW5wdXQpIDAgKEdORClcclxuICAgQ0EyID0gKGNvbmZpZ3VyYXRvIGNvbWUgb3V0cHV0KSBwaW4gQTE0IGRlbGxhIHJvbSBpbnRlcm5hIChiYW5rIHN3aXRjaGluZylcclxuICAgQ0IyID0gKGNvbmZpZ3VyYXRvIGNvbWUgb3V0cHV0KSBwZXJtZXR0ZSBkaSBzd2l0Y2hhcmUgaWwgcGluIEVYUk9NIChjYXJ0IG9mZilcclxuKi9cclxuXHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgaGV4IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTTY4MjEge1xyXG4gICBDUkEgPSAwO1xyXG4gICBDUkIgPSAwO1xyXG5cclxuICAgUEEgPSAwO1xyXG4gICBQQiA9IDA7XHJcblxyXG4gICBERFJBID0gMDtcclxuICAgRERSQiA9IDA7XHJcblxyXG4gICAvLyBkaWFsdG9uZSBkZXRlY3Rpb25cclxuICAgcGI1X3RpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgIGFmdGVyZGlhbHRvbmUgPSAoKT0+e307XHJcblxyXG4gICByaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgIGlmKHZhbHVlKSB0aGlzLkNSQSA9IHRoaXMuQ1JBIHwgMGIxMDAwMDAwMDsgXHJcbiAgICAgIGVsc2UgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMTExMTExMTsgXHJcbiAgICAgIC8vYzY0LnNldF9leHRlcm5hbF9pcnEodmFsdWUpO1xyXG4gICB9XHJcbiBcclxuICAgcmVzZXQoKSB7XHJcbiAgICAgIHRoaXMuQ1JBID0gMDtcclxuICAgICAgdGhpcy5DUkIgPSAwOyAgICBcclxuICAgICAgdGhpcy5QQSA9IDA7XHJcbiAgICAgIHRoaXMuUEIgPSAwO1xyXG4gICAgICB0aGlzLkREUkEgPSAwO1xyXG4gICAgICB0aGlzLkREUkIgPSAwO1xyXG4gICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKDEpO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBSRVNFVGApOyAgICBcclxuICAgfVxyXG4gXHJcbiAgIHJlYWQoYWRkcjogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBDUkEyID0gKHRoaXMuQ1JBID4+IDIpICYgMTtcclxuICAgICAgbGV0IENSQjIgPSAodGhpcy5DUkIgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMztcclxuICAgICAgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBQQSA9ICQke2hleCh0aGlzLlBBLDIpfWApOyBcclxuICAgICAgICAgdGhpcy5DUkEgPSB0aGlzLkNSQSAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGludGVycnVwdCBmbGFnXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBBOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQSA9ICQke2hleCh0aGlzLkREUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JBID0gJCR7aGV4KHRoaXMuQ1JBLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTAgJiYgQ1JCMiA9PT0gMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBQQiA9ICQke2hleCh0aGlzLlBCLDIpfWApOyAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuQ1JCID0gdGhpcy5DUkIgJiAwYjAwMTExMTExOyAvLyBjbGVhciBhbHNvIGludGVycnVwdCBmbGFnIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5QQjsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAwKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIEREUkIgPSAkJHtoZXgodGhpcy5ERFJCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5ERFJCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIENSQiA9ICQke2hleCh0aGlzLkNSQiwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuQ1JCOyBcclxuICAgICAgfVxyXG4gICB9XHJcbiBcclxuICAgd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICAgICAgIGlmKFJTID09PSAwYjAxKSB0aGlzLndyaXRlX0NSQShkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMSkgdGhpcy53cml0ZV9DUkIoZGF0YSk7XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMSkgdGhpcy53cml0ZV9QQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAwKSB0aGlzLndyaXRlX0REUkEoZGF0YSk7ICAgICAgXHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTAgJiYgQ1JCMiA9PT0gMSkgdGhpcy53cml0ZV9QQihkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAwKSB0aGlzLndyaXRlX0REUkIoZGF0YSk7ICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX0NSQShkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5DUkEgPSBkYXRhO1xyXG4gICAgICAvLyBiYW5rIHN3aXRjaGluZ1xyXG4gICAgICBpZihkYXRhICYgMGIwMDExMDAwMCkge1xyXG4gICAgICAgICBsZXQgYmFuayA9IChkYXRhID4+IDMpICYgMTtcclxuICAgICAgICAgYzY0LnNldF9jYm1fNjQ5OV9uYmFuayhiYW5rKTsgICAgICAgICBcclxuICAgICAgICAgZGVidWcoYDY0OTk6IFJPTSBiYW5rIHN3aXRjaCB0byAke2Jhbmt9YCk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZGVidWcoYFBJQTogc2V0IENSQSB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JCKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkNSQiA9IGRhdGE7XHJcbiAgICAgIC8vIEVYUk9NIHBpbiB0cmlnZ2VyXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBleHJvbSA9IChkYXRhID4+IDMpICYgMTtcclxuICAgICAgICAgYzY0LnNldF9leHJvbSghIWV4cm9tKTsgICAgICAgICBcclxuICAgICAgICAgZGVidWcoYDY0OTk6IEVYUk9NIHN3aXRjaCB0byAkeyEhZXhyb219YCk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZGVidWcoYFBJQTogc2V0IENSQiB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfSAgIFxyXG5cclxuICAgd3JpdGVfRERSQShkYXRhOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5ERFJBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkEgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX0REUkIoZGF0YTogbnVtYmVyKSB7ICAgXHJcbiAgICAgIHRoaXMuRERSQiA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBERFJCIHRvIGJpbmFyeSAke2RhdGEudG9TdHJpbmcoMTYpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9QQShkYXRhOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5QQSA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBQQSB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICBcclxuICAgfVxyXG4gXHJcbiAgIHdyaXRlX1BCKGRhdGE6IG51bWJlcikge1xyXG4gICAgICAvLyBkaWFsdG9uZSBkZXRlY3Rpb24gc3RhcnRzIGJicyBkZWxheWVkXHJcbiAgICAgIGxldCBQQjUgPSAodGhpcy5QQiA+PiA1KSAmIDE7XHJcbiAgICAgIGxldCBvbGRfUEI1ID0gKGRhdGEgPj4gNSkgJiAxO1xyXG4gICAgICBcclxuICAgICAgaWYoUEI1ID09PSAwICYmIG9sZF9QQjUgPT09IDEpIHtcclxuICAgICAgICAgLy8gY2FuY2VsIG9sZCB0aW1lclxyXG4gICAgICAgICBpZih0aGlzLnBiNV90aW1lcikgY2xlYXJUaW1lb3V0KHRoaXMucGI1X3RpbWVyKTtcclxuICAgICAgICAgdGhpcy5wYjVfdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJkaWFsdG9uZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBiNV90aW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgfSwgMzAwMCkgYXMgYW55IGFzIG51bWJlcjtcclxuICAgICAgICAgZGVidWcoXCJQSUE6IGRpYWxpbmcuLi5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCh0aGlzLlBCICYgMTI4KSAhPT0gKGRhdGEgJiAxMjgpKSB7XHJcbiAgICAgICAgIC8vIFBCNyBjaGFuZ2VkXHJcbiAgICAgICAgIGRlYnVnKGAqKioqKioqKiBQQjc6ICR7KGRhdGEgJiAxMjgpPj43fWApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuUEIgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgUEIgdG8gJCR7aGV4KGRhdGEsMil9YCk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICAvL2NvbnNvbGUubG9nKG0pO1xyXG59XHJcbiAiLCIvKlxyXG5BQ0lBID0gbW90b3JvbGEgNjg1MFxyXG4gICAgQ1MyID0gL0lPMiAoY3B1IEkvTykgcmFuZ2UgJERGMDAtJERGRkYuICAgXHJcblxyXG42ODUwIHN0YXR1cyByZWdpc3RlclxyXG4gICAwIC0gcmVjZWl2ZSBidWZmZXIgZnVsbCBcclxuICAgMSAtIHRyYW5zbWl0IGJ1ZmZlciBlbXB0eVxyXG4gICAyIC0gbm8gY2FycmllclxyXG4gICAzIC0gL2NsZWFyIHRvIHNlbmRcclxuICAgNCAtIGZyYW1pbmcgZXJyb3JcclxuICAgNSAtIHJlY2VpdmVyIG92ZXJydW5cclxuICAgNiAtIHBhcml0eSBlcnJvclxyXG4gICA3IC0gL0lSUVxyXG5cclxuNjg1MCBjb250cm9sIHJlZ2lzdGVyXHJcbiAgIENSMXxDUjAgPSAwMCBubyBkaXZpZGVcclxuICAgICAgICAgICAgIDAxIGRpdmlkZSBieSAxNlxyXG4gICAgICAgICAgICAgMTAgZGl2aWRlIGJ5IDY0XHJcbiAgICAgICAgICAgICAxMSBtYXN0ZXIgcmVzZXQgXHJcbiAgICBcclxuICAgIENSNHxDUjN8Q1IyID0gYml0L3Bhcml0eS9zdG9wIGJpdFxyXG5cclxuKi9cclxuXHJcbmNvbnN0IGNvbmZpZ19iaXRzID0gW1xyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm5vbmVcIiwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJub25lXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAxIH1cclxuXTtcclxuXHJcbmNvbnN0IGNsb2NrX2RpdmlkZXIgPSBbIFwibm9uZVwiLCBcIjE2XCIsIFwiNjRcIiBdO1xyXG5cclxuZXhwb3J0IGNsYXNzIE02ODUwXHJcbnsgICBcclxuICAgQ09OVFJPTCA9IDA7XHJcbiAgIFRSQU5TTUlUX0RBVEEgPSAwOyBcclxuICAgUkVDRUlWRV9EQVRBID0gMDsgIFxyXG5cclxuICAgLy8gc3RhdHVzIHJlZ2lzdGVyIGJpdHNcclxuICAgU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgID0gMDtcclxuICAgU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgID0gMDtcclxuICAgU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgID0gMDtcclxuICAgU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDtcclxuXHJcbiAgIHJlY2VpdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdOyAgXHJcbiAgIHdhaXRfYWZ0ZXJfcmVhZCA9IDA7ICAgXHJcblxyXG4gICAvL3NhdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICBcclxuICAgZ2V0X3N0YXR1c19ieXRlKCkge1xyXG4gICAgICB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMID0gdGhpcy5yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT09IDAgPyAwIDogMTtcclxuICAgICAgaWYodGhpcy53YWl0X2FmdGVyX3JlYWQgPiAwKSB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMID0gMDtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdGF0dXMgPSBcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgIDw8IDApIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZIDw8IDEpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgIDw8IDIpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgIDw8IDMpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgIDw8IDQpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gIDw8IDUpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgIDw8IDYpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgIDw8IDcpOyAgIFxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICB9XHJcblxyXG4gICBjcHVfcmVhZChhZGRyOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRfc3RhdHVzX2J5dGUoKTtcclxuICAgICAgICAgdGhpcy53YWl0X2FmdGVyX3JlYWQtLTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKCk7XHJcbiAgICAgICAgIGlmKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSB0aGlzLnJlY2VpdmVfYnVmZmVyWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVfYnVmZmVyID0gdGhpcy5yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53YWl0X2FmdGVyX3JlYWQgPSAzOyAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiB0aGlzLlJFQ0VJVkVfREFUQTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBjcHVfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBzZXQgY29udHJvbCA9ICgke2RhdGEudG9TdHJpbmcoMil9KWApO1xyXG4gICAgICAgICB0aGlzLkNPTlRST0wgPSBkYXRhO1xyXG5cclxuICAgICAgICAgbGV0IENSMTAgID0gKHRoaXMuQ09OVFJPTCAmIDBiMDAwMDAwMTEpO1xyXG4gICAgICAgICBsZXQgQ1I0MzIgPSAodGhpcy5DT05UUk9MICYgMGIwMDAxMTEwMCkgPj4gMjtcclxuICAgICAgICAgbGV0IENSNjUgID0gKHRoaXMuQ09OVFJPTCAmIDBiMDExMDAwMDApID4+IDU7XHJcbiAgICAgICAgIGxldCBDUjcgICA9ICh0aGlzLkNPTlRST0wgJiAwYjEwMDAwMDAwKSA+PiA3O1xyXG5cclxuICAgICAgICAgLy8gbWFzdGVyIHJlc2V0XHJcbiAgICAgICAgIGlmKENSMTAgPT09IDBiMTEpIHtcclxuICAgICAgICAgICAgZGVidWcoYEFDSUE6IG1hc3RlciBSRVNFVGApO1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVfYnVmZmVyID0gW107ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5UUkFOU01JVF9EQVRBID0gMDtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19UUkFOU01JVFRFUl9FTVBUWSA9IDE7XHJcbiAgICAgICAgICAvL3RoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19GUkFNSU5HX0VSUk9SICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19JUlEgICAgICAgICAgICAgICA9IDA7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdldF9zdGF0dXNfYnl0ZSgpOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1ZyhgQUNJQTogY2xvY2sgZGl2aWRlIGJ5ICR7Y2xvY2tfZGl2aWRlcltDUjEwXX1gKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgbGV0IHsgYml0cywgcGFyaXR5LCBzdG9wX2JpdHMgfSA9IGNvbmZpZ19iaXRzW0NSNDMyXTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IGJpdCBjb25maWc6ICR7Yml0c30gYml0cy9wYXJpdHkgJHtwYXJpdHl9L3N0b3AgYml0cyR7c3RvcF9iaXRzfWApO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogQ1I2fDUgPSAke0NSNjUudG9TdHJpbmcoMil9YCk7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBDUjcgPSAke0NSN31gKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IHNldCB0cmFuc21pdCBkYXRhID0gKCR7ZGF0YX0pYCk7XHJcbiAgICAgICAgIHRoaXMuVFJBTlNNSVRfREFUQSA9IGRhdGE7XHJcbiAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMDtcclxuICAgICAgICAgdGhpcy50cmFuc21pdF9kYXRhKHRoaXMuVFJBTlNNSVRfREFUQSk7XHJcbiAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvLyBleHRlcm5hbCB3b3JsZCBpbnRlcmZhY2VcclxuXHJcbiAgIC8vIGNhbGxlZCBmcm9tIEJCUyBjb25uZWN0b3JcclxuICAgcmVjZWl2ZV9kYXRhKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgZGF0YS5mb3JFYWNoKGU9PnRoaXMucmVjZWl2ZV9idWZmZXIucHVzaChlKSk7XHJcbiAgICAgIC8vZGF0YS5mb3JFYWNoKGU9PnRoaXMuc2F2ZV9idWZmZXIucHVzaChlKSk7XHJcbiAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKCk7XHJcbiAgICAgIGRlYnVnKGBBQ0lBOiByZWNlaXZlZCAke2RhdGEubGVuZ3RofSBieXRlc2ApO1xyXG4gICB9XHJcblxyXG4gICAvLyBzZW5kIGRhdGEgdG8gQkJTIGNvbm5lY3RvclxyXG4gICB0cmFuc21pdF9kYXRhID0gKGRhdGE6IG51bWJlcik9Pnt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1ZyhtOiBzdHJpbmcpIHtcclxuICAgLy9jb25zb2xlLmxvZyhtKTtcclxufSIsImltcG9ydCBlbXNjcmlwdGVuX21vZHVsZSBmcm9tIFwiLi4vZW1zY3JpcHRlbl9tb2R1bGVcIjtcclxuaW1wb3J0IHsgb25lRnJhbWUgfSBmcm9tIFwiLi9lbXVsYXRvclwiO1xyXG5cclxubGV0IHdhc21faW5zdGFuY2U6IGFueTtcclxuXHJcbi8qXHJcbmxldCByb21fbG9hZDtcclxuXHJcbmxldCBpb19yZWFkO1xyXG5sZXQgaW9fd3JpdGU7XHJcblxyXG5sZXQga2V5Ym9hcmRfcmVzZXQ7XHJcbmxldCBrZXlib2FyZF9wcmVzcztcclxubGV0IGtleWJvYXJkX3JlbGVhc2U7XHJcbmxldCBrZXlib2FyZF9wb2xsO1xyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGM2NCA9IHsgXHJcbiAgIHRhcGU6IHsgfSxcclxuICAgaW5pdDogKCk9Pnt9LFxyXG4gICBjb25maWc6IChjb25mOiBudW1iZXIpPT57fSxcclxuICAgZXg6IChjeWNsZXM6IG51bWJlcik9Pnt9LFxyXG4gICBleGVjOiAoKT0+e30sXHJcbiAgIGV4ZWNfdXM6IChtc2VjOiBudW1iZXIpPT57fSxcclxuICAgdmRwOiAoKT0+e30sXHJcbiAgIHJlc2V0OiAoKT0+e30sXHJcbiAgIGtleV9kb3duOiAoa2V5OiBudW1iZXIpPT57fSxcclxuICAga2V5X3VwOiAoa2V5OiBudW1iZXIpPT57fSxcclxuICAgam95c3RpY2s6ICgpPT57fSxcclxuICAgZW11X2pveTogKGpveTogbnVtYmVyKT0+e30sXHJcbiAgIGxvYWRfcHJnOiAoYnl0ZXM6IFVpbnQ4QXJyYXksIHNpemU6IG51bWJlcik9Pnt9LFxyXG4gICBwZWVrOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgcG9rZTogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBjYXNfcG9ydDogKCk9Pnt9LFxyXG4gICBtZW1fcmVhZDogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIG1lbV93cml0ZTogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBtZW1fcmVhZF93b3JkOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgbWVtX3dyaXRlX3dvcmQ6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgZ286ICgpPT57XHJcbiAgICAgIGM2NC5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgIG9uZUZyYW1lKHVuZGVmaW5lZCk7XHJcbiAgIH0sXHJcblxyXG4gICBzdG9wcGVkOiB0cnVlLFxyXG5cclxuICAgLy8gQ0JNIDY0OTkgQURBVFRBVE9SRSBURUxFTUFUSUNPIGVtdWxhdGlvblxyXG4gICBzZXRfZXhyb206ICh2YWx1ZTogYm9vbGVhbikgPT4ge30sXHJcbiAgIHNldF9jYm1fNjQ5OV9uYmFuazogKHZhbHVlOiBudW1iZXIpID0+IHt9LFxyXG4gICBzZXRfZW11bGF0ZV9jYm1fNjQ5OTogKHZhbHVlOiBib29sZWFuKSA9PiB7fSxcclxuICAgc2V0X2V4dGVybmFsX2lycTogKHZhbHVlOiBib29sZWFuKSA9PiB7fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkX3dhc20oKSB7ICAgXHJcbiAgIFxyXG4gICBsZXQgaW5zdGFuY2UgPSBhd2FpdCBlbXNjcmlwdGVuX21vZHVsZSgpO1xyXG4gICBcclxuICAgYzY0LmluaXQgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5pdFwiLCBudWxsKTtcclxuICAgYzY0LmNvbmZpZyAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfY29uZmlnXCIsIG51bGwsIFsnbnVtYmVyJ10pO1xyXG4gICBjNjQuZXhlYyAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leGVjXCIsIG51bGwpO1xyXG4gICBjNjQuZXggICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leFwiLCBbJ251bWJlciddKTtcclxuICAgYzY0LmV4ZWNfdXMgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhlY191c1wiLCBbJ251bWJlciddKTtcclxuICAgYzY0LnZkcCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdmRwXCIsIG51bGwpO1xyXG4gICBjNjQucmVzZXQgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGM2NC5rZXlfZG93biA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV9kb3duXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5rZXlfdXAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV91cFwiICAgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5qb3lzdGljayA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2pveXN0aWNrXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcblxyXG4gICBjNjQuZW11X2pveSAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfam95c3RpY2tfdHlwZVwiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG5cclxuICAgYzY0LmxvYWRfcHJnICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19xdWlja19sb2FkXCIgLCBudWxsLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIC8vYzY0Lmluc2VydF9jYXJ0ZHJpZ2UgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiICwgbnVsbCwgWydhcnJheScsICdudW1iZXInXSApO1xyXG5cclxuICAgYzY0LnBlZWsgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfbWVtX2NwdV9yZFwiICAgLCAnbnVtYmVyJywgWydudW1iZXInXSApO1xyXG4gICBjNjQucG9rZSAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19tZW1fY3B1X3dyXCIgICAsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcblxyXG4gICAvL2M2NC5kdW1wX3ZpYyA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2R1bXBfdmljXCIgICAsIG51bGwgKTtcclxuXHJcbiAgIGM2NC5jYXNfcG9ydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2Nhc19wb3J0XCIgICAsICdudW1iZXInKTtcclxuXHJcbiAgIC8qXHJcbiAgIGM2NC50YXBlLmluc2VydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luc2VydF90YXBlXCIgICwgJ2Jvb2wnLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIGM2NC50YXBlLnJlbW92ZSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3JlbW92ZV90YXBlXCIgICwgbnVsbCApO1xyXG4gICBjNjQudGFwZS5wbGF5ICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c190YXBlX3BsYXlcIiAgICAsIG51bGwgKTtcclxuICAgYzY0LnRhcGUuc3RvcCAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdGFwZV9zdG9wXCIgICAgLCBudWxsICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQubWVtX3JlYWQgPSBjNjQucGVlaztcclxuICAgYzY0Lm1lbV93cml0ZSA9IGM2NC5wb2tlO1xyXG5cclxuICAgYzY0Lm1lbV93cml0ZV93b3JkID0gZnVuY3Rpb24oYWRkcmVzcywgd29yZCkge1xyXG4gICAgICBjNjQubWVtX3dyaXRlKGFkZHJlc3MgKyAwLCB3b3JkICYgMHhGRik7XHJcbiAgICAgIGM2NC5tZW1fd3JpdGUoYWRkcmVzcyArIDEsICh3b3JkICYgMHhGRjAwKSA+PiA4KTtcclxuICAgfVxyXG4gICBcclxuICAgYzY0Lm1lbV9yZWFkX3dvcmQgPSBmdW5jdGlvbihhZGRyZXNzKSB7XHJcbiAgICAgIGNvbnN0IGxvID0gYzY0Lm1lbV9yZWFkKGFkZHJlc3MgKyAwKTtcclxuICAgICAgY29uc3QgaGkgPSBjNjQubWVtX3JlYWQoYWRkcmVzcyArIDEpO1xyXG4gICAgICByZXR1cm4gbG8raGkqMjU2O1xyXG4gICB9ICAgXHJcblxyXG4gICAvKlxyXG4gICBjcHVfaW5pdCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfaW5pdFwiLCBudWxsKTtcclxuICAgY3B1X3Jlc2V0ICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X3Jlc2V0XCIsIG51bGwpO1xyXG4gICBjcHVfcnVuX2luc3RydWN0aW9uID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfcnVuX2luc3RydWN0aW9uXCIsICdudW1iZXInKTtcclxuXHJcbiAgIG1lbV9yZWFkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibWVtX3JlYWRcIiwgJ251bWJlcicsIFsnbnVtYmVyJ10pO1xyXG4gICBtZW1fd3JpdGUgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcIm1lbV93cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcbiAgIHJvbV9sb2FkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwicm9tX2xvYWRcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG5cclxuICAgaW9fcmVhZCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb19yZWFkXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuICAgaW9fd3JpdGUgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb193cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcblxyXG4gICBsbTgwY190aWNrICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3RpY2tcIiwgJ251bWJlcicpO1xyXG4gICBsbTgwY19zZXRfZGVidWcgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3NldF9kZWJ1Z1wiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2N0Y19lbmFibGUgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfY3RjX2VuYWJsZVwiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2luaXQgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfaW5pdFwiLCBudWxsKTtcclxuICAgbG04MGNfcmVzZXQgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGxtODBjX3RpY2tfbGluZSAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfdGlja19saW5lXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuXHJcbiAgIGtleWJvYXJkX3Jlc2V0ICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcmVzZXRcIiAgLCBudWxsICk7XHJcbiAgIGtleWJvYXJkX3ByZXNzICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcHJlc3NcIiAgLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG4gICBrZXlib2FyZF9yZWxlYXNlICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3JlbGVhc2VcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuICAga2V5Ym9hcmRfcG9sbCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9wb2xsXCIgICAsICdudW1iZXInLCBbJ251bWJlciddICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQuc2V0X2V4cm9tICAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZXhyb21cIiAgICAgICAgICAgICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBjNjQuc2V0X2NibV82NDk5X25iYW5rICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfY2JtXzY0OTlfbmJhbmtcIiAgICAsIG51bGwsIFsnbnVtYmVyJ10gKTsgXHJcbiAgIGM2NC5zZXRfZW11bGF0ZV9jYm1fNjQ5OSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCIgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIGM2NC5zZXRfZXh0ZXJuYWxfaXJxICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9leHRlcm5hbF9pcnFcIiAgICAgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIFxyXG4gICB3YXNtX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgIFxyXG4gICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfd2FzbV9pbnN0YW5jZSgpIHtcclxuICAgcmV0dXJuIHdhc21faW5zdGFuY2U7XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gVE9ETyBzdGFydCBiYnMgb25seSB3aGVuIHJlcXVpcmVkXHJcbi8vIFRPRE8gcml1bmlmaWNhcmUgVGVybWluYWxlL1BFVFNDSUkgYmJzIGNvbiA2NDk5XHJcbi8vIFRPRE8gcHVzaCBDSUEgVE9EIHRvIGZsb29oL2NoaXBzXHJcbi8vIFRPRE8gdXBkYXRlIHRvIG5ldyBjNjQgaW4gZmxvb2gvY2hpcHNcclxuXHJcbi8vIG5vcm1hbCBCQlMgc3RhcnRzIHdpdGggP2xvYWQ9bmlwcHVyNzIvdGVybWluYWwucHJnXHJcbi8vIHByZXN0ZWwgQkJTIHN0YXJ0cyB3aXRoID9jYm02NDk5PXRydWVcclxuXHJcbi8qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVHZW9tZXRyeSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IHBvbGxfa2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBwZXRzY2lpIH0gZnJvbSBcIi4vcGV0c2NpaV9iYnNcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcblxyXG5sZXQgc3RvcHBlZCA9IGZhbHNlOyAvLyBhbGxvd3MgdG8gc3RvcC9yZXN1bWUgdGhlIGVtdWxhdGlvblxyXG5cclxubGV0IGxhc3Rfa2V5Ym9hcmRwb2xsID0gMDtcclxuXHJcbmxldCBsYXN0X3RpbWVzdGFtcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25lRnJhbWUodGltZXN0YW1wOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgbGV0IHN0YW1wID0gdGltZXN0YW1wID09IHVuZGVmaW5lZCA/IGxhc3RfdGltZXN0YW1wIDogdGltZXN0YW1wO1xyXG4gICBsZXQgdXNlYyA9IChzdGFtcCAtIGxhc3RfdGltZXN0YW1wKSoxMDAwO1xyXG4gICBsYXN0X3RpbWVzdGFtcCA9IHN0YW1wO1xyXG5cclxuICAgaWYodXNlYyA+IDMyMDAwKSB1c2VjID0gMzIwMDA7XHJcblxyXG4gICBpZihzdGFtcCAtIGxhc3Rfa2V5Ym9hcmRwb2xsID4gMTUpIHtcclxuICAgICAgcG9sbF9rZXlib2FyZCgpO1xyXG4gICAgICBsYXN0X2tleWJvYXJkcG9sbCA9IHN0YW1wO1xyXG4gICB9XHJcblxyXG4gICBjNjQuZXhlY191cyh1c2VjKTtcclxuXHJcbiAgIGlmKCFzdG9wcGVkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25lRnJhbWUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuXHJcbiAgIGM2NC5jb25maWcoMCk7XHJcblxyXG4gICBjNjQuZXgoNTAwMCk7ICAgICAvLyB3YWl0IGZvciBtZW1vcnkgcGF0dGVybiB3cml0aW5nXHJcbiAgIGM2NC5tZW1fd3JpdGUoMjA0LDEpOyAvLyBmbGFncyBzeXN0ZW0gbm90IGJvb3RlZCB5ZXRcclxuXHJcbiAgIGxldCBvcHRpb25zID0gYXdhaXQgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzKCk7XHJcblxyXG4gICAvLyBhdXRvc3RhcnQgdGVybWluYWwgaWYgbG9hZGVkIGZyb20gYmJzLnNibGVuZG9yaW8udWUgb3IgYmJzLnJldHJvY2FtcHVzLmNvbVxyXG4gICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICBsZXQgaXNfcmV0cm9jYW1wdXMgPSBocmVmLm1hdGNoKC9eaHR0cDpcXC9cXC8oYmJzXFwuc2JsZW5kb3Jpb1xcLmV1fGJic1xcLnJldHJvY2FtcHVzXFwuY29tKS9nKTsgICBcclxuXHJcbiAgIGlmKGlzX3JldHJvY2FtcHVzIHx8IG9wdGlvbnMucGV0c2NpaWJicyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBldHNjaWkuYWRkcmVzcyA9IG9wdGlvbnMud3N0Y3AgPz8gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgwXCI7XHJcbiAgICAgIHBldHNjaWkucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sID8/IFwiYmJzXCI7XHJcbiAgICAgIGlmKG9wdGlvbnMubG9hZCA9PT0gdW5kZWZpbmVkKSBmZXRjaFByb2dyYW0oXCJuaXBwdXI3Mi90ZXJtaW5hbC5wcmdcIik7XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZUdlb21ldHJ5KCk7XHJcblxyXG4gICBjNjQuZ28oKTsgICBcclxufVxyXG4iLCJpbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9ncmFtKG5hbWU6IHN0cmluZylcclxue1xyXG4gICAvL2NvbnNvbGUubG9nKGB3YW50aW5nIHRvIGxvYWQgJHtuYW1lfWApO1xyXG4gICB0cnlcclxuICAge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBzb2Z0d2FyZS8ke25hbWV9YCk7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGxvYWRCeXRlcyhieXRlcyk7XHJcbiAgIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBjYXRjaChlcnIpXHJcbiAgIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBwYXN0ZSwgaGV4IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnl0ZXMoYnl0ZXM6IFVpbnQ4QXJyYXkpIHtcclxuICAgd2FpdF9hbmRfbG9hZChieXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhaXRfYW5kX2xvYWQoYnVmZmVyOiBVaW50OEFycmF5KSB7XHJcbiAgIGlmKGM2NC5tZW1fcmVhZCgyMDQpIT09MCkge1xyXG4gICAgICAvLyBjdXJzb3Igbm90IGZsYXNoaW5nLCBzeXN0ZW0gbm90IHlldCBib290ZWRcclxuICAgICAgc2V0VGltZW91dCgoKT0+d2FpdF9hbmRfbG9hZChidWZmZXIpLCAxMDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuICAgZG9fbG9hZChidWZmZXIpO1xyXG4gICBjb25zb2xlLmxvZyhgbG9hZGVkICR7YnVmZmVyLmxlbmd0aH0gYnl0ZXNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9fbG9hZChidWZmZXI6IFVpbnQ4QXJyYXkpIHtcclxuICAgYzY0LmxvYWRfcHJnKGJ1ZmZlciwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgIHBhc3RlKFwiUlVOXFxyXCIpO1xyXG59XHJcblxyXG5jb25zdCBCQVNUWFQgPSAweDAwMmI7XHJcbmNvbnN0IFBST0dORCA9IDB4MDAyZDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX2ZpbGUoZmlsZW5hbWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgaWYoc3RhcnQgPT09IHVuZGVmaW5lZCkgc3RhcnQgPSBjNjQubWVtX3JlYWRfd29yZChCQVNUWFQpO1xyXG4gICBpZihlbmQgPT09IHVuZGVmaW5lZCkgZW5kID0gYzY0Lm1lbV9yZWFkX3dvcmQoUFJPR05EKS0xO1xyXG5cclxuICAgY29uc3QgcHJnID0gWyBzdGFydCAmIDB4RkYsIHN0YXJ0ID4+IDggXTtcclxuICAgZm9yKGxldCBpPTAsdD1zdGFydDsgdDw9ZW5kOyBpKyssdCsrKSB7XHJcbiAgICAgIHByZy5wdXNoKGM2NC5tZW1fcmVhZCh0KSk7XHJcbiAgIH1cclxuICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShwcmcpO1xyXG4gICBcclxuICAgYXdhaXQgZG93bmxvYWQoZmlsZW5hbWUsIGJ5dGVzKTtcclxuXHJcbiAgIGNvbnNvbGUubG9nKGBzYXZlZCBcIiR7ZmlsZW5hbWV9XCIgJHtieXRlcy5sZW5ndGh9IGJ5dGVzIGZyb20gJHtoZXgoc3RhcnQsNCl9aCB0byAke2hleChlbmQsNCl9aGApO1xyXG4gICAvL2NwdS5yZXNldCgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkgeyAgIFxyXG4gICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7ICAgXHJcbiAgIHNhdmVBcyhibG9iLCBmaWxlTmFtZSk7XHJcbiAgIGNvbnNvbGUubG9nKGBkb3dubG9hZGVkIFwiJHtmaWxlTmFtZX1cImApO1xyXG59XHJcbiIsImltcG9ydCB7IGF1ZGlvQ29udGV4dFJlc3VtZSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQX0gZnJvbSBcIi4va2V5Ym9hcmRfSVRcIjtcclxuXHJcbmxldCBsYXN0X3Njcm9sbF9sb2NrOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxubGV0IGNvbnRyb2xfcHJlc3NlZCA9IGZhbHNlO1xyXG5sZXQgYWx0X3ByZXNzZWQgPSBmYWxzZTtcclxubGV0IHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG5cclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IHRydWU7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRMZWZ0XCIpIGFsdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKSBzaGlmdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBjb250cm9sX3ByZXNzZWQgPSB0cnVlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0UmlnaHRcIikgYWx0X3ByZXNzZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRSaWdodFwiKSBzaGlmdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgIC8qXHJcbiAgIGNvbnNvbGUubG9nKFwia2V5RG93blwiKTtcclxuICAgY29uc29sZS5sb2coZSk7XHJcbiAgICovXHJcblxyXG4gICAvLyBmcm9tIENocm9tZSA3MSBhdWRpbyBpcyBzdXNwZW5kZWQgYnkgZGVmYXVsdCBhbmQgbXVzdCByZXN1bWUgd2l0aGluIGFuIHVzZXItZ2VuZXJhdGVkIGV2ZW50XHJcbiAgIGF1ZGlvQ29udGV4dFJlc3VtZSgpO1xyXG5cclxuICAgaWYobGFzdF9zY3JvbGxfbG9jayA9PT0gdW5kZWZpbmVkKSBsYXN0X3Njcm9sbF9sb2NrID0gZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKTtcclxuXHJcbiAgIGlmKGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIikhPWxhc3Rfc2Nyb2xsX2xvY2spIHtcclxuICAgICAgbGV0IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkID0gZS5nZXRNb2RpZmllclN0YXRlKFwiU2Nyb2xsTG9ja1wiKTtcclxuICAgICAgbGFzdF9zY3JvbGxfbG9jayA9IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkO1xyXG4gICAgICBsZXQgZW11X2pveXN0aWNrID0gc2Nyb2xsX2xvY2tfa2V5X3ByZXNzZWQgPyAzIDogMDtcclxuICAgICAgYzY0LmVtdV9qb3koZW11X2pveXN0aWNrKTtcclxuICAgICAgY29uc29sZS5sb2coYEpveXN0aWNrIGVtdWxhdGlvbiAke2VtdV9qb3lzdGljaz09Mz9cImVuYWJsZWRcIjpcImRpc2FibGVkXCJ9YCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIGRpc2FibGUgYXV0byByZXBlYXQsIGFzIGl0IGlzIGhhbmRsZWQgb24gdGhlIGZpcm13YXJlXHJcbiAgIGlmKGUucmVwZWF0KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgIHJldHVybjtcclxuICAgfSAgIFxyXG5cclxuICAgLy8gKioqIHNwZWNpYWwgKG5vbiBjaGFyYWN0ZXJzKSBrZXlzICoqKlxyXG5cclxuICAgLy8gUkVTRVQga2V5IGlzIENUUkwrQUxUK0JSRUFLXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJQYXVzZVwiICYmIGUuYWx0S2V5ICYmIGUuY3RybEtleSkge1xyXG4gICAgICBjNjQucmVzZXQoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcblxyXG4gICAvLyBpZiBrZXlib2FyZCBJVEFcclxuICAge1xyXG4gICAgICBjb25zdCBoYXJkd2FyZV9rZXlzID0gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoZS5jb2RlLCBlLmtleSwgZS5zaGlmdEtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5nZXRNb2RpZmllclN0YXRlKFwiQWx0R3JhcGhcIikgKTtcclxuICAgICAgaWYoaGFyZHdhcmVfa2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInByZXNzXCIsIGhhcmR3YXJlX2tleXMgfSk7XHJcbiAgICAgIC8va2V5X3ByZXNzZWQucHVzaChoYXJkd2FyZV9rZXlzKTtcclxuICAgICAga2V5X3ByZXNzX21hcFtlLmNvZGVdID0gaGFyZHdhcmVfa2V5cztcclxuICAgICAgLy9jb25zb2xlLmxvZyhgbWFwIGFmdGVyIHByZXNzOiAke09iamVjdC5rZXlzKGtleV9wcmVzc19tYXApLmpvaW4oXCIsXCIpfWApO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24ga2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xyXG5cclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIpIGNvbnRyb2xfcHJlc3NlZCA9IGZhbHNlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0TGVmdFwiKSBhbHRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRMZWZ0XCIpIHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpIGFsdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdFJpZ2h0XCIpIHNoaWZ0X3ByZXNzZWQgPSBmYWxzZTsgXHJcbiAgIC8vY29uc29sZS5sb2coZS5jb2RlKTtcclxuXHJcbiAgIC8qXHJcbiAgIGNvbnNvbGUubG9nKFwia2V5VXBcIik7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gZml4IGEgYnVnIGluIENocm9tZTogcHJlc3NpbmcgXCJBTFQtR1IgQFwiIHJlc3VsdHMgaW4ga2V5ZG93biBvZiBcIsOyXCIgaW5zdGVhZCBvZiBcIkBcIlxyXG4gICAvL2lmKGUua2V5ID09PSAnw7InICYmIGUua2V5Q29kZSA9PT0gMTkyICYmIGUud2hpY2ggPT09IDE5Mikge1xyXG4gICAvLyAgIGUua2V5ID0gJ0AnO1xyXG4gICAvL31cclxuXHJcbiAgIGNvbnN0IGhhcmR3YXJlX2tleXMgPSBwY2tleV90b19oYXJkd2FyZV9rZXlzX0lUQShlLmNvZGUsIGUua2V5LCBlLnNoaWZ0S2V5LCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLmdldE1vZGlmaWVyU3RhdGUoXCJBbHRHcmFwaFwiKSk7XHJcbiAgIGlmKGhhcmR3YXJlX2tleXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzIH0pO1xyXG5cclxuICAgLy8gZml4IHNoaWZ0IHByb2JsZW1cclxuICAgLy9rZXlfcHJlc3NlZC5mb3JFYWNoKGs9PmtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGsgfSkpO1xyXG4gICAvL2tleV9wcmVzc2VkID0gW107XHJcblxyXG4gICBsZXQgY29kZSA9IGUuY29kZTtcclxuICAgLy9jb25zb2xlLmxvZyhgbWFwIGJlZm9yZSByZWxlYXNlOiAke09iamVjdC5rZXlzKGtleV9wcmVzc19tYXApLmpvaW4oXCIsXCIpfWApO1xyXG5cclxuICAgLy8gZml4IHNoaWZ0IHByb2JsZW1cclxuICAgaWYoa2V5X3ByZXNzX21hcFtjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBrID0ga2V5X3ByZXNzX21hcFtjb2RlXTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czogayB9KTtcclxuICAgICAgZGVsZXRlIGtleV9wcmVzc19tYXBbY29kZV07XHJcbiAgIH1cclxuXHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuLy8gY29ubmVjdCBET00gZXZlbnRzXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudDsgXHJcbmVsZW1lbnQub25rZXlkb3duID0ga2V5RG93bjtcclxuZWxlbWVudC5vbmtleXVwID0ga2V5VXA7XHJcbmVsZW1lbnQub25rZXlwcmVzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZihlLmtleSA9PSBcIsOgXCIpIGFjY2VudGF0ZShcImFcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDqFwiKSBhY2NlbnRhdGUoXCJlXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6lcIikgYWNjZW50YXRlKFwiZVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOsXCIpIGFjY2VudGF0ZShcImlcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDslwiKSBhY2NlbnRhdGUoXCJvXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw7lcIikgYWNjZW50YXRlKFwidVwiKTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gYWNjZW50YXRlKGtleSkgeyAgICAgIFxyXG4gICBrZXlEb3duKGZha2VFdmVudChrZXkpKTsgICBcclxuICAga2V5VXAoZmFrZUV2ZW50KGtleSkpOyAgIFxyXG4gICBrZXlEb3duKGZha2VFdmVudChcIidcIikpO1xyXG4gICBrZXlVcChmYWtlRXZlbnQoXCInXCIpKTsgICBcclxufVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gYWNjZW50YXRlKGtleTogc3RyaW5nKSB7ICAgICAgXHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleURvd24oZmFrZUV2ZW50KGtleSkpLCAwKTtcclxuICAgc2V0VGltZW91dCgoKT0+a2V5VXAgIChmYWtlRXZlbnQoa2V5KSksMjApOyBcclxuICAgc2V0VGltZW91dCgoKT0+a2V5RG93bihmYWtlRXZlbnQoXCInXCIpKSw0MCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleVVwICAoZmFrZUV2ZW50KFwiJ1wiKSksNjApO1xyXG59XHJcblxyXG53aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICByZXNldF9rZXlib2FyZCgpOyAvLyByZWxlYXNlIGFsbCBrZXlzIHRvIHByZXZlbnQgQUxUIGFsd2F5cyBwcmVzc2VkIGFmdGVyIEFMVCtUQUJcclxufVxyXG5cclxuZnVuY3Rpb24gZmFrZUV2ZW50KGtleTogc3RyaW5nKSB7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGtleToga2V5LFxyXG4gICAgICBjb2RlOiBcIlwiLFxyXG4gICAgICBzaGlmdEtleTogZmFsc2UsXHJcbiAgICAgIGN0cmxLZXk6IGZhbHNlLFxyXG4gICAgICBhbHRLZXk6IGZhbHNlLFxyXG4gICAgICBnZXRNb2RpZmllclN0YXRlOiAoKT0+ZmFsc2UsXHJcbiAgICAgIHByZXZlbnREZWZhdWx0OiAoKT0+ZmFsc2VcclxuICAgfSBhcyBhbnkgYXMgS2V5Ym9hcmRFdmVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIEtleUJvYXJkX0M2NEV2ZW50IHtcclxuICAgdHlwZTogXCJwcmVzc1wifFwicmVsZWFzZVwiO1xyXG4gICBoYXJkd2FyZV9rZXlzOiBudW1iZXJbXTtcclxufVxyXG5cclxubGV0IGtleWJvYXJkX2J1ZmZlcjogS2V5Qm9hcmRfQzY0RXZlbnRbXSA9IFtdO1xyXG4vL2xldCBrZXlfcHJlc3NlZCA9IFtdO1xyXG5sZXQga2V5X3ByZXNzX21hcDoge1trZXk6c3RyaW5nXTogbnVtYmVyW119ID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzZXRfa2V5Ym9hcmQoKSB7XHJcblxyXG4gICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGtleV9wcmVzc19tYXApO1xyXG5cclxuICAga2V5cy5mb3JFYWNoKGs9PntcclxuICAgICAgLy9jb25zb2xlLmxvZyhgY2xlYXJpbmcgJHtrfWApO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrZXlfcHJlc3NfbWFwW2tdIH0pO1xyXG4gICAgICBkZWxldGUga2V5X3ByZXNzX21hcFtrXTtcclxuICAgfSk7XHJcblxyXG4gICBrZXlfcHJlc3NfbWFwID0ge307ICBcclxufVxyXG5cclxubGV0IGtleWJvYXJkX2J1ZmZlcl9lbXB0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9sbF9rZXlib2FyZCgpIHtcclxuICAgLy8gcG9sbCBrZXlib2FyZFxyXG4gICB3aGlsZShrZXlib2FyZF9idWZmZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQga2V5X2V2ZW50ID0ga2V5Ym9hcmRfYnVmZmVyWzBdO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXIgPSBrZXlib2FyZF9idWZmZXIuc2xpY2UoMSk7XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlcl9lbXB0eSA9IGtleWJvYXJkX2J1ZmZlci5sZW5ndGggPT0gMDtcclxuXHJcbiAgICAgIGlmKGtleV9ldmVudC50eXBlID09PSBcInByZXNzXCIpIHtcclxuICAgICAgICAgbGV0IGtleXMgPSBrZXlfZXZlbnQuaGFyZHdhcmVfa2V5cztcclxuICAgICAgICAgLy9rZXlzLmZvckVhY2goKGspID0+IGNvbnNvbGUubG9nKGspKTtcclxuICAgICAgICAga2V5cy5mb3JFYWNoKChrOiBudW1iZXIpID0+IGM2NC5rZXlfZG93bihrKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihrZXlfZXZlbnQudHlwZSA9PT0gXCJyZWxlYXNlXCIpIHtcclxuICAgICAgICAgbGV0IGtleXMgPSBrZXlfZXZlbnQuaGFyZHdhcmVfa2V5cztcclxuICAgICAgICAgLy9rZXlzLmZvckVhY2goKGspID0+IGNvbnNvbGUubG9nKGspKTtcclxuICAgICAgICAga2V5cy5mb3JFYWNoKChrKSA9PiBjNjQua2V5X3VwKGspKTtcclxuICAgICAgICAgaWYoa2V5Ym9hcmRfYnVmZmVyX2VtcHR5ICYmICFjb250cm9sX3ByZXNzZWQgJiYgIWFsdF9wcmVzc2VkICYmICFzaGlmdF9wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdD0wO3Q8MjU2O3QrKykgYzY0LmtleV91cCh0KTsgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIvKlxyXG4gICAgIDcgICA2ICAgNSAgIDQgICAzICAgMiAgIDEgICAwXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIDd8IEY3ICBGNSAgRjMgIEYxICBDRE4gQ1JUIFJFVCBERUwgICAgQ1JUPUN1cnNvci1SaWdodCwgQ0ROPUN1cnNvci1Eb3duXHJcbiAgIHxcclxuICA2fCBIT00gVUEgID0gICBSU0ggLyAgIDsgICAqICAgQlAgICAgIEJQPUJyaXRpc2ggUG91bmQsIFJTSD1TaG91bGQgYmUgUmlnaHQtU0hJRlQsXHJcbiAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVQT1VcCBBcnJvd1xyXG4gIDV8IC0gICBAICAgOiAgIC4gICAsICAgTCAgIFAgICArXHJcbiAgIHxcclxuICA0fCAwICAgTyAgIEsgICBNICAgTiAgIEogICBJICAgOVxyXG4gICB8XHJcbiAgM3wgOCAgIFUgICBIICAgQiAgIFYgICBHICAgWSAgIDdcclxuICAgfFxyXG4gIDJ8IDYgICBUICAgRiAgIEMgICBYICAgRCAgIFIgICA1XHJcbiAgIHxcclxuICAxfCA0ICAgRSAgIFMgICBaICAgTFNIIEEgICBXICAgMyAgICAgIExTSD1TaG91bGQgYmUgTGVmdC1TSElGVFxyXG4gICB8XHJcbiAgMHwgMiAgIFEgICBDQk0gU1BDIFNUUCBDVEwgTEEgIDEgICAgICBMQT1MZWZ0IEFycm93LCBDVEw9U2hvdWxkIGJlIENUUkwsIFNUUD1SVU4vU1RPUFxyXG4gICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0JNPUNvbW1vZG9yZSBrZXlcclxuXHJcbiAgICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoY29kZTogc3RyaW5nLCBrZXk6IHN0cmluZywgc2hpZnQ6IGJvb2xlYW4sIGNvbnRyb2w6IGJvb2xlYW4sIGNibTogYm9vbGVhbiwgYWx0Z3JhcGg6IGJvb2xlYW4pIHtcclxuICAgLy9jb25zb2xlLmxvZyhjb2RlLCBrZXksIGUpO1xyXG4gICAvL2NvbnNvbGUubG9nKGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIikpO1xyXG5cclxuICAgbGV0IGhhcmR3YXJlX2tleXMgPSBbXTtcclxuXHJcbiAgIGlmKGtleSA9PT0gXCIxXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjFcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIyXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjJcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIzXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI0XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjRcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI1XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjVcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI2XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjZcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI3XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjdcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI4XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjhcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI5XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjlcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIhXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiFcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gJ1wiJykgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goICdcIicuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwqNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiflwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiI1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiL1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIihcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIilcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIidcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiJ1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiP1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIl5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIltcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiW1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIl1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIltcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCp1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJdXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiK1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIrXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiKlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIqXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiw6dcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIiNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiI1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjxcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIj5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiPlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIixcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjtcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiO1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIjpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiOlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIi1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiLVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwicVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwid1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ3XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJlXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImVcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiclwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwidFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ0XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ5XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInlcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiaVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJpXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJvXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm9cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInBcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwicFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiYVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJhXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJzXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInNcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJmXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImdcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiaFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwialwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJqXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJrXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImtcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImxcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwibFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwielwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ6XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ4XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInhcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiY1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwidlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ2XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJiXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImJcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm5cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiblwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwibVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJtXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJRXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlFcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIldcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiV1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJFXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJSXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlJcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiVFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiWVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJZXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJVXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlVcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIklcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiSVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiT1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJPXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJQXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlBcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiU1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJTXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJEXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkRcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiR1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJHXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJIXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkhcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiSlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiS1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJLXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJMXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkxcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiWFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJYXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJDXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkNcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiVlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJCXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJOXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk5cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiTVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG5cclxuICAgaWYoa2V5ID09PSBcIl9cIikgICAgICAgICB7IGhhcmR3YXJlX2tleXMucHVzaCggNjQpOyBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIH0gIC8vIHNpbXVsYXRlIHVuZGVyc2NvcmVcclxuXHJcbiAgIC8vIEZLRVlTXHJcbiAgIGlmKGNvZGUgPT09IFwiRjFcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMSApO1xyXG4gICBpZihjb2RlID09PSBcIkYyXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjIgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGM1wiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYzICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjRcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNCApO1xyXG4gICBpZihjb2RlID09PSBcIkY1XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjUgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNlwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY2ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjdcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNyApO1xyXG4gICBpZihjb2RlID09PSBcIkY4XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjggKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiU3BhY2VcIikgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgyMCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd0xlZnRcIikgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA4ICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93UmlnaHRcIikgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDkgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dEb3duXCIpICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwYSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd1VwXCIpICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBiICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJEZWxldGVcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAxICApO1xyXG4gICBpZihjb2RlID09PSBcIkluc2VydFwiKSAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MTAgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkJhY2tzcGFjZVwiICYmICBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDEwICApO1xyXG4gICBpZihjb2RlID09PSBcIkJhY2tzcGFjZVwiICYmICFzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAxICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFbnRlclwiKSAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBEICApO1xyXG4gICBpZihjb2RlID09PSBcIk51bXBhZEVudGVyXCIpICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEQgICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIkVzY2FwZVwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDMgICk7ICAvLyBydW4gc3RvcFxyXG4gICBpZihjb2RlID09PSBcIkVzY2FwZVwiICYmIHNoaWZ0KSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDcgICk7ICAvLyBzaGlmdCArIHJ1biBzdG9wXHJcblxyXG4gICBpZihjb2RlID09PSBcIkhvbWVcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBDICApO1xyXG4gICBpZihjb2RlID09PSBcIkhvbWVcIiAmJiBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAyICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJCYWNrcXVvdGVcIikgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwNCAgKTsgIC8vIGxlZnQgYXJyb3dcclxuXHJcbiAgIGlmKGNvbnRyb2wgJiYgIWFsdGdyYXBoKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICAvL2lmKGNibSkgICAgICAgICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIC8vIGVtdWxhdGUgQ0JNXHJcblxyXG4gICBpZihjb2RlID09PSBcIkVuZFwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQFwiLmNoYXJDb2RlQXQoMCkgKTtcclxuXHJcbiAgIC8qXHJcbiAgIGlmKGNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRSApO1xyXG4gICBpZihjb2RlID09PSBcIlRhYlwiKSAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICAqL1xyXG5cclxuICAgaWYoKGNvZGUgPT09IFwiQ29udHJvbExlZnRcIiB8fCBjb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSAmJiAhYWx0Z3JhcGgpICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTsgIC8vIGVtdWxhdGUgQ1RSTFxyXG4gICBpZigoY29kZSA9PT0gXCJBbHRMZWZ0XCIgfHwgY29kZSA9PSBcIkFsdFJpZ2h0XCIpKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEYgKTsgIC8vIGVtdWxhdGUgQ0JNXHJcblxyXG4gICBpZihjb2RlID09PSBcIlBhZ2VVcFwiKSAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RkYgKTsgIC8vIGVtdWxhdGUgUkVTVE9SRVxyXG4gICBpZihjb2RlID09PSBcIlBhZ2VEb3duXCIpICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDM1ICk7ICAgIC8vIFwiI1wiXHJcblxyXG4gICByZXR1cm4gaGFyZHdhcmVfa2V5cztcclxufVxyXG4iLCIvL1xyXG4vLyBmdW5jdGlvbnMgb3JpZ2luYWxseSBjb3BpZWQgZnJvbSBodHRwczovL3d3dy5tZGF3c29uLm5ldC92aWMyMGNocm9tZS92aWMyMC5waHBcclxuLy8gYW5kIGFkYXB0ZWQgZm9yIHRoaXMgZW11bGF0b3JcclxuLy9cclxuXHJcbmltcG9ydCB7IGxvYWRCeXRlcyB9IGZyb20gXCIuL2ZpbGVzeXN0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIGJpblRvQXJyYXkoZGF0YTogc3RyaW5nKSB7XHJcbiAgIGxldCBiaW5jb2RlcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkuIVwiO1xyXG4gICB2YXIgdj0wLGNudD0wLG91dD1bXSxpaT0wO1xyXG4gICBmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKykge1xyXG4gICAgICB2Kz1iaW5jb2Rlcy5pbmRleE9mKGRhdGFbaV0pPDxjbnQ7XHJcbiAgICAgIGNudCs9NjtcclxuICAgICAgaWYoY250Pj04KSB7XHJcbiAgICAgICAgIG91dFtpaSsrXT0odiYyNTUpO1xyXG4gICAgICAgICBjbnQtPTg7XHJcbiAgICAgICAgIHY+Pj04O1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVybmFsTG9hZChjbWQ6IHN0cmluZywgdXJsOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3ViZmlsZT86IHN0cmluZykge1x0XHJcblx0Y29uc29sZS5sb2coXCJleHRlcm5hbExvYWQgY21kPVwiK2NtZCtcIiB1cmw9XCIrdXJsK1wiIGZvcm1hdD1cIitmb3JtYXQrXCIgc3ViZmlsZT1cIitzdWJmaWxlKTtcclxuXHR2YXIgaGVhZD0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuXHR2YXIgc2NyaXB0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQudHlwZT0gJ3RleHQvamF2YXNjcmlwdCc7XHRcclxuXHRzY3JpcHQuc3JjPSAnaHR0cHM6Ly93d3cubWRhd3Nvbi5uZXQvdmljMjBjaHJvbWUvdmljMjAvcHJndG9qc2xvYWRlci5waHA/Y21kPScrY21kKycmcHJndXJsPScrdXJsKycmc3ViZmlsZT0nK3N1YmZpbGU7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59XHJcblxyXG4od2luZG93IGFzIGFueSkubWRhd3Nvbl9sb2FkQnl0ZXMgPSBsb2FkQnl0ZXM7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uIG1kYXdzb25fbG9hZEJ5dGVzKHNyYzogVWludDhBcnJheSk6IHZvaWQ7XHJcblxyXG4od2luZG93IGFzIGFueSkubG9hZFByZz0gZnVuY3Rpb24oc3JjOiBhbnkpIHsgICBcclxuICAgaWYoc3JjLmxlbmd0aCAhPT0gMSkgcmV0dXJuO1xyXG5cclxuICAgbGV0IGJpbiA9IGJpblRvQXJyYXkoc3JjWzBdKTtcclxuICAgXHJcbiAgIG1kYXdzb25fbG9hZEJ5dGVzKG5ldyBVaW50OEFycmF5KGJpbikpO1xyXG59XHJcbiIsImltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2dyYW0gfSBmcm9tIFwiLi9mZXRjaFByb2dyYW1cIjtcclxuaW1wb3J0IHsgZXh0ZXJuYWxMb2FkIH0gZnJvbSBcIi4vbWRhd3NvblwiO1xyXG5pbXBvcnQgeyB2aWRlb3RlbCB9IGZyb20gXCIuL2NibV82NDk5L2NibV82NDk5XCI7XHJcblxyXG50eXBlIFF1ZXJ5U3RyaW5nT2JqZWN0ID0ge1trZXk6IHN0cmluZ106c3RyaW5nfTtcclxuXHJcbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nT2JqZWN0KCkge1xyXG4gICBsZXQgYSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCImXCIpO1xyXG4gICBsZXQgbyA9IGEucmVkdWNlKChvOiBRdWVyeVN0cmluZ09iamVjdCwgdikgPT57XHJcbiAgICAgIHZhciBrdiA9IHYuc3BsaXQoXCI9XCIpO1xyXG4gICAgICBjb25zdCBrZXkgPSBrdlswXS5yZXBsYWNlKFwiP1wiLCBcIlwiKTtcclxuICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBrdlsxXTtcclxuICAgICAgb1trZXldID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBvO1xyXG4gICB9LCB7fSk7XHJcbiAgIHJldHVybiBvO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzKCkge1xyXG4gICBsZXQgb3B0aW9ucyA9IGdldFF1ZXJ5U3RyaW5nT2JqZWN0KCk7ICBcclxuXHJcbiAgIGlmKG9wdGlvbnMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYzY0LmNvbmZpZyhOdW1iZXIob3B0aW9ucy5jb25maWcpKTtcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5qb3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjNjQuZW11X2pveShOdW1iZXIob3B0aW9ucy5qb3kpKTtcclxuICAgICAgY29uc29sZS5sb2coYEpveXN0aWNrIGVtdWxhdGlvbiAke051bWJlcihvcHRpb25zLmpveSkhPTA/XCJlbmFibGVkXCI6XCJkaXNhYmxlZFwifWApO1xyXG4gICB9XHJcblxyXG4gICBpZihvcHRpb25zLmxvYWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gb3B0aW9ucy5sb2FkO1xyXG4gICAgICBpZihuYW1lLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgIC8vIGV4dGVybmFsIGxvYWRcclxuICAgICAgICAgZXh0ZXJuYWxMb2FkKFwibG9hZFByZ1wiLCBuYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gaW50ZXJuYWwgbG9hZFxyXG4gICAgICAgICBhd2FpdCBmZXRjaFByb2dyYW0obmFtZSk7XHJcbiAgICAgIH0gICBcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5jYm02NDk5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmlkZW90ZWwuYWRkcmVzcyA9IG9wdGlvbnMud3N0Y3AgPz8gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgxXCI7ICAgICAgXHJcbiAgICAgIHZpZGVvdGVsLnByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbCA/PyBcImJic1wiO1xyXG4gICAgICBjNjQuc2V0X2V4cm9tKHRydWUpO1xyXG4gICAgICBjNjQuc2V0X2VtdWxhdGVfY2JtXzY0OTkodHJ1ZSk7IFxyXG4gICAgICBjNjQucmVzZXQoKTsgICAgIFxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gb3B0aW9ucztcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgeyBCQlNDb25uZWN0b3IgfSBmcm9tIFwiLi9iYnNfY29ubmVjdG9yXCI7XHJcbmltcG9ydCB7IHN0cmluZzJVaW50OEFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmxldCBtb2RlbV90cmFuc21pdF9idWZmZXI6IG51bWJlcltdID0gW107XHJcbmxldCBtb2RlbV9yZWNlaXZlX2J1ZmZlcjogbnVtYmVyW10gPSBbXTtcclxuXHJcbmNvbnN0IE1PREVNX0RBVEFfT1VUID0gMHhEN0YyO1xyXG5jb25zdCBNT0RFTV9EQVRBX0lOICA9IDB4RDdGMDtcclxuY29uc3QgTU9ERU1fREFUQV9SRVEgPSAweEQ3RjM7XHJcbmNvbnN0IE1PREVNX0FDSyAgICAgID0gMHhEN0YxO1xyXG5jb25zdCBNT0RFTV9DT05OU1QgICA9IDB4RDdGNDtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSByZWFkcyBpbiB0aGUgcmFuZ2UgJEQ3RjAtJEQ3RkZcclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGVtX3JlYWQoYWRkcjogbnVtYmVyKVxyXG57XHJcbiAgIGlmKGFkZHIgPT0gTU9ERU1fREFUQV9JTikge1xyXG4gICAgICBpZihtb2RlbV9yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgIGVsc2UgcmV0dXJuIG1vZGVtX3JlY2VpdmVfYnVmZmVyWzBdO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoYWRkciA9PSBNT0RFTV9EQVRBX1JFUSkge1xyXG4gICAgICBpZihtb2RlbV9yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgIGVsc2UgcmV0dXJuIDI1NTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGFkZHIgPT0gTU9ERU1fQ09OTlNUKSB7XHJcbiAgICAgIGlmKCFwZXRzY2lpLmNvbm5lY3RlZCkgcmV0dXJuIDI7XHJcbiAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgIH1cclxufVxyXG5cclxubGV0IG1vZGVtX3N0YXRlID0gMDtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSB3cml0ZXMgaW4gdGhlIHJhbmdlICREN0YwLSREN0ZGXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbV93cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcilcclxue1xyXG4gICBpZihhZGRyPT1NT0RFTV9BQ0spXHJcbiAgIHtcclxuICAgICAgaWYoZGF0YT09MCkge1xyXG4gICAgICAgICBtb2RlbV9zdGF0ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZGF0YT09MSAmJiBtb2RlbV9zdGF0ZT09MCkge1xyXG4gICAgICAgICBtb2RlbV9yZWNlaXZlX2J1ZmZlciA9IG1vZGVtX3JlY2VpdmVfYnVmZmVyLnNsaWNlKDEpO1xyXG4gICAgICAgICBtb2RlbV9zdGF0ZSA9IDE7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBpZihhZGRyPT1NT0RFTV9EQVRBX09VVCkge1xyXG4gICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIucHVzaChkYXRhKTtcclxuICAgICAgcGV0c2NpaS5zZW5kX2RhdGFfdG9fYmJzKG1vZGVtX3RyYW5zbWl0X2J1ZmZlcik7XHJcbiAgICAgIG1vZGVtX3RyYW5zbWl0X2J1ZmZlciA9IFtdO1xyXG4gICAgICBpZighcGV0c2NpaS5jb25uZWN0ZWQpIHBldHNjaWkuY29ubmVjdCgpOyAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmV4cG9ydCBsZXQgcGV0c2NpaSA9IG5ldyBCQlNDb25uZWN0b3IoKTtcclxuXHJcbnBldHNjaWkub25fZXJyb3IgPSAoZXJyKT0+IHtcclxuICAgY29uc29sZS5sb2coJ0JCUzogY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICBwcmludG0oYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gRVJST1IgQ09OTkVDVElORyBUTyBXRUJTT0NLRVRcXHJgKTtcclxufTtcclxuXHJcbnBldHNjaWkub25fb3BlbiA9ICgpID0+IHtcclxuICAgY29uc29sZS5sb2coJ0JCUzogY29ubmVjdGVkJyk7XHJcbiAgIHByaW50bShgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSBDT05ORUNURURcXHJgKTtcclxufTtcclxuXHJcbnBldHNjaWkub25fY2xvc2UgPSAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGRpc2Nvbm5lY3RlZCcpOyAgICAgIFxyXG59O1xyXG5cclxucGV0c2NpaS5vbl9kYXRhID0gKGJ5dGVzKSA9PiB7XHJcbiAgIGJ5dGVzLmZvckVhY2goZT0+bW9kZW1fcmVjZWl2ZV9idWZmZXIucHVzaChlKSk7XHJcbn07XHJcbiAgIFxyXG5mdW5jdGlvbiBwcmludG0obXNnOiBzdHJpbmcpIHtcclxuICAgbGV0IGRhdGEgPSBzdHJpbmcyVWludDhBcnJheShtc2cpO1xyXG4gICBkYXRhLmZvckVhY2goZT0+bW9kZW1fcmVjZWl2ZV9idWZmZXIucHVzaChlKSk7XHJcbn0iLCIvKioqKiB1dGlsaXR5IGZ1bmN0aW9ucyAqKioqL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4KHZhbHVlOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICBpZihzaXplID09PSB1bmRlZmluZWQpIHNpemUgPSAyO1xyXG4gICBsZXQgcyA9IFwiMDAwMFwiICsgdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFzdGVMaW5lKHRleHQ6IHN0cmluZykge1xyXG4gICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgIGZvcihsZXQgdD0wOyB0PGxpbmVzLmxlbmd0aDsgdCsrKSB7XHJcbiAgICAgIGNvbnN0IGxpbmVhID0gbGluZXNbdF07XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVhKTtcclxuICAgICAgcGFzdGUobGluZWEpO1xyXG4gICAgICBwYXN0ZUNoYXIoMTMpOyAgIC8vIENSXHJcbiAgIH1cclxuICAgY29uc29sZS5sb2coXCJwYXN0ZWQhXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFzdGUobGluZTogc3RyaW5nKSB7XHJcblxyXG4gICBmb3IobGV0IHQ9MDt0PGxpbmUubGVuZ3RoO3QrKykge1xyXG4gICAgICBsZXQgYyA9IGxpbmUuY2hhckNvZGVBdCh0KTtcclxuICAgICAgcGFzdGVDaGFyKGMpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlQ2hhcihjOiBudW1iZXIpIHtcclxuICAgd2hpbGUoYzY0LnBlZWsoMTk4KSAhPT0gMCkge1xyXG4gICAgICBjNjQuZXgoMTYwMDApO1xyXG4gICB9XHJcbiAgIGM2NC5wb2tlKDYzMSxjKTtcclxuICAgYzY0LnBva2UoMTk4LDEpO1xyXG59XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBkdW1wTWVtKHN0YXJ0LCBlbmQsIHJvd3MpIHtcclxuICAgaWYoZW5kPT11bmRlZmluZWQpIGVuZD1zdGFydCsxNTtcclxuICAgaWYocm93cz09dW5kZWZpbmVkKSByb3dzPTE2O1xyXG4gICBsZXQgcz1cIlxcclxcblwiO1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjw9ZW5kO3IrPXJvd3MpIHtcclxuICAgICAgcys9IGhleChyLCA0KSArIFwiOiBcIjsgICAgICBcclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzICYmIChyK2MpPD1lbmQ7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1fcmVhZChyK2MpO1xyXG4gICAgICAgICBzKz0gaGV4KGJ5dGUpK1wiIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IChieXRlPjMyICYmIGJ5dGU8MTI3KSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkgOiAnLicgO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgIH1cclxuICAgY29uc29sZS5sb2cocyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhleER1bXAobWVtb3J5LCBzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGxldCBzPVwiXCI7XHJcbiAgIGZvcihsZXQgcj1zdGFydDtyPGVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBoZXgociwgNCkgKyBcIjogXCI7ICAgICAgXHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cztjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbW9yeVtyK2NdO1xyXG4gICAgICAgICBzKz0gaGV4KGJ5dGUpK1wiIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cztjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbW9yeVtyK2NdO1xyXG4gICAgICAgICBzKz0gKGJ5dGU+MzIgJiYgYnl0ZTwxMjcpID8gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSA6ICcuJyA7XHJcbiAgICAgIH1cclxuICAgICAgcys9XCJcXG5cIjtcclxuICAgfVxyXG4gICByZXR1cm4gcztcclxufVxyXG4qL1xyXG5cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGJpbih2YWx1ZSwgc2l6ZSkge1xyXG4gICBpZihzaXplID09PSB1bmRlZmluZWQpIHNpemUgPSA4O1xyXG4gICBsZXQgcyA9IFwiMDAwMDAwMDAwMDAwMDAwMFwiICsgdmFsdWUudG9TdHJpbmcoMik7XHJcbiAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcHVfc3RhdHVzKCkge1xyXG4gICBjb25zdCBzdGF0ZSA9IGNwdS5nZXRTdGF0ZSgpO1xyXG4gICByZXR1cm4gYEE9JHtoZXgoc3RhdGUuYSl9IEJDPSR7aGV4KHN0YXRlLmIpfSR7aGV4KHN0YXRlLmMpfSBERT0ke2hleChzdGF0ZS5kKX0ke2hleChzdGF0ZS5lKX0gSEw9JHtoZXgoc3RhdGUuaCl9JHtoZXgoc3RhdGUubCl9IElYPSR7aGV4KHN0YXRlLml4LDQpfSBJWT0ke2hleChzdGF0ZS5peSw0KX0gU1A9JHtoZXgoc3RhdGUuc3AsNCl9IFBDPSR7aGV4KHN0YXRlLnBjLDQpfSBTPSR7c3RhdGUuZmxhZ3MuU30sIFo9JHtzdGF0ZS5mbGFncy5afSwgWT0ke3N0YXRlLmZsYWdzLll9LCBIPSR7c3RhdGUuZmxhZ3MuSH0sIFg9JHtzdGF0ZS5mbGFncy5YfSwgUD0ke3N0YXRlLmZsYWdzLlB9LCBOPSR7c3RhdGUuZmxhZ3MuTn0sIEM9JHtzdGF0ZS5mbGFncy5DfWA7ICAgXHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiB3YWl0KHRpbWUpIHtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0sIHRpbWUpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gemFwKCkgeyAgICAgICAgICAgIFxyXG4gICByYW0uZm9yRWFjaCgoZSxpKT0+cmFtW2ldPTB4MDApO1xyXG4gICBsZXQgc3RhdGUgPSBjcHUuZ2V0U3RhdGUoKTtcclxuICAgc3RhdGUuaGFsdGVkID0gdHJ1ZTtcclxuICAgY3B1LnNldFN0YXRlKHN0YXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG93ZXIoKSB7ICAgICAgXHJcbiAgIHphcCgpO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5jcHUucmVzZXQoKSwgMjAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcCgpIHsgICBcclxuICAgc3RvcEF1ZGlvKCk7XHJcbiAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICBjb25zb2xlLmxvZyhcImVtdWxhdGlvbiBzdG9wcGVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnbygpIHtcclxuICAgc3RvcHBlZCA9IGZhbHNlO1xyXG4gICBvbmVGcmFtZSgpO1xyXG4gICBjb25zb2xlLmxvZyhcImVtdWxhdGlvbiByZXN1bWVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmZvKCkge1xyXG4gICBjb25zdCBhdmVyYWdlID0gYXZlcmFnZUZyYW1lVGltZS8xMDAwO1xyXG4gICBjb25zb2xlLmxvZyhgZnJhbWUgcmF0ZTogYXZlcmFnZSAke01hdGgucm91bmQoYXZlcmFnZSoxMCwyKS8xMH0gbXMgKCR7TWF0aC5yb3VuZCgxL2F2ZXJhZ2UqMTAwMCl9IEh6KWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRfYml0KHZhbHVlLCBiaXRuKSB7XHJcbiAgIHJldHVybiB2YWx1ZSB8ICgxPDxiaXRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRfYml0KHZhbHVlLCBiaXRuKSB7XHJcbiAgIHJldHVybiB2YWx1ZSAmIH4oMTw8Yml0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldCh2YWx1ZSwgYml0bWFzaykge1xyXG4gICByZXR1cm4gdmFsdWUgfCBiaXRtYXNrOyBcclxufVxyXG5cclxuZnVuY3Rpb24gc2xlZXAobXNlYykge1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT5yZXNvbHZlKCksIG1zZWMpO1xyXG4gICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0KHZhbHVlLCBiaXRtYXNrKSB7XHJcbiAgIHJldHVybiB2YWx1ZSAmICgweEZGIF4gYml0bWFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR1bXBQb2ludGVycygpIHtcclxuICAgY29uc29sZS5sb2coYFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyA8LSAgKDB4JHtoZXgoUFJPR05ELDQpfSkgJHtoZXgobWVtX3JlYWRfd29yZChQUk9HTkQpLDQpfVxyXG4gICB8ICAgICBCQVNJQyBwcm9ncmFtICAgICAgfFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyA8LSBUWFRUQUIgKDB4JHtoZXgoQkFTVFhULDQpfSkgJHtoZXgobWVtX3JlYWRfd29yZChCQVNUWFQpLDQpfVxyXG4gICB8ICAgIFN5c3RlbSB2YXJpYWJsZXMgICAgfFxyXG4gICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAweDgwMDBcclxuYCk7XHJcbn1cclxuXHJcbmxldCBkZWJ1Z0JlZm9yZSA9IHVuZGVmaW5lZDtcclxubGV0IGRlYnVnQWZ0ZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBiaXQoYixuKSB7XHJcbiAgIHJldHVybiAoYiAmICgxPDxuKSk+MCA/IDEgOiAwO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gbm90X2JpdChiLG4pIHtcclxuICAgcmV0dXJuIChiICYgKDE8PG4pKT4wID8gMCA6IDE7XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBkdW1wU3RhY2soKSB7XHJcbiAgIGNvbnN0IHNwID0gY3B1LmdldFN0YXRlKCkuc3A7XHJcblxyXG4gICBmb3IobGV0IHQ9c3A7dDw9MHhmZmZmO3QrPTIpIHtcclxuICAgICAgY29uc3Qgd29yZCA9IG1lbV9yZWFkX3dvcmQodCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2hleCh0LDQpfTogJHtoZXgod29yZCw0KX0gICgke3dvcmR9KWApO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZHNXaXRoKHMsIHZhbHVlKSB7XHJcbiAgIHJldHVybiBzLnN1YnN0cigtdmFsdWUubGVuZ3RoKSA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGRlc3QpIHtcclxuICAgc291cmNlLmZvckVhY2goKGUsaSk9PmRlc3RbaV0gPSBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZV9sbShzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGxldCBzO1xyXG4gICBzID0gYDEwIEZPUiBUPSZIJHtoZXgoc3RhcnQsNCl9IFRPICZIJHtoZXgoZW5kLDQpfVxcbmA7XHJcbiAgIHMrPSBgMjAgUkVBRCBCOlBPS0UgVCxCXFxuYDtcclxuICAgcys9IGAzMCBORVhUXFxuYDtcclxuICAgcys9IGA0MCBTWVMgJkgke2hleChzdGFydCw0KX1cXG5gO1xyXG4gICBzKz0gYDUwIEVORFxcbmA7XHJcbiAgIGxldCBubGluZSA9IDEwMDA7XHJcbiAgIGlmKHJvd3M9PXVuZGVmaW5lZCkgcm93cz04O1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjw9ZW5kO3IrPXJvd3MpIHtcclxuICAgICAgcys9IGAke25saW5lfSBEQVRBIGA7XHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IGAke2J5dGV9YDtcclxuICAgICAgICAgaWYoYyE9cm93cy0xICYmIChyK2MpIT1lbmQpIHMrPVwiLFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgICAgIG5saW5lICs9IDEwO1xyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0bXIoKVxyXG57XHJcbiAgIHJldHVybiBtZW1fcmVhZF93b3JkKFRNUkNOVCkgKyAobWVtX3JlYWRfd29yZChUTVJDTlQrMikgPDwgMTYpO1xyXG59XHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcbmxldCBjb3VudGVyX2F2ZyA9IDA7XHJcblxyXG5mdW5jdGlvbiBzdGFydF9jb3VudGVyKCkge1xyXG4gICBjb3VudGVyID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BfY291bnRlcigpIHtcclxuICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICBsZXQgY250ID0gY291bnRlcjtcclxuICAgaWYoY250ID09PSAwKSBjbnQgPSBub3dcclxuICAgbGV0IGVsYXBzZWQgPSBub3cgLSBjbnQ7ICAgXHJcbiAgIGNvdW50ZXJfYXZnID0gMC45ICogY291bnRlcl9hdmcgKyAwLjEgKiBlbGFwc2VkO1xyXG4gICByZXR1cm4gY291bnRlcl9hdmc7XHJcbn1cclxuXHJcbmxldCBMRUQgPSAwO1xyXG5mdW5jdGlvbiBsZWRfcmVhZCgpIHtcclxuICAgcmV0dXJuIExFRDtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVkX3dyaXRlKHZhbHVlKSB7XHJcbiAgIExFRCA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyBtYWtlIGEgbG9uZyB1cmwgZnJvbSBhbiBleGlzdGluZyBzYXZlZCBwcm9ncmFtXHJcbmFzeW5jIGZ1bmN0aW9uIG1ha2VCYXNlNjQoZmlsZU5hbWUpIHtcclxuICAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkRmlsZShmaWxlTmFtZSk7XHJcbiAgIGxldCBsb25nX3VybCA9IHdpbmRvdy5idG9hKGJ5dGVzKTtcclxuICAgY29uc29sZS5sb2coYGh0dHBzOi8vbmlwcHVyNzIuZ2l0aHViLmlvL2M2NC1lbXU/Yj0ke2xvbmdfdXJsfWApO1xyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nMlVpbnQ4QXJyYXkoc3RyOiBzdHJpbmcpIHtcclxuICAgbGV0IGFyciA9IFtdO1xyXG5cclxuICAgZm9yKGxldCB0PTA7IHQ8c3RyLmxlbmd0aDsgdCsrKVxyXG4gICAgICBhcnIucHVzaChzdHIuY2hhckNvZGVBdCh0KSAmIDB4RkYpO1xyXG5cclxuICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGFycik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheTJTdHJpbmcoZGF0YTogbnVtYmVyW10pIHtcclxuICAgbGV0IHN0ciA9IFwiXCI7XHJcblxyXG4gICBmb3IodmFyIGluZGV4PTA7IGluZGV4PGRhdGEubGVuZ3RoOyBpbmRleCsrKVxyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2luZGV4XSk7XHJcblxyXG4gICByZXR1cm4gc3RyO1xyXG59IiwiaW1wb3J0IHsgZ2V0X3dhc21faW5zdGFuY2UgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbi8vIGdvb2QgdmFsdWVzIGZvciBDUlQgUEFMXHJcbmxldCBTQ1JFRU5fVyA9IDM5MjtcclxubGV0IFNDUkVFTl9IID0gMjcyO1xyXG5sZXQgUE9TX1ggPSAzKjg7XHJcbmxldCBQT1NfWSA9IDMqODtcclxuXHJcbi8qXHJcbi8vIHZhbHVlcyBmb3IgZGVidWdcclxubGV0IFNDUkVFTl9XID0gMjg0O1xyXG5sZXQgU0NSRUVOX0ggPSAzMTI7XHJcbmxldCBQT1NfWCA9IDA7XHJcbmxldCBQT1NfWSA9IDA7XHJcbiovXHJcblxyXG5sZXQgc2F0dXJhdGlvbiA9IDEuMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVHZW9tZXRyeSgpIHtcclxuICAgLy8gY2FudmFzIGlzIHRoZSBvdXRlciBjYW52YXMgd2hlcmUgdGhlIGFzcGVjdCByYXRpbyBpcyBjb3JyZWN0ZWRcclxuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBjYW52YXMud2lkdGggID0gU0NSRUVOX1cgKiAyIC0oUE9TX1gqMik7XHJcbiAgIGNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSCAqIDIgLShQT1NfWSoyKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLypcclxubGV0IFdXID0gMjMyO1xyXG5sZXQgSEggPSAyNzI7XHJcbiovXHJcblxyXG5sZXQgV1cgPSBTQ1JFRU5fVztcclxubGV0IEhIID0gU0NSRUVOX0g7XHJcblxyXG5sZXQgdmljX2lpX2NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5sZXQgdmljX2lpX2NvbnRleHQgPSB2aWNfaWlfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBuZXcgbWV0aG9kXHJcbmxldCB2aWNfaWlfaW1hZ2VEYXRhID0gdmljX2lpX2NvbnRleHQhLmNyZWF0ZUltYWdlRGF0YShXVyoyLCBISCoyKTtcclxubGV0IGJtcCA9IG5ldyBVaW50MzJBcnJheSh2aWNfaWlfaW1hZ2VEYXRhLmRhdGEuYnVmZmVyKTtcclxuXHJcbi8qXHJcbi8vIG9sZCBkcmF3aW5nIG1ldGhvZFxyXG5sZXQgdmljX2lpX2ltYWdlRGF0YSA9IHZpY19paV9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBXVyoyLCBISCoyKTtcclxubGV0IGltYWdlZGF0YV9idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodmljX2lpX2ltYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbmxldCBpbWFnZWRhdGFfYnVmOCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShpbWFnZWRhdGFfYnVmZmVyKTtcclxubGV0IGJtcCA9IG5ldyBVaW50MzJBcnJheShpbWFnZWRhdGFfYnVmZmVyKTtcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZHBfc2NyZWVuX3VwZGF0ZShwdHI6IG51bWJlcikge1xyXG4gICBsZXQgc3RhcnQgPSBwdHIgLyBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBVMzIuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgIGxldCBzaXplID0gV1cqSEg7XHJcbiAgIGxldCBidWZmZXIgPSBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBVMzIuc3ViYXJyYXkoc3RhcnQsc3RhcnQrc2l6ZSk7XHJcblxyXG4gICBsZXQgcHRyMCA9IDA7XHJcbiAgIGxldCBwdHIxID0gMDtcclxuICAgbGV0IHB0cjIgPSBXVyoyO1xyXG5cclxuICAgZm9yKGxldCB5PTA7eTxISDt5KyspIHtcclxuICAgICAgZm9yKGxldCB4PTA7eDxXVzt4KyspIHtcclxuICAgICAgICAgbGV0IHBpeGVsID0gYnVmZmVyW3B0cjBdO1xyXG4gICAgICAgICBibXBbcHRyMSsrXSA9IHBpeGVsO1xyXG4gICAgICAgICBibXBbcHRyMSsrXSA9IHBpeGVsO1xyXG4gICAgICAgICBibXBbcHRyMisrXSA9IHBpeGVsO1xyXG4gICAgICAgICBibXBbcHRyMisrXSA9IHBpeGVsO1xyXG4gICAgICAgICBwdHIwKys7XHJcbiAgICAgIH1cclxuICAgICAgcHRyMSArPSBXVyoyO1xyXG4gICAgICBwdHIyICs9IFdXKjI7XHJcbiAgIH1cclxuXHJcbiAgIC8qXHJcbiAgIC8vIG9sZCBkcmF3aW5nIG1ldGhvZFxyXG4gICB2aWNfaWlfaW1hZ2VEYXRhLmRhdGEuc2V0KGltYWdlZGF0YV9idWY4KTtcclxuICAgdmljX2lpX2NvbnRleHQucHV0SW1hZ2VEYXRhKHZpY19paV9pbWFnZURhdGEsIC1QT1NfWCwgLVBPU19ZKTtcclxuICAgKi9cclxuXHJcbiAgIC8vIG5ldyBtZXRob2RcclxuICAgdmljX2lpX2NvbnRleHQhLnB1dEltYWdlRGF0YSh2aWNfaWlfaW1hZ2VEYXRhLCAtUE9TX1gsIC1QT1NfWSk7XHJcblxyXG4gICAvL2ZyYW1lcysrO1xyXG4gICAvL2lmKGVuZF9vZl9mcmFtZV9ob29rICE9PSB1bmRlZmluZWQpIGVuZF9vZl9mcmFtZV9ob29rKCk7XHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgbG9hZF93YXNtIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9lbXVsYXRvclwiO1xyXG5pbXBvcnQgeyB2ZHBfc2NyZWVuX3VwZGF0ZSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IGF1ZGlvX2J1Zl9yZWFkeSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbi8vaW1wb3J0IHsgbG9hZFByZyB9IGZyb20gXCIuL21kYXdzb25cIjtcclxuaW1wb3J0IHsgbW9kZW1fcmVhZCwgbW9kZW1fd3JpdGUgfSBmcm9tIFwiLi9wZXRzY2lpX2Jic1wiO1xyXG5pbXBvcnQgeyBjYm1fNjQ5OV93cml0ZSwgY2JtXzY0OTlfcmVhZCwgY2JtXzY0OTlfcmVzZXQgfSBmcm9tIFwiLi9jYm1fNjQ5OS9jYm1fNjQ5OVwiO1xyXG5pbXBvcnQgeyBzYXZlX2ZpbGUgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuaW1wb3J0IFwiLi9icm93c2VyXCI7XHJcblxyXG4vLyBwdWJsaXNoIG9uIGdsb2JhbFxyXG4od2luZG93IGFzIGFueSkudmRwX3NjcmVlbl91cGRhdGUgPSB2ZHBfc2NyZWVuX3VwZGF0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLmF1ZGlvX2J1Zl9yZWFkeSA9IGF1ZGlvX2J1Zl9yZWFkeTtcclxuLy8od2luZG93IGFzIGFueSkubG9hZFByZyA9IGxvYWRQcmc7XHJcbih3aW5kb3cgYXMgYW55KS5tb2RlbV9yZWFkID0gbW9kZW1fcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLm1vZGVtX3dyaXRlID0gbW9kZW1fd3JpdGU7XHJcbih3aW5kb3cgYXMgYW55KS5zYXZlX2ZpbGUgPSBzYXZlX2ZpbGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfcmVzZXQgPSBjYm1fNjQ5OV9yZXNldDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3JlYWQgID0gY2JtXzY0OTlfcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3dyaXRlID0gY2JtXzY0OTlfd3JpdGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuYzY0ID0gYzY0O1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICBhd2FpdCBsb2FkX3dhc20oKTtcclxuICAgbWFpbigpOyAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=