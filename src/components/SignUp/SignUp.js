import React, {useState} from "react";
import {auth} from '../../firebase/fbconfig'

//form input-change
//form onSubmit
//auth

export const SignUp = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const handleSubmit =(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)


    }


  return (
      

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='surname' onChange={(e)=>setSurname(e.target.value)} />
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
