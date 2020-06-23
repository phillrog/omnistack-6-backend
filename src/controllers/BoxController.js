const Box = require('../models/Box');

class BoxController {
    async store(re, res) {
        const box = await Box.create({ title: 'Teste' })

        return res.json(box);
    }
}

module.exports = new BoxController();