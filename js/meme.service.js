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

    },
    {
        id: 3,
        url: 'imgs/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: 'imgs/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'imgs/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: 'imgs/6.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 7,
        url: 'imgs/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: 'imgs/8.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 9,
        url: 'imgs/9.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 10,
        url: 'imgs/10.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 11,
        url: 'imgs/11.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 12,
        url: 'imgs/12.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 13,
        url: 'imgs/13.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 14,
        url: 'imgs/14.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 15,
        url: 'imgs/15.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 16,
        url: 'imgs/16.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 17,
        url: 'imgs/17.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 18,
        url: 'imgs/18.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 19,
        url: 'imgs/19.jpg',
        keywords: ['funny', 'cat']
    }


]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'ADD TEXT',
            fontSize: 20,
            borderColor: '#22252c',
            fillColor: '#ffffff',
            posX: 30,
            posY: 30,
            size: 0,
            fontFamily: 'Arial',
            isDrag: false
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
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillColor
}

function setLowerBiggerFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].fontSize += diff
}

function setFontSize(value) {
    gMeme.lines[gMeme.selectedLineIdx].fontSize = value
}

function addLine() {
    gMeme.lines.push({
        txt: 'ADD TEXT',
        fontSize: 20,
        borderColor: '#22252c',
        fillColor: '#ffffff',
        posX: getRandomInt(40, 100),
        posY: getRandomInt(40, 100),
        size: 0,
        fontFamily: 'Arial',
        isDrag: false
    })
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function swichLine() {
    if (gMeme.selectedLineIdx + 1 < gMeme.lines.length) gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx = 0

}

function isLineClicked(clickedPos, linePosX, linePosY, textWidth, textHeight) {
    return clickedPos.x >= linePosX && clickedPos.x <= linePosX + textWidth &&
        clickedPos.y >= linePosY - textHeight && clickedPos.y <= linePosY;
}

function ChangeFont(value) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = value
}




//////////
function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posX += dx
    selectedLine.posY += dy

}

function  moveLineRightLeft(diff){
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posX += diff
}

function moveLineUpDown(diff){
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posY += diff
}

