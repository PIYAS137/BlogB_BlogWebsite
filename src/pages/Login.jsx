import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const {GoogleLogIn}=useFirebase()

    const handleLoginWithGoogle=async()=>{
        await GoogleLogIn()
        navigate('/')
    }

    
  return (
    <div className='w-full h-screen'>
        <h1 className='text-4xl'>LOGIN </h1>
        <button onClick={handleLoginWithGoogle} className='btn'>LOGIN WITH GOOGLE</button>
    </div>
  )
}

export default Login