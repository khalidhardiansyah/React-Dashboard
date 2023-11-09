import React from 'react'
import CardStatistic from '../components/Card Statistic/CardStatistic'
import { CheckIcon, ShoppingBagIcon, UsersIcon } from '@heroicons/react/24/outline'
import ItemStatistic from '../components/Card Statistic/ItemStatistic'
import Paragraph from '../components/Typography/Paragraph'

function Inventory() {
  const Statistics = [
    {
      label:"All Products",
      total: 20,
      percentile:'20%'
      
    },
    {
      label:"Active",
      total: 20
    },
  ]

  return (
    
    <div className='grid grid-rows-[40px_repeat(3,minmax(145px,_1fr))] sm:grid-rows-[40px_145px_minmax(0,_1fr)] grid-cols-2 h-full gap-3'>
    <div className="rows-1 col-span-2 grid grid-cols-[minmax(130px,_1fr)_200px] items-center px-2">
    <Paragraph text="Inventory Sumary" style='medium'/>
      <button className='w-full bg-BrandPrimary text-white rounded-xl py-2'>Add a New Product</button>
    </div>

    <div className="sm:col-span-1 col-span-2 ">
      <CardStatistic items={Statistics} themes="blue" icon={<ShoppingBagIcon/>}/>
    </div>
    <div className="sm:col-span-1 col-span-2 bg-white rounded-xl">
    <CardStatistic items={Statistics} themes="white" dropdown icon={<UsersIcon/>}/>
    </div>
    <div className="rows3 bg-white col-span-2 rounded-xl"></div>          
  </div>
  )
}

export default Inventory