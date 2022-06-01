import { urlencoded } from 'express'
import { createExpressServer } from 'routing-controllers'

var path = require('path');
const middlewares = path.resolve(__dirname, '..', 'api', 'middlewares','*.ts')
const controllers = path.resolve(__dirname, '..', 'api','routes', '*.ts')

const app = createExpressServer({
    defaultErrorHandler: false,
    controllers: [controllers],
    middlewares: [middlewares]
})

export const server = async () => {
    app.use(urlencoded({ extended: true }))
    return app
}


