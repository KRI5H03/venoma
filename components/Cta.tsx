import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Cta = () => {
  return (
    <section className='mt-24 bg-accent py-20'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <h3 className='h3 text-center mb-6 xl:mb-0'>founded with passion for excellence</h3>
          <button className='btn btn-primary gap-2.5'>Browse our Collection<FaArrowRight /></button>
        </div>
      </div>
    </section>
  )
}

export default Cta