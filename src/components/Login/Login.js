import React, { useState } from "react";
import { auth } from "../../firebase/fbconfig";
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-modal';

export const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
    history.push("/")

  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
