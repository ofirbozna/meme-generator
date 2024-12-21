'use strict'

function renderGallery() {
    const imges = getImges()
    const elGallery = document.querySelector('.gallery')
    const strHtml = imges.map(img => `<img src="${img.url}" alt="" onclick="onImgSelect(${img.id})">`)
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
}