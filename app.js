function hasOddNumber(array) {
    return array.some(function(num) {
        return num % 2 !== 0
    })
}

function hasAZero(num) {
    return num.toString().split('').some(function(ele) {
        return ele === '0'
    })
}

function hasOnlyOddNumbers(array) {
    return array.every(function(ele) {
        return ele % 2 !== 0
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }
  

function hasCertainKey(array, key) {
    return array.every(function(ele) {
        return key in ele
    })
} 

function hasCertainValue(array, key, value) {
    return array.every(function(val) {
        return val[key] === value
    })
}


