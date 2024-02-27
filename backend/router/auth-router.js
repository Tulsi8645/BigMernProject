const express=require("express");
const router=express.Router();
const {home,register, login}=require("../controllers/auth-controller")
const signupSchema=require("../validators/auth-validator")
const validate=require("../middlewares/validate-middleware")

router.get("/",home);

router.post("/register",validate(signupSchema),register)
router.post("/login",login)


module.exports=router;