import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MyForm from '../forms/form'
import DialogWrapper from './dialogwrapper'

export default function Dialog({ setDialog }) {
    return (
        <DialogWrapper>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:max-w-lg sm:w-full">
                <div className='flex-col-reverse items-center xsm:items-start gap-4 xsm:flex-row flex justify-between mb-8'>
                    <h1 className='font-medium text-2xl sm:text-3xl'>New Storyboard</h1>
                    <div onClick={() => setDialog(prev => !prev)} className="close w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <MyForm></MyForm>
            </div>
        </DialogWrapper>
    )
}
