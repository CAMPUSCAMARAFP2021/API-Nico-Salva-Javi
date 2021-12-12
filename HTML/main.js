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
            .innerHTML = `La pelicula no se encontro`;

        } else {

            const { title} = filtradoSearch;

            document.getElementById("renderizado-datos")
            .innerHTML = `
            <style>
            body::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -1;});
            }

            </style>

            <div class="resultado-api">

                <div class="datos-api"><h2>${title}</h2>
					
            </div>`;
        }
    })
};
