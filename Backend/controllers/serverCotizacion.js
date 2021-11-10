const cotizacion = require('../models/tbl_cotizaciones');

class ServerCotizacion {
    constructor() {}

    registerCotizacion(req, res) {
        cotizacion.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    updateCotizacion(req, res) {
        let {
            id,
            cotizacionId,
            clienteId,
            proyecto,
            contenido,
            fecha,
            ciudad,
            proponenteId,
            activo
        } = req.body;

        let obj = {
            cotizacionId,
            clienteId,
            proyecto,
            contenido,
            fecha,
            ciudad,
            proponenteId,
            activo
        };
        cotizacion.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteCotizacion(req, res) {
        let {
            id
        } = req.body;
        cotizacion.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getCotizacion(req, res) {
        let id = req.params.id;
        cotizacion.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getAllCotizaciones(req, res) {
        cotizacion.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerCotizacion;