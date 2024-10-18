import { Schema, model} from "mongoose";

const UserSchema = new ([
    {
        Name: {
            type: String, 
            requiered: true
        }
    },{
        Mail: {
            type: String,
            requiered: true
        }
    },
    {
        Curp: {
            type:String,
            requiered: true
        }
    },
    {
        Rol:{
            type: String,
            requiered: true
        }
    }
])

export const UserModel = model("events", UserSchema);