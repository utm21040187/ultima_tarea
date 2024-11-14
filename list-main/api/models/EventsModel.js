import { Schema, model} from "mongoose";

const EventSchema = new Schema([
    {
        name: {
            type: String,
            requiered: true
        }
    },
    {
        metrics:[
            {
                description:{
                    type:String, 
                    required:true
                }, 
                max_points:{
                    type:Number,
                    required:true
                }
            }
        ]
    },
    {
        maxRound: {
            type: Number,
            requiered: true
        }
    },
    {
        round:{
            type:Number,
            default:0
        }
    },
    {
        status:{
            type:String,
            enum:["pending","active","done"],
            lowercase:true,
            default:"pending"
        }
    },
    {
        groups:[]
    },
    {
        judges:[]
    }
]);

export const EventModel = model("events", EventSchema);