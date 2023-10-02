import { Router } from "express";
import {registrarTecnico} from "../controller/tecnico_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();

// router.get("/clientes",verificarAutenticacion,listarClientes);
router.post("/tecnicos/registro", verificarAutenticacion, registrarTecnico);
// router.get("/clientes/:id",verificarAutenticacion, detalleCliente);
// router.put("/clientes/actualizar/:id", verificarAutenticacion,actualizarCliente);
// router.delete("/clientes/eliminar/:id", verificarAutenticacion,eliminarCliente);

export default router;