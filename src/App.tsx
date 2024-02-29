import { useState, useEffect, useRef} from 'react'
import './App.css'
import Moviepanel from './components/Moviepanel'
import Search from './components/Search'
import {getMovies} from './api/getMovies'

function App() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])
  const isFirstInput = useRef(true)
  const previousSearch = useRef(query)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    if ( query === previousSearch.current) return
    const getData = setTimeout(() => {
      previousSearch.current = query
      setError('')
      getMovies(query).then(moviesArray => {
        setMovies(moviesArray)
      })
    }, 500)

    return () => clearTimeout(getData)
  }, [query])
  const handleChange = (search: any) => {
    const newQuery = search.trim()
    setQuery(newQuery)
  }

  return (
    <>
      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <Search query={query} onChange={handleChange} error={error}/>
        <Moviepanel movies={movies}/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
