import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import RegistrationStep1 from '../components/RegistrationStep1';
import RegistrationStep2 from '../components/RegistrationStep2';
import RegistrationStep3 from '../components/RegistrationStep3';

const RegisterPage = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  return (
    

    <div className='mt-48 ml-4 mr-4'>
      <h1 className='text-4xl text-center mb-4'>
        Register
      </h1>

      <form className='max-w-md mx-auto'>
        {step === 1 && <RegistrationStep1 nextStep={nextStep} />}
        {step === 2 && <RegistrationStep2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <RegistrationStep3 prevStep={prevStep} />}
      </form>

      <div className='text-gray-500  mt-2 max-w-md mx-auto'>
        Already have an account? <Link className='underline text-black' to='/login'>Login Now</Link>
      </div>
    </div>

  );
}

export default RegisterPage