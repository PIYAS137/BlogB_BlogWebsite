import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink} from 'react-router-dom'
import { ClickSwapFalse, ClickSwapTrue } from '../../features/blogSlice'


const RightBar = () => {
  const { clickSwap,data,myBlogData } = useSelector((state) => state.blog)
  const dispatch=useDispatch()


  const hanldeGoSee=()=>{
    dispatch(ClickSwapFalse())
  }
  const handleBackSee=()=>{
    dispatch(ClickSwapTrue())
  }


  return (
    <React.Fragment>
      <div className='w-[18%] py-10 flex flex-col text-gray-400 items-center'>
        <div className='w-24 h-24 rounded-full overflow-hidden'>
          <img src="https://i.pinimg.com/564x/46/82/be/4682becf0956095dd75dcbfe11773915.jpg" alt="" />
        </div>
        <h1 className='text-2xl font-semibold mt-3 text-gray-300'>Piyas Mahamude Alif</h1>
        <small>piyasmahmudealif@gmail.com</small>
        <p className='my-6 text-lg'>My Blogs : <span className='font-sans'>{myBlogData.length}</span> Blog</p>


      {clickSwap?<Link to='viewallblogs' className='w-full'>
          <button onClick={hanldeGoSee} className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 w-full'>See All My Blogs</button>
        </Link>:<Link to='/' className='w-full'>
          <button onClick={handleBackSee} className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 w-full'>Back To Homepage</button>
        </Link>}


        

        





        <button className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 mt-2 w-full'>Log Out</button>
        <h1 className='pt-10 pb-3'>Your recent blog</h1>
        <div
          className='w-full h-44 rounded-lg cardImage opacity-70 relative overflow-hidden' style={{
            backgroundImage: `url(${myBlogData[0]?myBlogData[0].image:"https://i.pinimg.com/564x/b1/54/7e/b1547ea47c41ff923ae45c9373c88ad7.jpg"})`
          }}>
          <div className='w-20 h-20 absolute bg-gray-700 -top-4 -left-1 rounded-full flex justify-center items-center'>
            <p className='tightLeft text-gray-300 text-sm'>{myBlogData[0]?myBlogData[0].catagory:"NULL"}</p>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default RightBar