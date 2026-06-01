const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected')
    } catch (error) {
        console.log('Database connection problem occur')
    }
}

module.exports = connectDB