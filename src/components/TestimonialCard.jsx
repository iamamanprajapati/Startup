import React from 'react'

const TestimonialCard = ({data}) => {
  return (
    <div className='p-6'>
        <div className='flex items-center gap-x-1'>
        <div className='w-16'>
            <img src={data.image} alt={data.name} />
        </div>
        <div>
            <p className='text-base text-gray-300'>{data.name}</p>
            <p className='text-xs text-gray-600'>{data.email}</p>
        </div>
        </div>
        <div className='mt-2'>
            <p className='text-sm text-gray-500'>{data.review}</p>
        </div>
      
    </div>
  )
}

export default TestimonialCard
