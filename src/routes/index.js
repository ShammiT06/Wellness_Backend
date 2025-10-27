import express from "express";
import registerRoute from "./authRoutes/register.js";
import loginRoute from "./authRoutes/login.js"
import verifyRoute from "./authRoutes/verifyUser.js"


const router = express.Router()

router.use('/register',registerRoute)
router.use("/login",loginRoute)
router.use("/verify",verifyRoute)



router.get("/",(req,res)=>{
    res.json({
        message:"Availabe API Endpoints",
        routes:[
            "/register",
            "/login",
            "/verify/:token"
        ]
    })
})


export default router