import React from 'react'
import Logo from '../components/Navbar/Logo';
import { HiPencil } from "react-icons/hi";
import Modal from '../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { ClickModalTrue,ClickSwapTrue } from '../features/blogSlice';
import { Link } from 'react-router-dom';


const AppNavbar = () => {

  const dispatch = useDispatch()
  

  const handleClickBack=()=>{
    console.log("first")
    dispatch(ClickSwapTrue())
  }

  const handleClick=()=>{
    dispatch(ClickModalTrue())
  }

  return (
    <nav className='h-20 bg-gradient-to-r from-[rgb(26,26,26)] from-10% via-violet-900 to-purple-700 to-70% flex justify-between px-8 items-center'>

      <div className='w-[12%] flex items-center  h-full'>
        <Link onClick={handleClickBack} to='/'>
        <Logo data="Blog K`" /></Link>
      </div>
      <div className='flex-1  h-full px-7 flex items-center justify-end'>
        <input type="text" placeholder="Search blogs" className="outline-none mr-2 input bg-purple-600 border-none input-bordered input-primary w-full max-w-xs" />
        <button className='btn bg-purple-500 hover:bg-purple-400 border-none text-white'>Search</button>
      </div>
      <div className='w-[18%] h-full flex items-center justify-end space-x-2 '>
        <span className='text-white text-lg font-semibold'>Create Blog</span>
        <span onClick={handleClick} className='cursor-pointer w-12 h-12 text-xl rounded-xl bg-purple-500 hover:bg-purple-400 flex justify-center items-center'>
          <HiPencil />
        </span>

      </div>


      {/* modal area */}
      <Modal/>
      {/* modal area */}

    </nav>
  )
}

export default AppNavbar