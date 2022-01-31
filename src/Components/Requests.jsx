const API_KEY = "f90fcd928ab81ff0e63eb7c3aa5c7e58"

const requests = {
    fetchOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_networks=213`,
    fetchTop: `/movie/top_rated?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests