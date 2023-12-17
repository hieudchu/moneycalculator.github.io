const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: 'Name incorrect format!',
      },
    },
  },
  { collection: 'test' } // Specify the collection name here
);

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
