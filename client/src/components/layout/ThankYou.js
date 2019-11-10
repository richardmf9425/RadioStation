import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

function ThankYou() {
	return (
		<Zoom>
			<div className="content">
				<div className="wrapper-1">
					<div className="wrapper-2">
						<h1>Thank you !</h1>
						<p>Thanks for making a payment 🎉🎉🎉. </p>
						<p>You should receive a confirmation email soon. </p>
						<Link className="go-home" to="/">
							go to home
						</Link>
					</div>
					<div className="footer-like">
						<p>
							Email not received?
							<Link> Click here to send again</Link>
						</p>
					</div>
				</div>
			</div>
		</Zoom>
	);
}

export default ThankYou;
