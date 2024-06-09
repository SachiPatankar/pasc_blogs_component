import React, { useState } from 'react'
import ChangePswd from '../components/ChangePswd'


const ChangePswdPage = () => {
    
  return (
    <div className="bg-[#ddebff] flex flex-col w-screen h-screen justify-center items-center">

    <div className="flex flex-col justify-center bg-white px-8 py-8 lg:py-10 rounded-lg shadow-lg sm:w-96 min-h-96 ">
    <h2 className="text-[#3272A8] font-semibold text-2xl text-nowrap mb-4 pb-1">Forgot Password</h2>

      <h2 className="text-black font-semibold text-nowrap mb-4 pb-1">Set new password</h2>

    <ChangePswd/>
       </div>
   
 </div>
  )
}

export default ChangePswdPage