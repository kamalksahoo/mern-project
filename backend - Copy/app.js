require("dotenv").config();
const express = require('express')
const app = express()
var mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const insertRoutes=require("./routes/insert.js")

//db connections
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{console.log("DB CONNECTED")});

//middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//my routes
app.use("/api",insertRoutes);

//port
const port=process.env.PORT;                

//starting server 
//app.get('/home', (req, res) => res.send('Hello these is ur first project'))
app.listen(port, () => console.log(` app listening at port:${port}`))