import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerUsuarios from './router/usuario_routes.js'
import routerClientes from './router/cliente_routes.js'
import routerTecnicos from './router/tecnico_routes.js'

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.PORT || 3000)
app.use(cors())


// Middlewares 
app.use(express.json())

// Rutas 
app.use('/api',routerUsuarios)
app.use('/api',routerClientes)
app.use('/api',routerTecnicos)

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default app