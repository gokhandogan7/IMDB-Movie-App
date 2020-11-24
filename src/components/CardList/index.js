import React, {useEffect, useState} from 'react'
import {Card} from '../Card'
import axios from 'axios';







export const CardList = ({movieList, baseImageUrl}) =>{
    



    return (
    < >
    
      {
          
          movieList&&movieList.map((movie, index) => <Card key={index} name={movie.title} imgUrl={baseImageUrl+movie.poster_path} favId={movie.id}/>)
    
      }

    </>

    )
   
}