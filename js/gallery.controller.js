'use strict'

function renderGallery() {
    const imges = getImges()
    const elGallery = document.querySelector('.gallery')
    const strHtml = imges.map(img => `<img src="${img.url}" alt="" onclick="onImgSelect(${img.id})">`).join()
    elGallery.innerHTML = strHtml.split(',').join('')
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
    onClickMemeGenerator()
}