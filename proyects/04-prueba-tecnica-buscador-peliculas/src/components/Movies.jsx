
function MoviesResult({ movies }) {
    return (
        <ul>
            {
            movies.map(movie => (
                <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img 
                    src={movie.poster} 
                    alt={`${movie.title}'s Poster`} />
                </li>
            ))
            }
        </ul>
    )
}

function NoMoviesResult() {
    const result = 'Movie not found!'
    return (
        <p>{result}</p>
    )
}


export default function Movies({ movies }) {
        const hasMovies = movies.length > 0
        return (
                
                        hasMovies
                        ? <MoviesResult movies={movies}/>
                        : <NoMoviesResult/>
                
        )
}
