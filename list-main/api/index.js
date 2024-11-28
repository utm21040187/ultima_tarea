// importar dependencias
import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import mongoose from "mongoose"
// controllers
import UsersController from "./controllers/UsersController.js"
import EventsController from "./controllers/EventsController.js"
import TeamsController from "./controllers/TeamsController.js"

dotenv.config()

const app = express()

mongoose.connect(process.env.url)
    .then(() => {
        console.log('jala')
    })
    .catch((err) => {
        console.log('no jala', err)
    })

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("get wrkng :)")
})

// user endpoints
app.post('/user/register', UsersController.register)
app.put('/user/update-profile/:id', UsersController.update)
app.post('/user/login', UsersController.login)

// events endpoints
app.post('/event/create', EventsController.createEvent)

// teams controller
app.post('/team/create', TeamsController.createTeam)
app.put('/team/eventRegister', EventsController.createEvent)

app.listen(4000, () => console.log("svr wrkng :)"))