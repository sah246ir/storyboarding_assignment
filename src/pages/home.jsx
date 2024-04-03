import React from 'react'
import Alert from '../components/alerts/alert'
import Navbar from '../components/headers/Navbar'
import Team from '../components/team/Team'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
 
export default function Home() {
  return (
    <div className="bg-gray-100"> 
      <Alert></Alert>
      <Navbar></Navbar>
      <Team></Team> 
      <p className='fixed right-4 bottom-4 w-14 h-14 bg-black rounded-full flex items-center justify-center font-medium text-xl border-2 border-solid border-black cursor-pointer'>
        <FontAwesomeIcon className='text-white' icon={faMessage}/>
        </p>
    </div>
  )
}
