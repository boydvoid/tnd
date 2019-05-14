import React, { Component } from 'react';
import Input from '../Components/Input/Input';
import PBtn from '../Components/PBtn/PBtn';
import './Login.css'
class Login extends Component {
 render () {
	 return (
		 <div className="login">
			<form className="login-form" action="/api/login" method="POST">
			<div className="form-group">
				<h2>The Teacher Next Door</h2>	
			</div>
				<div className="form-group">
					<Input className="form-control" type="text" placeholder="Username" name="username"/>
					<Input className="form-control" type="password" placeholder="Password" name="password"/>
					<PBtn type="submit">Login</PBtn>
				</div>	
			</form>
		 </div>
	 ) 
 }
}

export default Login;