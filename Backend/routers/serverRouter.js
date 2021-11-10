const express = require('express');
const serverController = require("../controllers/serverController");
const serverCotizacion = require("../controllers/serverCotizacion");

class ServerRouter {
    constructor() {
        this.router = express.Router();
        this.config();
        this.configcotizacion();
    }

    config() {
        const objServerC = new serverController.default();
        this.router.get("/itemscotizacion", objServerC.getAllItem);
        this.router.get("/itemscotizacion/:id", objServerC.getItem);
        this.router.post("/itemscotizacion", objServerC.registerItem);
        this.router.put("/itemscotizacion", objServerC.updateItem);
        this.router.delete("/itemscotizacion", objServerC.deleteItem);
    }
    configcotizacion() {
        const objServerCot = new serverCotizacion.default();
        this.router.get("/cotizaciones", objServerCot.getAllCotizaciones);
        this.router.get("/cotizaciones/:id", objServerCot.getCotizacion);
        this.router.post("/cotizaciones", objServerCot.registerCotizacion);
        this.router.put("/cotizaciones", objServerCot.updateCotizacion);
        this.router.delete("/cotizaciones", objServerCot.deleteCotizacion);
    }
}

exports.default = ServerRouter;