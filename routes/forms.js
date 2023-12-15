// server/routes/tasks.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/form.controller');

router.get('/', formController.getAllForms);
router.post('/', formController.createForm);
router.get('/:formId', formController.getFormById);
router.delete('/:formId', formController.deleteForm);

module.exports = router;
