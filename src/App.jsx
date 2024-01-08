import React from 'react'
import {Nav ,Hero, PopularProducts, SuperQulaity, Services,SpecialOffer, CustomerReviews,Subscribe ,Footer } from './Components/Import';


export default function App() {
  return (
    <main className='relative'>
        <Nav/>
        <section className='xl:padding-l wide:padding-r padding-b' >
          <Hero/>
        </section>
        <section className='padding'>
           <PopularProducts/>
        </section>
        <section className='padding'>
             <SuperQulaity/>
        </section>
        <section className='padding-x py-10'>
             <Services/>
        </section>
        <section className='padding'>
             <SpecialOffer/>
        </section>
        <section className='bg-pale-blue padding'>
              <CustomerReviews/>
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
             <Subscribe/>
        </section>
        <section className='padding-x bg-black padding-t pb-8'>
             <Footer/>
        </section>
    </main>
  )
}
