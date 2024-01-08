import React from 'react'

const Button = (data) => {
    return (
        <button className={` flex justify-center items-center gap-2 px-7 py-4 border 
        font-montserrat text-lg leading-none rounded-full ${data.color!=" " ?  data.color :'bg-coral-red text-white border-coral-red' } ${data.fullwidth && 'w-full'} `}>
            {data.label}
            { data.iconUrl && <img src={data.iconUrl}
                alt="arrow right icon"
                className='ml-2 rounded-full bg-white w-5 h-5  '
            />}
        </button>
    )
}

export default Button