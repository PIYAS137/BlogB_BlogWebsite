import React, { useState } from 'react'
import Logo from '../components/Navbar/Logo';
import { HiPencil } from "react-icons/hi";
import Modal from '../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { ClickCatagoryOption, ClickModalTrue, ClickSearchButton, ClickSwapTrue, SeeAllBlogsButton } from '../features/blogSlice';
import { Link, useNavigate } from 'react-router-dom';
import { CatagoryData } from '../database/Catagory';
import { useFirebase} from '../context/Firebase';


const AppNavbar = () => {
  const { user,LogOut } = useFirebase()
  const [selectedText, setSelectedText] = useState('');
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickBack = () => {
    dispatch(ClickSwapTrue())
  }
  const handleClick = () => {
    dispatch(ClickModalTrue())
  }

  const handleClickSelect = (e) => {
    setSelectedText(e.target.value);
  }
  const handleChangeInputSearch = (e) => {
    setInputData(e.target.value);
  }
  const handleSubmitButton = () => {
    dispatch(ClickSearchButton([inputData, selectedText]))
  }

  const handleClickCatagory = (val) => {
    dispatch(ClickCatagoryOption(val))
  }
  const handleClickAllView = () => {
    dispatch(SeeAllBlogsButton())
    dispatch(ClickSwapTrue())
    navigate("/")
  }
  const UserLogOut=async()=>{
    await LogOut()
  }



  return (


    <React.Fragment>


      <nav className='bg-gradient-to-r block lg:hidden from-[rgb(26,26,26)] from-10% via-violet-900 to-purple-700 to-70% p-1'>


      {/* create post for mobile menu */}
      <span onClick={handleClick} className='cursor-pointer absolute top-[90%] right-[5%] z-30 w-12 h-12 text-xl rounded-xl bg-[#ff00ff70] flex justify-center items-center'>
            <HiPencil />
          </span>
                  {/* modal area */}
        <Modal />
        {/* modal area */}
      {/* create post for mobile menu */}




        {/* mobile menu */}
        <div className='flex justify-between'>
          <div className=' flex items-center p-1 h-full'>
            <Link onClick={handleClickBack} to='/'>
              <Logo className="w-full" data="Blog K`" /></Link>
          </div>
          <div className="flex justify-center items-center">
            <h1 className='text-md'>{user.displayName}</h1>
            


            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className=" cursor-pointer">
              <img className="w-10 h-10 rounded-full ml-2" src={user.photoURL} alt="" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-purple-600 rounded-box w-52">
                <Link to='viewallblogs'>
                <li><a>See My Blogs</a></li>
                </Link>
                <li onClick={UserLogOut}><a>Log Out</a></li>
              </ul>
            </div>


          </div>
        </div>
        
        
        
        {/* mobile menu */}
        <div className='flex-1 my-1 mx-1 h-full flex items-center justify-center'>
          <input onChange={handleChangeInputSearch} type="text" placeholder="Search blogs" className="outline-none mr-1 text-sm p-2 rounded-lg bg-purple-600 border-none w-full max-w-xs" />
          <button onClick={handleSubmitButton} className=' py-2 rounded-lg px-2  bg-purple-600 hover:bg-purple-400 text-sm border-none text-white'>Search</button>


          {/* DROP DOWN hided catagory*/}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="text-sm px-2 py-2 rounded-lg ml-1 bg-purple-600 border-none hover:bg-purple-600 text-white">Category</label>
            <ul tabIndex={0} className=" dropdown-content bg-purple-500 z-[1] menu shadow rounded-box w-52">
              {CatagoryData.map((one) => <li onClick={() => { handleClickCatagory(one.topic) }} key={one.id} className=''><a>{one.topic}</a></li>)}
              <li onClick={handleClickAllView}><a>View All Blogs</a></li>
            </ul>
          </div>
          {/* DROP DOWN hided catagory*/}




        </div>
      </nav>

















      <nav className='h-20 hidden lg:flex bg-gradient-to-r from-[rgb(26,26,26)] from-10% via-violet-900 to-purple-700 to-70% justify-between px-8 items-center'>

        <div className=' flex items-center  h-full'>
          <Link onClick={handleClickBack} to='/'>
            <Logo data="Blog K`" /></Link>
        </div>








        <div className='flex-1  h-full px-7 flex items-center justify-end'>
          <input onChange={handleChangeInputSearch} type="text" placeholder="Search blogs" className="outline-none mr-2 input bg-purple-600 border-none input-bordered input-primary w-full max-w-xs" />
          {/* ------------------------drop down------------------------------ */}

          <select onChange={(e) => { handleClickSelect(e) }} name="" id="" className='bg-purple-600 rounded-lg outline-none border-none mr-2 py-3 px-2'>
            <option value="">Filter By</option>

            {CatagoryData.map((one) => <option className='bg-purple-600' value={one.topic} key={one.id}>{one.topic}</option>)}
          </select>

          {/* ------------------------drop down------------------------------ */}
          <button onClick={handleSubmitButton} className='btn bg-purple-600 hover:bg-purple-400 border-none text-white'>Search</button>


          {/* DROP DOWN hided catagory*/}
          <div className="dropdown dropdown-end ml-1 lg:hidden">
            <label tabIndex={0} className="btn m-1 bg-purple-600 border-none hover:bg-purple-600 text-white">Category</label>
            <ul tabIndex={0} className=" dropdown-content bg-purple-500 z-[1] menu shadow rounded-box w-52">
              {CatagoryData.map((one) => <li onClick={() => { handleClickCatagory(one.topic) }} key={one.id} className=''><a>{one.topic}</a></li>)}
              <li onClick={handleClickAllView}><a>View All Blogs</a></li>
            </ul>
          </div>
          {/* DROP DOWN hided catagory*/}




        </div>
        <div className='w-[18%] h-full flex items-center justify-end space-x-2 '>
          <span className='text-white text-lg font-semibold'>Create Blog</span>
          <span onClick={handleClick} className='cursor-pointer w-12 h-12 text-xl rounded-xl bg-purple-500 hover:bg-purple-400 flex justify-center items-center'>
            <HiPencil />
          </span>

        </div>



        {/* modal area */}
        <Modal />
        {/* modal area */}

      </nav>
    </React.Fragment>
  )
}

export default AppNavbar