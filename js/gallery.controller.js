'use strict'

function renderGallery(val = '') {
    const imges = getImges(val)
    const elGallery = document.querySelector('.gallery')
    const strHtml = imges.map(img => `<img src="${img.url}" alt="" onclick="onImgSelect(${img.id})">`).join('')
    elGallery.innerHTML = strHtml
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    onClickMemeGenerator()
}

function onGetFlexibleMeme() {
    getFlexibleMeme()
    renderMeme()
    onClickMemeGenerator()
}

function onFilterByKeyWords(val) {
    renderGallery(val)
}

function onClearSearch(){
    const elFilter = document.querySelector('.filter-meme')
    elFilter.value = ''
}


