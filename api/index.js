import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userController from "./controllers/UsersController.js";
import EventsController from "./controllers/EventsController.js";
import TeamsController from "./controllers/TeamsController.js";

dotenv.config();

const app = express();

mongoose.connect(process.env.url)
    .then(() => {
        console.log('Conectado a la base de datos');
    })
    .catch((err) => {
        console.log('Error al conectar a la base de datos', err);
    });

app.use(cors());
app.use(helmet());
app.use(express.json());

// Ruta base para ver si el servidor está funcionando
app.get('/', (req, res) => {
    res.send("Servidor funciona");
});

// Rutas de Usuarios
app.post('/user/register', UsersController.register);
app.put('/user/update-profile/:id', UsersController.update);
app.post('/user/login', UsersController.login);
app.post('/user/list', UsersController.getUsers);

// Rutas de Eventos
app.post('/event/create', EventsController.createEvent);
app.get('/event/create', EventsController.getEvents);

// Rutas de Equipos
app.post('/teams', TeamsController.createTeam); // Crear equipo
app.put('/teams/register/:id/:id_event', TeamsController.eventRegister); // Registrar equipo en evento
app.get('/teams', TeamsController.getTeam); // Obtener todos los equipos

app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000 :)"));
