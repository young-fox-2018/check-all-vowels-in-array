// release 0: generate board

function generateRandomBoard(row,col) {
    let output = []
    for (let i = 0; i < row; i++) {
        let temp = []
        let dictionary = "0ABCDEFGHIJKLMNOPQRSTUVWXYS"
        for (j = 0; j < col; j++) {
            temp.push(dictionary[Math.floor((Math.random() * 26) + 1)])
        }
        output.push(temp)
    }
    return output
}

function checkVowel(char) {
    let vowel = "AIUEO"
    for (let i = 0; i < vowel.length; i++) {
        if (char == vowel[i]) {
            return true
        }
    }return false
}

function findArr2(rows,cols) {
    let arr = generateRandomBoard(rows,cols)
    console.log(arr)
    let output = []
    let row = arr.length - 2 
    let col = arr[0].length - 2 

    for (let i = 0; i <= row; i++) {
        for (let j = 0; j <= col; j++) {
            if (checkVowel(arr[i][j]) && checkVowel(arr[i][j+1]) && checkVowel(arr[i+1][j]) && checkVowel(arr[i+1][j+1])) {
                output.push(arr[i][j] + arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1])
            }
        }
    }
    return output
}

console.log(findArr2(5,4))
//console.log(generateRandomBoard(5,2))





