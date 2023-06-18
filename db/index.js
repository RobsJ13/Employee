const mongoose = require('mongoose');

require('dotenv').config()
const uname=process.env.UNAME;
const pwd=process.env.PWD;
mongoose.connect(`mongodb+srv://${uname}:${pwd}@cluster0.crzohhq.mongodb.net/employee2`)
.then(()=>{
    console.log("Mongo DB connection is successfull.")
})
.catch(err=> console.log('error connecting', err))