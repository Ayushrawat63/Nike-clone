import React from 'react'
import { services } from '../Constants/Contents';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section
    id='service'
    className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((value,index)=>(
        
        <ServiceCard key={index}
          data={value}
        />
     
      ))}

    </section>
  )
};

export default Services