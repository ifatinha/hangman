import movieColection from "../data/movies.js";

function randomMovie() {
    return movieColection[Math.floor((Math.random() * movieColection.length) + 0)];
}

export default { randomMovie }