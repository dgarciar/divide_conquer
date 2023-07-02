function countZeroes(arr) {
    let count = 0;
    let foundOne = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count++;
      } else if (arr[i] === 1 && !foundOne){
        foundOne = true;
      }
    }
  
    return count;
  }

module.exports = countZeroes