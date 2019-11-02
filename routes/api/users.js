const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

//route POST api/users
//desc  Register User
//access Public

// User Signup
router.post(
	'/',
	[
		//.exists() doesn't work here because an empty string would be valid
		check('name', 'Please enter a name').not().isEmpty(),
		check('email', 'Invalid Email, please Include valid email').isEmail(),
		check('password', 'Invalid Password, password must have 8 or more characters and contain a number')
			.isLength({ min: 8 })
			.matches(/\d/)
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ error: [ { msg: 'This user already exists' } ] });
			}
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			user = new User({
				name,
				email,
				avatar,
				password
			});

			const salt = await bcrypt.genSalt();

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user._id
				}
			};

			jwt.sign(payload, config.get('JWTSecret'), { expiresIn: 480000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (e) {
			console.error(e.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
