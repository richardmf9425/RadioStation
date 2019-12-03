import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import { scroller } from 'react-scroll';

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
				<Link to="/" onClick={() => scrollTo('landing')}>
					Home
				</Link>
			</li>
			<li>
				<Link to="/" onClick={() => scrollTo('pricing')}>
					Pricing
				</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			{/* <li>
				<Link to="/appointment">Book Appt.</Link>
			</li> */}

			<li>
				<Link to="/" onClick={() => scrollTo('faq')}>
					FAQ
				</Link>
			</li>
		</ul>
	);

	const scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: 1200,
			delay: 100,
			smooth: true,
			offset: -100
		});
	};

	return (
		<nav className="navbar">
			<Link to="/" onClick={() => scrollTo('landing')}>
				<div className="logo" />
			</Link>

			{!loading && (
				<Fragment>
					{commonLinks}
					{isAuthenticated ? authLinks : guestLinks}
				</Fragment>
			)}
		</nav>
	);
};
//type checking
Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
