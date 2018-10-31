    let row = [ [ 'O', 'A', 'I', 'E' ],
                [ 'I', 'O', 'U', 'I' ],
                [ 'U', 'U', 'U', 'E' ],
                [ 'U', 'U', 'U', 'X' ] ]

function generateBoard(r,c) {
    let vow = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let row = []
    let col = []

    for (let i = 0; i < r*c+1; i++) {
        if (col.length == c) {
            row.push(col)
            col = []
        }
        if (col.length < c) {
            col.push(vow[
                Math.floor(
                    Math.random()*vow.length
                )]
            )    
        } 
    }
    console.log(row);
    
    return row
}

function checkVow(r,c) {
    let randomBoard = generateBoard(r,c)
    let regex = /[AIUEO]/
    let arrResult = []
    let arrTemp = []


    for (let i = 0; i < randomBoard.length-1; i++) {
        for (let j = 0; j < randomBoard[i].length-1; j++) {
            if (
                randomBoard[i][j].match(regex) &&
                randomBoard[i][j+1].match(regex) &&
                randomBoard[i+1][j].match(regex) &&
                randomBoard[i+1][j+1].match(regex)) {
                arrTemp.push(
                    randomBoard[i][j],
                    randomBoard[i][j+1],
                    randomBoard[i+1][j],
                    randomBoard[i+1][j+1]);
                arrResult.push(arrTemp)
                arrTemp = []
            }
        }
    }
    
    
    return arrResult
}



console.log(checkVow(4,4));
