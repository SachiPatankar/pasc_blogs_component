import React from 'react'

const RegistrationStep2 = ({ nextStep, prevStep }) => {
  return (
    <div>
        <button type="button" onClick={prevStep} >
        <img src='/back.png' alt='Next step' className='w-full' />
        </button>
        <input
            className='w-full border my-2 py-2 px-3 rounded-2xl'
            type='text'
            placeholder='First name'
        />
        <input
            className='w-full border my-2 py-2 px-3 rounded-2xl'
            type='text'
            placeholder='Last name'
        />

        <input
            className='w-full border my-2 py-2 px-3 rounded-2xl'
            type='text'
            placeholder='username'
        />

        
        <button type="button" onClick={nextStep} className='bg-[#FC4308] p-2 w-full text-white rounded-2xl'>
            Next step
        </button>



    </div>
  )
}

export default RegistrationStep2