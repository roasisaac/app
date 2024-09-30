const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:OQYCMn4peN8OIaPW@substack.rovj3.mongodb.net/myDatabase'
        ).then(() => {
            console.log('Connected to MongoDB');
        })
    } catch (error) {
        console.log("Error" - error);
    }
}

module.exports = connectDB;