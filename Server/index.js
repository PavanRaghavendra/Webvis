const express=require('express');
const cors=require('cors');
const user=require('./routes/user')
const app=express();
app.use(cors());
app.use('/user',user);
app.listen(3002,()=>
{
    console.log("server was listing at port 3002")
})