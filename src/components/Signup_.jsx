import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <>
    <div className="relative w-full">
         <input
           type="text"
           className="pl-8 border-[.1px] lg:w-full border-gray-300 rounded-xl py-1 text-sm my-2 placeholder-[#000000]/20 text-black"
           placeholder="Email Address"
         />
         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
             <MdOutlineMailOutline className="text-gray-400" />
           </span>
           
       </div>
       <div className="relative w-full">
         <input
           type="password"
           className="pl-8 border-[.1px] lg:w-full border-gray-300 rounded-xl py-1 text-sm my-2 placeholder-[#000000]/20 text-black"
           placeholder="password"
         />
         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
             <RiLockPasswordLine className="text-gray-400" />
           </span> 
       </div>
       <div className="relative w-full">
         <input
           type="password"
           className="pl-8 border-[.1px] lg:w-full border-gray-300 rounded-xl py-1 text-sm my-2 placeholder-[#000000]/20 text-black"
           placeholder="Confirm password"
         />
         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
             <RiLockPasswordLine className="text-gray-400" />
           </span> 
       </div>
       
      <Link className='bg-[#3272A8] rounded-xl my-5 py-1 w-full text-white font-medium text-center'> <button >SignUp</button></Link>
    
   </>
  )
}

export default Signup