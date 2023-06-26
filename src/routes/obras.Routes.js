const { Router } = require('express')
const rooteable = Router()
const OCLL = require('../controllers/obrasControllers')

/**
 *  @swagger
 *  components:
 *      schemas:
 *       User:
 *        type: object
 *        properties:
 *         idObra:
 *          type: String
 *          description: Un identificador 
 *         nombreObra:
 *          type: String
 *          description: Nombre de la obra
 *         tamanoObra:
 *          type: String
 *          description: Medidas de la obra
 *         tecnicaObra:
 *          type: String
 *          description: Tipo de tecnica
 *         materialesObra:
 *          type: String
 *          description: materiales que contiene la obra
 *         valorEconomicoObra:
 *          type: Number
 *          description: Costo de la obra o a la venta
 *         nombreAutor:
 *          type: String
 *          description: Nombre del autor de la obra
 *         telefonoAutor:
 *          type: Integer
 *          description: Numero telefonico
 *         correoAutor:
 *          type: String
 *          description: Correo del autor
 *        required:
 *         - idObra
 *         - nombreObra
 *         - nombreAutor
 *         - correoAutor
 *        example:
 *         idObra:1
 *         nombreObra:La Soledad
 *         tamanoObra:Mediano 40x80
 *         tecnicaObra:Oleo con acrilico
 *         materialesObra:Pintura, Lienzo
 *         valorEconomicoObra:1000
 *         nombreAutor:Crystian
 *         telefonoAutor:7641112222
 *         correoAutor:crys@gmail.com
 */





rooteable.get('/', OCLL.obtenerObra)
rooteable.get('/obtAct/:idOb', OCLL.obtenerOneObra)
rooteable.post('/crear', OCLL.guardarObras)
rooteable.put('/actualizar/:idOb', OCLL.actualizaObra)
rooteable.delete('/eliminar/:idOb', OCLL.eliminaObra)
module.exports = rooteable;