const mongoose= require('mongoose');

const userSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        description:{
            type:String
        },
    },
{timestamps:true}
);

module.exports = mongoose.model("Task",userSchema);