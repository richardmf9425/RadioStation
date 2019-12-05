const express = require('express');
const stripe = require('stripe')('sk_test_sEnRQizzgDve2o1jVowsJjKe00EVlHKXWA');
const cors = require('cors');
const uuid = require('uuid/v4');
const connectMongoose = require('./config/database.js');
const app = express();
const path = require('path');

//Database
connectMongoose();

//Middlewares
app.use(express.json({ extended: false }));
app.use(cors());

// app.get('/', (req, res) => {
// 	res.send('api running');
// });

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api', require('./routes/api/auth'));
//app.use('/api/auth')
// Checkout with stripe route

app.post('/api/checkout', async (req, res) => {
	console.log('Request:', req.body);

	let error;
	let status;
	try {
		const { token } = req.body;

		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id
		});

		const idempotency_key = uuid();
		const charge = await stripe.charges.create(
			{
				amount: 10 * 100,
				currency: 'usd',
				customer: customer.id,
				receipt_email: token.email,
				description: `Purchased the Basic Service `,
				shipping: {
					name: token.card.name,
					address: {
						line1: token.card.address_line1,
						line2: token.card.address_line2,
						city: token.card.address_city,
						country: token.card.address_country,
						postal_code: token.card.address_zip
					}
				}
			},
			{
				idempotency_key
			}
		);
		console.log('Charge:', { charge });
		status = 'success';
	} catch (error) {
		console.error('Error:', error);
		status = 'failure';
	}

	res.json({ error, status });
});

//Serve static in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 2054;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
