import React from 'react'
import './TextureSection.scss'

const TextureSection = ({children, className, bottom, top, style}) => {
  let cssClasses = 'texture-section ' + className

  if (bottom === false){
    cssClasses += ' bottomless'
  }

  if (top === false){
    cssClasses += ' topless'
  }
  
  return (
    <section style={style} className={cssClasses}>{children}</section>
  )
}

export default TextureSection;
