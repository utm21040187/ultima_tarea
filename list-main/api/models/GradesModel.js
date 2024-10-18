import { Schema, model} from "mongoose";

const GradesSchema = new ([
    {
        id_groups:[

        ],
        requiered: true
    },
    {
        ronda:{
            type: Number,
            requiered: true
        }
    },
    {
        id_evento:[

        ],
        requiered: true
    },
    {
        grade:[

        ],
        requiered: true
    }
])
export const GradeModel = model("events", GradesSchema);