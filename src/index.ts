import express, {Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
const port = 3000;

// Configurações de aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas 
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(port, () => {
    console.log('Aplicação executando na porta 3000!');
});
