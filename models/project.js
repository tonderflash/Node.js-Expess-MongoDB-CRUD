'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number
});

module.exports = mongoose.model('Project', projectSchema);