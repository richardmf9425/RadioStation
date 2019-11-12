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
				<Link>
					{' '}
					<i className="fab fa-facebook" />
				</Link>
				<Link>
					{' '}
					<i className="fab fa-youtube" />
				</Link>
				<Link>
					{' '}
					<i className="fab fa-instagram" />
				</Link>
			</div>
		</div>
	);
}

export default Footer;
