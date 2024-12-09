import { Schema, model} from "mongoose";

const UserSchema = new Schema([
    {
        name: {
            type: String, 
            required: true
        }
    },
    {
        password: {
            type: String,   
            required: true
        }
    },
    {
        email: {
            type: String,
            required: true
        }
    },
    {
        CURP: {
            type:String,
            required: true
        }
    },
    {
        role: { type: String, enum: ['judge', 'participant', 'managers'], lowercase: true, default: 'participant'}
    }
])

export const UsersModel = model("users", UserSchema);