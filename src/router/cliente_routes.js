import { Router } from "express";
import {actualizarCliente, detalleCliente, eliminarCliente, listarClientes, registrarCliente} from "../controller/cliente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();

router.get("/clientes",verificarAutenticacion,listarClientes);
router.post("/clientes/registro", verificarAutenticacion,registrarCliente);
router.get("/clientes/:id",verificarAutenticacion, detalleCliente);
router.put("/clientes/actualizar/:id", verificarAutenticacion,actualizarCliente);
router.delete("/clientes/eliminar/:id", verificarAutenticacion,eliminarCliente);

export default router;