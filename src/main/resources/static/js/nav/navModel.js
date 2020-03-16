'use strict';

export class NavModel {
    constructor() {
        this._user = 'kek';
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
}