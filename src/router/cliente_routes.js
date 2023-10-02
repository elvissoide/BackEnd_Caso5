import { Router } from "express";
import {listarClientes, registrarCliente} from "../controller/cliente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();

router.get("/clientes",verificarAutenticacion,listarClientes);
router.post("/clientes/registro", verificarAutenticacion,registrarCliente);

export default router;