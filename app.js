const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// Middlewares (codes to run when we are at a particular route like authentication)
// app.use('/first', () =>{
//     console.log('We are on page route!');
// });
// Importing routes :
// const firstRouter = require('./routes/firstPage');

// app.use('/first',firstRouter);
// Creating Routes
app.get('/',(req,res) => {
 res.send('Home Page !!');
});
app.get('/first',(req,res) => {
    res.send('First Page !!');
   });
// connect to the DB
// DB CONNECTION URL IS SENT THROUGH DOTENV PACKAGE SO THAT NO ONE CAN SEE USER ID AND PASS ON GITHUB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('Connected to the DB!');
},{useUnifiedTopology: true});
// Starting the server here......
app.listen(3000); // Listen at port number - 3000

