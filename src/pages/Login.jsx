import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'
import { FaTripadvisor } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate()
    const { GoogleLogIn } = useFirebase()

    const handleLoginWithGoogle = async () => {
        await GoogleLogIn()
        navigate('/')
    }
    return (
        <React.Fragment>
            <div className='w-full h-screen flex justify-center items-center'>
            <div>
            <h1 className='text-7xl text-purple-500 flex items-center'><FaTripadvisor className='mr-4 text-8xl'/> Blog K`</h1>
            <p className='text-blue-400 text-2xl'>Let's write for the world</p>
                    <button onClick={handleLoginWithGoogle} className='btn mt-5  bg-gradient-to-r from-[#662D8C] text-white py-2 text-lg rounded-lg to-blue-500 border-none hover:opacity-90 tracking-widest'>Log In With Google </button>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Login