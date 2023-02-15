const Api_key = "6293a3aaffda5c448aa31c16a5a823ec";

const requests = {
 fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
 fetchFlexitOriginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
 fetchTopRated: `/movie/top_rated?api_key=${Api_key}&languages=en-US`,
 fetchActionMovies:`/discover/movie?api_key=${Api_key}&with_genres=28`,
 fetchComedyMovies:`/discover/movie?api_key=${Api_key}&with_genres=35`,
 fetchHorrowMovies:`/discover/movie?api_key=${Api_key}&with_genres=27`,
 fetchRomanceMovies:`/discover/movie?api_key=${Api_key}&with_genres=10749`,
 fetchDocumentaries:`/discover/movie?api_key=${Api_key}&with_genres=99`,
};

//https://api.themoviedb.org/3/discover/tv?api_key=6293a3aaffda5c448aa31c16a5a823ec&with_networks=213

export default requests;