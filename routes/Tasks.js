const express = require("express");
const tasks = express.Router();
const Task = require("../models/Task");


//GET ALL TASKS
tasks.get('/', function (req, res, next) {
    Task
        .findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

//GET TASK BY ID
tasks.get('/:id', function (req, res, next) {
    Task
        .findOne({
        where: {
            id: req.params.id
        }
    })
        .then(task => {
            if (task) {
                res.json(task)
            } else {
                res.send('Task does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

//ADD TASK
tasks.post('/', function (req, res, next) {
    if (!req.body.task_name) {
        res.status(400)
        res.json({error: 'Bad Data'})
    } else {
        Task
            .create(req.body)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.json('error: ' + err)
            })
    }
})


//DELETE TASK
tasks.delete('/:id', function (req, res, next) {
    Task
        .destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.json({status: 'Task Deleted!'})
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

// UPDATE TASK
tasks.put('/:id', function (req, res, next) {
    if (!req.body.task_name) {
        res.status(400)
        res.json({error: 'Bad Data'})
    } else {
        Task.update({
            task_name: req.body.task_name
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.json({status: 'Task Updated!'})
        }).error(err => handleError(err))
    }
})

module.exports = tasks;