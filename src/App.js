import React, { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters"
import Pagination from './Components/Pagination';


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {

    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info);
      })


      .catch(error => console.log(error))
  }


  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }


  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>

      <Navbar brand="Rick And Morty App" />
      <div className="container mt-5 ">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>

  );

}

export default App;
