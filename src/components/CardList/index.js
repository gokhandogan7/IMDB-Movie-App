import React, {useEffect, useState} from 'react'
import {Card} from '../Card/index'
import axios from 'axios';





const apiKey = "7fc8d00ab1302c6aa7da237d2810116e"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


export const CardList = () =>{
    const [movieList, setMovieList] = useState('')
    

useEffect(() => {
  axios
  .get(baseUrl, {
      params: {
          api_key:apiKey,
          query:'Star',
          page:1
      }
  })
  
  .then(
      (res)=>setMovieList(res.data.results)
  )

  
}, [])


    return (
    < >
    
      {
          
          movieList&&movieList.map((movie, index) => <Card key={index} name={movie.title} img={baseImageUrl+movie.poster_path} />)
    
      }

    </>

    )
   
}