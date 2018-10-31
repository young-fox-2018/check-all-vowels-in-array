function getBoard(row, column) {
    let board = []

    for (let i = 0; i < row; i ++) {
        board.push([])
        
        for (let j = 0; j < column; j++) {
            board[i].push(getRandomChar())
        }
    }

    return board
}

function getRandomChar () {
    let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let max = char.length-1
    let min = 0
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    
    return char[random]
}

function vowelsChecker(arr) {
    var temp = []
    // var arr = [
    //     ['A','X','C','Y'],
    //     ['E','O','O','S'],
    //     ['I','U','I','N'],
    //     ['M','Y','O','E'],
    //     ['P','D','A','I']
    // ]

    for ( let i = 0; i < arr.length - 1; i++) {
        for ( let j = 0; j < arr[i].length -1; j++) {

            if (vowelsWordChecker(arr[i][j]) && vowelsWordChecker(arr[i][j+1]) && vowelsWordChecker(arr[i+1][j]) && vowelsWordChecker(arr[i+1][j+1])){
                    // console.log(`${arr[i][j]} - ${arr[i][j+1]} - ${arr[i+1][j]} - ${arr[i+1][j+1]}`)
                    temp.push([arr[i][j]+arr[i][j+1]+arr[i+1][j]]+arr[i+1][j+1])
            }
            // if (vowelsChecker(arr[i][j])){
                
            // }

            // console.log(`${arr[i][j]} - ${arr[i][j+1]} - ${arr[i+1][j]} - ${arr[i+1][j+1]}`)

        }
    }

    // console.log(arr)
    
    return temp.length
}

function vowelsWordChecker(str){
    let vowels = ['A','I','U','E','O']

    for ( let i = 0; i < vowels.length; i++) {
        if(vowels[i].toLowerCase() === str.toLowerCase()){
            return true
        }
    }

    return false
}


// console.log(board)

// generate until value > 0
// var find = false
// while(find == false){
//     let board = getBoard(5, 4)
//     console.log(board)
//     console.log(vowelsChecker(board))
//     if(vowelsChecker(board) > 1){
//         find = true
//     }
// }

let board = getBoard(5, 4)
console.log(board)
console.log(vowelsChecker(board))

// console.log(vowelsWordChecker('o'))