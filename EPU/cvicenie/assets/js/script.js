// ===================================
// OPAKOVACIA ÚLOHA - BMI KALKULÁTOR
// ===================================
// ČO MÁTE NAPROGRAMOVAŤ:
// 1. Získať hodnoty z inputov (.value)
// 2. Validácia (či sú zadané)
// 3. Výpočet BMI podľa vzorca
// 4. IF-ELSE IF podmienky na kategorizáciu
// 5. Nastavenie textu a CSS tried
// 6. Zobrazenie výsledku

// ===================================
// 1. ZÍSKANIE ELEMENTOV (HOTOVÉ)
// ===================================
const inputVyska = document.getElementById('vyska');
const inputHmotnost = document.getElementById('hmotnost');
const btnVypocitaj = document.getElementById('vypocitaj');

const vysledokDiv = document.getElementById('vysledok');
const bmiHodnotaEl = document.getElementById('bmi-hodnota');
const kategoriaEl = document.getElementById('kategoria');
const popisEl = document.getElementById('popis');

// ===================================
// 2. FUNKCIA: VYPOČÍTAJ BMI
// ===================================
function vypocitajBMI() {
    // Získaj hodnoty z inputov
    const vyska = parseFloat(inputVyska.value);
    const hmotnost = parseFloat(inputHmotnost.value);

    // Validácia vstupov
    if (!vyska || !hmotnost || isNaN(vyska) || isNaN(hmotnost)) {
        bmiHodnotaEl.textContent = '';
        kategoriaEl.textContent = 'Neplatné údaje';
        kategoriaEl.classList.remove('podvaha', 'normalna', 'nadvaha', 'obezita');
        popisEl.textContent = 'Zadaj platnú výšku a hmotnosť.';
        vysledokDiv.classList.add('show');
        return;
    }

    // Výpočet BMI
    const vyskaVMetroch = vyska / 100;
    const bmi = hmotnost / (vyskaVMetroch * vyskaVMetroch);
    const bmiZaokruhlene = bmi.toFixed(1);

    // Zobraz BMI hodnotu
    bmiHodnotaEl.textContent = bmiZaokruhlene;

    // Kategórie podľa BMI
    kategoriaEl.classList.remove('podvaha', 'normalna', 'nadvaha', 'obezita');

    if (bmi < 18.5) {
        kategoriaEl.textContent = 'Podváha';
        kategoriaEl.classList.add('podvaha');
        popisEl.textContent = 'Tvoja hmotnosť je nižšia ako je doporučené.';
    } else if (bmi < 25) {
        kategoriaEl.textContent = 'Normálna váha';
        kategoriaEl.classList.add('normalna');
        popisEl.textContent = 'Tvoja hmotnosť je v doporučenom rozmedzí.';
    } else if (bmi < 30) {
        kategoriaEl.textContent = 'Nadváha';
        kategoriaEl.classList.add('nadvaha');
        popisEl.textContent = 'Tvoja hmotnosť je vyššia ako je doporučené.';
    } else {
        kategoriaEl.textContent = 'Obezita';
        kategoriaEl.classList.add('obezita');
        popisEl.textContent = 'Tvoja hmotnosť je vysoká.';
    }

    // Zobrazenie výsledku
    vysledokDiv.classList.add('show');
}

// ===================================
// 3. UDALOSŤ NA TLAČIDLO (HOTOVÉ)
// ===================================
btnVypocitaj.addEventListener('click', vypocitajBMI);
