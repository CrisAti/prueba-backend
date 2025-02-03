export class Controlador {
    constructor(modelo) {
        this.modelo = modelo;
    }

    obtenerTodos = async (req, res) => {
        try {
            const modelo = await this.modelo.obtenerTodos();
            res.json(modelo);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la informacion" });
        }
    };
    obtenerPorId = async (req, res) => {
        const id = req.params.id; 
        try {
            const modelo = await this.modelo.obtenerPorId(id);
            if (modelo) {
                res.json(modelo);
            } else {
                res.status(404).json({ error: "Informacion no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al buscar la informacion" });
        }
    };

    borrar = async (req, res) => {
        const id = req.params.id; // MongoDB ObjectId es una cadena
        try {
            const resultado = await this.modelo.borrar(id);
            if (resultado.deletedCount > 0) {
                res.json({ message: "Infotmacion eliminada con éxito" });
            } else {
                res.status(404).json({ error: "Infotmacion no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la informacion" });
        }
    };

    crear = async (req, res) => {
        const modelo = req.body;
        try {
            const nuevoModelo = await this.modelo.crear(modelo);
            res.status(201).json(nuevoModelo);
        } catch (error) {
            console.error("Error al crear la información:", error);
            res.status(500).json({ error: "Error al crear la informacion" });
        }
    };

    actualizar = async (req, res) => {
        const id = req.params.id; // MongoDB ObjectId es una cadena
        const modelo = req.body;

        if (modelo.error) {
            return res.status(400).json({ error: "Validación de datos incorrecta" });
        }

        try {
            const modeloActualizado = await this.modelo.actualizar(id,modelo);
            if (modeloActualizado) {
                res.json(modeloActualizado);
            } else {
                res.status(404).json({ error: "Informacion no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la informacion" });
        }
    };
}