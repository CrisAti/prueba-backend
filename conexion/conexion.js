import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb+srv://daniati:1234@clustertest.o2jt8.mongodb.net/");
     console.log ("conectado correctamente al mongo");

   }
    catch (e){
        console.log(e)
    }
}
