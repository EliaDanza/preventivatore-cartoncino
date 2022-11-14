const btn = document.querySelector("button");

let input_cartoncini = document.querySelector('.input_cartoncini');
let output_fogliMano = document.querySelector('.output_fogliMano');
let output_fogliCartoncino = document.querySelector('.output_fogliCartoncino');
let output_costoMano = document.querySelector('.output_costoMano');
let output_costoCartoncino = document.querySelector('.output_costoCartoncino');
let output_quantitaInchiostro = document.querySelector('.output_quantitaInchiostro');
let output_costoInchiostro = document.querySelector('.output_costoInchiostro');
let output_minutiStampa = document.querySelector('.output_minutiStampa');
let output_costoStampa = document.querySelector('.output_costoStampa');
let output_minutiColla = document.querySelector('.output_minutiColla');
let output_costoColla = document.querySelector('.output_costoColla');
let output_minutiTaglio = document.querySelector('.output_minutiTaglio');
let output_costoTaglio = document.querySelector('.output_costoTaglio');
let output_totale = document.querySelector('.output_totale');
let output_unita = document.querySelector('.output_unita');

let cartoncinoFoglio = 63;
let dimensioneCartoncino = 0.009;
let cartaMano = 0.19;
let cartoncino = 0.2;
let inchiostro = 2;
let scartoStampa = 50;
let scartoCollaTaglio = 2;
let avvioStampa = 60;
let costoOraStampa = 100;
let stampaTaglioOra = 5000;
let collaOra = 600;
let costoOraCollaTaglio = 30;



function calc_Fogli(cartoncini) {
    

    let fogliMano = Math.floor((cartoncini / cartoncinoFoglio) + 1) + 50;
    let fogliCartoncino = Math.floor((cartoncini / cartoncinoFoglio) + 1) + 4;

    let costoMano = fogliMano * cartaMano;
    let costoCartoncino = fogliCartoncino * cartoncino;

    let quantitaInchiostro = ((fogliMano * cartoncinoFoglio) * dimensioneCartoncino) / 1000;
    let costoInchiostro = quantitaInchiostro * inchiostro;

    let minutiStampa = ((60 * fogliMano) / stampaTaglioOra) + avvioStampa;
    let costoStampa = (costoOraStampa * minutiStampa) / 60;

    let minutiColla = ((60 * (fogliMano - scartoStampa)) / collaOra);
    let costoColla = (costoOraCollaTaglio * minutiColla) / 60;

    let minutiTaglio = ((60 * (fogliMano - (scartoStampa + scartoCollaTaglio))) / stampaTaglioOra);
    let costoTaglio = (costoOraCollaTaglio * minutiTaglio) / 60;

    let totale = costoMano + costoCartoncino + costoInchiostro + costoStampa + costoColla + costoTaglio;

    let unita = totale / cartoncini;



    output_fogliMano.innerHTML = fogliMano;
    output_fogliCartoncino.innerHTML = fogliCartoncino;

    output_costoMano.innerHTML = costoMano.toFixed(2);
    output_costoCartoncino.innerHTML = costoCartoncino.toFixed(2);

    output_quantitaInchiostro.innerHTML = quantitaInchiostro.toFixed(2);
    output_costoInchiostro.innerHTML = costoInchiostro.toFixed(2);

    output_minutiStampa.innerHTML = minutiStampa.toFixed();
    output_costoStampa.innerHTML = costoStampa.toFixed(2);

    output_minutiColla.innerHTML = minutiColla.toFixed();
    output_costoColla.innerHTML = costoColla.toFixed(2);

    output_minutiTaglio.innerHTML = minutiTaglio.toFixed();
    output_costoTaglio.innerHTML = costoTaglio.toFixed(2);

    output_totale.innerHTML = totale.toFixed(2);
    output_unita.innerHTML = unita.toFixed(2);
}

btn.addEventListener("click", function() {
    calc_Fogli(input_cartoncini.value);

});
