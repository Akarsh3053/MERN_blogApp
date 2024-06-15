const { mongoose } = require("mongoose");
const colors = require('colors');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected to Databse!'.bgMagenta)

    } catch (error) {
        console.log('Connection with databse failed!!'.bgRed)
    }
}

module.exports = connectDB;