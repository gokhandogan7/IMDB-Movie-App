import React from 'react'
import {Link, useHistory} from 'react-router-dom'

export const Navbar = () => {
    const history=useHistory()
    return (
        <div>
            <button onClick={()=>history.push('/login')} >login</button>
            <button onClick={()=>history.push('/signup')} >sign up</button>
        </div>
    )
}
