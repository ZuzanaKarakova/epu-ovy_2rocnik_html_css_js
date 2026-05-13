let body = 0;

console.log (body);

console.log("Počet bodov:", body)
console.log("Počet bodov:" + body)
console.log(`Počet bodov:" ${body}`)

body = 5;
console.log(`Počet bodov: ${body}`)

body = 10;
console.log(`Počet bodov: ${body}`)

body = 25;
console.log(`Počet bodov: ${body}`)

body = 50;
console.log(`Počet bodov: ${body}`)


const cislo1 = 5;
const cislo2 = 14;
const cislo3 = 2;

console.log("5 + 14 = 19");

console.log(`Spolu ${cislo1 + cislo2}`)

console.log(`${cislo1} + ${cislo2} = ${cislo1 + cislo2}`)

console.log(`${cislo1} + ${cislo2} = ${cislo1 + cislo2}`)
console.log(`${cislo1} - ${cislo2} = ${cislo1 - cislo2}`)
console.log(`${cislo1} * ${cislo2} = ${cislo1 * cislo2}`)
console.log(`${cislo1} / ${cislo2} = ${cislo1 / cislo2}`)
console.log(`${cislo1} % ${cislo2} = ${cislo1 % cislo2}`)

console.log(`(${cislo1} + ${cislo2}) * ${cislo3} = ${cislo1 + cislo2 * cislo3}`)





let produkt = "Tričko";
let cena = 19.99;
let mnozstvo = 8;
let dphpercenta = 23;

let dphSuma = cena * (dphpercenta / 100)
let celkovaSuma = cena * mnozstvo;

console.log(`Produkt: ${produkt}`)
console.log(`Cena: ${cena}`)
console.log(`Množstvo: ${mnozstvo}`)


console.log(`Bez DPH: ${celkovaSuma} €`)
console.log(`DPH: ${dphSuma} €`)
console.log(`Zaplatiť s DPH: ${celkovaSuma + dphSuma} €`)





//dph na slovensku 23%
let produkt1 = "Slúchadlá";     
let bezDph1 = 50;
let kusy1 = "2";


let produkt2 = "Herná myš";
let bezDph2 = 30;
let kusy2 = "1";

let produkt3 = "Klávesnica";
let bezDph3 = 70;
let kusy3 = "1";

let dphPercenta = 23;
let sDph1 = bezDph1 + (bezDph1 * 23 / 100)
let sDph2 = bezDph2 + (bezDph2 * 23 / 100)
let sDph3 = bezDph3 + (bezDph3 * 23 / 100)

let medzisucet1 = (sDph1 * kusy1)
let medzisucet2 = (sDph2 * kusy2)
let medzisucet3 = (sDph3 * kusy3)


//Cena s DPH (1 kusu), Vzorec: Cena s DPH = Cena bez DPH + (Cena bez DPH × 23 / 100)
//Medzisúčet (cena s DPH × počet kusov)


console.log(`Slúchadlá`)
console.log(`Cena bez DPH: ${bezDph1}€`)
console.log(`Cena s DPH: ${sDph1}€`)
console.log(`Počet kusov: ${kusy1}ks`)
console.log(`Medzisúčet: ${medzisucet1}€`)
console.log ("=============================")
console.log(`Herná myš`)
console.log(`Cena bez DPH: ${bezDph2}€`)
console.log(`Cena s DPH: ${sDph2}€`)
console.log(`Počet kusov: ${kusy2}ks`)
console.log(`Medzisúčet: ${medzisucet2}€`)
console.log ("=============================")
console.log(`Klávesnica`)
console.log(`Cena bez DPH: ${bezDph3}€`)
console.log(`Cena s DPH: ${sDph3}€`)
console.log(`Počet kusov: ${kusy3}ks`)
console.log(`Medzisúčet: ${medzisucet3}€`)
















