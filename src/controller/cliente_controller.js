import Cliente from "../models/Cliente.js";

const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({}, '-createdAt -updatedAt -__v');
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ msg: "Ocurrió un error al listar las especialidades." });
    }
};

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
    listarClientes
}