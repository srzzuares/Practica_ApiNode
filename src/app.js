//Require Packages
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const APP = express()
require('dotenv').config()

//Path
const path = require('path')
//Swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
//Object Swagger
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api-Node JS, Mongo y Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3030"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, './routes/obras.Routes.js')}`
    ]
}
//Midleware
APP.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//Settings
APP.set('PORT', process.env.PORT || 3000)
APP.set('runServer', (req, res) => {
    console.log(`listening on port http://localhost:${APP.get('PORT')}`)
})
//Middlewares
APP.use(cors())
APP.use(express.json())
APP.use(express.urlencoded({extended:false}))
APP.use(morgan('dev'))
APP.use(require('./routes/obras.Routes'))
//Exports
module.exports = APP;