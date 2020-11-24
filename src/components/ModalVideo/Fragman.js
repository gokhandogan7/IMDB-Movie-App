import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { useParams } from "react-router-dom";
import axios from "axios";
import { auth } from "../../firebase/fbconfig";

const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "2ab876e9698659187d8d9420ef4d232c";
const movieId = "en-US";

const Fragman = () => {
  const [favIdm, setFavIdm] = useState("");
  const [isOpen, setOpen] = useState(false);
  const params = useParams();
  const [sessionId, setSessionId] = useState("");
  const [val, setVal] = useState("");
  const [formFlag, setFormFlag] = useState(false); //

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.favId}/videos?api_key=2ab876e9698659187d8d9420ef4d232c&language=en-US`
      )
      .then((res) => setFavIdm(res.data.results[0].key));
  }, []);

  const [flag, setFlag] = useState(false); //bu rate movie butonu gizlemek ve göstermek icin
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  }, []);

  const rateMovie = async () => {
      setFormFlag(!formFlag)
    let {
      data: { guest_session_id },
    } = await axios.get(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=2ab876e9698659187d8d9420ef4d232c"
    );
    setSessionId(guest_session_id);
  };

  

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          
    let res = await axios.post(
      `https://api.themoviedb.org/3/movie/${params.favId}/rating?api_key=2ab876e9698659187d8d9420ef4d232c&guest_session_id=102ab4d81a3a39e022971a3e9c0c018e`,
      {
          'value':val
      }
    );
    console.log('The rating was rated successfully.')
      } catch (error) {
    console.log(error)
          
      }
  };
    

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={favIdm}
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
      <button
        style={{ margin: 0, display: flag ? "block" : "none" }}
        className="btn-primary"
        onClick={rateMovie}
      >
        Rate Movie
      </button>
      <form onSubmit={handleSubmit} style={{ margin: 0, display: formFlag ? "block" : "none" }}>
        <input
          type="number"
          onChange={(e) => setVal(e.target.value)}
          min="0"
          max="10"
        ></input>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Fragman;
