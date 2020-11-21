import { StyledCardWrapper, StyledTitle, StyledMovieImage } from "./Card.style";
import React, {useState, useEffect} from 'react'
import {auth} from "../../firebase/fbconfig"

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



  return (
    <StyledCardWrapper>
    <StyledMovieImage src={imgUrl} />

    <button style={{margin:0, display:flag?'block':'none' }}>Add to Fav</button>
    <StyledTitle>{name}</StyledTitle>
    </StyledCardWrapper>
  );
};
