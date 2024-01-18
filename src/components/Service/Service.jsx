import React from 'react';
import rendang from "../../assets/rendang.png";
import sate from "../../assets/sate padang.png";
import gulai from "../../assets/gulai-padang.png";

const ServicesData = [
    {
        id: 1,
        img: rendang,
        name: 'Rendang',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique?'
    },
    {
        id: 2,
        img: sate,
        name: 'Sate Padang',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique?'
    },
    {
        id: 3,
        img: gulai,
        name: 'Gulai Ayam',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique?'
    },
]

const Service = () => {
    return (
        <>
            <div className='py-10'>
                <div className="container">
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <h1 className='text-3xl font-bold'>Makanan Khas Padang</h1>
                        <p className='text-xs text-gray-400'>
                            {" "}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil repellendus in sed! Provident a commodi quisquam esse blanditiis culpa earum!
                        </p>
                    </div>

                    {/* card section */}
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center' >
                            {
                                ServicesData.map(({ id, img, name, description }) => {
                                    return <div key={id} className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                                        <div className='h-[130px]'>
                                            <img src={img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                        </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold dark:text-white'>{name}</h1>
                                            <p className='text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300'>{description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service