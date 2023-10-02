import { Router } from "express";
import {actualizarTecnico, detalleTecnico, eliminarTecnico, listarTecnicos, registrarTecnico} from "../controller/tecnico_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();

router.get("/tecnicos",verificarAutenticacion,listarTecnicos);
router.post("/tecnicos/registro", verificarAutenticacion, registrarTecnico);
router.get("/tecnicos/:id",verificarAutenticacion, detalleTecnico);
router.put("/tecnicos/actualizar/:id", verificarAutenticacion,actualizarTecnico);
router.delete("/tecnicos/eliminar/:id", verificarAutenticacion,eliminarTecnico);

export default router;