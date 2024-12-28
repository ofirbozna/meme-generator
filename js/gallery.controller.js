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

function onClearSearch() {
    const elFilter = document.querySelector('.filter-meme')
    elFilter.value = ''
}


function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
    onClickMemeGenerator()
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    const reader = new FileReader()

    reader.onload = function (event) {
        const img = new Image()
        img.onload = () => {
            onImageReady(img)
        }
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    addImg(img.src)
    setAsMeme()
    renderMeme()
}
