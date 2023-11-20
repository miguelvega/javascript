
const comparacion1 = undefined == null;   // True
const comparacion2 = NaN == NaN;           // False
const comparacion3 = null == false;        // False
const comparacion4 = 0 == false;           // True
const comparacion5 = "" == false;          // True     

console.log(`undefined == null: ${comparacion1}`);
console.log(`NaN == NaN: ${comparacion2}`);
console.log(`null == false: ${comparacion3}`);
console.log(`0 == false: ${comparacion4}`);
console.log(`"" == false: ${comparacion5}`);
