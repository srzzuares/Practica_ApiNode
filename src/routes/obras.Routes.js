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
 *         idObra: 1
 *         nombreObra: La Soledad
 *         tamanoObra: Mediano 40x80
 *         tecnicaObra: Oleo con acrilico
 *         materialesObra: Pintura, Lienzo
 *         valorEconomicoObra: 1000
 *         nombreAutor: Crystian
 *         telefonoAutor: 7641112222
 *         correoAutor: crys@gmail.com
 */



/**
 *  @swagger
 *  /:
 *  get:
 *      summary: Retorna todas las obras creadas
 *      tags: [User]
 *      responses:
 *          200:
 *              description: Todas las obras creadas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
rooteable.get('/', OCLL.obtenerObra)

/**
 *  @swagger
 *  /obtAct/{idOb}:
 *  get:
 *      summary: Retorna una id de Obra
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idOb
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la obra
 *      responses:
 *          200:
 *              description: Todas las obras creadas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Identificacion no encontrada
 */
rooteable.get('/obtAct/:idOb', OCLL.obtenerOneObra)

/**
 *  @swagger
 *  /crear:
 *      post:
 *          summary: Crear una obra de arte
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: Success created 
 */
rooteable.post('/crear', OCLL.guardarObras)

/**
 *  @swagger
 *  /eliminar/{idOb}:
 *  put:
 *      summary: actualizar una obra
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idOb
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la obra
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Obra actualizada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Identificacion no encontrada
 */
rooteable.put('/actualizar/:idOb', OCLL.actualizaObra)

/**
 *  @swagger
 *  /eliminar/{idOb}:
 *  delete:
 *      summary: Elimina una obra
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: idOb
 *            required: true
 *            schema:
 *                type: string
 *            description: Identificacion de la obra
 *      responses:
 *          200:
 *              description: Obra Eliminada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/User'
 *          400:
 *              description: Identificacion no encontrada
 */
rooteable.delete('/eliminar/:idOb', OCLL.eliminaObra)
module.exports = rooteable;