import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import Input from '../components/BaseInput/Input'
import PasswordIcon from "../assets/Lock.svg"
import Button from '../components/BaseButton/Button'
import Layout from '../components/Layout/Layout'
import { EnvelopeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Header from '../components/Typography/Header'
import Paragraph from '../components/Typography/Paragraph'
function Login() {
  const [show, setShow] = useState(false)
  return (
    <Layout slot={
      <div className="grid grid-cols-1 justify-items-center justify-center items-center h-full">
      <div className='bg-white w-[443px]  px-8 py-11 rounded-md grid grid-rows-[90px_minmax(80px,_1fr)_16rem] justify-items-center'>
      <img src={Logo} alt="logo" />
      <div className="text text-center">
        <Header text="Welcome Back!" style='medium'/>
        <Paragraph text="Login to your account" p2/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-full grid grid-rows-5 justify-items-center'>
        <Input icon={<EnvelopeIcon className=' text-BrandTernary'/>} type="email" placeholder="Email Address"/>
        <Input icon={<LockClosedIcon className=' text-BrandTernary'/>} type={show?'text':'password'} placeholder="Password" isPassword showPassword={()=>setShow(!show)} isShow={show}/>
        <NavLink className="text-BrandPrimary justify-self-end" to="/">Recover Password</NavLink>
        <Paragraph p2 color='black30'  text="Don't have an account?" style='reguler' child={<NavLink className=" text-BrandPrimary ml-2" to="/register">Sign Up</NavLink>}/>
        
               
        <Button label="Login" type="submit" full rounded/>
        
      </form>

    </div>
    </div>
    }/>
  )
}

export default Login