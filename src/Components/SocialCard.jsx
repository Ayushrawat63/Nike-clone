import React from 'react'

const SocialCard = (props) => {
  return (
    <div className='rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center'>
        <img src={props.data.src}
             alt={props.data.alt}
             width={24}
             height={24}            
        />
    </div>
  )
}

export default SocialCard