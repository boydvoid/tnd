import React from "react";
import "./Input.css";
const Input = props => (
  <input
    value={props.value}
    className={`mainInput ${props.className}`}
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    onChange={props.onChange}
    id={props.id}
    maxlength={props.maxlength}
  />
);

export default Input;
