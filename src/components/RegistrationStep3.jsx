import React from 'react'
import { useState } from 'react';

const RegistrationStep3 = ({ nextStep, prevStep }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
        <button type="button" onClick={prevStep} >
        <img src='/back.png' alt='Next step' className='w-full' />
        </button>
        <div className='text-center p-2'>
        <p className='text-lg'>Add a profile picture</p>
        </div>

         {/* add image component here, also do some state handling*/}

         <div className='text-center p-2'>
        <input type="file" accept="image/*" onChange={handleImageChange} id='file' className='mx-32'/>
        {selectedImage && (
          <div className='mt-4'>
            <img src={selectedImage} alt="Selected" className='w-32 h-32 rounded-full object-cover mx-auto' />
          </div>
        )}
      </div>
        
        <button type="button" className='bg-lime-500 p-2 w-full text-white rounded-2xl'>
            Done
        </button>

        

        
    </div>
  )
}

export default RegistrationStep3