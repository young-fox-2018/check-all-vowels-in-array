const boardDummy =  [
                    ['A','X','C','Y'],
                    ['E','O','O','S'],
                    ['I','U','I','N'],
                    ['M','Y','O','E'],
                    ['P','D','A','I']
                    ]
//buat board
function board (row,col) {
    let board = []
    for (let i = 0; i < row; i++) {
        board.push([])
        for (let j = 0; j < col; j++) {
            board[i].push(randomAplh())
        }
    }
    return board
}

//random alphabeth
function randomAplh () {
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alph[Math.floor(Math.random()*26)]
}

//check vowels
function checkVowels (str) {
    const vocals = 'AIUEO'
    let status = false
    for (let i = 0; i < vocals.length; i++ ) {
        if(str === vocals[i]) status = true
    }
    return status
}

//check board
function checkBoard (row,col) {
    // let boardGame = boardDummy //dummyBoard
    let boardGame = board(row,col) //realBoard
    let counterBlock = 0
    for (let i = 0; i < boardGame.length-1; i++) {
        for (let j = 0; j < boardGame[i].length -1; j++ ) {
            let counter = 0
            for (let x = 0; x < 2; x++) {
                for (let y = 0; y < 2; y++) {
                    if (checkVowels(boardGame[i+x][j+y]) === true) counter++
                }
            }
            if(counter === 4) counterBlock++ 
        }
    }
    console.log(boardGame)
    return `${counterBlock} block`
}

console.log(checkBoard(5,4))
