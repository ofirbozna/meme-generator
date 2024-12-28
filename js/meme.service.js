'use strct'

let gImgs = [
    {
        id: 1,
        url: 'imgs/1.jpg',
        keywords: ['funny', 'Tramp',]
    },
    {
        id: 2,
        url: 'imgs/2.jpg',
        keywords: ['cute', 'dogs', 'love']

    },
    {
        id: 3,
        url: 'imgs/3.jpg',
        keywords: ['sleep', 'dog', 'baby']
    },
    {
        id: 4,
        url: 'imgs/4.jpg',
        keywords: ['sleep', 'cat']
    },
    {
        id: 5,
        url: 'imgs/5.jpg',
        keywords: ['baby', 'proud', 'determined', 'sad']
    },
    {
        id: 6,
        url: 'imgs/6.jpg',
        keywords: ['funny', 'explain']
    },
    {
        id: 7,
        url: 'imgs/7.jpg',
        keywords: ['suprised', 'baby', 'exited']
    },
    {
        id: 8,
        url: 'imgs/8.jpg',
        keywords: ['funny', 'proud', 'sexy']
    },
    {
        id: 9,
        url: 'imgs/9.jpg',
        keywords: ['laugh', 'baby', 'happy']
    },
    {
        id: 10,
        url: 'imgs/10.jpg',
        keywords: ['laugh', 'happy']
    },
    {
        id: 11,
        url: 'imgs/11.jpg',
        keywords: ['kiss', 'funny']
    },
    {
        id: 12,
        url: 'imgs/12.jpg',
        keywords: ['funny', 'man']
    },
    {
        id: 13,
        url: 'imgs/13.jpg',
        keywords: ['happy', 'cheers']
    },
    {
        id: 14,
        url: 'imgs/14.jpg',
        keywords: ['serious', 'man']
    },
    {
        id: 15,
        url: 'imgs/15.jpg',
        keywords: ['serious', 'man']
    },
    {
        id: 16,
        url: 'imgs/16.jpg',
        keywords: ['laugh', 'man']
    },
    {
        id: 17,
        url: 'imgs/17.jpg',
        keywords: ['man', 'serious']
    },
    {
        id: 18,
        url: 'imgs/18.jpg',
        keywords: ['toy', 'thinking']
    },
    {
        id: 19,
        url: 'imgs/19.jpg',
        keywords: ['toy', 'thinking']
    },
]

let gMeme = {
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

let gRandomLines = [
    'OVERTHINKING',
    'THAT IS WHY I AM SINGLE',
    'NO MORE INTENET FOR YOY!',
    'I WILL NEVER SLEEP AGAIN',
    'NO STRESS JUST VIBING',
    'MEN BE LIKE..',
    'WOMAN BE LIKE..',
    'CHILL PUT, I GOT THIS'
]


// let gKeywordSearchCountMap = {
//     'funny': 12,
//     'cat': 16,
//     'baby': 2
// }

let STORAGE_KEY = 'mems'
let gSavedMems = loadFromStorage(STORAGE_KEY) || []
let gEditedMemeIdx


function getMeme() {
    return gMeme
}

function getImges(val) {
    let imgs = [...gImgs]
    if (val) {
        const regex = new RegExp(val, 'i')
        imgs = gImgs.filter(img => img.keywords.some(keyword => regex.test(keyword)))
    }
    return imgs
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

function getSavedMems() {
    return gSavedMems
}

function setLineTxt(val) {
    gMeme.lines[gMeme.selectedLineIdx].txt = val
}

function setImg(imgId) {
    gMeme = {
        selectedImgId: imgId,
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

function addLine(txt = 'ADD TEXT') {
    gMeme.lines.push({
        txt,
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

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posX += dx
    selectedLine.posY += dy

}

function moveLineRightLeft(diff) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posX += diff
}

function moveLineUpDown(diff) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    selectedLine.posY += diff
}

function getFlexibleMeme() {
    gMeme.selectedImgId = getRandomInt(1, 19)
    let randomTxt = gRandomLines[getRandomInt(0, 7)]
    gMeme.lines =[ {
        txt: randomTxt,
        fontSize: 20,
        borderColor: '#22252c',
        fillColor: '#ffffff',
        posX: 30,
        posY: 30,
        size: 0,
        fontFamily: 'Arial',
        isDrag: false
    }]


}

function saveMeme(dataUrl) {
    const gMemeCopy = structuredClone(gMeme)
    if (gMeme.dataUrl) {
        gSavedMems[gEditedMemeIdx].dataUrl = dataUrl
    }
    gSavedMems.push(gMemeCopy)
    gSavedMems[gSavedMems.length - 1].dataUrl = dataUrl
    saveMemes()
}

function editSavedMeme(idx) {
    gMeme = gSavedMems[idx]
    gEditedMemeIdx = idx
}

function saveMemes() {
    saveToStorage(STORAGE_KEY, gSavedMems)
}

function addImg(img) {
    let id = gImgs[gImgs.length - 1].id + 1
    gImgs.push({
        id,
        url: img,
        keywords: ['my images']
    })
}

function setAsMeme() {
    let id = gImgs[gImgs.length - 1].id
    gMeme = {
        selectedImgId: id,
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
}

function addEmoji(emoji) {
    addLine(emoji)

}

function deleteCharMemeTxt() {
    gMeme.lines[gMeme.selectedLineIdx].txt = gMeme.lines[gMeme.selectedLineIdx].txt.slice(0, -1)
}

function addCharToMemeLine(char) {
    gMeme.lines[gMeme.selectedLineIdx].txt = gMeme.lines[gMeme.selectedLineIdx].txt += char
}