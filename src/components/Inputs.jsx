import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = () => {
  return (
    <div className=' flex flex-row justify-center my-6'>
        <div className=' flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                type="text" 
                className=' text-lg font-normal p-2 w-full focus:outline-none capitalize placeholder:lowercase'
                placeholder='Search' />
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
        </div>
        <div className=' flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className=' text-lg text-white px-2'>℃</button>
            <p className=' text-white text-lg'> | </p>
            <button name='imperial' className=' text-lg text-white px-2'>℉</button>
        </div>
    </div>
  )
}

export default Inputs