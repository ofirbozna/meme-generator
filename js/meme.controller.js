'use strict'
let gElCanvas
let gCtx
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']



function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    const meme = getMeme()
    const img = getImgById(meme.selectedImgId)
    renderMeme()
    renderGallery()
    addLinsteners()
    resizeCanvas()

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth - 2
}



function renderMeme() {
    const meme = getMeme()
    const img = getImgById(meme.selectedImgId)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach((line, idx) => {
            line.size = drawText(line.txt, line.posX, line.posY, line.borderColor, line.fillColor, line.fontSize)
            if (idx === meme.selectedLineIdx) frameSelectedLine(line.posX, line.posY, line.size, line.fontSize)
        })
    }
    renderSelectedLineInputs()
}

function drawText(text, x, y, borderColor, fillColor, fontSize = 30) {

    var font = fontSize + 'px' + ' Arial'

    gCtx.lineWidth = 1
    gCtx.strokeStyle = borderColor
    gCtx.fillStyle = fillColor
    gCtx.font = font

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    return gCtx.measureText(text).width
}

function onDownloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-canvas'
}

function onSetColor() {
    const elFillColor = document.querySelector('.fill-color')
    const elBorderColor = document.querySelector('.border-color')
    setColor(elBorderColor.value, elFillColor.value)
    renderMeme()
}

function onSetLineTxt(val) {
    setLineTxt(val)
    renderMeme()
}


function onSetFontSize(diff) {
    setFontSize(diff)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine() {
    swichLine()
    renderMeme()
}

function frameSelectedLine(x, y, textWidth, textHeight) {
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 2;
    gCtx.strokeRect(x - 10, y - textHeight - 2, textWidth + 20, textHeight + 10)
}

function addLinsteners() {
    addMouseListeners()
    addMouseListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    const meme = getMeme()
    meme.lines.forEach((line, idx) => {
        if (isLineClicked(pos, line.posX, line.posY, line.size, line.fontSize)) meme.selectedLineIdx = idx
    })
    renderMeme()
}

function getEvPos(ev) {

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        // Prevent triggering the mouse ev
        ev.preventDefault()
        // Gets the first touch point
        ev = ev.changedTouches[0]
        // Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}


function renderSelectedLineInputs() {
    const meme = getMeme()
    const selectedLine = meme.lines[meme.selectedLineIdx]
    const elFillColor = document.querySelector('.fill-color')
    const elBorderColor = document.querySelector('.border-color')
    const elTxt = document.querySelector('.line-txt')
    elFillColor.value = selectedLine.fillColor
    elBorderColor.value = selectedLine.borderColor
    elTxt.value = selectedLine.txt
}

function onClickGallery(){
    const elGallery =document.querySelector('.gallery-container')
    const elMemeEditor = document.querySelector('.meme-editor')
    elGallery.classList.remove('hidden')
elMemeEditor.classList.add('hidden')

}

function onClickMemeGenerator(){
    const elGallery =document.querySelector('.gallery-container')
    const elMemeEditor = document.querySelector('.meme-editor')
    elGallery.classList.add('hidden')
elMemeEditor.classList.remove('hidden')
}

function onToggleMenu(){
    const elBody = document.querySelector('body')
    elBody.classList.toggle('menu-open')

}