const express = require('express');
const connectDB = require('./database/Database');

const app = express();

//dotenv config
require("dotenv").config();

//middleware express json
app.use(express.json());

//Defining Routes
app.get('/', (req, res)=>{
    res.send('Hello World!');
});

//connect to databasse
connectDB();

//listen to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

