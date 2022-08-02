const Task = require("../models/task");
const AsyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/ErrorClass");
const { create } = require("../models/task");
const getAllTasks = AsyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const createTask = AsyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = AsyncWrapper(async (req, res, next) => {
    const task = await Task.findOne({ _id: req.params.id });
    if (task) {
        return res.status(200).json({ task });
    } else {
        return next(
            createCustomError(`No task with id : ${req.params.id}`, 404)
        );
    }
});

const updateTask = AsyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (task) {
        return res.status(200).json({ task });
    } else {
        return next(
            createCustomError(`No task with id : ${req.params.id}`, 404)
        );
    }
});

const deleteTask = AsyncWrapper(async (req, res, next) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (task) {
        return res.status(200).json({ task });
    } else {
        return next(
            createCustomError(`No task with id : ${req.params.id}`, 404)
        );
    }
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
