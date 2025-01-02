const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// POST /tasks - Create a new task
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /tasks - Fetch all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET /tasks/:id - Fetch a task by its ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send();
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT /tasks/:id - Update a task's status
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).send();
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE /tasks/:id - Delete a task by its ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send();
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
