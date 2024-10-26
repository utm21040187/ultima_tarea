import { UserModel } from "../models/UsersModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

//Registran
//Iniciar sesion
//Actualizaar perfil

export default{
    register:async (req, res)=>{
        try{
            const hash = await bcrypt.hash(req.body.password, 10)
        const user ={
            name:req.body.name,
            password:hash,
            email:req.body.email,
            CURP:req.body.CURP,
            rol:req.body.rol,
        };
        await UserModel.create(user);
        res.status(200).json({msg:"Usuario registrado con exito"});
    } catch(error){
        res.status(500).json({msg:"Ocurrio un error al registrarte"});
        console.log(error)
    }
    },
    login: async (req, res)=>{
        try{
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !password){
            return res.status(400).json({msg:"Parametros invalidos"})
        }

        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Credenciales invalidas"});
        }

        if(!bcrypt.compare(password, user, password)){
            return res.status(400).json({msg:"Credenciales invalidas"})
        }
        //Creacion token
        const token = await jsonwebtoken.sing(user,process.env.PRIVATE_KEY);

        return res.status(200).json({token});
    } catch(error){
        res.status(500).json({msg:"Ocurrio un error"});
        console.log(error)
    }
    },
    
    updateProfile:async (req,res)=>{
        try{
        const user = await UserModel.findById(req.params.id);
        if (!user){
            return res.status(400).json({msg:"Usuario no encontrado"})
        }
        user.name = req.body.name ? req.body.name : user.name;
        user.password = req.body.password ? req.body.password : user.password;
        user.CURP = req.body.CURP ? req.body.CURP : user.CURP;
        user.email = req.body.email ? req.body.email : user.email;

        await UserModel.findOneAndUpdate(user._id)
        return res.status(200).json({"Perfil actualizado con exito"})
    }
    catch(error){
        res.status(500).json({msg:"Ocurrio un error al registrarte"});
        console.log(error)
    }
}
}