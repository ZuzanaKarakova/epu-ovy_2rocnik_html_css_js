// ===================================
// 1. VYTVOR PREMENNÉ
// ===================================
// Vytvor premenné s tvojimi údajmi:
// meno, vek, mesto, konicek

const meno = "Zuzka";
const vek = 17;
const mesto = "Prievidza";
const konicek = "čítanie";

// ===================================
// 2. VÝPOČTY
// ===================================
// Vypočítaj rok narodenia (aktuálny rok 2025 - vek)

const rokNarodenia = 2026-vek;

// Vypočítaj koľko rokov ti chýba do 18 (18 - vek)

const doDospelosti = 18-vek;

// ===================================
// 3. ZOBRAZ ZÁKLADNÉ ÚDAJE
// ===================================
// Použi querySelector a textContent na zobrazenie:
// - meno do elementu #meno
// - vek do elementu #vek
// - mesto do elementu #mesto
// - konicek do elementu #konicek

const menoElement = document.getElementById("meno");
const vekElement = document.getElementById("vek");
const mestoElement = document.getElementById("mesto");
const konicekElement = document.getElementById("konicek");  
const rokNarodeniaElement = document.getElementById("rok-narodenia");
const doDospelostiElement = document.getElementById("do-dospelosti");

menoElement.textContent = meno;
vekElement.textContent = vek;
mestoElement.textContent = mesto;
konicekElement.textContent = konicek;

// ===================================
// 4. ZOBRAZ VÝPOČTY
// ===================================
// Zobraz vypočítané hodnoty:
// - rok narodenia do #rok-narodenia
// - rokov do dospelosti do #do-dospelosti

rokNarodeniaElement.textContent = rokNarodenia;
doDospelostiElement.textContent = doDospelosti;


// ===================================
// 5. VYTVOR BIO TEXT
// ===================================
// Použi template literals na vytvorenie vety:
// "Ahoj! Volám sa [meno], mám [vek] rokov a pochádzam z [mesto]. Vo voľnom čase rád/-a [konicek]."
// Zobraz text do elementu #o-mne

const oMneElement = document.getElementById("o-mne");
oMneElement.textContent = `Ahoj! Volám sa ${meno}, mám ${vek} rokov a pochádzam z ${mesto}. Vo voľnom čase rád/-a ${konicek}.`;

// ===================================
// 6. UPRAV ŠTÝLY CEZ JAVASCRIPT
// ===================================
// Najdi element #status a:
// - Zmeň text na "Profil načítaný!"
// - Odstráň triedu "nacitavam"
// - Pridaj triedu "uspech"
// - Zmeň farbu textu na #4CAF50
