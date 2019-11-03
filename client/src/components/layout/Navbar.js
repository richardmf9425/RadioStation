import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { PropTypes } from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const name = user ? user.name.split(' ')[0] : 'User';
	const authLinks = (
		<ul>
			<li>Welcome, {name} </li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm"> LOG OUT</span>
				</a>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link to="/signup">Sign Up</Link>
			</li>
			<li>
				<Link to="/login">Log In</Link>
			</li>
		</ul>
	);
	const commonLinks = (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/pricing">Pricing</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			<li>
				<Link to="/faq">FAQ</Link>
			</li>
		</ul>
	);
	return (
		<nav className="navbar">
			<Link to="/">
				<div className="logo" />
			</Link>
			<h1>
				<Link to="/">{/* <i className="fas fa-microphone-alt" /> Wellness Network */}</Link>
			</h1>
			{!loading && (
				<Fragment>
					{commonLinks}
					{isAuthenticated ? authLinks : guestLinks}
				</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
