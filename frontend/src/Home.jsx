import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <>
   <div className='w-full h-[100vh] bg-gradient-to-r from-red-600 to-green-600 flex justify-center items-center flex-col gap-[50px]'>
    <h1 className='text-white text-6xl font-bold text-red-200'>Admin Pannel</h1>
    <div>
        <Link to='/customers' className='p-4 bg-gray-700 text-white hover:bg-blue-800 hover:text-red-500 rounded-2xl text-2xl font-bold'>FOR CUSTOMER</Link>
        <Link to='/products'  className='p-4 bg-gray-700 text-white hover:bg-blue-800 hover:text-red-500 rounded-2xl text-2xl font-bold ml-[20px]'>FOR PRODUCT</Link>
    </div>
   </div>
   </>
  )
}
