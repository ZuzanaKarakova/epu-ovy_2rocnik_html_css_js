const btnModra = document.getElementById("btn-modra");
const btnZelena = document.getElementById("btn-zelena");
const farbaText = document.getElementById("farba-text"); 


console.log(btnModra);

function zmenNaModru() {
    document.body.style.backgroundColor = "blue";
    farbaText.textContent = "modrá";
}   

function zmenNaZelenu() {
    document.body.style.backgroundColor = "green";
    farbaText.textContent = "zelená";
}   

btnModra.addEventListener("click", zmenNaModru); 
btnZelena.addEventListener("click", zmenNaZelenu); 