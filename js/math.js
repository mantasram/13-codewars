/*
Reikia apskaiciuoti kam lygu duoto skaiciau penkis kartus didesne reiksme, kuri pries tai buvo sumazinta 7 vienetais.
*/

const a = 9;
const b = 19;
const c = -5;
const d = -3.5;
const e = 4;
const f = 2000;

const xa = (a - 7) * 5;
const xb = (b - 7) * 5;
const xc = (c - 7) * 5;
const xd = (d - 7) * 5;
const xe = (e - 7) * 5;
const xf = (f - 7) * 5;

function result(skaicius) {
  return (skaicius - 7) * 5;
}

console.log(xa, result(a));
console.log(xb, result(b));
console.log(xc, result(c));
console.log(xd, result(d));
console.log(xe, result(e));
console.log(xf, result(f));
