import { Router } from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";
import { registrarTicket } from "../controller/ticket_controller.js";

const router = Router();

// router.get("/clientes",verificarAutenticacion,listarClientes);
router.post("/tickets/registro", verificarAutenticacion, registrarTicket);
// router.get("/clientes/:id",verificarAutenticacion, detalleCliente);
// router.put("/clientes/actualizar/:id", verificarAutenticacion,actualizarCliente);
// router.delete("/clientes/eliminar/:id", verificarAutenticacion,eliminarCliente);

export default router;