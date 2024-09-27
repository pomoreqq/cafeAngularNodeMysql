import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Login() {


    const [username,setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    const login = () => {
        axios.post('http://localhost:4000/auth/login', {
            username: username,
            password: password
        }).then((result) => {
            console.log('it worked')
            console.log(result.data)
            
        })
    }

    const handleChangePass = (e) => {
        setPassowrd(e.target.value)
    }

    const handleChangeUser = (e) => {
        setUsername(e.target.value)
    }

  return (
    <div className='loginContainer'>
      <input type='text' onChange={handleChangeUser} />
      <input type='password' onChange={handleChangePass} />

      <button type='submit' onClick={login}>Login</button>
    </div>
  )
}

export default Login
