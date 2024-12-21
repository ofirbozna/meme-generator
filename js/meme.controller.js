'use strict'
let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}


function renderMeme() {
    const meme = getMeme()
    const img = getImgById(meme.selectedImgId)

    const borderColor = meme.lines[0].borderColor
    const fillColor = meme.lines[0].fillColor
    const fontSize = meme.lines[0].size

    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, 200, 200, borderColor, fillColor, fontSize)
    }

}

function drawText(text, x, y, borderColor, fillColor, fontSize = 30) {
    var font = fontSize + 'px' + ' Arial'

    gCtx.lineWidth = 1
    gCtx.strokeStyle = borderColor
    gCtx.fillStyle = fillColor
    gCtx.font = font
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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