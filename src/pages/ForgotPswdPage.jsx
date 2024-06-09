import React, { useState } from 'react'
import ForgotPswd from '../components/ForgotPswd'
import GetCode from '../components/GetCode';

const ForgotPswdPage = () => {
    const [getcode, setGetcode] = useState(false);

    const handleGetcode = () => {
        setGetcode(true);
    }
  return (
    <div className="bg-[#ddebff] flex flex-col w-screen h-screen justify-center items-center">

    <div className="flex flex-col justify-center bg-white px-8 py-8 lg:py-10 rounded-lg shadow-lg sm:w-96 min-h-96 ">
    <h2 className="text-[#3272A8] font-semibold text-2xl text-nowrap mb-4 pb-1">Forgot Password</h2>

      <h2 className="text-black font-semibold text-nowrap mb-4 pb-1">{getcode ? "Enter code sent on your email" : "Enter registered email"}</h2>

    {getcode ? <GetCode/>: <ForgotPswd handleGetCode={handleGetcode}/>}
       </div>
   
 </div>
  )
}

export default ForgotPswdPage