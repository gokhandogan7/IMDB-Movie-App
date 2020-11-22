import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "2ab876e9698659187d8d9420ef4d232c";
const movieId = "en-US";

const Fragman = () => {
  const [isOpen, setOpen] = useState(false);
  
  useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/12180/videos?api_key=2ab876e9698659187d8d9420ef4d232c&language=en-US')
      .then((res)=>console.log(res.data.results[0].key))
  }, [])
  


  
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Tas9_TYri4w"
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
    </div>
  );
};

export default Fragman;
