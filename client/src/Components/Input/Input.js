import React from 'react';
import './Input.css'
const Input = (props) => <input className={`mainInput ${props.className}`} type={props.type} placeholder={props.placeholder}/>

export default Input;