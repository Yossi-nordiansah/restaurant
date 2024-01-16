import React from 'react';
import logo from "../../assets/logo.png";
import cart from "/cart.svg"

const Navbar = () => {
  return (
    <>
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
            <div className='container'>
                <div className="flex items-center justify-between">
                    <div>
                        <a href="#" className='flex items-center sm:text-3xl font-bold gap-2 text-2xl'>
                            <img src={logo} alt="" className='w-10'/>
                            Restu Bundo
                        </a>
                    </div>
                    <div>
                        <ul className='hidden sm:flex gap-4'>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                            </li>
                        </ul>
                        <button className='bg-gradient-to-r from-primary to-secondary flex items-center gap-1 font-semibold text-white px-4 py-1 rounded-full sm:hidden hover:scale-105 duration-300'>
                            <p>Order</p>
                           <img src={cart} alt="" className='w-5'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar