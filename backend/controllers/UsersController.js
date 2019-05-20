import User from '../models/User';

/**
 * класс-контроллер связывает запрос от клиента на предоставление данных по сущностям User, c моделью которая эти данные отдает
 */
export default class UsersController {

  async  index(ctx) {
        const query = ctx.query;
        const user = new User();
        try {
            let result = await user.getAll(query);
            ctx.body = result;
        } catch (error) {
            ctx.throw(400, 'INVALID_DATA' + error);
        }
    }
}
