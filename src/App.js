import "./App.css"
import React, { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { StyledCardList } from "./components/CardList/CardList.style";
import { SearchBar } from "./components/SearchBox";
import axios from 'axios';

const apiKey = "your Api_Key from themoviedb.org"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function App() {

const [movieList, setMovieList] = useState('')
    const [query, setQuery] = useState('')
    

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
      <SearchBar setQuery={setQuery} />
      <StyledCardList>
        <CardList baseImageUrl={baseImageUrl} movieList={movieList} />
      </StyledCardList>
    </div>
  );
}

export default App;
