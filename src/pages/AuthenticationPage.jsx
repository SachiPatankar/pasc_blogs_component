import React, { useState } from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';

const AuthenticationPage = () => {
  const [login,setLogin]=useState(true);

  const toggleState = () => {
    setLogin(login => !login);
  };
  return (
    
    <div className="bg-[#ddebff] flex flex-col w-screen h-screen justify-center items-center">

      <div className="flex flex-col justify-center items-center bg-white px-8 py-8 lg:py-10 rounded-lg shadow-lg w-96 ">
        <h2 className="text-[#3272A8] font-semibold text-2xl text-nowrap mb-4 pb-1">{login?'Login':'Signup'}</h2>
        <div className='w-full mb-4 border-2 rounded-xl text-lg'>
          <button className={`w-1/2 h-12 rounded-xl ${login? 'bg-blue-500 text-white':'bg-white'}`} onClick={toggleState}>
            login
          </button>
          <button className={`w-1/2 h-12 rounded-xl ${!login? 'bg-blue-500 text-white':'bg-white'}`} onClick={toggleState}>
              signup
          </button>
        </div>
       {login?<Login/>:<Signup/>}
         </div>
     
   </div>
  );
};

export default AuthenticationPage;
