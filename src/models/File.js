const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    toObject: { virtuals: true},
    toJSON: { virtuals: true}
});

File.virtual('url').get(function() {
    return `${process.env.BACKEND_SERVER}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);