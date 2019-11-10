import React from 'react';

import { Link, Redirect } from 'react-router-dom';

function ThankYou() {
	return (
		<div className="content">
			<div className="wrapper-1">
				<div className="wrapper-2">
					<h1>Thank you !</h1>
					<p>Thanks for making a payment 🎉🎉🎉. </p>
					<p>You should receive a confirmation email soon. </p>
					<button className="go-home">go home</button>
				</div>
				<div className="footer-like">
					<p>
						Email not received?
						<Link> Click here to send again</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ThankYou;
