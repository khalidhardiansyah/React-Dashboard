import React from 'react'
import Paragraph from '../components/Typography/Paragraph'

function Orders() {
  return (
    <div className='grid grid-rows-[40px_repeat(4,minmax(145px,_1fr))] sm:grid-rows-[40px_145px_minmax(0,_1fr)] sm:grid-cols-[475.5px_475.5px_minmax(0,_1fr)] h-full gap-3'>
      <div className="rows-1 col-span-3 grid grid-cols-[minmax(130px,_1fr)_200px] items-center px-2">
        <Paragraph text="Orders Sumary" style='medium'/>
        <button className='w-full bg-BrandPrimary text-white rounded-xl py-2'>Create a New Order</button>
      </div>
      <div className="sm:row-start-2 sm:col-start-1 sm:col-end-2 col-span-3 bg-white rounded-xl"></div>
      <div className="sm:row-start-2 sm:col-start-2 sm:col-end-3 col-span-3 bg-white rounded-xl"></div>
      <div className="sm:row-start-2 sm:col-start-3 sm:col-end-4 col-span-3 bg-white rounded-xl"></div>
      <div className="sm:row-start-3 col-span-3 sm:col-start-1 col-end-4 bg-white rounded-xl"></div>

    </div>
  )
}

export default Orders