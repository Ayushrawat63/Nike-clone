import React from 'react'
import Button from './Button';
import { shoe8 } from '../assets/images';

const SuperQulaity = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className='flex flex-col flex-1   '>
      <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      We provide you <span className="text-coral-red inline-block mt-3 "> Super </span> <span className="text-coral-red inline-block mt-3 "> Qualtiy </span> Shoes
    </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style,
          our meticulously crafted footwear is designed to elevate your experince,
          providing you with unmatched quality, innovation,and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to the detail and excellence ensures your satisfaction</p>
        <div className='mt-11 '>
          <Button label="View details"
            iconUrl={""} 
            color=" "
            />
        </div>
      </div>
      <div className=' flex-1 flex justify-center items-center'>
        <img
           src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className='object-conatin'>

        </img>
      </div>

    </section>
  )
};

export default SuperQulaity