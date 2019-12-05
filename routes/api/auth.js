const express = require('express');
const cors = require('cors');
const router = express.Router();
const auth = require('../../middleware/authentication');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const sanitize = require('mongo-sanitize');
const _ = require('lodash');
// sendgrid
const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(config.get('SENDGRID_API_KEY')/*process.env.SENDGRID_API_KEY*/);


//route GET api/auth
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

//route POST api/auth
//desc user auth and return token
//access Public

//User Login Check
router.options('*', cors);
router.post(
	'/',
	[
		check('email', 'Invalid Email, please Include valid email').isEmail(),
		check('password', 'Please enter your password').exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { email, password } = sanitize(req.body);

		try {
			let user = await User.findOne({ email: { $in: [ email ] } });

			if (!user) {
				return res.status(400).json({ errors: [ { msg: 'Wrong email and /or password. Please try again' } ] });
			}

			const match = await bcrypt.compare(password, user.password);

			if (!match) {
				return res.status(400).json({ errors: [ { msg: 'Wrong email and /or password. Please try again' } ] });
			}

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


// forgot password
router.put('/forgot-password', [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
], (req, res) => {
	//const errors = validationResult(req);
	//if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist'
            });
        }

        const token = jwt.sign({ _id: user._id }, config.get('JWT_RESET_PASSWORD'), { expiresIn: '10m' });

        // email
        const emailData = {
            from: config.get('EMAIL_FROM'),
            to: email,
            subject: `Password reset link`,
            html: `
            <p>Please use the following link to reset your password:</p>
            <p>${config.get('CLIENT_URL')}/auth/password/reset/${token}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `
        };
        // populating the db > user > resetPasswordLink
        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.json({ error: errorHandler(err) });
            } else {
                sgMail.send(emailData).then(sent => {
                    return res.json({
                        message: `Email has been sent to ${email}. Follow the instructions to reset your password. Link expires in 10min.`
                    });
                });
            }
        });
    });
});

// reset password
router.put('/reset-password', [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

	const { resetPasswordLink, newPassword } = req.body;
	


    if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, config.get('JWT_RESET_PASSWORD'), function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    error: 'Expired link. Try again'
                });
            }
            User.findOne({ resetPasswordLink }, async (err, user) => {
                if (err || !user) {
                    return res.status(401).json({
                        error: 'Something went wrong. Try later'
                    });
                }
            
            

                const updatedFields = {
                    password: await bcrypt.hash(newPassword, await bcrypt.genSalt()),
                    resetPasswordLink: ''
                };

                user = _.extend(user, updatedFields);

                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: errorHandler(err)
                        });
                    }
                    res.json({
                        message: `Great! Now you can login with your new password`
                    });
                });
            });
        });
    }
});

module.exports = router;
