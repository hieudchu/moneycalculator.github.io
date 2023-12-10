const express = require('express');
const connect = require('./database/database');
const app = express();
const config = require('./config.json');

//routers
const testRoute = require('./routes/testRoute');
app.use('/test',testRoute); 

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 


const PORT = config.PORT;
app.listen(PORT, async (error) => {
    if (!error) { 
        await connect();
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
}); 
