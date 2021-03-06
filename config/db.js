const mongoose = require('mongoose')
const config = require('config')

const db = process.env.mongoURI || config.get('mongoURI') 


const connectDB = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Mongo connected");
    }catch(err) {
        console.log(err)
        // Exit Process with failure
        process.exit(1);
    }
}
module.exports = connectDB;