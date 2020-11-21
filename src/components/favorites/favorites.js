import React from "react";
import { db } from "../../firebase/fbconfig";

export const favorites = () => {


    
db.collection("favoriteMovies")
.doc('Mazn5kNOy16reKIdPUU3')
.get()
.then(doc => {
  const data = doc.data();
    console.log(data) // LA city object with key-value pair
});



  return <div>data</div>;

};
