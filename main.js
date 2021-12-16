function getApiSearch() {

    const valuesInput = document.getElementById('search-input').value;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;
    const apiGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es`;
    
    const miInit = { method: 'GET'};

    fetch(apiGenre,miInit)

    .then(response => response.json())

    .then(({genres}) => {
        generos = genres
       
    })

    
    
    fetch(apiUrl, miInit)

    .then(response => response.json())
    
    .then(({results}) => {	
        
        peliculas=results
       
        document.getElementById("renderizado-datos").innerHTML = '';
        results.map(movie => document.getElementById("renderizado-datos")
        .innerHTML += template(movie))

})

};
var peliculas=[]
var generos = []
var textogeneros = document.getElementById("genero");
function FilterByGenres(id_genero_peliculas){
    id_genero_peliculas
        .map(id_genero_de_pelicula => generos
        .filter(genero=>genero.id==id_genero_de_pelicula)
        .map(document.write(genero.name)))

}



function template ({ poster_path, title, overview, vote_average,release_date, genre_ids}){

    
            return`
           
            <div class="resultado-api">

                <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${poster_path}" /></div>
                <br>
                <br> 
                <div class="datos-api"><h2>${title}</h2>
                <div class="datos-api2"><h1>${overview}</h1>

				<span>
				<p>Estrellas: ${vote_average}</p><br/>
                <p>Fecha Estreno: ${release_date}</p><br/>
                <p id="genero">${FilterByGenres(genre_ids)}</p><br>
				</span>

                </div>
                </div>

				
            </div>`;
}
