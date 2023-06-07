const mongoose = require('mongoose');

const bangleSchema = new mongoose.Schema({
    bangname: {
        type: String,
        required: true,
    },
    bangdescription: {
        type: String,
        required: true,
    },
    bangcategory: {
        type: String,
        required: true,
    },
    bangprice: {
        type: String,
        required: true,
    },
    bangimagea: {
        type: String,
        required: true,
    },
    bangimageb: {
        type: String,
        required: true,
    },
    bangimagec: {
        type: String,
        required: true,
    },
    bangimaged: {
        type: String,
        required: true,
    },
});

const Bangle = mongoose.model('Bangle', bangleSchema);
module.exports = Bangle;