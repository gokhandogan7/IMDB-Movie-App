import { StyledCardWrapper, StyledTitle, StyledMovieImage } from "./Card.style";
import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase/fbconfig";
import { Link, useHistory } from "react-router-dom";

const favArray = [];

export const Card = ({ imgUrl, name, favId }) => {
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
    title: name,
    path: imgUrl,
  };

  const addFirestore = () => {
    if (favArray.indexOf(name) == -1) {
      favArray.push(name);
      console.log(favArray);
      db.collection("favoriteMovies").add(fav);
    }
  };

  return (
    <StyledCardWrapper>
      <StyledMovieImage src={imgUrl} />

      <button
        style={{ margin: 0, display: flag ? "block" : "none" }}
        onClick={addFirestore}
      >
        Add to Fav
      </button>
       <Link to={`/fragman/${favId}`}>Details </Link>
      <StyledTitle>{name}</StyledTitle>
    </StyledCardWrapper>
  );
};
