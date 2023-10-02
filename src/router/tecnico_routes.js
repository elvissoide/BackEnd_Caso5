import { Router } from "express";
import {listarTecnicos, registrarTecnico} from "../controller/tecnico_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();

router.get("/tecnicos",verificarAutenticacion,listarTecnicos);
router.post("/tecnicos/registro", verificarAutenticacion, registrarTecnico);
// router.get("/clientes/:id",verificarAutenticacion, detalleCliente);
// router.put("/clientes/actualizar/:id", verificarAutenticacion,actualizarCliente);
// router.delete("/clientes/eliminar/:id", verificarAutenticacion,eliminarCliente);

export default router;