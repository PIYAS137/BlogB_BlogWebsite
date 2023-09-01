import React from 'react'
import { CatagoryData } from '../../database/Catagory'
import LeftSC from './LeftSC'
import { useDispatch } from 'react-redux'
import { ClickCatagoryOption, ClickSwapFalse, ClickSwapTrue, SeeAllBlogsButton } from '../../features/blogSlice'
import { useNavigate } from 'react-router-dom'

const LeftBar = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const getCData = (val) => {
    dispatch(ClickCatagoryOption(val.topic))
  }
  const handleClick=()=>{
    dispatch(SeeAllBlogsButton())
    dispatch(ClickSwapTrue())
    navigate("/")
  }



  return (
    <React.Fragment>
      <div className='w-[12%]'>
        <h1 className='text-xl text-gray-300 text-center py-3 tracking-wider'>Catagory of Topics</h1>
        <div className='flex flex-col space-y-2'>
          {CatagoryData.map((one) => <LeftSC key={one.id} getCData={getCData} data={one} />)}
        </div>
        <hr className='mt-2 w-full h-[1px] mx-auto bg-gray-700 border-0  dark:bg-gray-700'/>
        <div onClick={handleClick} className='cursor-pointer text-center mt-2 bg-gradient-to-r from-[#662D8C] text-white py-2 text-lg rounded-lg to-blue-500 w-full'>
          Reset Data
        </div>
      </div>
    </React.Fragment >
  )
}

export default LeftBar