import React from 'react'

const MidSingle = ({ data }) => {
    const { catagory, image, heading, description, date } = data;
    return (
        <div className='rounded-xl min-h-96 bg-gradient-to-r relative from-[#662D8C] to-blue-500 '>
            {/* <img className='rounded-t-xl' src={image} alt="" /> */}
            <div
                className='w-full h-44 rounded-t-xl cardImage' style={{
                    backgroundImage: `url(${image})`
                }}></div>

            <img src='https://i.pinimg.com/564x/46/82/be/4682becf0956095dd75dcbfe11773915.jpg' className=' border border-white w-8 h-8 object-cover rounded-full absolute top-1 right-1 text-xl text-black text-bl cursor-pointer' />

            <div className='px-3'>
                <div className='flex justify-between items-center mt-1'>
                    <span className="bg-gray-300 text-purple-700 font-bold tracking-wider my-2 inline-block px-6 rounded-lg capitalize ">{catagory}</span>
                    <span className='font-sans text-gray-300 text-sm'>{date}</span>
                </div>
                <div className="">
                    <h1 className='text-2xl py-2 leading-7'>{heading}</h1>
                    {description &&<p className='text-justify leading-5 py-2'>{description.split(" ").slice(0, 25).join(' ')} . . .</p>
}
                </div>
            </div>
        </div>
    )
}

export default MidSingle