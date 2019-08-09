// Created By Kelvin Zane Hansen
// Please Sub To My Youtube Channel
// KelTCM The Coding Minecart
// Please Do Not Copy or Take as your own work
// Thank You
// Version 0.02

let fillR = 255
let fillG = 255
let fillB = 255
let fillA = 255

function getCanvas(id = "", render = "2D") {
    let renderName = "2d"
    if(render == "3d") {
        renderName = "webgl"
    }
    let canvas = new Canvas(id, renderName);
    return canvas;
}

function background(canvas, r, g, b, a = 255) {
    fill(r, g, b, a)
    rect(0, 0, canvas.canvas.width, canvas.canvas.height)
    fill(fillR, fillG, fillB, fillA)
}

function fill(canvasToAddFill, r, g, b, a = 255) {
    canvasToAddFill.fillStyle = "rgba(" + r + g + b + a +")"
    fillR = r
    fillG = g
    fillB = b
    fillA = a
}

function noFill(canvas) {
    canvasToAddFill.fillStyle = "rgba(" + 0 + 0 + 0 + 0 +")"
    fillIn == false
}

class Canvas {
    constructor(canvasId, render = "2d") {
        this.canvas = document.getElementById(canvasId).getContext(render)
    }

    rect(x, y, w, h) {
        this.canvas.fillRect(x, y, w, h)
    }

    size(width, height) {
        this.canvas.canvas.width = width
        this.canvas.canvas.height = height
    }

    stroke(r, g, b, a = 255) {
        this.canvas.strokeStyle = "rgba(" + r + g + b + a + ")"
    }

    fill(r, g, b, a = 255) {
        this.canvas.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
        fillR = r
        fillG = g
        fillB = b
        fillA = a
    }
}