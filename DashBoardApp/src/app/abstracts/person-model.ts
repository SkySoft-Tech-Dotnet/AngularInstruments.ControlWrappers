export class PersonModel {
    username: string;
    login: string;
    password: string;

    public constructor() {
    }
}

PersonModel.prototype.toString = function PersonToString() {
    return 'Username=' + this.username + ' Login=' + this.login + ' Password=' + this.password;
}
