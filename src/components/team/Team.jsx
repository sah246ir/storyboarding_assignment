import React,{useState} from 'react'
import Projects from '../projects/Projects'
import Dialog from '../dialog/dialog'
 

export default function Team() {

  const [dialog,setDialog] = useState(false)
  return (
    <div className='p-3'> 

      {dialog?
      <Dialog  setDialog={setDialog}/>
      :
      null}
      <div className='flex-col xsm:flex-row flex justify-between items-center flex-wrap gap-5 my-9'>
        <div className='flex-col xsm:flex-row flex gap-2 items-center '>
          <p className='bg-gradient-to-r from-gray-100 to-orange-400 w-9 h-9 rounded-full flex items-center justify-center font-medium text-xl border-2 border-solid border-black'>
            A
          </p>
          <p className='text-center text-2xl font-medium '>Adam cooper team</p>
        </div>
        <button onClick={()=>setDialog(prev=>!prev)} className='transition ease-in-out bg-black rounded px-4 py-2 text-white font-medium hover:bg-gray-600'>
          New Project
        </button>
      </div>

      <Projects action={setDialog}></Projects>
    </div>
  )
}
