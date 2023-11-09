import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Paragraph from '../components/Typography/Paragraph'
import Button from '../components/BaseButton/Button'
function Conservations() {
  return (
    
    <div className='grid grid-rows-[40px_minmax(100px,_1fr)] grid-cols-[410px_minmax(410px,_1fr)] gap-3 h-full'>
    <div className="rows-1 col-span-2 grid grid-cols-[minmax(130px,_1fr)_200px] items-center px-2">
    <Paragraph text="Conversation" style='medium'/>
    <Button label="New Message" />
    </div>

    <div className=" row-start-2 row-end-4 rounded-xl bg-white">
      
    </div>
    <div className=" row-start-2 row-end-4 bg-white rounded-xl">
        <Outlet/>
    </div>         
  </div>
  )
}

export default Conservations