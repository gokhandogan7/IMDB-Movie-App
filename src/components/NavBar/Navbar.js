import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/fbconfig";

export const Navbar = () => {
  const history = useHistory();
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

  const divEl = flag ? (
    <div>
      <button onClick={() => auth.signOut()}>Logout</button>
      <button onClick={() => history.push("/favorites")}>Favorites</button>
    </div>
  ) : (
    <div>
      <button onClick={() => history.push("/signup")}>sign up</button>
      <button onClick={() => history.push("/login")}>login</button>
    </div>
  );

  return <div>{divEl}</div>;
};
