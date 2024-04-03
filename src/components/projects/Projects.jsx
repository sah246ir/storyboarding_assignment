import React from 'react' 
import { faFolderOpen, faAngleDown,faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project,{ AddProject } from './Project';
export default function Projects({action}) {
    return (

        <div className="rounded bg-white p-7 ">
            <div className='gap-10 flex-col-reverse xsm:flex-row items-center xsm:items-baseline gap-4 flex justify-between'>
                <div className="flex-col xsm:flex-row  flex gap-3 items-center mb-5">
                    <div>
                        <FontAwesomeIcon className='transition ease-in-out text-3xl hover:text-gray-600' icon={faFolderOpen} />
                    </div>
                    <div>
                        <p className='text-center font-semibold'>Default Project</p>
                        <p className='text-center text-gray-400'>4 storyboard</p>
                    </div>
                </div>

                <div className='justify-between xsm:justify-start xsm:w-auto w-full flex gap-5'>
                    <FontAwesomeIcon className='transition ease-in-out text-xl cursor-pointer hover:text-gray-500' icon={faEllipsisV} />
                    <FontAwesomeIcon className='transition ease-in-out text-xl cursor-pointer hover:text-gray-500' icon={faAngleDown} /> 
                </div>
            </div>
            <div className='flex gap-5 flex-wrap flex-grow justify-start mt-4'>
                <Project 
                    text={"AI Character Demo Storyboard"} 
                    updated={"Updated 19 Mar 24"} 
                />
                <Project 
                    text={"AI Character Demo Storyboard"} 
                    updated={"Updated 19 Mar 24"} 
                />
                <Project 
                    text={"AI Character Demo Storyboard"} 
                    updated={"Updated 19 Mar 24"} 
                />
                <Project 
                    text={"AI Character Demo Storyboard"} 
                    updated={"Updated 19 Mar 24"} 
                />
                 
                <AddProject action={action} /> 
            </div>
        </div>

    )
}
