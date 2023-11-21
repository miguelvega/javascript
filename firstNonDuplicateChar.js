function firstNonDuplicateChar(str) {
    const charCount = {};
    
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; // Retorna null si no hay caracteres no duplicados
}

const testString1 = "minimum";
console.log(firstNonDuplicateChar(testString1)); 

const testString2 = "hello";
console.log(firstNonDuplicateChar(testString2)); 


const testString3 = "";
console.log(firstNonDuplicateChar(testString3)); 

const testString4 = "m";
console.log(firstNonDuplicateChar(testString4)); 
