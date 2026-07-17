import express from "express";
import dotenv from "dotenv";

import app from "./app.js";
import pool from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Comprobar la conexión con MySQL
async function testDatabase() {
    try {
        const connection = await pool.getConnection();
        console.log("✅ Conexión con MySQL establecida.");
        connection.release();
    } catch (error) {
        console.error("❌ Error al conectar con MySQL:");
        console.error(error.message);
    }
}

// Iniciar servidor
async function startServer() {
    await testDatabase();

    app.listen(PORT, () => {
        console.log(`🚀 Backend ejecutándose en http://localhost:${PORT}`);
    });
}

startServer();