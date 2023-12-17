const { testRepository } = require('../repositories');

const test = async (req, res) => {
    try {
        const examples = await testRepository.getAllTests();
        return res.status(200).send(examples);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = test;