import React from 'react';
import './Input.css'
const Input = (props) => <input className={`mainInput ${props.className}`} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>

export default Input;