const express = require("express");
const userRouter = require("./routes/user.routes")
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db")
connectToDB();
const cookieParser = require("cookie-parser")
const app = express();
const indexRouter = require("./routes/index.routes")

app.set('view engine' , 'ejs');
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// /home

app.use("/", indexRouter)

// /user/test

app.use("/user" , userRouter)


// Another way of handling errors. Global method. No response to the client. Try catch is used first  

// process.on("uncaughtException" , (err)=>{
//     console.log("uncaught exception");
//     console.log(err)
// })






app.listen(3000, ()=>{
    console.log("The server is running on the port 3000")
})
