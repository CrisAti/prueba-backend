import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb://localhost:27017");
     console.log ("conectado correctamente al mongo");

   }
    catch (e){
        console.log(e)
    }
}