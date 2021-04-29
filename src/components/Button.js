import React from 'react'
import './Button.scss'
import { Link } from "gatsby"

const Button = ({children, className, type, url, onClick, isSubmit, style}) => {
  let cssClasses = 'button '

  if (className) {
    cssClasses += className + ' '
  }

  if (type === 'outlined'){
    cssClasses += 'is-outlined is-inverted '
  }

  if (type === 'primary'){
    cssClasses += 'is-primary '
  }

  if (url)
    return (
      // <Link style={style} className={cssClasses} onClick={onClick} to={url}><span>{children}</span></Link>
      <a style={style} className={cssClasses} onClick={onClick} href={url}><span>{children}</span></a>
    )
  else
    if (isSubmit)
      return (
        <button style={style} type="submit" className={cssClasses} onClick={onClick}><span>{children}</span></button>
      )
    else
      return (
        <button style={style} className={cssClasses} onClick={onClick}><span>{children}</span></button>
      )
}

export default Button;
