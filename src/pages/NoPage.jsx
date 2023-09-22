import React from 'react'

const NoPage = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900'>
        <div className='w-full p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 max-w-[400px]'>
        <div className='text-5xl text-red-900 dark:text-red-800'>404 </div>
        <p>You have reached the end of the internet. Turn back and choose another path!</p>
        </div>
    </div>
  )
}

export default NoPage