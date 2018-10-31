function generateBoard(row, col){
    let result = []
    let randomHuruf
    
    //generate random
    for(let i=0 ; i<row ; i++){
        let arrayRow = []
        for(let j=0 ;j<col ;j++){
            randomHuruf = Math.floor(Math.random() * 26) + 65 //random number between 97-122
            arrayRow.push(String.fromCharCode(randomHuruf)) //convert to ASCII code a(97) - z(122)
        }
        result.push(arrayRow)
    }

    //generate manual
    // let contentBoard = "AXCYEOOSIUINMYOEPDAI"
    // let idx = 0
    // for(let i = 0; i < row; i++){
    //     let arrRow = []
    //     for(let j = 0; j < col; j++){
    //         arrRow.push(contentBoard[idx])
    //         idx++
    //     }
    //     result.push(arrRow)
    // }
    return result
}

function checkVowel(input){
    var kamus = ['A','E','I','U','O']
    for(let i = 0; i < kamus.length; i++){
        if(input === kamus[i]){
            return true
        }
    }
    return false
}

function checkBlockVowels(rows, column){
    var listBlock = []
    let countVowels = 0
    var board = generateBoard(rows,column) 

    for(let i = 0; i < rows-1; i++){
        for(let j = 0; j < column-1; j++){
            var temp = ""
            if(checkVowel(board[i][j]) && checkVowel(board[i+1][j]) && checkVowel(board[i][j+1]) && checkVowel(board[i+1][j+1])){
                countVowels += 1
                temp += (board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1])
                listBlock.push(temp)
            }
        }
    }
    
    console.log("------------BOARD------------")
    console.log(board)
    // console.log(countVowels)
    // console.log(listBlock)
    return countVowels
    // return listBlock
}



// console.log(generateBoard(5,4))
// console.log(checkVowel("A"))

console.log(checkBlockVowels(5,4))


//---AUTO RUN SAMPE DAPET---//

// function run(){
//     var a = checkBlockVowels(5,4)
//     while(a === 0){
//         a = checkBlockVowels(5,4)
//     }
//     return (a)
// }

// console.log(run())