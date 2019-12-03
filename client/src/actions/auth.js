import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, EMAIL_SENT, EMAIL_NOT_SENT, RESET_FAIL, RESET_SUCCESS } from './types';
import { setAlert } from './alert';
import setAuthToken from './../utils/setAuthToken';

// Loading user for authentication
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('./api/auth');
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// User SignUp
export const signup = ({ name, email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ name, email, password });

	try {
		const res = await axios.post('/api/users', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};

// User Login
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/api/auth', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

/*
// Forgot Password
export const forgotPasword = (email) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email });

	try {
		const res = await axios.post('/api/forgot-password', body, config);
		dispatch({
			type: EMAIL_SENT,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: EMAIL_NOT_SENT
		});
	}
};

// Reset Password
export const resetPassword = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/api/reset-password', body, config);
		dispatch({
			type: RESET_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: RESET_FAIL
		});
	}
};
*/

export const forgotPasword = email => {
    return fetch(`http://localhost:2054/api/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
        },
		body: JSON.stringify(email)
    })
        .then(response => {
			console.log(JSON.stringify(email));
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`http://localhost:2054/api/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// User Logout

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
