// server/controllers/taskController.js
const Form = require('../models/form');

exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find({}, '_id name');
        res.json(forms);
    } catch (error) {
        res.json({ message: error.message });
    }
};

exports.createForm = async (req, res) => {
    const form = new Form({
        name: req.body.name,
        body: req.body.form,
        totalPoints: req.body.totalPoints
    });

    try {
        const savedForm = await form.save();
        res.json(savedForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.formId);
        res.json(form);
    } catch (error) {
        res.json({ message: error.message });
    }
};
