import React from 'react'
import { subHeading3 } from '../Utils/Typography'
import { textColor } from '../Utils/Colors'
function Header({style ='reguler', text, child, color="black100"}) {
  return (
    <h1 className={subHeading3[style]+` capitalize ${child?'flex':''} ${textColor[color]}`}>
        {text}
        {child}
    </h1>
  )
}

export default Header