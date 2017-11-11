let cw = window.innerWidth * 0.2;
let ch = window.innerWidth * 0.2;
const pixelStep = 5;

const s1 = (p) => {
  p.setup = () => {
    p.createCanvas(cw, ch);
    p.background(255);
  }
  p.draw = () => {
    p.fill(0);
    p.stroke(255);
    p.ellipse(p.random(cw), p.random(ch), 20, 20);
  }
  // responsive *need fix
  p.windowResized = () => {
    cw = window.innerWidth * 0.2;
    ch = window.innerWidth * 0.2;
    p.resizeCanvas(cw, ch);
    p.background(255);
  }
};
new p5(s1, window.document.getElementById('sketch' + 2));


const s2 = (p) => {
  p.setup = () => {
    p.createCanvas(cw, ch);
    p.background(0);
    p.pixelDensity(1);
  }
  p.draw = () => {
    p.fill(255);
    p.noStroke();
    for (let x = 0; x < cw; x += pixelStep) {
      for (let y = 0; y < ch; y += pixelStep) {
        p.ellipse(x, y, 2, 2);
      }
    }
  }
  // repeated code
  p.windowResized = () => {
    cw = window.innerWidth * 0.2;
    ch = window.innerWidth * 0.2;
    p.resizeCanvas(cw, ch);
    p.background(0);
  }
};
new p5(s2, window.document.getElementById('sketch' + 1));





let mic, amp;
let volhistory = [];
const s3 = (p) => {
  p.setup = () => {
    p.createCanvas(cw, ch);
    p.background(0);
    mic = new p5.AudioIn();
    mic.start();
    amp = new p5.Amplitude();
  }
  p.draw = () => {
    p.background(255);
    let vol = mic.getLevel();
    volhistory.push(vol);
    p.strokeWeight(2);
    p.noFill();

    p.translate(0, 50);
    p.beginShape();
    for (let i = 0; i < volhistory.length; i++) {
        let c = p.map(volhistory[i], 0, 1, 200, 0);
        p.fill(c);
        p.noStroke();

        let y = p.map(volhistory[i], 0, 1, ch / 2, -ch / 2);
        p.vertex(i, y);
    }
    p.endShape();

    if (volhistory.length > cw) {
        volhistory.splice(0, 1);
    }
  }
  // repeated code
  p.windowResized = () => {
    cw = window.innerWidth * 0.2;
    ch = window.innerWidth * 0.2;
    p.resizeCanvas(cw, ch);
    p.background(0);
  }
};
new p5(s3, window.document.getElementById('sketch' + 3));
