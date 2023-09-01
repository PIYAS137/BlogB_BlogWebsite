import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import RightBar from '../components/RightBar/RightBar'
import { useDispatch, useSelector } from 'react-redux'
import MidSingle from '../components/Middle/MidSingle'
import { v4 as uuidv4 } from 'uuid';
import { HiChevronLeft } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { ClickSwapTrue } from '../features/blogSlice'




const ViewAllMyBlogs = () => {
    const { myBlogData } = useSelector((state) => state.blog)
    const dispatch=useDispatch()

    const handleSubClildSwap=()=>{
        console.log("FFFF")
        dispatch(ClickSwapTrue())
    }

    return (
        <div className='flex justify-between px-8 space-x-8 navOutHeightScreen overflow-hidden'>
            <LeftBar />




            <div className=' flex-1'>
                {myBlogData.length == 0 ? <div className='my-3 items-center px-3 bg-gradient-to-r from-[#662D8C] text-white py-2 text-lg rounded-lg to-blue-500 w-full flex justify-between'>
                    <Link to='/'>
                        <button onClick={handleSubClildSwap} className='text-2xl flex items-center'><HiChevronLeft /><span className='text-base'>Back</span></button>
                    </Link>
                    <h1 className=''>No Blog posted yet !</h1>
                </div> : null}
                <div className=' gap-5 py-5 navOutHeightScreen wrapperMain prime grid grid-cols-3 overflow-y-scroll '>


                    {myBlogData.map((one) => <MidSingle key={uuidv4()} data={one} />)}




                </div>
            </div>





            <RightBar />
        </div>
    )
}

export default ViewAllMyBlogs