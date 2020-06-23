const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const { title } = req.body;

        if (!title || title.length == 0 ) return res.send('Informe o titulo do box');

        const box = await Box.create({ title })

        return res.json(box);
    }
}

module.exports = new BoxController();