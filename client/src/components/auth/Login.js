import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { PropTypes } from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
	const [ formInfo, setFormInfo ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<Fragment>
			<div className="form-center">
				<h1 className="large text-primary">Log In</h1>
				<p className="lead">
					<i className="fas fa-user" /> Log Into Your Account
				</p>
				<form className="form" onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							minLength="6"
							value={password}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div className="btn-center">
						<button className="btn btn-primary uppercase">
							LOG IN <i className="fas fa-chevron-right icon-padding" />
						</button>
					</div>
				</form>
				<p className="my-1">
					Don't have an account? <Link to="/signup">Create Account </Link>
				</p>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
