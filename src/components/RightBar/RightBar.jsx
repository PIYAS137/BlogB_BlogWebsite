import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ClickSwapFalse, ClickSwapTrue } from '../../features/blogSlice'
import { useFirebase } from '../../context/Firebase'


const RightBar = () => {
  const { clickSwap ,myBlogData } = useSelector((state) => state.blog)
  const {user}=useFirebase()
  const {LogOut} = useFirebase()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const hanldeGoSee = () => {
    dispatch(ClickSwapFalse())
  }
  const handleBackSee = () => {
    dispatch(ClickSwapTrue())
  }

  const handleLogOut = async () => {
    try {
      await LogOut()
      // After successful logout, navigate to the login page or any other desired page
      navigate('/login') // Replace '/login' with the appropriate URL
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }



  return (
    <React.Fragment>
      <div className='w-[18%] hidden py-10 lg:flex flex-col text-gray-400 items-center'>
        <div className='w-24 my-5 h-24 rounded-full overflow-hidden'>
          <img src={user.photoURL} alt="" />
        </div>
        <h1 className='text-2xl font-semibold mt-3 text-gray-300'>{user.displayName}</h1>
        <small>{user.email}</small>
        <p className='my-6 text-lg'>My Blogs : <span className='font-sans'>{myBlogData.length}</span> Blog</p>


        {clickSwap ? <Link to='viewallblogs' className='w-full'>
          <button onClick={hanldeGoSee} className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 w-full'>See All My Blogs</button>
        </Link> : <Link to='/' className='w-full'>
          <button onClick={handleBackSee} className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 w-full'>Back To Homepage</button>
        </Link>}










        <button onClick={handleLogOut} className='bg-gradient-to-r from-[#662D8C] text-white py-[6px] text-lg rounded-lg to-blue-500 mt-2 w-full'>Log Out</button>
        <h1 className='pt-10 pb-3'>Your recent blog</h1>

        <div 
          className='w-full h-44 rounded-lg cardImage opacity-70 relative overflow-hidden' style={{
            backgroundImage: `url(${myBlogData[0] ? myBlogData[0].image : "https://i.pinimg.com/564x/b1/54/7e/b1547ea47c41ff923ae45c9373c88ad7.jpg"})`
          }}>
          <div className='w-20 h-20 absolute bg-gray-700 -top-4 -left-1 rounded-full flex justify-center items-center'>
            <p className='tightLeft text-gray-300 text-sm'>{myBlogData[0] ? myBlogData[0].catagory : "NULL"}</p>
          </div>
        </div>



      </div>
    </React.Fragment>
  )
}

export default RightBar