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

function createCanvas(w, h) {
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.id = Math.random() + ""

    document.body.appendChild(canvas);
    return canvas;
}