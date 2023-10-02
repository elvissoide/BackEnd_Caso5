import Ticket from "../models/Ticket.js";
import Tecnico from "../models/Tecnico.js";
import Cliente from "../models/Cliente.js";
import mongoose from "mongoose"

const registrarTicket = async (req, res) => {
    try {
        if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })
        const { codigo, descripcion, id_tecnico, id_cliente } = req.body

        const verificarTicketBDD = await Ticket.findOne({ codigo })
        if (verificarTicketBDD) return res.status(400).json({ msg: "Lo sentimos, el ticket con ese codigo ya se encuentra registrado" })

        // Verificar tecnico
        const verificarTecnicoBDD = await Tecnico.findOne({ _id: id_tecnico })
        if (!verificarTecnicoBDD) return res.status(400).json({ msg: "Lo sentimos, el tecnico no se encuentra registrado" })

        // Verificar cliente
        const verificarClienteBDD = await Cliente.findOne({ _id: id_cliente })
        if (!verificarClienteBDD) return res.status(400).json({ msg: "Lo sentimos, el cliente no se encuentra registrado" })

        const nuevoTicket = new Ticket({ codigo, descripcion, id_tecnico, id_cliente })
        await nuevoTicket.save()
        res.status(200).json({ msg: "Registro exitoso del ticket" })
    }
    catch (error) {
        console.log(error)
    }
}

export {
    registrarTicket
}