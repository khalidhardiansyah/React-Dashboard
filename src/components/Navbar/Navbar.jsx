import React from 'react'
import {NavLink, useLocation} from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import Profile from "../../assets/profile 1.png"
import { BellAlertIcon } from '@heroicons/react/24/outline'
import Header from '../Typography/Header'


function Navbar({isAuth}) {
  const pathname = useLocation().pathname;

  let location;

  if (pathname === '/') {
    location = 'Dashboard';
  }
  else {
    const slicedPath = pathname.slice(1);
    location = slicedPath
    console.log(slicedPath)
    if(location.includes('conservations/conversation/')){
      location = 'Conservations'
    }
    
  }
  return (

    <div className='w-full grid grid-cols-[90px_minmax(90px,_1fr)] items-center justify-between h-full'>
        <div className="logo">
        <NavLink to="/" className=''>
            {
                isAuth ? <Header text={location} style='medium'/> : <img src={Logo} alt="Logo" />
            }
        </NavLink>
        </div>
        {isAuth && 
        
        <div className="auth col-start-3 col-end-4 grid grid-cols-[24px_32px] items-center gap-x-4">
            {/* <div className="dropdow">dropdown</div> */}
            <button type="button">
            <BellAlertIcon/>
            </button>
            <div className="profile  w-8 h-8 rounded-lg">
              <img src={Profile} className=' object-center' />
            </div>
        </div>

        }
    </div>
  )
}

export default Navbar