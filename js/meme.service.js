'use strct'

var gImgs = [
    {
        id: 1,
        url: 'imgs/1.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 2,
        url: 'imgs/2.jpg',
        keywords: ['funny', 'cat']
    }

]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'ADD TEXT',
            size: 20,
            borderColor: 'red',
            fillColor: 'white',
        }
    ]
}

var gKeywordSearchCountMap = {
    'funny': 12,
    'cat': 16,
    'baby': 2
}


function getMeme() {
    return gMeme
}

function getImges() {
    return gImgs
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}


function setLineTxt(val) {
    gMeme.lines[0].txt = val
}

function setImg(imgId) {
    //    const img = getImgById(imgId)
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'ADD TEXT',
                size: 20,
                borderColor: 'red',
                fillColor: 'white',
            }
        ]
    }

}

function setColor(borderColor, fillColor) {

    gMeme.lines[0].borderColor = borderColor
    gMeme.lines[0].fillColor = fillColor
}

function setFontSize(diff) {
    gMeme.lines[0].size += diff
}