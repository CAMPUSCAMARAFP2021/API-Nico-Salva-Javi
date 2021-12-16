function getApiSearch() {

    const valuesInput = document.getElementById('search-input').value;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;
    const apiGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es`;

    const miInit = { method: 'GET' };

    fetch(apiGenre, miInit)

    .then(response => response.json())

    .then(({ genres }) => {
        generos = genres

    })



    fetch(apiUrl, miInit)

    .then(response => response.json())

    .then(({ results }) => {

        peliculas = results

        tarjeta.innerHTML = ""
        results.map(resultado => tarjeta.append(template(resultado)))

    })

};

var tarjeta = document.getElementById("renderizado-datos")
var peliculas = []
var generos = []
var textogeneros = document.getElementById("genero");

function FilterByGenres(MoviesGenreId) {
    return MoviesGenreId
        .map(id_genero_de_pelicula => generos
            .filter(genero => genero.id == id_genero_de_pelicula)
            .map(genero => genero.name))

}




function template({ poster_path, title, overview, vote_average, release_date, genre_ids }) {


    var head = document.createElement('div')
    var img = document.createElement('img')
    img.src = `https://image.tmdb.org/t/p/w500${poster_path}`
    var titulo = document.createElement('h1')

    var description = document.createElement('h3')
    var subcontent = document.createElement('span')
    var vote = document.createElement('p')
    var date = document.createElement('p')
    var genre = document.createElement('p')


    titulo.innerHTML = (title)
    description.innerHTML = (overview)
    date.innerHTML = (release_date)
    genre.innerHTML = (FilterByGenres(genre_ids))
    vote.innerHTML = (vote_average)

    subcontent.appendChild(vote)
    subcontent.appendChild(date)
    subcontent.appendChild(genre)


    head.appendChild(img)
    head.appendChild(titulo)
    head.appendChild(description)
    head.appendChild(subcontent)


    return head;
}