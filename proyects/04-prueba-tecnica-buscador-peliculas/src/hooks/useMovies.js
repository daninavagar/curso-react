import withResults from '../mocks/result.json'
// import withoutResults from '../mocks/result.json'

export function useMovies() {
    const movies = withResults.Search
    
    const mappedMovies = movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))
  
    return {movies: mappedMovies}
  }