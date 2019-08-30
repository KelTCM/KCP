const WEBGL

function createSlider(min, max, value) {
    let slider = document.createElement("input");
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.value = value;
    document.body.appendChild(slider);
    return slider;
}

function createInput() {
    let input = document.createElement("input");
    document.body.appendChild(input);
    return input;
}

function createTextArea() {
    let textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    return textarea
}

function createCanvas(w, h, render = "2d") {
    let rrender = "2d"
    if(render = WEBGL) {
        rrender = "webgl"
    }
    let crcanvas = document.createElement("canvas");
    crcanvas.id = Math.random() + ""
    let canvas = new Canvas(crcanvas.id, rrender, w, h);
    document.body.appendChild(canvas);
    return canvas;
}