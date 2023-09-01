import React, { useEffect, useState } from 'react'
import MidSingle from './MidSingle'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from "react-icons/hi";

const MiddleArea = () => {
  const { data,catagoryClick } = useSelector((state) => state.blog)



  return (
    <React.Fragment>


      <div className='flex-1 gap-5 py-5 wrapperMain grid grid-cols-3 navOutHeightScreen overflow-y-scroll relative'>

      {data.length == 0 ?<h1 className="text-base xl:text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 textce">! . . . No blogs available for this <span className='text-white'>{catagoryClick}</span> Catagory . . . !</h1>: null}

        {data.map((one) => <MidSingle key={uuidv4()} data={one} />)}






      </div>



    </React.Fragment>
  )
}

export default MiddleArea