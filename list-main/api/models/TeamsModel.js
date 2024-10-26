import { Schema, model} from "mongoose";

const TeamsSchema = new Schema([
    {
        name: {
            type: String,
            requiered: true
        }
    },
    {
        id_members:[]
    },
    {
        lider:{
        type: Schema.Types.ObjaectId,
        requiered: true
        }
    },
    {
        round:{
            type: Number,
            default:0
        }
    },
    {
        grade:[],
        requiered: true
    },
])

export const TeamModel = model("teams", TeamsSchema);