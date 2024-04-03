import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
 
export default function Alert() {
  return (
    <div className='flex-col sm:flex-row gap-2 justify-between sm:justify-start sm:gap-5 flex-wrap w-full bg-orange-200   flex items-center px-5 py-2'>
        <p className='text-xs font-normal bg-orange-300 px-5 py-0.5 rounded-l-full rounded-r-full flex gap-2 items-center'>
        <FontAwesomeIcon icon={faClock}/>
            One Time Offer
        </p>
        <p className='text-xs text-center font-medium leading-5'>
            Your AI Storyboarding Bundle Discount Expires In 

            <span className='bg-red-100 py-1 px-2 text-red-500 ml-2'>
                5:01
            </span>
        </p>
        <button className='text-xs font-medium transition ease-in-out hover:bg-red-200 rounded-lg flex items-center gap-2 bg-red-300    px-3 py-1'>
            Claim Discount
        </button>
    </div>
  )
}
