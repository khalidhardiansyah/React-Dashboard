import React from 'react'

function Button({
    label,
    type,
    
}) {
  return (
    <button type={type} className='w-full bg-BrandPrimary text-white rounded-lg py-2'>{label}</button>
  )
}

export default Button