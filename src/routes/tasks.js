const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

//get data/task
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    //console.log(tasks);
    res.json(tasks);
    //res.send('API Tasks is goin here')
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);

});

//To save------------------------------
router.post('/', async (req, res) => {
    //req.body
    const task = new Task(req.body);
    //console.log(task);
    await task.save();
    res.json({
        status: 'task saved'
    });
    //console.log(new Task());
});

//to update-----------------------------
router.put('/:id', async (req, res) => {
//console.log(req.params, req.body);
await Task.findByIdAndUpdate(req.params.id, req.body);
res.json({
    status: 'Task Updated'
});
});

//remove----------------------------------
router.delete('/:id', async (req, res) => {
   await Task.findByIdAndRemove(req.params.id);
   res.json({
       status: 'Task deleted'
   });
});
 
module.exports = router;