import React from 'react'
import CANCLEIMAGE from '../assest/cancel.gif'
import { Link } from 'react-router-dom'


const Cancel = () => {
  return (
    <div className=' w-full max-w-md mx-auto mt-16 flex justify-center items-center flex-col p-4 rounded'>
        <img src={CANCLEIMAGE} className='mix-blend-multiply' width={500} height={500} alt=''/>
        <p className='font-semibold text-red-600 text-xl py-3'>Payment Cancel</p>
        <Link to={"/cart"} className='pt-2 p-2 px-3 mt-1 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>Go To Cart</Link>
      
    </div>
  )
}

export default Cancel