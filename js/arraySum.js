/*
Is duoto array reikia apskaiciuoti suma, kuri yra sudaryta is pirmo ir paskutinio to array nariu.
*/

const a = [4, 5];
const b = [1, 2, 3, 4];
const c = [99, 77, 55, 33, 22, 11, -11, -22, -33];
const d = [-17, 55, 4, 5];
const e = [-17, 55, 1, 2, 3, 4];
const f = [-17, 55, 99, 77, 55, 33, 22, 11, -11, -22, -33];

const xa = 0;
const xb = 0;
const xc = 0;
const xd = 0;
const xe = 0;
const xf = 0;

function arrSum(array) {
  return array[0] + array[array.length - 1];
}

console.log(arrSum(a));
console.log(arrSum(b));
console.log(arrSum(c));
console.log(arrSum(d));
console.log(arrSum(e));
console.log(arrSum(f));
