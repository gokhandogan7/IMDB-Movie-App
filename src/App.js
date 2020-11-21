import "./App.css"
import React, { useEffect, useState, createContext } from "react";
import { CardList } from "./components/CardList";
import { StyledCardList } from "./components/CardList/CardList.style";
import { SearchBar } from "./components/SearchBox";
import axios from 'axios';
import {db, auth} from './firebase/fbconfig'
import {Navbar} from './components/NavBar/Navbar'



require('dotenv').config()
const apiKey = process.env.REACT_APP_API_KEY//temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

/* db.collection('favoriteMovies').add({fav:'shutter island'}) */



function App() {

const [movieList, setMovieList] = useState('')
    const [query, setQuery] = useState('a')
    

useEffect(() => {
  axios
  .get(baseUrl, {
      params: {
          api_key:apiKey,
          query:query,
          page:1
      }
  })
  
  .then(
      (res)=>setMovieList(res.data.results)
  )

  
}, [query])


  

  return (
    <div className="App">
      <Navbar />
      <SearchBar setQuery={setQuery} />
      <StyledCardList>
        <CardList baseImageUrl={baseImageUrl} movieList={movieList} />
      </StyledCardList>
    </div>
  );
}

export default App;
