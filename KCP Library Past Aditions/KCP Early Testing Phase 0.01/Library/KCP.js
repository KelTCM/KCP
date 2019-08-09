//Created By Kelvin Zane Hansen
//Please Sub To My Youtube Channel
//KelTCM The Coding Minecart
//Please Do Not Copy or Take as your own work
//Thank You
//Version 0.01

let fillR = 255
let fillG = 255
let fillB = 255
let fillA = 255
let strokeR = 0
let strokeG = 0
let strokeB = 0
let strokeA = 255
let fillIn = true
let strokeIn = true

function fetchCanvas(id, render) {
    let canvasToFetch = document.getElementById(id).getContext(render)
    fill(canvasToFetch, fillR, fillG, fillB, fillA)
    stroke(canvasToFetch, strokeR, strokeG, strokeB)
    return canvasToFetch
}

function setSize(canvas, width, height) {
    canvas.canvas.width = width
    canvas.canvas.height = height
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

function stroke(canvasToAddAStroke, r, g, b, a = 255) {
    canvasToAddAStroke.strokeStyle = "rgba(" + r + g + b + a + ")"
    strokeR = 255
    strokeG = 255
    strokeB = 255
    strokeA = 255
}

function noFill(canvas) {
    canvasToAddFill.fillStyle = "rgba(" + 0 + 0 + 0 + 0 +")"
    fillIn == false
}

function rect(canvas, x, y, w, h) {
    canvas.beginPath()
    canvas.moveTo(x, y)
    canvas.lineTo(x + w, y)
    canvas.lineTo(x + w, y + h)
    canvas.lineTo(x, y + h)
    canvas.lineTo(x, y)
    canvas.closePath()
    if(fillIn) {
        canvas.fill()
    }
    if(strokeIn) {
        canvas.stroke()
    }
}