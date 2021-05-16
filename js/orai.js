/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];

const xa = 0;
const xb = 0;
const xc = 0;
const xd = 0;
const xe = 0;

function oras(krituliaiList) {
  let savaitesKrituliuKiekis = 0;
  for (let i = 0; i < krituliaiList.length; i++) {
    savaitesKrituliuKiekis += krituliaiList[i];}
    
    if (savaitesKrituliuKiekis === 0) {
      return "Sausra";
    } 
    if (savaitesKrituliuKiekis <= 50) {
      return "Ganetinai sausa savaite";
    } 
    if (savaitesKrituliuKiekis <= 200) {
      return "Lietinga savaite";
    } 
    if (savaitesKrituliuKiekis > 1000) {
      return "Barsukas turetu sedeti namie";
    }
    return "Labai daug lietaus"; 
  }



console.log(oras(a));
console.log(oras(b));
console.log(oras(c));
console.log(oras(d));
console.log(oras(e));
