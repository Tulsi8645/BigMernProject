const mongoose=require("mongoose");
const MONGO_URI=process.env.MONGO_URI

const connectdb=async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("connected to mangodb")
    } catch (error) {
        console.error("connection failed")
        process.exit(0)
    }
}

module.exports=connectdb;