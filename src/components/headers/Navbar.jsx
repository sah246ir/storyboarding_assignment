import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faSearch,faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='flex-col sm:flex-row relative p-3 bg-white flex justify-center sm:justify-between gap-3 flex-wrap overflow-hidden'>
      <div className='flex-col sm:flex-row flex items-center gap-4'>
        <p className='bg-black text-white w-11 h-11 rounded-full flex items-center justify-center font-medium text-2xl font-extrabold '>
          B
        </p>
        <h1 className='text-center text-xl font-bold '>Project Dashboard</h1>
      </div>

      <div className='flex-col sm:flex-row flex justify-center items-center gap-4 flex-wrap sm:mr-8'>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon className='text-xs text-gray-400' icon={faSearch} />

          </div>
          <input type="search" id="default-search" class="block w-full px-1 py-1.5 ps-10 text-sm text-gray-900 border border-gray-300 " placeholder="Search my storyboards" required />
        </div>
        <button className='transition ease-in-out hover:bg-sky-100 rounded flex items-center gap-2 bg-sky-50 border-2 border-solid border-sky-200  px-4 py-2'>
          <FontAwesomeIcon className='text-xl text-sky-400' icon={faClock} />
          <span className='font-normal'>Quick Start </span>
        </button>
        <p className='hidden sm:flex bg-gradient-to-r from-gray-100 to-orange-400 w-9 h-9 rounded-full flex items-center justify-center font-medium text-xl border-2 border-solid border-black'>
          A
        </p> 
      </div>
        <p className='absolute top-4  right-2 bg-black text-white w-10 h-10  flex items-center justify-center font-medium text-xl border-2 border-solid border-black rounded-l-full translate-x-3'> 
        <FontAwesomeIcon className='text-sm text-white border-red text-sky-400' icon={faBolt} /> 
        </p>
    </div>
  )
}
