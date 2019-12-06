import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { signup, forgotPasword, resetPassword } from '../../actions/auth';
import PropTypes from 'prop-types';

class ChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			passwordConfirm: '',
			token: this.props.match.params.token,
			showForm: true,
			error: false
		};
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	}
	//const { password, passwordConfirm } = formInfo;

	onChange(e){
		const target = e.target;
        const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}

	async onSubmit(e){
		e.preventDefault();
		if (this.password !== this.passwordConfirm) {
			setAlert('Passwords do not match', 'danger');
		} else {
			let token = this.state.token;
			let newPassword = this.state.password;
			const response = await resetPassword({token, newPassword});
			if(response.error){
				this.setState({
					error: true
				});
			}
			else this.setState({
				showForm: false
			});
		}
	}

	render(){
		return (
			<Fragment>
				<div className=" auth-section container">
					{this.state.showForm && !this.state.error && <div className="form-center">
						<h1 className="large text-primary">Reset Password</h1>
						
						<form className="form" onSubmit={this.onSubmit}>
							
						<div className="form-group">
								<input
									type="password"
									placeholder="Password"
									name="password"
									minLength="6"
									value={this.password}
									onChange={this.onChange}
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									placeholder="Confirm Password"
									name="passwordConfirm"
									minLength="6"
									value={this.passwordConfirm}
									onChange={this.onChange}
									required
								/>
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
					</div>}
					{!this.state.showForm && <div className="text-center">
					<h1 className="large text-primary">Password reset successfully!</h1>
					<p>Please click on the button below to log in.</p>
					</div>}
					{this.state.error && <div className="text-center">
					<h1 className="large text-primary">Uh-oh!</h1>
					<p>Something went wrong when trying to reset your password. Please try again by clicking on the button below.</p>
					</div>}
					{this.state.error && 
					<div className="btn-center">
						<Link to="/forgot-password">
							<button className="btn btn-primary uppercase">
									TRY AGAIN <i className="fas fa-chevron-right icon-padding" />
							</button>
						</Link>
					</div>}
					{!this.state.showForm && 
					<div className="btn-center">
						<Link to="/login">
							<button className="btn btn-primary uppercase">
									LOG IN <i className="fas fa-chevron-right icon-padding" />
							</button>
						</Link>
					</div>}
				</div>
			</Fragment>
		);
	}
};

/*ChangePassword.propTypes = {
	setAlert: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});*/

export default ChangePassword;
