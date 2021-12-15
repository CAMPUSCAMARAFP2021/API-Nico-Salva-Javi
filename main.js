function getApiSearch() {

    const valuesInput = document.getElementById('search-input').value;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;
    const apiGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es`;
    
    const miInit = { method: 'GET'};

    fetch(apiGenre,miInit)

    .then(response => response.json())

    .then(({genres}) => {
        console.log(genres)
    })

    fetch(apiUrl, miInit)

    .then(response => response.json())
    
    .then(({results}) => {	
        document.getElementById("renderizado-datos").innerHTML = '';
        results.map(movie => document.getElementById("renderizado-datos")
        .innerHTML += template(movie))

    })
};
function template ({ poster_path, title, overview, vote_average,release_date}){
    
            return`
           
            <div class="resultado-api">

                <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${poster_path}" /></div>
                <br>
                <br> 
                <div class="datos-api"><h2>${title}</h2>
                <div class="datos-api2"><h1>${overview}</h1>

				<span>
				Estrellas: ${vote_average}<br />
                Fecha Estreno: ${release_date}<br />
				</span>

                </div>
                </div>

				
            </div>`;
}
