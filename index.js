
function generateBoard(rows, column) {
    let alphabetsArr = []
    let alphabets = ['a','e','i','o','u','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']

    for (let i = 0; i < rows; i++) {
        let arrInside = [];

        for (let j = 0; j < column; j++) {
            let randomNum = getRandomInt(26)
            arrInside.push(alphabets[randomNum])
        }
        alphabetsArr.push(arrInside);
    }
    
    return alphabetsArr
}

function getBlockWithVowels(rows, column) {
    let blocks = 0
    let result = 0;
    let vocal =['a','e','i','o','u']
    board = generateBoard(rows,column)

    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < column - 1; j++) {
            if (vocal.includes(board[i][j]) && vocal.includes(board[i+1][j]) && vocal.includes(board[i+1][j+1]) && vocal.includes(board[i][j+1])){
                result++
            }
        }
    }

    console.log(board)
    return result
}

function getRandomInt(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber))
}

console.log(getBlockWithVowels(5,4))