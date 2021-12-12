
fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "6e6a3540bdmshe654054b2e62cb3p16c003jsn31b831c7707d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

