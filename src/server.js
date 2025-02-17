import express from "express";
import cors from "cors";
import { PORT } from "./config/variables.js";
import { connectDB } from "./config/Database.js";
// Inicialización

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Rutas
app.get("/", (req, res) => {
    res.send("API de BookDise funcionando 🚀");
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));