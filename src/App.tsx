import { useState, useEffect } from 'react'
import './App.css'
import Moviepanel from './components/Moviepanel'
import Search from './components/Search'


function App() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const debounce = setTimeout(() => {
            setError(query)
        }, 500)
    return () => clearTimeout(debounce)
  },[query, error])
  return (
    <>
      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <Search query={query} setQuery={setQuery}/>
        <Moviepanel/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
