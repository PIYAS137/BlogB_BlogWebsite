import React from 'react'

const LeftSC = ({ data, getCData }) => {

    const handleClick=(val)=>{
        getCData(val)
    }
    return (
        <button onClick={()=>{handleClick(data)}}  className='bg-gradient-to-r from-[#662D8C] text-white py-2 text-lg rounded-lg to-blue-500 w-full'>{data.topic}</button>

    )
}

export default LeftSC