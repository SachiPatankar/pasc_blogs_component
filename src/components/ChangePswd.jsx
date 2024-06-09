import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const ChangePswd = () => {
  return (
    <>
        <div className="relative w-full">
        <input
            type="password"
            className="py-2 pr-3 pl-8 border-[.1px] w-full border-gray-300 rounded-xl my-2 placeholder-[#000000]/20 text-black"
            placeholder="set new password"
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
       
        <Link className='bg-[#3272A8] rounded-xl my-5 py-2 w-full text-white font-medium text-center'> <button >Change password</button></Link>
    
   </>
  )
}

export default ChangePswd