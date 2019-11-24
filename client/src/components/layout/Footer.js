import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<div className="subscribe">
				Contact Us:
				<br />
				<a href="mailto:support@company.com"> support@company.com</a>
			</div>
			<div className="info-copyright">
				<h3>Wellness Network</h3>
				<h3>Copyright 2019 &copy; All Rights Reserved.</h3>
			</div>
			<div className="social-media">
				<a href="https://www.facebook.com/WellnessRadioTV" target="_blank">
					{' '}
					<i className="fab fa-facebook" />
				</a>
				<a href="https://www.youtube.com/channel/UCyQvBiq-ANtNJNjAV6UpWGg" target="_blank">
					{' '}
					<i className="fab fa-youtube" />
				</a>
				<Link>
					{' '}
					<i className="fab fa-instagram" />
				</Link>
			</div>
		</div>
	);
}

export default Footer;
