import React,{useState} from 'react'
import Logo from "../assets/Logo.svg"
import Input from '../components/BaseInput/Input'
import { NavLink } from 'react-router-dom'
import Button from '../components/BaseButton/Button'
import Layout from '../components/Layout/Layout'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import Paragraph from '../components/Typography/Paragraph'
import Header from '../components/Typography/Header'
function Register() {
    const [show, setShow] = useState(false)
  return (
    <Layout slot={
        <div className='w-full h-full grid grid-cols-1 justify-items-center justify-center items-center'>
        <div className="bg-white w-[443px] px-8 py-11 rounded-md grid grid-rows-[90px_minmax(80px,_1fr)_18rem] justify-items-center">
        <img src={Logo} alt="logo" />
      <div className="text text-center">
        <Header text="Get Started with" style='bold' child={
          <span className=' text-BrandPrimary'>Metrix</span>
        } />

        <Paragraph text="Create your free account" p2 style='reguler' color='black30' />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-full grid grid-rows-5 justify-items-center'>
      <Input icon={<UserIcon/>} type="name" placeholder="Your fullname"/>
        <Input icon={<EnvelopeIcon/>} type="email" placeholder="Email Address"/>
        <Input icon={<LockClosedIcon/>} type={show?'text':'password'} placeholder="Password" isPassword showPassword={()=>setShow(!show)} isShow={show}/>
        <Paragraph p2 text="Already have an account?" style='reguler' color='black30' child={
          <NavLink className=" text-BrandPrimary ml-2" to="/login">Login</NavLink>
        }/>
        
        <Button label="Register" type="submit"/>
        
      </form>
        </div>
    </div>
    }/>
  )
}

export default Register