const {Schema, model } = require('mongoose');

const infoSchema = new Schema({
    visitorCount : {
        type : Number,
        default : 0
    }
})

const infoModel = model('info', infoSchema);

module.exports = infoModel;