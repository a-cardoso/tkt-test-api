const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    ca: {
        type: Number,
        required: true,
    },
    ebitda: {
        type: Number,
        required: true,
    },
    loss: {
        type: Number,
        required: true,
    },
    margin: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

const companiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    siren: {
        type: Number,
        required: true
    },
    results: [resultsSchema],
}, { timestamps: true });

mongoose.model('Companies', companiesSchema);
