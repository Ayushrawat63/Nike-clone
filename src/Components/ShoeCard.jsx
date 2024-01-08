import React from 'react'

const ShoeCard = (props) => {
    const handlerClick=()=>{
        if(props.BigShoeImg!==props.ImgUrl.bigShoe)
        {
            props.changeBigShoeImage(props.ImgUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${props.BigShoeImg===props.ImgUrl.bigShoe ? 'border-coral-red':'border-tarnsparent'} cusror-pointer max:sm:flex-1`}
   onClick={handlerClick}>

       <div className='flex justify-center items-center
       bg-card bg-center bg-cover sm:w-40 sm:h-40
        rounded-xl max-sm:p-4'>
        <img 
        src={props.ImgUrl.thumbnail}
        alt="shoe Collection"
        width={127}
        height={103}
        className="object-contain">
        </img>
       </div>
    </div>
  )
}

export default ShoeCard