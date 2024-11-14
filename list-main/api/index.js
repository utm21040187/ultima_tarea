import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config();
import UsersController from "./controllers/UsersController.js"
import EventsController from "./controllers/EventsController.js"

const app = express()

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Conexión exitosa"))

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hola desde mi servidor")
})

app.post("/user/register", UsersController.register)
app.post("/user/login", UsersController.login)
app.put("/user/update-profile", UsersController.updateProfile)
app.post("/event/create", EventsController.createEvent)
app.post("/event")

app.listen(4000,()=>console.log("Server is running"))