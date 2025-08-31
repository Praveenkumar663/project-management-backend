const express = require('express')
const {createTask,getTasks,getSingleTask,updateTask,deleteTask}= require('../controller/taskController')

const router=express.Router()

router.post("/",createTask);
 router.get('/',getTasks);
 //get a single task
 router.get('/:id',getSingleTask)

 router.patch('/:id',updateTask)

 router.delete('/:id',deleteTask)

module.exports=router;