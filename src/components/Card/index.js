import { StyledCardWrapper, StyledTitle, StyledMovieImage } from "./Card.style";
import React, {useState, useEffect} from 'react'
import {db,auth} from "../../firebase/fbconfig"

export const Card = ({ imgUrl, name }) => {
     const [flag, setFlag] = useState(false);
    useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  }, []);

/* db.collection('favoriteMovies').add({fav:'shutter island'}) */

    const fav = {
        title:name,
        path:imgUrl
    }


const addFirestore=()=>{
    db.collection('favoriteMovies').add(fav)
}



  return (
    <StyledCardWrapper>
    <StyledMovieImage src={imgUrl} />

    <button style={{margin:0, display:flag?'block':'none' }} onClick={addFirestore}>Add to Fav</button>
    <StyledTitle>{name}</StyledTitle>
    </StyledCardWrapper>
  );
};
