// to make routes clean but i am nit using it as it's not working
const express = require('express');
const router = express.Router();

router.get('/first',(req,res) => {
    res.send('First Page !!');
   });

   module.exports=router;