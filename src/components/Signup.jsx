import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <>
    <div className="relative w-full">
          <input
            type="email"
            className="py-2 pr-3 pl-8 border-[.1px] w-full border-gray-300 rounded-xl my-2 placeholder-[#000000]/20 text-black"
            placeholder="your email id"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MdOutlineMailOutline className="text-gray-400 " />
            </span>
            
        </div>
        <div className="relative w-full">
        <input
            type="password"
            className="py-2 pr-3 pl-8 border-[.1px] w-full border-gray-300 rounded-xl my-2 placeholder-[#000000]/20 text-black"
            placeholder="set password"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <RiLockPasswordLine className="text-gray-400" />
            </span> 
        </div>
        <div className="relative w-full">
        <input
            type="password"
            className="py-2 pr-3 pl-8 border-[.1px] w-full border-gray-300 rounded-xl my-2 placeholder-[#000000]/20 text-black"
            placeholder="confirm password"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <RiLockPasswordLine className="text-gray-400" />
            </span> 
        </div>
       
        <Link className='bg-[#3272A8] rounded-xl my-5 py-2 w-full text-white font-medium text-center'> <button >Signup</button></Link>
      <div className='text-sm'>
        Already have an account?<Link className='text-blue-400'> Login now</Link>
      </div>
    
   </>
  )
}

export default Signup