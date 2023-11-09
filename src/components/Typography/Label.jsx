import React from 'react'
import { textColor } from '../Utils/Colors'
import { label1 } from '../Utils/Typography'
function Label({style = 'reguler', text, color="black100"}) {
  return (
    <p className={`${label1[style]} ${textColor[color]}`}>{text}</p>
  )
}

export default Label