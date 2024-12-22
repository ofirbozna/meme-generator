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
            posX: 200,
            posY: 200,
        },


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

// function getSelectedLine(){
//     return gSelectedLineIdx
// }

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}


function setLineTxt(val) {
    gMeme.lines[gMeme.selectedLineIdx].txt = val
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(borderColor, fillColor) {

    gMeme.lines[gMeme.selectedLineIdx].borderColor = borderColor
    gMeme.lines[gMeme.selectedImgId].fillColor = fillColor
}

function setFontSize(diff) {
    gMeme.lines[0].size += diff
}

function addLine() {
    gMeme.lines.push({
        txt: 'ADD TEXT',
        size: 20,
        borderColor: 'red',
        fillColor: 'white',
        posX: getRandomInt(40, 400),
        posY: getRandomInt(40, 400)
    })
}

function swichLine() {
    if (gMeme.selectedLineIdx+ 1 < gMeme.lines.length) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx = 0
    
}