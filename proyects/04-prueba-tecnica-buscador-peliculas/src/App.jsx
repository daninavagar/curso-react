import { useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import Movies from './components/Movies'
import './App.css'

function App() {

  const { movies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    return value;
  }
  return (
    <div className='page'>
      <header>
        <h1>Prueba Técnica Buscador de Películas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input ref={inputRef} type='text' placeholder='Search Something...' />
            <button type='submit'>Search</button>
          </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
