import UsersController from '../controllers/UsersController';
import Router from 'koa-router';

const usersRouter = new Router();
const usersController = new UsersController();

usersRouter.get('/users/', async (ctx, next) => {
   await usersController.index(ctx);
});
usersRouter.get('/', async (ctx, next) => {
    ctx.body = {message: 'Hi there. ' + process.env.npm_package_version};
});

export default usersRouter;