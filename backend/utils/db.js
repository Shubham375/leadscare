const mongoose = require("mongoose");

const URI = process.env.DBURI;

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("data base connect successfully");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
};

module.exports = connectDB;