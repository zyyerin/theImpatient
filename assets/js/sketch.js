let cw = window.innerHeight/4;
let ch = window.innerHeight/4;

const s1 = (p) => {
  p.setup = () => {
    p.createCanvas(cw, ch);
  }
  p.draw = () => {
    p.fill(0);
    p.noStroke();
    p.ellipse(p.random(cw), p.random(ch), 1, 1);
  }
  // responsive *need fix
  p.windowResized = () => {
    cw = window.innerWidth * 0.2;
    ch = window.innerWidth * 0.2;
    p.resizeCanvas(cw, ch);
    p.background(255);
  }
};
new p5(s1, window.document.querySelector('#sketch1'));
