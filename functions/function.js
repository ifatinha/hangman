import scanner from "readline-sync";
import movieColection from "../data/movies.js";


function randomMovie() {
    return movieColection[Math.floor((Math.random() * movieColection.length) + 0)];
}

function hideFilm(film) {
    let hiddenMovie = "-".repeat(film.length);
    return hiddenMovie.split("");
}

function game(film, hiddenFilme) {
    let chances = 4;
    let won = false;

    console.log(`Adivinhe o nome do com ${hiddenFilme.length} letras.`);
    let arrayFilm = film.split("");
    console.log(arrayFilm);

    do {

        console.log("Filme: " + hiddenFilme.join(""));
        let letra = scanner.question("Digite uma letra: ");

        const achou = arrayFilm.find((letter) => {
            return letter.toLowerCase() === letra.toLowerCase();
        })

        arrayFilm.forEach((letter, index) => {
            if (letter === " ") {
                hiddenFilme[index] = " ";
            }
        })

        if (achou !== undefined) {
            arrayFilm.forEach((letter, index) => {
                if (letter.toLowerCase() === letra.toLowerCase()) {
                    hiddenFilme[index] = letra;
                }
            })
        } else {
            chances--;
            if (chances === 0) {
                console.log("Suas chances acabaram! VOCÊ PERDEU!!!!");
                won = true;
            } else {
                console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s).`);
            }
        }

        if (hiddenFilme.join("").toLowerCase() === arrayFilm.join("").toLowerCase()) {
            console.clear();
            console.log("Parabéns!!! Você acertou");
            console.log(`SUA RESPOSTA: ${hiddenFilme.join("").toCapitalize()}`);
            console.log(`RESPOSTA: ${arrayFilm.join("")}`);
            won = true;
        }

    } while (chances > 0 && won === false);
}

function init() {
    const film = randomMovie();
    const hiddenWords = hideFilm(film);
    game(film, hiddenWords);
}

export default { init }