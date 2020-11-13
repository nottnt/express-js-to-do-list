const express = require('express')
const app = express()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const controllers = require('./controllers/to-do-list')
const bodyParser = require('body-parser')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'To Do List',
            description: 'API Service To Do List',
            servers: ['http://localhost:3000'],
        },

    },
    apis: ['server.js', './controllers/*.js'],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
controllers.setup(app)

app.listen(3000, () => {
    console.log(
        'Application is running on http://localhost:3001 and swagger doc on http://localhost:3001/api-docs'
    )
})
