import React, { useState } from 'react';
import Signup from '../components/Signup_';
import Login from '../components/Login';

const LoginPage = () => {
  const [login,setlogin]=useState(true);
  return (
    
    <div className="bg-[#ddebff] flex flex-col-reverse md:flex-row w-screen h-screen relative justify-center">
    <div className="bg-[#ddebff] md:w-5/12 h-screen flex flex-col-reverse justify-center items-center">

      <div className="flex flex-col justify-center items-center bg-white px-8 py-8 lg:py-10 lg:w-3/5 rounded-lg shadow-lg">
        <h2 className="text-[#3272A8] font-semibold text-2xl text-nowrap mb-4 pb-1">{login?'Login Form':'Signup Form'}</h2>
        <div className='w-full pb-4'>
          <button className={`w-1/2 h-9 md:h-12 rounded-xl border border-slate-200  ${login? 'bg-blue-500':'bg-white'}`} onClick={()=>setlogin(false)}>
            login
          </button>
          <button className={`w-1/2 h-9 md:h-12 rounded-xl border border-slate-200 ${!login? 'bg-blue-500':'bg-white'}`} onClick={()=>setlogin(true)}>
              signup
          </button>
        </div>
       {login?<Login/>:<Signup/>}
         </div>
     </div>
   </div>
  );
};

export default LoginPage;
