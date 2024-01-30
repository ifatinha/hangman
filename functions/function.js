import scanner from "readline-sync";
import movieColection from "../data/movies.js";


function randomMovie() {
    return movieColection[Math.floor((Math.random() * movieColection.length) + 0)];
}

function hideFilm(film) {
    const hiddenMovie = "-".repeat(film.length);
    return hiddenMovie;
}

function game(film, hiddenFilme) {
    let chances = 5;
    console.log(`Adivinhe o nome do com ${hiddenFilme.length} letras.`);

    let arrayFilm = film.split("");

    for (let i = 0; i < arrayFilm.length; i++) {
        let letra = scanner.question("Digite uma letra: ");

        if (chances > 0) {
            console.log(`Boa sorte! Você tem ${chances}.`);

        } else {
            console.log("Suas chances acabaram! Você Perder!!!!");
        }

        chances--;
    }
}

function init() {
    const film = randomMovie();
    const hiddenWord = hideFilm(film);
    game(film, hiddenWord);
}

export default { init }