import React from 'react'
import Profile from "../assets/profile 1.png"
import { NavLink } from 'react-router-dom'
import { CheckIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Paragraph from '../components/Typography/Paragraph'
function Conservation() {
  return (
    <div className=' grid grid-cols-2 grid-rows-[91px_minmax(90px,_1fr)] h-full'>
        <div className="header__info__contact py-4 px-6 col-span-2 border-b grid grid-rows-[repeat(2,30px)] grid-cols-[repeat(2,30px)_repeat(3,_1fr)] gap-x-3 justify-between">
            <div className="profile  col-span-2 row-span-2">
                <img src={Profile} className=' h-full' />
            </div>
            <div className="profile_info col-start-3 col-end-4 row-start-1 row-end-2">
                <h3 className=' font-medium text-black text-opacity-60 text-base'>Jane Doe</h3>
            </div>
            <div className="profile__status col-start-3 col-end-4 row-start-2 grid grid-cols-[60px_100px] gap-x-2 items-center">
                <div className="status text-BrandPrimary text-opacity-30 before:h-2 before:bg-BrandPrimary before:w-2 before:inline-block before:mr-1 before:rounded-full before:items-center">
                    Online
                </div>
                <div className="online_time text-sm text-black text-opacity-30">
                    12:55 am
                </div>
                
            </div>
            <div className="profile__detail col-start-5 col-end-6 row-start-1">
                <div className="grid grid-cols-[99px_79px] gap-x-3 justify-end">
                    <div className="new_status bg-BrandSecondary bg-opacity-20 text-xs rounded-lg flex h-full justify-center items-center ">
                        New Customer
                    </div>
                    <NavLink className='text-BrandPrimary text-sm'>
                        View Profile
                    </NavLink>
                </div>
            </div>
            <div className="profile_order col-start-5 col-end-6 row-start-2">
                <div className="grid grid-cols-[20px_60px] justify-end gap-x-2 h-full items-center">
                    <div className="col-span-1 text-black text-opacity-50 ">
                        <ShoppingBagIcon className=' w-5'/>
                    </div>
                    <div className="col-span-1">
                        <Paragraph text="0 Orders" p2 style='reguler' color='black30'/>
                    </div>
                </div>

            </div>

        </div>
        <div className="chat_body m-3 col-span-2 grid grid-cols-[minmax(0,_1fr)_minmax(65px,128px)_minmax(0,_1fr)] grid-rows-[33px_minmax(0,_1fr)] overflow-y-auto h-full items-center">
        <div className=" text-sm text-black bg-BgPrimary flex justify-center items-center rounded-lg col-start-2 col-end-3">
            <p>
            12 August 2022
            </p>
        </div>
            <div className=" row-start-2 grid grid-flow-row auto-rows-min mt-3 h-full">
                <div className="chat_wrapper flex flex-col space-y-2">
                    <p className=' bg-BrandPrimary box-content p-3 text-white rounded-es-none rounded-2xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, velit totam quam, quia enim soluta itaque error illum similique placeat labore eaque delectus necessitatibus tempore iste debitis id magni vero.
                    </p>
                    <p className=' text-black text-opacity-30'>
                        12:55 am
                    </p>
                </div>                
            </div>
            <div className=" row-start-2 col-start-3 place-items-end">
            <div className="chat_wrapper flex flex-col space-y-2">
                    <p className=' bg-BrandSecondary box-content p-3 text-black rounded-ee-none  rounded-2xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, velit totam quam, quia enim soluta itaque error illum similique placeat labore eaque delectus necessitatibus tempore iste debitis id magni vero.
                    </p>
                    <div className="box_time flex h-5 justify-end items-center space-x-2">
                    <p className=' text-black text-opacity-30 flex'>
                        12:55 am
                    </p>
                    <div className="icon bg-BrandSecondary w-5 h-5 rounded-full flex items-center justify-center">
                        <CheckIcon className=' w-3 h-3' />
                    </div>
                    </div>
            </div> 
            
            
            </div>
        </div>
    </div>
  )
}

export default Conservation