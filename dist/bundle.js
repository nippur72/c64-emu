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
PIA.afterdialtone = () => videotel.connect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2hFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNoRSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDOUUsSUFBRyxHQUFHLEtBQUssR0FBRztRQUFVLGFBQWEsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzlFLElBQUcsR0FBRyxLQUFLLEdBQUc7UUFBVSxhQUFhLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM5RSxJQUFHLEdBQUcsS0FBSyxHQUFHO1FBQVUsYUFBYSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFFOUUsSUFBRyxHQUFHLEtBQUssR0FBRyxFQUFVO1FBQUUsYUFBYSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7S0FBRyxDQUFFLHNCQUFzQjtJQUV6RyxRQUFRO0lBQ1IsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFDdkQsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFZLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUM7SUFFdkQsSUFBRyxJQUFJLEtBQUssT0FBTztRQUFTLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssV0FBVztRQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssWUFBWTtRQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssV0FBVztRQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssU0FBUztRQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFFeEQsSUFBRyxJQUFJLEtBQUssUUFBUTtRQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFHLENBQUM7SUFDeEQsSUFBRyxJQUFJLEtBQUssUUFBUTtRQUFRLGFBQWEsQ0FBQyxJ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Q0FBQztJQUNWLENBQUM7Q0FBQSxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvZW1zY3JpcHRlbl9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9GaWxlU2F2ZXIuanMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvYmJzX2Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9icm93c2VyLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2NibV82NDk5L2NibV82NDk5LnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2NibV82NDk5L202ODIxLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2NibV82NDk5L202ODUwLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2NibV82NDk5L3NwZWVkX2xpbWl0ZXIudHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvZW1zY3JpcHRlbl93cmFwcGVyLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2VtdWxhdG9yLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2ZldGNoUHJvZ3JhbS50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9maWxlc3lzdGVtLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2tleWJvYXJkLnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL2tleWJvYXJkX0lULnRzIiwid2VicGFjazovL2M2NC1lbXUvLi4vLi4vLi4vLi4vLi4vQ29tcHV0ZXIvRGVza3RvcC9VU0IvR2l0SHViL2M2NC1lbXUvc3JjL21kYXdzb24udHMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy9wZXRzY2lpX2Jicy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9jNjQtZW11Ly4uLy4uLy4uLy4uLy4uL0NvbXB1dGVyL0Rlc2t0b3AvVVNCL0dpdEh1Yi9jNjQtZW11L3NyYy92aWRlby50cyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2FtZCBkZWZpbmUiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYzY0LWVtdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jNjQtZW11L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2M2NC1lbXUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYzY0LWVtdS8uLi8uLi8uLi8uLi8uLi9Db21wdXRlci9EZXNrdG9wL1VTQi9HaXRIdWIvYzY0LWVtdS9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBlbXNjcmlwdGVuX21vZHVsZSA9ICgoKSA9PiB7XHJcbiAgdmFyIF9zY3JpcHREaXIgPSBpbXBvcnQubWV0YS51cmw7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuZnVuY3Rpb24oZW1zY3JpcHRlbl9tb2R1bGUgPSB7fSkgIHtcclxuXHJcbnZhciBNb2R1bGU9dHlwZW9mIGVtc2NyaXB0ZW5fbW9kdWxlIT1cInVuZGVmaW5lZFwiP2Vtc2NyaXB0ZW5fbW9kdWxlOnt9O3ZhciByZWFkeVByb21pc2VSZXNvbHZlLHJlYWR5UHJvbWlzZVJlamVjdDtNb2R1bGVbXCJyZWFkeVwiXT1uZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVhZHlQcm9taXNlUmVzb2x2ZT1yZXNvbHZlO3JlYWR5UHJvbWlzZVJlamVjdD1yZWplY3R9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIEVOVklST05NRU5UX0lTX1dFQj10cnVlO3ZhciBFTlZJUk9OTUVOVF9JU19XT1JLRVI9ZmFsc2U7dmFyIHNjcmlwdERpcmVjdG9yeT1cIlwiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0ocGF0aCxzY3JpcHREaXJlY3RvcnkpfXJldHVybiBzY3JpcHREaXJlY3RvcnkrcGF0aH12YXIgcmVhZF8scmVhZEFzeW5jLHJlYWRCaW5hcnksc2V0V2luZG93VGl0bGU7aWYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpe2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZn1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7c2NyaXB0RGlyZWN0b3J5PWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjfWlmKF9zY3JpcHREaXIpe3NjcmlwdERpcmVjdG9yeT1fc2NyaXB0RGlyfWlmKHNjcmlwdERpcmVjdG9yeS5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXtzY3JpcHREaXJlY3Rvcnk9c2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLHNjcmlwdERpcmVjdG9yeS5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1lbHNle3NjcmlwdERpcmVjdG9yeT1cIlwifXtyZWFkXz11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnNlbmQobnVsbCk7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9O2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7cmVhZEJpbmFyeT11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSl9fXJlYWRBc3luYz0odXJsLG9ubG9hZCxvbmVycm9yKT0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLHRydWUpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5vbmxvYWQ9KCk9PntpZih4aHIuc3RhdHVzPT0yMDB8fHhoci5zdGF0dXM9PTAmJnhoci5yZXNwb25zZSl7b25sb2FkKHhoci5yZXNwb25zZSk7cmV0dXJufW9uZXJyb3IoKX07eGhyLm9uZXJyb3I9b25lcnJvcjt4aHIuc2VuZChudWxsKX19c2V0V2luZG93VGl0bGU9dGl0bGU9PmRvY3VtZW50LnRpdGxlPXRpdGxlfWVsc2V7fXZhciBvdXQ9TW9kdWxlW1wicHJpbnRcIl18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbXCJwcmludEVyclwiXXx8Y29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihNb2R1bGUsbW9kdWxlT3ZlcnJpZGVzKTttb2R1bGVPdmVycmlkZXM9bnVsbDtpZihNb2R1bGVbXCJhcmd1bWVudHNcIl0pYXJndW1lbnRzXz1Nb2R1bGVbXCJhcmd1bWVudHNcIl07aWYoTW9kdWxlW1widGhpc1Byb2dyYW1cIl0pdGhpc1Byb2dyYW09TW9kdWxlW1widGhpc1Byb2dyYW1cIl07aWYoTW9kdWxlW1wicXVpdFwiXSlxdWl0Xz1Nb2R1bGVbXCJxdWl0XCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVtcIndhc21CaW5hcnlcIl0pd2FzbUJpbmFyeT1Nb2R1bGVbXCJ3YXNtQmluYXJ5XCJdO3ZhciBub0V4aXRSdW50aW1lPU1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl18fHRydWU7aWYodHlwZW9mIFdlYkFzc2VtYmx5IT1cIm9iamVjdFwiKXthYm9ydChcIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWRcIil9dmFyIHdhc21NZW1vcnk7dmFyIEFCT1JUPWZhbHNlO3ZhciBFWElUU1RBVFVTO3ZhciBVVEY4RGVjb2Rlcj10eXBlb2YgVGV4dERlY29kZXIhPVwidW5kZWZpbmVkXCI/bmV3IFRleHREZWNvZGVyKFwidXRmOFwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGOEFycmF5VG9TdHJpbmcoaGVhcE9yQXJyYXksaWR4LG1heEJ5dGVzVG9SZWFkKXt2YXIgZW5kSWR4PWlkeCttYXhCeXRlc1RvUmVhZDt2YXIgZW5kUHRyPWlkeDt3aGlsZShoZWFwT3JBcnJheVtlbmRQdHJdJiYhKGVuZFB0cj49ZW5kSWR4KSkrK2VuZFB0cjtpZihlbmRQdHItaWR4PjE2JiZoZWFwT3JBcnJheS5idWZmZXImJlVURjhEZWNvZGVyKXtyZXR1cm4gVVRGOERlY29kZXIuZGVjb2RlKGhlYXBPckFycmF5LnN1YmFycmF5KGlkeCxlbmRQdHIpKX12YXIgc3RyPVwiXCI7d2hpbGUoaWR4PGVuZFB0cil7dmFyIHUwPWhlYXBPckFycmF5W2lkeCsrXTtpZighKHUwJjEyOCkpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7Y29udGludWV9dmFyIHUxPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjI0KT09MTkyKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHUwJjMxKTw8Nnx1MSk7Y29udGludWV9dmFyIHUyPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjQwKT09MjI0KXt1MD0odTAmMTUpPDwxMnx1MTw8Nnx1Mn1lbHNle3UwPSh1MCY3KTw8MTh8dTE8PDEyfHUyPDw2fGhlYXBPckFycmF5W2lkeCsrXSY2M31pZih1MDw2NTUzNil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKX1lbHNle3ZhciBjaD11MC02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIFVURjhUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3JldHVybiBwdHI/VVRGOEFycmF5VG9TdHJpbmcoSEVBUFU4LHB0cixtYXhCeXRlc1RvUmVhZCk6XCJcIn1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX12YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVtcIkhFQVA4XCJdPUhFQVA4PW5ldyBJbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUDE2XCJdPUhFQVAxNj1uZXcgSW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQMzJcIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBVOFwiXT1IRUFQVTg9bmV3IFVpbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUxNlwiXT1IRUFQVTE2PW5ldyBVaW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQVTMyXCJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGMzJcIl09SEVBUEYzMj1uZXcgRmxvYXQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGNjRcIl09SEVBUEY2ND1uZXcgRmxvYXQ2NEFycmF5KGIpfXZhciB3YXNtVGFibGU7dmFyIF9fQVRQUkVSVU5fXz1bXTt2YXIgX19BVElOSVRfXz1bXTt2YXIgX19BVFBPU1RSVU5fXz1bXTt2YXIgcnVudGltZUluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIHByZVJ1bigpe2lmKE1vZHVsZVtcInByZVJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZVJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZVJ1blwiXT1bTW9kdWxlW1wicHJlUnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwcmVSdW5cIl0ubGVuZ3RoKXthZGRPblByZVJ1bihNb2R1bGVbXCJwcmVSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQUkVSVU5fXyl9ZnVuY3Rpb24gaW5pdFJ1bnRpbWUoKXtydW50aW1lSW5pdGlhbGl6ZWQ9dHJ1ZTtjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUSU5JVF9fKX1mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlW1wicG9zdFJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInBvc3RSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwb3N0UnVuXCJdPVtNb2R1bGVbXCJwb3N0UnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwb3N0UnVuXCJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVtcInBvc3RSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pfWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Jbml0KGNiKXtfX0FUSU5JVF9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYil7X19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKX12YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGw7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX19ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfWlmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYocnVuRGVwZW5kZW5jeVdhdGNoZXIhPT1udWxsKXtjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsfWlmKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCl7dmFyIGNhbGxiYWNrPWRlcGVuZGVuY2llc0Z1bGZpbGxlZDtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtjYWxsYmFjaygpfX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7aWYoTW9kdWxlW1wib25BYm9ydFwiXSl7TW9kdWxlW1wib25BYm9ydFwiXSh3aGF0KX13aGF0PVwiQWJvcnRlZChcIit3aGF0K1wiKVwiO2Vycih3aGF0KTtBQk9SVD10cnVlO0VYSVRTVEFUVVM9MTt3aGF0Kz1cIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIjt2YXIgZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKHdoYXQpO3JlYWR5UHJvbWlzZVJlamVjdChlKTt0aHJvdyBlfXZhciBkYXRhVVJJUHJlZml4PVwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiO2Z1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSl7cmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCl9dmFyIHdhc21CaW5hcnlGaWxlO2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3dhc21CaW5hcnlGaWxlPVwiZW1zY3JpcHRlbl9tb2R1bGUud2FzbVwiO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKX19ZWxzZXt3YXNtQmluYXJ5RmlsZT1uZXcgVVJMKFwiZW1zY3JpcHRlbl9tb2R1bGUud2FzbVwiLGltcG9ydC5tZXRhLnVybCkuaHJlZn1mdW5jdGlvbiBnZXRCaW5hcnkoZmlsZSl7dHJ5e2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9Y2F0Y2goZXJyKXthYm9ydChlcnIpfX1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKCl7aWYoIXdhc21CaW5hcnkmJihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUikpe2lmKHR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2god2FzbUJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe2lmKCFyZXNwb25zZVtcIm9rXCJdKXt0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrd2FzbUJpbmFyeUZpbGUrXCInXCJ9cmV0dXJuIHJlc3BvbnNlW1wiYXJyYXlCdWZmZXJcIl0oKX0pLmNhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGdldEJpbmFyeSh3YXNtQmluYXJ5RmlsZSl9KX19cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZ2V0QmluYXJ5KHdhc21CaW5hcnlGaWxlKX0pfWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17XCJhXCI6d2FzbUltcG9ydHN9O2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSxtb2R1bGUpe3ZhciBleHBvcnRzPWluc3RhbmNlLmV4cG9ydHM7TW9kdWxlW1wiYXNtXCJdPWV4cG9ydHM7d2FzbU1lbW9yeT1Nb2R1bGVbXCJhc21cIl1bXCJkXCJdO3VwZGF0ZU1lbW9yeVZpZXdzKCk7d2FzbVRhYmxlPU1vZHVsZVtcImFzbVwiXVtcIkRcIl07YWRkT25Jbml0KE1vZHVsZVtcImFzbVwiXVtcImVcIl0pO3JlbW92ZVJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpfWFkZFJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KHJlc3VsdCl7cmVjZWl2ZUluc3RhbmNlKHJlc3VsdFtcImluc3RhbmNlXCJdKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVyKXtyZXR1cm4gZ2V0QmluYXJ5UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oYmluYXJ5KXtyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LGluZm8pfSkudGhlbihmdW5jdGlvbihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlfSkudGhlbihyZWNlaXZlcixmdW5jdGlvbihyZWFzb24pe2VycihcImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206IFwiK3JlYXNvbik7YWJvcnQocmVhc29uKX0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXN5bmMoKXtpZighd2FzbUJpbmFyeSYmdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nPT1cImZ1bmN0aW9uXCImJiFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpJiZ0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXt2YXIgcmVzdWx0PVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLGluZm8pO3JldHVybiByZXN1bHQudGhlbihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCxmdW5jdGlvbihyZWFzb24pe2VycihcIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiBcIityZWFzb24pO2VycihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KX0pfSl9ZWxzZXtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCl9fWlmKE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXSl7dHJ5e3ZhciBleHBvcnRzPU1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXShpbmZvLHJlY2VpdmVJbnN0YW5jZSk7cmV0dXJuIGV4cG9ydHN9Y2F0Y2goZSl7ZXJyKFwiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogXCIrZSk7cmVhZHlQcm9taXNlUmVqZWN0KGUpfX1pbnN0YW50aWF0ZUFzeW5jKCkuY2F0Y2gocmVhZHlQcm9taXNlUmVqZWN0KTtyZXR1cm57fX12YXIgQVNNX0NPTlNUUz17NzExNTI6KCk9PntyZXR1cm4gY2JtXzY0OTlfcmVzZXQoKX0sNzExODE6KCQwLCQxKT0+e2F1ZGlvX2J1Zl9yZWFkeSgkMCwkMSl9LDcxMjEwOiQwPT57dmRwX3NjcmVlbl91cGRhdGUoJDApfSw3MTIzNzokMD0+e3ZkcF9zY3JlZW5fdXBkYXRlKCQwKX0sNzEyNjQ6JDA9Pnt2ZHBfc2NyZWVuX3VwZGF0ZSgkMCl9LDcxMjkxOiQwPT57cmV0dXJuIG1vZGVtX3JlYWQoJDApfSw3MTMxODooJDAsJDEpPT57bW9kZW1fd3JpdGUoJDAsJDEpfSw3MTM0MjooJDAsJDEpPT57cmV0dXJuIGNibV82NDk5X3JlYWQoJDAsJDEpfSw3MTM3NjooJDAsJDEpPT57Y2JtXzY0OTlfd3JpdGUoJDAsJDEpfX07ZnVuY3Rpb24gY2FsbFJ1bnRpbWVDYWxsYmFja3MoY2FsbGJhY2tzKXt3aGlsZShjYWxsYmFja3MubGVuZ3RoPjApe2NhbGxiYWNrcy5zaGlmdCgpKE1vZHVsZSl9fWZ1bmN0aW9uIF9fX2Fzc2VydF9mYWlsKGNvbmRpdGlvbixmaWxlbmFtZSxsaW5lLGZ1bmMpe2Fib3J0KFwiQXNzZXJ0aW9uIGZhaWxlZDogXCIrVVRGOFRvU3RyaW5nKGNvbmRpdGlvbikrXCIsIGF0OiBcIitbZmlsZW5hbWU/VVRGOFRvU3RyaW5nKGZpbGVuYW1lKTpcInVua25vd24gZmlsZW5hbWVcIixsaW5lLGZ1bmM/VVRGOFRvU3RyaW5nKGZ1bmMpOlwidW5rbm93biBmdW5jdGlvblwiXSl9dmFyIHJlYWRFbUFzbUFyZ3NBcnJheT1bXTtmdW5jdGlvbiByZWFkRW1Bc21BcmdzKHNpZ1B0cixidWYpe3JlYWRFbUFzbUFyZ3NBcnJheS5sZW5ndGg9MDt2YXIgY2g7YnVmPj49Mjt3aGlsZShjaD1IRUFQVThbc2lnUHRyKytdKXtidWYrPWNoIT0xMDUmYnVmO3JlYWRFbUFzbUFyZ3NBcnJheS5wdXNoKGNoPT0xMDU/SEVBUDMyW2J1Zl06SEVBUEY2NFtidWYrKz4+MV0pOysrYnVmfXJldHVybiByZWFkRW1Bc21BcmdzQXJyYXl9ZnVuY3Rpb24gcnVuRW1Bc21GdW5jdGlvbihjb2RlLHNpZ1B0cixhcmdidWYpe3ZhciBhcmdzPXJlYWRFbUFzbUFyZ3Moc2lnUHRyLGFyZ2J1Zik7cmV0dXJuIEFTTV9DT05TVFNbY29kZV0uYXBwbHkobnVsbCxhcmdzKX1mdW5jdGlvbiBfZW1zY3JpcHRlbl9hc21fY29uc3RfaW50KGNvZGUsc2lnUHRyLGFyZ2J1Zil7cmV0dXJuIHJ1bkVtQXNtRnVuY3Rpb24oY29kZSxzaWdQdHIsYXJnYnVmKX1mdW5jdGlvbiBfZW1zY3JpcHRlbl9tZW1jcHlfYmlnKGRlc3Qsc3JjLG51bSl7SEVBUFU4LmNvcHlXaXRoaW4oZGVzdCxzcmMsc3JjK251bSl9ZnVuY3Rpb24gZ2V0Q0Z1bmMoaWRlbnQpe3ZhciBmdW5jPU1vZHVsZVtcIl9cIitpZGVudF07cmV0dXJuIGZ1bmN9ZnVuY3Rpb24gd3JpdGVBcnJheVRvTWVtb3J5KGFycmF5LGJ1ZmZlcil7SEVBUDguc2V0KGFycmF5LGJ1ZmZlcil9ZnVuY3Rpb24gY2NhbGwoaWRlbnQscmV0dXJuVHlwZSxhcmdUeXBlcyxhcmdzLG9wdHMpe3ZhciB0b0M9e1wic3RyaW5nXCI6c3RyPT57dmFyIHJldD0wO2lmKHN0ciE9PW51bGwmJnN0ciE9PXVuZGVmaW5lZCYmc3RyIT09MCl7dmFyIGxlbj0oc3RyLmxlbmd0aDw8MikrMTtyZXQ9c3RhY2tBbGxvYyhsZW4pO3N0cmluZ1RvVVRGOChzdHIscmV0LGxlbil9cmV0dXJuIHJldH0sXCJhcnJheVwiOmFycj0+e3ZhciByZXQ9c3RhY2tBbGxvYyhhcnIubGVuZ3RoKTt3cml0ZUFycmF5VG9NZW1vcnkoYXJyLHJldCk7cmV0dXJuIHJldH19O2Z1bmN0aW9uIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpe2lmKHJldHVyblR5cGU9PT1cInN0cmluZ1wiKXtyZXR1cm4gVVRGOFRvU3RyaW5nKHJldCl9aWYocmV0dXJuVHlwZT09PVwiYm9vbGVhblwiKXJldHVybiBCb29sZWFuKHJldCk7cmV0dXJuIHJldH12YXIgZnVuYz1nZXRDRnVuYyhpZGVudCk7dmFyIGNBcmdzPVtdO3ZhciBzdGFjaz0wO2lmKGFyZ3Mpe2Zvcih2YXIgaT0wO2k8YXJncy5sZW5ndGg7aSsrKXt2YXIgY29udmVydGVyPXRvQ1thcmdUeXBlc1tpXV07aWYoY29udmVydGVyKXtpZihzdGFjaz09PTApc3RhY2s9c3RhY2tTYXZlKCk7Y0FyZ3NbaV09Y29udmVydGVyKGFyZ3NbaV0pfWVsc2V7Y0FyZ3NbaV09YXJnc1tpXX19fXZhciByZXQ9ZnVuYy5hcHBseShudWxsLGNBcmdzKTtmdW5jdGlvbiBvbkRvbmUocmV0KXtpZihzdGFjayE9PTApc3RhY2tSZXN0b3JlKHN0YWNrKTtyZXR1cm4gY29udmVydFJldHVyblZhbHVlKHJldCl9cmV0PW9uRG9uZShyZXQpO3JldHVybiByZXR9ZnVuY3Rpb24gY3dyYXAoaWRlbnQscmV0dXJuVHlwZSxhcmdUeXBlcyxvcHRzKXt2YXIgbnVtZXJpY0FyZ3M9IWFyZ1R5cGVzfHxhcmdUeXBlcy5ldmVyeSh0eXBlPT50eXBlPT09XCJudW1iZXJcInx8dHlwZT09PVwiYm9vbGVhblwiKTt2YXIgbnVtZXJpY1JldD1yZXR1cm5UeXBlIT09XCJzdHJpbmdcIjtpZihudW1lcmljUmV0JiZudW1lcmljQXJncyYmIW9wdHMpe3JldHVybiBnZXRDRnVuYyhpZGVudCl9cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGNjYWxsKGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsYXJndW1lbnRzLG9wdHMpfX12YXIgd2FzbUltcG9ydHM9e1wiYVwiOl9fX2Fzc2VydF9mYWlsLFwiYlwiOl9lbXNjcmlwdGVuX2FzbV9jb25zdF9pbnQsXCJjXCI6X2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZ307dmFyIGFzbT1jcmVhdGVXYXNtKCk7dmFyIF9fX3dhc21fY2FsbF9jdG9ycz1mdW5jdGlvbigpe3JldHVybihfX193YXNtX2NhbGxfY3RvcnM9TW9kdWxlW1wiYXNtXCJdW1wiZVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19pbml0PU1vZHVsZVtcIl9zeXNfaW5pdFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2luaXQ9TW9kdWxlW1wiX3N5c19pbml0XCJdPU1vZHVsZVtcImFzbVwiXVtcImZcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfY29uZmlnPU1vZHVsZVtcIl9zeXNfY29uZmlnXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfY29uZmlnPU1vZHVsZVtcIl9zeXNfY29uZmlnXCJdPU1vZHVsZVtcImFzbVwiXVtcImdcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfcmVzZXQ9TW9kdWxlW1wiX3N5c19yZXNldFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3Jlc2V0PU1vZHVsZVtcIl9zeXNfcmVzZXRcIl09TW9kdWxlW1wiYXNtXCJdW1wiaFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19leGVjPU1vZHVsZVtcIl9zeXNfZXhlY1wiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2V4ZWM9TW9kdWxlW1wiX3N5c19leGVjXCJdPU1vZHVsZVtcImFzbVwiXVtcImlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfZXhlY191cz1Nb2R1bGVbXCJfc3lzX2V4ZWNfdXNcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19leGVjX3VzPU1vZHVsZVtcIl9zeXNfZXhlY191c1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJqXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2V4PU1vZHVsZVtcIl9zeXNfZXhcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19leD1Nb2R1bGVbXCJfc3lzX2V4XCJdPU1vZHVsZVtcImFzbVwiXVtcImtcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfdmRwPU1vZHVsZVtcIl9zeXNfdmRwXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfdmRwPU1vZHVsZVtcIl9zeXNfdmRwXCJdPU1vZHVsZVtcImFzbVwiXVtcImxcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfa2V5X2Rvd249TW9kdWxlW1wiX3N5c19rZXlfZG93blwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2tleV9kb3duPU1vZHVsZVtcIl9zeXNfa2V5X2Rvd25cIl09TW9kdWxlW1wiYXNtXCJdW1wibVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19rZXlfdXA9TW9kdWxlW1wiX3N5c19rZXlfdXBcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19rZXlfdXA9TW9kdWxlW1wiX3N5c19rZXlfdXBcIl09TW9kdWxlW1wiYXNtXCJdW1wiblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19xdWlja19sb2FkPU1vZHVsZVtcIl9zeXNfcXVpY2tfbG9hZFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3F1aWNrX2xvYWQ9TW9kdWxlW1wiX3N5c19xdWlja19sb2FkXCJdPU1vZHVsZVtcImFzbVwiXVtcIm9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2U9TW9kdWxlW1wiX3N5c19pbnNlcnRfcm9tX2NhcnRkcmlnZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2luc2VydF9yb21fY2FydGRyaWdlPU1vZHVsZVtcIl9zeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIl09TW9kdWxlW1wiYXNtXCJdW1wicFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19tZW1fY3B1X3JkPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV9yZFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX21lbV9jcHVfcmQ9TW9kdWxlW1wiX3N5c19tZW1fY3B1X3JkXCJdPU1vZHVsZVtcImFzbVwiXVtcInFcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfbWVtX2NwdV93cj1Nb2R1bGVbXCJfc3lzX21lbV9jcHVfd3JcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19tZW1fY3B1X3dyPU1vZHVsZVtcIl9zeXNfbWVtX2NwdV93clwiXT1Nb2R1bGVbXCJhc21cIl1bXCJyXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX2pveXN0aWNrPU1vZHVsZVtcIl9zeXNfam95c3RpY2tcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19qb3lzdGljaz1Nb2R1bGVbXCJfc3lzX2pveXN0aWNrXCJdPU1vZHVsZVtcImFzbVwiXVtcInNcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfc2V0X2pveXN0aWNrX3R5cGU9TW9kdWxlW1wiX3N5c19zZXRfam95c3RpY2tfdHlwZVwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX3NldF9qb3lzdGlja190eXBlPU1vZHVsZVtcIl9zeXNfc2V0X2pveXN0aWNrX3R5cGVcIl09TW9kdWxlW1wiYXNtXCJdW1widFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19pbnNlcnRfdGFwZT1Nb2R1bGVbXCJfc3lzX2luc2VydF90YXBlXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfaW5zZXJ0X3RhcGU9TW9kdWxlW1wiX3N5c19pbnNlcnRfdGFwZVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJ1XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3JlbW92ZV90YXBlPU1vZHVsZVtcIl9zeXNfcmVtb3ZlX3RhcGVcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19yZW1vdmVfdGFwZT1Nb2R1bGVbXCJfc3lzX3JlbW92ZV90YXBlXCJdPU1vZHVsZVtcImFzbVwiXVtcInZcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfdGFwZV9wbGF5PU1vZHVsZVtcIl9zeXNfdGFwZV9wbGF5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfdGFwZV9wbGF5PU1vZHVsZVtcIl9zeXNfdGFwZV9wbGF5XCJdPU1vZHVsZVtcImFzbVwiXVtcIndcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfdGFwZV9zdG9wPU1vZHVsZVtcIl9zeXNfdGFwZV9zdG9wXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfdGFwZV9zdG9wPU1vZHVsZVtcIl9zeXNfdGFwZV9zdG9wXCJdPU1vZHVsZVtcImFzbVwiXVtcInhcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9zeXNfY2FzX3BvcnQ9TW9kdWxlW1wiX3N5c19jYXNfcG9ydFwiXT1mdW5jdGlvbigpe3JldHVybihfc3lzX2Nhc19wb3J0PU1vZHVsZVtcIl9zeXNfY2FzX3BvcnRcIl09TW9kdWxlW1wiYXNtXCJdW1wieVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfZXhyb209TW9kdWxlW1wiX3N5c19zZXRfZXhyb21cIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfZXhyb209TW9kdWxlW1wiX3N5c19zZXRfZXhyb21cIl09TW9kdWxlW1wiYXNtXCJdW1wielwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfY2JtXzY0OTlfbmJhbms9TW9kdWxlW1wiX3N5c19zZXRfY2JtXzY0OTlfbmJhbmtcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX3N5c19zZXRfY2JtXzY0OTlfbmJhbms9TW9kdWxlW1wiX3N5c19zZXRfY2JtXzY0OTlfbmJhbmtcIl09TW9kdWxlW1wiYXNtXCJdW1wiQVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OT1Nb2R1bGVbXCJfc3lzX3NldF9lbXVsYXRlX2NibV82NDk5XCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2VtdWxhdGVfY2JtXzY0OTk9TW9kdWxlW1wiX3N5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJCXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfc3lzX3NldF9leHRlcm5hbF9pcnE9TW9kdWxlW1wiX3N5c19zZXRfZXh0ZXJuYWxfaXJxXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9zeXNfc2V0X2V4dGVybmFsX2lycT1Nb2R1bGVbXCJfc3lzX3NldF9leHRlcm5hbF9pcnFcIl09TW9kdWxlW1wiYXNtXCJdW1wiQ1wiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZXJybm9fbG9jYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4oX19fZXJybm9fbG9jYXRpb249TW9kdWxlW1wiYXNtXCJdW1wiX19lcnJub19sb2NhdGlvblwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgc3RhY2tTYXZlPWZ1bmN0aW9uKCl7cmV0dXJuKHN0YWNrU2F2ZT1Nb2R1bGVbXCJhc21cIl1bXCJFXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBzdGFja1Jlc3RvcmU9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tSZXN0b3JlPU1vZHVsZVtcImFzbVwiXVtcIkZcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHN0YWNrQWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oc3RhY2tBbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJHXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O01vZHVsZVtcImNjYWxsXCJdPWNjYWxsO01vZHVsZVtcImN3cmFwXCJdPWN3cmFwO3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xyXG5cclxuXHJcbiAgcmV0dXJuIGVtc2NyaXB0ZW5fbW9kdWxlLnJlYWR5XHJcbn1cclxuKTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgZW1zY3JpcHRlbl9tb2R1bGU7IiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMy4yXG4gKiAyMDE2LTA2LTE2IDE4OjI1OjE5XG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogTUlUXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYgKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUsIGluZGVudDogNCwgbGF4YnJlYWs6IHRydWUsIGxheGNvbW1hOiB0cnVlLCBzbWFydHRhYnM6IHRydWUsIHBsdXNwbHVzOiB0cnVlICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvRmlsZVNhdmVyLmpzICovXG5cbnZhciBzYXZlQXMgPSBzYXZlQXMgfHwgKGZ1bmN0aW9uKHZpZXcpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXG5cdGlmICh0eXBlb2YgdmlldyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIC9NU0lFIFsxLTldXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhclxuXHRcdCAgZG9jID0gdmlldy5kb2N1bWVudFxuXHRcdCAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcblx0XHQsIGdldF9VUkwgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB2aWV3LlVSTCB8fCB2aWV3LndlYmtpdFVSTCB8fCB2aWV3O1xuXHRcdH1cblx0XHQsIHNhdmVfbGluayA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKVxuXHRcdCwgY2FuX3VzZV9zYXZlX2xpbmsgPSBcImRvd25sb2FkXCIgaW4gc2F2ZV9saW5rXG5cdFx0LCBjbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdHZhciBldmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIik7XG5cdFx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH1cblx0XHQsIGlzX3NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qodmlldy5IVE1MRWxlbWVudCkgfHwgdmlldy5zYWZhcmlcblx0XHQsIGlzX2Nocm9tZV9pb3MgPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgdGhyb3dfb3V0c2lkZSA9IGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHQodmlldy5zZXRJbW1lZGlhdGUgfHwgdmlldy5zZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhyb3cgZXg7XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cdFx0LCBmb3JjZV9zYXZlYWJsZV90eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxuXHRcdC8vIHRoZSBCbG9iIEFQSSBpcyBmdW5kYW1lbnRhbGx5IGJyb2tlbiBhcyB0aGVyZSBpcyBubyBcImRvd25sb2FkZmluaXNoZWRcIiBldmVudCB0byBzdWJzY3JpYmUgdG9cblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDEwMDAgKiA0MCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHQvLyBub3RlOiB5b3VyIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgVVRGLTE2IFUrRkVGRiB0byBFRiBCQiBCRlxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkVGRiksIGJsb2JdLCB7dHlwZTogYmxvYi50eXBlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmxvYjtcblx0XHR9XG5cdFx0LCBGaWxlU2F2ZXIgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHQvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xuXHRcdFx0dmFyXG5cdFx0XHRcdCAgZmlsZXNhdmVyID0gdGhpc1xuXHRcdFx0XHQsIHR5cGUgPSBibG9iLnR5cGVcblx0XHRcdFx0LCBmb3JjZSA9IHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGVcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgoaXNfY2hyb21lX2lvcyB8fCAoZm9yY2UgJiYgaXNfc2FmYXJpKSkgJiYgdmlldy5GaWxlUmVhZGVyKSB7XG5cdFx0XHRcdFx0XHQvLyBTYWZhcmkgZG9lc24ndCBhbGxvdyBkb3dubG9hZGluZyBvZiBibG9iIHVybHNcblx0XHRcdFx0XHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdXJsID0gaXNfY2hyb21lX2lvcyA/IHJlYWRlci5yZXN1bHQgOiByZWFkZXIucmVzdWx0LnJlcGxhY2UoL15kYXRhOlteO10qOy8sICdkYXRhOmF0dGFjaG1lbnQvZmlsZTsnKTtcblx0XHRcdFx0XHRcdFx0dmFyIHBvcHVwID0gdmlldy5vcGVuKHVybCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0XHRpZighcG9wdXApIHZpZXcubG9jYXRpb24uaHJlZiA9IHVybDtcblx0XHRcdFx0XHRcdFx0dXJsPXVuZGVmaW5lZDsgLy8gcmVsZWFzZSByZWZlcmVuY2UgYmVmb3JlIGRpc3BhdGNoaW5nXG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZm9yY2UpIHtcblx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuZWQgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBBcHBsZSBkb2VzIG5vdCBhbGxvdyB3aW5kb3cub3Blbiwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS9kb2N1bWVudGF0aW9uL1Rvb2xzL0NvbmNlcHR1YWwvU2FmYXJpRXh0ZW5zaW9uR3VpZGUvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzLmh0bWxcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdDtcblx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cblx0XHRcdGlmIChjYW5fdXNlX3NhdmVfbGluaykge1xuXHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmc19lcnJvcigpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIiwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiO1xuXG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lKTtcblx0XHR9O1xuXHR9XG5cblx0RlNfcHJvdG8uYWJvcnQgPSBmdW5jdGlvbigpe307XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9PSBudWxsKSkge1xuICBkZWZpbmUoXCJGaWxlU2F2ZXIuanNcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRfd2FzbV9pbnN0YW5jZSB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuY29uc3QgQVVESU9fQlVGU0laRSA9IDEwMjQ7ICAvLyBtdXN0IG1hdGNoIC5jXHJcblxyXG5sZXQgYXVkaW9fYnVmZmVyc19xdWV1ZTogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1ZGlvX2J1Zl9yZWFkeShwdHI6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgIGlmKCFhdWRpb19wbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICBsZXQgc3RhcnQgPSBwdHIgLyBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgIGxldCBidWZmZXIgPSBnZXRfd2FzbV9pbnN0YW5jZSgpLkhFQVBGMzIuc3ViYXJyYXkoc3RhcnQsc3RhcnQrc2l6ZSkgYXMgbnVtYmVyW107XHJcblxyXG4gICBhdWRpb19idWZmZXJzX3F1ZXVlLnB1c2goWyAuLi5idWZmZXIgXSk7ICAvLyBwdXNoIGEgY2xvbmVkIGNvcHlcclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFVRElPIEJVRkZFUiBUTyBCUk9XU0VSIEFVRElPICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuY29uc3QgYnVmZmVyU2l6ZSA9IEFVRElPX0JVRlNJWkU7XHJcblxyXG5sZXQgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHR8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5sZXQgc3BlYWtlclNvdW5kOiBTY3JpcHRQcm9jZXNzb3JOb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXVkaW9Db250ZXh0KCkge1xyXG4gICBhdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpOyAvLyBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTsgICBcclxuICAgc3BlYWtlclNvdW5kID0gYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCAxLCAxKTtcclxuXHJcbiAgIHNwZWFrZXJTb3VuZC5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZS5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XHJcblxyXG4gICAgICBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndhcm5pbmc6IGF1ZGlvIHF1ZXVlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB3YXJuaW5nOiBhdWRpbyBxdWV1ZSBpcyBnZXR0aW5nIGxvbmdlcjogJHthdWRpb19idWZmZXJzX3F1ZXVlLmxlbmd0aH1gKTtcclxuICAgICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IGF1ZGlvX2J1ZmZlcnNfcXVldWVbMF07XHJcbiAgICAgIGF1ZGlvX2J1ZmZlcnNfcXVldWUgPSBhdWRpb19idWZmZXJzX3F1ZXVlLnNsaWNlKDEpO1xyXG5cclxuICAgICAgZm9yKGxldCBpPTA7IGk8YnVmZmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgIG91dHB1dFtpXSA9IGJ1ZmZlcltpXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi8qXHJcbmxldCBjaDAgPSBbXTtcclxubGV0IGNoMSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY3NhdmUoKSB7XHJcbiAgIGNvbnN0IHdhdkRhdGEgPSB7XHJcbiAgICAgIHNhbXBsZVJhdGU6IDQ4MDAwLFxyXG4gICAgICBjaGFubmVsRGF0YTogWyBuZXcgRmxvYXQzMkFycmF5KGNoMCksIG5ldyBGbG9hdDMyQXJyYXkoY2gxKSBdXHJcbiAgIH07XHJcbiAgICAgXHJcbiAgIGNvbnN0IGJ1ZmZlciA9IGVuY29kZVN5bmMod2F2RGF0YSwgeyBiaXREZXB0aDogMTYsIGZsb2F0OiBmYWxzZSB9KTsgICAgICBcclxuICAgXHJcbiAgIGxldCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7ICAgXHJcbiAgIGNvbnN0IGZpbGVOYW1lID0gXCJjc2F2ZWQud2F2XCI7XHJcbiAgIHNhdmVBcyhibG9iLCBmaWxlTmFtZSk7XHJcbn1cclxuKi9cclxuXHJcbmxldCBhdWRpb19wbGF5aW5nOiBib29sZWFufHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb0F1ZGlvKCkge1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgY3JlYXRlQXVkaW9Db250ZXh0KCk7XHJcblxyXG4gICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICBzcGVha2VyU291bmQuY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICBhdWRpb19wbGF5aW5nID0gdHJ1ZTtcclxuICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcEF1ZGlvKCkge1xyXG4gICBpZihhdWRpb19wbGF5aW5nICE9PSB1bmRlZmluZWQgJiYgYXVkaW9fcGxheWluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZihzcGVha2VyU291bmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBpZihhdWRpb0NvbnRleHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBzcGVha2VyU291bmQuZGlzY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICBhdWRpb19wbGF5aW5nID0gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1ZGlvQ29udGV4dFJlc3VtZSgpIHtcclxuICAgaWYoYXVkaW9Db250ZXh0ID09PSB1bmRlZmluZWQpIGNyZWF0ZUF1ZGlvQ29udGV4dCgpO1xyXG4gICBpZihhdWRpb19wbGF5aW5nID09PSB1bmRlZmluZWQpIGdvQXVkaW8oKTtcclxuXHJcbiAgIGlmKHNwZWFrZXJTb3VuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgIGlmKGF1ZGlvQ29udGV4dCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICBpZihhdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XHJcbiAgICAgIGF3YWl0IGF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcclxuICAgICAgYXVkaW9fYnVmZmVyc19xdWV1ZSA9IFtdO1xyXG4gICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJCU0Nvbm5lY3RvciB7XHJcbiAgIGFkZHJlc3MgPSBcIlwiOyAgICAgXHJcbiAgIHByb3RvY29sOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICB3c19jb25uZWN0aW9uOiBXZWJTb2NrZXQgfCB1bmRlZmluZWQ7ICAgICBcclxuICAgXHJcbiAgIG9uX2Vycm9yID0gKGVycjogRXZlbnQpPT4ge307XHJcbiAgIG9uX29wZW4gPSAoKT0+IHt9O1xyXG4gICBvbl9jbG9zZSA9ICgpPT4ge307XHJcbiAgIG9uX2RhdGEgPSAoZGF0YTogVWludDhBcnJheSk9PiB7fTtcclxuXHJcbiAgIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICBcclxuICAgY29ubmVjdCgpIHtcclxuICAgICAgLy8gZW1wdHkgc3RyaW5nIG1lYW5zIG5vIHByb3RvY29sICh1bmRlZmluZWQpXHJcbiAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgPT09ICcnID8gdW5kZWZpbmVkIDogdGhpcy5wcm90b2NvbDtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5hZGRyZXNzfWAscHJvdG9jb2wpO1xyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24uYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbmVycm9yID0gKGVycik9PntcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBjb25uZWN0aW9uIGVycm9yJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMub25fZXJyb3IoZXJyKTtcclxuICAgICAgfTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGVkJyk7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5vbl9vcGVuKCk7XHJcbiAgICAgIH07XHJcbiAgIFxyXG4gICAgICB0aGlzLndzX2Nvbm5lY3Rpb24ub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ3dlYnNvY2tldCBkaXNjb25uZWN0ZWQnKTsgICAgICAgICBcclxuICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5vbl9jbG9zZSgpO1xyXG4gICAgICB9OyAgICAgIFxyXG5cclxuICAgICAgdGhpcy53c19jb25uZWN0aW9uLm9ubWVzc2FnZSA9IChlKSA9PiB7ICAgICAgXHJcbiAgICAgICAgIGlmIChlLmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uX2RhdGEobmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7IFxyXG4gICAgICAgICAgICBsZXQgbCA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYEFDSUEucmVjZWl2ZV9kYXRhKCR7SlNPTi5zdHJpbmdpZnkobCl9KTtgKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHdlYnNvY2tldCBSZWNlaXZlZCBzdHJpbmc6ICcke2UuZGF0YX0nYCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgc2VuZF9kYXRhX3RvX2JicyhkYXRhOiBudW1iZXJbXSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy53c19jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IHRoaXMud3NfY29ubmVjdGlvbi5PUEVOKSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMud3NfY29ubmVjdGlvbi5zZW5kKGJ5dGVzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJzb2NrZXQgZGlzY29ubmVjdGVkLCBjYW4ndCBzZW5kIVwiKTtcclxuICAgICAgfVxyXG4gICB9ICAgXHJcbiAgIFxyXG4gICBjbG9zZSgpIHtcclxuICAgICAgaWYodGhpcy53c19jb25uZWN0aW9uICE9PSB1bmRlZmluZWQpIHsgICAgICAgICBcclxuICAgICAgICAgdGhpcy53c19jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8vIGhhbmRsZXMgaW50ZXJhY3Rpb24gYmV0d2VlbiBicm93c2VyIGFuZCBlbXVsYXRpb24gXHJcblxyXG5pbXBvcnQgeyBnb0F1ZGlvLCBzdG9wQXVkaW8sIGF1ZGlvQ29udGV4dFJlc3VtZSB9IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5sZXQgYXNwZWN0ID0gMS4zO1xyXG5cclxuZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgICBcclxuXHJcbiAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gKHdpbmRvdy5pbm5lckhlaWdodCphc3BlY3QpKVxyXG4gICB7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSBgJHthc3BlY3QqMTAwfXZtaW5gO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2bWluXCI7XHJcbiAgIH1cclxuICAgZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuICAge1xyXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggID0gXCIxMDB2bWF4XCI7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHsoMS9hc3BlY3QpKjEwMH12bWF4YDtcclxuICAgfVxyXG4gICBlbHNlXHJcbiAgIHtcclxuICAgICAgY2FudmFzLnN0eWxlLndpZHRoICA9IFwiMTAwdm1pblwiO1xyXG4gICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7KDEvYXNwZWN0KSoxMDB9dm1pbmA7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHRydWVIZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvRnVsbFNjcmVlbigpIFxyXG57XHJcbiAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpITsgIFxyXG4gICBjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4oKTsgXHJcbiAgIG9uUmVzaXplKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBnb0Z1bGxTY3JlZW4pO1xyXG5cclxub25SZXNpemUoKTtcclxuXHJcbi8vICoqKiogc2F2ZSBzdGF0ZSBvbiBjbG9zZSAqKioqXHJcblxyXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgIFxyXG59O1xyXG5cclxuLy8gKioqKiB2aXNpYmlsaXR5IGNoYW5nZSAqKioqXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgIGlmKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJoaWRkZW5cIilcclxuICAge1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgIHN0b3BBdWRpbygpO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIilcclxuICAgeyAgICAgIFxyXG4gICAgICBjNjQuZ28oKTtcclxuICAgICAgZ29BdWRpbygpO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiBkcmFnICYgZHJvcCAqKioqXHJcblxyXG5jb25zdCBkcm9wWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbi8vIE9wdGlvbmFsLiAgIFNob3cgdGhlIGNvcHkgaWNvbiB3aGVuIGRyYWdnaW5nIG92ZXIuICBTZWVtcyB0byBvbmx5IHdvcmsgZm9yIGNocm9tZS5cclxuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgZS5kYXRhVHJhbnNmZXIhLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbn0pO1xyXG5cclxuLy8gR2V0IGZpbGUgZGF0YSBvbiBkcm9wXHJcbmRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcclxuICAgYXVkaW9Db250ZXh0UmVzdW1lKCk7XHJcblxyXG4gICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIhLmZpbGVzOyAvLyBBcnJheSBvZiBhbGwgZmlsZXNcclxuXHJcbiAgIGZvcihsZXQgaT0wOyBpPGZpbGVzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBsZXQgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOyAgICAgIFxyXG4gICAgICByZWFkZXIub25sb2FkID0gZTIgPT4gZHJvcHBlZEZpbGUoZmlsZS5uYW1lLCBuZXcgVWludDhBcnJheShlMi50YXJnZXQhLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7IFxyXG4gICB9XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZHJvcHBlZEZpbGUob3V0TmFtZTogc3RyaW5nLCBieXRlczogVWludDhBcnJheSkge1xyXG4gICBjb25zdCBwcmcgPSAvXFwucHJnJC9pO1xyXG4gICBpZihwcmcudGVzdChvdXROYW1lKSkgeyAgICBcclxuICAgICAgYXdhaXQgbG9hZEJ5dGVzKGJ5dGVzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBNNjgyMSB9IGZyb20gXCIuL202ODIxXCI7XHJcbmltcG9ydCB7IE02ODUwIH0gZnJvbSBcIi4vbTY4NTBcIjtcclxuXHJcbmltcG9ydCB7IEJCU0Nvbm5lY3RvciB9IGZyb20gXCIuLi9iYnNfY29ubmVjdG9yXCI7XHJcblxyXG5sZXQgUElBID0gbmV3IE02ODIxKCk7XHJcbmxldCBBQ0lBID0gbmV3IE02ODUwKCk7XHJcblxyXG5leHBvcnQgbGV0IHZpZGVvdGVsID0gbmV3IEJCU0Nvbm5lY3RvcigpO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLkFDSUEgPSBBQ0lBO1xyXG5cclxudmlkZW90ZWwub25fZXJyb3IgPSAoKT0+e1xyXG4gICAvLyBzZXRzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDE7XHJcbiAgIGNvbnNvbGUubG9nKFwiTk8gQ0FSUklFUlwiKTtcclxufTtcclxuXHJcbnZpZGVvdGVsLm9uX2Nsb3NlID0gKCk9PntcclxuICAgLy8gc2V0cyBOTyBDQVJSSUVSXHJcbiAgIEFDSUEuU1RBVFVTX05PX0NBUlJJRVIgPSAxO1xyXG4gICBjb25zb2xlLmxvZyhcIk5PIENBUlJJRVJcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9vcGVuID0gKCk9PntcclxuICAgLy8gY2xlYXJzIE5PIENBUlJJRVJcclxuICAgQUNJQS5TVEFUVVNfTk9fQ0FSUklFUiA9IDA7XHJcbiAgIFBJQS5QQSAmPSAxMjc7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ0FSUklFUiBERVRFQ1RcIik7XHJcbn07XHJcblxyXG52aWRlb3RlbC5vbl9kYXRhID0gKGRhdGEpPT57XHJcbiAgIEFDSUEucmVjZWl2ZV9kYXRhKGRhdGEpO1xyXG59XHJcblxyXG5BQ0lBLnRyYW5zbWl0X2RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICB2aWRlb3RlbC5zZW5kX2RhdGFfdG9fYmJzKFtkYXRhXSk7XHJcbn1cclxuXHJcblBJQS5hZnRlcmRpYWx0b25lID0gKCk9PnZpZGVvdGVsLmNvbm5lY3QoKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIHRoZSB3aG9sZSBzeXN0ZW0gaXMgcmVzZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3Jlc2V0KClcclxue1xyXG4gICBQSUEucmVzZXQoKTsgXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGxlZCBmcm9tIEM2NCB3aGVuIENQVSByZWFkcyBJL08gaW4gdGhlIHJhbmdlICRERTAwLURGRkZcclxuZXhwb3J0IGZ1bmN0aW9uIGNibV82NDk5X3JlYWQoYWRkcjogbnVtYmVyLCB0aWNrczogbnVtYmVyKVxyXG57ICAgXHJcbiAgIGlmKGFkZHIgPCAweERGMDApIHJldHVybiBQSUEucmVhZChhZGRyKTtcclxuICAgZWxzZSAgICAgICAgICAgICAgcmV0dXJuIEFDSUEuY3B1X3JlYWQoYWRkciwgdGlja3MpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIEkvTyBpbiB0aGUgcmFuZ2UgJERFMDAtREZGRlxyXG5leHBvcnQgZnVuY3Rpb24gY2JtXzY0OTlfd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkciA8IDB4REYwMCkgUElBLndyaXRlKGFkZHIsIGRhdGEpO1xyXG4gICBlbHNlICAgICAgICAgICAgICBBQ0lBLmNwdV93cml0ZShhZGRyLCBkYXRhKTtcclxufVxyXG5cclxuIiwiLypcclxuTm90ZSB2YXJpZTpcclxuXHJcblBJQSA9IE1vdG9yb2xhIDY4MjFcclxuICAgRW5hYmxlID0gY3B1IGNsb2NrXHJcbiAgIC9SVyA9IGNwdSAvUldcclxuICAgL1JFU0VUID0gY3B1IC9SRVNFVFxyXG4gICBDUzAgPSBzZW1wcmUgcG9zdG8gYSAxIChWQ0MpXHJcbiAgIENTMSA9IHNlbXByZSBwb3N0byBhIDEgKFZDQylcclxuICAgL0NTMiA9IC9JTzEgKGNwdSBJL08pIHJhbmdlICRERTAwLSRERUZGLlxyXG4gICBSUzAsUlMxID0gW0ExOkEwXVxyXG4gICAvSVJRQSwvSVJRQiA9IC9JUlEgY3B1LCBjbGVhcmVkIGJ5IHJlYWRpbmcgZGF0YSByZWdpc3RlclxyXG4gICBDQTEgPSAoaW50ZXJydXB0IGlucHV0KSBzZWduYWxlIGRpIFJJTkdcclxuICAgQ0IxID0gKGludGVycnVwdCBpbnB1dCkgMCAoR05EKVxyXG4gICBDQTIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBpbiBBMTQgZGVsbGEgcm9tIGludGVybmEgKGJhbmsgc3dpdGNoaW5nKVxyXG4gICBDQjIgPSAoY29uZmlndXJhdG8gY29tZSBvdXRwdXQpIHBlcm1ldHRlIGRpIHN3aXRjaGFyZSBpbCBwaW4gRVhST00gKGNhcnQgb2ZmKVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBoZXggfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNNjgyMSB7XHJcbiAgIENSQSA9IDA7XHJcbiAgIENSQiA9IDA7XHJcblxyXG4gICBQQSA9IDA7XHJcbiAgIFBCID0gMDtcclxuXHJcbiAgIEREUkEgPSAwO1xyXG4gICBERFJCID0gMDtcclxuXHJcbiAgIC8vIGRpYWx0b25lIGRldGVjdGlvblxyXG4gICBwYjVfdGltZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgYWZ0ZXJkaWFsdG9uZSA9ICgpPT57fTtcclxuXHJcbiAgIHJpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgaWYodmFsdWUpIHRoaXMuQ1JBID0gdGhpcy5DUkEgfCAwYjEwMDAwMDAwOyBcclxuICAgICAgZWxzZSAgICAgIHRoaXMuQ1JBID0gdGhpcy5DUkEgJiAwYjAxMTExMTExOyBcclxuICAgICAgLy9jNjQuc2V0X2V4dGVybmFsX2lycSh2YWx1ZSk7XHJcbiAgIH1cclxuIFxyXG4gICByZXNldCgpIHtcclxuICAgICAgdGhpcy5DUkEgPSAwO1xyXG4gICAgICB0aGlzLkNSQiA9IDA7ICAgIFxyXG4gICAgICB0aGlzLlBBID0gMDtcclxuICAgICAgdGhpcy5QQiA9IDA7XHJcbiAgICAgIHRoaXMuRERSQSA9IDA7XHJcbiAgICAgIHRoaXMuRERSQiA9IDA7XHJcbiAgICAgIGM2NC5zZXRfY2JtXzY0OTlfbmJhbmsoMSk7XHJcbiAgICAgIGRlYnVnKGBQSUE6IFJFU0VUYCk7ICAgIFxyXG4gICB9XHJcbiBcclxuICAgcmVhZChhZGRyOiBudW1iZXIpIHtcclxuICAgICAgbGV0IENSQTIgPSAodGhpcy5DUkEgPj4gMikgJiAxO1xyXG4gICAgICBsZXQgQ1JCMiA9ICh0aGlzLkNSQiA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAzO1xyXG4gICAgICBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBBID0gJCR7aGV4KHRoaXMuUEEsMil9YCk7IFxyXG4gICAgICAgICB0aGlzLkNSQSA9IHRoaXMuQ1JBICYgMGIwMDExMTExMTsgLy8gY2xlYXIgaW50ZXJydXB0IGZsYWdcclxuICAgICAgICAgcmV0dXJuIHRoaXMuUEE7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMDAgJiYgQ1JBMiA9PT0gMCkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBERFJBID0gJCR7aGV4KHRoaXMuRERSQSwyKX1gKTsgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIHRoaXMuRERSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMSkgeyBcclxuICAgICAgICAgZGVidWcoYFBJQTogcmVhZCBDUkEgPSAkJHtoZXgodGhpcy5DUkEsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkNSQTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB7IFxyXG4gICAgICAgICBkZWJ1ZyhgUElBOiByZWFkIFBCID0gJCR7aGV4KHRoaXMuUEIsMil9YCk7ICAgICAgICBcclxuICAgICAgICAgdGhpcy5DUkIgPSB0aGlzLkNSQiAmIDBiMDAxMTExMTE7IC8vIGNsZWFyIGFsc28gaW50ZXJydXB0IGZsYWcgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLlBCOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgRERSQiA9ICQke2hleCh0aGlzLkREUkIsMil9YCk7ICAgICAgICAgXHJcbiAgICAgICAgIHJldHVybiB0aGlzLkREUkI7IFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoUlMgPT09IDBiMTEpIHsgXHJcbiAgICAgICAgIGRlYnVnKGBQSUE6IHJlYWQgQ1JCID0gJCR7aGV4KHRoaXMuQ1JCLDIpfWApOyAgICAgICAgIFxyXG4gICAgICAgICByZXR1cm4gdGhpcy5DUkI7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuIFxyXG4gICB3cml0ZShhZGRyOiBudW1iZXIsIGRhdGE6IG51bWJlcikge1xyXG4gICAgICBsZXQgQ1JBMiA9ICh0aGlzLkNSQSA+PiAyKSAmIDE7XHJcbiAgICAgIGxldCBDUkIyID0gKHRoaXMuQ1JCID4+IDIpICYgMTtcclxuICAgICAgbGV0IFJTID0gYWRkciAmIDM7XHJcbiAgICAgICAgICAgaWYoUlMgPT09IDBiMDEpIHRoaXMud3JpdGVfQ1JBKGRhdGEpO1xyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjExKSB0aGlzLndyaXRlX0NSQihkYXRhKTtcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIwMCAmJiBDUkEyID09PSAxKSB0aGlzLndyaXRlX1BBKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjAwICYmIENSQTIgPT09IDApIHRoaXMud3JpdGVfRERSQShkYXRhKTsgICAgICBcclxuICAgICAgZWxzZSBpZihSUyA9PT0gMGIxMCAmJiBDUkIyID09PSAxKSB0aGlzLndyaXRlX1BCKGRhdGEpOyAgICAgIFxyXG4gICAgICBlbHNlIGlmKFJTID09PSAwYjEwICYmIENSQjIgPT09IDApIHRoaXMud3JpdGVfRERSQihkYXRhKTsgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfQ1JBKGRhdGE6IG51bWJlcikgeyAgIFxyXG4gICAgICB0aGlzLkNSQSA9IGRhdGE7XHJcbiAgICAgIC8vIGJhbmsgc3dpdGNoaW5nXHJcbiAgICAgIGlmKGRhdGEgJiAwYjAwMTEwMDAwKSB7XHJcbiAgICAgICAgIGxldCBiYW5rID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2NibV82NDk5X25iYW5rKGJhbmspOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogUk9NIGJhbmsgc3dpdGNoIHRvICR7YmFua31gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICB3cml0ZV9DUkIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuQ1JCID0gZGF0YTtcclxuICAgICAgLy8gRVhST00gcGluIHRyaWdnZXJcclxuICAgICAgaWYoZGF0YSAmIDBiMDAxMTAwMDApIHtcclxuICAgICAgICAgbGV0IGV4cm9tID0gKGRhdGEgPj4gMykgJiAxO1xyXG4gICAgICAgICBjNjQuc2V0X2V4cm9tKCEhZXhyb20pOyAgICAgICAgIFxyXG4gICAgICAgICBkZWJ1ZyhgNjQ5OTogRVhST00gc3dpdGNoIHRvICR7ISFleHJvbX1gKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgQ1JCIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9ICAgXHJcblxyXG4gICB3cml0ZV9ERFJBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLkREUkEgPSBkYXRhO1xyXG4gICAgICBkZWJ1ZyhgUElBOiBzZXQgRERSQSB0byBiaW5hcnkgJHtkYXRhLnRvU3RyaW5nKDE2KX1gKTsgICAgICAgICBcclxuICAgfVxyXG5cclxuICAgd3JpdGVfRERSQihkYXRhOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy5ERFJCID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IEREUkIgdG8gYmluYXJ5ICR7ZGF0YS50b1N0cmluZygxNil9YCk7ICAgICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHdyaXRlX1BBKGRhdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLlBBID0gZGF0YTtcclxuICAgICAgZGVidWcoYFBJQTogc2V0IFBBIHRvICQke2hleChkYXRhLDIpfWApOyAgICAgICAgIFxyXG4gICB9XHJcbiBcclxuICAgd3JpdGVfUEIoZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIC8vIGRpYWx0b25lIGRldGVjdGlvbiBzdGFydHMgYmJzIGRlbGF5ZWRcclxuICAgICAgbGV0IFBCNSA9ICh0aGlzLlBCID4+IDUpICYgMTtcclxuICAgICAgbGV0IG9sZF9QQjUgPSAoZGF0YSA+PiA1KSAmIDE7XHJcbiAgICAgIFxyXG4gICAgICBpZihQQjUgPT09IDAgJiYgb2xkX1BCNSA9PT0gMSkge1xyXG4gICAgICAgICAvLyBjYW5jZWwgb2xkIHRpbWVyXHJcbiAgICAgICAgIGlmKHRoaXMucGI1X3RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5wYjVfdGltZXIpO1xyXG4gICAgICAgICB0aGlzLnBiNV90aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZnRlcmRpYWx0b25lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGI1X3RpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9LCAzMDAwKSBhcyBhbnkgYXMgbnVtYmVyO1xyXG4gICAgICAgICBkZWJ1ZyhcIlBJQTogZGlhbGluZy4uLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoKHRoaXMuUEIgJiAxMjgpICE9PSAoZGF0YSAmIDEyOCkpIHtcclxuICAgICAgICAgLy8gUEI3IGNoYW5nZWRcclxuICAgICAgICAgZGVidWcoYCoqKioqKioqIFBCNzogJHsoZGF0YSAmIDEyOCk+Pjd9YCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5QQiA9IGRhdGE7XHJcbiAgICAgIGRlYnVnKGBQSUE6IHNldCBQQiB0byAkJHtoZXgoZGF0YSwyKX1gKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobTogc3RyaW5nKSB7XHJcbiAgIC8vY29uc29sZS5sb2cobSk7XHJcbn1cclxuICIsIi8qXHJcbkFDSUEgPSBtb3Rvcm9sYSA2ODUwXHJcbiAgICBDUzIgPSAvSU8yIChjcHUgSS9PKSByYW5nZSAkREYwMC0kREZGRi4gICBcclxuXHJcbjY4NTAgc3RhdHVzIHJlZ2lzdGVyXHJcbiAgIDAgLSByZWNlaXZlIGJ1ZmZlciBmdWxsIFxyXG4gICAxIC0gdHJhbnNtaXQgYnVmZmVyIGVtcHR5XHJcbiAgIDIgLSBubyBjYXJyaWVyXHJcbiAgIDMgLSAvY2xlYXIgdG8gc2VuZFxyXG4gICA0IC0gZnJhbWluZyBlcnJvclxyXG4gICA1IC0gcmVjZWl2ZXIgb3ZlcnJ1blxyXG4gICA2IC0gcGFyaXR5IGVycm9yXHJcbiAgIDcgLSAvSVJRXHJcblxyXG42ODUwIGNvbnRyb2wgcmVnaXN0ZXJcclxuICAgQ1IxfENSMCA9IDAwIG5vIGRpdmlkZVxyXG4gICAgICAgICAgICAgMDEgZGl2aWRlIGJ5IDE2XHJcbiAgICAgICAgICAgICAxMCBkaXZpZGUgYnkgNjRcclxuICAgICAgICAgICAgIDExIG1hc3RlciByZXNldCBcclxuICAgIFxyXG4gICAgQ1I0fENSM3xDUjIgPSBiaXQvcGFyaXR5L3N0b3AgYml0XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgU3BlZWRMaW1pdGVyIH0gZnJvbSBcIi4vc3BlZWRfbGltaXRlclwiO1xyXG5cclxuY29uc3QgY29uZmlnX2JpdHMgPSBbXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMiB9LFxyXG4gICAgeyBiaXRzOiA3LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogNywgcGFyaXR5OiBcImV2ZW5cIiwgc3RvcF9iaXRzOiAxIH0sXHJcbiAgICB7IGJpdHM6IDcsIHBhcml0eTogXCJvZGRcIiAsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwibm9uZVwiLCBzdG9wX2JpdHM6IDIgfSxcclxuICAgIHsgYml0czogOCwgcGFyaXR5OiBcIm5vbmVcIiwgc3RvcF9iaXRzOiAxIH0sXHJcbiAgICB7IGJpdHM6IDgsIHBhcml0eTogXCJldmVuXCIsIHN0b3BfYml0czogMSB9LFxyXG4gICAgeyBiaXRzOiA4LCBwYXJpdHk6IFwib2RkXCIgLCBzdG9wX2JpdHM6IDEgfVxyXG5dO1xyXG5cclxuY29uc3QgY2xvY2tfZGl2aWRlciA9IFsgXCJub25lXCIsIFwiMTZcIiwgXCI2NFwiIF07XHJcblxyXG5leHBvcnQgY2xhc3MgTTY4NTBcclxueyAgIFxyXG4gICBDT05UUk9MID0gMDtcclxuICAgVFJBTlNNSVRfREFUQSA9IDA7IFxyXG4gICBSRUNFSVZFX0RBVEEgPSAwOyAgXHJcblxyXG4gICAvLyBzdGF0dXMgcmVnaXN0ZXIgYml0c1xyXG4gICBTVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPSAwO1xyXG4gICBTVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPSAxO1xyXG4gICBTVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPSAxO1xyXG4gICBTVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPSAwO1xyXG4gICBTVEFUVVNfRlJBTUlOR19FUlJPUiAgICAgPSAwO1xyXG4gICBTVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPSAwO1xyXG4gICBTVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPSAwO1xyXG4gICBTVEFUVVNfSVJRICAgICAgICAgICAgICAgPSAwOyAgIFxyXG5cclxuICAgYnVmZmVyID0gbmV3IFNwZWVkTGltaXRlcigpO1xyXG4gICAgICAgICBcclxuICAgZ2V0X3N0YXR1c19ieXRlKHRpY2tzOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCA9IHRoaXMuYnVmZmVyLmdldF9zdGF0dXModGlja3MpO1xyXG4gICAgICBcclxuICAgICAgbGV0IHN0YXR1cyA9IFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCAgICAgPDwgMCkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfVFJBTlNNSVRURVJfRU1QVFkgPDwgMSkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPDwgMikgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfQ0xFQVJfVE9fU0VORCAgICAgPDwgMykgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfRlJBTUlOR19FUlJPUiAgICAgPDwgNCkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPDwgNSkgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfUEFSSVRZX0VSUk9SICAgICAgPDwgNikgfFxyXG4gICAgICAgICAodGhpcy5TVEFUVVNfSVJRICAgICAgICAgICAgICAgPDwgNyk7ICAgXHJcbiAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgIH1cclxuXHJcbiAgIGNwdV9yZWFkKGFkZHI6IG51bWJlciwgdGlja3M6IG51bWJlcikge1xyXG4gICAgICBsZXQgUlMgPSBhZGRyICYgMTtcclxuICAgICAgaWYoUlMgPT09IDApIHtcclxuICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldF9zdGF0dXNfYnl0ZSh0aWNrcyk7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7ICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuZ2V0X3N0YXR1c19ieXRlKHRpY2tzKTtcclxuICAgICAgICAgaWYodGhpcy5TVEFUVVNfUkVDRUlWRVJfRlVMTCkge1xyXG4gICAgICAgICAgICB0aGlzLlJFQ0VJVkVfREFUQSA9IHRoaXMuYnVmZmVyLmdldF9ieXRlKHRpY2tzKTsgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcy5SRUNFSVZFX0RBVEE7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY3B1X3dyaXRlKGFkZHI6IG51bWJlciwgZGF0YTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBSUyA9IGFkZHIgJiAxO1xyXG4gICAgICBpZihSUyA9PT0gMCkge1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogc2V0IGNvbnRyb2wgPSAoJHtkYXRhLnRvU3RyaW5nKDIpfSlgKTtcclxuICAgICAgICAgdGhpcy5DT05UUk9MID0gZGF0YTtcclxuXHJcbiAgICAgICAgIGxldCBDUjEwICA9ICh0aGlzLkNPTlRST0wgJiAwYjAwMDAwMDExKTtcclxuICAgICAgICAgbGV0IENSNDMyID0gKHRoaXMuQ09OVFJPTCAmIDBiMDAwMTExMDApID4+IDI7XHJcbiAgICAgICAgIGxldCBDUjY1ICA9ICh0aGlzLkNPTlRST0wgJiAwYjAxMTAwMDAwKSA+PiA1O1xyXG4gICAgICAgICBsZXQgQ1I3ICAgPSAodGhpcy5DT05UUk9MICYgMGIxMDAwMDAwMCkgPj4gNztcclxuXHJcbiAgICAgICAgIC8vIG1hc3RlciByZXNldFxyXG4gICAgICAgICBpZihDUjEwID09PSAwYjExKSB7XHJcbiAgICAgICAgICAgIGRlYnVnKGBBQ0lBOiBtYXN0ZXIgUkVTRVRgKTtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXIucmVzZXQoKTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLlRSQU5TTUlUX0RBVEEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlJFQ0VJVkVfREFUQSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19SRUNFSVZFUl9GVUxMICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgICAgICAgIC8vdGhpcy5TVEFUVVNfTk9fQ0FSUklFUiAgICAgICAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19DTEVBUl9UT19TRU5EICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0ZSQU1JTkdfRVJST1IgICAgID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TVEFUVVNfUkVDRUlWRVJfT1ZFUlJVTiAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNUQVRVU19QQVJJVFlfRVJST1IgICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuU1RBVFVTX0lSUSAgICAgICAgICAgICAgID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1ZyhgQUNJQTogY2xvY2sgZGl2aWRlIGJ5ICR7Y2xvY2tfZGl2aWRlcltDUjEwXX1gKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgbGV0IHsgYml0cywgcGFyaXR5LCBzdG9wX2JpdHMgfSA9IGNvbmZpZ19iaXRzW0NSNDMyXTtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IGJpdCBjb25maWc6ICR7Yml0c30gYml0cy9wYXJpdHkgJHtwYXJpdHl9L3N0b3AgYml0cyR7c3RvcF9iaXRzfWApO1xyXG4gICAgICAgICBkZWJ1ZyhgQUNJQTogQ1I2fDUgPSAke0NSNjUudG9TdHJpbmcoMil9YCk7XHJcbiAgICAgICAgIGRlYnVnKGBBQ0lBOiBDUjcgPSAke0NSN31gKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZGVidWcoYEFDSUE6IHNldCB0cmFuc21pdCBkYXRhID0gKCR7ZGF0YX0pYCk7XHJcbiAgICAgICAgIHRoaXMuVFJBTlNNSVRfREFUQSA9IGRhdGE7XHJcbiAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMDtcclxuICAgICAgICAgdGhpcy50cmFuc21pdF9kYXRhKHRoaXMuVFJBTlNNSVRfREFUQSk7XHJcbiAgICAgICAgIHRoaXMuU1RBVFVTX1RSQU5TTUlUVEVSX0VNUFRZID0gMTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvLyBleHRlcm5hbCB3b3JsZCBpbnRlcmZhY2VcclxuXHJcbiAgIC8vIGNhbGxlZCBmcm9tIEJCUyBjb25uZWN0b3JcclxuICAgcmVjZWl2ZV9kYXRhKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgdGhpcy5idWZmZXIucmVjZWl2ZV9kYXRhKGRhdGEpOyAgICAgICAgICAgIFxyXG4gICAgICBkZWJ1ZyhgQUNJQTogcmVjZWl2ZWQgJHtkYXRhLmxlbmd0aH0gYnl0ZXNgKTtcclxuICAgfVxyXG5cclxuICAgLy8gc2VuZCBkYXRhIHRvIEJCUyBjb25uZWN0b3JcclxuICAgdHJhbnNtaXRfZGF0YSA9IChkYXRhOiBudW1iZXIpPT57fTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobTogc3RyaW5nKSB7XHJcbiAgIC8vY29uc29sZS5sb2cobSk7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBTcGVlZExpbWl0ZXIge1xyXG5cclxuICAgIHJlY2VpdmVfYnVmZmVyOiBudW1iZXJbXSA9IFtdOyAgXHJcbiAgICB0aWNrcyA9IDA7XHJcbiAgICBtYXhfY291bnQgPSA5ODUyNDggLyAoMTIwMCAvIDkpOyAvLyAxMjAwIGJhdWQgICAgICAgXHJcbiBcclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgdGhpcy5yZWNlaXZlX2J1ZmZlciA9IFtdOyAgICAgICAgIFxyXG4gICAgfVxyXG4gXHJcbiAgICByZWNlaXZlX2RhdGEoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgZGF0YS5mb3JFYWNoKGU9PnRoaXMucmVjZWl2ZV9idWZmZXIucHVzaChlKSk7ICAgXHJcbiAgICB9IFxyXG4gXHJcbiAgICBnZXRfc3RhdHVzKHRpY2tzOiBudW1iZXIpIHsgICAgICBcclxuICAgICAgIGxldCBkaWZmID0gdGlja3MgLSB0aGlzLnRpY2tzOyAgICAgICAgICAgIFxyXG4gICAgICAgaWYoZGlmZiA8IHRoaXMubWF4X2NvdW50KSByZXR1cm4gMDsgICAgICAgICAgICBcclxuICAgICAgIHJldHVybiB0aGlzLnJlY2VpdmVfYnVmZmVyLmxlbmd0aCA9PT0gMCA/IDAgOiAxO1xyXG4gICAgfVxyXG4gXHJcbiAgICBnZXRfYnl0ZSh0aWNrczogbnVtYmVyKSB7XHJcbiAgICAgICB0aGlzLnRpY2tzID0gdGlja3M7XHJcbiAgICAgICBsZXQgZGF0YSA9IHRoaXMucmVjZWl2ZV9idWZmZXJbMF07XHJcbiAgICAgICB0aGlzLnJlY2VpdmVfYnVmZmVyID0gdGhpcy5yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gfVxyXG4gXHJcbiAiLCJpbXBvcnQgZW1zY3JpcHRlbl9tb2R1bGUgZnJvbSBcIi4uL2Vtc2NyaXB0ZW5fbW9kdWxlXCI7XHJcbmltcG9ydCB7IG9uZUZyYW1lIH0gZnJvbSBcIi4vZW11bGF0b3JcIjtcclxuXHJcbmxldCB3YXNtX2luc3RhbmNlOiBhbnk7XHJcblxyXG4vKlxyXG5sZXQgcm9tX2xvYWQ7XHJcblxyXG5sZXQgaW9fcmVhZDtcclxubGV0IGlvX3dyaXRlO1xyXG5cclxubGV0IGtleWJvYXJkX3Jlc2V0O1xyXG5sZXQga2V5Ym9hcmRfcHJlc3M7XHJcbmxldCBrZXlib2FyZF9yZWxlYXNlO1xyXG5sZXQga2V5Ym9hcmRfcG9sbDtcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjNjQgPSB7IFxyXG4gICB0YXBlOiB7IH0sXHJcbiAgIGluaXQ6ICgpPT57fSxcclxuICAgY29uZmlnOiAoY29uZjogbnVtYmVyKT0+e30sXHJcbiAgIGV4OiAoY3ljbGVzOiBudW1iZXIpPT57fSxcclxuICAgZXhlYzogKCk9Pnt9LFxyXG4gICBleGVjX3VzOiAobXNlYzogbnVtYmVyKT0+e30sXHJcbiAgIHZkcDogKCk9Pnt9LFxyXG4gICByZXNldDogKCk9Pnt9LFxyXG4gICBrZXlfZG93bjogKGtleTogbnVtYmVyKT0+e30sXHJcbiAgIGtleV91cDogKGtleTogbnVtYmVyKT0+e30sXHJcbiAgIGpveXN0aWNrOiAoKT0+e30sXHJcbiAgIGVtdV9qb3k6IChqb3k6IG51bWJlcik9Pnt9LFxyXG4gICBsb2FkX3ByZzogKGJ5dGVzOiBVaW50OEFycmF5LCBzaXplOiBudW1iZXIpPT57fSxcclxuICAgcGVlazogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIHBva2U6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgY2FzX3BvcnQ6ICgpPT57fSxcclxuICAgbWVtX3JlYWQ6IChhZGRyZXNzOiBudW1iZXIpPT57IHJldHVybiAwOyB9LFxyXG4gICBtZW1fd3JpdGU6IChhZGRyZXNzOiBudW1iZXIsIGRhdGE6IG51bWJlcik9Pnt9LFxyXG5cclxuICAgbWVtX3JlYWRfd29yZDogKGFkZHJlc3M6IG51bWJlcik9PnsgcmV0dXJuIDA7IH0sXHJcbiAgIG1lbV93cml0ZV93b3JkOiAoYWRkcmVzczogbnVtYmVyLCBkYXRhOiBudW1iZXIpPT57fSxcclxuXHJcbiAgIGdvOiAoKT0+e1xyXG4gICAgICBjNjQuc3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgICBvbmVGcmFtZSh1bmRlZmluZWQpO1xyXG4gICB9LFxyXG5cclxuICAgc3RvcHBlZDogdHJ1ZSxcclxuXHJcbiAgIC8vIENCTSA2NDk5IEFEQVRUQVRPUkUgVEVMRU1BVElDTyBlbXVsYXRpb25cclxuICAgc2V0X2V4cm9tOiAodmFsdWU6IGJvb2xlYW4pID0+IHt9LFxyXG4gICBzZXRfY2JtXzY0OTlfbmJhbms6ICh2YWx1ZTogbnVtYmVyKSA9PiB7fSxcclxuICAgc2V0X2VtdWxhdGVfY2JtXzY0OTk6ICh2YWx1ZTogYm9vbGVhbikgPT4ge30sXHJcbiAgIHNldF9leHRlcm5hbF9pcnE6ICh2YWx1ZTogYm9vbGVhbikgPT4ge31cclxuXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZF93YXNtKCkgeyAgIFxyXG4gICBcclxuICAgbGV0IGluc3RhbmNlID0gYXdhaXQgZW1zY3JpcHRlbl9tb2R1bGUoKTtcclxuICAgXHJcbiAgIGM2NC5pbml0ICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2luaXRcIiwgbnVsbCk7XHJcbiAgIGM2NC5jb25maWcgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2NvbmZpZ1wiLCBudWxsLCBbJ251bWJlciddKTtcclxuICAgYzY0LmV4ZWMgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhlY1wiLCBudWxsKTtcclxuICAgYzY0LmV4ICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfZXhcIiwgWydudW1iZXInXSk7XHJcbiAgIGM2NC5leGVjX3VzICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX2V4ZWNfdXNcIiwgWydudW1iZXInXSk7XHJcbiAgIGM2NC52ZHAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3ZkcFwiLCBudWxsKTtcclxuICAgYzY0LnJlc2V0ICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfcmVzZXRcIiwgbnVsbCk7XHJcblxyXG4gICBjNjQua2V5X2Rvd24gPSBpbnN0YW5jZS5jd3JhcChcInN5c19rZXlfZG93blwiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG4gICBjNjQua2V5X3VwICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19rZXlfdXBcIiAgICwgbnVsbCwgWydudW1iZXInXSApO1xyXG4gICBjNjQuam95c3RpY2sgPSBpbnN0YW5jZS5jd3JhcChcInN5c19qb3lzdGlja1wiICwgbnVsbCwgWydudW1iZXInXSApO1xyXG5cclxuICAgYzY0LmVtdV9qb3kgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2pveXN0aWNrX3R5cGVcIiAsIG51bGwsIFsnbnVtYmVyJ10gKTtcclxuXHJcbiAgIGM2NC5sb2FkX3ByZyAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfcXVpY2tfbG9hZFwiICwgbnVsbCwgWydhcnJheScsICdudW1iZXInXSApO1xyXG4gICAvL2M2NC5pbnNlcnRfY2FydGRyaWdlID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfaW5zZXJ0X3JvbV9jYXJ0ZHJpZ2VcIiAsIG51bGwsIFsnYXJyYXknLCAnbnVtYmVyJ10gKTtcclxuXHJcbiAgIGM2NC5wZWVrICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX21lbV9jcHVfcmRcIiAgICwgJ251bWJlcicsIFsnbnVtYmVyJ10gKTtcclxuICAgYzY0LnBva2UgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfbWVtX2NwdV93clwiICAgLCBudWxsLCBbJ251bWJlcicsICdudW1iZXInXSApO1xyXG5cclxuICAgLy9jNjQuZHVtcF92aWMgPSBpbnN0YW5jZS5jd3JhcChcInN5c19kdW1wX3ZpY1wiICAgLCBudWxsICk7XHJcblxyXG4gICBjNjQuY2FzX3BvcnQgPSBpbnN0YW5jZS5jd3JhcChcInN5c19jYXNfcG9ydFwiICAgLCAnbnVtYmVyJyk7XHJcblxyXG4gICAvKlxyXG4gICBjNjQudGFwZS5pbnNlcnQgPSBpbnN0YW5jZS5jd3JhcChcInN5c19pbnNlcnRfdGFwZVwiICAsICdib29sJywgWydhcnJheScsICdudW1iZXInXSApO1xyXG4gICBjNjQudGFwZS5yZW1vdmUgPSBpbnN0YW5jZS5jd3JhcChcInN5c19yZW1vdmVfdGFwZVwiICAsIG51bGwgKTtcclxuICAgYzY0LnRhcGUucGxheSAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfdGFwZV9wbGF5XCIgICAgLCBudWxsICk7XHJcbiAgIGM2NC50YXBlLnN0b3AgICA9IGluc3RhbmNlLmN3cmFwKFwic3lzX3RhcGVfc3RvcFwiICAgICwgbnVsbCApO1xyXG4gICAqL1xyXG5cclxuICAgYzY0Lm1lbV9yZWFkID0gYzY0LnBlZWs7XHJcbiAgIGM2NC5tZW1fd3JpdGUgPSBjNjQucG9rZTtcclxuXHJcbiAgIGM2NC5tZW1fd3JpdGVfd29yZCA9IGZ1bmN0aW9uKGFkZHJlc3MsIHdvcmQpIHtcclxuICAgICAgYzY0Lm1lbV93cml0ZShhZGRyZXNzICsgMCwgd29yZCAmIDB4RkYpO1xyXG4gICAgICBjNjQubWVtX3dyaXRlKGFkZHJlc3MgKyAxLCAod29yZCAmIDB4RkYwMCkgPj4gOCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIGM2NC5tZW1fcmVhZF93b3JkID0gZnVuY3Rpb24oYWRkcmVzcykge1xyXG4gICAgICBjb25zdCBsbyA9IGM2NC5tZW1fcmVhZChhZGRyZXNzICsgMCk7XHJcbiAgICAgIGNvbnN0IGhpID0gYzY0Lm1lbV9yZWFkKGFkZHJlc3MgKyAxKTtcclxuICAgICAgcmV0dXJuIGxvK2hpKjI1NjtcclxuICAgfSAgIFxyXG5cclxuICAgLypcclxuICAgY3B1X2luaXQgICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X2luaXRcIiwgbnVsbCk7XHJcbiAgIGNwdV9yZXNldCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImNwdV9yZXNldFwiLCBudWxsKTtcclxuICAgY3B1X3J1bl9pbnN0cnVjdGlvbiA9IGluc3RhbmNlLmN3cmFwKFwiY3B1X3J1bl9pbnN0cnVjdGlvblwiLCAnbnVtYmVyJyk7XHJcblxyXG4gICBtZW1fcmVhZCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcIm1lbV9yZWFkXCIsICdudW1iZXInLCBbJ251bWJlciddKTtcclxuICAgbWVtX3dyaXRlICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJtZW1fd3JpdGVcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG4gICByb21fbG9hZCAgICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcInJvbV9sb2FkXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddKTtcclxuXHJcbiAgIGlvX3JlYWQgICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiaW9fcmVhZFwiLCAnbnVtYmVyJywgWydudW1iZXInXSk7XHJcbiAgIGlvX3dyaXRlICAgICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwiaW9fd3JpdGVcIiwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10pO1xyXG5cclxuICAgbG04MGNfdGljayAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY190aWNrXCIsICdudW1iZXInKTtcclxuICAgbG04MGNfc2V0X2RlYnVnICAgID0gaW5zdGFuY2UuY3dyYXAoXCJsbTgwY19zZXRfZGVidWdcIiwgbnVsbCwgWydib29sJ10pO1xyXG4gICBsbTgwY19jdGNfZW5hYmxlICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX2N0Y19lbmFibGVcIiwgbnVsbCwgWydib29sJ10pO1xyXG4gICBsbTgwY19pbml0ICAgICAgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX2luaXRcIiwgbnVsbCk7XHJcbiAgIGxtODBjX3Jlc2V0ICAgICAgICA9IGluc3RhbmNlLmN3cmFwKFwibG04MGNfcmVzZXRcIiwgbnVsbCk7XHJcblxyXG4gICBsbTgwY190aWNrX2xpbmUgICAgPSBpbnN0YW5jZS5jd3JhcChcImxtODBjX3RpY2tfbGluZVwiLCAnbnVtYmVyJywgWydudW1iZXInXSk7XHJcblxyXG4gICBrZXlib2FyZF9yZXNldCAgICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3Jlc2V0XCIgICwgbnVsbCApO1xyXG4gICBrZXlib2FyZF9wcmVzcyAgICAgPSBpbnN0YW5jZS5jd3JhcChcImtleWJvYXJkX3ByZXNzXCIgICwgbnVsbCwgWydudW1iZXInLCAnbnVtYmVyJ10gKTtcclxuICAga2V5Ym9hcmRfcmVsZWFzZSAgID0gaW5zdGFuY2UuY3dyYXAoXCJrZXlib2FyZF9yZWxlYXNlXCIsIG51bGwsIFsnbnVtYmVyJywgJ251bWJlciddICk7XHJcbiAgIGtleWJvYXJkX3BvbGwgICAgICA9IGluc3RhbmNlLmN3cmFwKFwia2V5Ym9hcmRfcG9sbFwiICAgLCAnbnVtYmVyJywgWydudW1iZXInXSApO1xyXG4gICAqL1xyXG5cclxuICAgYzY0LnNldF9leHJvbSAgICAgICAgICAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2V4cm9tXCIgICAgICAgICAgICAgLCBudWxsLCBbJ2Jvb2wnXSApOyBcclxuICAgYzY0LnNldF9jYm1fNjQ5OV9uYmFuayAgID0gaW5zdGFuY2UuY3dyYXAoXCJzeXNfc2V0X2NibV82NDk5X25iYW5rXCIgICAgLCBudWxsLCBbJ251bWJlciddICk7IFxyXG4gICBjNjQuc2V0X2VtdWxhdGVfY2JtXzY0OTkgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZW11bGF0ZV9jYm1fNjQ5OVwiICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBjNjQuc2V0X2V4dGVybmFsX2lycSAgICAgPSBpbnN0YW5jZS5jd3JhcChcInN5c19zZXRfZXh0ZXJuYWxfaXJxXCIgICAgICAsIG51bGwsIFsnYm9vbCddICk7IFxyXG4gICBcclxuICAgd2FzbV9pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICBcclxuICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3dhc21faW5zdGFuY2UoKSB7XHJcbiAgIHJldHVybiB3YXNtX2luc3RhbmNlO1xyXG59XHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIFRPRE8gc3RhcnQgYmJzIG9ubHkgd2hlbiByZXF1aXJlZFxyXG4vLyBUT0RPIHJpdW5pZmljYXJlIFRlcm1pbmFsZS9QRVRTQ0lJIGJicyBjb24gNjQ5OVxyXG4vLyBUT0RPIHB1c2ggQ0lBIFRPRCB0byBmbG9vaC9jaGlwc1xyXG4vLyBUT0RPIHVwZGF0ZSB0byBuZXcgYzY0IGluIGZsb29oL2NoaXBzXHJcblxyXG4vLyBub3JtYWwgQkJTIHN0YXJ0cyB3aXRoID9sb2FkPW5pcHB1cjcyL3Rlcm1pbmFsLnByZ1xyXG4vLyBwcmVzdGVsIEJCUyBzdGFydHMgd2l0aCA/Y2JtNjQ5OT10cnVlXHJcblxyXG4vKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHsgYzY0IH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcyB9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlR2VvbWV0cnkgfSBmcm9tIFwiLi92aWRlb1wiO1xyXG5pbXBvcnQgeyBwb2xsX2tleWJvYXJkIH0gZnJvbSBcIi4va2V5Ym9hcmRcIjtcclxuaW1wb3J0IHsgcGV0c2NpaSB9IGZyb20gXCIuL3BldHNjaWlfYmJzXCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZ3JhbSB9IGZyb20gXCIuL2ZldGNoUHJvZ3JhbVwiO1xyXG5cclxubGV0IHN0b3BwZWQgPSBmYWxzZTsgLy8gYWxsb3dzIHRvIHN0b3AvcmVzdW1lIHRoZSBlbXVsYXRpb25cclxuXHJcbmxldCBsYXN0X2tleWJvYXJkcG9sbCA9IDA7XHJcblxyXG5sZXQgbGFzdF90aW1lc3RhbXAgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uZUZyYW1lKHRpbWVzdGFtcDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgIGxldCBzdGFtcCA9IHRpbWVzdGFtcCA9PSB1bmRlZmluZWQgPyBsYXN0X3RpbWVzdGFtcCA6IHRpbWVzdGFtcDtcclxuICAgbGV0IHVzZWMgPSAoc3RhbXAgLSBsYXN0X3RpbWVzdGFtcCkqMTAwMDtcclxuICAgbGFzdF90aW1lc3RhbXAgPSBzdGFtcDtcclxuXHJcbiAgIGlmKHVzZWMgPiAzMjAwMCkgdXNlYyA9IDMyMDAwO1xyXG5cclxuICAgaWYoc3RhbXAgLSBsYXN0X2tleWJvYXJkcG9sbCA+IDE1KSB7XHJcbiAgICAgIHBvbGxfa2V5Ym9hcmQoKTtcclxuICAgICAgbGFzdF9rZXlib2FyZHBvbGwgPSBzdGFtcDtcclxuICAgfVxyXG5cclxuICAgYzY0LmV4ZWNfdXModXNlYyk7XHJcblxyXG4gICBpZighc3RvcHBlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uZUZyYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcblxyXG4gICBjNjQuY29uZmlnKDApO1xyXG5cclxuICAgYzY0LmV4KDUwMDApOyAgICAgLy8gd2FpdCBmb3IgbWVtb3J5IHBhdHRlcm4gd3JpdGluZ1xyXG4gICBjNjQubWVtX3dyaXRlKDIwNCwxKTsgLy8gZmxhZ3Mgc3lzdGVtIG5vdCBib290ZWQgeWV0XHJcblxyXG4gICBsZXQgb3B0aW9ucyA9IGF3YWl0IHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcygpO1xyXG5cclxuICAgLy8gYXV0b3N0YXJ0IHRlcm1pbmFsIGlmIGxvYWRlZCBmcm9tIGJicy5zYmxlbmRvcmlvLnVlIG9yIGJicy5yZXRyb2NhbXB1cy5jb21cclxuICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgbGV0IGlzX3JldHJvY2FtcHVzID0gaHJlZi5tYXRjaCgvXmh0dHA6XFwvXFwvKGJic1xcLnNibGVuZG9yaW9cXC5ldXxiYnNcXC5yZXRyb2NhbXB1c1xcLmNvbSkvZyk7ICAgXHJcblxyXG4gICBpZihpc19yZXRyb2NhbXB1cyB8fCBvcHRpb25zLnBldHNjaWliYnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwZXRzY2lpLmFkZHJlc3MgPSBvcHRpb25zLndzdGNwID8/IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MFwiO1xyXG4gICAgICBwZXRzY2lpLnByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbCA/PyBcImJic1wiO1xyXG4gICAgICBpZihvcHRpb25zLmxvYWQgPT09IHVuZGVmaW5lZCkgZmV0Y2hQcm9ncmFtKFwibmlwcHVyNzIvdGVybWluYWwucHJnXCIpO1xyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGVHZW9tZXRyeSgpO1xyXG5cclxuICAgYzY0LmdvKCk7ICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZEJ5dGVzIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZ3JhbShuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgLy9jb25zb2xlLmxvZyhgd2FudGluZyB0byBsb2FkICR7bmFtZX1gKTtcclxuICAgdHJ5XHJcbiAgIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgc29mdHdhcmUvJHtuYW1lfWApO1xyXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBsb2FkQnl0ZXMoYnl0ZXMpO1xyXG4gICBcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKVxyXG4gICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGFzdGUsIGhleCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ5dGVzKGJ5dGVzOiBVaW50OEFycmF5KSB7XHJcbiAgIHdhaXRfYW5kX2xvYWQoYnl0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWl0X2FuZF9sb2FkKGJ1ZmZlcjogVWludDhBcnJheSkge1xyXG4gICBpZihjNjQubWVtX3JlYWQoMjA0KSE9PTApIHtcclxuICAgICAgLy8gY3Vyc29yIG5vdCBmbGFzaGluZywgc3lzdGVtIG5vdCB5ZXQgYm9vdGVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PndhaXRfYW5kX2xvYWQoYnVmZmVyKSwgMTAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGRvX2xvYWQoYnVmZmVyKTtcclxuICAgY29uc29sZS5sb2coYGxvYWRlZCAke2J1ZmZlci5sZW5ndGh9IGJ5dGVzYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvX2xvYWQoYnVmZmVyOiBVaW50OEFycmF5KSB7XHJcbiAgIGM2NC5sb2FkX3ByZyhidWZmZXIsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICBwYXN0ZShcIlJVTlxcclwiKTtcclxufVxyXG5cclxuY29uc3QgQkFTVFhUID0gMHgwMDJiO1xyXG5jb25zdCBQUk9HTkQgPSAweDAwMmQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZV9maWxlKGZpbGVuYW1lOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpIHN0YXJ0ID0gYzY0Lm1lbV9yZWFkX3dvcmQoQkFTVFhUKTtcclxuICAgaWYoZW5kID09PSB1bmRlZmluZWQpIGVuZCA9IGM2NC5tZW1fcmVhZF93b3JkKFBST0dORCktMTtcclxuXHJcbiAgIGNvbnN0IHByZyA9IFsgc3RhcnQgJiAweEZGLCBzdGFydCA+PiA4IF07XHJcbiAgIGZvcihsZXQgaT0wLHQ9c3RhcnQ7IHQ8PWVuZDsgaSsrLHQrKykge1xyXG4gICAgICBwcmcucHVzaChjNjQubWVtX3JlYWQodCkpO1xyXG4gICB9XHJcbiAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocHJnKTtcclxuICAgXHJcbiAgIGF3YWl0IGRvd25sb2FkKGZpbGVuYW1lLCBieXRlcyk7XHJcblxyXG4gICBjb25zb2xlLmxvZyhgc2F2ZWQgXCIke2ZpbGVuYW1lfVwiICR7Ynl0ZXMubGVuZ3RofSBieXRlcyBmcm9tICR7aGV4KHN0YXJ0LDQpfWggdG8gJHtoZXgoZW5kLDQpfWhgKTtcclxuICAgLy9jcHUucmVzZXQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZywgYnl0ZXM6IFVpbnQ4QXJyYXkpIHsgICBcclxuICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pOyAgIFxyXG4gICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpO1xyXG4gICBjb25zb2xlLmxvZyhgZG93bmxvYWRlZCBcIiR7ZmlsZU5hbWV9XCJgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhdWRpb0NvbnRleHRSZXN1bWUgfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEF9IGZyb20gXCIuL2tleWJvYXJkX0lUXCI7XHJcblxyXG5sZXQgbGFzdF9zY3JvbGxfbG9jazogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbmxldCBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxubGV0IGFsdF9wcmVzc2VkID0gZmFsc2U7XHJcbmxldCBzaGlmdF9wcmVzc2VkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBrZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSB0cnVlO1xyXG4gICBpZihlLmNvZGUgPT09IFwiQWx0TGVmdFwiKSBhbHRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJTaGlmdExlZnRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gdHJ1ZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpIGFsdF9wcmVzc2VkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0UmlnaHRcIikgc2hpZnRfcHJlc3NlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleURvd25cIik7XHJcbiAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAqL1xyXG5cclxuICAgLy8gZnJvbSBDaHJvbWUgNzEgYXVkaW8gaXMgc3VzcGVuZGVkIGJ5IGRlZmF1bHQgYW5kIG11c3QgcmVzdW1lIHdpdGhpbiBhbiB1c2VyLWdlbmVyYXRlZCBldmVudFxyXG4gICBhdWRpb0NvbnRleHRSZXN1bWUoKTtcclxuXHJcbiAgIGlmKGxhc3Rfc2Nyb2xsX2xvY2sgPT09IHVuZGVmaW5lZCkgbGFzdF9zY3JvbGxfbG9jayA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcblxyXG4gICBpZihlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpIT1sYXN0X3Njcm9sbF9sb2NrKSB7XHJcbiAgICAgIGxldCBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZCA9IGUuZ2V0TW9kaWZpZXJTdGF0ZShcIlNjcm9sbExvY2tcIik7XHJcbiAgICAgIGxhc3Rfc2Nyb2xsX2xvY2sgPSBzY3JvbGxfbG9ja19rZXlfcHJlc3NlZDtcclxuICAgICAgbGV0IGVtdV9qb3lzdGljayA9IHNjcm9sbF9sb2NrX2tleV9wcmVzc2VkID8gMyA6IDA7XHJcbiAgICAgIGM2NC5lbXVfam95KGVtdV9qb3lzdGljayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb3lzdGljayBlbXVsYXRpb24gJHtlbXVfam95c3RpY2s9PTM/XCJlbmFibGVkXCI6XCJkaXNhYmxlZFwifWApO1xyXG4gICB9XHJcblxyXG4gICAvLyBkaXNhYmxlIGF1dG8gcmVwZWF0LCBhcyBpdCBpcyBoYW5kbGVkIG9uIHRoZSBmaXJtd2FyZVxyXG4gICBpZihlLnJlcGVhdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICByZXR1cm47XHJcbiAgIH0gICBcclxuXHJcbiAgIC8vICoqKiBzcGVjaWFsIChub24gY2hhcmFjdGVycykga2V5cyAqKipcclxuXHJcbiAgIC8vIFJFU0VUIGtleSBpcyBDVFJMK0FMVCtCUkVBS1xyXG4gICBpZihlLmNvZGUgPT09IFwiUGF1c2VcIiAmJiBlLmFsdEtleSAmJiBlLmN0cmxLZXkpIHtcclxuICAgICAgYzY0LnJlc2V0KCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgLy8gaWYga2V5Ym9hcmQgSVRBXHJcbiAgIHtcclxuICAgICAgY29uc3QgaGFyZHdhcmVfa2V5cyA9IHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGUuY29kZSwgZS5rZXksIGUuc2hpZnRLZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuZ2V0TW9kaWZpZXJTdGF0ZShcIkFsdEdyYXBoXCIpICk7XHJcbiAgICAgIGlmKGhhcmR3YXJlX2tleXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJwcmVzc1wiLCBoYXJkd2FyZV9rZXlzIH0pO1xyXG4gICAgICAvL2tleV9wcmVzc2VkLnB1c2goaGFyZHdhcmVfa2V5cyk7XHJcbiAgICAgIGtleV9wcmVzc19tYXBbZS5jb2RlXSA9IGhhcmR3YXJlX2tleXM7XHJcbiAgICAgIC8vY29uc29sZS5sb2coYG1hcCBhZnRlciBwcmVzczogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sTGVmdFwiKSBjb250cm9sX3ByZXNzZWQgPSBmYWxzZTtcclxuICAgaWYoZS5jb2RlID09PSBcIkFsdExlZnRcIikgYWx0X3ByZXNzZWQgPSBmYWxzZTsgICAgICAgICAgICAgICAgICBcclxuICAgaWYoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgXHJcbiAgIGlmKGUuY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgY29udHJvbF9wcmVzc2VkID0gZmFsc2U7XHJcbiAgIGlmKGUuY29kZSA9PT0gXCJBbHRSaWdodFwiKSBhbHRfcHJlc3NlZCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgIFxyXG4gICBpZihlLmNvZGUgPT09IFwiU2hpZnRSaWdodFwiKSBzaGlmdF9wcmVzc2VkID0gZmFsc2U7IFxyXG4gICAvL2NvbnNvbGUubG9nKGUuY29kZSk7XHJcblxyXG4gICAvKlxyXG4gICBjb25zb2xlLmxvZyhcImtleVVwXCIpO1xyXG4gICBjb25zb2xlLmxvZyhlKTtcclxuICAgKi9cclxuXHJcbiAgIC8vIGZpeCBhIGJ1ZyBpbiBDaHJvbWU6IHByZXNzaW5nIFwiQUxULUdSIEBcIiByZXN1bHRzIGluIGtleWRvd24gb2YgXCLDslwiIGluc3RlYWQgb2YgXCJAXCJcclxuICAgLy9pZihlLmtleSA9PT0gJ8OyJyAmJiBlLmtleUNvZGUgPT09IDE5MiAmJiBlLndoaWNoID09PSAxOTIpIHtcclxuICAgLy8gICBlLmtleSA9ICdAJztcclxuICAgLy99XHJcblxyXG4gICBjb25zdCBoYXJkd2FyZV9rZXlzID0gcGNrZXlfdG9faGFyZHdhcmVfa2V5c19JVEEoZS5jb2RlLCBlLmtleSwgZS5zaGlmdEtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5nZXRNb2RpZmllclN0YXRlKFwiQWx0R3JhcGhcIikpO1xyXG4gICBpZihoYXJkd2FyZV9rZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5cyB9KTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIC8va2V5X3ByZXNzZWQuZm9yRWFjaChrPT5rZXlib2FyZF9idWZmZXIucHVzaCh7IHR5cGU6IFwicmVsZWFzZVwiLCBoYXJkd2FyZV9rZXlzOiBrIH0pKTtcclxuICAgLy9rZXlfcHJlc3NlZCA9IFtdO1xyXG5cclxuICAgbGV0IGNvZGUgPSBlLmNvZGU7XHJcbiAgIC8vY29uc29sZS5sb2coYG1hcCBiZWZvcmUgcmVsZWFzZTogJHtPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKS5qb2luKFwiLFwiKX1gKTtcclxuXHJcbiAgIC8vIGZpeCBzaGlmdCBwcm9ibGVtXHJcbiAgIGlmKGtleV9wcmVzc19tYXBbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgayA9IGtleV9wcmVzc19tYXBbY29kZV07XHJcbiAgICAgIGtleWJvYXJkX2J1ZmZlci5wdXNoKHsgdHlwZTogXCJyZWxlYXNlXCIsIGhhcmR3YXJlX2tleXM6IGsgfSk7XHJcbiAgICAgIGRlbGV0ZSBrZXlfcHJlc3NfbWFwW2NvZGVdO1xyXG4gICB9XHJcblxyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbi8vIGNvbm5lY3QgRE9NIGV2ZW50c1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQ7IFxyXG5lbGVtZW50Lm9ua2V5ZG93biA9IGtleURvd247XHJcbmVsZW1lbnQub25rZXl1cCA9IGtleVVwO1xyXG5lbGVtZW50Lm9ua2V5cHJlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZS5rZXkgPT0gXCLDoFwiKSBhY2NlbnRhdGUoXCJhXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw6hcIikgYWNjZW50YXRlKFwiZVwiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsOpXCIpIGFjY2VudGF0ZShcImVcIik7XHJcbiAgIGVsc2UgaWYoZS5rZXkgPT0gXCLDrFwiKSBhY2NlbnRhdGUoXCJpXCIpO1xyXG4gICBlbHNlIGlmKGUua2V5ID09IFwiw7JcIikgYWNjZW50YXRlKFwib1wiKTtcclxuICAgZWxzZSBpZihlLmtleSA9PSBcIsO5XCIpIGFjY2VudGF0ZShcInVcIik7XHJcbn1cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXkpIHsgICAgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoa2V5KSk7ICAgXHJcbiAgIGtleVVwKGZha2VFdmVudChrZXkpKTsgICBcclxuICAga2V5RG93bihmYWtlRXZlbnQoXCInXCIpKTtcclxuICAga2V5VXAoZmFrZUV2ZW50KFwiJ1wiKSk7ICAgXHJcbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFjY2VudGF0ZShrZXk6IHN0cmluZykgeyAgICAgIFxyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlEb3duKGZha2VFdmVudChrZXkpKSwgMCk7XHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleVVwICAoZmFrZUV2ZW50KGtleSkpLDIwKTsgXHJcbiAgIHNldFRpbWVvdXQoKCk9PmtleURvd24oZmFrZUV2ZW50KFwiJ1wiKSksNDApO1xyXG4gICBzZXRUaW1lb3V0KCgpPT5rZXlVcCAgKGZha2VFdmVudChcIidcIikpLDYwKTtcclxufVxyXG5cclxud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgcmVzZXRfa2V5Ym9hcmQoKTsgLy8gcmVsZWFzZSBhbGwga2V5cyB0byBwcmV2ZW50IEFMVCBhbHdheXMgcHJlc3NlZCBhZnRlciBBTFQrVEFCXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZha2VFdmVudChrZXk6IHN0cmluZykge1xyXG4gICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgY29kZTogXCJcIixcclxuICAgICAgc2hpZnRLZXk6IGZhbHNlLFxyXG4gICAgICBjdHJsS2V5OiBmYWxzZSxcclxuICAgICAgYWx0S2V5OiBmYWxzZSxcclxuICAgICAgZ2V0TW9kaWZpZXJTdGF0ZTogKCk9PmZhbHNlLFxyXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCk9PmZhbHNlXHJcbiAgIH0gYXMgYW55IGFzIEtleWJvYXJkRXZlbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBLZXlCb2FyZF9DNjRFdmVudCB7XHJcbiAgIHR5cGU6IFwicHJlc3NcInxcInJlbGVhc2VcIjtcclxuICAgaGFyZHdhcmVfa2V5czogbnVtYmVyW107XHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXI6IEtleUJvYXJkX0M2NEV2ZW50W10gPSBbXTtcclxuLy9sZXQga2V5X3ByZXNzZWQgPSBbXTtcclxubGV0IGtleV9wcmVzc19tYXA6IHtba2V5OnN0cmluZ106IG51bWJlcltdfSA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2tleWJvYXJkKCkge1xyXG5cclxuICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhrZXlfcHJlc3NfbWFwKTtcclxuXHJcbiAgIGtleXMuZm9yRWFjaChrPT57XHJcbiAgICAgIC8vY29uc29sZS5sb2coYGNsZWFyaW5nICR7a31gKTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyLnB1c2goeyB0eXBlOiBcInJlbGVhc2VcIiwgaGFyZHdhcmVfa2V5czoga2V5X3ByZXNzX21hcFtrXSB9KTtcclxuICAgICAgZGVsZXRlIGtleV9wcmVzc19tYXBba107XHJcbiAgIH0pO1xyXG5cclxuICAga2V5X3ByZXNzX21hcCA9IHt9OyAgXHJcbn1cclxuXHJcbmxldCBrZXlib2FyZF9idWZmZXJfZW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxfa2V5Ym9hcmQoKSB7XHJcbiAgIC8vIHBvbGwga2V5Ym9hcmRcclxuICAgd2hpbGUoa2V5Ym9hcmRfYnVmZmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGtleV9ldmVudCA9IGtleWJvYXJkX2J1ZmZlclswXTtcclxuICAgICAga2V5Ym9hcmRfYnVmZmVyID0ga2V5Ym9hcmRfYnVmZmVyLnNsaWNlKDEpO1xyXG4gICAgICBrZXlib2FyZF9idWZmZXJfZW1wdHkgPSBrZXlib2FyZF9idWZmZXIubGVuZ3RoID09IDA7XHJcblxyXG4gICAgICBpZihrZXlfZXZlbnQudHlwZSA9PT0gXCJwcmVzc1wiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoazogbnVtYmVyKSA9PiBjNjQua2V5X2Rvd24oaykpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoa2V5X2V2ZW50LnR5cGUgPT09IFwicmVsZWFzZVwiKSB7XHJcbiAgICAgICAgIGxldCBrZXlzID0ga2V5X2V2ZW50LmhhcmR3YXJlX2tleXM7XHJcbiAgICAgICAgIC8va2V5cy5mb3JFYWNoKChrKSA9PiBjb25zb2xlLmxvZyhrKSk7XHJcbiAgICAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4gYzY0LmtleV91cChrKSk7XHJcbiAgICAgICAgIGlmKGtleWJvYXJkX2J1ZmZlcl9lbXB0eSAmJiAhY29udHJvbF9wcmVzc2VkICYmICFhbHRfcHJlc3NlZCAmJiAhc2hpZnRfcHJlc3NlZCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IHQ9MDt0PDI1Njt0KyspIGM2NC5rZXlfdXAodCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiLypcclxuICAgICA3ICAgNiAgIDUgICA0ICAgMyAgIDIgICAxICAgMFxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICA3fCBGNyAgRjUgIEYzICBGMSAgQ0ROIENSVCBSRVQgREVMICAgIENSVD1DdXJzb3ItUmlnaHQsIENETj1DdXJzb3ItRG93blxyXG4gICB8XHJcbiAgNnwgSE9NIFVBICA9ICAgUlNIIC8gICA7ICAgKiAgIEJQICAgICBCUD1Ccml0aXNoIFBvdW5kLCBSU0g9U2hvdWxkIGJlIFJpZ2h0LVNISUZULFxyXG4gICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUE9VXAgQXJyb3dcclxuICA1fCAtICAgQCAgIDogICAuICAgLCAgIEwgICBQICAgK1xyXG4gICB8XHJcbiAgNHwgMCAgIE8gICBLICAgTSAgIE4gICBKICAgSSAgIDlcclxuICAgfFxyXG4gIDN8IDggICBVICAgSCAgIEIgICBWICAgRyAgIFkgICA3XHJcbiAgIHxcclxuICAyfCA2ICAgVCAgIEYgICBDICAgWCAgIEQgICBSICAgNVxyXG4gICB8XHJcbiAgMXwgNCAgIEUgICBTICAgWiAgIExTSCBBICAgVyAgIDMgICAgICBMU0g9U2hvdWxkIGJlIExlZnQtU0hJRlRcclxuICAgfFxyXG4gIDB8IDIgICBRICAgQ0JNIFNQQyBTVFAgQ1RMIExBICAxICAgICAgTEE9TGVmdCBBcnJvdywgQ1RMPVNob3VsZCBiZSBDVFJMLCBTVFA9UlVOL1NUT1BcclxuICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENCTT1Db21tb2RvcmUga2V5XHJcblxyXG4gICAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBja2V5X3RvX2hhcmR3YXJlX2tleXNfSVRBKGNvZGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHNoaWZ0OiBib29sZWFuLCBjb250cm9sOiBib29sZWFuLCBjYm06IGJvb2xlYW4sIGFsdGdyYXBoOiBib29sZWFuKSB7XHJcbiAgIC8vY29uc29sZS5sb2coY29kZSwga2V5LCBlKTtcclxuICAgLy9jb25zb2xlLmxvZyhlLmdldE1vZGlmaWVyU3RhdGUoXCJTY3JvbGxMb2NrXCIpKTtcclxuXHJcbiAgIGxldCBoYXJkd2FyZV9rZXlzID0gW107XHJcblxyXG4gICBpZihrZXkgPT09IFwiMVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIxXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIyXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiM1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIzXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI0XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI1XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiNlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI2XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiN1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI3XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI4XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiOVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCI5XCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiMFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIwXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiIVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCIhXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09ICdcIicpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAnXCInLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsKjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIn5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiRcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIlXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiVcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCImXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiZcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIvXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIihcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIpXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIilcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI9XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCInXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIidcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI/XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj9cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJeXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJbXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIltcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJdXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIl1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCLCsFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJbXCIuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiwqdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiXVwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIitcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiK1wiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIipcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiKlwiLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIsOnXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJAXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIiNcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI8XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjxcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI+XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIj5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIixcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI7XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjtcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCIuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi5cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCI6XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIjpcIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCItXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIi1cIi5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJxXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInFcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIndcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwid1wiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJlXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJyXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInJcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInRcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidFwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ5XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJ1XCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInVcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImlcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiaVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwib1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJvXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJwXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcInBcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImFcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiYVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwic1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJzXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJkXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImRcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiZlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiZ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJnXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJoXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImhcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcImpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwialwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwia1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJrXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJsXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImxcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInpcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwielwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwieFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJ4XCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJjXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcImNcIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcInZcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwidlwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiYlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJiXCIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJuXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIm5cIi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIm1cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwibVwiLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJRXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJXXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIldcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkVcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiRVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJSXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJUXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlRcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIllcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWVwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiVVwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJVXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJJXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIklcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIk9cIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiT1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiUFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJQXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJBXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkFcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlNcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiU1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiRFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJEXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJGXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkdcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiR1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiSFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJIXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJKXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIktcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiS1wiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTFwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJMXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJaXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlpcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIlhcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiWFwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiQ1wiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJDXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJWXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIlZcIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuICAgaWYoa2V5ID09PSBcIkJcIikgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIFwiQlwiLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSApO1xyXG4gICBpZihrZXkgPT09IFwiTlwiKSAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggXCJOXCIudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApICk7XHJcbiAgIGlmKGtleSA9PT0gXCJNXCIpICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIk1cIi50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgKTtcclxuXHJcbiAgIGlmKGtleSA9PT0gXCJfXCIpICAgICAgICAgeyBoYXJkd2FyZV9rZXlzLnB1c2goIDY0KTsgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICB9ICAvLyBzaW11bGF0ZSB1bmRlcnNjb3JlXHJcblxyXG4gICAvLyBGS0VZU1xyXG4gICBpZihjb2RlID09PSBcIkYxXCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjEgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGMlwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEYyICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjNcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGMyApO1xyXG4gICBpZihjb2RlID09PSBcIkY0XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjQgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGNVwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY1ICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiRjZcIikgICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHhGNiApO1xyXG4gICBpZihjb2RlID09PSBcIkY3XCIpICAgICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4RjcgKTtcclxuICAgaWYoY29kZSA9PT0gXCJGOFwiKSAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEY4ICk7XHJcblxyXG4gICBpZihjb2RlID09PSBcIlNwYWNlXCIpICAgICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MjAgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwOCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA5ICApO1xyXG4gICBpZihjb2RlID09PSBcIkFycm93RG93blwiKSAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MGEgICk7XHJcbiAgIGlmKGNvZGUgPT09IFwiQXJyb3dVcFwiKSAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwYiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRGVsZXRlXCIpICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJJbnNlcnRcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDEwICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgxMCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAhc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMSAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiRW50ZXJcIikgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwRCAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJOdW1wYWRFbnRlclwiKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBEICApO1xyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDAzICApOyAgLy8gcnVuIHN0b3BcclxuICAgaWYoY29kZSA9PT0gXCJFc2NhcGVcIiAmJiBzaGlmdCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDA3ICApOyAgLy8gc2hpZnQgKyBydW4gc3RvcFxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIpICAgICAgICAgIGhhcmR3YXJlX2tleXMucHVzaCggMHgwQyAgKTtcclxuICAgaWYoY29kZSA9PT0gXCJIb21lXCIgJiYgc2hpZnQpIGhhcmR3YXJlX2tleXMucHVzaCggMHgwMiAgKTtcclxuXHJcbiAgIGlmKGNvZGUgPT09IFwiQmFja3F1b3RlXCIpICAgICBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MDQgICk7ICAvLyBsZWZ0IGFycm93XHJcblxyXG4gICBpZihjb250cm9sICYmICFhbHRncmFwaCkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgLy9pZihjYm0pICAgICAgICAgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJFbmRcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCBcIkBcIi5jaGFyQ29kZUF0KDApICk7XHJcblxyXG4gICAvKlxyXG4gICBpZihjb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKSBoYXJkd2FyZV9rZXlzLnB1c2goIDB4MEUgKTtcclxuICAgaWYoY29kZSA9PT0gXCJUYWJcIikgICAgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgKi9cclxuXHJcbiAgIGlmKChjb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIgfHwgY29kZSA9PT0gXCJDb250cm9sUmlnaHRcIikgJiYgIWFsdGdyYXBoKSAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBFICk7ICAvLyBlbXVsYXRlIENUUkxcclxuICAgaWYoKGNvZGUgPT09IFwiQWx0TGVmdFwiIHx8IGNvZGUgPT0gXCJBbHRSaWdodFwiKSkgaGFyZHdhcmVfa2V5cy5wdXNoKCAweDBGICk7ICAvLyBlbXVsYXRlIENCTVxyXG5cclxuICAgaWYoY29kZSA9PT0gXCJQYWdlVXBcIikgICAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAweEZGICk7ICAvLyBlbXVsYXRlIFJFU1RPUkVcclxuICAgaWYoY29kZSA9PT0gXCJQYWdlRG93blwiKSAgICAgaGFyZHdhcmVfa2V5cy5wdXNoKCAzNSApOyAgICAvLyBcIiNcIlxyXG5cclxuICAgcmV0dXJuIGhhcmR3YXJlX2tleXM7XHJcbn1cclxuIiwiLy9cclxuLy8gZnVuY3Rpb25zIG9yaWdpbmFsbHkgY29waWVkIGZyb20gaHR0cHM6Ly93d3cubWRhd3Nvbi5uZXQvdmljMjBjaHJvbWUvdmljMjAucGhwXHJcbi8vIGFuZCBhZGFwdGVkIGZvciB0aGlzIGVtdWxhdG9yXHJcbi8vXHJcblxyXG5pbXBvcnQgeyBsb2FkQnl0ZXMgfSBmcm9tIFwiLi9maWxlc3lzdGVtXCI7XHJcblxyXG5mdW5jdGlvbiBiaW5Ub0FycmF5KGRhdGE6IHN0cmluZykge1xyXG4gICBsZXQgYmluY29kZXMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LiFcIjtcclxuICAgdmFyIHY9MCxjbnQ9MCxvdXQ9W10saWk9MDtcclxuICAgZm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspIHtcclxuICAgICAgdis9YmluY29kZXMuaW5kZXhPZihkYXRhW2ldKTw8Y250O1xyXG4gICAgICBjbnQrPTY7XHJcbiAgICAgIGlmKGNudD49OCkge1xyXG4gICAgICAgICBvdXRbaWkrK109KHYmMjU1KTtcclxuICAgICAgICAgY250LT04O1xyXG4gICAgICAgICB2Pj49ODtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlcm5hbExvYWQoY21kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN1YmZpbGU/OiBzdHJpbmcpIHtcdFxyXG5cdGNvbnNvbGUubG9nKFwiZXh0ZXJuYWxMb2FkIGNtZD1cIitjbWQrXCIgdXJsPVwiK3VybCtcIiBmb3JtYXQ9XCIrZm9ybWF0K1wiIHN1YmZpbGU9XCIrc3ViZmlsZSk7XHJcblx0dmFyIGhlYWQ9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcblx0dmFyIHNjcmlwdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnR5cGU9ICd0ZXh0L2phdmFzY3JpcHQnO1x0XHJcblx0c2NyaXB0LnNyYz0gJ2h0dHBzOi8vd3d3Lm1kYXdzb24ubmV0L3ZpYzIwY2hyb21lL3ZpYzIwL3ByZ3RvanNsb2FkZXIucGhwP2NtZD0nK2NtZCsnJnByZ3VybD0nK3VybCsnJnN1YmZpbGU9JytzdWJmaWxlO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5cclxuKHdpbmRvdyBhcyBhbnkpLm1kYXdzb25fbG9hZEJ5dGVzID0gbG9hZEJ5dGVzO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiBtZGF3c29uX2xvYWRCeXRlcyhzcmM6IFVpbnQ4QXJyYXkpOiB2b2lkO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmxvYWRQcmc9IGZ1bmN0aW9uKHNyYzogYW55KSB7ICAgXHJcbiAgIGlmKHNyYy5sZW5ndGggIT09IDEpIHJldHVybjtcclxuXHJcbiAgIGxldCBiaW4gPSBiaW5Ub0FycmF5KHNyY1swXSk7XHJcbiAgIFxyXG4gICBtZGF3c29uX2xvYWRCeXRlcyhuZXcgVWludDhBcnJheShiaW4pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9ncmFtIH0gZnJvbSBcIi4vZmV0Y2hQcm9ncmFtXCI7XHJcbmltcG9ydCB7IGV4dGVybmFsTG9hZCB9IGZyb20gXCIuL21kYXdzb25cIjtcclxuaW1wb3J0IHsgdmlkZW90ZWwgfSBmcm9tIFwiLi9jYm1fNjQ5OS9jYm1fNjQ5OVwiO1xyXG5cclxudHlwZSBRdWVyeVN0cmluZ09iamVjdCA9IHtba2V5OiBzdHJpbmddOnN0cmluZ307XHJcblxyXG5mdW5jdGlvbiBnZXRRdWVyeVN0cmluZ09iamVjdCgpIHtcclxuICAgbGV0IGEgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiJlwiKTtcclxuICAgbGV0IG8gPSBhLnJlZHVjZSgobzogUXVlcnlTdHJpbmdPYmplY3QsIHYpID0+e1xyXG4gICAgICB2YXIga3YgPSB2LnNwbGl0KFwiPVwiKTtcclxuICAgICAgY29uc3Qga2V5ID0ga3ZbMF0ucmVwbGFjZShcIj9cIiwgXCJcIik7XHJcbiAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0ga3ZbMV07XHJcbiAgICAgIG9ba2V5XSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gbztcclxuICAgfSwge30pO1xyXG4gICByZXR1cm4gbztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdDb21tYW5kcygpIHtcclxuICAgbGV0IG9wdGlvbnMgPSBnZXRRdWVyeVN0cmluZ09iamVjdCgpOyAgXHJcblxyXG4gICBpZihvcHRpb25zLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGM2NC5jb25maWcoTnVtYmVyKG9wdGlvbnMuY29uZmlnKSk7XHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuam95ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYzY0LmVtdV9qb3koTnVtYmVyKG9wdGlvbnMuam95KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBKb3lzdGljayBlbXVsYXRpb24gJHtOdW1iZXIob3B0aW9ucy5qb3kpIT0wP1wiZW5hYmxlZFwiOlwiZGlzYWJsZWRcIn1gKTtcclxuICAgfVxyXG5cclxuICAgaWYob3B0aW9ucy5sb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IG9wdGlvbnMubG9hZDtcclxuICAgICAgaWYobmFtZS5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAvLyBleHRlcm5hbCBsb2FkXHJcbiAgICAgICAgIGV4dGVybmFsTG9hZChcImxvYWRQcmdcIiwgbmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIGludGVybmFsIGxvYWRcclxuICAgICAgICAgYXdhaXQgZmV0Y2hQcm9ncmFtKG5hbWUpO1xyXG4gICAgICB9ICAgXHJcbiAgIH1cclxuXHJcbiAgIGlmKG9wdGlvbnMuY2JtNjQ5OSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZpZGVvdGVsLmFkZHJlc3MgPSBvcHRpb25zLndzdGNwID8/IFwid3NzOi8vYmJzLnNibGVuZG9yaW8uZXU6ODA4MVwiOyAgICAgIFxyXG4gICAgICB2aWRlb3RlbC5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgPz8gXCJiYnNcIjtcclxuICAgICAgYzY0LnNldF9leHJvbSh0cnVlKTtcclxuICAgICAgYzY0LnNldF9lbXVsYXRlX2NibV82NDk5KHRydWUpOyBcclxuICAgICAgYzY0LnJlc2V0KCk7ICAgICBcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgQkJTQ29ubmVjdG9yIH0gZnJvbSBcIi4vYmJzX2Nvbm5lY3RvclwiO1xyXG5pbXBvcnQgeyBzdHJpbmcyVWludDhBcnJheSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5sZXQgbW9kZW1fdHJhbnNtaXRfYnVmZmVyOiBudW1iZXJbXSA9IFtdO1xyXG5sZXQgbW9kZW1fcmVjZWl2ZV9idWZmZXI6IG51bWJlcltdID0gW107XHJcblxyXG5jb25zdCBNT0RFTV9EQVRBX09VVCA9IDB4RDdGMjtcclxuY29uc3QgTU9ERU1fREFUQV9JTiAgPSAweEQ3RjA7XHJcbmNvbnN0IE1PREVNX0RBVEFfUkVRID0gMHhEN0YzO1xyXG5jb25zdCBNT0RFTV9BQ0sgICAgICA9IDB4RDdGMTtcclxuY29uc3QgTU9ERU1fQ09OTlNUICAgPSAweEQ3RjQ7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgcmVhZHMgaW4gdGhlIHJhbmdlICREN0YwLSREN0ZGXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RlbV9yZWFkKGFkZHI6IG51bWJlcilcclxue1xyXG4gICBpZihhZGRyID09IE1PREVNX0RBVEFfSU4pIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiBtb2RlbV9yZWNlaXZlX2J1ZmZlclswXTtcclxuICAgfVxyXG4gICBlbHNlIGlmKGFkZHIgPT0gTU9ERU1fREFUQV9SRVEpIHtcclxuICAgICAgaWYobW9kZW1fcmVjZWl2ZV9idWZmZXIubGVuZ3RoID09IDApIHJldHVybiAwO1xyXG4gICAgICBlbHNlIHJldHVybiAyNTU7XHJcbiAgIH1cclxuICAgZWxzZSBpZihhZGRyID09IE1PREVNX0NPTk5TVCkge1xyXG4gICAgICBpZighcGV0c2NpaS5jb25uZWN0ZWQpIHJldHVybiAyO1xyXG4gICAgICBlbHNlIHJldHVybiAwO1xyXG4gICB9XHJcbn1cclxuXHJcbmxldCBtb2RlbV9zdGF0ZSA9IDA7XHJcblxyXG4vLyBmdW5jdGlvbiBjYWxsZWQgZnJvbSBDNjQgd2hlbiBDUFUgd3JpdGVzIGluIHRoZSByYW5nZSAkRDdGMC0kRDdGRlxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZW1fd3JpdGUoYWRkcjogbnVtYmVyLCBkYXRhOiBudW1iZXIpXHJcbntcclxuICAgaWYoYWRkcj09TU9ERU1fQUNLKVxyXG4gICB7XHJcbiAgICAgIGlmKGRhdGE9PTApIHtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGRhdGE9PTEgJiYgbW9kZW1fc3RhdGU9PTApIHtcclxuICAgICAgICAgbW9kZW1fcmVjZWl2ZV9idWZmZXIgPSBtb2RlbV9yZWNlaXZlX2J1ZmZlci5zbGljZSgxKTtcclxuICAgICAgICAgbW9kZW1fc3RhdGUgPSAxO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgaWYoYWRkcj09TU9ERU1fREFUQV9PVVQpIHtcclxuICAgICAgbW9kZW1fdHJhbnNtaXRfYnVmZmVyLnB1c2goZGF0YSk7XHJcbiAgICAgIHBldHNjaWkuc2VuZF9kYXRhX3RvX2Jicyhtb2RlbV90cmFuc21pdF9idWZmZXIpO1xyXG4gICAgICBtb2RlbV90cmFuc21pdF9idWZmZXIgPSBbXTtcclxuICAgICAgaWYoIXBldHNjaWkuY29ubmVjdGVkKSBwZXRzY2lpLmNvbm5lY3QoKTsgICAgICBcclxuICAgfVxyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgbGV0IHBldHNjaWkgPSBuZXcgQkJTQ29ubmVjdG9yKCk7XHJcblxyXG5wZXRzY2lpLm9uX2Vycm9yID0gKGVycik9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgcHJpbnRtKGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IEVSUk9SIENPTk5FQ1RJTkcgVE8gV0VCU09DS0VUXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX29wZW4gPSAoKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKCdCQlM6IGNvbm5lY3RlZCcpO1xyXG4gICBwcmludG0oYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gQ09OTkVDVEVEXFxyYCk7XHJcbn07XHJcblxyXG5wZXRzY2lpLm9uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICBjb25zb2xlLmxvZygnQkJTOiBkaXNjb25uZWN0ZWQnKTsgICAgICBcclxufTtcclxuXHJcbnBldHNjaWkub25fZGF0YSA9IChieXRlcykgPT4ge1xyXG4gICBieXRlcy5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59O1xyXG4gICBcclxuZnVuY3Rpb24gcHJpbnRtKG1zZzogc3RyaW5nKSB7XHJcbiAgIGxldCBkYXRhID0gc3RyaW5nMlVpbnQ4QXJyYXkobXNnKTtcclxuICAgZGF0YS5mb3JFYWNoKGU9Pm1vZGVtX3JlY2VpdmVfYnVmZmVyLnB1c2goZSkpO1xyXG59IiwiLyoqKiogdXRpbGl0eSBmdW5jdGlvbnMgKioqKi9cclxuXHJcbmltcG9ydCB7IGM2NCB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleCh2YWx1ZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gMjtcclxuICAgbGV0IHMgPSBcIjAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgcmV0dXJuIHMuc3Vic3RyKHMubGVuZ3RoIC0gc2l6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhc3RlTGluZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICBmb3IobGV0IHQ9MDsgdDxsaW5lcy5sZW5ndGg7IHQrKykge1xyXG4gICAgICBjb25zdCBsaW5lYSA9IGxpbmVzW3RdO1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lYSk7XHJcbiAgICAgIHBhc3RlKGxpbmVhKTtcclxuICAgICAgcGFzdGVDaGFyKDEzKTsgICAvLyBDUlxyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKFwicGFzdGVkIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlKGxpbmU6IHN0cmluZykge1xyXG5cclxuICAgZm9yKGxldCB0PTA7dDxsaW5lLmxlbmd0aDt0KyspIHtcclxuICAgICAgbGV0IGMgPSBsaW5lLmNoYXJDb2RlQXQodCk7XHJcbiAgICAgIHBhc3RlQ2hhcihjKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXN0ZUNoYXIoYzogbnVtYmVyKSB7XHJcbiAgIHdoaWxlKGM2NC5wZWVrKDE5OCkgIT09IDApIHtcclxuICAgICAgYzY0LmV4KDE2MDAwKTtcclxuICAgfVxyXG4gICBjNjQucG9rZSg2MzEsYyk7XHJcbiAgIGM2NC5wb2tlKDE5OCwxKTtcclxufVxyXG5cclxuLypcclxuZnVuY3Rpb24gZHVtcE1lbShzdGFydCwgZW5kLCByb3dzKSB7XHJcbiAgIGlmKGVuZD09dW5kZWZpbmVkKSBlbmQ9c3RhcnQrMTU7XHJcbiAgIGlmKHJvd3M9PXVuZGVmaW5lZCkgcm93cz0xNjtcclxuICAgbGV0IHM9XCJcXHJcXG5cIjtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBoZXgociwgNCkgKyBcIjogXCI7ICAgICAgXHJcbiAgICAgIGZvcihsZXQgYz0wO2M8cm93cyAmJiAocitjKTw9ZW5kO2MrKykge1xyXG4gICAgICAgICBjb25zdCBieXRlID0gbWVtX3JlYWQocitjKTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSAoYnl0ZT4zMiAmJiBieXRlPDEyNykgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpIDogJy4nIDtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICB9XHJcbiAgIGNvbnNvbGUubG9nKHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhEdW1wKG1lbW9yeSwgc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcz1cIlwiO1xyXG4gICBmb3IobGV0IHI9c3RhcnQ7cjxlbmQ7cis9cm93cykge1xyXG4gICAgICBzKz0gaGV4KHIsIDQpICsgXCI6IFwiOyAgICAgIFxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IGhleChieXRlKStcIiBcIjtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3M7YysrKSB7XHJcbiAgICAgICAgIGNvbnN0IGJ5dGUgPSBtZW1vcnlbcitjXTtcclxuICAgICAgICAgcys9IChieXRlPjMyICYmIGJ5dGU8MTI3KSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkgOiAnLicgO1xyXG4gICAgICB9XHJcbiAgICAgIHMrPVwiXFxuXCI7XHJcbiAgIH1cclxuICAgcmV0dXJuIHM7XHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG5mdW5jdGlvbiBiaW4odmFsdWUsIHNpemUpIHtcclxuICAgaWYoc2l6ZSA9PT0gdW5kZWZpbmVkKSBzaXplID0gODtcclxuICAgbGV0IHMgPSBcIjAwMDAwMDAwMDAwMDAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDIpO1xyXG4gICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3B1X3N0YXR1cygpIHtcclxuICAgY29uc3Qgc3RhdGUgPSBjcHUuZ2V0U3RhdGUoKTtcclxuICAgcmV0dXJuIGBBPSR7aGV4KHN0YXRlLmEpfSBCQz0ke2hleChzdGF0ZS5iKX0ke2hleChzdGF0ZS5jKX0gREU9JHtoZXgoc3RhdGUuZCl9JHtoZXgoc3RhdGUuZSl9IEhMPSR7aGV4KHN0YXRlLmgpfSR7aGV4KHN0YXRlLmwpfSBJWD0ke2hleChzdGF0ZS5peCw0KX0gSVk9JHtoZXgoc3RhdGUuaXksNCl9IFNQPSR7aGV4KHN0YXRlLnNwLDQpfSBQQz0ke2hleChzdGF0ZS5wYyw0KX0gUz0ke3N0YXRlLmZsYWdzLlN9LCBaPSR7c3RhdGUuZmxhZ3MuWn0sIFk9JHtzdGF0ZS5mbGFncy5ZfSwgSD0ke3N0YXRlLmZsYWdzLkh9LCBYPSR7c3RhdGUuZmxhZ3MuWH0sIFA9JHtzdGF0ZS5mbGFncy5QfSwgTj0ke3N0YXRlLmZsYWdzLk59LCBDPSR7c3RhdGUuZmxhZ3MuQ31gOyAgIFxyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gd2FpdCh0aW1lKSB7XHJcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0aW1lKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHphcCgpIHsgICAgICAgICAgICBcclxuICAgcmFtLmZvckVhY2goKGUsaSk9PnJhbVtpXT0weDAwKTtcclxuICAgbGV0IHN0YXRlID0gY3B1LmdldFN0YXRlKCk7XHJcbiAgIHN0YXRlLmhhbHRlZCA9IHRydWU7XHJcbiAgIGNwdS5zZXRTdGF0ZShzdGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvd2VyKCkgeyAgICAgIFxyXG4gICB6YXAoKTtcclxuICAgc2V0VGltZW91dCgoKT0+Y3B1LnJlc2V0KCksIDIwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3AoKSB7ICAgXHJcbiAgIHN0b3BBdWRpbygpO1xyXG4gICBzdG9wcGVkID0gdHJ1ZTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gc3RvcHBlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ28oKSB7XHJcbiAgIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgb25lRnJhbWUoKTtcclxuICAgY29uc29sZS5sb2coXCJlbXVsYXRpb24gcmVzdW1lZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mbygpIHtcclxuICAgY29uc3QgYXZlcmFnZSA9IGF2ZXJhZ2VGcmFtZVRpbWUvMTAwMDtcclxuICAgY29uc29sZS5sb2coYGZyYW1lIHJhdGU6IGF2ZXJhZ2UgJHtNYXRoLnJvdW5kKGF2ZXJhZ2UqMTAsMikvMTB9IG1zICgke01hdGgucm91bmQoMS9hdmVyYWdlKjEwMDApfSBIeilgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgfCAoMTw8Yml0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0X2JpdCh2YWx1ZSwgYml0bikge1xyXG4gICByZXR1cm4gdmFsdWUgJiB+KDE8PGJpdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQodmFsdWUsIGJpdG1hc2spIHtcclxuICAgcmV0dXJuIHZhbHVlIHwgYml0bWFzazsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zZWMpIHtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgc2V0VGltZW91dCgoKT0+cmVzb2x2ZSgpLCBtc2VjKTtcclxuICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNldCh2YWx1ZSwgYml0bWFzaykge1xyXG4gICByZXR1cm4gdmFsdWUgJiAoMHhGRiBeIGJpdG1hc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkdW1wUG9pbnRlcnMoKSB7XHJcbiAgIGNvbnNvbGUubG9nKGBcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gICgweCR7aGV4KFBST0dORCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoUFJPR05EKSw0KX1cclxuICAgfCAgICAgQkFTSUMgcHJvZ3JhbSAgICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgPC0gVFhUVEFCICgweCR7aGV4KEJBU1RYVCw0KX0pICR7aGV4KG1lbV9yZWFkX3dvcmQoQkFTVFhUKSw0KX1cclxuICAgfCAgICBTeXN0ZW0gdmFyaWFibGVzICAgIHxcclxuICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgMHg4MDAwXHJcbmApO1xyXG59XHJcblxyXG5sZXQgZGVidWdCZWZvcmUgPSB1bmRlZmluZWQ7XHJcbmxldCBkZWJ1Z0FmdGVyID0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gYml0KGIsbikge1xyXG4gICByZXR1cm4gKGIgJiAoMTw8bikpPjAgPyAxIDogMDtcclxufSBcclxuXHJcbmZ1bmN0aW9uIG5vdF9iaXQoYixuKSB7XHJcbiAgIHJldHVybiAoYiAmICgxPDxuKSk+MCA/IDAgOiAxO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZHVtcFN0YWNrKCkge1xyXG4gICBjb25zdCBzcCA9IGNwdS5nZXRTdGF0ZSgpLnNwO1xyXG5cclxuICAgZm9yKGxldCB0PXNwO3Q8PTB4ZmZmZjt0Kz0yKSB7XHJcbiAgICAgIGNvbnN0IHdvcmQgPSBtZW1fcmVhZF93b3JkKHQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtoZXgodCw0KX06ICR7aGV4KHdvcmQsNCl9ICAoJHt3b3JkfSlgKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmRzV2l0aChzLCB2YWx1ZSkge1xyXG4gICByZXR1cm4gcy5zdWJzdHIoLXZhbHVlLmxlbmd0aCkgPT09IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBkZXN0KSB7XHJcbiAgIHNvdXJjZS5mb3JFYWNoKChlLGkpPT5kZXN0W2ldID0gZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VfbG0oc3RhcnQsIGVuZCwgcm93cykge1xyXG4gICBsZXQgcztcclxuICAgcyA9IGAxMCBGT1IgVD0mSCR7aGV4KHN0YXJ0LDQpfSBUTyAmSCR7aGV4KGVuZCw0KX1cXG5gO1xyXG4gICBzKz0gYDIwIFJFQUQgQjpQT0tFIFQsQlxcbmA7XHJcbiAgIHMrPSBgMzAgTkVYVFxcbmA7XHJcbiAgIHMrPSBgNDAgU1lTICZIJHtoZXgoc3RhcnQsNCl9XFxuYDtcclxuICAgcys9IGA1MCBFTkRcXG5gO1xyXG4gICBsZXQgbmxpbmUgPSAxMDAwO1xyXG4gICBpZihyb3dzPT11bmRlZmluZWQpIHJvd3M9ODtcclxuICAgZm9yKGxldCByPXN0YXJ0O3I8PWVuZDtyKz1yb3dzKSB7XHJcbiAgICAgIHMrPSBgJHtubGluZX0gREFUQSBgO1xyXG4gICAgICBmb3IobGV0IGM9MDtjPHJvd3MgJiYgKHIrYyk8PWVuZDtjKyspIHtcclxuICAgICAgICAgY29uc3QgYnl0ZSA9IG1lbV9yZWFkKHIrYyk7XHJcbiAgICAgICAgIHMrPSBgJHtieXRlfWA7XHJcbiAgICAgICAgIGlmKGMhPXJvd3MtMSAmJiAocitjKSE9ZW5kKSBzKz1cIixcIjtcclxuICAgICAgfVxyXG4gICAgICBzKz1cIlxcblwiO1xyXG4gICAgICBubGluZSArPSAxMDtcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG1yKClcclxue1xyXG4gICByZXR1cm4gbWVtX3JlYWRfd29yZChUTVJDTlQpICsgKG1lbV9yZWFkX3dvcmQoVE1SQ05UKzIpIDw8IDE2KTtcclxufVxyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5sZXQgY291bnRlcl9hdmcgPSAwO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRfY291bnRlcigpIHtcclxuICAgY291bnRlciA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wX2NvdW50ZXIoKSB7XHJcbiAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgbGV0IGNudCA9IGNvdW50ZXI7XHJcbiAgIGlmKGNudCA9PT0gMCkgY250ID0gbm93XHJcbiAgIGxldCBlbGFwc2VkID0gbm93IC0gY250OyAgIFxyXG4gICBjb3VudGVyX2F2ZyA9IDAuOSAqIGNvdW50ZXJfYXZnICsgMC4xICogZWxhcHNlZDtcclxuICAgcmV0dXJuIGNvdW50ZXJfYXZnO1xyXG59XHJcblxyXG5sZXQgTEVEID0gMDtcclxuZnVuY3Rpb24gbGVkX3JlYWQoKSB7XHJcbiAgIHJldHVybiBMRUQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZF93cml0ZSh2YWx1ZSkge1xyXG4gICBMRUQgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8gbWFrZSBhIGxvbmcgdXJsIGZyb20gYW4gZXhpc3Rpbmcgc2F2ZWQgcHJvZ3JhbVxyXG5hc3luYyBmdW5jdGlvbiBtYWtlQmFzZTY0KGZpbGVOYW1lKSB7XHJcbiAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZEZpbGUoZmlsZU5hbWUpO1xyXG4gICBsZXQgbG9uZ191cmwgPSB3aW5kb3cuYnRvYShieXRlcyk7XHJcbiAgIGNvbnNvbGUubG9nKGBodHRwczovL25pcHB1cjcyLmdpdGh1Yi5pby9jNjQtZW11P2I9JHtsb25nX3VybH1gKTtcclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZzJVaW50OEFycmF5KHN0cjogc3RyaW5nKSB7XHJcbiAgIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgIGZvcihsZXQgdD0wOyB0PHN0ci5sZW5ndGg7IHQrKylcclxuICAgICAgYXJyLnB1c2goc3RyLmNoYXJDb2RlQXQodCkgJiAweEZGKTtcclxuXHJcbiAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyU3RyaW5nKGRhdGE6IG51bWJlcltdKSB7XHJcbiAgIGxldCBzdHIgPSBcIlwiO1xyXG5cclxuICAgZm9yKHZhciBpbmRleD0wOyBpbmRleDxkYXRhLmxlbmd0aDsgaW5kZXgrKylcclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpbmRleF0pO1xyXG5cclxuICAgcmV0dXJuIHN0cjtcclxufSIsImltcG9ydCB7IGdldF93YXNtX2luc3RhbmNlIH0gZnJvbSBcIi4vZW1zY3JpcHRlbl93cmFwcGVyXCI7XHJcblxyXG4vLyBnb29kIHZhbHVlcyBmb3IgQ1JUIFBBTFxyXG5sZXQgU0NSRUVOX1cgPSAzOTI7XHJcbmxldCBTQ1JFRU5fSCA9IDI3MjtcclxubGV0IFBPU19YID0gMyo4O1xyXG5sZXQgUE9TX1kgPSAzKjg7XHJcblxyXG4vKlxyXG4vLyB2YWx1ZXMgZm9yIGRlYnVnXHJcbmxldCBTQ1JFRU5fVyA9IDI4NDtcclxubGV0IFNDUkVFTl9IID0gMzEyO1xyXG5sZXQgUE9TX1ggPSAwO1xyXG5sZXQgUE9TX1kgPSAwO1xyXG4qL1xyXG5cclxubGV0IHNhdHVyYXRpb24gPSAxLjA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlR2VvbWV0cnkoKSB7XHJcbiAgIC8vIGNhbnZhcyBpcyB0aGUgb3V0ZXIgY2FudmFzIHdoZXJlIHRoZSBhc3BlY3QgcmF0aW8gaXMgY29ycmVjdGVkXHJcbiAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgY2FudmFzLndpZHRoICA9IFNDUkVFTl9XICogMiAtKFBPU19YKjIpO1xyXG4gICBjYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0ggKiAyIC0oUE9TX1kqMik7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qXHJcbmxldCBXVyA9IDIzMjtcclxubGV0IEhIID0gMjcyO1xyXG4qL1xyXG5cclxubGV0IFdXID0gU0NSRUVOX1c7XHJcbmxldCBISCA9IFNDUkVFTl9IO1xyXG5cclxubGV0IHZpY19paV9jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxubGV0IHZpY19paV9jb250ZXh0ID0gdmljX2lpX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gbmV3IG1ldGhvZFxyXG5sZXQgdmljX2lpX2ltYWdlRGF0YSA9IHZpY19paV9jb250ZXh0IS5jcmVhdGVJbWFnZURhdGEoV1cqMiwgSEgqMik7XHJcbmxldCBibXAgPSBuZXcgVWludDMyQXJyYXkodmljX2lpX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XHJcblxyXG4vKlxyXG4vLyBvbGQgZHJhd2luZyBtZXRob2RcclxubGV0IHZpY19paV9pbWFnZURhdGEgPSB2aWNfaWlfY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgV1cqMiwgSEgqMik7XHJcbmxldCBpbWFnZWRhdGFfYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHZpY19paV9pbWFnZURhdGEuZGF0YS5sZW5ndGgpO1xyXG5sZXQgaW1hZ2VkYXRhX2J1ZjggPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoaW1hZ2VkYXRhX2J1ZmZlcik7XHJcbmxldCBibXAgPSBuZXcgVWludDMyQXJyYXkoaW1hZ2VkYXRhX2J1ZmZlcik7XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmRwX3NjcmVlbl91cGRhdGUocHRyOiBudW1iZXIpIHtcclxuICAgbGV0IHN0YXJ0ID0gcHRyIC8gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTMyLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICBsZXQgc2l6ZSA9IFdXKkhIO1xyXG4gICBsZXQgYnVmZmVyID0gZ2V0X3dhc21faW5zdGFuY2UoKS5IRUFQVTMyLnN1YmFycmF5KHN0YXJ0LHN0YXJ0K3NpemUpO1xyXG5cclxuICAgbGV0IHB0cjAgPSAwO1xyXG4gICBsZXQgcHRyMSA9IDA7XHJcbiAgIGxldCBwdHIyID0gV1cqMjtcclxuXHJcbiAgIGZvcihsZXQgeT0wO3k8SEg7eSsrKSB7XHJcbiAgICAgIGZvcihsZXQgeD0wO3g8V1c7eCsrKSB7XHJcbiAgICAgICAgIGxldCBwaXhlbCA9IGJ1ZmZlcltwdHIwXTtcclxuICAgICAgICAgYm1wW3B0cjErK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjErK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjIrK10gPSBwaXhlbDtcclxuICAgICAgICAgYm1wW3B0cjIrK10gPSBwaXhlbDtcclxuICAgICAgICAgcHRyMCsrO1xyXG4gICAgICB9XHJcbiAgICAgIHB0cjEgKz0gV1cqMjtcclxuICAgICAgcHRyMiArPSBXVyoyO1xyXG4gICB9XHJcblxyXG4gICAvKlxyXG4gICAvLyBvbGQgZHJhd2luZyBtZXRob2RcclxuICAgdmljX2lpX2ltYWdlRGF0YS5kYXRhLnNldChpbWFnZWRhdGFfYnVmOCk7XHJcbiAgIHZpY19paV9jb250ZXh0LnB1dEltYWdlRGF0YSh2aWNfaWlfaW1hZ2VEYXRhLCAtUE9TX1gsIC1QT1NfWSk7XHJcbiAgICovXHJcblxyXG4gICAvLyBuZXcgbWV0aG9kXHJcbiAgIHZpY19paV9jb250ZXh0IS5wdXRJbWFnZURhdGEodmljX2lpX2ltYWdlRGF0YSwgLVBPU19YLCAtUE9TX1kpO1xyXG5cclxuICAgLy9mcmFtZXMrKztcclxuICAgLy9pZihlbmRfb2ZfZnJhbWVfaG9vayAhPT0gdW5kZWZpbmVkKSBlbmRfb2ZfZnJhbWVfaG9vaygpO1xyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kRCA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3QnKTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGxvYWRfd2FzbSB9IGZyb20gXCIuL2Vtc2NyaXB0ZW5fd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSBcIi4vZW11bGF0b3JcIjtcclxuaW1wb3J0IHsgdmRwX3NjcmVlbl91cGRhdGUgfSBmcm9tIFwiLi92aWRlb1wiO1xyXG5pbXBvcnQgeyBhdWRpb19idWZfcmVhZHkgfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG4vL2ltcG9ydCB7IGxvYWRQcmcgfSBmcm9tIFwiLi9tZGF3c29uXCI7XHJcbmltcG9ydCB7IG1vZGVtX3JlYWQsIG1vZGVtX3dyaXRlIH0gZnJvbSBcIi4vcGV0c2NpaV9iYnNcIjtcclxuaW1wb3J0IHsgY2JtXzY0OTlfd3JpdGUsIGNibV82NDk5X3JlYWQsIGNibV82NDk5X3Jlc2V0IH0gZnJvbSBcIi4vY2JtXzY0OTkvY2JtXzY0OTlcIjtcclxuaW1wb3J0IHsgc2F2ZV9maWxlIH0gZnJvbSBcIi4vZmlsZXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBjNjQgfSBmcm9tIFwiLi9lbXNjcmlwdGVuX3dyYXBwZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vYnJvd3NlclwiO1xyXG5cclxuLy8gcHVibGlzaCBvbiBnbG9iYWxcclxuKHdpbmRvdyBhcyBhbnkpLnZkcF9zY3JlZW5fdXBkYXRlID0gdmRwX3NjcmVlbl91cGRhdGU7XHJcbih3aW5kb3cgYXMgYW55KS5hdWRpb19idWZfcmVhZHkgPSBhdWRpb19idWZfcmVhZHk7XHJcbi8vKHdpbmRvdyBhcyBhbnkpLmxvYWRQcmcgPSBsb2FkUHJnO1xyXG4od2luZG93IGFzIGFueSkubW9kZW1fcmVhZCA9IG1vZGVtX3JlYWQ7XHJcbih3aW5kb3cgYXMgYW55KS5tb2RlbV93cml0ZSA9IG1vZGVtX3dyaXRlO1xyXG4od2luZG93IGFzIGFueSkuc2F2ZV9maWxlID0gc2F2ZV9maWxlO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmNibV82NDk5X3Jlc2V0ID0gY2JtXzY0OTlfcmVzZXQ7XHJcbih3aW5kb3cgYXMgYW55KS5jYm1fNjQ5OV9yZWFkICA9IGNibV82NDk5X3JlYWQ7XHJcbih3aW5kb3cgYXMgYW55KS5jYm1fNjQ5OV93cml0ZSA9IGNibV82NDk5X3dyaXRlO1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmM2NCA9IGM2NDtcclxuXHJcbihhc3luYyBmdW5jdGlvbigpIHtcclxuICAgYXdhaXQgbG9hZF93YXNtKCk7XHJcbiAgIG1haW4oKTsgICAgXHJcbn0pKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9