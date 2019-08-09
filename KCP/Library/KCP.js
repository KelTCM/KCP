// Created By Kelvin Zane Hansen
// Please Sub To My Youtube Channel
// KelTCM The Coding Minecart
// Please Do Not Copy or Take as your own work
// Thank You
// Version 0.03/Early Testing Phase 3

function getCanvas(id = "", render = "2D", width = 400, height = 400) {
    let renderName = "2d";
    if(render == "3d") {
        renderName = "webgl";
    }
    let canvas = new Canvas(id, renderName, Number(width), Number(height));
    return canvas;
};

function sin(x) {
    return Math.sin(x);
}

function cos(x) {
    return Math.cos(x);
}

class Canvas {
    constructor(canvasId, render = "2d", w, h) {
        this.canvas = document.getElementById(canvasId).getContext(render);
        this.canvas.canvas.width = w;
        this.canvas.canvas.height = h;
        this.d = Number(render[0]);
        this.width = 400;
        this.height = 400;
        this.color = [255, 255, 255, 255];
        this.fill(255, 255, 255)
        this.stroke(0, 0, 0)
    };

    rect(x, y, w, h) {
        this.canvas.beginPath();
        this.canvas.moveTo(x, y);
        this.canvas.lineTo(x + w, y);
        this.canvas.lineTo(x + w, y + h);
        this.canvas.lineTo(x, y + h);
        this.canvas.lineTo(x, y);
        this.canvas.fill()
        this.canvas.stroke()
        this.canvas.closePath()
    };

    resize(width, height) {
        this.canvas.canvas.width = width;
        this.canvas.canvas.height = height;
        this.width = width
        this.height = height
    };

    stroke(r, g = r, b = r, a = 255) {
        this.canvas.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        this.color[0] = r
        this.color[1] = g
        this.color[2] = b
        this.color[3] = a
    };

    noStroke() {
        this.stroke(0, 0, 0, 0);
    }

    noFill() {
        this.fill(0, 0, 0, 0);
    };

    fill(r, g, b, a = 255) {
        this.canvas.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        this.color[0] = r;
        this.color[1] = g;
        this.color[2] = b;
        this.color[3] = a;
    };

    background(r, g, b, a = 255) {
        this.canvas.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        this.canvas.fillRect(0, 0, this.width, this.height);
        this.fill(this.color[0], this.color[1], this.color[2], this.color[3])
    };

    circle(x, y, r) {
        this.ellipse(x, y, r*2)
    }

    ellipse(x, y, w, h = w) {
        this.canvas.beginPath();
        let angle = 0;
        this.canvas.moveTo(x+w, y)
        for(let i = 0; i < w + h; i++) {
            let xpos = w * cos(angle) + x;
            let ypos = h * sin(angle) + y;
            this.canvas.lineTo(xpos, ypos);
            angle+=0.01*(w*h);
        };
        this.canvas.fill()
        this.canvas.stroke()
        this.canvas.closePath();
    };
};