require("dotenv").config()
const express=require("express");
const app=express();
const authRoute=require("./router/auth-router")
const contactRoute=require("./router/contact-router")
const connectdb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT=4000;
//json middleware
app.use(express.json())



app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware)


connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log("server is running at port 4000")
});
})








