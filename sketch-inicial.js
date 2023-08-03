const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random =require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'green';


    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.5;
    const h = height * 0.5;

    

    context.translate(x,y);
    context.rotate(0.75);

    context.lineWidth = 12;

    context.beginPath();
    context.rect(-w *0.5,-h * 0.5,w,h);
    context.fill();
    context.stroke();

    

    context.clip();

    
    for(let i=0; i<50;i++){
      /*
      x=random.range(0,width);
      y=random.range(0,height);
      w=random.range(0,width);
      h=random.range(40,200);*/

      context.fill = 'blue';

      drawLines({context});


    }

  };
};

const drawLines = ({context, radius = 50,width,height}) => {
  context.save();

  context.beginPath();
  context.lineWidth = 5;
  context.arc(0,0,radius,0, Math.PI *2)
  context.stroke();

  context.restore();
}

canvasSketch(sketch, settings);
