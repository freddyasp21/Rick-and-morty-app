import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagintation from './components/Pagination'
import './App.css'


function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  const onePrevious = () => {
    fetchCharacters(info.prev)
  }

  const oneNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand={'Rick and Morty App'} />
      <div className='container mt-5'>
        <Pagintation prev={info.prev} next={info.next} onePrevious={onePrevious} oneNext={oneNext} />
        <Characters characters={characters} />
        <Pagintation prev={info.prev} next={info.next} onePrevious={onePrevious} oneNext={oneNext} />
      </div>
    </>
  )
}

export default App