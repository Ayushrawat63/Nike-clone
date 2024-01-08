import React from 'react'
import Button from './Button';
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';

const SpecialOffer = () => {
  return (
     <section className='flex justify-between items-center
      max-xl:flex-col-reverse gap-10 max-container'>
     <div className='flex-1'>
      <img src={offer}
         width={773}
         height={687}
         className='object-contain w-full'/>
     </div>
       <div className='flex flex-col flex-1   '>
      <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      <span className="text-coral-red inline-block mt-3 "> Special </span> Offer
    </h2>
        <p className="mt-4  info-text">Embark on a shoping journey that 
        redefines your experince with unbeatable deals.From premier selections
         to incredible savings, we offer unparalled value that sets us apart. 
        </p>
        <p className="mt-6 info-text">Navigate a realm of possibilites
         designed to fulfill your unique desires, surpassing the loftiest 
         expections. Your journey with us nothing short of expceptional. </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="shop-now"
            iconUrl={arrowRight} 
              color=" "
            />
            <Button label="Learn more"
            iconUrl={""} 
              color='bg-white border-2 border-gray text-slate-gray'
            />
        </div>
      </div>
     </section>
  )
};

export default SpecialOffer