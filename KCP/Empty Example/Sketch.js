let canvas = getCanvas("canvas1", "2d");
let x = 0
let w = 1
canvas.noStroke()

function draw() {
    window.requestAnimationFrame(draw);
    canvas.background(0, 0, 0, 255)
    canvas.fill(255, 255, 255)
    canvas.rect(x, 0, w, canvas.height)
    x++
    if(x > canvas.width) {
        x = -w
    }
}
window.requestAnimationFrame(draw);
// canvas.resize(800, 600);
// canvas.background(255, 255, 0)
// canvas.fill(255, 0, 0);
// canvas.rect(100, 100, 200, 200);
// canvas.noStroke();
// canvas.ellipse(200, 100, 100, 50);