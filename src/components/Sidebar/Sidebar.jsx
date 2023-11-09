import React from 'react'
import { FolderMinusIcon, UsersIcon, ShoppingBagIcon, Cog8ToothIcon, HomeIcon, ChatBubbleBottomCenterIcon, ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
import Logo from "../../assets/Logo.svg"
import Navigation from '../Navigation/Navigation'
import Header from '../Typography/Header'
const Menus = [
    {
        logo: <HomeIcon />,
        label:"Dashboard",
        link:'/',
        type:'Link'
    },
    {
        logo: <ShoppingBagIcon />,
        label:"Orders",
        link:'/orders',
        type:'Link'
    },
    {
        logo: <UsersIcon />,
        label:"Customers",
        link:'/customers',
        type:'Link'
    },
    {
        logo: <FolderMinusIcon />,
        label:"Inventory",
        link:'/inventory',
        type:'Link'
    },
    {
        logo: <ChatBubbleBottomCenterIcon />,
        label:"Conservations",
        link:'/conservations',
        type:'Link'
    },
    {
        logo: <Cog8ToothIcon />,
        label:"Settings",
        link:'/settings',
        type:"Link"
        
    },

   
]

const listMenu = Menus.map(menu =>(
    <Navigation type={menu.type} icon={menu.logo} label={menu.label} to={menu.link}/>
))
function Sidebar() {
  return (
    <div className='sm:grid hidden sm:grid-rows-[60px_minmax(0,_1fr)_100px] h-full'>
        <div className="logo items-center grid justify-items-center grid-cols-[60px_50px]">
            <img src={Logo} alt="logo" />
            <Header text="Metrix" style='bold'/>
           
        </div>
        <div className="menu  grid grid-rows-[repeat(6,56px)] gap-y-3 justify-items-center mt-16">
            {
                listMenu
            }
        </div>
        <div className="menu__bottom h-14 grid mx-auto text-red-400">
    <Navigation icon={<ArrowRightOnRectangleIcon className='text-red-400 fill-red-300' />} label='Logout' to='/login' type="Button"/>
        </div>
        
    </div>
  )
}

export default Sidebar