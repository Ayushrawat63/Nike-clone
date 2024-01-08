import React from 'react'
import Button from './Button';

const Subscribe = () => {
  return (
    <section  id='contact-us'
    className=' max-container flex max-lg:flex-col justify-between items-center gap-10'>
      <h3 className='font-palanquin text-4xl leading-[68px]  font-bold lg:max-w-md'>Sign Up for <span className='text-coral-red inline-block mt-3'>Updates</span> & Newsletter</h3>
      <div className=' lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm::border-slate-gray rounded-full'>
            <input type="text"
              placeholder='Subscribe@nike.com'
              className='input'/>
              <div className='flexx max-sm:justify-end items-center max-sm:w-full'>
              <Button label="Sign Up"
            iconUrl={""} 
            color=" "
              fullwidth
            />
              </div>
      </div>
         
    </section>
  )
};

export default Subscribe;