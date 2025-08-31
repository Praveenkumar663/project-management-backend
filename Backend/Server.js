const express =require ('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const taskRoutes=require('./routes/taskRoutes')
dotenv.config()
const PORT =process.env.PORT;
const mongoDbURL=process.env.MONGODB_URI;

//middleware
app.use((req,res,next)=>{
    console.log("path  "+ req.path +"method "+req.method);
    next()
})

app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

//connect to mongoDb
mongoose.connect(mongoDbURL)
    .then(()=>{
        app.listen(PORT,()=>{
        console.log(`DB connected succesFully  and listening to:${PORT}`);
});
    }).catch((err)=>{
        console.log(err);
        
    })
    
app.use('/api/tasks',taskRoutes)