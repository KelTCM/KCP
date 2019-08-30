// Created By Kelvin Zane Hansen
// Please Sub To My Youtube Channel
// KelTCM The Coding Minecart
// Please Do Not Copy or Take as your own work
// Thank You
// Version 0.03/Early Testing Phase 3

const PI = Math.PI
const HALF_PI = PI/2
const QUARTER_PI = PI/4
const TWO_PI = PI*2
const CLOSE = "close"

function getCanvas(id = "", render = "2D", width = 400, height = 400) {
    if(draw) {
        function runDraw() {
            draw()
            window.requestAnimationFrame(runDraw)
        }
        window.requestAnimationFrame(runDraw)
    }
    // if(!setup) {
    //     setup();
    // }
    let renderName = "2d";
    if(render == "3d") {
        renderName = "webgl";
    }
    let canvas = new Canvas(id, renderName, Number(width), Number(height));
    return canvas;
}

function year(UTC = false) {
    if(!UTC) {
    return new Date().getFullYear()
    }else{
        return new Date().getUTCFullYear()
    }
}

function month(UTC = false) {
    if(!UTC) {
        return new Date().getMonth()
    }else{
        return new Date().getUTCMonth()
    }
}

function second(UTC = false) {
    if(UTC) {
        return new Date().getUTCSeconds()
    }else{
        return new Date().getSeconds()
    }
}

function minute(UTC = false) {
    if(UTC) {
        return new Date().getUTCMinutes()
    }else{
        return new Date().getMinutes()
    }
}

function hour(UTC = false) {
    if(UTC) {
        return new Date().getUTCHours()
    }else{
        return new Date().getHours()
    }
}

function day(UTC = false) {
    if(UTC) {
        return new Date().getUTCDay()
    }else{
        return new Date().getDay()
    }
}

class Canvas {
    constructor(canvasId, render = "2d", w, h) {
        this.insideBeginShape = false;
        this.bx = 0;
        this.by = 0;
        this.bz = 0
        this.render = render;
        this.canvas = document.getElementById(canvasId).getContext(render);
        this.canvas.canvas.width = w;
        this.canvas.canvas.height = h;
        this.d = Number(render[0]);
        this.width = w;
        this.height = h;
        this.color = [255, 255, 255, 255];
        this.fill(255, 255, 255);
        this.stroke(0, 0, 0);
        this.translation = createVector(0, 0);
        this.totalVertexesOfLatestShape;
    };

    rect(x, y, w, h) {
        x+=this.translation.x
        y+=this.translation.y
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
        x += this.translation.x
        y += this.translation.y
        this.canvas.moveTo(x+(w/2), y)
        for(let i = 0; i < w * h; i++) {
            let xpos = w/2 * cos(angle) + x;
            let ypos = h/2 * sin(angle) + y;
            this.canvas.lineTo(xpos, ypos);
            angle+=0.05;
        };
        this.canvas.fill()
        this.canvas.stroke()
        this.canvas.closePath();
    }

    arc(x, y, w, h, sa, ea) {
        this.canvas.beginPath();
        this.canvas.moveTo(w/2 * cos(sa), h/2 * sin(sa))
        for(let angle = sa; angle < ea+0.01; angle+=0.01) {
            let x = w/2 * cos(angle);
            let y = h/2 * sin(angle);
            this.canvas.lineTo(x, y)
        }
        this.canvas.fill();
        this.canvas.stroke();
        this.closePath();
    }

    line(x, y, x2, y2) {
        x+=this.translation.x
        y+=this.translation.y
        x2+=this.translation.x
        y2+=this.translation.y
        this.canvas.beginPath()
        this.canvas.moveTo(x, y)
        this.canvas.lineTo(x2, y2)
        this.canvas.stroke()
        this.canvas.closePath();
    }

    point(x, y, size) {
        this.circle(x, y, size);
    }

    translate(x, y) {
        this.translation = createVector(x, y);
    }

    beginShape(x, y, z = 0) {
        this.canvas.beginPath();
        if(this.render === "webgl") {
            this.canvas.moveTo(x, y, z);
        }else{
            this.canvas.moveTo(x, y);
        }
        this.totalVertexesOfLatestShape = 0;
        this.insideBeginShape = true;
    }

    vertex(x, y, z = 0) {
        if(this.render === "2d") {
            this.canvas.lineTo(x, y);
        }else{
            this.canvas.lineTo(x, y, z);
        }
    }

    endShape(toDo) {
        if(toDo === CLOSE) {
            this.canvas.lineTo(this.bx, this.by, this.bz)
        }
        this.insideBeginShape = false;
        this.canvas.stroke();
        this.canvas.fill();
        this.canvas.closePath();
    }
};

function createVector(x = 0, y = 0, z = 0) {
    return {x, y, z}
}