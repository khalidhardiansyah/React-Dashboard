import React from 'react'
import Paragraph from '../components/Typography/Paragraph'
import Button from '../components/BaseButton/Button'

function Customers() {
  return (
    <div className='grid grid-rows-[40px_repeat(3,minmax(145px,_1fr))] sm:grid-rows-[40px_145px_minmax(0,_1fr)] grid-cols-2 h-full gap-3'>
      <div className="rows-1 col-span-2 grid grid-cols-[minmax(130px,_1fr)_200px] items-center px-2">
      <Paragraph text="Customers Sumary" style='medium'/>
      <Button label="Add a New Customer"/>
      </div>
      <div className="sm:col-span-1 col-span-2 bg-white rounded-xl"></div>
      <div className="sm:col-span-1 col-span-2 bg-white rounded-xl"></div>
      <div className="rows3 bg-white col-span-2 rounded-xl"></div>          
    </div>
  )
}

export default Customers