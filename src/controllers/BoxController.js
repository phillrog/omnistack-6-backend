const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const { title } = req.body;

        if (!title || title.length == 0 ) return res.send('Informe o titulo do box');

        const box = await Box.create({ title })

        return res.json(box);
    }

    async show(req, res) {
        try {
            const box = await Box.findById(req.params.id).populate({
                path: 'files',
                options: { sort: { createdAt: -1}}
            });

            return res.json(box);
        } catch (error) {
            return res.send('Box não foi encontrada.');
        }        
    }
}

module.exports = new BoxController();