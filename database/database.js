const mongooes = require("mongoose");
const config = require('../config')
async function connect(){
    try {
        let connection = await mongooes.connect(config.MONGO_URI);
        console.log("Connect successfully!");
        return connection;
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;