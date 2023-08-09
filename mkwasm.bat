@echo off

rem abilitare il path a emcc 3.1.31 con:
rem ..\emsdk\emsdk_env.bat

del dist\*.wasm /q

call emcc wasm\sys_c64.c -O3 ^
   -s EXPORTED_RUNTIME_METHODS=ccall,cwrap ^
   -s ENVIRONMENT=web ^
   -s MODULARIZE=1 ^
   -s EXPORT_NAME="emscripten_module" ^
   -s ALLOW_MEMORY_GROWTH=1 ^
   -s EXPORT_ES6=1 ^
   -o emscripten_module.js

echo done


