import { getMyProfile, login, logout, register } from "../controllers/Auth.js"
import express from "express"
import  { isAuthenticated } from "../middleware/auth.js"

const  router = express.Router()

router.post("/signup",register)
router.post("/login",login)
router.get("/me",isAuthenticated,getMyProfile)
router.get("/logout",logout)

export default router