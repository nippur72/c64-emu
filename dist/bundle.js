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

var Module=typeof emscripten_module!="undefined"?emscripten_module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="emscripten_module.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(/* asset import */ __webpack_require__(/*! emscripten_module.wasm */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/emscripten_module.wasm"), __webpack_require__.b).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["d"];updateMemoryViews();wasmTable=Module["asm"]["D"];addOnInit(Module["asm"]["e"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync().catch(readyPromiseReject);return{}}var ASM_CONSTS={71152:()=>{return cbm_6499_reset()},71181:($0,$1)=>{audio_buf_ready($0,$1)},71210:$0=>{vdp_screen_update($0)},71237:$0=>{vdp_screen_update($0)},71264:$0=>{vdp_screen_update($0)},71291:$0=>{return modem_read($0)},71318:($0,$1)=>{modem_write($0,$1)},71342:($0,$1)=>{return cbm_6499_read($0,$1)},71376:($0,$1)=>{cbm_6499_write($0,$1)}};function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:HEAPF64[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var wasmImports={"a":___assert_fail,"b":_emscripten_asm_const_int,"c":_emscripten_memcpy_big};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["e"]).apply(null,arguments)};var _sys_init=Module["_sys_init"]=function(){return(_sys_init=Module["_sys_init"]=Module["asm"]["f"]).apply(null,arguments)};var _sys_config=Module["_sys_config"]=function(){return(_sys_config=Module["_sys_config"]=Module["asm"]["g"]).apply(null,arguments)};var _sys_reset=Module["_sys_reset"]=function(){return(_sys_reset=Module["_sys_reset"]=Module["asm"]["h"]).apply(null,arguments)};var _sys_exec=Module["_sys_exec"]=function(){return(_sys_exec=Module["_sys_exec"]=Module["asm"]["i"]).apply(null,arguments)};var _sys_exec_us=Module["_sys_exec_us"]=function(){return(_sys_exec_us=Module["_sys_exec_us"]=Module["asm"]["j"]).apply(null,arguments)};var _sys_ex=Module["_sys_ex"]=function(){return(_sys_ex=Module["_sys_ex"]=Module["asm"]["k"]).apply(null,arguments)};var _sys_vdp=Module["_sys_vdp"]=function(){return(_sys_vdp=Module["_sys_vdp"]=Module["asm"]["l"]).apply(null,arguments)};var _sys_key_down=Module["_sys_key_down"]=function(){return(_sys_key_down=Module["_sys_key_down"]=Module["asm"]["m"]).apply(null,arguments)};var _sys_key_up=Module["_sys_key_up"]=function(){return(_sys_key_up=Module["_sys_key_up"]=Module["asm"]["n"]).apply(null,arguments)};var _sys_quick_load=Module["_sys_quick_load"]=function(){return(_sys_quick_load=Module["_sys_quick_load"]=Module["asm"]["o"]).apply(null,arguments)};var _sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=function(){return(_sys_insert_rom_cartdrige=Module["_sys_insert_rom_cartdrige"]=Module["asm"]["p"]).apply(null,arguments)};var _sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=function(){return(_sys_mem_cpu_rd=Module["_sys_mem_cpu_rd"]=Module["asm"]["q"]).apply(null,arguments)};var _sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=function(){return(_sys_mem_cpu_wr=Module["_sys_mem_cpu_wr"]=Module["asm"]["r"]).apply(null,arguments)};var _sys_joystick=Module["_sys_joystick"]=function(){return(_sys_joystick=Module["_sys_joystick"]=Module["asm"]["s"]).apply(null,arguments)};var _sys_set_joystick_type=Module["_sys_set_joystick_type"]=function(){return(_sys_set_joystick_type=Module["_sys_set_joystick_type"]=Module["asm"]["t"]).apply(null,arguments)};var _sys_insert_tape=Module["_sys_insert_tape"]=function(){return(_sys_insert_tape=Module["_sys_insert_tape"]=Module["asm"]["u"]).apply(null,arguments)};var _sys_remove_tape=Module["_sys_remove_tape"]=function(){return(_sys_remove_tape=Module["_sys_remove_tape"]=Module["asm"]["v"]).apply(null,arguments)};var _sys_tape_play=Module["_sys_tape_play"]=function(){return(_sys_tape_play=Module["_sys_tape_play"]=Module["asm"]["w"]).apply(null,arguments)};var _sys_tape_stop=Module["_sys_tape_stop"]=function(){return(_sys_tape_stop=Module["_sys_tape_stop"]=Module["asm"]["x"]).apply(null,arguments)};var _sys_cas_port=Module["_sys_cas_port"]=function(){return(_sys_cas_port=Module["_sys_cas_port"]=Module["asm"]["y"]).apply(null,arguments)};var _sys_set_exrom=Module["_sys_set_exrom"]=function(){return(_sys_set_exrom=Module["_sys_set_exrom"]=Module["asm"]["z"]).apply(null,arguments)};var _sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=function(){return(_sys_set_cbm_6499_nbank=Module["_sys_set_cbm_6499_nbank"]=Module["asm"]["A"]).apply(null,arguments)};var _sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=function(){return(_sys_set_emulate_cbm_6499=Module["_sys_set_emulate_cbm_6499"]=Module["asm"]["B"]).apply(null,arguments)};var _sys_set_external_irq=Module["_sys_set_external_irq"]=function(){return(_sys_set_external_irq=Module["_sys_set_external_irq"]=Module["asm"]["C"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module["asm"]["E"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module["asm"]["F"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["G"]).apply(null,arguments)};Module["ccall"]=ccall;Module["cwrap"]=cwrap;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


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

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts":
/*!*********************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bbs: () => (/* binding */ bbs),
/* harmony export */   get_wstcp_address: () => (/* binding */ get_wstcp_address),
/* harmony export */   modemClose: () => (/* binding */ modemClose),
/* harmony export */   modem_read: () => (/* binding */ modem_read),
/* harmony export */   modem_write: () => (/* binding */ modem_write),
/* harmony export */   set_wstcp_address: () => (/* binding */ set_wstcp_address)
/* harmony export */ });
//********************************************************************
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let modem_send_to_ws = undefined;
let modem_close = undefined;
let modem_transmit_buffer = [];
let modem_receive_buffer = [];
const MODEM_DATA_OUT = 0xD7F2;
const MODEM_DATA_IN = 0xD7F0;
const MODEM_DATA_REQ = 0xD7F3;
const MODEM_ACK = 0xD7F1;
const MODEM_CONNST = 0xD7F4;
let connection_started = false;
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
        if (modem_send_to_ws == undefined)
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
        if (modem_send_to_ws != undefined) {
            modem_send_to_ws(modem_transmit_buffer);
            modem_transmit_buffer = [];
        }
        else {
            bbs();
        }
    }
}
let wstcp_address = "wss://bbs.sblendorio.eu:8080";
let get_wstcp_address = () => wstcp_address;
let set_wstcp_address = (address) => { wstcp_address = address; };
function bbs() {
    let ws_connection = new WebSocket(wstcp_address, 'bbs');
    ws_connection.onerror = function (err) {
        console.log('BBS: connection error');
        printm(`${new Date().toLocaleTimeString()} ERROR CONNECTING TO WEBSOCKET\r`);
    };
    ws_connection.onopen = function () {
        console.log('BBS: connected');
        printm(`${new Date().toLocaleTimeString()} CONNECTED\r`);
    };
    ws_connection.onclose = function () {
        console.log('BBS: disconnected');
        modem_send_to_ws = undefined;
    };
    ws_connection.onmessage = function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof e.data === 'string') {
                console.log("Received string: '" + e.data + "'");
            }
            else {
                // note: this fails on FireFox 83 due to Blob.arrayBuffer()
                // promise: the "await" results in bytes decoded
                // but with wrong timestamp order. Solved with patch-arrayBuffer.js
                let data = yield e.data.arrayBuffer();
                let bytes = new Uint8Array(data);
                bytes.forEach(e => modem_receive_buffer.push(e));
            }
        });
    };
    modem_send_to_ws = (data) => {
        let bytes = new Uint8Array(data);
        if (ws_connection.readyState === ws_connection.OPEN) {
            //console.log(`transmitting ${bytes.length} bytes`);
            ws_connection.send(bytes);
        }
        else {
            console.log("BBS: can't send, BBS is disconnected");
        }
    };
    modem_close = () => ws_connection.close();
}
function modemClose() {
    if (modem_close !== undefined)
        modem_close();
}
function string2Array(str) {
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
function printm(msg) {
    let data = string2Array(msg);
    data.forEach(e => modem_receive_buffer.push(e));
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
/* harmony import */ var _bbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filesystem */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/filesystem.ts");
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
    // close connection to the BBS
    (0,_bbs__WEBPACK_IMPORTED_MODULE_1__.modemClose)();
};
// **** visibility change ****
window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_2__.c64.stopped = true;
        (0,_audio__WEBPACK_IMPORTED_MODULE_0__.stopAudio)();
    }
    else if (document.visibilityState === "visible") {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_2__.c64.go();
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
            yield (0,_filesystem__WEBPACK_IMPORTED_MODULE_3__.loadBytes)(bytes);
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
/* harmony export */   cbm_6499_write: () => (/* binding */ cbm_6499_write)
/* harmony export */ });
/* harmony import */ var _m6821__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m6821 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6821.ts");
/* harmony import */ var _m6850__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m6850 */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/m6850.ts");
/* harmony import */ var _videotel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videotel */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/videotel.ts");



let PIA = new _m6821__WEBPACK_IMPORTED_MODULE_0__.M6821();
let ACIA = new _m6850__WEBPACK_IMPORTED_MODULE_1__.M6850();
let bbs = new _videotel__WEBPACK_IMPORTED_MODULE_2__.BBSConnector();
bbs.address = "wss://bbs.sblendorio.eu";
bbs.port = "8081";
bbs.protocol = "bbs";
bbs.on_error = () => {
    // sets NO CARRIER
    ACIA.STATUS_NO_CARRIER = 1;
    console.log("NO CARRIER");
};
bbs.on_close = () => {
    // sets NO CARRIER
    ACIA.STATUS_NO_CARRIER = 1;
    console.log("NO CARRIER");
};
bbs.on_open = () => {
    // clears NO CARRIER
    ACIA.STATUS_NO_CARRIER = 0;
    PIA.PA &= 127;
    console.log("CARRIER DETECT");
};
bbs.on_data = (data) => {
    ACIA.receive_data(data);
};
ACIA.transmit_data = (data) => {
    bbs.send_data_to_bbs([data]);
};
PIA.afterdialtone = () => bbs.connect();
// bbs.connect();
window.bbs = bbs;
window.ACIA = ACIA;
window.PIA = PIA;
// function called from C64 when the whole system is reset
function cbm_6499_reset() {
    PIA.reset();
}
let last_tick = 0;
// function called from C64 when CPU reads I/O in the range $DE00-DFFF
function cbm_6499_read(addr, ticks) {
    let diff = ticks - last_tick;
    last_tick = ticks;
    if (diff < 10)
        console.log(diff, ticks, addr);
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
    if (true)
        console.log(m);
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
    cpu_read(addr, ticks) {
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
                //debug(`cpu receive ${data}`);
                this.wait_after_read = 2;
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
    if (true)
        console.log(m);
}


/***/ }),

/***/ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/videotel.ts":
/*!***********************************************************************************!*\
  !*** ../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/cbm_6499/videotel.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBSConnector: () => (/* binding */ BBSConnector)
