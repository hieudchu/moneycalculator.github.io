const express = require('express');
const router = express.Router();

router.get('/hello', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
}); 

router.post('/xinchu', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
});

module.exports = router;