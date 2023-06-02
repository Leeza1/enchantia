const express = require('express');
const connectDB = require('./database/Database');
const cors = require('cors');
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty');

// Dotenv Config
require("dotenv").config();
const app = express();

// express json
app.use(express.json());
app.use(multipart())

// cors config
const corsOptions = {
    origin:true,
    credentials: true,
    optionSuccessStatus: 200
};
// Configuration 
cloudinary.config({
    cloud_name: "dk08ni3q5",
    api_key: "249642849958887",
    api_secret: "V4UEvb55JSNBY_Uel5rQ7a1JfyI"
  });

app.use(cors(corsOptions));

//  create a route
app.get('/', (req, res) => {
    res.send('Welcome to API');
});

// middleware for user controller
app.use('/api/user', require('./controllers/userControllers'));
//middleware for product controllers
app.use('/api/product', require('./controllers/productControllers')); 


// connect to database
connectDB();

// listen to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



