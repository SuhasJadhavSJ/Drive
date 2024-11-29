const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const dotenv = require('dotenv')
const connectToDB = require('./config/db');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index.routes');

dotenv.config();
connectToDB();

app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("index");
})

app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(4000,()=>console.log("Server Started on Port 4000"))