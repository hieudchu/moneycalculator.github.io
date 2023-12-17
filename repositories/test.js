const Test = require('../models/test');

const getAllTests = async () => {
    try {
        const tests = await Test.find();
        return tests;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching tests');
    }
};

// const getTestById = async (id) => {
//     try {
//         const test = await test.findById(id);
//         return test;
//     } catch (error) {
//         throw new Error('Error fetching test by ID');
//     }
// };

module.exports = {
    getAllTests
    //getTestById
};
