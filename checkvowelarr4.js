
function acak(){
  var text = '';
  var abzad = 'abcdefghijklmnopqrstuvwxyz'

  // for (var i = 0 ; i < abzad.length-1 ; i++){
  text += abzad.charAt(Math.floor(Math.random() * abzad.length))
  //}
  return text
}

function createBoard(jumlahRow, jumlahCol){
  var result = []

  for(var i = 1 ; i <= jumlahRow ; i++){
    var arr = []
    for(var j = 1 ; j <= jumlahCol; j++){
      arr.push(acak())
    }
    result.push(arr)
  }
  return result
}

// console.log(createBoard(5,4))

function checkVowel(str){
  var vowel = 'aiueo'
  var isfound = false
  for(var i = 0 ; i < vowel.length; i++){
    if (str === vowel[i]){
      isfound = true
    }
  }
  return isfound
}
//  console.log(checkVowel('i'))

var data = [ [ 'a', 'u', 'l', 'e' ],
[ 'i', 'a', 'x', 's' ],
[ 'e', 'm', 'c', 'k' ],
[ 'h', 'f', 'j', 'f' ],
[ 'w', 'p', 'e', 'n' ] ]
// createBoard(5,4)

function bentukblok(data){
  var counter = 0 ;

  for(var i = 0 ; i < data.length-1 ; i++){
    for(var j = 0 ; j < data[i].length-1 ; j++){
      if(checkVowel(data[i][j]) === true && checkVowel(data[i+1][j]) === true && checkVowel(data[i][j+1]) === true && checkVowel(data[i+1][j+1]) === true ){
        counter++
      }
    }
  }
  return counter
}
console.log(data)
console.log(bentukblok(data))