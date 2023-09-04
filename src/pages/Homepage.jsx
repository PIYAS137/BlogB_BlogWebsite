import React, { useEffect } from 'react'
import LeftBar from '../components/LeftBar/LeftBar'
import MiddleArea from '../components/Middle/MiddleArea'
import RightBar from '../components/RightBar/RightBar'

const Homepage = () => {


  useEffect(() => {
    const confirmExit = (e) => {
      e.preventDefault();
      e.returnValue = ''; 
    };
    window.addEventListener('beforeunload', confirmExit);
    return () => {
      window.removeEventListener('beforeunload', confirmExit);
    };
  }, []);



  return (
    <React.Fragment>
        <div className='flex justify-between px-4 lg:px-8 space-x-0 lg:space-x-8'>
            <LeftBar/>
            <MiddleArea/>
            <RightBar/>
        </div>
    </React.Fragment>
  )
}

export default Homepage