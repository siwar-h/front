import React from 'react'
import { Link } from 'react-router-dom'
import imicCart from '../componets/images/banner/imic.png';


const Header = () => {
  return (
    <header className='flex justify-between items-center mb-5'>
<Link to="/h" className='text-xl font-semibold'>Home</Link>
<div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
    <img src={imicCart} alt='' className='w-6'/>
    <span className='absolute top-2 right-2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>0</span>
    </div>
   
    </header>
  )
}

export default Header
