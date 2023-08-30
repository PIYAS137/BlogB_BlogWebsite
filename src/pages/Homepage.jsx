import React from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import MiddleArea from '../components/Middle/MiddleArea'
import RightBar from '../components/RightBar/RightBar'

const Homepage = () => {
  return (
    <React.Fragment>
        <div className='flex justify-between px-8 space-x-8'>
            <LeftBar/>
            <MiddleArea/>
            <RightBar/>
        {/* <div className='absolute w-16 h-16 bg-gray-200 bottom-10 right-10'></div> */}
        </div>
    </React.Fragment>
  )
}

export default Homepage