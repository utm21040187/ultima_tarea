import { Schema, model} from "mongoose";

const TeamSchema = new ([
    {
        name: {
            type: String,
            requiered: true
        }
    },
    {
        participantes:[

        ],
        requiered: true
    },
    {
        lider:[

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
        grade:[

        ],
        requiered: true
    },
])

export const TeamModel = model("events", TeamSchema);