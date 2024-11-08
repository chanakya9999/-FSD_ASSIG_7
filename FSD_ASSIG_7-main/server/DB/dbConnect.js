
const mongoose = require("mongoose");
require('dotenv').config({ path: 'E:\react\-FSD_ASSIG_7\FSD_ASSIG_7-main\.env' });

async function dbConnect(){

    mongoose.connect(process.env.DB_URL,
        { useNewUrlParser: true, 
            useUnifiedTopology: true, 
            writeConcern: { w: 'majority', j: true, wtimeout: 1000 } 
        })
    .then(()=>{
        console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.log("Unable to connect to the MongoDB Atlas!");
        console.error(error);
    })
}

module.exports = dbConnect;

