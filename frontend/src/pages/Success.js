import React from 'react'
import SUCCESSIMAGE from '../assest/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className=' w-full max-w-md mx-auto mt-16 flex justify-center items-center flex-col p-4 rounded'>
        <img src={SUCCESSIMAGE} className='' width={500} height={500} alt=''/>
        <Link to={"/order"} className='pt-2 p-2 px-3 mt-1 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link>
      
    </div>
  )
}

export default Success