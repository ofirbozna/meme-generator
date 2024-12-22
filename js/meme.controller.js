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
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach((line,idx) => {
            const txtWidth = drawText(line.txt, line.posX, line.posY, line.borderColor, line.fillColor, line.size)
            if( idx === meme.selectedLineIdx) frameSelectedLine(line.posX, line.posY,txtWidth,line.size)
    })
    }

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

function frameSelectedLine(x,y,textWidth,textHeight){
    gCtx.strokeStyle = 'black'; 
    gCtx.lineWidth = 2; 
    gCtx.strokeRect(x - 10, y - textHeight-2, textWidth + 20, textHeight + 10)
}
