import React, { useState } from 'react';
import bgimg from "../../assets/vector3.png";
import rendang from "../../assets/rendang.png";
import sate from "../../assets/sate padang.png";
import gulai from "../../assets/gulai-padang.png";

const imageList = [
    {
        id:1,
        img:rendang
    },
    {
        id:2,
        img:sate
    },
    {
        id:3,
        img:gulai
    },
]

const bgImage = {
    backgroundImage: `url(${bgimg})`,
    backgroundPosition: "center",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    width:'100%',
    height:'100%'
}

const Hero = () => {
    const [imageId, setImageId] = useState(rendang);

  return (
    <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Selamat Datang di Dapur Minang</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit laborum neque similique dicta quo ducimus explicabo vero eaque quidem praesentium?</p>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-4 rounded-full hover:scale-105 duration-200'>
                            Order Now
                        </button>
                    </div>
                </div>
                <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                    <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                        <img src={imageId} alt="" className='w-[300px] sm:w-[450px] rounded-full mx-auto spin'/>
                    </div>
                    <div className='flex '>
                        {
                            imageList.map((item)=>(
                                <img
                                key={item.id}
                                onClick={()=>setImageId(item.id)}
                                src={item.img}
                                className='max-w-[80px] h-[80px] object-contain inline-block cursor-pointer hover:scale-105 duration-200'
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero