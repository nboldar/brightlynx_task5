'use strict';
import Koa from 'koa';
import usersRouter from './routes/users';
import bodyParser from 'koa-bodyparser';

/**
 * инициация приложения
 * @type {Application<any, {}>}
 */

const app = new Koa();

app.use(bodyParser({enableTypes: ['json']}));
app.use(usersRouter.routes());

export default app;