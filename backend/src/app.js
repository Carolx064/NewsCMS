import express from "express";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NewsCMS API funcionando correctamente 🚀"
    });
});

// API
app.use("/api/news", newsRoutes);

export default app;