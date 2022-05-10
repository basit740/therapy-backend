const mongoose = require('mongoose');

//process.env.MONGO_URI
const connectDB = async () => {
	const conn = await mongoose.connect(
		'mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/myTherapyTool?retryWrites=true&w=majority',
		{
			//mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/myTherapyTool?retryWrites=true&w=majority
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
