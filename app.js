import express from "express"
import userRouter from "./routes/AuthRoute.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { errorMiddleware } from "./middleware/error.js"

export const app = express()

config({
    path: "./config.env"
})

//middlewares

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(cors({
    origin:'',
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())


//routes
app.use("/users", userRouter)


//sample
app.get("/",(req,res)=>{
    res.send("nice working")
})

app.use(errorMiddleware);
