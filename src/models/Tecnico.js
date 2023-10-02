import { Schema, model } from 'mongoose'

const tecnicoSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellido: {
        type: String,
        require: true,
        trim: true
    },
    cedula: {
        type: Number,
        require: true,
        trim: true,
		unique:true
    },
    fecha_nacimiento: {
        type: Date,
        require: true,
        trim: true
    },
    genero: {
        type: String,
        require: true,
        trim: true
    },
    ciudad: {
        type: String,
        require: true,
        trim: true
    },
    direccion: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
})

export default model('Tecnico', tecnicoSchema)