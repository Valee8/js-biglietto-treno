/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

// Variabile che contiene il prezzo al chilometro
const prezzoAlKm = 0.21;

// Variabile che contiene lo sconto per i minorenni
const scontoMinorenni = 0.2;

// Variabile che contiene lo sconto per gli over 65
const scontoOver = 0.4;

// Variabile che contiene chi ha 18 anni
const etaMaggiorenne = 18;

// Variabile che contiene chi ha 65 anni
const etaOver = 65;

// Variabile che contiene il prezzo del biglietto
let prezzoBiglietto;

// Variabile che contiene il costo totale del viaggio
let costoViaggio;

// Chiedo all'utente il numero di chilometri da percorrere
let chilometri = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));

// Calcolo il prezzo del biglietto
prezzoBiglietto = prezzoAlKm * chilometri;

// Chiedo all'utente l'età del passeggero
let etaPasseggero = parseInt(prompt("Inserisci la tua età"));

// Se l'età del passeggero è minore di 18  
if (etaPasseggero < etaMaggiorenne) {
    // Il costo totale del viaggio è calcolato in base allo sconto per i minorenni
    costoViaggio = prezzoBiglietto * scontoMinorenni;
} 
// Se l'età del passeggero è maggiore di 65
else if (etaPasseggero > etaOver) {
    // Il costo totale del viaggio è calcolato in base allo sconto per gli over 65
    costoViaggio = prezzoBiglietto * scontoOver;
} 
// In tutti gli altri casi
else {
    // Il costo totale del viaggio è calcolato senza nessuno sconto
    costoViaggio = prezzoBiglietto;
}

// Stampo il costo del viaggio con sole 2 cifre decimali
document.getElementById("title").innerHTML = `Vuoi percorrere ${chilometri} km e hai ${etaPasseggero} anni, quindi il prezzo totale è di ${costoViaggio.toFixed(2)} euro`;