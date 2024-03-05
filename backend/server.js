require("dotenv").config()
const express=require("express");
const cors=require("cors")
const app=express();
const authRoute=require("./router/auth-router")
const contactRoute=require("./router/contact-router")
const connectdb=require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT=process.env.PORT

//handling cors policy
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOption));
//json middleware
app.use(express.json())



app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware)

connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
});
})








