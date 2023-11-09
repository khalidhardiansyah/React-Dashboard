import React from 'react'
import { paragraph1, paragraph2 } from '../Utils/Typography'
import { textColor } from '../Utils/Colors'
function Paragraph({text,p2, style="reguler", color="black100", child}) {
  return (
    <p className={`${p2?paragraph2[style]:paragraph1[style]} ${textColor[color]} truncate`}>{text}{child}</p>
  )
}

export default Paragraph