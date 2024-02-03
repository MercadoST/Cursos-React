import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading, } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search);
      getMovies({ search })
    }, 500),
    [getMovies]
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input name='query'
            className={error ? 'error-input' : ''}
            type="text"
            value={search}
            onChange={handleChange}
            placeholder='Avengers, Avatar, The Matrix ...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className='error-msg'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
