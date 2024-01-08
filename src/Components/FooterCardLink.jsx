import React from 'react'

const FooterCardLink = (props) => {
  return (
    <div className='flex flex-col'>
        <h3 className='text-white text-2xl font-montserrat leading-normal font-medium mb-6 '>{props.value.title}</h3>
        {props.value.links.map((data)=>(
            <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer list-none'>
            <a  >{data.name}
            </a>
            </li>
        ))}
    </div>
  )
}

export default FooterCardLink