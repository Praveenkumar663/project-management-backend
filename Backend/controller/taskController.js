const mongoose = require('mongoose')
const taskModel= require('../models/TaskModel');

//to create a Task--post
const createTask =async (req,res)=>{
    const {title,description} = req.body
   
    try {
        const Task = await taskModel.create({title,description})
        res.status(200).json(Task)
    } catch (error) {
        res.status(400).json({error:error.message})
    } 
};
// to get all tasks -GET
const getTasks= async (req,res)=>{
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks) 
    } catch (error) {
       res.status(400).json({error:error.message}) 
    }
}

// To get a single Task- GET
const getSingleTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:'Task not Found'})
    }
    try {
        const singleTask= await taskModel.findById(id)
        res.status(200).json(singleTask)
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}

// to update a task - PATCH
  const updateTask= async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:"Task not Found"})
    }
    try {
        const task=await taskModel.findByIdAndUpdate({
            _id:id
        },
    {
        ...req.body
    })
    res.status(200).json(task)
    } catch (error) {
          res.status(400).json({error:error.message})
    }
  }

  //delete Task- DELETE
  const deleteTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
          res.status(400).json({error:"Task not Found"})
    }
    try {
    const task=await taskModel.findByIdAndDelete(id);
    res.status(200).json({task})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
  }

module.exports={createTask,getTasks,getSingleTask,updateTask,deleteTask};
