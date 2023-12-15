// server/models/Task.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: Array, required: true },
    totalPoints: { type: Number, required: true },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
