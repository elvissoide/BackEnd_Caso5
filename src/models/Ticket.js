import { Schema, model } from 'mongoose'
import mongoose from "mongoose"

const ticketSchema = new Schema({
    codigo: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    id_tecnico: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'tecnicos'
    },
    id_cliente: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'clientes'
    }
}, {
    timestamps: true
})

export default model('Ticket', ticketSchema)