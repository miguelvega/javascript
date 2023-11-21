function greatestNumber(array) {
    let greatest = array[0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > greatest) {
        greatest = array[i];
      }
    }
  
    return greatest;
}

const array = [4, 8, 2, 15, 7, 3, 12];
console.log(greatestNumber(array)); // Debería imprimir 15
