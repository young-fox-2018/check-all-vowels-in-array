    let testcase = [ [ 'O', 'A', 'I', 'E' ],
                [ 'I', 'O', 'U', 'I' ],
                [ 'U', 'U', 'U', 'E' ],
                [ 'U', 'U', 'U', 'X' ] ]
let arrResult = []
let arrTemp = []
let row = []
let col = []
function generateBoard(r,c) {
    let vow = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    

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
    
    
    return row
}

function checkVow(r,c) {
    let randomBoard = generateBoard(r,c)
    
    
    let regex = /[AIUEO]/
 


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
    console.log(row);
    row = []
    console.log("DATA YANG KETEMU:");
    return arrResult
    
    
    
}

while (arrResult.length == 0) {
    
    console.log(checkVow(4,4));    
}