/* harmony export */ });
class BBSConnector {
    constructor() {
        this.address = "wss://bbs.sblendorio.eu";
        this.port = "8080";
        this.protocol = "bbs";
        this.on_error = (err) => { };
        this.on_open = () => { };
        this.on_close = () => { };
        this.on_data = (data) => { };
        this.last_timestamp = 0;
    }
    connect() {
        this.ws_connection = new WebSocket(`${this.address}:${this.port}`, this.protocol);
        this.ws_connection.binaryType = "arraybuffer";
        this.ws_connection.onerror = (err) => {
            console.log('websocket connection error');
            this.on_error(err);
        };
        this.ws_connection.onopen = () => {
            console.log('websocket connected');
            this.on_open();
        };
        this.ws_connection.onclose = () => {
            console.log('websocket disconnected');
            this.on_close();
        };
        this.ws_connection.onmessage = (e) => {
            if (e.data instanceof ArrayBuffer) {
                let u = new Uint8Array(e.data);
                this.on_data(u);
                if (e.timeStamp <= this.last_timestamp)
                    console.log("**************");
                this.last_timestamp = e.timeStamp;
            }
            else {
                console.log("websocket Received string: '" + e.data + "'");
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
        if (this.ws_connection !== undefined)
            this.ws_connection.close();
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
/* harmony import */ var _bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts");
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
// normal BBS starts with ?load=nippur72/terminal.prg
// prestel BBS starts with ?cbm6499=true
/******************/






let stopped = false; // allows to stop/resume the emulation
let frames = 0;
let averageFrameTime = 0;
let cycle = 0;
let total_cycles = 0;
let throttle = false;
let end_of_frame_hook = undefined;
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
    averageFrameTime = averageFrameTime * 0.992 + usec * 0.008;
    if (!stopped)
        requestAnimationFrame(oneFrame);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.config(0);
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.ex(5000); // wait for memory pattern writing
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.mem_write(204, 1); // flags system not booted yet
        let options = yield (0,_options__WEBPACK_IMPORTED_MODULE_1__.parseQueryStringCommands)();
        // autostart terminal if loaded from bbs.sblendorio.ue
        let href = window.location.href;
        let is_retrocampus = href.match(/^http:\/\/(bbs\.sblendorio\.eu|bbs\.retrocampus\.com)/g);
        let is_retroacademy = href.match(/^http:\/\/(bbs\.retroacademy\.it)/g);
        if (is_retrocampus && options.wstcp === undefined)
            (0,_bbs__WEBPACK_IMPORTED_MODULE_4__.set_wstcp_address)("wss://bbs.sblendorio.eu:8080");
        if (is_retroacademy && options.wstcp === undefined)
            (0,_bbs__WEBPACK_IMPORTED_MODULE_4__.set_wstcp_address)("wss://bbs.sblendorio.eu:8081");
        if ((is_retroacademy || is_retrocampus) && options.load === undefined)
            (0,_fetchProgram__WEBPACK_IMPORTED_MODULE_5__.fetchProgram)("nippur72/terminal.prg");
        (0,_video__WEBPACK_IMPORTED_MODULE_2__.calculateGeometry)();
        // starts drawing frames
        //goAudio();
        _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_0__.c64.go();
        // starts BBS only if wstcp argumen was specified
        if (options.wstcp !== undefined) {
            (0,_bbs__WEBPACK_IMPORTED_MODULE_4__.bbs)();
        }
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
/* harmony import */ var _bbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts");
/* harmony import */ var _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emscripten_wrapper */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/emscripten_wrapper.ts");
/* harmony import */ var _fetchProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchProgram */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/fetchProgram.ts");
/* harmony import */ var _mdawson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdawson */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/mdawson.ts");
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
    return __awaiter(this, void 0, void 0, function* () {
        let options = getQueryStringObject();
        if (options.config !== undefined) {
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.config(Number(options.config));
        }
        if (options.joy !== undefined) {
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.emu_joy(Number(options.joy));
            console.log(`Joystick emulation ${Number(options.joy) != 0 ? "enabled" : "disabled"}`);
        }
        if (options.wstcp !== undefined) {
            (0,_bbs__WEBPACK_IMPORTED_MODULE_0__.set_wstcp_address)(options.wstcp);
        }
        if (options.load !== undefined) {
            const name = options.load;
            if (name.startsWith("http")) {
                // external load
                (0,_mdawson__WEBPACK_IMPORTED_MODULE_3__.externalLoad)("loadPrg", name);
            }
            else {
                // internal load
                yield (0,_fetchProgram__WEBPACK_IMPORTED_MODULE_2__.fetchProgram)(name);
            }
        }
        if (options.cbm6499 !== undefined) {
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.set_exrom(true);
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.set_emulate_cbm_6499(true);
            _emscripten_wrapper__WEBPACK_IMPORTED_MODULE_1__.c64.reset();
        }
        return options;
    });
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
module.exports = __webpack_require__.p + "b02ba4fd20a670861462.wasm";

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
/* harmony import */ var _bbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbs */ "../../../../../Computer/Desktop/USB/GitHub/c64-emu/src/bbs.ts");
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
window.modem_read = _bbs__WEBPACK_IMPORTED_MODULE_4__.modem_read;
window.modem_write = _bbs__WEBPACK_IMPORTED_MODULE_4__.modem_write;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDNUIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFTLENBQUM7SUFDdkIsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUc7UUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVEOzs7Ozs7O0VBT0U7QUFFRixTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQzNCLFVBQVUsQ0FBQyxHQUFFLEVBQUUsUUFBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxHQUFFLEVBQUUsTUFBSyxDQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxHQUFFLEVBQUUsUUFBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxHQUFFLEVBQUUsTUFBSyxDQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2QsY0FBYyxFQUFFLENB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QUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFFOUUsSUFBRyxHQUFHLEtBQUssR0FBRyxFQUFVO1FBQUUsYUFBYSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7S0FBRyxDQUFFLHNCQUFzQjtJQUV6RyxRQUFRO0lBQ1IsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFFdkQsSUFBRyxJQUFJLEtBQUssT0FBTztRQUFTLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssV0FBVztRQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssWUFBWTtRQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssV0FBVztRQUFLLGFBQWEsQ0FBQyxJ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LENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9lbXNjcmlwdGVuX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL0ZpbGVTYXZlci5qcyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9hdWRpby50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9iYnMudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvYnJvd3Nlci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9jYm1fNjQ5OS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9tNjgyMS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS9tNjg1MC50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9jYm1fNjQ5OS92aWRlb3RlbC50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9lbXNjcmlwdGVuX3dyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZmV0Y2hQcm9ncmFtLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2ZpbGVzeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMva2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMva2V5Ym9hcmRfSVQudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvbWRhd3Nvbi50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9vcHRpb25zLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL3ZpZGVvLnRzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvYW1kIGRlZmluZSIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGVtc2NyaXB0ZW5fbW9kdWxlID0gKCgpID0+IHtcclxuICB2YXIgX3NjcmlwdERpciA9IGltcG9ydC5tZXRhLnVybDtcclxuICBcclxuICByZXR1cm4gKFxyXG5mdW5jdGlvbihlbXNjcmlwdGVuX21vZHVsZSA9IHt9KSAge1xyXG5cclxudmFyIE1vZHVsZT10eXBlb2YgZW1zY3JpcHRlbl9tb2R1bGUhPVwidW5kZWZpbmVkXCI/ZW1zY3JpcHRlbl9tb2R1bGU6e307dmFyIHJlYWR5UHJvbWlzZVJlc29sdmUscmVhZHlQcm9taXNlUmVqZWN0O01vZHVsZVtcInJlYWR5XCJdPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWFkeVByb21pc2VSZXNvbHZlPXJlc29sdmU7cmVhZHlQcm9taXNlUmVqZWN0PXJlamVjdH0pO3ZhciBtb2R1bGVPdmVycmlkZXM9T2JqZWN0LmFzc2lnbih7fSxNb2R1bGUpO3ZhciBhcmd1bWVudHNfPVtdO3ZhciB0aGlzUHJvZ3JhbT1cIi4vdGhpcy5wcm9ncmFtXCI7dmFyIHF1aXRfPShzdGF0dXMsdG9UaHJvdyk9Pnt0aHJvdyB0b1Rocm93fTt2YXIgRU5WSVJPTk1FTlRfSVNfV0VCPXRydWU7dmFyIEVOVklST05NRU5UX0lTX1dPUktFUj1mYWxzZTt2YXIgc2NyaXB0RGlyZWN0b3J5PVwiXCI7ZnVuY3Rpb24gbG9jYXRlRmlsZShwYXRoKXtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXtyZXR1cm4gTW9kdWxlW1wibG9jYXRlRmlsZVwiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkXyxyZWFkQXN5bmMscmVhZEJpbmFyeSxzZXRXaW5kb3dUaXRsZTtpZihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUil7aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtzY3JpcHREaXJlY3Rvcnk9c2VsZi5sb2NhdGlvbi5ocmVmfWVsc2UgaWYodHlwZW9mIGRvY3VtZW50IT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5jdXJyZW50U2NyaXB0KXtzY3JpcHREaXJlY3Rvcnk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9aWYoX3NjcmlwdERpcil7c2NyaXB0RGlyZWN0b3J5PV9zY3JpcHREaXJ9aWYoc2NyaXB0RGlyZWN0b3J5LmluZGV4T2YoXCJibG9iOlwiKSE9PTApe3NjcmlwdERpcmVjdG9yeT1zY3JpcHREaXJlY3Rvcnkuc3Vic3RyKDAsc2NyaXB0RGlyZWN0b3J5LnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWVsc2V7c2NyaXB0RGlyZWN0b3J5PVwiXCJ9e3JlYWRfPXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIuc2VuZChudWxsKTtyZXR1cm4geGhyLnJlc3BvbnNlVGV4dH07aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKX19cmVhZEFzeW5jPSh1cmwsb25sb2FkLG9uZXJyb3IpPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsdHJ1ZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLm9ubG9hZD0oKT0+e2lmKHhoci5zdGF0dXM9PTIwMHx8eGhyLnN0YXR1cz09MCYmeGhyLnJlc3BvbnNlKXtvbmxvYWQoeGhyLnJlc3BvbnNlKTtyZXR1cm59b25lcnJvcigpfTt4aHIub25lcnJvcj1vbmVycm9yO3hoci5zZW5kKG51bGwpfX1zZXRXaW5kb3dUaXRsZT10aXRsZT0+ZG9jdW1lbnQudGl0bGU9dGl0bGV9ZWxzZXt9dmFyIG91dD1Nb2R1bGVbXCJwcmludFwiXXx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgZXJyPU1vZHVsZVtcInByaW50RXJyXCJdfHxjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKE1vZHVsZSxtb2R1bGVPdmVycmlkZXMpO21vZHVsZU92ZXJyaWRlcz1udWxsO2lmKE1vZHVsZVtcImFyZ3VtZW50c1wiXSlhcmd1bWVudHNfPU1vZHVsZVtcImFyZ3VtZW50c1wiXTtpZihNb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXSl0aGlzUHJvZ3JhbT1Nb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXTtpZihNb2R1bGVbXCJxdWl0XCJdKXF1aXRfPU1vZHVsZVtcInF1aXRcIl07dmFyIHdhc21CaW5hcnk7aWYoTW9kdWxlW1wid2FzbUJpbmFyeVwiXSl3YXNtQmluYXJ5PU1vZHVsZVtcIndhc21CaW5hcnlcIl07dmFyIG5vRXhpdFJ1bnRpbWU9TW9kdWxlW1wibm9FeGl0UnVudGltZVwiXXx8dHJ1ZTtpZih0eXBlb2YgV2ViQXNzZW1ibHkhPVwib2JqZWN0XCIpe2Fib3J0KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKX12YXIgd2FzbU1lbW9yeTt2YXIgQUJPUlQ9ZmFsc2U7dmFyIEVYSVRTVEFUVVM7dmFyIFVURjhEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGY4XCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEY4QXJyYXlUb1N0cmluZyhoZWFwT3JBcnJheSxpZHgsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRJZHg9aWR4K21heEJ5dGVzVG9SZWFkO3ZhciBlbmRQdHI9aWR4O3doaWxlKGhlYXBPckFycmF5W2VuZFB0cl0mJiEoZW5kUHRyPj1lbmRJZHgpKSsrZW5kUHRyO2lmKGVuZFB0ci1pZHg+MTYmJmhlYXBPckFycmF5LmJ1ZmZlciYmVVRGOERlY29kZXIpe3JldHVybiBVVEY4RGVjb2Rlci5kZWNvZGUoaGVhcE9yQXJyYXkuc3ViYXJyYXkoaWR4LGVuZFB0cikpfXZhciBzdHI9XCJcIjt3aGlsZShpZHg8ZW5kUHRyKXt2YXIgdTA9aGVhcE9yQXJyYXlbaWR4KytdO2lmKCEodTAmMTI4KSl7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTtjb250aW51ZX12YXIgdTE9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyMjQpPT0xOTIpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgodTAmMzEpPDw2fHUxKTtjb250aW51ZX12YXIgdTI9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyNDApPT0yMjQpe3UwPSh1MCYxNSk8PDEyfHUxPDw2fHUyfWVsc2V7dTA9KHUwJjcpPDwxOHx1MTw8MTJ8dTI8PDZ8aGVhcE9yQXJyYXlbaWR4KytdJjYzfWlmKHUwPDY1NTM2KXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApfWVsc2V7dmFyIGNoPXUwLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9fXJldHVybiBzdHJ9ZnVuY3Rpb24gVVRGOFRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7cmV0dXJuIHB0cj9VVEY4QXJyYXlUb1N0cmluZyhIRUFQVTgscHRyLG1heEJ5dGVzVG9SZWFkKTpcIlwifWZ1bmN0aW9uIHN0cmluZ1RvVVRGOEFycmF5KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpe2lmKCEobWF4Qnl0ZXNUb1dyaXRlPjApKXJldHVybiAwO3ZhciBzdGFydElkeD1vdXRJZHg7dmFyIGVuZElkeD1vdXRJZHgrbWF4Qnl0ZXNUb1dyaXRlLTE7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIHU9c3RyLmNoYXJDb2RlQXQoaSk7aWYodT49NTUyOTYmJnU8PTU3MzQzKXt2YXIgdTE9c3RyLmNoYXJDb2RlQXQoKytpKTt1PTY1NTM2KygodSYxMDIzKTw8MTApfHUxJjEwMjN9aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNlIGlmKHU8PTY1NTM1KXtpZihvdXRJZHgrMj49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTIyNHx1Pj4xMjtoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNle2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M319aGVhcFtvdXRJZHhdPTA7cmV0dXJuIG91dElkeC1zdGFydElkeH1mdW5jdGlvbiBzdHJpbmdUb1VURjgoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe3JldHVybiBzdHJpbmdUb1VURjhBcnJheShzdHIsSEVBUFU4LG91dFB0cixtYXhCeXRlc1RvV3JpdGUpfXZhciBIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQRjY0O2Z1bmN0aW9uIHVwZGF0ZU1lbW9yeVZpZXdzKCl7dmFyIGI9d2FzbU1lbW9yeS5idWZmZXI7TW9kdWxlW1wiSEVBUDhcIl09SEVBUDg9bmV3IEludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQMTZcIl09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUFU4XCJdPUhFQVBVOD1uZXcgVWludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQVTE2XCJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVBVMzJcIl09SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEYzMlwiXT1IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEY2NFwiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYil9dmFyIHdhc21UYWJsZTt2YXIgX19BVFBSRVJVTl9fPVtdO3ZhciBfX0FUSU5JVF9fPVtdO3ZhciBfX0FUUE9TVFJVTl9fPVtdO3ZhciBydW50aW1lSW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlW1wicHJlUnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlUnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlUnVuXCJdPVtNb2R1bGVbXCJwcmVSdW5cIl1dO3doaWxlKE1vZHVsZVtcInByZVJ1blwiXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVtcInByZVJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKX1mdW5jdGlvbiBpbml0UnVudGltZSgpe3J1bnRpbWVJbml0aWFsaXplZD10cnVlO2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pfWZ1bmN0aW9uIHBvc3RSdW4oKXtpZihNb2R1bGVbXCJwb3N0UnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicG9zdFJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInBvc3RSdW5cIl09W01vZHVsZVtcInBvc3RSdW5cIl1dO3doaWxlKE1vZHVsZVtcInBvc3RSdW5cIl0ubGVuZ3RoKXthZGRPblBvc3RSdW4oTW9kdWxlW1wicG9zdFJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyl9ZnVuY3Rpb24gYWRkT25QcmVSdW4oY2Ipe19fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPbkluaXQoY2Ipe19fQVRJTklUX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpfXZhciBydW5EZXBlbmRlbmNpZXM9MDt2YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbDt2YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7ZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzKys7aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfX1mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMtLTtpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9aWYocnVuRGVwZW5kZW5jaWVzPT0wKXtpZihydW5EZXBlbmRlbmN5V2F0Y2hlciE9PW51bGwpe2NsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO3J1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGx9aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX1mdW5jdGlvbiBhYm9ydCh3aGF0KXtpZihNb2R1bGVbXCJvbkFib3J0XCJdKXtNb2R1bGVbXCJvbkFib3J0XCJdKHdoYXQpfXdoYXQ9XCJBYm9ydGVkKFwiK3doYXQrXCIpXCI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7RVhJVFNUQVRVUz0xO3doYXQrPVwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7cmVhZHlQcm9taXNlUmVqZWN0KGUpO3Rocm93IGV9dmFyIGRhdGFVUklQcmVmaXg9XCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsXCI7ZnVuY3Rpb24gaXNEYXRhVVJJKGZpbGVuYW1lKXtyZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChkYXRhVVJJUHJlZml4KX12YXIgd2FzbUJpbmFyeUZpbGU7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7d2FzbUJpbmFyeUZpbGU9XCJlbXNjcmlwdGVuX21vZHVsZS53YXNtXCI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpfX1lbHNle3dhc21CaW5hcnlGaWxlPW5ldyBVUkwoXCJlbXNjcmlwdGVuX21vZHVsZS53YXNtXCIsaW1wb3J0Lm1ldGEudXJsKS5ocmVmfWZ1bmN0aW9uIGdldEJpbmFyeShmaWxlKXt0cnl7aWYoZmlsZT09d2FzbUJpbmFyeUZpbGUmJndhc21CaW5hcnkpe3JldHVybiBuZXcgVWludDhBcnJheSh3YXNtQmluYXJ5KX1pZihyZWFkQmluYXJ5KXtyZXR1cm4gcmVhZEJpbmFyeShmaWxlKX10aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIn1jYXRjaChlcnIpe2Fib3J0KGVycil9fWZ1bmN0aW9uIGdldEJpbmFyeVByb21pc2UoKXtpZighd2FzbUJpbmFyeSYmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKSl7aWYodHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaCh3YXNtQmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7aWYoIXJlc3BvbnNlW1wib2tcIl0pe3Rocm93XCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIit3YXNtQmluYXJ5RmlsZStcIidcIn1yZXR1cm4gcmVzcG9uc2VbXCJhcnJheUJ1ZmZlclwiXSgpfSkuY2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gZ2V0QmluYXJ5KHdhc21CaW5hcnlGaWxlKX0pfX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBnZXRCaW5hcnkod2FzbUJpbmFyeUZpbGUpfSl9ZnVuY3Rpb24gY3JlYXRlV2FzbSgpe3ZhciBpbmZvPXtcImFcIjp3YXNtSW1wb3J0c307ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7dmFyIGV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0cztNb2R1bGVbXCJhc21cIl09ZXhwb3J0czt3YXNtTWVtb3J5PU1vZHVsZVtcImFzbVwiXVtcImRcIl07dXBkYXRlTWVtb3J5Vmlld3MoKTt3YXNtVGFibGU9TW9kdWxlW1wiYXNtXCJdW1wiRFwiXTthZGRPbkluaXQoTW9kdWxlW1wiYXNtXCJdW1wiZVwiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIil9YWRkUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZXIpe3JldHVybiBnZXRCaW5hcnlQcm9taXNlKCkudGhlbihmdW5jdGlvbihiaW5hcnkpe3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW5mbyl9KS50aGVuKGZ1bmN0aW9uKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2V9KS50aGVuKHJlY2VpdmVyLGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogXCIrcmVhc29uKTthYm9ydChyZWFzb24pfSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYygpe2lmKCF3YXNtQmluYXJ5JiZ0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmc9PVwiZnVuY3Rpb25cIiYmIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkmJnR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZXN1bHQ9V2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzcG9uc2UsaW5mbyk7cmV0dXJuIHJlc3VsdC50aGVuKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0LGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6IFwiK3JlYXNvbik7ZXJyKFwiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb25cIik7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpfSl9KX1lbHNle3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX19aWYoTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKXt0cnl7dmFyIGV4cG9ydHM9TW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKGluZm8scmVjZWl2ZUluc3RhbmNlKTtyZXR1cm4gZXhwb3J0c31jYXRjaChlKXtlcnIoXCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiBcIitlKTtyZWFkeVByb21pc2VSZWplY3QoZSl9fWluc3RhbnRpYXRlQXN5bmMoKS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybnt9fXZhciBBU01fQ09OU1RTPXs3MTE1MjooKT0+e3JldHVybiBjYm1fNjQ5OV9yZXNldCgpfSw3MTE4MTooJDAsJDEpPT57YXVkaW9fYnVmX3JlYWR5KCQwLCQxKX0sNzEyMTA6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDcxMjM3OiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw3MTI2NDokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNzEyOTE6JDA9PntyZXR1cm4gbW9kZW1fcmVhZCgkMCl9LDcxMzE4OigkMCwkMSk9Pnttb2RlbV93cml0ZSgkMCwkMSl9LDcxMzQyOigkMCwkMSk9PntyZXR1cm4gY2JtXzY0OTlfcmVhZCgkMCwkMSl9LDcxMzc2OigkMCwkMSk9PntjYm1fNjQ5OV93cml0ZSgkMCwkMSl9fTtmdW5jdGlvbiBjYWxsUnVudGltZUNhbGxiYWNrcyhjYWxsYmFja3Mpe3doaWxlKGNhbGxiYWNrcy5sZW5ndGg+MCl7Y2FsbGJhY2tzLnNoaWZ0KCkoTW9kdWxlKX19ZnVuY3Rpb24gX19fYXNzZXJ0X2ZhaWwoY29uZGl0aW9uLGZpbGVuYW1lLGxpbmUsZnVuYyl7YWJvcnQoXCJBc3NlcnRpb24gZmFpbGVkOiBcIitVVEY4VG9TdHJpbmcoY29uZGl0aW9uKStcIiwgYXQ6IFwiK1tmaWxlbmFtZT9VVEY4VG9TdHJpbmcoZmlsZW5hbWUpOlwidW5rbm93biBmaWxlbmFtZVwiLGxpbmUsZnVuYz9VVEY4VG9TdHJpbmcoZnVuYyk6XCJ1bmtub3duIGZ1bmN0aW9uXCJdKX12YXIgcmVhZEVtQXNtQXJnc0FycmF5PVtdO2Z1bmN0aW9uIHJlYWRFbUFzbUFyZ3Moc2lnUHRyLGJ1Zil7cmVhZEVtQXNtQXJnc0FycmF5Lmxlbmd0aD0wO3ZhciBjaDtidWY+Pj0yO3doaWxlKGNoPUhFQVBVOFtzaWdQdHIrK10pe2J1Zis9Y2ghPTEwNSZidWY7cmVhZEVtQXNtQXJnc0FycmF5LnB1c2goY2g9PTEwNT9IRUFQMzJbYnVmXTpIRUFQRjY0W2J1ZisrPj4xXSk7KytidWZ9cmV0dXJuIHJlYWRFbUFzbUFyZ3NBcnJheX1mdW5jdGlvbiBydW5FbUFzbUZ1bmN0aW9uKGNvZGUsc2lnUHRyLGFyZ2J1Zil7dmFyIGFyZ3M9cmVhZEVtQXNtQXJncyhzaWdQdHIsYXJnYnVmKTtyZXR1cm4gQVNNX0NPTlNUU1tjb2RlXS5hcHBseShudWxsLGFyZ3MpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX2FzbV9jb25zdF9pbnQoY29kZSxzaWdQdHIsYXJnYnVmKXtyZXR1cm4gcnVuRW1Bc21GdW5jdGlvbihjb2RlLHNpZ1B0cixhcmdidWYpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRDRnVuYyhpZGVudCl7dmFyIGZ1bmM9TW9kdWxlW1wiX1wiK2lkZW50XTtyZXR1cm4gZnVuY31mdW5jdGlvbiB3cml0ZUFycmF5VG9NZW1vcnkoYXJyYXksYnVmZmVyKXtIRUFQOC5zZXQoYXJyYXksYnVmZmVyKX1mdW5jdGlvbiBjY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3Msb3B0cyl7dmFyIHRvQz17XCJzdHJpbmdcIjpzdHI9Pnt2YXIgcmV0PTA7aWYoc3RyIT09bnVsbCYmc3RyIT09dW5kZWZpbmVkJiZzdHIhPT0wKXt2YXIgbGVuPShzdHIubGVuZ3RoPDwyKSsxO3JldD1zdGFja0FsbG9jKGxlbik7c3RyaW5nVG9VVEY4KHN0cixyZXQsbGVuKX1yZXR1cm4gcmV0fSxcImFycmF5XCI6YXJyPT57dmFyIHJldD1zdGFja0FsbG9jKGFyci5sZW5ndGgpO3dyaXRlQXJyYXlUb01lbW9yeShhcnIscmV0KTtyZXR1cm4gcmV0fX07ZnVuY3Rpb24gY29udmVydFJldHVyblZhbHVlKHJldCl7aWYocmV0dXJuVHlwZT09PVwic3RyaW5nXCIpe3JldHVybiBVVEY4VG9TdHJpbmcocmV0KX1pZihyZXR1cm5UeXBlPT09XCJib29sZWFuXCIpcmV0dXJuIEJvb2xlYW4ocmV0KTtyZXR1cm4gcmV0fXZhciBmdW5jPWdldENGdW5jKGlkZW50KTt2YXIgY0FyZ3M9W107dmFyIHN0YWNrPTA7aWYoYXJncyl7Zm9yKHZhciBpPTA7aTxhcmdzLmxlbmd0aDtpKyspe3ZhciBjb252ZXJ0ZXI9dG9DW2FyZ1R5cGVzW2ldXTtpZihjb252ZXJ0ZXIpe2lmKHN0YWNrPT09MClzdGFjaz1zdGFja1NhdmUoKTtjQXJnc1tpXT1jb252ZXJ0ZXIoYXJnc1tpXSl9ZWxzZXtjQXJnc1tpXT1hcmdzW2ldfX19dmFyIHJldD1mdW5jLmFwcGx5KG51bGwsY0FyZ3MpO2Z1bmN0aW9uIG9uRG9uZShyZXQpe2lmKHN0YWNrIT09MClzdGFja1Jlc3RvcmUoc3RhY2spO3JldHVybiBjb252ZXJ0UmV0dXJuVmFsdWUocmV0KX1yZXQ9b25Eb25lKHJldCk7cmV0dXJuIHJldH1mdW5jdGlvbiBjd3JhcChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLG9wdHMpe3ZhciBudW1lcmljQXJncz0hYXJnVHlwZXN8fGFyZ1R5cGVzLmV2ZXJ5KHR5cGU9PnR5cGU9PT1cIm51bWJlclwifHx0eXBlPT09XCJib29sZWFuXCIpO3ZhciBudW1lcmljUmV0PXJldHVyblR5cGUhPT1cInN0cmluZ1wiO2lmKG51bWVyaWNSZXQmJm51bWVyaWNBcmdzJiYhb3B0cyl7cmV0dXJuIGdldENGdW5jKGlkZW50KX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gY2NhbGwoaWRlbnQscmV0dXJuVHlwZSxhcmdUeXBlcyxhcmd1bWVudHMsb3B0cyl9fXZhciB3YXNtSW1wb3J0cz17XCJhXCI6X19fYXNzZXJ0X2ZhaWwsXCJiXCI6X2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2ludCxcImNcIjpfZW1zY3JpcHRlbl9tZW1jcHlfYmlnfTt2YXIgYXNtPWNyZWF0ZVdhc20oKTt2YXIgX19fd2FzbV9jYWxsX2N0b3JzPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX3dhc21fY2FsbF9jdG9ycz1Nb2R1bGVbXCJhc21cIl1bXCJlXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luaXQ9TW9kdWxlW1wiX3N5c19pbml0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfaW5pdD1Nb2R1bGVbXCJfc3lzX2luaXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiZlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19jb25maWc9TW9kdWxlW1wiX3N5c19jb25maWdcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19jb25maWc9TW9kdWxlW1wiX3N5c19jb25maWdcIl09TW9kdWxlW1wiYXNtXCJdW1wiZ1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19yZXNldD1Nb2R1bGVbXCJfc3lzX3Jlc2V0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcmVzZXQ9TW9kdWxlW1wiX3N5c19yZXNldFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJoXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4ZWM9TW9kdWxlW1wiX3N5c19leGVjXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfZXhlYz1Nb2R1bGVbXCJfc3lzX2V4ZWNcIl09TW9kdWxlW1wiYXNtXCJdW1wiaVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leGVjX3VzPU1vZHVsZVtcIl9zeXNfZXhlY191c1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2V4ZWNfdXM9TW9kdWxlW1wiX3N5c19leGVjX3VzXCJdPU1vZHVsZVtcImFzbVwiXVtcImpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXg9TW9kdWxlW1wiX3N5c19leFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2V4PU1vZHVsZVtcIl9zeXNfZXhcIl09TW9kdWxlW1wiYXNtXCJdW1wia1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c192ZHA9TW9kdWxlW1wiX3N5c192ZHBcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c192ZHA9TW9kdWxlW1wiX3N5c192ZHBcIl09TW9kdWxlW1wiYXNtXCJdW1wibFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19rZXlfZG93bj1Nb2R1bGVbXCJfc3lzX2tleV9kb3duXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfa2V5X2Rvd249TW9kdWxlW1wiX3N5c19rZXlfZG93blwiXT1Nb2R1bGVbXCJhc21cIl1bXCJtXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2tleV91cD1Nb2R1bGVbXCJfc3lzX2tleV91cFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2tleV91cD1Nb2R1bGVbXCJfc3lzX2tleV91cFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJuXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3F1aWNrX2xvYWQ9TW9kdWxlW1wiX3N5c19xdWlja19sb2FkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfcXVpY2tfbG9hZD1Nb2R1bGVbXCJfc3lzX3F1aWNrX2xvYWRcIl09TW9kdWxlW1wiYXNtXCJdW1wib1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZT1Nb2R1bGVbXCJfc3lzX2luc2VydF9yb21fY2FydGRyaWdlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2U9TW9kdWxlW1wiX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJwXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX21lbV9jcHVfcmQ9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3JkXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfbWVtX2NwdV9yZD1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfcmRcIl09TW9kdWxlW1wiYXNtXCJdW1wicVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19tZW1fY3B1X3dyPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV93clwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX21lbV9jcHVfd3I9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3dyXCJdPU1vZHVsZVtcImFzbVwiXVtcInJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfam95c3RpY2s9TW9kdWxlW1wiX3N5c19qb3lzdGlja1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2pveXN0aWNrPU1vZHVsZVtcIl9zeXNfam95c3RpY2tcIl09TW9kdWxlW1wiYXNtXCJdW1wic1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfam95c3RpY2tfdHlwZT1Nb2R1bGVbXCJfc3lzX3NldF9qb3lzdGlja190eXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2pveXN0aWNrX3R5cGU9TW9kdWxlW1wiX3N5c19zZXRfam95c3RpY2tfdHlwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ0XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2luc2VydF90YXBlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3RhcGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19pbnNlcnRfdGFwZT1Nb2R1bGVbXCJfc3lzX2luc2VydF90YXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcmVtb3ZlX3RhcGU9TW9kdWxlW1wiX3N5c19yZW1vdmVfdGFwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3JlbW92ZV90YXBlPU1vZHVsZVtcIl9zeXNfcmVtb3ZlX3RhcGVcIl09TW9kdWxlW1wiYXNtXCJdW1widlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c190YXBlX3BsYXk9TW9kdWxlW1wiX3N5c190YXBlX3BsYXlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c190YXBlX3BsYXk9TW9kdWxlW1wiX3N5c190YXBlX3BsYXlcIl09TW9kdWxlW1wiYXNtXCJdW1wid1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c190YXBlX3N0b3A9TW9kdWxlW1wiX3N5c190YXBlX3N0b3BcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c190YXBlX3N0b3A9TW9kdWxlW1wiX3N5c190YXBlX3N0b3BcIl09TW9kdWxlW1wiYXNtXCJdW1wieFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19jYXNfcG9ydD1Nb2R1bGVbXCJfc3lzX2Nhc19wb3J0XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfY2FzX3BvcnQ9TW9kdWxlW1wiX3N5c19jYXNfcG9ydFwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9leHJvbT1Nb2R1bGVbXCJfc3lzX3NldF9leHJvbVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9leHJvbT1Nb2R1bGVbXCJfc3lzX3NldF9leHJvbVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ6XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9jYm1fNjQ5OV9uYmFuaz1Nb2R1bGVbXCJfc3lzX3NldF9jYm1fNjQ5OV9uYmFua1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9jYm1fNjQ5OV9uYmFuaz1Nb2R1bGVbXCJfc3lzX3NldF9jYm1fNjQ5OV9uYmFua1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJBXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5PU1vZHVsZVtcIl9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OT1Nb2R1bGVbXCJfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCJdPU1vZHVsZVtcImFzbVwiXVtcIkJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2V4dGVybmFsX2lycT1Nb2R1bGVbXCJfc3lzX3NldF9leHRlcm5hbF9pcnFcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfZXh0ZXJuYWxfaXJxPU1vZHVsZVtcIl9zeXNfc2V0X2V4dGVybmFsX2lycVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJDXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19lcnJub19sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVybihfX19lcnJub19sb2NhdGlvbj1Nb2R1bGVbXCJhc21cIl1bXCJfX2Vycm5vX2xvY2F0aW9uXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja1NhdmU9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tTYXZlPU1vZHVsZVtcImFzbVwiXVtcIkVcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrUmVzdG9yZT1mdW5jdGlvbigpe3JldHVybihzdGFja1Jlc3RvcmU9TW9kdWxlW1wiYXNtXCJdW1wiRlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tBbGxvYz1mdW5jdGlvbigpe3JldHVybihzdGFja0FsbG9jPU1vZHVsZVtcImFzbVwiXVtcIkdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07TW9kdWxlW1wiY2NhbGxcIl09Y2NhbGw7TW9kdWxlW1wiY3dyYXBcIl09Y3dyYXA7dmFyIGNhbGxlZFJ1bjtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9ZnVuY3Rpb24gcnVuQ2FsbGVyKCl7aWYoIWNhbGxlZFJ1bilydW4oKTtpZighY2FsbGVkUnVuKWRlcGVuZGVuY2llc0Z1bGZpbGxlZD1ydW5DYWxsZXJ9O2Z1bmN0aW9uIHJ1bigpe2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59cHJlUnVuKCk7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1mdW5jdGlvbiBkb1J1bigpe2lmKGNhbGxlZFJ1bilyZXR1cm47Y2FsbGVkUnVuPXRydWU7TW9kdWxlW1wiY2FsbGVkUnVuXCJdPXRydWU7aWYoQUJPUlQpcmV0dXJuO2luaXRSdW50aW1lKCk7cmVhZHlQcm9taXNlUmVzb2x2ZShNb2R1bGUpO2lmKE1vZHVsZVtcIm9uUnVudGltZUluaXRpYWxpemVkXCJdKU1vZHVsZVtcIm9uUnVudGltZUluaXRpYWxpemVkXCJdKCk7cG9zdFJ1bigpfWlmKE1vZHVsZVtcInNldFN0YXR1c1wiXSl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiUnVubmluZy4uLlwiKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlwiKX0sMSk7ZG9SdW4oKX0sMSl9ZWxzZXtkb1J1bigpfX1pZihNb2R1bGVbXCJwcmVJbml0XCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlSW5pdFwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZUluaXRcIl09W01vZHVsZVtcInByZUluaXRcIl1dO3doaWxlKE1vZHVsZVtcInByZUluaXRcIl0ubGVuZ3RoPjApe01vZHVsZVtcInByZUluaXRcIl0ucG9wKCkoKX19cnVuKCk7XHJcblxyXG5cclxuICByZXR1cm4gZW1zY3JpcHRlbl9tb2R1bGUucmVhZHlcclxufVxyXG4pO1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBlbXNjcmlwdGVuX21vZHVsZTsiLCIvKiBGaWxlU2F2ZXIuanNcbiAqIEEgc2F2ZUFzKCkgRmlsZVNhdmVyIGltcGxlbWVudGF0aW9uLlxuICogMS4zLjJcbiAqIDIwMTYtMDYtMTYgMTg6MjU6MTlcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiB2aWV3ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL2NvbnN0cnVjdG9yL2kudGVzdCh2aWV3LkhUTUxFbGVtZW50KSB8fCB2aWV3LnNhZmFyaVxuXHRcdCwgaXNfY2hyb21lX2lvcyA9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0Ly8gdGhlIEJsb2IgQVBJIGlzIGZ1bmRhbWVudGFsbHkgYnJva2VuIGFzIHRoZXJlIGlzIG5vIFwiZG93bmxvYWRmaW5pc2hlZFwiIGV2ZW50IHRvIHN1YnNjcmliZSB0b1xuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gMTAwMCAqIDQwIC8vIGluIG1zXG5cdFx0LCByZXZva2UgPSBmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHR2YXIgcmV2b2tlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXG5cdFx0XHRcdFx0Z2V0X1VSTCgpLnJldm9rZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHsgLy8gZmlsZSBpcyBhIEZpbGVcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChyZXZva2VyLCBhcmJpdHJhcnlfcmV2b2tlX3RpbWVvdXQpO1xuXHRcdH1cblx0XHQsIGRpc3BhdGNoID0gZnVuY3Rpb24oZmlsZXNhdmVyLCBldmVudF90eXBlcywgZXZlbnQpIHtcblx0XHRcdGV2ZW50X3R5cGVzID0gW10uY29uY2F0KGV2ZW50X3R5cGVzKTtcblx0XHRcdHZhciBpID0gZXZlbnRfdHlwZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRfdHlwZXNbaV1dO1xuXHRcdFx0XHRpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbChmaWxlc2F2ZXIsIGV2ZW50IHx8IGZpbGVzYXZlcik7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRcdHRocm93X291dHNpZGUoZXgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQsIGF1dG9fYm9tID0gZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0Ly8gcHJlcGVuZCBCT00gZm9yIFVURi04IFhNTCBhbmQgdGV4dC8qIHR5cGVzIChpbmNsdWRpbmcgSFRNTClcblx0XHRcdC8vIG5vdGU6IHlvdXIgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgY29udmVydCBVVEYtMTYgVStGRUZGIHRvIEVGIEJCIEJGXG5cdFx0XHRpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEJsb2IoW1N0cmluZy5mcm9tQ2hhckNvZGUoMHhGRUZGKSwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGZvcmNlID0gdHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZVxuXHRcdFx0XHQsIG9iamVjdF91cmxcblx0XHRcdFx0LCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKChpc19jaHJvbWVfaW9zIHx8IChmb3JjZSAmJiBpc19zYWZhcmkpKSAmJiB2aWV3LkZpbGVSZWFkZXIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB1cmwgPSBpc19jaHJvbWVfaW9zID8gcmVhZGVyLnJlc3VsdCA6IHJlYWRlci5yZXN1bHQucmVwbGFjZSgvXmRhdGE6W147XSo7LywgJ2RhdGE6YXR0YWNobWVudC9maWxlOycpO1xuXHRcdFx0XHRcdFx0XHR2YXIgcG9wdXAgPSB2aWV3Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0XHRcdGlmKCFwb3B1cCkgdmlldy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuXHRcdFx0XHRcdFx0XHR1cmw9dW5kZWZpbmVkOyAvLyByZWxlYXNlIHJlZmVyZW5jZSBiZWZvcmUgZGlzcGF0Y2hpbmdcblx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuXHRcdFx0XHRcdGlmICghb2JqZWN0X3VybCkge1xuXHRcdFx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChmb3JjZSkge1xuXHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW5lZCA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcblx0XHRcdFx0XHRcdGlmICghb3BlbmVkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFwcGxlIGRvZXMgbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvc2FmYXJpL2RvY3VtZW50YXRpb24vVG9vbHMvQ29uY2VwdHVhbC9TYWZhcmlFeHRlbnNpb25HdWlkZS9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzL1dvcmtpbmd3aXRoV2luZG93c2FuZFRhYnMuaHRtbFxuXHRcdFx0XHRcdFx0XHR2aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNhdmVfbGluay5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRzYXZlX2xpbmsuZG93bmxvYWQgPSBuYW1lO1xuXHRcdFx0XHRcdGNsaWNrKHNhdmVfbGluayk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xuXHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0fVxuXHRcdCwgRlNfcHJvdG8gPSBGaWxlU2F2ZXIucHJvdG90eXBlXG5cdFx0LCBzYXZlQXMgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiLCBub19hdXRvX2JvbSk7XG5cdFx0fVxuXHQ7XG5cdC8vIElFIDEwKyAobmF0aXZlIHNhdmVBcylcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdG5hbWUgPSBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCI7XG5cblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIG5hbWUpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCl7fTtcblx0RlNfcHJvdG8ucmVhZHlTdGF0ZSA9IEZTX3Byb3RvLklOSVQgPSAwO1xuXHRGU19wcm90by5XUklUSU5HID0gMTtcblx0RlNfcHJvdG8uRE9ORSA9IDI7XG5cblx0RlNfcHJvdG8uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlc3RhcnQgPVxuXHRGU19wcm90by5vbnByb2dyZXNzID1cblx0RlNfcHJvdG8ub253cml0ZSA9XG5cdEZTX3Byb3RvLm9uYWJvcnQgPVxuXHRGU19wcm90by5vbmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZWVuZCA9XG5cdFx0bnVsbDtcblxuXHRyZXR1cm4gc2F2ZUFzO1xufShcblx0ICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZlxuXHR8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1xuXHR8fCB0aGlzLmNvbnRlbnRcbikpO1xuLy8gYHNlbGZgIGlzIHVuZGVmaW5lZCBpbiBGaXJlZm94IGZvciBBbmRyb2lkIGNvbnRlbnQgc2NyaXB0IGNvbnRleHRcbi8vIHdoaWxlIGB0aGlzYCBpcyBuc0lDb250ZW50RnJhbWVNZXNzYWdlTWFuYWdlclxuLy8gd2l0aCBhbiBhdHRyaWJ1dGUgYGNvbnRlbnRgIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdpbmRvd1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cy5zYXZlQXMgPSBzYXZlQXM7XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCkgJiYgKGRlZmluZS5hbWQgIT09IG51bGwpKSB7XG4gIGRlZmluZShcIkZpbGVTYXZlci5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2F2ZUFzO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdldF93YXNtX2luc3RhbmNlIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG5jb25zdCBBVURJT19CVUZTSVpFID0gMTAyNDsgIC8vIG11c3QgbWF0Y2ggLmNcclxuXHJcbmxldCBhdWRpb19idWZmZXJzX3F1ZXVlOiBudW1iZXJbXVtdID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXVkaW9fYnVmX3JlYWR5KHB0cjogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgaWYoIWF1ZGlvX3BsYXlpbmcpIHJldHVybjtcclxuXHJcbiAgIGxldCBzdGFydCA9IHB0ciAvIGdldF93YXNtX2luc3RhbmNlKCkuSEVBUEYzMi5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgbGV0IGJ1ZmZlciA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUEYzMi5zdWJhcnJheShzdGFydCxzdGFydCtzaXplKSBhcyBudW1iZXJbXTtcclxuXHJcbiAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUucHVzaChbIC4uLmJ1ZmZlciBdKTsgIC8vIHB1c2ggYSBjbG9uZWQgY29weVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQVVESU8gQlVGRkVSIFRPIEJST1dTRVIgQVVESU8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5jb25zdCBidWZmZXJTaXplID0gQVVESU9fQlVGU0laRTtcclxuXHJcbmxldCBhdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbmxldCBzcGVha2VyU291bmQ6IFNjcmlwdFByb2Nlc3Nvck5vZGUgfCB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBdWRpb0NvbnRleHQoKSB7XHJcbiAgIGF1ZGlvQ29udGV4dCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7IC8vIG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpOyAgIFxyXG4gICBzcGVha2VyU291bmQgPSBhdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKGJ1ZmZlclNpemUsIDEsIDEpO1xyXG5cclxuICAgc3BlYWtlclNvdW5kLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zdCBvdXRwdXQgPSBlLm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcclxuXHJcbiAgICAgIGlmKGF1ZGlvX2J1ZmZlcnNfcXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2FybmluZzogYXVkaW8gcXVldWUgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGF1ZGlvX2J1ZmZlcnNfcXVldWUubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coYHdhcm5pbmc6IGF1ZGlvIHF1ZXVlIGlzIGdldHRpbmcgbG9uZ2VyOiAke2F1ZGlvX2J1ZmZlcnNfcXVldWUubGVuZ3RofWApO1xyXG4gICAgICAgICBhdWRpb19idWZmZXJzX3F1ZXVlID0gW107XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYnVmZmVyID0gYXVkaW9fYnVmZmVyc19xdWV1ZVswXTtcclxuICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IGF1ZGlvX2J1ZmZlcnNfcXVldWUuc2xpY2UoMSk7XHJcblxyXG4gICAgICBmb3IobGV0IGk9MDsgaTxidWZmZXJTaXplOyBpKyspIHtcclxuICAgICAgICAgb3V0cHV0W2ldID0gYnVmZmVyW2ldO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLypcclxubGV0IGNoMCA9IFtdO1xyXG5sZXQgY2gxID0gW107XHJcblxyXG5mdW5jdGlvbiBjc2F2ZSgpIHtcclxuICAgY29uc3Qgd2F2RGF0YSA9IHtcclxuICAgICAgc2FtcGxlUmF0ZTogNDgwMDAsXHJcbiAgICAgIGNoYW5uZWxEYXRhOiBbIG5ldyBGbG9hdDMyQXJyYXkoY2gwKSwgbmV3IEZsb2F0MzJBcnJheShjaDEpIF1cclxuICAgfTtcclxuICAgICBcclxuICAgY29uc3QgYnVmZmVyID0gZW5jb2RlU3luYyh3YXZEYXRhLCB7IGJpdERlcHRoOiAxNiwgZmxvYXQ6IGZhbHNlIH0pOyAgICAgIFxyXG4gICBcclxuICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJ9KTsgICBcclxuICAgY29uc3QgZmlsZU5hbWUgPSBcImNzYXZlZC53YXZcIjtcclxuICAgc2F2ZUFzKGJsb2IsIGZpbGVOYW1lKTtcclxufVxyXG4qL1xyXG5cclxubGV0IGF1ZGlvX3BsYXlpbmc6IGJvb2xlYW58dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvQXVkaW8oKSB7XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSBjcmVhdGVBdWRpb0NvbnRleHQoKTtcclxuXHJcbiAgIGlmKHNwZWFrZXJTb3VuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgIHNwZWFrZXJTb3VuZC5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgIGF1ZGlvX3BsYXlpbmcgPSB0cnVlO1xyXG4gICBhdWRpb19idWZmZXJzX3F1ZXVlID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wQXVkaW8oKSB7XHJcbiAgIGlmKGF1ZGlvX3BsYXlpbmcgIT09IHVuZGVmaW5lZCAmJiBhdWRpb19wbGF5aW5nID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKHNwZWFrZXJTb3VuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIHNwZWFrZXJTb3VuZC5kaXNjb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICAgIGF1ZGlvX3BsYXlpbmcgPSBmYWxzZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXVkaW9Db250ZXh0UmVzdW1lKCkge1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgY3JlYXRlQXVkaW9Db250ZXh0KCk7XHJcbiAgIGlmKGF1ZGlvX3BsYXlpbmcgPT09IHVuZGVmaW5lZCkgZ29BdWRpbygpO1xyXG5cclxuICAgaWYoc3BlYWtlclNvdW5kID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgIGlmKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcclxuICAgICAgYXdhaXQgYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xyXG4gICAgICBhdWRpb19idWZmZXJzX3F1ZXVlID0gW107XHJcbiAgIH1cclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG50eXBlIFNlbmRGdW5jdGlvbiA9IChidWZmZXI6IG51bWJlcltdKT0+dm9pZDtcclxuXHJcbmxldCBtb2RlbV9zZW5kX3RvX3dzOiBTZW5kRnVuY3Rpb258dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgbW9kZW1fY2xvc2U6ICgoKT0+dm9pZCl8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxubGV0IG1vZGVtX3RyYW5zbWl0X2J1ZmZlcjogbnVtYmVyW10gPSBbXTtcclxubGV0IG1vZGVtX3JlY2VpdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuY29uc3QgTU9ERU1fREFUQV9PVVQgPSAweEQ3RjI7XHJcbmNvbnN0IE1PREVNX0RBVEFfSU4gID0gMHhEN0YwO1xyXG5jb25zdCBNT0RFTV9EQVRBX1JFUSA9IDB4RDdGMztcclxuY29uc3QgTU9ERU1fQUNLICAgICAgPSAweEQ3RjE7XHJcbmNvbnN0IE1PREVNX0NPTk5TVCAgID0gMHhEN0Y0O1xyXG5cclxubGV0IGNvbm5lY3Rpb25fc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gQ1BVIHJlYWRzIGluIHRoZSByYW5nZSAkRDdGMC0kRDdGRlxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1fcmVhZChhZGRyOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkciA9PSBNT0RFTV9EQVRBX0lOKSB7XHJcbiAgICAgIGlmKG1vZGVtX3JlY2VpdmVfYnVmZmVyLmxlbmd0aCA9PSAwKSByZXR1cm4gMDtcclxuICAgICAgZWxzZSByZXR1cm4gbW9kZW1fcmVjZWl2ZV9idWZmZXJbMF07XHJcbiAgIH1cclxuICAgZWxzZSBpZihhZGRyID09IE1PREVNX0RBVEFfUkVRKSB7XHJcbiAgICAgIGlmKG1vZGVtX3JlY2VpdmVfYnVmZmVyLmxlbmd0aCA9PSAwKSByZXR1cm4gMDtcclxuICAgICAgZWxzZSByZXR1cm4gMjU1O1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoYWRkciA9PSBNT0RFTV9DT05OU1QpIHtcclxuICAgICAgaWYobW9kZW1fc2VuZF90b193cyA9PSB1bmRlZmluZWQpIHJldHVybiAyO1xyXG4gICAgICBlbHNlIHJldHVybiAwO1xyXG4gICB9XHJcbn1cclxuXHJcbmxldCBtb2RlbV9zdGF0ZSA9IDA7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIGluIHRoZSByYW5nZSAkRDdGMC0kRDdGRlxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1fd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkcj09TU9ERU1fQUNLKVxyXG4gICB7XHJcbiAgICAgIGlmKGRhdGE9PTApIHtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGRhdGE9PTEgJiYgbW9kZW1fc3RhdGU9PTApIHtcclxuICAgICAgICAgbW9kZW1fcmVjZWl2ZV9idWZmZXIgPSBtb2RlbV9yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgaWYoYWRkcj09TU9ERU1fREFUQV9PVVQpIHtcclxuICAgICAgbW9kZW1fdHJhbnNtaXRfYnVmZmVyLnB1c2goZGF0YSk7XHJcbiAgICAgIGlmKG1vZGVtX3NlbmRfdG9fd3MgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtb2RlbV9zZW5kX3RvX3dzKG1vZGVtX3RyYW5zbWl0X2J1ZmZlcik7XHJcbiAgICAgICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBiYnMoKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmxldCB3c3RjcF9hZGRyZXNzID0gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldTo4MDgwXCI7XHJcbmV4cG9ydCBsZXQgZ2V0X3dzdGNwX2FkZHJlc3MgPSAoKSA9PiB3c3RjcF9hZGRyZXNzO1xyXG5leHBvcnQgbGV0IHNldF93c3RjcF9hZGRyZXNzID0gKGFkZHJlc3M6c3RyaW5nKSA9PiB7IHdzdGNwX2FkZHJlc3MgPSBhZGRyZXNzOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJicygpIHtcclxuICAgbGV0IHdzX2Nvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdzdGNwX2FkZHJlc3MsICdiYnMnKTtcclxuXHJcbiAgIHdzX2Nvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQkJTOiBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgIHByaW50bShgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSBFUlJPUiBDT05ORUNUSU5HIFRPIFdFQlNPQ0tFVFxccmApO1xyXG4gICB9O1xyXG5cclxuICAgd3NfY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0JCUzogY29ubmVjdGVkJyk7XHJcbiAgICAgIHByaW50bShgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSBDT05ORUNURURcXHJgKTtcclxuICAgfTtcclxuXHJcbiAgIHdzX2Nvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQkJTOiBkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgbW9kZW1fc2VuZF90b193cyA9IHVuZGVmaW5lZDtcclxuICAgfTtcclxuXHJcbiAgIHdzX2Nvbm5lY3Rpb24ub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBzdHJpbmc6ICdcIiArIGUuZGF0YSArIFwiJ1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gbm90ZTogdGhpcyBmYWlscyBvbiBGaXJlRm94IDgzIGR1ZSB0byBCbG9iLmFycmF5QnVmZmVyKClcclxuICAgICAgICAgLy8gcHJvbWlzZTogdGhlIFwiYXdhaXRcIiByZXN1bHRzIGluIGJ5dGVzIGRlY29kZWRcclxuICAgICAgICAgLy8gYnV0IHdpdGggd3JvbmcgdGltZXN0YW1wIG9yZGVyLiBTb2x2ZWQgd2l0aCBwYXRjaC1hcnJheUJ1ZmZlci5qc1xyXG4gICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGUuZGF0YS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgYnl0ZXMuZm9yRWFjaChlPT5tb2RlbV9yZWNlaXZlX2J1ZmZlci5wdXNoKGUpKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgbW9kZW1fc2VuZF90b193cyA9IChkYXRhKSA9PiB7XHJcbiAgICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICBpZih3c19jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IHdzX2Nvbm5lY3Rpb24uT1BFTikge1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKGB0cmFuc21pdHRpbmcgJHtieXRlcy5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgICAgICAgIHdzX2Nvbm5lY3Rpb24uc2VuZChieXRlcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiQkJTOiBjYW4ndCBzZW5kLCBCQlMgaXMgZGlzY29ubmVjdGVkXCIpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBtb2RlbV9jbG9zZSA9ICgpPT4gd3NfY29ubmVjdGlvbi5jbG9zZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1DbG9zZSgpIHtcclxuICAgaWYobW9kZW1fY2xvc2UgIT09IHVuZGVmaW5lZCkgbW9kZW1fY2xvc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nMkFycmF5KHN0cjogc3RyaW5nKSB7XHJcbiAgIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgIGZvcihsZXQgdD0wOyB0PHN0ci5sZW5ndGg7IHQrKylcclxuICAgICAgYXJyLnB1c2goc3RyLmNoYXJDb2RlQXQodCkgJiAweEZGKTtcclxuXHJcbiAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheTJTdHJpbmcoZGF0YTogbnVtYmVyW10pIHtcclxuICAgbGV0IHN0ciA9IFwiXCI7XHJcblxyXG4gICBmb3IodmFyIGluZGV4PTA7IGluZGV4PGRhdGEubGVuZ3RoOyBpbmRleCsrKVxyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2luZGV4XSk7XHJcblxyXG4gICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludG0obXNnOiBzdHJpbmcpIHtcclxuICAgbGV0IGRhdGEgPSBzdHJpbmcyQXJyYXkobXNnKTtcclxuICAgZGF0YS5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59IiwiLy8gaGFuZGxlcyBpbnRlcmFjdGlvbiBiZXR3ZWVuIGJyb3dzZXIgYW5kIGVtdWxhdGlvbiBcclxuXHJcbmltcG9ydCB7IGdvQXVkaW8sIHN0b3BBdWRpbywgYXVkaW9Db250ZXh0UmVzdW1lIH0gZnJvbSBcIi4vYXVkaW9cIjtcclxuaW1wb3J0IHsgbW9kZW1DbG9zZSB9IGZyb20gXCIuL2Jic1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgbG9hZEJ5dGVzIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5cclxubGV0IGFzcGVjdCA9IDEuMztcclxuXHJcbmZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSE7ICAgXHJcblxyXG4gICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQqYXNwZWN0KSlcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gYCR7YXNwZWN0KjEwMH12bWluYDtcclxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiMTAwdm1pblwiO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IFwiMTAwdm1heFwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7KDEvYXNwZWN0KSoxMDB9dm1heGA7XHJcbiAgIH1cclxuICAgZWxzZVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBcIjEwMHZtaW5cIjtcclxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAkeygxL2FzcGVjdCkqMTAwfXZtaW5gO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCB0cnVlSGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodFxyXG59XHJcblxyXG5mdW5jdGlvbiBnb0Z1bGxTY3JlZW4oKSBcclxue1xyXG4gICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSE7ICBcclxuICAgY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKCk7IFxyXG4gICBvblJlc2l6ZSgpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZ29GdWxsU2NyZWVuKTtcclxuXHJcbm9uUmVzaXplKCk7XHJcblxyXG4vLyAqKioqIHNhdmUgc3RhdGUgb24gY2xvc2UgKioqKlxyXG5cclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAvLyBjbG9zZSBjb25uZWN0aW9uIHRvIHRoZSBCQlNcclxuICAgbW9kZW1DbG9zZSgpO1xyXG59O1xyXG5cclxuLy8gKioqKiB2aXNpYmlsaXR5IGNoYW5nZSAqKioqXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgIGlmKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJoaWRkZW5cIilcclxuICAge1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgIHN0b3BBdWRpbygpO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIilcclxuICAgeyAgICAgIFxyXG4gICAgICBjNjQuZ28oKTtcclxuICAgICAgZ29BdWRpbygpO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiBkcmFnICYgZHJvcCAqKioqXHJcblxyXG5jb25zdCBkcm9wWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbi8vIE9wdGlvbmFsLiAgIFNob3cgdGhlIGNvcHkgaWNvbiB3aGVuIGRyYWdnaW5nIG92ZXIuICBTZWVtcyB0byBvbmx5IHdvcmsgZm9yIGNocm9tZS5cclxuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgZS5kYXRhVHJhbnNmZXIhLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbn0pO1xyXG5cclxuLy8gR2V0IGZpbGUgZGF0YSBvbiBkcm9wXHJcbmRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcclxuICAgYXVkaW9Db250ZXh0UmVzdW1lKCk7XHJcblxyXG4gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIhLmZpbGVzOyAvLyBBcnJheSBvZiBhbGwgZmlsZXNcclxuXHJcbiAgIGZvcihsZXQgaT0wOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBsZXQgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOyAgICAgIFxyXG4gICAgICByZWFkZXIub25sb2FkID0gZTIgPT4gZHJvcHBlZEZpbGUoZmlsZS5uYW1lLCBuZXcgVWludDhBcnJheShlMi50YXJnZXQhLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7IFxyXG4gICB9XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJvcHBlZEZpbGUob3V0TmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkge1xyXG4gICBjb25zdCBwcmcgPSAvXFwucHJnJC9pO1xyXG4gICBpZihwcmcudGVzdChvdXROYW1lKSkgeyAgICBcclxuICAgICAgYXdhaXQgbG9hZEJ5dGVzKGJ5dGVzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBNNjgyMSB9IGZyb20gXCIuL202ODIxXCI7XHJcbmltcG9ydCB7IE02ODUwIH0gZnJvbSBcIi4vbTY4NTBcIjtcclxuXHJcbmltcG9ydCB7IEJCU0Nvbm5lY3RvciB9IGZyb20gXCIuL3ZpZGVvdGVsXCI7XHJcblxyXG5sZXQgUElBID0gbmV3IE02ODIxKCk7XHJcbmxldCBBQ0lBID0gbmV3IE02ODUwKCk7XHJcbmxldCBiYnMgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG5iYnMuYWRkcmVzcyA9IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXVcIjsgIFxyXG5iYnMucG9ydCA9IFwiODA4MVwiO1xyXG5iYnMucHJvdG9jb2wgPSBcImJic1wiO1xyXG5cclxuYmJzLm9uX2Vycm9yID0gKCk9PntcclxuICAgLy8gc2V0cyBOTyBDQVJSSUVSXHJcbiAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICBjb25zb2xlLmxvZyhcIk5PIENBUlJJRVJcIik7XHJcbn07XHJcblxyXG5iYnMub25fY2xvc2UgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbmJicy5vbl9vcGVuID0gKCk9PntcclxuICAgLy8gY2xlYXJzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDA7XHJcbiAgIFBJQS5QQSAmPSAxMjc7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ0FSUklFUiBERVRFQ1RcIik7XHJcbn07XHJcblxyXG5iYnMub25fZGF0YSA9IChkYXRhKT0+e1xyXG4gICBBQ0lBLnJlY2VpdmVfZGF0YShkYXRhKTtcclxufVxyXG5cclxuQUNJQS50cmFuc21pdF9kYXRhID0gKGRhdGEpID0+IHtcclxuICAgYmJzLnNlbmRfZGF0YV90b19iYnMoW2RhdGFdKTtcclxufVxyXG5cclxuUElBLmFmdGVyZGlhbHRvbmUgPSAoKT0+YmJzLmNvbm5lY3QoKTtcclxuXHJcbi8vIGJicy5jb25uZWN0KCk7XHJcblxyXG4od2luZG93IGFzIGFueSkuYmJzICA9IGJicztcclxuKHdpbmRvdyBhcyBhbnkpLkFDSUEgPSBBQ0lBO1xyXG4od2luZG93IGFzIGFueSkuUElBICA9IFBJQTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIHRoZSB3aG9sZSBzeXN0ZW0gaXMgcmVzZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3Jlc2V0KClcclxue1xyXG4gICBQSUEucmVzZXQoKTsgXHJcbn1cclxuXHJcbmxldCBsYXN0X3RpY2sgPSAwO1xyXG5cclxuLy8gZnVuY3Rpb24gY2FsbGVkIGZyb20gQzY0IHdoZW4gQ1BVIHJlYWRzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfcmVhZChhZGRyOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpXHJcbnsgICBcclxuICAgbGV0IGRpZmYgPSB0aWNrcyAtIGxhc3RfdGljaztcclxuICAgbGFzdF90aWNrID0gdGlja3M7XHJcbiAgIGlmKGRpZmYgPCAxMCkgY29uc29sZS5sb2coZGlmZix0aWNrcyxhZGRyKTtcclxuXHJcbiAgIGlmKGFkZHIgPCAweERGMDApIHJldHVybiBQSUEucmVhZChhZGRyKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgcmV0dXJuIEFDSUEuY3B1X3JlYWQoYWRkciwgdGlja3MpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkciA8IDB4REYwMCkgUElBLndyaXRlKGFkZHIsIGRhdGEpO1xyXG4gICBlbHNlICAgICAgICAgICAgICBBQ0lBLmNwdV93cml0ZShhZGRyLCBkYXRhKTtcclxufVxyXG5cclxuIiwiLypcclxuTm90ZSB2YXJpZTpcclxuXHJcblBJQSA9IE1vdG9yb2xhIDY4MjFcclxuICAgRW5hYmxlID0gY3B1IGNsb2NrXHJcbiAgIC9SVyA9IGNwdSAvUldcclxuICAgL1JFU0VUID0gY3B1IC9SRVNFVFxyXG4gICBDUzAgPSBzZW1wcmUgcG9zdG8gYSAxIChWQ0MpXHJcbiAgIENTMSA9IHNlbXByZSBwb3N0byBhIDEgKFZDQylcclxuICAgL0NTMiA9IC9JTzEgKGNwdSBJL08pIHJhbmdlICRERTAwLSRERUZGLlxyXG4gICBSUzAsUlMxID0gW0ExOkEwXVxyXG4gICAvSVJRQSwvSVJRQiA9IC9JUlEgY3B1LCBjbGVhcmVkIGJ5IHJlYWRpbmcgZGF0YSByZWdpc3RlclxyXG4gICBDQTEgPSAoaW50ZXJydXB0IGlucHV0KSBzZWduYWxlIGRpIFJJTkdcclxuICAgQ0IxID0gKGludGVycnVwdCBpbnB1dCkgMCAoR05EKVxyXG4gICBDQTIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBpbiBBMTQgZGVsbGEgcm9tIGludGVybmEgKGJhbmsgc3dpdGNoaW5nKVxyXG4gICBDQjIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBlcm1ldHRlIGRpIHN3aXRjaGFyZSBpbCBwaW4gRVhST00gKGNhcnQgb2ZmKVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBoZXggfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNNjgyMSB7XHJcbiAgIENSQSA9IDA7XHJcbiAgIENSQiA9IDA7XHJcblxyXG4gICBQQSA9IDA7XHJcbiAgIFBCID0gMDtcclxuXHJcbiAgIEREUkEgPSAwO1xyXG4gICBERFJCID0gMDtcclxuXHJcbiAgIC8vIGRpYWx0b25lIGRldGVjdGlvblxyXG4gICBwYjVfdGltZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgYWZ0ZXJkaWFsdG9uZSA9ICgpPT57fTtcclxuXHJcbiAgIHJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgaWYodmFsdWUpIHRoaXMuQ1JBID0gdGhpcy5DUkEgfCAwYjEwMDAwMDAwOyBcclxuICAgICAgZWxzZSAgICAgIHRoaXMuQ1JBID0gdGhpcy5DUkEgJiAwYjAxMTExMTExOyBcclxuICAgICAgLy9jNjQuc2V0X2V4dGVybmFsX2lycSh2YWx1ZSk7XHJcbiAgIH1cclxuIFxyXG4gICByZXNldCgpIHtcclxuICAgICAgdGhpcy5DUkEgPSAwO1xyXG4gICAgICB0aGlzLkNSQiA9IDA7ICAgIFxyXG4gICAgICB0aGlzLlBBID0gMDtcclxuICAgICAgdGhpcy5QQiA9IDA7XHJcbiAgICAgIHRoaXMuRERSQSA9IDA7XHJcbiAgICAgIHRoaXMuRERSQiA9IDA7XHJcbiAgICAgIGM2NC5zZXRfY2JtXzY0OTlfbmJhbmsoMSk7XHJcbiAgICAgIGRlYnVnKGBQSUE6IFJFU0VUYCk7ICAgIFxyXG4gICB9XHJcbiBcclxuICAgcmVhZChhZGRyOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBBID0gJCR7aGV4KHRoaXMuUEEsMil9YCk7IFxyXG4gICAgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMDExMTExMTsgLy8gY2xlYXIgaW50ZXJydXB0IGZsYWdcclxuICAgICAgICAgcmV0dXJuIHRoaXMuUEE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMCkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBERFJBID0gJCR7aGV4KHRoaXMuRERSQSwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuRERSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBDUkEgPSAkJHtoZXgodGhpcy5DUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkNSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBCID0gJCR7aGV4KHRoaXMuUEIsMil9YCk7ICAgICAgICBcclxuICAgICAgICAgdGhpcy5DUkIgPSB0aGlzLkNSQiAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGFsc28gaW50ZXJydXB0IGZsYWcgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQiA9ICQke2hleCh0aGlzLkREUkIsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkI7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JCID0gJCR7aGV4KHRoaXMuQ1JCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkI7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuIFxyXG4gICB3cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgQ1JBMiA9ICh0aGlzLkNSQSA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBDUkIyID0gKHRoaXMuQ1JCID4+IDIpICYgMTtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDM7XHJcbiAgICAgICAgICAgaWYoUlMgPT09IDBiMDEpIHRoaXMud3JpdGVfQ1JBKGRhdGEpO1xyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB0aGlzLndyaXRlX0NSQihkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB0aGlzLndyaXRlX1BBKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHRoaXMud3JpdGVfRERSQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB0aGlzLndyaXRlX1BCKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHRoaXMud3JpdGVfRERSQihkYXRhKTsgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JBKGRhdGE6IG51bWJlcikgeyAgIFxyXG4gICAgICB0aGlzLkNSQSA9IGRhdGE7XHJcbiAgICAgIC8vIGJhbmsgc3dpdGNoaW5nXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBiYW5rID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKGJhbmspOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogUk9NIGJhbmsgc3dpdGNoIHRvICR7YmFua31gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9DUkIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuQ1JCID0gZGF0YTtcclxuICAgICAgLy8gRVhST00gcGluIHRyaWdnZXJcclxuICAgICAgaWYoZGF0YSAmIDBiMDAxMTAwMDApIHtcclxuICAgICAgICAgbGV0IGV4cm9tID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2V4cm9tKCEhZXhyb20pOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogRVhST00gc3dpdGNoIHRvICR7ISFleHJvbX1gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JCIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9ICAgXHJcblxyXG4gICB3cml0ZV9ERFJBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkREUkEgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgRERSQSB0byBiaW5hcnkgJHtkYXRhLnRvU3RyaW5nKDE2KX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfRERSQihkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5ERFJCID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkIgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX1BBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLlBBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IFBBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcbiBcclxuICAgd3JpdGVfUEIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIC8vIGRpYWx0b25lIGRldGVjdGlvbiBzdGFydHMgYmJzIGRlbGF5ZWRcclxuICAgICAgbGV0IFBCNSA9ICh0aGlzLlBCID4+IDUpICYgMTtcclxuICAgICAgbGV0IG9sZF9QQjUgPSAoZGF0YSA+PiA1KSAmIDE7XHJcbiAgICAgIFxyXG4gICAgICBpZihQQjUgPT09IDAgJiYgb2xkX1BCNSA9PT0gMSkge1xyXG4gICAgICAgICAvLyBjYW5jZWwgb2xkIHRpbWVyXHJcbiAgICAgICAgIGlmKHRoaXMucGI1X3RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5wYjVfdGltZXIpO1xyXG4gICAgICAgICB0aGlzLnBiNV90aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZnRlcmRpYWx0b25lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGI1X3RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9LCAzMDAwKSBhcyBhbnkgYXMgbnVtYmVyO1xyXG4gICAgICAgICBkZWJ1ZyhcIlBJQTogZGlhbGluZy4uLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoKHRoaXMuUEIgJiAxMjgpICE9PSAoZGF0YSAmIDEyOCkpIHtcclxuICAgICAgICAgLy8gUEI3IGNoYW5nZWRcclxuICAgICAgICAgZGVidWcoYCoqKioqKioqIFBCNzogJHsoZGF0YSAmIDEyOCk+Pjd9YCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5QQiA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBQQiB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobTogc3RyaW5nKSB7XHJcbiAgIGlmKHRydWUpIGNvbnNvbGUubG9nKG0pO1xyXG59XHJcbiAiLCIvKlxyXG5BQ0lBID0gbW90b3JvbGEgNjg1MFxyXG4gICAgQ1MyID0gL0lPMiAoY3B1IEkvTykgcmFuZ2UgJERGMDAtJERGRkYuICAgXHJcblxyXG42ODUwIHN0YXR1cyByZWdpc3RlclxyXG4gICAwIC0gcmVjZWl2ZSBidWZmZXIgZnVsbCBcclxuICAgMSAtIHRyYW5zbWl0IGJ1ZmZlciBlbXB0eVxyXG4gICAyIC0gbm8gY2FycmllclxyXG4gICAzIC0gL2NsZWFyIHRvIHNlbmRcclxuICAgNCAtIGZyYW1pbmcgZXJyb3JcclxuICAgNSAtIHJlY2VpdmVyIG92ZXJydW5cclxuICAgNiAtIHBhcml0eSBlcnJvclxyXG4gICA3IC0gL0lSUVxyXG5cclxuNjg1MCBjb250cm9sIHJlZ2lzdGVyXHJcbiAgIENSMXxDUjAgPSAwMCBubyBkaXZpZGVcclxuICAgICAgICAgICAgIDAxIGRpdmlkZSBieSAxNlxyXG4gICAgICAgICAgICAgMTAgZGl2aWRlIGJ5IDY0XHJcbiAgICAgICAgICAgICAxMSBtYXN0ZXIgcmVzZXQgXHJcbiAgICBcclxuICAgIENSNHxDUjN8Q1IyID0gYml0L3Bhcml0eS9zdG9wIGJpdFxyXG5cclxuKi9cclxuXHJcbmNvbnN0IGNvbmZpZ19iaXRzID0gW1xyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm5vbmVcIiwgc3RvcF9iaXRzOiAyIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJub25lXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwiZXZlblwiLCBzdG9wX2JpdHM6IDEgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm9kZFwiICwgc3RvcF9iaXRzOiAxIH1cclxuXTtcclxuXHJcbmNvbnN0IGNsb2NrX2RpdmlkZXIgPSBbIFwibm9uZVwiLCBcIjE2XCIsIFwiNjRcIiBdO1xyXG5cclxuZXhwb3J0IGNsYXNzIE02ODUwXHJcbnsgICBcclxuICAgQ09OVFJPTCA9IDA7XHJcbiAgIFRSQU5TTUlUX0RBVEEgPSAwOyBcclxuICAgUkVDRUlWRV9EQVRBID0gMDsgIFxyXG5cclxuICAgLy8gc3RhdHVzIHJlZ2lzdGVyIGJpdHNcclxuICAgU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgID0gMDtcclxuICAgU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgU1RBVFVTX05PX0NBUlJJRVIgICAgICAgID0gMTtcclxuICAgU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgID0gMDtcclxuICAgU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gID0gMDtcclxuICAgU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgID0gMDtcclxuICAgU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDtcclxuXHJcbiAgIHJlY2VpdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdOyAgXHJcbiAgIHdhaXRfYWZ0ZXJfcmVhZCA9IDA7ICAgXHJcblxyXG4gICAvL3NhdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICBcclxuICAgZ2V0X3N0YXR1c19ieXRlKCkge1xyXG4gICAgICB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMID0gdGhpcy5yZWNlaXZlX2J1ZmZlci5sZW5ndGggPT09IDAgPyAwIDogMTtcclxuICAgICAgaWYodGhpcy53YWl0X2FmdGVyX3JlYWQgPiAwKSB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMID0gMDtcclxuICAgICAgXHJcbiAgICAgIGxldCBzdGF0dXMgPSBcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwgICAgIDw8IDApIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZIDw8IDEpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX05PX0NBUlJJRVIgICAgICAgIDw8IDIpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0NMRUFSX1RPX1NFTkQgICAgIDw8IDMpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgIDw8IDQpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX09WRVJSVU4gIDw8IDUpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX1BBUklUWV9FUlJPUiAgICAgIDw8IDYpIHxcclxuICAgICAgICAgKHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgIDw8IDcpOyAgIFxyXG4gICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICB9XHJcblxyXG4gICBjcHVfcmVhZChhZGRyOiBudW1iZXIsIHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDE7XHJcbiAgICAgIGlmKFJTID09PSAwKSB7XHJcbiAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRfc3RhdHVzX2J5dGUoKTtcclxuICAgICAgICAgdGhpcy53YWl0X2FmdGVyX3JlYWQtLTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKCk7XHJcbiAgICAgICAgIGlmKHRoaXMuU1RBVFVTX1JFQ0VJVkVSX0ZVTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5SRUNFSVZFX0RBVEEgPSB0aGlzLnJlY2VpdmVfYnVmZmVyWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVfYnVmZmVyID0gdGhpcy5yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAgICAgICAgLy9kZWJ1ZyhgY3B1IHJlY2VpdmUgJHtkYXRhfWApO1xyXG4gICAgICAgICAgICB0aGlzLndhaXRfYWZ0ZXJfcmVhZCA9IDI7ICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHRoaXMuUkVDRUlWRV9EQVRBO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNwdV93cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMTtcclxuICAgICAgaWYoUlMgPT09IDApIHtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IHNldCBjb250cm9sID0gKCR7ZGF0YS50b1N0cmluZygyKX0pYCk7XHJcbiAgICAgICAgIHRoaXMuQ09OVFJPTCA9IGRhdGE7XHJcblxyXG4gICAgICAgICBsZXQgQ1IxMCAgPSAodGhpcy5DT05UUk9MICYgMGIwMDAwMDAxMSk7XHJcbiAgICAgICAgIGxldCBDUjQzMiA9ICh0aGlzLkNPTlRST0wgJiAwYjAwMDExMTAwKSA+PiAyO1xyXG4gICAgICAgICBsZXQgQ1I2NSAgPSAodGhpcy5DT05UUk9MICYgMGIwMTEwMDAwMCkgPj4gNTtcclxuICAgICAgICAgbGV0IENSNyAgID0gKHRoaXMuQ09OVFJPTCAmIDBiMTAwMDAwMDApID4+IDc7XHJcblxyXG4gICAgICAgICAvLyBtYXN0ZXIgcmVzZXRcclxuICAgICAgICAgaWYoQ1IxMCA9PT0gMGIxMSkge1xyXG4gICAgICAgICAgICBkZWJ1ZyhgQUNJQTogbWFzdGVyIFJFU0VUYCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZV9idWZmZXIgPSBbXTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLlRSQU5TTUlUX0RBVEEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlJFQ0VJVkVfREFUQSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgICAgICAgIC8vdGhpcy5TVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19DTEVBUl9UT19TRU5EICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19QQVJJVFlfRVJST1IgICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKCk7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnKGBBQ0lBOiBjbG9jayBkaXZpZGUgYnkgJHtjbG9ja19kaXZpZGVyW0NSMTBdfWApO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBsZXQgeyBiaXRzLCBwYXJpdHksIHN0b3BfYml0cyB9ID0gY29uZmlnX2JpdHNbQ1I0MzJdO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogYml0IGNvbmZpZzogJHtiaXRzfSBiaXRzL3Bhcml0eSAke3Bhcml0eX0vc3RvcCBiaXRzJHtzdG9wX2JpdHN9YCk7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBDUjZ8NSA9ICR7Q1I2NS50b1N0cmluZygyKX1gKTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IENSNyA9ICR7Q1I3fWApOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogc2V0IHRyYW5zbWl0IGRhdGEgPSAoJHtkYXRhfSlgKTtcclxuICAgICAgICAgdGhpcy5UUkFOU01JVF9EQVRBID0gZGF0YTtcclxuICAgICAgICAgdGhpcy5TVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPSAwO1xyXG4gICAgICAgICB0aGlzLnRyYW5zbWl0X2RhdGEodGhpcy5UUkFOU01JVF9EQVRBKTtcclxuICAgICAgICAgdGhpcy5TVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8vIGV4dGVybmFsIHdvcmxkIGludGVyZmFjZVxyXG5cclxuICAgLy8gY2FsbGVkIGZyb20gQkJTIGNvbm5lY3RvclxyXG4gICByZWNlaXZlX2RhdGEoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICBkYXRhLmZvckVhY2goZT0+dGhpcy5yZWNlaXZlX2J1ZmZlci5wdXNoKGUpKTtcclxuICAgICAgLy9kYXRhLmZvckVhY2goZT0+dGhpcy5zYXZlX2J1ZmZlci5wdXNoKGUpKTtcclxuICAgICAgdGhpcy5nZXRfc3RhdHVzX2J5dGUoKTtcclxuICAgICAgZGVidWcoYEFDSUE6IHJlY2VpdmVkICR7ZGF0YS5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIHNlbmQgZGF0YSB0byBCQlMgY29ubmVjdG9yXHJcbiAgIHRyYW5zbWl0X2RhdGEgPSAoZGF0YTogbnVtYmVyKT0+e307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKG06IHN0cmluZykge1xyXG4gICBpZih0cnVlKSBjb25zb2xlLmxvZyhtKTtcclxufSIsImV4cG9ydCBjbGFzcyBCQlNDb25uZWN0b3Ige1xyXG4gICBhZGRyZXNzID0gXCJ3c3M6Ly9iYnMuc2JsZW5kb3Jpby5ldVwiOyAgXHJcbiAgIHBvcnQgPSBcIjgwODBcIjtcclxuICAgcHJvdG9jb2wgPSBcImJic1wiO1xyXG5cclxuICAgd3NfY29ubmVjdGlvbjogV2ViU29ja2V0IHwgdW5kZWZpbmVkOyAgIFxyXG4gICBcclxuICAgb25fZXJyb3IgPSAoZXJyOiBFdmVudCk9PiB7fTtcclxuICAgb25fb3BlbiA9ICgpPT4ge307XHJcbiAgIG9uX2Nsb3NlID0gKCk9PiB7fTtcclxuICAgb25fZGF0YSA9IChkYXRhOiBVaW50OEFycmF5KT0+IHt9O1xyXG5cclxuICAgbGFzdF90aW1lc3RhbXAgPSAwO1xyXG4gICBcclxuICAgY29ubmVjdCgpIHtcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldChgJHt0aGlzLmFkZHJlc3N9OiR7dGhpcy5wb3J0fWAsIHRoaXMucHJvdG9jb2wpO1xyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbmVycm9yID0gKGVycik9PntcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgIHRoaXMub25fZXJyb3IoZXJyKTtcclxuICAgICAgfTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICAgICAgIHRoaXMub25fb3BlbigpO1xyXG4gICAgICB9O1xyXG4gICBcclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgIHRoaXMub25fY2xvc2UoKTtcclxuICAgICAgfTsgICAgICBcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSAoZSkgPT4geyAgICAgIFxyXG4gICAgICAgICBpZiAoZS5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgbGV0IHUgPSBuZXcgVWludDhBcnJheShlLmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uX2RhdGEodSk7XHJcbiAgICAgICAgICAgIGlmKGUudGltZVN0YW1wIDw9IHRoaXMubGFzdF90aW1lc3RhbXApIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdF90aW1lc3RhbXAgPSBlLnRpbWVTdGFtcDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgUmVjZWl2ZWQgc3RyaW5nOiAnXCIgKyBlLmRhdGEgKyBcIidcIik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgIH1cclxuXHJcbiAgIHNlbmRfZGF0YV90b19iYnMoZGF0YTogbnVtYmVyW10pIHtcclxuICAgICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgIGlmKHRoaXMud3NfY29ubmVjdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMud3NfY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSB0aGlzLndzX2Nvbm5lY3Rpb24uT1BFTikgeyAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uc2VuZChieXRlcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGRpc2Nvbm5lY3RlZCwgY2FuJ3Qgc2VuZCFcIik7XHJcbiAgICAgIH1cclxuICAgfSAgIFxyXG4gICBcclxuICAgY2xvc2UoKSB7XHJcbiAgICAgIGlmKHRoaXMud3NfY29ubmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLndzX2Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCBlbXNjcmlwdGVuX21vZHVsZSBmcm9tIFwiLi4vZW1zY3JpcHRlbl9tb2R1bGVcIjtcclxuaW1wb3J0IHsgb25lRnJhbWUgfSBmcm9tIFwiLi9lbXVsYXRvclwiO1xyXG5cclxubGV0IHdhc21faW5zdGFuY2U6IGFueTtcclxuXHJcbi8qXHJcbmxldCByb21fbG9hZDtcclxuXHJcbmxldCBpb19yZWFkO1xyXG5sZXQgaW9fd3JpdGU7XHJcblxyXG5sZXQga2V5Ym9hcmRfcmVzZXQ7XHJcbmxldCBrZXlib2FyZF9wcmVzcztcclxubGV0IGtleWJvYXJkX3JlbGVhc2U7XHJcbmxldCBrZXlib2FyZF9wb2xsO1xyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGM2NCA9IHsgXHJcbiAgIHRhcGU6IHsgfSxcclxuICAgaW5pdDogKCk9Pnt9LFxyXG4gICBjb25maWc6IChjb25mOiBudW1iZXIpPT57fSxcclxuICAgZXg6IChjeWNsZXM6IG51bWJlcik9Pnt9LFxyXG4gICBleGVjOiAoKT0+e30sXHJcbiAgIGV4ZWNfdXM6IChtc2VjOiBudW1iZXIpPT57fSxcclxuICAgdmRwOiAoKT0+e30sXHJcbiAgIHJlc2V0OiAoKT0+e30sXHJcbiAgIGtleV9kb3duOiAoa2V5OiBudW1iZXIpPT57fSxcclxuICAga2V5X3VwOiAoa2V5OiBudW1iZXIpPT57fSxcclxuICAgam95c3RpY2s6ICgpPT57fSxcclxuICAgZW11X2pveTogKGpveTogbnVtYmVyKT0+e30sXHJcbiAgIGxvYWRfcHJnOiAoYnl0ZXM6IFVpbnQ4QXJyYXksIHNpemU6IG51bWJlcik9Pnt9LFxyXG4gICBwZWVrOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgcG9rZTogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBjYXNfcG9ydDogKCk9Pnt9LFxyXG4gICBtZW1fcmVhZDogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIG1lbV93cml0ZTogKGFkZHJlc3M6IG51bWJlciwgZGF0YTogbnVtYmVyKT0+e30sXHJcblxyXG4gICBtZW1fcmVhZF93b3JkOiAoYWRkcmVzczogbnVtYmVyKT0+eyByZXR1cm4gMDsgfSxcclxuICAgbWVtX3dyaXRlX3dvcmQ6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgZ286ICgpPT57XHJcbiAgICAgIGM2NC5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgIG9uZUZyYW1lKHVuZGVmaW5lZCk7XHJcbiAgIH0sXHJcblxyXG4gICBzdG9wcGVkOiB0cnVlLFxyXG5cclxuICAgLy8gQ0JNIDY0OTkgQURBVFRBVE9SRSBURUxFTUFUSUNPIGVtdWxhdGlvblxyXG4gICBzZXRfZXhyb206ICh2YWx1ZTogYm9vbGVhbikgPT4ge30sXHJcbiAgIHNldF9jYm1fNjQ5OV9uYmFuazogKHZhbHVlOiBudW1iZXIpID0+IHt9LFxyXG4gICBzZXRfZW11bGF0ZV9jYm1fNjQ5OTogKHZhbHVlOiBib29sZWFuKSA9PiB7fSxcclxuICAgc2V0X2V4dGVybmFsX2lycTogKHZhbHVlOiBib29sZWFuKSA9PiB7fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkX3dhc20oKSB7ICAgXHJcbiAgIFxyXG4gICBsZXQgaW5zdGFuY2UgPSBhd2FpdCBlbXNjcmlwdGVuX21vZHVsZSgpO1xyXG4gICBcclxuICAgYzY0LmluaXQgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5pdFwiLCBudWxsKTtcclxuICAgYzY0LmNvbmZpZyAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfY29uZmlnXCIsIG51bGwsIFsnbnVtYmVyJ10pO1xyXG4gICBjNjQuZXhlYyAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leGVjXCIsIG51bGwpO1xyXG4gICBjNjQuZXggICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19leFwiLCBbJ251bWJlciddKTtcclxuICAgYzY0LmV4ZWNfdXMgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhlY191c1wiLCBbJ251bWJlciddKTtcclxuICAgYzY0LnZkcCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdmRwXCIsIG51bGwpO1xyXG4gICBjNjQucmVzZXQgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGM2NC5rZXlfZG93biA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV9kb3duXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5rZXlfdXAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2tleV91cFwiICAgLCBudWxsLCBbJ251bWJlciddICk7XHJcbiAgIGM2NC5qb3lzdGljayA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2pveXN0aWNrXCIgLCBudWxsLCBbJ251bWJlciddICk7XHJcblxyXG4gICBjNjQuZW11X2pveSAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfam95c3RpY2tfdHlwZVwiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG5cclxuICAgYzY0LmxvYWRfcHJnICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19xdWlja19sb2FkXCIgLCBudWxsLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIC8vYzY0Lmluc2VydF9jYXJ0ZHJpZ2UgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiICwgbnVsbCwgWydhcnJheScsICdudW1iZXInXSApO1xyXG5cclxuICAgYzY0LnBlZWsgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfbWVtX2NwdV9yZFwiICAgLCAnbnVtYmVyJywgWydudW1iZXInXSApO1xyXG4gICBjNjQucG9rZSAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19tZW1fY3B1X3dyXCIgICAsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcblxyXG4gICAvL2M2NC5kdW1wX3ZpYyA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2R1bXBfdmljXCIgICAsIG51bGwgKTtcclxuXHJcbiAgIGM2NC5jYXNfcG9ydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2Nhc19wb3J0XCIgICAsICdudW1iZXInKTtcclxuXHJcbiAgIC8qXHJcbiAgIGM2NC50YXBlLmluc2VydCA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luc2VydF90YXBlXCIgICwgJ2Jvb2wnLCBbJ2FycmF5JywgJ251bWJlciddICk7XHJcbiAgIGM2NC50YXBlLnJlbW92ZSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3JlbW92ZV90YXBlXCIgICwgbnVsbCApO1xyXG4gICBjNjQudGFwZS5wbGF5ICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c190YXBlX3BsYXlcIiAgICAsIG51bGwgKTtcclxuICAgYzY0LnRhcGUuc3RvcCAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdGFwZV9zdG9wXCIgICAgLCBudWxsICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQubWVtX3JlYWQgPSBjNjQucGVlaztcclxuICAgYzY0Lm1lbV93cml0ZSA9IGM2NC5wb2tlO1xyXG5cclxuICAgYzY0Lm1lbV93cml0ZV93b3JkID0gZnVuY3Rpb24oYWRkcmVzcywgd29yZCkge1xyXG4gICAgICBjNjQubWVtX3dyaXRlKGFkZHJlc3MgKyAwLCB3b3JkICYgMHhGRik7XHJcbiAgICAgIGM2NC5tZW1fd3JpdGUoYWRkcmVzcyArIDEsICh3b3JkICYgMHhGRjAwKSA+PiA4KTtcclxuICAgfVxyXG4gICBcclxuICAgYzY0Lm1lbV9yZWFkX3dvcmQgPSBmdW5jdGlvbihhZGRyZXNzKSB7XHJcbiAgICAgIGNvbnN0IGxvID0gYzY0Lm1lbV9yZWFkKGFkZHJlc3MgKyAwKTtcclxuICAgICAgY29uc3QgaGkgPSBjNjQubWVtX3JlYWQoYWRkcmVzcyArIDEpO1xyXG4gICAgICByZXR1cm4gbG8raGkqMjU2O1xyXG4gICB9ICAgXHJcblxyXG4gICAvKlxyXG4gICBjcHVfaW5pdCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfaW5pdFwiLCBudWxsKTtcclxuICAgY3B1X3Jlc2V0ICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X3Jlc2V0XCIsIG51bGwpO1xyXG4gICBjcHVfcnVuX2luc3RydWN0aW9uID0gaW5zdGFuY2UuY3dyYXAoXCJjcHVfcnVuX2luc3RydWN0aW9uXCIsICdudW1iZXInKTtcclxuXHJcbiAgIG1lbV9yZWFkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibWVtX3JlYWRcIiwgJ251bWJlcicsIFsnbnVtYmVyJ10pO1xyXG4gICBtZW1fd3JpdGUgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcIm1lbV93cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcbiAgIHJvbV9sb2FkICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwicm9tX2xvYWRcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG5cclxuICAgaW9fcmVhZCAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb19yZWFkXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuICAgaW9fd3JpdGUgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJpb193cml0ZVwiLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSk7XHJcblxyXG4gICBsbTgwY190aWNrICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3RpY2tcIiwgJ251bWJlcicpO1xyXG4gICBsbTgwY19zZXRfZGVidWcgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3NldF9kZWJ1Z1wiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2N0Y19lbmFibGUgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfY3RjX2VuYWJsZVwiLCBudWxsLCBbJ2Jvb2wnXSk7XHJcbiAgIGxtODBjX2luaXQgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfaW5pdFwiLCBudWxsKTtcclxuICAgbG04MGNfcmVzZXQgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19yZXNldFwiLCBudWxsKTtcclxuXHJcbiAgIGxtODBjX3RpY2tfbGluZSAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfdGlja19saW5lXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuXHJcbiAgIGtleWJvYXJkX3Jlc2V0ICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcmVzZXRcIiAgLCBudWxsICk7XHJcbiAgIGtleWJvYXJkX3ByZXNzICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcHJlc3NcIiAgLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG4gICBrZXlib2FyZF9yZWxlYXNlICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3JlbGVhc2VcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuICAga2V5Ym9hcmRfcG9sbCAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9wb2xsXCIgICAsICdudW1iZXInLCBbJ251bWJlciddICk7XHJcbiAgICovXHJcblxyXG4gICBjNjQuc2V0X2V4cm9tICAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZXhyb21cIiAgICAgICAgICAgICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBjNjQuc2V0X2NibV82NDk5X25iYW5rICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfY2JtXzY0OTlfbmJhbmtcIiAgICAsIG51bGwsIFsnbnVtYmVyJ10gKTsgXHJcbiAgIGM2NC5zZXRfZW11bGF0ZV9jYm1fNjQ5OSA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCIgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIGM2NC5zZXRfZXh0ZXJuYWxfaXJxICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3NldF9leHRlcm5hbF9pcnFcIiAgICAgICwgbnVsbCwgWydib29sJ10gKTsgXHJcbiAgIFxyXG4gICB3YXNtX2luc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgIFxyXG4gICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfd2FzbV9pbnN0YW5jZSgpIHtcclxuICAgcmV0dXJuIHdhc21faW5zdGFuY2U7XHJcbn1cclxuXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gVE9ETyBzdGFydCBiYnMgb25seSB3aGVuIHJlcXVpcmVkXHJcbi8vIG5vcm1hbCBCQlMgc3RhcnRzIHdpdGggP2xvYWQ9bmlwcHVyNzIvdGVybWluYWwucHJnXHJcbi8vIHByZXN0ZWwgQkJTIHN0YXJ0cyB3aXRoID9jYm02NDk5PXRydWVcclxuXHJcbi8qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZ0NvbW1hbmRzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVHZW9tZXRyeSB9IGZyb20gXCIuL3ZpZGVvXCI7XHJcbmltcG9ydCB7IHBvbGxfa2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBiYnMsIHNldF93c3RjcF9hZGRyZXNzIH0gZnJvbSBcIi4vYmJzXCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZ3JhbSB9IGZyb20gXCIuL2ZldGNoUHJvZ3JhbVwiO1xyXG5cclxubGV0IHN0b3BwZWQgPSBmYWxzZTsgLy8gYWxsb3dzIHRvIHN0b3AvcmVzdW1lIHRoZSBlbXVsYXRpb25cclxuXHJcbmxldCBmcmFtZXMgPSAwO1xyXG5sZXQgYXZlcmFnZUZyYW1lVGltZSA9IDA7XHJcblxyXG5sZXQgY3ljbGUgPSAwO1xyXG5sZXQgdG90YWxfY3ljbGVzID0gMDtcclxuXHJcbmxldCB0aHJvdHRsZSA9IGZhbHNlO1xyXG5cclxubGV0IGVuZF9vZl9mcmFtZV9ob29rID0gdW5kZWZpbmVkO1xyXG5cclxubGV0IGxhc3Rfa2V5Ym9hcmRwb2xsID0gMDtcclxuXHJcbmxldCBsYXN0X3RpbWVzdGFtcCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25lRnJhbWUodGltZXN0YW1wOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgbGV0IHN0YW1wID0gdGltZXN0YW1wID09IHVuZGVmaW5lZCA/IGxhc3RfdGltZXN0YW1wIDogdGltZXN0YW1wO1xyXG4gICBsZXQgdXNlYyA9IChzdGFtcCAtIGxhc3RfdGltZXN0YW1wKSoxMDAwO1xyXG4gICBsYXN0X3RpbWVzdGFtcCA9IHN0YW1wO1xyXG5cclxuICAgaWYodXNlYyA+IDMyMDAwKSB1c2VjID0gMzIwMDA7XHJcblxyXG4gICBpZihzdGFtcCAtIGxhc3Rfa2V5Ym9hcmRwb2xsID4gMTUpIHtcclxuICAgICAgcG9sbF9rZXlib2FyZCgpO1xyXG4gICAgICBsYXN0X2tleWJvYXJkcG9sbCA9IHN0YW1wO1xyXG4gICB9XHJcblxyXG4gICBjNjQuZXhlY191cyh1c2VjKTtcclxuXHJcbiAgIGF2ZXJhZ2VGcmFtZVRpbWUgPSBhdmVyYWdlRnJhbWVUaW1lICogMC45OTIgKyB1c2VjICogMC4wMDg7XHJcblxyXG4gICBpZighc3RvcHBlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uZUZyYW1lKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG5cclxuICAgYzY0LmNvbmZpZygwKTtcclxuXHJcbiAgIGM2NC5leCg1MDAwKTsgICAgIC8vIHdhaXQgZm9yIG1lbW9yeSBwYXR0ZXJuIHdyaXRpbmdcclxuICAgYzY0Lm1lbV93cml0ZSgyMDQsMSk7IC8vIGZsYWdzIHN5c3RlbSBub3QgYm9vdGVkIHlldFxyXG5cclxuICAgbGV0IG9wdGlvbnMgPSBhd2FpdCBwYXJzZVF1ZXJ5U3RyaW5nQ29tbWFuZHMoKTtcclxuXHJcbiAgIC8vIGF1dG9zdGFydCB0ZXJtaW5hbCBpZiBsb2FkZWQgZnJvbSBiYnMuc2JsZW5kb3Jpby51ZVxyXG4gICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICBsZXQgaXNfcmV0cm9jYW1wdXMgPSBocmVmLm1hdGNoKC9eaHR0cDpcXC9cXC8oYmJzXFwuc2JsZW5kb3Jpb1xcLmV1fGJic1xcLnJldHJvY2FtcHVzXFwuY29tKS9nKTtcclxuICAgbGV0IGlzX3JldHJvYWNhZGVteSA9IGhyZWYubWF0Y2goL15odHRwOlxcL1xcLyhiYnNcXC5yZXRyb2FjYWRlbXlcXC5pdCkvZyk7XHJcblxyXG4gICBpZihpc19yZXRyb2NhbXB1cyAgJiYgb3B0aW9ucy53c3RjcCA9PT0gdW5kZWZpbmVkKSBzZXRfd3N0Y3BfYWRkcmVzcyhcIndzczovL2Jicy5zYmxlbmRvcmlvLmV1OjgwODBcIik7XHJcbiAgIGlmKGlzX3JldHJvYWNhZGVteSAmJiBvcHRpb25zLndzdGNwID09PSB1bmRlZmluZWQpIHNldF93c3RjcF9hZGRyZXNzKFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MVwiKTtcclxuICAgaWYoKGlzX3JldHJvYWNhZGVteSB8fCBpc19yZXRyb2NhbXB1cykgJiYgb3B0aW9ucy5sb2FkID09PSB1bmRlZmluZWQpIGZldGNoUHJvZ3JhbShcIm5pcHB1cjcyL3Rlcm1pbmFsLnByZ1wiKTtcclxuXHJcbiAgIGNhbGN1bGF0ZUdlb21ldHJ5KCk7XHJcblxyXG4gICAvLyBzdGFydHMgZHJhd2luZyBmcmFtZXNcclxuICAgLy9nb0F1ZGlvKCk7XHJcbiAgIGM2NC5nbygpO1xyXG5cclxuICAgLy8gc3RhcnRzIEJCUyBvbmx5IGlmIHdzdGNwIGFyZ3VtZW4gd2FzIHNwZWNpZmllZFxyXG4gICBpZihvcHRpb25zLndzdGNwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYmJzKCk7XHJcbiAgIH1cclxuICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZEJ5dGVzIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZ3JhbShuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgLy9jb25zb2xlLmxvZyhgd2FudGluZyB0byBsb2FkICR7bmFtZX1gKTtcclxuICAgdHJ5XHJcbiAgIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgc29mdHdhcmUvJHtuYW1lfWApO1xyXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBsb2FkQnl0ZXMoYnl0ZXMpO1xyXG4gICBcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKVxyXG4gICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFzdGUsIGhleCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ5dGVzKGJ5dGVzOiBVaW50OEFycmF5KSB7XHJcbiAgIHdhaXRfYW5kX2xvYWQoYnl0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWl0X2FuZF9sb2FkKGJ1ZmZlcjogVWludDhBcnJheSkge1xyXG4gICBpZihjNjQubWVtX3JlYWQoMjA0KSE9PTApIHtcclxuICAgICAgLy8gY3Vyc29yIG5vdCBmbGFzaGluZywgc3lzdGVtIG5vdCB5ZXQgYm9vdGVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PndhaXRfYW5kX2xvYWQoYnVmZmVyKSwgMTAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGRvX2xvYWQoYnVmZmVyKTtcclxuICAgY29uc29sZS5sb2coYGxvYWRlZCAke2J1ZmZlci5sZW5ndGh9IGJ5dGVzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2xvYWQoYnVmZmVyOiBVaW50OEFycmF5KSB7XHJcbiAgIGM2NC5sb2FkX3ByZyhidWZmZXIsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICBwYXN0ZShcIlJVTlxcclwiKTtcclxufVxyXG5cclxuY29uc3QgQkFTVFhUID0gMHgwMDJiO1xyXG5jb25zdCBQUk9HTkQgPSAweDAwMmQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZV9maWxlKGZpbGVuYW1lOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpIHN0YXJ0ID0gYzY0Lm1lbV9yZWFkX3dvcmQoQkFTVFhUKTtcclxuICAgaWYoZW5kID09PSB1bmRlZmluZWQpIGVuZCA9IGM2NC5tZW1fcmVhZF93b3JkKFBST0dORCktMTtcclxuXHJcbiAgIGNvbnN0IHByZyA9IFsgc3RhcnQgJiAweEZGLCBzdGFydCA+PiA4IF07XHJcbiAgIGZvcihsZXQgaT0wLHQ9c3RhcnQ7IHQ8PWVuZDsgaSsrLHQrKykge1xyXG4gICAgICBwcmcucHVzaChjNjQubWVtX3JlYWQodCkpO1xyXG4gICB9XHJcbiAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocHJnKTtcclxuICAgXHJcbiAgIGF3YWl0IGRvd25sb2FkKGZpbGVuYW1lLCBieXRlcyk7XHJcblxyXG4gICBjb25zb2xlLmxvZyhgc2F2ZWQgXCIke2ZpbGVuYW1lfVwiICR7Ynl0ZXMubGVuZ3RofSBieXRlcyBmcm9tICR7aGV4KHN0YXJ0LDQpfWggdG8gJHtoZXgoZW5kLDQpfWhgKTtcclxuICAgLy9jcHUucmVzZXQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZywgYnl0ZXM6IFVpbnQ4QXJyYXkpIHsgICBcclxuICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pOyAgIFxyXG4gICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpO1xyXG4gICBjb25zb2xlLmxvZyhgZG93bmxvYWRlZCBcIiR7ZmlsZU5hbWV9XCJgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhdWRpb0NvbnRleHRSZXN1bWUgfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEF9IGZyb20gXCIuL2tleWJvYXJkX0lUXCI7XHJcblxyXG5sZXQgbGFzdF9zY3JvbGxfbG9jazogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmxldCBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxubGV0IGFsdF9wcmVzc2VkID0gZmFsc2U7XHJcbmxldCBzaGlmdF9wcmVzc2VkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBrZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSB0cnVlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0TGVmdFwiKSBhbHRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdExlZnRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gdHJ1ZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpIGFsdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0UmlnaHRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleURvd25cIik7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gZnJvbSBDaHJvbWUgNzEgYXVkaW8gaXMgc3VzcGVuZGVkIGJ5IGRlZmF1bHQgYW5kIG11c3QgcmVzdW1lIHdpdGhpbiBhbiB1c2VyLWdlbmVyYXRlZCBldmVudFxyXG4gICBhdWRpb0NvbnRleHRSZXN1bWUoKTtcclxuXHJcbiAgIGlmKGxhc3Rfc2Nyb2xsX2xvY2sgPT09IHVuZGVmaW5lZCkgbGFzdF9zY3JvbGxfbG9jayA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcblxyXG4gICBpZihlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpIT1sYXN0X3Njcm9sbF9sb2NrKSB7XHJcbiAgICAgIGxldCBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZCA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcbiAgICAgIGxhc3Rfc2Nyb2xsX2xvY2sgPSBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZDtcclxuICAgICAgbGV0IGVtdV9qb3lzdGljayA9IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkID8gMyA6IDA7XHJcbiAgICAgIGM2NC5lbXVfam95KGVtdV9qb3lzdGljayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb3lzdGljayBlbXVsYXRpb24gJHtlbXVfam95c3RpY2s9PTM/XCJlbmFibGVkXCI6XCJkaXNhYmxlZFwifWApO1xyXG4gICB9XHJcblxyXG4gICAvLyBkaXNhYmxlIGF1dG8gcmVwZWF0LCBhcyBpdCBpcyBoYW5kbGVkIG9uIHRoZSBmaXJtd2FyZVxyXG4gICBpZihlLnJlcGVhdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgIH0gICBcclxuXHJcbiAgIC8vICoqKiBzcGVjaWFsIChub24gY2hhcmFjdGVycykga2V5cyAqKipcclxuXHJcbiAgIC8vIFJFU0VUIGtleSBpcyBDVFJMK0FMVCtCUkVBS1xyXG4gICBpZihlLmNvZGUgPT09IFwiUGF1c2VcIiAmJiBlLmFsdEtleSAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgYzY0LnJlc2V0KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgLy8gaWYga2V5Ym9hcmQgSVRBXHJcbiAgIHtcclxuICAgICAgY29uc3QgaGFyZHdhcmVfa2V5cyA9IHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGUuY29kZSwgZS5rZXksIGUuc2hpZnRLZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuZ2V0TW9kaWZpZXJTdGF0ZShcIkFsdEdyYXBoXCIpICk7XHJcbiAgICAgIGlmKGhhcmR3YXJlX2tleXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJwcmVzc1wiLCBoYXJkd2FyZV9rZXlzIH0pO1xyXG4gICAgICAvL2tleV9wcmVzc2VkLnB1c2goaGFyZHdhcmVfa2V5cyk7XHJcbiAgICAgIGtleV9wcmVzc19tYXBbZS5jb2RlXSA9IGhhcmR3YXJlX2tleXM7XHJcbiAgICAgIC8vY29uc29sZS5sb2coYG1hcCBhZnRlciBwcmVzczogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdExlZnRcIikgYWx0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gZmFsc2U7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRSaWdodFwiKSBhbHRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRSaWdodFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7IFxyXG4gICAvL2NvbnNvbGUubG9nKGUuY29kZSk7XHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleVVwXCIpO1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuICAgKi9cclxuXHJcbiAgIC8vIGZpeCBhIGJ1ZyBpbiBDaHJvbWU6IHByZXNzaW5nIFwiQUxULUdSIEBcIiByZXN1bHRzIGluIGtleWRvd24gb2YgXCLDslwiIGluc3RlYWQgb2YgXCJAXCJcclxuICAgLy9pZihlLmtleSA9PT0gJ8OyJyAmJiBlLmtleUNvZGUgPT09IDE5MiAmJiBlLndoaWNoID09PSAxOTIpIHtcclxuICAgLy8gICBlLmtleSA9ICdAJztcclxuICAgLy99XHJcblxyXG4gICBjb25zdCBoYXJkd2FyZV9rZXlzID0gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoZS5jb2RlLCBlLmtleSwgZS5zaGlmdEtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5nZXRNb2RpZmllclN0YXRlKFwiQWx0R3JhcGhcIikpO1xyXG4gICBpZihoYXJkd2FyZV9rZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5cyB9KTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIC8va2V5X3ByZXNzZWQuZm9yRWFjaChrPT5rZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrIH0pKTtcclxuICAgLy9rZXlfcHJlc3NlZCA9IFtdO1xyXG5cclxuICAgbGV0IGNvZGUgPSBlLmNvZGU7XHJcbiAgIC8vY29uc29sZS5sb2coYG1hcCBiZWZvcmUgcmVsZWFzZTogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIGlmKGtleV9wcmVzc19tYXBbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgayA9IGtleV9wcmVzc19tYXBbY29kZV07XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGsgfSk7XHJcbiAgICAgIGRlbGV0ZSBrZXlfcHJlc3NfbWFwW2NvZGVdO1xyXG4gICB9XHJcblxyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbi8vIGNvbm5lY3QgRE9NIGV2ZW50c1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQ7IFxyXG5lbGVtZW50Lm9ua2V5ZG93biA9IGtleURvd247XHJcbmVsZW1lbnQub25rZXl1cCA9IGtleVVwO1xyXG5lbGVtZW50Lm9ua2V5cHJlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCLDoFwiKSBhY2NlbnRhdGUoXCJhXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6hcIikgYWNjZW50YXRlKFwiZVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOpXCIpIGFjY2VudGF0ZShcImVcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDrFwiKSBhY2NlbnRhdGUoXCJpXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw7JcIikgYWNjZW50YXRlKFwib1wiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsO5XCIpIGFjY2VudGF0ZShcInVcIik7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXkpIHsgICAgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoa2V5KSk7ICAgXHJcbiAgIGtleVVwKGZha2VFdmVudChrZXkpKTsgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoXCInXCIpKTtcclxuICAga2V5VXAoZmFrZUV2ZW50KFwiJ1wiKSk7ICAgXHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXk6IHN0cmluZykgeyAgICAgIFxyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlEb3duKGZha2VFdmVudChrZXkpKSwgMCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleVVwICAoZmFrZUV2ZW50KGtleSkpLDIwKTsgXHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleURvd24oZmFrZUV2ZW50KFwiJ1wiKSksNDApO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlVcCAgKGZha2VFdmVudChcIidcIikpLDYwKTtcclxufVxyXG5cclxud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgcmVzZXRfa2V5Ym9hcmQoKTsgLy8gcmVsZWFzZSBhbGwga2V5cyB0byBwcmV2ZW50IEFMVCBhbHdheXMgcHJlc3NlZCBhZnRlciBBTFQrVEFCXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZha2VFdmVudChrZXk6IHN0cmluZykge1xyXG4gICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgY29kZTogXCJcIixcclxuICAgICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgICAgYWx0S2V5OiBmYWxzZSxcclxuICAgICAgZ2V0TW9kaWZpZXJTdGF0ZTogKCk9PmZhbHNlLFxyXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCk9PmZhbHNlXHJcbiAgIH0gYXMgYW55IGFzIEtleWJvYXJkRXZlbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBLZXlCb2FyZF9DNjRFdmVudCB7XHJcbiAgIHR5cGU6IFwicHJlc3NcInxcInJlbGVhc2VcIjtcclxuICAgaGFyZHdhcmVfa2V5czogbnVtYmVyW107XHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXI6IEtleUJvYXJkX0M2NEV2ZW50W10gPSBbXTtcclxuLy9sZXQga2V5X3ByZXNzZWQgPSBbXTtcclxubGV0IGtleV9wcmVzc19tYXA6IHtba2V5OnN0cmluZ106IG51bWJlcltdfSA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2tleWJvYXJkKCkge1xyXG5cclxuICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKTtcclxuXHJcbiAgIGtleXMuZm9yRWFjaChrPT57XHJcbiAgICAgIC8vY29uc29sZS5sb2coYGNsZWFyaW5nICR7a31gKTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czoga2V5X3ByZXNzX21hcFtrXSB9KTtcclxuICAgICAgZGVsZXRlIGtleV9wcmVzc19tYXBba107XHJcbiAgIH0pO1xyXG5cclxuICAga2V5X3ByZXNzX21hcCA9IHt9OyAgXHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXJfZW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxfa2V5Ym9hcmQoKSB7XHJcbiAgIC8vIHBvbGwga2V5Ym9hcmRcclxuICAgd2hpbGUoa2V5Ym9hcmRfYnVmZmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGtleV9ldmVudCA9IGtleWJvYXJkX2J1ZmZlclswXTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyID0ga2V5Ym9hcmRfYnVmZmVyLnNsaWNlKDEpO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXJfZW1wdHkgPSBrZXlib2FyZF9idWZmZXIubGVuZ3RoID09IDA7XHJcblxyXG4gICAgICBpZihrZXlfZXZlbnQudHlwZSA9PT0gXCJwcmVzc1wiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoazogbnVtYmVyKSA9PiBjNjQua2V5X2Rvd24oaykpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoa2V5X2V2ZW50LnR5cGUgPT09IFwicmVsZWFzZVwiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4gYzY0LmtleV91cChrKSk7XHJcbiAgICAgICAgIGlmKGtleWJvYXJkX2J1ZmZlcl9lbXB0eSAmJiAhY29udHJvbF9wcmVzc2VkICYmICFhbHRfcHJlc3NlZCAmJiAhc2hpZnRfcHJlc3NlZCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IHQ9MDt0PDI1Njt0KyspIGM2NC5rZXlfdXAodCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiLypcclxuICAgICA3ICAgNiAgIDUgICA0ICAgMyAgIDIgICAxICAgMFxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICA3fCBGNyAgRjUgIEYzICBGMSAgQ0ROIENSVCBSRVQgREVMICAgIENSVD1DdXJzb3ItUmlnaHQsIENETj1DdXJzb3ItRG93blxyXG4gICB8XHJcbiAgNnwgSE9NIFVBICA9ICAgUlNIIC8gICA7ICAgKiAgIEJQICAgICBCUD1Ccml0aXNoIFBvdW5kLCBSU0g9U2hvdWxkIGJlIFJpZ2h0LVNISUZULFxyXG4gICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUE9VXAgQXJyb3dcclxuICA1fCAtICAgQCAgIDogICAuICAgLCAgIEwgICBQICAgK1xyXG4gICB8XHJcbiAgNHwgMCAgIE8gICBLICAgTSAgIE4gICBKICAgSSAgIDlcclxuICAgfFxyXG4gIDN8IDggICBVICAgSCAgIEIgICBWICAgRyAgIFkgICA3XHJcbiAgIHxcclxuICAyfCA2ICAgVCAgIEYgICBDICAgWCAgIEQgICBSICAgNVxyXG4gICB8XHJcbiAgMXwgNCAgIEUgICBTICAgWiAgIExTSCBBICAgVyAgIDMgICAgICBMU0g9U2hvdWxkIGJlIExlZnQtU0hJRlRcclxuICAgfFxyXG4gIDB8IDIgICBRICAgQ0JNIFNQQyBTVFAgQ1RMIExBICAxICAgICAgTEE9TGVmdCBBcnJvdywgQ1RMPVNob3VsZCBiZSBDVFJMLCBTVFA9UlVOL1NUT1BcclxuICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENCTT1Db21tb2RvcmUga2V5XHJcblxyXG4gICAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGNvZGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHNoaWZ0OiBib29sZWFuLCBjb250cm9sOiBib29sZWFuLCBjYm06IGJvb2xlYW4sIGFsdGdyYXBoOiBib29sZWFuKSB7XHJcbiAgIC8vY29uc29sZS5sb2coY29kZSwga2V5LCBlKTtcclxuICAgLy9jb25zb2xlLmxvZyhlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpKTtcclxuXHJcbiAgIGxldCBoYXJkd2FyZV9rZXlzID0gW107XHJcblxyXG4gICBpZihrZXkgPT09IFwiMVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIxXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIyXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiM1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIzXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI0XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI1XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI2XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiN1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI3XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI4XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI5XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIwXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiIVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIhXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09ICdcIicpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAnXCInLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIn5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiRcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIlXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiVcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCImXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiZcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIvXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIihcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIpXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIilcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI9XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCInXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIidcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI/XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJeXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJbXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIltcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJdXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCsFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJbXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwqdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIitcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiK1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIipcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsOnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJAXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI8XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjxcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI+XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIixcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI7XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjtcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI6XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjpcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCItXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJxXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInFcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIndcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwid1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJlXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJyXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInJcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ5XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ1XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInVcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImlcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiaVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwib1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJvXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInBcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiYVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwic1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJzXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImRcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJnXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImhcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwialwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwia1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJrXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImxcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwielwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ4XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImNcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiYlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJiXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm5cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwibVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJRXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJXXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIldcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJSXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJUXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlRcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIllcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiVVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJVXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJJXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIklcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiT1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJQXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJBXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkFcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiU1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJEXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJGXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiR1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiSFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJIXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJKXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIktcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiS1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJMXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJaXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJDXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJWXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJOXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJNXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk1cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuXHJcbiAgIGlmKGtleSA9PT0gXCJfXCIpICAgICAgICAgeyBoYXJkd2FyZV9rZXlzLnB1c2goIDY0KTsgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICB9ICAvLyBzaW11bGF0ZSB1bmRlcnNjb3JlXHJcblxyXG4gICAvLyBGS0VZU1xyXG4gICBpZihjb2RlID09PSBcIkYxXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjEgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGMlwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYyICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjNcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMyApO1xyXG4gICBpZihjb2RlID09PSBcIkY0XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjQgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNVwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY1ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjZcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNiApO1xyXG4gICBpZihjb2RlID09PSBcIkY3XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjcgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGOFwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY4ICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIlNwYWNlXCIpICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MjAgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwOCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA5ICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93RG93blwiKSAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MGEgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dVcFwiKSAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwYiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRGVsZXRlXCIpICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJJbnNlcnRcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDEwICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgxMCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAhc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRW50ZXJcIikgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJOdW1wYWRFbnRlclwiKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBEICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAzICApOyAgLy8gcnVuIHN0b3BcclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIiAmJiBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA3ICApOyAgLy8gc2hpZnQgKyBydW4gc3RvcFxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwQyAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIgJiYgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiQmFja3F1b3RlXCIpICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDQgICk7ICAvLyBsZWZ0IGFycm93XHJcblxyXG4gICBpZihjb250cm9sICYmICFhbHRncmFwaCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgLy9pZihjYm0pICAgICAgICAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFbmRcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcblxyXG4gICAvKlxyXG4gICBpZihjb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTtcclxuICAgaWYoY29kZSA9PT0gXCJUYWJcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgKi9cclxuXHJcbiAgIGlmKChjb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIgfHwgY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgJiYgIWFsdGdyYXBoKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgaWYoKGNvZGUgPT09IFwiQWx0TGVmdFwiIHx8IGNvZGUgPT0gXCJBbHRSaWdodFwiKSkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJQYWdlVXBcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEZGICk7ICAvLyBlbXVsYXRlIFJFU1RPUkVcclxuICAgaWYoY29kZSA9PT0gXCJQYWdlRG93blwiKSAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAzNSApOyAgICAvLyBcIiNcIlxyXG5cclxuICAgcmV0dXJuIGhhcmR3YXJlX2tleXM7XHJcbn1cclxuIiwiLy9cclxuLy8gZnVuY3Rpb25zIG9yaWdpbmFsbHkgY29waWVkIGZyb20gaHR0cHM6Ly93d3cubWRhd3Nvbi5uZXQvdmljMjBjaHJvbWUvdmljMjAucGhwXHJcbi8vIGFuZCBhZGFwdGVkIGZvciB0aGlzIGVtdWxhdG9yXHJcbi8vXHJcblxyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5mdW5jdGlvbiBiaW5Ub0FycmF5KGRhdGE6IHN0cmluZykge1xyXG4gICBsZXQgYmluY29kZXMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LiFcIjtcclxuICAgdmFyIHY9MCxjbnQ9MCxvdXQ9W10saWk9MDtcclxuICAgZm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspIHtcclxuICAgICAgdis9YmluY29kZXMuaW5kZXhPZihkYXRhW2ldKTw8Y250O1xyXG4gICAgICBjbnQrPTY7XHJcbiAgICAgIGlmKGNudD49OCkge1xyXG4gICAgICAgICBvdXRbaWkrK109KHYmMjU1KTtcclxuICAgICAgICAgY250LT04O1xyXG4gICAgICAgICB2Pj49ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlcm5hbExvYWQoY21kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN1YmZpbGU/OiBzdHJpbmcpIHtcdFxyXG5cdGNvbnNvbGUubG9nKFwiZXh0ZXJuYWxMb2FkIGNtZD1cIitjbWQrXCIgdXJsPVwiK3VybCtcIiBmb3JtYXQ9XCIrZm9ybWF0K1wiIHN1YmZpbGU9XCIrc3ViZmlsZSk7XHJcblx0dmFyIGhlYWQ9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcblx0dmFyIHNjcmlwdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnR5cGU9ICd0ZXh0L2phdmFzY3JpcHQnO1x0XHJcblx0c2NyaXB0LnNyYz0gJ2h0dHBzOi8vd3d3Lm1kYXdzb24ubmV0L3ZpYzIwY2hyb21lL3ZpYzIwL3ByZ3RvanNsb2FkZXIucGhwP2NtZD0nK2NtZCsnJnByZ3VybD0nK3VybCsnJnN1YmZpbGU9JytzdWJmaWxlO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5cclxuKHdpbmRvdyBhcyBhbnkpLm1kYXdzb25fbG9hZEJ5dGVzID0gbG9hZEJ5dGVzO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBtZGF3c29uX2xvYWRCeXRlcyhzcmM6IFVpbnQ4QXJyYXkpOiB2b2lkO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmxvYWRQcmc9IGZ1bmN0aW9uKHNyYzogYW55KSB7ICAgXHJcbiAgIGlmKHNyYy5sZW5ndGggIT09IDEpIHJldHVybjtcclxuXHJcbiAgIGxldCBiaW4gPSBiaW5Ub0FycmF5KHNyY1swXSk7XHJcbiAgIFxyXG4gICBtZGF3c29uX2xvYWRCeXRlcyhuZXcgVWludDhBcnJheShiaW4pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzZXRfd3N0Y3BfYWRkcmVzcyB9IGZyb20gXCIuL2Jic1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcbmltcG9ydCB7IGV4dGVybmFsTG9hZCB9IGZyb20gXCIuL21kYXdzb25cIjtcclxuXHJcbnR5cGUgUXVlcnlTdHJpbmdPYmplY3QgPSB7W2tleTogc3RyaW5nXTpzdHJpbmd9O1xyXG5cclxuZnVuY3Rpb24gZ2V0UXVlcnlTdHJpbmdPYmplY3QoKSB7XHJcbiAgIGxldCBhID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIiZcIik7XHJcbiAgIGxldCBvID0gYS5yZWR1Y2UoKG86IFF1ZXJ5U3RyaW5nT2JqZWN0LCB2KSA9PntcclxuICAgICAgdmFyIGt2ID0gdi5zcGxpdChcIj1cIik7XHJcbiAgICAgIGNvbnN0IGtleSA9IGt2WzBdLnJlcGxhY2UoXCI/XCIsIFwiXCIpO1xyXG4gICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGt2WzFdO1xyXG4gICAgICBvW2tleV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIG87XHJcbiAgIH0sIHt9KTtcclxuICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nQ29tbWFuZHMoKSB7XHJcbiAgIGxldCBvcHRpb25zID0gZ2V0UXVlcnlTdHJpbmdPYmplY3QoKTsgIFxyXG5cclxuICAgaWYob3B0aW9ucy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjNjQuY29uZmlnKE51bWJlcihvcHRpb25zLmNvbmZpZykpO1xyXG4gICB9XHJcblxyXG4gICBpZihvcHRpb25zLmpveSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGM2NC5lbXVfam95KE51bWJlcihvcHRpb25zLmpveSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgSm95c3RpY2sgZW11bGF0aW9uICR7TnVtYmVyKG9wdGlvbnMuam95KSE9MD9cImVuYWJsZWRcIjpcImRpc2FibGVkXCJ9YCk7XHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMud3N0Y3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRfd3N0Y3BfYWRkcmVzcyhvcHRpb25zLndzdGNwKTtcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5sb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgaWYobmFtZS5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAvLyBleHRlcm5hbCBsb2FkXHJcbiAgICAgICAgIGV4dGVybmFsTG9hZChcImxvYWRQcmdcIiwgbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIGludGVybmFsIGxvYWRcclxuICAgICAgICAgYXdhaXQgZmV0Y2hQcm9ncmFtKG5hbWUpO1xyXG4gICAgICB9ICAgXHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuY2JtNjQ5OSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGM2NC5zZXRfZXhyb20odHJ1ZSk7XHJcbiAgICAgIGM2NC5zZXRfZW11bGF0ZV9jYm1fNjQ5OSh0cnVlKTsgXHJcbiAgICAgIGM2NC5yZXNldCgpOyAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBvcHRpb25zO1xyXG59XHJcbiIsIi8qKioqIHV0aWxpdHkgZnVuY3Rpb25zICoqKiovXHJcblxyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXgodmFsdWU6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgIGlmKHNpemUgPT09IHVuZGVmaW5lZCkgc2l6ZSA9IDI7XHJcbiAgIGxldCBzID0gXCIwMDAwXCIgKyB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXN0ZUxpbmUodGV4dDogc3RyaW5nKSB7XHJcbiAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgZm9yKGxldCB0PTA7IHQ8bGluZXMubGVuZ3RoOyB0KyspIHtcclxuICAgICAgY29uc3QgbGluZWEgPSBsaW5lc1t0XTtcclxuICAgICAgY29uc29sZS5sb2cobGluZWEpO1xyXG4gICAgICBwYXN0ZShsaW5lYSk7XHJcbiAgICAgIHBhc3RlQ2hhcigxMyk7ICAgLy8gQ1JcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhcInBhc3RlZCFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZShsaW5lOiBzdHJpbmcpIHtcclxuXHJcbiAgIGZvcihsZXQgdD0wO3Q8bGluZS5sZW5ndGg7dCsrKSB7XHJcbiAgICAgIGxldCBjID0gbGluZS5jaGFyQ29kZUF0KHQpO1xyXG4gICAgICBwYXN0ZUNoYXIoYyk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFzdGVDaGFyKGM6IG51bWJlcikge1xyXG4gICB3aGlsZShjNjQucGVlaygxOTgpICE9PSAwKSB7XHJcbiAgICAgIGM2NC5leCgxNjAwMCk7XHJcbiAgIH1cclxuICAgYzY0LnBva2UoNjMxLGMpO1xyXG4gICBjNjQucG9rZSgxOTgsMSk7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGR1bXBNZW0oc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBpZihlbmQ9PXVuZGVmaW5lZCkgZW5kPXN0YXJ0KzE1O1xyXG4gICBpZihyb3dzPT11bmRlZmluZWQpIHJvd3M9MTY7XHJcbiAgIGxldCBzPVwiXFxyXFxuXCI7XHJcbiAgIGZvcihsZXQgcj1zdGFydDtyPD1lbmQ7cis9cm93cykge1xyXG4gICAgICBzKz0gaGV4KHIsIDQpICsgXCI6IFwiOyAgICAgIFxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSBoZXgoYnl0ZSkrXCIgXCI7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzICYmIChyK2MpPD1lbmQ7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1fcmVhZChyK2MpO1xyXG4gICAgICAgICBzKz0gKGJ5dGU+MzIgJiYgYnl0ZTwxMjcpID8gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSA6ICcuJyA7XHJcbiAgICAgIH1cclxuICAgICAgcys9XCJcXG5cIjtcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGV4RHVtcChtZW1vcnksIHN0YXJ0LCBlbmQsIHJvd3MpIHtcclxuICAgbGV0IHM9XCJcIjtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8ZW5kO3IrPXJvd3MpIHtcclxuICAgICAgcys9IGhleChyLCA0KSArIFwiOiBcIjsgICAgICBcclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtb3J5W3IrY107XHJcbiAgICAgICAgIHMrPSBoZXgoYnl0ZSkrXCIgXCI7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtb3J5W3IrY107XHJcbiAgICAgICAgIHMrPSAoYnl0ZT4zMiAmJiBieXRlPDEyNykgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpIDogJy4nIDtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICB9XHJcbiAgIHJldHVybiBzO1xyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gYmluKHZhbHVlLCBzaXplKSB7XHJcbiAgIGlmKHNpemUgPT09IHVuZGVmaW5lZCkgc2l6ZSA9IDg7XHJcbiAgIGxldCBzID0gXCIwMDAwMDAwMDAwMDAwMDAwXCIgKyB2YWx1ZS50b1N0cmluZygyKTtcclxuICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNwdV9zdGF0dXMoKSB7XHJcbiAgIGNvbnN0IHN0YXRlID0gY3B1LmdldFN0YXRlKCk7XHJcbiAgIHJldHVybiBgQT0ke2hleChzdGF0ZS5hKX0gQkM9JHtoZXgoc3RhdGUuYil9JHtoZXgoc3RhdGUuYyl9IERFPSR7aGV4KHN0YXRlLmQpfSR7aGV4KHN0YXRlLmUpfSBITD0ke2hleChzdGF0ZS5oKX0ke2hleChzdGF0ZS5sKX0gSVg9JHtoZXgoc3RhdGUuaXgsNCl9IElZPSR7aGV4KHN0YXRlLml5LDQpfSBTUD0ke2hleChzdGF0ZS5zcCw0KX0gUEM9JHtoZXgoc3RhdGUucGMsNCl9IFM9JHtzdGF0ZS5mbGFncy5TfSwgWj0ke3N0YXRlLmZsYWdzLlp9LCBZPSR7c3RhdGUuZmxhZ3MuWX0sIEg9JHtzdGF0ZS5mbGFncy5IfSwgWD0ke3N0YXRlLmZsYWdzLlh9LCBQPSR7c3RhdGUuZmxhZ3MuUH0sIE49JHtzdGF0ZS5mbGFncy5OfSwgQz0ke3N0YXRlLmZsYWdzLkN9YDsgICBcclxufVxyXG4qL1xyXG5cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIHdhaXQodGltZSkge1xyXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgdGltZSk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6YXAoKSB7ICAgICAgICAgICAgXHJcbiAgIHJhbS5mb3JFYWNoKChlLGkpPT5yYW1baV09MHgwMCk7XHJcbiAgIGxldCBzdGF0ZSA9IGNwdS5nZXRTdGF0ZSgpO1xyXG4gICBzdGF0ZS5oYWx0ZWQgPSB0cnVlO1xyXG4gICBjcHUuc2V0U3RhdGUoc3RhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3dlcigpIHsgICAgICBcclxuICAgemFwKCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmNwdS5yZXNldCgpLCAyMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wKCkgeyAgIFxyXG4gICBzdG9wQXVkaW8oKTtcclxuICAgc3RvcHBlZCA9IHRydWU7XHJcbiAgIGNvbnNvbGUubG9nKFwiZW11bGF0aW9uIHN0b3BwZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvKCkge1xyXG4gICBzdG9wcGVkID0gZmFsc2U7XHJcbiAgIG9uZUZyYW1lKCk7XHJcbiAgIGNvbnNvbGUubG9nKFwiZW11bGF0aW9uIHJlc3VtZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm8oKSB7XHJcbiAgIGNvbnN0IGF2ZXJhZ2UgPSBhdmVyYWdlRnJhbWVUaW1lLzEwMDA7XHJcbiAgIGNvbnNvbGUubG9nKGBmcmFtZSByYXRlOiBhdmVyYWdlICR7TWF0aC5yb3VuZChhdmVyYWdlKjEwLDIpLzEwfSBtcyAoJHtNYXRoLnJvdW5kKDEvYXZlcmFnZSoxMDAwKX0gSHopYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldF9iaXQodmFsdWUsIGJpdG4pIHtcclxuICAgcmV0dXJuIHZhbHVlIHwgKDE8PGJpdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldF9iaXQodmFsdWUsIGJpdG4pIHtcclxuICAgcmV0dXJuIHZhbHVlICYgfigxPDxiaXRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0KHZhbHVlLCBiaXRtYXNrKSB7XHJcbiAgIHJldHVybiB2YWx1ZSB8IGJpdG1hc2s7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBzbGVlcChtc2VjKSB7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PnJlc29sdmUoKSwgbXNlYyk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzZXQodmFsdWUsIGJpdG1hc2spIHtcclxuICAgcmV0dXJuIHZhbHVlICYgKDB4RkYgXiBiaXRtYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHVtcFBvaW50ZXJzKCkge1xyXG4gICBjb25zb2xlLmxvZyhgXHJcbiAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rIDwtICAoMHgke2hleChQUk9HTkQsNCl9KSAke2hleChtZW1fcmVhZF93b3JkKFBST0dORCksNCl9XHJcbiAgIHwgICAgIEJBU0lDIHByb2dyYW0gICAgICB8XHJcbiAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rIDwtIFRYVFRBQiAoMHgke2hleChCQVNUWFQsNCl9KSAke2hleChtZW1fcmVhZF93b3JkKEJBU1RYVCksNCl9XHJcbiAgIHwgICAgU3lzdGVtIHZhcmlhYmxlcyAgICB8XHJcbiAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rIDB4ODAwMFxyXG5gKTtcclxufVxyXG5cclxubGV0IGRlYnVnQmVmb3JlID0gdW5kZWZpbmVkO1xyXG5sZXQgZGVidWdBZnRlciA9IHVuZGVmaW5lZDtcclxuXHJcbmZ1bmN0aW9uIGJpdChiLG4pIHtcclxuICAgcmV0dXJuIChiICYgKDE8PG4pKT4wID8gMSA6IDA7XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBub3RfYml0KGIsbikge1xyXG4gICByZXR1cm4gKGIgJiAoMTw8bikpPjAgPyAwIDogMTtcclxufSBcclxuXHJcbmZ1bmN0aW9uIGR1bXBTdGFjaygpIHtcclxuICAgY29uc3Qgc3AgPSBjcHUuZ2V0U3RhdGUoKS5zcDtcclxuXHJcbiAgIGZvcihsZXQgdD1zcDt0PD0weGZmZmY7dCs9Mikge1xyXG4gICAgICBjb25zdCB3b3JkID0gbWVtX3JlYWRfd29yZCh0KTtcclxuICAgICAgY29uc29sZS5sb2coYCR7aGV4KHQsNCl9OiAke2hleCh3b3JkLDQpfSAgKCR7d29yZH0pYCk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5kc1dpdGgocywgdmFsdWUpIHtcclxuICAgcmV0dXJuIHMuc3Vic3RyKC12YWx1ZS5sZW5ndGgpID09PSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgZGVzdCkge1xyXG4gICBzb3VyY2UuZm9yRWFjaCgoZSxpKT0+ZGVzdFtpXSA9IGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlX2xtKHN0YXJ0LCBlbmQsIHJvd3MpIHtcclxuICAgbGV0IHM7XHJcbiAgIHMgPSBgMTAgRk9SIFQ9Jkgke2hleChzdGFydCw0KX0gVE8gJkgke2hleChlbmQsNCl9XFxuYDtcclxuICAgcys9IGAyMCBSRUFEIEI6UE9LRSBULEJcXG5gO1xyXG4gICBzKz0gYDMwIE5FWFRcXG5gO1xyXG4gICBzKz0gYDQwIFNZUyAmSCR7aGV4KHN0YXJ0LDQpfVxcbmA7XHJcbiAgIHMrPSBgNTAgRU5EXFxuYDtcclxuICAgbGV0IG5saW5lID0gMTAwMDtcclxuICAgaWYocm93cz09dW5kZWZpbmVkKSByb3dzPTg7XHJcbiAgIGZvcihsZXQgcj1zdGFydDtyPD1lbmQ7cis9cm93cykge1xyXG4gICAgICBzKz0gYCR7bmxpbmV9IERBVEEgYDtcclxuICAgICAgZm9yKGxldCBjPTA7Yzxyb3dzICYmIChyK2MpPD1lbmQ7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1fcmVhZChyK2MpO1xyXG4gICAgICAgICBzKz0gYCR7Ynl0ZX1gO1xyXG4gICAgICAgICBpZihjIT1yb3dzLTEgJiYgKHIrYykhPWVuZCkgcys9XCIsXCI7XHJcbiAgICAgIH1cclxuICAgICAgcys9XCJcXG5cIjtcclxuICAgICAgbmxpbmUgKz0gMTA7XHJcbiAgIH1cclxuICAgY29uc29sZS5sb2cocyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRtcigpXHJcbntcclxuICAgcmV0dXJuIG1lbV9yZWFkX3dvcmQoVE1SQ05UKSArIChtZW1fcmVhZF93b3JkKFRNUkNOVCsyKSA8PCAxNik7XHJcbn1cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxubGV0IGNvdW50ZXJfYXZnID0gMDtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0X2NvdW50ZXIoKSB7XHJcbiAgIGNvdW50ZXIgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcF9jb3VudGVyKCkge1xyXG4gICBsZXQgbm93ID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgIGxldCBjbnQgPSBjb3VudGVyO1xyXG4gICBpZihjbnQgPT09IDApIGNudCA9IG5vd1xyXG4gICBsZXQgZWxhcHNlZCA9IG5vdyAtIGNudDsgICBcclxuICAgY291bnRlcl9hdmcgPSAwLjkgKiBjb3VudGVyX2F2ZyArIDAuMSAqIGVsYXBzZWQ7XHJcbiAgIHJldHVybiBjb3VudGVyX2F2ZztcclxufVxyXG5cclxubGV0IExFRCA9IDA7XHJcbmZ1bmN0aW9uIGxlZF9yZWFkKCkge1xyXG4gICByZXR1cm4gTEVEO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsZWRfd3JpdGUodmFsdWUpIHtcclxuICAgTEVEID0gdmFsdWU7XHJcbn1cclxuXHJcbi8vIG1ha2UgYSBsb25nIHVybCBmcm9tIGFuIGV4aXN0aW5nIHNhdmVkIHByb2dyYW1cclxuYXN5bmMgZnVuY3Rpb24gbWFrZUJhc2U2NChmaWxlTmFtZSkge1xyXG4gICBjb25zdCBieXRlcyA9IGF3YWl0IHJlYWRGaWxlKGZpbGVOYW1lKTtcclxuICAgbGV0IGxvbmdfdXJsID0gd2luZG93LmJ0b2EoYnl0ZXMpO1xyXG4gICBjb25zb2xlLmxvZyhgaHR0cHM6Ly9uaXBwdXI3Mi5naXRodWIuaW8vYzY0LWVtdT9iPSR7bG9uZ191cmx9YCk7XHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcyVWludDhBcnJheShzdHI6IHN0cmluZykge1xyXG4gICBsZXQgYXJyID0gW107XHJcblxyXG4gICBmb3IobGV0IHQ9MDsgdDxzdHIubGVuZ3RoOyB0KyspXHJcbiAgICAgIGFyci5wdXNoKHN0ci5jaGFyQ29kZUF0KHQpICYgMHhGRik7XHJcblxyXG4gICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXJyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5MlN0cmluZyhkYXRhOiBudW1iZXJbXSkge1xyXG4gICBsZXQgc3RyID0gXCJcIjtcclxuXHJcbiAgIGZvcih2YXIgaW5kZXg9MDsgaW5kZXg8ZGF0YS5sZW5ndGg7IGluZGV4KyspXHJcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFbaW5kZXhdKTtcclxuXHJcbiAgIHJldHVybiBzdHI7XHJcbn0iLCJpbXBvcnQgeyBnZXRfd2FzbV9pbnN0YW5jZSB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuLy8gZ29vZCB2YWx1ZXMgZm9yIENSVCBQQUxcclxubGV0IFNDUkVFTl9XID0gMzkyO1xyXG5sZXQgU0NSRUVOX0ggPSAyNzI7XHJcbmxldCBQT1NfWCA9IDMqODtcclxubGV0IFBPU19ZID0gMyo4O1xyXG5cclxuLypcclxuLy8gdmFsdWVzIGZvciBkZWJ1Z1xyXG5sZXQgU0NSRUVOX1cgPSAyODQ7XHJcbmxldCBTQ1JFRU5fSCA9IDMxMjtcclxubGV0IFBPU19YID0gMDtcclxubGV0IFBPU19ZID0gMDtcclxuKi9cclxuXHJcbmxldCBzYXR1cmF0aW9uID0gMS4wO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUdlb21ldHJ5KCkge1xyXG4gICAvLyBjYW52YXMgaXMgdGhlIG91dGVyIGNhbnZhcyB3aGVyZSB0aGUgYXNwZWN0IHJhdGlvIGlzIGNvcnJlY3RlZFxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGNhbnZhcy53aWR0aCAgPSBTQ1JFRU5fVyAqIDIgLShQT1NfWCoyKTtcclxuICAgY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IICogMiAtKFBPU19ZKjIpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKlxyXG5sZXQgV1cgPSAyMzI7XHJcbmxldCBISCA9IDI3MjtcclxuKi9cclxuXHJcbmxldCBXVyA9IFNDUkVFTl9XO1xyXG5sZXQgSEggPSBTQ1JFRU5fSDtcclxuXHJcbmxldCB2aWNfaWlfY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCB2aWNfaWlfY29udGV4dCA9IHZpY19paV9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbi8vIG5ldyBtZXRob2RcclxubGV0IHZpY19paV9pbWFnZURhdGEgPSB2aWNfaWlfY29udGV4dCEuY3JlYXRlSW1hZ2VEYXRhKFdXKjIsIEhIKjIpO1xyXG5sZXQgYm1wID0gbmV3IFVpbnQzMkFycmF5KHZpY19paV9pbWFnZURhdGEuZGF0YS5idWZmZXIpO1xyXG5cclxuLypcclxuLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcbmxldCB2aWNfaWlfaW1hZ2VEYXRhID0gdmljX2lpX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIFdXKjIsIEhIKjIpO1xyXG5sZXQgaW1hZ2VkYXRhX2J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih2aWNfaWlfaW1hZ2VEYXRhLmRhdGEubGVuZ3RoKTtcclxubGV0IGltYWdlZGF0YV9idWY4ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGltYWdlZGF0YV9idWZmZXIpO1xyXG5sZXQgYm1wID0gbmV3IFVpbnQzMkFycmF5KGltYWdlZGF0YV9idWZmZXIpO1xyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZkcF9zY3JlZW5fdXBkYXRlKHB0cjogbnVtYmVyKSB7XHJcbiAgIGxldCBzdGFydCA9IHB0ciAvIGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgbGV0IHNpemUgPSBXVypISDtcclxuICAgbGV0IGJ1ZmZlciA9IGdldF93YXNtX2luc3RhbmNlKCkuSEVBUFUzMi5zdWJhcnJheShzdGFydCxzdGFydCtzaXplKTtcclxuXHJcbiAgIGxldCBwdHIwID0gMDtcclxuICAgbGV0IHB0cjEgPSAwO1xyXG4gICBsZXQgcHRyMiA9IFdXKjI7XHJcblxyXG4gICBmb3IobGV0IHk9MDt5PEhIO3krKykge1xyXG4gICAgICBmb3IobGV0IHg9MDt4PFdXO3grKykge1xyXG4gICAgICAgICBsZXQgcGl4ZWwgPSBidWZmZXJbcHRyMF07XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIxKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIGJtcFtwdHIyKytdID0gcGl4ZWw7XHJcbiAgICAgICAgIHB0cjArKztcclxuICAgICAgfVxyXG4gICAgICBwdHIxICs9IFdXKjI7XHJcbiAgICAgIHB0cjIgKz0gV1cqMjtcclxuICAgfVxyXG5cclxuICAgLypcclxuICAgLy8gb2xkIGRyYXdpbmcgbWV0aG9kXHJcbiAgIHZpY19paV9pbWFnZURhdGEuZGF0YS5zZXQoaW1hZ2VkYXRhX2J1ZjgpO1xyXG4gICB2aWNfaWlfY29udGV4dC5wdXRJbWFnZURhdGEodmljX2lpX2ltYWdlRGF0YSwgLVBPU19YLCAtUE9TX1kpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gbmV3IG1ldGhvZFxyXG4gICB2aWNfaWlfY29udGV4dCEucHV0SW1hZ2VEYXRhKHZpY19paV9pbWFnZURhdGEsIC1QT1NfWCwgLVBPU19ZKTtcclxuXHJcbiAgIC8vZnJhbWVzKys7XHJcbiAgIC8vaWYoZW5kX29mX2ZyYW1lX2hvb2sgIT09IHVuZGVmaW5lZCkgZW5kX29mX2ZyYW1lX2hvb2soKTtcclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBsb2FkX3dhc20gfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuL2VtdWxhdG9yXCI7XHJcbmltcG9ydCB7IHZkcF9zY3JlZW5fdXBkYXRlIH0gZnJvbSBcIi4vdmlkZW9cIjtcclxuaW1wb3J0IHsgYXVkaW9fYnVmX3JlYWR5IH0gZnJvbSBcIi4vYXVkaW9cIjtcclxuLy9pbXBvcnQgeyBsb2FkUHJnIH0gZnJvbSBcIi4vbWRhd3NvblwiO1xyXG5pbXBvcnQgeyBtb2RlbV9yZWFkLCBtb2RlbV93cml0ZSB9IGZyb20gXCIuL2Jic1wiO1xyXG5pbXBvcnQgeyBjYm1fNjQ5OV93cml0ZSwgY2JtXzY0OTlfcmVhZCwgY2JtXzY0OTlfcmVzZXQgfSBmcm9tIFwiLi9jYm1fNjQ5OS9jYm1fNjQ5OVwiO1xyXG5pbXBvcnQgeyBzYXZlX2ZpbGUgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuaW1wb3J0IFwiLi9icm93c2VyXCI7XHJcblxyXG4vLyBwdWJsaXNoIG9uIGdsb2JhbFxyXG4od2luZG93IGFzIGFueSkudmRwX3NjcmVlbl91cGRhdGUgPSB2ZHBfc2NyZWVuX3VwZGF0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLmF1ZGlvX2J1Zl9yZWFkeSA9IGF1ZGlvX2J1Zl9yZWFkeTtcclxuLy8od2luZG93IGFzIGFueSkubG9hZFByZyA9IGxvYWRQcmc7XHJcbih3aW5kb3cgYXMgYW55KS5tb2RlbV9yZWFkID0gbW9kZW1fcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLm1vZGVtX3dyaXRlID0gbW9kZW1fd3JpdGU7XHJcbih3aW5kb3cgYXMgYW55KS5zYXZlX2ZpbGUgPSBzYXZlX2ZpbGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuY2JtXzY0OTlfcmVzZXQgPSBjYm1fNjQ5OV9yZXNldDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3JlYWQgID0gY2JtXzY0OTlfcmVhZDtcclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3dyaXRlID0gY2JtXzY0OTlfd3JpdGU7XHJcblxyXG4od2luZG93IGFzIGFueSkuYzY0ID0gYzY0O1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICBhd2FpdCBsb2FkX3dhc20oKTtcclxuICAgbWFpbigpOyAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=