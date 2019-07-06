import React, {useState, useEffect} from 'react';
import Input from '../Input/Input';
import './ConvertKit.css'
import PBtn from '../PBtn/PBtn'
import {Helmet} from "react-helmet";
import api from '../../utils/api';
import Loader from 'react-loader-spinner'
const ConvertKit = (props) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [tags, setTags] = useState('')
	const [loading, setLoading] = useState(false)
	const [title, setTitle] = useState(props.title)

	const submitForm = (e) => {
		onSuccess()
		e.preventDefault();
		console.log(e.target);
		let data = {
			first_name: name,
			email,
			tags
		}
		console.log(data);
		api.submitSubscriber(data).then(data => {
			setLoading(false)
			setTitle('Check your email!')
			setName('')
			setEmail('')
			document.getElementById('convert-name').value = ""
			document.getElementById('convert-email').value = ""
			document.getElementById('convert-select').value = 'grade' 
			console.log(data);
		})
	}
	const handleChange = event => {
		if (event.target.name === 'name') {
			setName(event.target.value)
		}

		if (event.target.name === 'email') {
			setEmail(event.target.value)
		}

		if (event.target.name === 'tags') {
			console.log(event.target.value);
			setTags(event.target.value)
		}
	}

	const	onSuccess = () => {
		setLoading(true)
		setTitle('Submitting form...')
	}

		
		if(loading === false) {
			return(

				<div className="container-fluid convert-kit-div border-bottom">
			<h2>{title}</h2>
			<p>By entering your information, you agree to receive email from me. Per my privacy policy, you may unsubscribe at any time.</p>
			<form onSubmit={submitForm}>
				<Input className="convert-input" id="convert-name" type="text" placeholder="First Name" name="name"onChange={handleChange}  />
				<Input className="convert-input" id="convert-email" type="email" placeholder="Email" name="email"onChange={handleChange}/>
				<select name="tags"onChange={handleChange} id="convert-select">
					<option value="grade" selected="selected">Select a Grade</option>
					<option value="548828">Pre-k</option>
					<option value="548830">First</option>
					<option value="548832">Second</option>
					<option value="548833">Third</option>
					<option value="548834">Fourth</option>
					<option value="548836">Fifth</option>
					<option value="548837">Sixth</option>
				</select>
				<div>
					<PBtn type="submit">Submit</PBtn>
				</div>
			</form>
		</div>	
		)
		}	else {
			return(
				
				<div className="container-fluid convert-kit-div border-bottom">
		<h2>{title}</h2>
		<p>By entering your information, you agree to receive email from me. Per my privacy policy, you may unsubscribe at any time.</p>
		<form onSubmit={submitForm}>
				<Input className="convert-input" id="convert-name" type="text" placeholder="First Name" name="name"onChange={handleChange}  />
				<Input className="convert-input" id="convert-email" type="email" placeholder="Email" name="email"onChange={handleChange}/>
				<select name="tags"onChange={handleChange} id="convert-select">
				<option value="grade" selected="selected">Select a Grade</option>
				<option value="548828">Pre-k</option>
				<option value="548830">First</option>
				<option value="548832">Second</option>
				<option value="548833">Third</option>
				<option value="548834">Fourth</option>
				<option value="548836">Fifth</option>
				<option value="548837">Sixth</option>
			</select>
			<div>
				<PBtn type="submit"><Loader 
         type="Puff"
         color="#FFFFFF"
         height="25"	
         width="25"
      />   </PBtn>
			</div>
		</form>
	</div>
		
		)
	}
	
		
	}
	
export default ConvertKit;

//TYgg8lXToCzj3_E7q4JnLw
//988284