var cw = window.innerWidth * 0.2;
var ch = window.innerWidth * 0.2;
var pixelStep = 5;

var s1 = function(p) {
    p.setup = function() {
        p.createCanvas(cw, ch);
        p.background(255);
    }
    p.draw = function() {
    	p.fill(0);
    	p.stroke(255);
        p.ellipse(p.random(cw), p.random(ch), 20, 20);
    }
};
new p5(s1, window.document.getElementById('sketch1'));


var s2 = function(p) {
    p.setup = function() {
        p.createCanvas(cw, ch);
        p.background(0);
        p.pixelDensity(1);
    }
    p.draw = function() {
        p.loadPixels();
        

        for (let x = 0; x < cw; x+=pixelStep) {
            for (let y = 0; y < ch; y+=pixelStep) {
                let index = (x + y * cw)*4;
                p.pixels[index] = x;
                p.pixels[index+1] = y;
                p.pixels[index+2] = 255;
                p.pixels[index+3] = 255;
            }
        }
        p.updatePixels();
    }
};
new p5(s2, window.document.getElementById('sketch2'));