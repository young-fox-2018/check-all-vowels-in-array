function createNestedArr(row, col) {
  var dic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var result = []
  for (var i = 0; i < row; i++) {
    var array = []
    for (var j = 0; j < col; j++) {
      array.push(dic[Math.floor(Math.random()*26)])
    }
    result.push(array)
  }
  return result
}

var array = createNestedArr(5, 4)
console.log(createNestedArr(5, 4));

function checkVowels(array) {
  var dic = ["A", "I", "U", "E", "O"]
  var result = 0
  for (var i = 0; i < array.length-1; i++) {
    for (var j = 0; j < array[i].length-1; j++) {
      if (dic.indexOf(array[i][j]) !== -1 && dic.indexOf(array[i][j+1]) !== -1 && dic.indexOf(array[i+1][j]) !== -1 && dic.indexOf(array[i+1][j+1]) !== -1) {
        result = result + 1
      }
    }
  }
  return result
}

console.log(checkVowels(array));
