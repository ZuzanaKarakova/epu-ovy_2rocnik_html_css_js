const btnModra = document.getElementById("btn-modra");
const btnZelena = document.getElementById("btn-zelena");

console.log(btnModra);

function zmenNaModru() {
    document.body.style.backgroundColor = "blue";
}   

function zmenNaZelenu() {
    document.body.style.backgroundColor = "green";
}   

btnModra.addEventListener("click", zmenNaModru); 
btnZelena.addEventListener("click", zmenNaZelenu); 