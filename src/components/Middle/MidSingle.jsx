import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClickModalFalse, ClickModalTrue, ClickSwapFalse, ClickSwapTrue } from '../../features/blogSlice';
import { useFirebase } from '../../context/Firebase';

const MidSingle = ({ data }) => {
    const {user}=useFirebase()
    const { catagory, image, heading, description, date } = data;
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(ClickSwapFalse())
    }
    return (
        <React.Fragment>
            <Link onClick={handleClick} to="singleView" state={ data}>
                <div id='card' className='rounded-xl min-h-96 bg-gradient-to-r relative cursor-pointer from-[#662D8C] to-blue-500'>
                    {/* <img className='rounded-t-xl' src={image} alt="" /> */}
                    <div className='w-full overflow-hidden rounded-t-xl'>
                        <div id='bgImg'
                            className=' h-44 cardImage' style={{
                                backgroundImage: `url(${image})`
                            }}></div>
                    </div>

                    {user.displayName=== data.name && <img src={user.photoURL} className=' border border-white w-8 h-8 object-cover rounded-full absolute top-1 right-1 text-xl text-black text-bl cursor-pointer' />}
                    

                    <div className='px-3'>
                        <div className='flex justify-between items-center mt-1'>
                            <span className="bg-gray-300 text-purple-700 font-bold tracking-wider my-2 inline-block px-6 rounded-lg capitalize ">{catagory}</span>
                            <span className='font-sans text-gray-300 text-sm'>{date}</span>
                        </div>
                        <div className="">
                            <h1 className='text-2xl py-2 leading-7'>{heading}</h1>
                            {description && <p className='text-justify leading-5 py-2'>{description.split(" ").slice(0, 25).join(' ')} . . .</p>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default MidSingle