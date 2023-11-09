import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../BaseButton/Button'
import Paragraph from '../Typography/Paragraph'
import Label from '../Typography/Label'

function Navigation({type,to,
    label,
    icon,
    notif,
    onClick,
    }) {
  if (type === 'Link') {
    return (
        <NavLink to={to} className={({ isActive}) =>isActive ? `grid ${icon?'grid-cols-[24px_150px_32px] items-center px-5 rounded-xl':' grid-cols-1'} h-full w-60 bg-BrandPrimary text-white` : `grid ${icon?'grid-cols-[24px_150px_32px] items-center px-5 rounded-xl':' grid-cols-1'} h-full w-60 hover:bg-BrandPrimary hover:text-white`}>
        {
            icon 
        }
        
        {
            label && <div className="label truncate ml-5">
               <Paragraph text={label} p2 color=''/>
            </div>
        }
        {
            notif &&<div className="notification bg-BrandSecondary flex items-center justify-center rounded-full  w-6 h-6">
                <Label text={notif} style='reguler'/>
            </div>
        }
    </NavLink>
        )
  }else if (type === 'Button') {
    return(
        <Button label={label} icon={icon} type="button" onClick={onClick}/>
    )
  }
  
}

export default Navigation

// `grid ${icon?'grid-cols-[24px_150px_32px] items-center px-5 rounded-xl':' grid-cols-1'} h-full w-60 bg-BrandPrimary text-white`