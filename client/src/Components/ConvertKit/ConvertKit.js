import React from 'react';
import Input from '../Input/Input';
import './ConvertKit.css'
import PBtn from '../PBtn/PBtn'
const ConvertKit = (props) => (
	<div className="container-fluid convert-kit-div border-bottom">
		<h2>{props.title}</h2>
		<p>By entering your information, you agree to receive email from me. Per my privacy policy, you may unsubscribe at any time.</p>
		<form action="post" action="">
			<Input className="convert-input" type="text" placeholder="First Name"/>
			<Input className="convert-input" type="email" placeholder="Email"/>
			<select>
				<option value="pre-k">Pre-k</option>
				<option value="first">First</option>
				<option value="second">Second</option>
				<option value="third">Third</option>
				<option value="fourth">Fourth</option>
				<option value="fifth">Fifth</option>
				<option value="sixth">Sixth</option>
			</select>
			<div>
				<PBtn type="submit">Submit</PBtn>
			</div>
		</form>
	</div>

)

export default ConvertKit;