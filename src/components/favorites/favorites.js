import React, { useState, useEffect } from "react";
import { db } from "../../firebase/fbconfig";

export const Favorites = () => {
  const [favList, setFavList] = useState([]);

const fetchData = async () =>{
    const data = await db.collection("favoriteMovies").get()
    /* setFavList(data) */
    console.log(data.docs)
    setFavList(data.docs)
}
 useEffect(() => {
     fetchData();
 }, [])


  return(

  <div>
    
    {
     
     favList?.map((mov, index)=>{
         return(
             <div>
             <p key={index} >{mov.data().title}</p>
             <img style={{width:200, height:300}}  src={mov.data().path} />
             </div>
         )
     })
     
    }
      
      </div>
  );
};
