import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
function Input({type, placeholder,icon, isPassword, isShow, showPassword}) {
  return (
    <div className='relative w-full flex items-center h-14 max-h-14 box-content'>
       <div className="absolute w-5 ml-5">
        {
            icon
        }
       </div>
        <input type={type} placeholder={placeholder} required onChange={(e)=>console.log(e.target.value)} className={`form-input w-full pl-14 bg-BrandForthnary/[60] rounded-md border-0 placeholder:text-BrandTernary ${isPassword ? 'pr-10': null}`}/>
        {
            isPassword && <div className='absolute right-4 top-4'>
                <button onClick={showPassword}>
                    {
                        isShow ? <EyeIcon className='w-5'/>:<EyeSlashIcon className='w-5' />
                    }
                </button>    
            </div>
        }
    </div>
  )
}

export default Input