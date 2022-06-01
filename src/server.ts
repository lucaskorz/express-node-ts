import 'reflect-metadata';
import { server } from './configs/setup-app';

server().then(app => app.listen(3333, () => console.log('Aplicação rodando na porta 3333')))

