//Crear equipo
//Inscribirse al evento


import { TeamsModel } from "../models/TeamsModel.js";

export default{
    createTeam: async (req,res)=>{
        try{
        const team = {
            name: req.body.name,
            id_members:req.body.id_members,
            leader:req.body.leader
        };
        await TeamsModel.create(team);
        return res.status(200).json({msg:"Grupo creado con exito"})
    }catch (error){
        console.log(error);
        return res.status(500).json({msg:"Ocurrio un error al guardar el equipo"})
    }
    },
    registerEvent: async(req,res)=>{
        try{
        const id_Group = req.params.id;
        const groups = await TeamsModel.findById(id_Group);
        if (!teams){
            return res.status(400).json({msg:"El equipo no existe"})
        }
        const id_event = req.params.id;
        const event = await EventModel.findById(id_event);
        if(!event) {
            return res.status(400).json({msg:"El evento al que te intentas registrar no existe"})
        }
        await EventModel.findByIdAndUpdate(id_event,{
            $push:{
                "groups":id_Group
            }
        })
        return res.status(200).json({msg:"El equipo se inscribio con exito"})
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"Ocurrio un error al registrar el equipo"})
        }
    }

}