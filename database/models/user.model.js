import { MainDB } from "../main.db";

export class UserModel {
    static findAll() {
        return MainDB.users
    }

    static find(field, value) {
        return MainDB.users.filter(u => u[field] == value)[0] || null
    }

    static create(user) {
        return !!MainDB.users.push(user)
    }
}
