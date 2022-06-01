import express, { Express } from 'express'
import { useExpressServer } from 'routing-controllers'

var path = require('path');
const middlewares = path.resolve(__dirname, '..', 'api', 'middlewares','*.ts')
const controllers = path.resolve(__dirname, '..', 'api','routes', '*.ts')

export const setupApp = (): Express => {
    const app = express()

    useExpressServer(app, {
        routePrefix: 'api',
        controllers: [controllers],
        middlewares: [middlewares]
    })

    return app;
}