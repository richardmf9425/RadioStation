import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Contact() {
	const [ fireRedirect, setFireRedirect ] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setFireRedirect(true);
		toast.success('Your lost item has been successfully added!', {
			bodyClassName: 'toast-background',
			position: 'top-left',
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true
		});
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
					<input type="text" name="name" />
					<label>Email</label>
					<input type="email" name="email" />
					<label>Message</label>
					<textarea placeholder="Enter Your Message" name="message" />

					<button type="submit">Send Message</button>
				</form>
			</div>
			{fireRedirect && <Redirect to="/" />}
		</div>
	);
}

export default Contact;
