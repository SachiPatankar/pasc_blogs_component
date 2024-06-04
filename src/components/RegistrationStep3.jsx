import React from 'react'

const RegistrationStep3 = ({ nextStep, prevStep }) => {
  return (
    <div>
        <button type="button" onClick={prevStep} >
        <img src='/back.png' alt='Next step' className='w-full' />
        </button>
        <div className='text-center p-2'>
        <p className='text-lg'>Add a profile picture</p>
        </div>

         {/* add image component here, also do some state handling*/}

        
        
        <button type="button" className='bg-lime-500 p-2 w-full text-white rounded-2xl'>
            Done
        </button>

        

        
    </div>
  )
}

export default RegistrationStep3