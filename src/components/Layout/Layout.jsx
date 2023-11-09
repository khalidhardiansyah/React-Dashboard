import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

function Layout({
  isAuth,
  slot
}) {
  const location = useLocation()
  return (
    <div className="layout min-h-screen h-screen max-h-screen bg-BgPrimary">
      <div className="grid sm:grid-cols-[296px] h-full grid-rows-[60px]">
        <nav className={`navbar bg-white px-5 ${isAuth? 'sm:col-start-2  col-start-1':'col-start-1 col-end-3'}`}>
          <Navbar isAuth={isAuth}/>
        </nav>
      {
        
        isAuth && <aside className=" sidebar bg-white row-start-1 row-end-3 px-3 hidden sm:block">
          <Sidebar/>
          
        </aside>
      }
        <main className={`content px-3 py-3 ${isAuth?null:'col-span-2'} ` }>
        {
  location.pathname === '/login' || location.pathname === '/register' ? slot : <Outlet />
}

        </main>
        
      </div>
    </div>
    )
}

export default Layout