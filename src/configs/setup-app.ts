import { urlencoded } from 'express'
import { createExpressServer } from 'routing-controllers'

import { TravelController } from '../api/routes/request';

var path = require('path');
const middlewares = path.resolve(__dirname, '..', 'api', 'middlewares','*.ts')
const controllers = path.resolve(__dirname, '..', 'api','routes', '*.ts')

const app = createExpressServer({
    defaultErrorHandler: false,
    controllers: [controllers],
    middlewares: [TravelController]
})

export const server = async () => {
    app.use(urlencoded({ extended: true }))
    return app
}


