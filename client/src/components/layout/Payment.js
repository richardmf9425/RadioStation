import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

toast.configure();
function Payment() {
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
		<section className="payment-section">
			<h1 className="payment-header">Click to pay</h1>
			<StripeCheckout
				stripeKey="pk_test_sgOdphKru41G67PCT4BlZSAr00ccaRfmQZ"
				token={handleToken}
				billingAddress
				amount={10000}
				name="radio service"
			/>
		</section>
	);
}

export default Payment;
