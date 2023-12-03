import React from 'react'
import { UilCloudSun } from '@iconscout/react-unicons'

const DailyDatails = () => {
  return (
    <div className=' flex flex-col text-lg text-white'>
        <div className=' flex text-base font-medium uppercase py-2 border-b-2'>
            <p> Daily Forcast</p>
        </div>
        <div className=' flex flex-row items-center justify-between my-3'>
            <div className=' flex flex-col items-center justify-center gap-2 text-sm'>
                <p>Wed</p>
                <UilCloudSun size={18} />
                <p className=' font-medium'>19°</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-2 text-sm'>
                <p>Thu</p>
                <UilCloudSun size={18} />
                <p className=' font-medium'>19°</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-2 text-sm'>
                <p>Fri</p>
                <UilCloudSun size={18} />
                <p className=' font-medium'>19°</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-2 text-sm'>
                <p>Sat</p>
                <UilCloudSun size={18} />
                <p className=' font-medium'>19°</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-2 text-sm'>
                <p>Sun</p>
                <UilCloudSun size={18} />
                <p className=' font-medium'>19°</p>
            </div>
        </div>
    </div>
  )
}

export default DailyDatails