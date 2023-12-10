const mongooes = require('mongoose');
module.exports = mongooes.model('test', 
    new mongooes.Schema({
        id: {
            type: String,
            required: true, 
        },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => value.length > 3,
                message: 'name incorrect format!'
                }
            }
        }
    )    
)