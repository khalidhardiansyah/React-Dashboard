import React,{Children}from 'react'
import ItemStatistic from './ItemStatistic'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Select from '../Select/Select'


function CardStatistic({
items,
themes,
dropdown,
icon
}) {
  
  const itemsPrint = items.map(item =>(
    <ItemStatistic label={item.label} stats={item.total} percentile={item.percentile} themes={themes}/>
))
  return (
    <div className={`rounded-xl w-full h-full grid grid-rows-2 p-3 box-border ${themes === 'blue'? ' bg-BrandPrimary' : ' bg-white'}`}>
        <div className={`row-span-1 row-start-1 grid grid-cols-[36px_minmax(82px,110px)] justify-between items-center`}>
        <div className={`h-9 w-full flex justify-center items-center rounded-lg ${themes === 'blue'? ' bg-white bg-opacity-20' : ' bg-BrandSecondary'}`}>
          <div className={`${themes === 'blue'? 'text-white' : 'text-black'} w-5`}>
            {icon}
          </div>
        </div>
        {
          dropdown && <div className="dropdown justify-self-end w-full">
          <Select  />
        </div>
        }
        </div>
        <div className={` row-span-1 row-start-2 grid grid-flow-col auto-cols-fr`}>
        {itemsPrint}
        </div>
    </div>
  )
}

export default CardStatistic