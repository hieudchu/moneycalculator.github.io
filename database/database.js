const mongoose = require("mongoose");
const config = require('../config');

async function connect() {
  try {
    let connection = await mongoose.connect(config.MONGO_URI, {
      dbName: 'moneyCalculator'
    });
    console.log("Connected successfully!");
    return connection;
  } catch (error) {
    console.error("Connection error:", error);
  }
}

module.exports = connect;
