const express = require('express');
const router = express.Router();
const { testController } = require('../controllers');

router.get('/hello', testController.test); 


router.post('/xinchu', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
});

module.exports = router;