function getApiSearch() {

    const valuesInput = document.getElementById('search-input').value;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e6296feeb7565b54f1f8ea079f7e70e&language=es&query=${valuesInput}`;

    const miInit = { method: 'GET'};

    fetch(apiUrl, miInit)

    .then(response => response.json())

    .then(data => {	

        let filtradoSearch = data.results[0]

        if ( filtradoSearch === undefined ) {

            document.getElementById("renderizado-datos")
            .innerHTML = `La pelicula no se encontró`;

        } else {

			const { poster_path, title, overview, vote_average} = filtradoSearch;

            document.getElementById("renderizado-datos")
            .innerHTML = `
           
            <div class="resultado-api">

                <div class="imagen-portada"><img src="https://image.tmdb.org/t/p/w500${poster_path}" /></div>
                <div class="datos-api"><h2>${title}</h2>
                <div class="datos-api2"><h1>${overview}</h1>

				<span>
				Puntuación Media: ${vote_average}<br />
				</span>

                </div>
                </div>

				
            </div>`;
        }
    })
};
