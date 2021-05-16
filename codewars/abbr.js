function abbrevName(name) {
  let vardasPavarde = name.split(" ");

  return vardasPavarde
    .map((i) => i[0])
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
