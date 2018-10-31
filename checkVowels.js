
let testCase = [
        ['A','X','C','Y'],
        ['E','O','O','S'],
        ['I','U','I','N'],
        ['M','Y','O','E'],
        ['P','D','A','I']
    ]

function generateBoard(row, column) {
    let library = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let board = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < column; j++) {
            let rand = Math.floor(Math.random() * 26)
            temp.push(library[rand])
        }
        board.push(temp)
    }
    return board
}

function checkVowel(input){
    let vow = 'AIUEO'
    for(let i = 0; i < vow.length; i++){
        if(input === vow[i]){
            return true
        }
    }
    return false
}

function checkAllVowels(row, column) {
    let board = generateBoard(row,column)
    let vowels = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if(checkVowel(board[i][j]) && checkVowel(board[i+1][j]) && checkVowel(board[i+1][j+1]) && checkVowel(board[i][j+1])){
                vowels += 1
            }
        }
    }
    return `
    ${board} 
    jumlah blok vowels pada array berikut adalah ${vowels}`
}

console.log(checkAllVowels(5, 4))