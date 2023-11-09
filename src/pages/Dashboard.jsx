import React from 'react'
import { textColor } from '../components/Utils/Colors'
import Label from '../components/Typography/Label'

function Dashboard() {
  return (
    <div className="grid grid-rows-4 sm:grid-cols-[321px_321px_minmax(0,_1fr)]  gap-3 sm:grid-rows-[145px_159px_159px_minmax(0,_1fr)] h-full">
        <div className="coloumn__1 bg-white rounded-xl">
            
        </div>
        <div className="coloumn__2 bg-white rounded-xl"></div>
        <div className="coloumn__3 bg-white rounded-xl">
          
        </div>
        <div className="column-1 row2-3  row-start-2 row-end-4 bg-blue-500 rounded-xl">
          <p className='b'>
            loremememecc
          </p>
        </div>
        <div className="column2 row2-3 row-start-2 row-end-2 bg-white rounded-xl"></div>
        <div className="column2 row3-4 row-start-3 row-end-4 bg-white rounded-xl"></div>
        <div className="column3 row2-5 row-start-2 row-end-5 bg-white rounded-xl"></div>
        <div className="row-4 col-start-1 col-end-3 bg-white rounded-xl"></div>
    </div>
  )
}

export default Dashboard