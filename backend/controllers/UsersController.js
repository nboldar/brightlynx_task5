import User from '../models/User';

export default class UsersController {
    constructor() {
    }

  async  index(ctx) {
        const query = ctx.query;
        const user = new User();
        try {
            let result = await user.getAll(query);
            console.log(result);
            ctx.body = result;
        } catch (error) {
            console.log(error);
            ctx.throw(400, 'INVALID_DATA' + error);
        }
    }
}
