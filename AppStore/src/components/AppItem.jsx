import React from 'react'

const AppItem = (props) => {
    const {appName,imageUrl} =props

    return (
        <div className='flex flex-col w-28 h-28 rounded-lg items-center border-2 border-blue-400 gap-2 m-1 p-1 bg-stone-200'>
            <img className='h-16 w-16 rounded-xl shadow-lg' src={imageUrl} alt="image" />
            <p className='font-semibold text-sm'>{appName}</p>
        </div>
    )
}

export default AppItem
