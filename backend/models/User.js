import db from '../db/db';
//const db=require('../db/db');
export default class User {
    constructor(data) {
        if (!data) {
            return;
        }
        this.id = data.id;
        this.name = data.name;
        this.phone = data.phone;
        this.website = data.phone;
    }

    async getAll(request) {

        try {
            return await db('users').select('*');

        } catch (error) {
            console.log(error);
            throw new Error('ERROR');
        }
    }
}

//export {User};