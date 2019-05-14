import React from 'react';
import './PBtn.css'
const PBtn = (props) => <button type={props.type} className={`primary-button ${props.className}`} onClick={props.onClick}>{props.children}</button>

export default PBtn;