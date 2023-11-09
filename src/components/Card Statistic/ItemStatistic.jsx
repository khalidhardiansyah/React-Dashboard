import React, { Children } from 'react'

function ItemStatistic({label, stats, percentile, themes}) {
  return (
    <div className={`${themes === 'blue'? 'text-white' : 'text-black'}`}>
        <h3 className='text-sm'>
            {label}
        </h3>
        <p className={`font-medium text-xl ${percentile?`flex items-center`:null} ${themes === 'blue'? 'text-white' : 'text-black'}`}>
            {stats}
            <div className={`percentile  ${themes === 'blue'? 'text-slate-300' : ' text-red-500'} text-xs font-normal ml-2`}>
            {percentile}
            </div>
        </p>
    </div>
  )
}

export default ItemStatistic