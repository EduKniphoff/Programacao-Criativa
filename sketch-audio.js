const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

let audio;

const sketch = () => {

  const audio = document.createElement('audio');
  audio.src = "audio/3-Shake It Bololo ft. Classics of MPB";


  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

const addListeners = () =>{
  window.addEventListener('mouseup', () =>{
    if (audio.pause) audio.play();
    else audio.pause();
  });
};

addListeners();
canvasSketch(sketch, settings);
