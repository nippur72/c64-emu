(function () {
  //File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer;
  //Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;
  // Safari 13 does not have arrayBuffer
  // Firefox 83 has it but causes troubles (see bbs.js)
  File.prototype.arrayBuffer = myArrayBuffer;
  Blob.prototype.arrayBuffer = myArrayBuffer;

  function myArrayBuffer() {
    // this: File or Blob
    return new Promise((resolve) => {
      let fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result);
      };
      fr.readAsArrayBuffer(this);
    })
  }
})();

// This is a simple trick to implement Blob.arrayBuffer (https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer) using FileReader