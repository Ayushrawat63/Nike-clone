import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ( {content}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img 
            src={content.imgURL}
            alt="customer"
            className='rounded-full object-cover w-[120px] h-[120px] '
        />
        <p className='mt-6 max-w-sm text-center info-text '>{content.feedback}</p>
        <div className='mt-3 justify-center items-center gap-2.5 flex'>
            <img
            src={star}
            width={24}
            height={24}
            className='object-contain m-0'

            />
            <p className=' text-xl font-montserrat text-slate-gray'>({content.rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold '>{content.customerName}</h3>
    </div>
  )
}

export default ReviewCard