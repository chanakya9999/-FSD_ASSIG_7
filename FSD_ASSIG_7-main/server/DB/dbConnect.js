
const mongoose = require("mongoose");
require('dotenv').config({ path: '.\.env' });

async function dbConnect(){


    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));
}

module.exports = dbConnect;


  
  

