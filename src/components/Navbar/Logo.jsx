import React from 'react'
import { FaTripadvisor } from "react-icons/fa";

const Logo = ({data}) => {
  return (
    <div className='flex items-center space-x-1'>
            <FaTripadvisor className='text-4xl text-purple-500'/>
            <h1 className='text-purple-500 text-2xl'>{data}</h1>
        </div>
  )
}

export default Logo