import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="not-found-section">
			<i id="err-icon" class="fa fa-exclamation-circle" />
			<h1>404 Not Found!</h1>
			<p>Oops... the page you are looking for isn't here!</p>
			<Link to="/" className="btn btn-primary">
				Go Back
			</Link>
		</div>
	);
}

export default NotFound;
