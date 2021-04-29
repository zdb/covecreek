import React from 'react'
import './Section.scss'

const Section = ({children, className, style}) => {
  let cssClasses = 'the-section ' + className
  
  return (
    <section style={style} className={cssClasses}>{children}</section>
  )
}

export default Section;
