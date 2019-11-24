import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
toast.configure();

function Contact() {
	const [ fireRedirect, setFireRedirect ] = useState(false);
	const [ formInfo, setFormInfo ] = useState({
		name: '',
		email: '',
		message: ''
	});
	const { name, email, message } = formInfo;
	const handleChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();

		toast.success('Thank you for contacting us! We will get back to you as soon as possible', {
			bodyClassName: 'toast-background',
			position: 'top-left',
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true
		});
		setFireRedirect(true);
		const sendEmail = {
			name,
			email,
			message
		};
		axios.post('https://www.enformed.io/awrr3hsj', sendEmail);
	};
	return (
		<div className="contact-section">
			<div class="contact">
				<div class="head">
					<h3>Get in Touch with us</h3>
					<i class="fa fa-comment fa-lg" />
				</div>
				<form onSubmit={(e) => handleSubmit(e)}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => handleChange(e)}
						placeholder="name"
						required
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
						placeholder="john@doe.com"
						required
					/>
					<label>Message</label>
					<textarea
						placeholder="Enter Your Message"
						name="message"
						value={message}
						onChange={(e) => handleChange(e)}
						required
					/>

					<button type="submit">Send Message</button>
				</form>
			</div>
			{fireRedirect && <Redirect to="/" />}
		</div>
	);
}

export default Contact;
