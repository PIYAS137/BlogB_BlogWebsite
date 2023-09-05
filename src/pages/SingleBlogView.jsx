import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { ClickSwapTrue } from '../features/blogSlice';

const SingleBlogView = () => {
  const data = useLocation()
  const dispatch = useDispatch()
  const { catagory, date, description, heading, image, name, reaction } = data.state;

  const [isTrue, setIstrue] = useState(false)
  const [react, setReact] = useState(reaction)

  const handleClick = () => {
    setIstrue(!isTrue)
    if (!isTrue) {
      setReact(react => react + 1)
    } else {
      setReact(react => react - 1)
    }
  }

  const handleClickBack=()=>{
    console.log("done")
    dispatch(ClickSwapTrue())
  }



  return (
    <div className='prime flex justify-between px-4 lg:px-8 space-x-0 lg:space-x-8'>
      <LeftBar />
      <div className='flex-1 h-full overflow-y-scroll pb-5'>
        <Link to='/'>
        <span onClick={handleClickBack} className='text-gray-300 flex items-center pt-2'><FaChevronLeft className='mr-2'/> Back</span>
        </Link>
        <div className='lg:w-[70%]  mx-auto'>
        <h1 className='text-4xl py-3 text-blue-400'>{heading}</h1>
          <div className='w-full mt-5 flex justify-center items-center'>
            <img className='flex-1 rounded-lg' src={image} alt="" />
          </div>
          <div className='flex items-center space-x-6 py-2'>
            <div className="border border-purple-400 inline-block px-5 text-lg text-gray-300 capitalize rounded-xl my-3">
              {catagory}
            </div>
            <div onClick={handleClick} className='flex items-center cursor-pointer'>
              {isTrue ? <FcLike className='text-2xl' /> : <FcLikePlaceholder className='text-2xl' />} <span className='ml-1 text-xl -mt-1'> {react}</span>
            </div>
          </div>
          <p className='text-gray-400 flex justify-between'><span className='text-gray-400 '>By : {name}</span> at : {date}</p>
            <p id='desk' className='text-gray-200 text-justify'>{description}</p>
        </div>
      </div>
      <RightBar />
    </div>
  )
}

export default SingleBlogView