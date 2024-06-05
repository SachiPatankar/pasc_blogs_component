import React from 'react'

const RegistrationStep1 = ({ nextStep }) => {
  return (
    <div>
      
      <input
        className='w-full border my-2 py-2 px-3 rounded-2xl'
        type='email'
        placeholder='your@email.com'
      />
      <input
        className='w-full border my-2 py-2 px-3 rounded-2xl'
        type='password'
        placeholder='password'
      />
      <input
        className='w-full border my-2 py-2 px-3 rounded-2xl'
        type='password'
        placeholder='confirm password'
      />
      <button type="button" onClick={nextStep} className='bg-[#FC4308] p-2 w-full text-white rounded-2xl'>
        Next step
      </button>
    </div>
  )
}

export default RegistrationStep1