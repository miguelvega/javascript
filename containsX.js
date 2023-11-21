function containsX(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "X") {
        return true;
      }
    }
    return false;
}

// Cadena con "X"
const testString1 = "HelloWorldX";
console.log(containsX(testString1)); // true

// Cadena sin "X"
const testString2 = "HelloWorld";
console.log(containsX(testString2)); // false

// Cadena vacía
const testString3 = "";
console.log(containsX(testString3)); // false

// Cadena con múltiples "X"
const testString4 = "XXXTentacion";
console.log(containsX(testString4)); // true
