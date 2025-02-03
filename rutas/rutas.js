import {Router} from "express";
import { Controlador } from "../controlador/controlador.js";

export const EnrutadorArticulo =(modelo) =>{
    
const controlador=new Controlador(modelo);
const rutas=Router();


rutas.get('/',controlador.obtenerTodos)

rutas.get('/:id',controlador.obtenerPorId)

rutas.delete('/:id',controlador.borrar)
  
rutas.post('/',controlador.crear)

rutas.put('/:id',controlador.actualizar)

return rutas;
}