// server/controllers/taskController.js
const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.json({ message: error.message });
    }
};

exports.createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        res.json({ message: error.message });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        res.json(task);
    } catch (error) {
        res.json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.updateOne(
            { _id: req.params.taskId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                },
            }
        );
        res.json(updatedTask);
    } catch (error) {
        res.json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const removedTask = await Task.deleteOne({ _id: req.params.taskId });
        res.json(removedTask);
    } catch (error) {
        res.json({ message: error.message });
    }
};
