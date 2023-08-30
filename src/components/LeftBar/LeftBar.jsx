import React from 'react'
import { CatagoryData } from '../../database/Catagory'
import LeftSC from './LeftSC'
import { useDispatch } from 'react-redux'
import { ClickCatagoryOption } from '../../features/blogSlice'

const LeftBar = () => {
  const dispatch = useDispatch()

  const getCData = (val) => {
    dispatch(ClickCatagoryOption(val.topic))
  }



  return (
    <React.Fragment>
      <div className='w-[12%]'>
        <h1 className='text-xl text-gray-300 text-center py-3 mb-2 tracking-wider'>Catagory of Topics</h1>
        <div className='flex flex-col space-y-2'>
          {CatagoryData.map((one) => <LeftSC key={one.id} getCData={getCData} data={one} />)}
        </div>
      </div>
    </React.Fragment >
  )
}

export default LeftBar