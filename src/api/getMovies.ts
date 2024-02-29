export const getMovies = async (query: string) => {
    if (query === '') return []
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=4a3b711b&s=${query}`)
        const json = await response.json()
        const data = json.Search
        const movies = data?.map((movie: any) => ({
            'id': movie.imdbID,
            'title': movie.Title,
            'year': movie.Year,
            'image': movie.Poster
        }))
        return movies
    } catch (error) {
        throw new Error('Error searching movies')
    }
}