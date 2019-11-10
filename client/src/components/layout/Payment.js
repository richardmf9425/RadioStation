import React, { Fragment, useState } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, Route } from 'react-router-dom';

toast.configure();
function Payment() {
	const [ fireRedirect, setFireRedirect ] = useState(false);
	async function handleToken(token, address) {
		//console.log({ token, address });

		const response = await axios.post('api/checkout', {
			token
		});
		const { status } = response.data;
		if (status === 'success') {
			toast.success('🎉🎉✨ Payment successful!! Check email for more details. Thank you', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
			setFireRedirect(true);
		} else {
			toast.error('Something went wrong 😕, please try again.', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true
			});
		}
	}

	return (
		<Fragment>
			<section className="payment-section">
				<h1 className="payment-header">Click to Pay</h1>
				<StripeCheckout
					stripeKey="pk_test_sgOdphKru41G67PCT4BlZSAr00ccaRfmQZ"
					token={handleToken}
					billingAddress
					amount={10000}
					name="radio service"
				/>
				{fireRedirect && <Redirect to="/thank-you" />}
			</section>
		</Fragment>
	);
}

export default Payment;
