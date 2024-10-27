//Crear eventos
//Actualizar
//Cambiar status
//Cambiar de ronda (Eliminar a los equipos)
import { EventModel } from "../models/EventsModel.js";

export default{
    createEvent: async (req,res)=>{
        try{
         //Validar que metricaas es un arreglo
        if (!Array.isArray(req.body.metrics)){
            return res.status(400).json({msg:"Metricas no es un arreglo"})
        }
        //Validar que tiene al menos una metrica
        if (!(req.body.metrics.length > 0)){
            return res.status(400).json({msg:"Metricas vienee vacio"})
        }
        //Validar que descripcion y maximo de puntos exite
        //iterar
        const incompleteMetrics = req.body.metrics.filter((metric)=>(!metric.description)||
    (!metric.max_points));
    if(incompleteMetrics.length > 0){
        return res.status(400).json({msg:"Alguna de las metricas esta incompleta"})
    }
        //Validar que descripcion si tiene texto
        //Validar que el maximo de puntos es mayor a 0

        const invalidMetrics= req.body.metrics.filter((metric)=> metric.description.length === 0||
    metric.max_points === 0 ); 
    if(invalidMetrics.length > 0){
        return res.status(400).json({msg:"Alguna de las metricas es invalida"})
    }

        const event = {
            name:req.body.name,
            metrics:req.body.metrics,
            maxRound:req.body.maxRound,
        };
        await EventModel.create(event);
        res.status(200).json({msg:"Evento creado con exito"})
    }catch (error){
        console.log(error);
        return res.status(500).json({msg:"Error al crear el evento"})
    }

    }
}
