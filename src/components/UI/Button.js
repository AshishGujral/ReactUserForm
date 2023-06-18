import React from 'react'
import ButtonStyle from './Button.module.css';
const Button = (props) => {
  return (
    <button className={ButtonStyle.button}
    type={props.type || 'button'}
    onClick={props.onClick}>
           {props.children}
    </button>
 
  )
}

export default Button