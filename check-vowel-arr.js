function generateBoard (row, col) {
    let array = []
    let dictAl = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            temp.push(dictAl[Math.floor(Math.random()*26)])
        }
        array.push(temp)
    }
    console.log(array)

    let dict = 'AIUEO'
    let counter = 0
    
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(j !== array[i].length-1 && i !== array.length-1) {
                if(/[AIUEO]/.test(array[i][j]) && /[AIUEO]/.test(array[i][j+1]) && /[AIUEO]/.test(array[i+1][j]) && /[AIUEO]/.test(array[i+1][j+1])) {
                    counter += 1
                }
            }
        }
    }

    console.log(counter)
}

generateBoard(5, 4)
