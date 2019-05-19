'use strict';
import Koa from 'koa';
import usersRouter from './routes/users';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';

const app = new Koa();

app.use(bodyParser({enableTypes: ['json']}));
app.use(usersRouter.routes());
app.use(cors({origin: '*',}));
export default app;