import { Schema, model} from "mongoose";

const GradesSchema = new Schema([
    {
        id_group:{
            type: Schema.Types.ObjectId,
        requiered: true}
    },
    {
        round:{
            type: Number,
            requiered: true
        }
    },
    {
        id_event:{
        type: Schema.Types.ObjectId,
        requiered: true
        }
    },
    {
        grades:[{
            id_metric:{
                type: Schema.Types.ObjectId,
                requiered: true
            },
            grade:{
                type: Number,
                requiered: true
            },
            id_judge:{
                type: Schema.Types.ObjectId,
                requiered: true
            },
            
    }]
}
])
export const GradeModel = model("grades", GradesSchema);