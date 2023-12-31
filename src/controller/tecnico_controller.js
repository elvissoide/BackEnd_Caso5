import Tecnico from "../models/Tecnico.js";
import mongoose from "mongoose"

const listarTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.find({}, '-createdAt -updatedAt -__v');
        res.status(200).json(tecnicos);
    } catch (error) {
        res.status(500).json({ msg: "Ocurrió un error al listar los tecnicos." });
    }
};

const detalleTecnico = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el tecnico ${id}`});
    const tecnico = await Tecnico.findById(id).select("-createdAt -updatedAt -__v")
    res.status(200).json(tecnico)
}

const actualizarTecnico = async(req,res)=>{
    try {
        const {id} = req.params
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
        if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el tecnico ${id}`});
        await Tecnico.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"Actualización exitosa del tecnico"})
    } 
    catch (error) {
        console.log(error)
    }
}

const eliminarTecnico = async (req,res)=>{
    try{
        const {id} = req.params
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
        if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el tecnico ${id}`})
        const {salida} = req.body
        await Tecnico.findByIdAndRemove(id);
        res.status(200).json({msg:"Tecnico eliminado exitosamente"})
    }
    catch(error){
        console.log(error)
    }
}

const registrarTecnico = async (req, res) => {
    try {
        if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })
        const { nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email } = req.body
        const verificarCedulaBDD = await Tecnico.findOne({ cedula })
        if (verificarCedulaBDD) return res.status(400).json({ msg: "Lo sentimos, el tecnico ya se encuentra registrado" })
        const nuevoTecnico = new Tecnico({ nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email })
        await nuevoTecnico.save()
        res.status(200).json({ msg: "Tecnico registrado exitosamente." })
    }
    catch (error) {
        console.log(error)
    }
}

export {
    registrarTecnico,
    listarTecnicos,
    actualizarTecnico,
    detalleTecnico,
    eliminarTecnico
}