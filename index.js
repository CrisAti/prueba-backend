import express from "express";
import cors from "cors";
import { EnrutadorArticulo } from "./rutas/rutas.js";
import { Modelo } from "./modelo/modelo.js";

const app = express ();
app.use(express.json());
const PORT=3030;
app.use(cors({origin:"*"}));
app.use('/modelo',EnrutadorArticulo(Modelo));
app.listen(PORT,()=>{
    console.log("Servidor a la espera");
})