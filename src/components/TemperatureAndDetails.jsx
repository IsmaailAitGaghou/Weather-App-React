import React from 'react'
import { UilArrowUp, UilArrowDown , UilTemperature , UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-cyan-300 py-6 text-lg'>
            <p>clear</p>
        </div>

        <div className=' flex flex-row items-center justify-between text-white py-3'>
            <img 
                src="https://cdna.iconscout.com/img/iconscout-logo.color.e58b57b.svg" 
                alt="lo"
                className=' w-20' />
            <p className='text-5xl'>34°</p>
            <div className=' flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1" />
                    Real fell:
                    <span className=' font-medium ml-1'>21°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1" />
                    Humidity:
                    <span className=' font-medium ml-1'>21%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1" />
                    Wind:
                    <span className=' font-medium ml-1'>4 km/h</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'> 
            <div className='flex font-light items-center justify-center text-sm'>
                <UilSun size={18} className="mr-2" />
                Raise:
                <span className='font-medium ml-1'> 19 am</span>
            </div>
            <span className='text-white font-light'>|</span>
            <div className='flex font-light items-center justify-center text-sm'>
                <UilSunset size={18} className="mr-2" />
                Set:
                <span className='font-medium ml-1'> 19 am</span>
            </div>
            <span className='text-white font-light'>|</span>
            <div className='flex font-light items-center justify-center text-sm'>
                <UilArrowUp size={18} className="mr-2" />
                High:
                <span className='font-medium ml-1'> 19°</span>
            </div>
            <span className='text-white font-light'>|</span>
            <div className='flex font-light items-center justify-center text-sm'>
                <UilArrowDown size={18} className="mr-2" />
                Low:
                <span className='font-medium ml-1'> 19°</span>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails