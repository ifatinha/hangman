import scanner from "readline-sync";
import movieColection from "../data/movies.js";


function randomMovie() {
    return movieColection[Math.floor((Math.random() * movieColection.length) + 0)];
}

function hideFilm(film) {
    let hiddenMovie = "-".repeat(film.length);
    return hiddenMovie.split("");
}

function checksIfTheLetterExistsInTheName(letra, arr) {
    return arr.find((letter) => {
        return letter.toLowerCase() === letra.toLowerCase();
    })
}

function replacesSpaces(film, hiddenFilme) {
    film.forEach((letter, index) => {
        if (letter === " ") {
            hiddenFilme[index] = " ";
        }
    })

    return hiddenFilme;
}

function replaceLetter(filme, letra, hiddenFilme) {
    filme.forEach((letter, index) => {
        if (letter.toLowerCase() === letra.toLowerCase()) {
            hiddenFilme[index] = letra;
        }
    })

    return hiddenFilme;
}

function updateChances(chances) {
    chances--;
    if (chances === 0) {
        console.log("Suas chances acabaram! VOCÊ PERDEU!!!!");
    } else {
        console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s).`);
    }

    return chances;
}

function checkIfYouWon(arrayFilm, hiddenFilme) {
    if (hiddenFilme.join("").toLowerCase() === arrayFilm.join("").toLowerCase()) {
        console.clear();
        console.log("Parabéns!!! Você acertou");
        console.log(`SUA RESPOSTA: ${hiddenFilme.join("")}`);
        console.log(`RESPOSTA: ${arrayFilm.join("")}`);
        return true;
    } else {
        return false;
    }
}


function game(film, hiddenFilme) {
    let chances = 4;
    let won = false;

    console.log(`Adivinhe o nome do com ${hiddenFilme.length} letras.`);
    let arrayFilm = film.split("");
    console.log(arrayFilm);

    do {

        hiddenFilme = replacesSpaces(arrayFilm, hiddenFilme);
        console.log("Filme: " + hiddenFilme.join(""));
        let letra = scanner.question("Digite uma letra: ");

        const achou = checksIfTheLetterExistsInTheName(letra, arrayFilm);

        if (achou !== undefined) {
            hiddenFilme = replaceLetter(arrayFilm, letra, hiddenFilme);
        } else {
            chances = updateChances(chances);
        }

        won = checkIfYouWon(arrayFilm, hiddenFilme);

    } while (chances > 0 && won === false);
}

function init() {
    const film = randomMovie();
    const hiddenWords = hideFilm(film);
    game(film, hiddenWords);
}

export default { init }