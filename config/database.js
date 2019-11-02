const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectMongoose = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
	} catch (e) {
		console.error(e.message);
		process.exit(1);
	}
};

module.exports = connectMongoose;
