import { Schema, model} from "mongoose";

const UserSchema = new Schema([
    {
        name: {
            type: String, 
            requiered: true
        }
    },
    {
        password: {
            type: String,
            requiered: true
        }
    },
    {
        email: {
            type: String,
            requiered: true
        }
    },
    {
        CURP: {
            type:String,
            requiered: true
        }
    },
    {
        rol:{
            type: String,
            enum:["administrator","participant","judge"],
            lowercase: true,
            requiered: true
        }
    }
])

export const UserModel = model("users", UserSchema);