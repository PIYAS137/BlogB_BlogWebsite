import React, { useState,useEffect } from 'react'
import { CatagoryData } from '../../database/Catagory'
import { useDispatch, useSelector } from 'react-redux'
import { AddBlog, ClickModalFalse } from '../../features/blogSlice'

const Modal = () => {
    const {clickModal} = useSelector((state)=>state.blog)

    const dispatch = useDispatch()

    const [catagory,setCatagory]=useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [header,setHeader]=useState('')
    const [description,setDescription]=useState('');
    const [selectedImage, setSelectedImage] = useState(null);
      


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setSelectedImage(URL.createObjectURL(file));
        }
    }









    useEffect(() => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      setCurrentDate(`${day}.${month}.${year}`);
    }, []);


    const hanldeClickSelect=(e)=>{
        setCatagory(e.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const blogObject = {name:"Default Name that set From MODAL",catagory:catagory,reaction:0,date:currentDate,heading:header,description:description,image:selectedImage}
        dispatch(AddBlog(blogObject))
        dispatch(ClickModalFalse())
    }

    const hanldeClickModalStatus=()=>{
      dispatch(ClickModalFalse())
    }



  return (
   
    <React.Fragment>
      {clickModal && 
      
      <dialog className=" absolute top-0 left-0 w-full h-screen bgx flex justify-center items-center">
        <form onSubmit={handleSubmit} className="modal-box bg-[rgb(26,26,26)] max-w-4xl z-50">
        <button onClick={hanldeClickModalStatus} className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-white bg-zinc-800">✕</button>
          <h3 className="font-bold text-3xl text-purple-500 pb-6">Lets write for the world!</h3>
          <div className='flex justify-between items-center'>
            <select value={catagory} onChange={hanldeClickSelect} name="" id="" className="select select-primary w-full max-w-xs outline-none block mb-3 bg-gray-500 border-none">
              <option value="">Select the catagory</option>
              {CatagoryData.map((one) => <option key={one.id}>{one.topic}</option>)}
            </select>
            <input accept="image/*" onChange={handleFileChange} type="file" />
          </div>
          <textarea onChange={e=>{setHeader(e.target.value)}} name="" id="" rows="1" className='border-none rounded-lg w-full bg-gray-500 p-3 mb-2 outline-none' placeholder='Heading...'></textarea>
          <textarea onChange={e=>{setDescription(e.target.value)}} name="" id="" rows="15" className='border-none rounded-lg w-full bg-gray-500 p-3 mb-2 outline-none' placeholder='Describe topic...'></textarea>
          <button className='bg-purple-500 px-10 py-1 rounded-lg text-md'>Post</button>
        </form>
      </dialog>
      
      }
    </React.Fragment>

  )
}

export default Modal;