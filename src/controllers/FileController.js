const File = require('../models/File');

class FileController {
    async store(req, res) {
        console.log(req.file);

        return res.send('Ok');
    }
}

module.exports = new FileController();