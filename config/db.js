const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            keepAlive: 1
        })
    }
    catch (err) {
        console.log("MongoDB connection failed!!")
    }
    // console.log(`MongoDB Connected now: ${conn.connection.host}`)
}

module.exports = connectDB