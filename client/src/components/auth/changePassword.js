import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { signup, forgotPasword, resetPassword } from '../../actions/auth';
import PropTypes from 'prop-types';

const ChangePassword = ({ setAlert, isAuthenticated }) => {
	const [ formInfo, setFormInfo ] = useState({
		
       
        password: '',
		passwordConfirm: ''
	
	});
	const { password, passwordConfirm } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
	
		if (password !== passwordConfirm) {
			setAlert('Passwords do not match', 'danger');
		} else {
			resetPassword({ email, password });
		}
		
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<Fragment>
			<div className=" auth-section container">
				<div className="form-center">
					<h1 className="large text-primary">Reset Password</h1>
					
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
							<small className="form-text">This website uses Gravatars</small>
						</div>
						
						
						<div className="btn-center">
							<button className="btn btn-primary uppercase ">
								RESET PASSWORD <i className="fas fa-chevron-right icon-padding" />
							</button>
						</div>
					</form>
					<p className="my-1">
						Already have an account? <Link to="/login">Sign In</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

ChangePassword.propTypes = {
	setAlert: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(ChangePassword);
