import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = (props) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
       <img className='w-[280px] h-[280px]' 
       src={props.value.imgURL}
         alt={props.value.name}
         ></img>
         <div className='mt-5 ml-2 flex justify-start gap-2.5'>
         <img src={star}
            alt="rating"
            width={24}
            height={24}/>
           <p className='font-montserrat
            text-xl leading-normal text-slate-gray'>
            ({props.value.rating})</p>

         </div>
         <h1 className='mt-2 ml-2 text-xl leading-normal font-palanquin font-semibold'>{props.value.name}</h1>
         <p className='mt-2 ml-2 leading-normal font-montserrat text-2xl text-coral-red font-semibold '>{props.value.price}</p>
    </div>
  )
}

export default PopularProductCard