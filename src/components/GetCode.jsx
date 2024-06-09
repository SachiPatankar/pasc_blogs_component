import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const GetCode = ({handleVerify}) => {
  return (
    <>
    <div className="relative w-full">
    <div className="relative w-full">
        <input
            type="text"
            className="py-2 pr-3 pl-8 border-[.1px] w-full border-gray-300 rounded-xl my-2 placeholder-[#000000]/20 text-black"
            placeholder="enter code"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <RiLockPasswordLine className="text-gray-400" />
            </span> 
        </div>
           
       </div>
      
      <Link onClick={handleVerify} className='bg-[#3272A8] rounded-xl my-5 py-2 w-full text-white font-medium text-center'> Verify </Link>
     <div className='text-sm'>
       Did not get the code?<Link className='text-blue-400'> Resend it</Link>
     </div>
   </>
  )
}

export default GetCode