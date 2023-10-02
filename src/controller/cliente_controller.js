import Cliente from "../models/Cliente.js";
import mongoose from "mongoose"

const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({}, '-createdAt -updatedAt -__v');
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ msg: "Ocurrió un error al listar las especialidades." });
    }
};

const detalleCliente = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el cliente ${id}`});
    const cliente = await Cliente.findById(id).select("-createdAt -updatedAt -__v")
    res.status(200).json(cliente)
}

const actualizarCliente = async(req,res)=>{
    try {
        const {id} = req.params
        if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
        if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el cliente ${id}`});
        await Cliente.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"Actualización exitosa del cliente"})
    } 
    catch (error) {
        console.log(error)
    }
}

const registrarCliente = async (req, res) => {
    try {
        if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })
        const { cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento, dependencia } = req.body
        const verificarCedulaBDD = await Cliente.findOne({ cedula })
        if (verificarCedulaBDD) return res.status(400).json({ msg: "Lo sentimos, el cliente ya se encuentra registrado" })
        const nuevoCliente = new Cliente({ cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento, dependencia })
        await nuevoCliente.save()
        res.status(200).json({ msg: "Cliente registrado exitosamente." })
    }
    catch (error) {
        console.log(error)
    }
}

export {
    registrarCliente,
    detalleCliente,
    actualizarCliente,
    listarClientes
}