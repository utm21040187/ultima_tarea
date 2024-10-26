import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config();
import UsersController from "./controllers/UsersController"

const app = express()

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Conexión exitosa"))

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hola desde mi servidor")
})

app.post("/user/register", UserController.register)
app.post("/user/login", UserController.login)
app.put("/user/update-profile", UserController.update-profile)

app.listen(4000,()=>console.log("Server is running"))