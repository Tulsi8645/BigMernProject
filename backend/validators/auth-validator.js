const {z}=require("zod");


//creating an object schema
const signupSchema=z.object({
username:z
  .string({required_error:"Name is needed"})
  .trim()
  .min(3,{massage:"Name must be atleast of 3 characters"})
  .max(100,{message:"Name cant be more than 100 characters"}),
email:z
  .string({required_error:"Email is required"})
  .trim()
  .email({message:"Invalid email"}),
phone:z
  .string({required_error:"Phone is needed"})
  .trim()
  .min(10,{message:"Phone no. is at least 10 characters"})
  .max(13,{message:"Phone no. cant be more than 13 characters"}),
password:z
.string({required_error:"Password is needed"})
.min(5,{message:"Password must be at least 5 characters long"})
})

module.exports=signupSchema;