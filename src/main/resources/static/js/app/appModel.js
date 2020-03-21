'use strict';

import {Http} from "../http.js";

export class AppModel {
    constructor() {
        this._user = null;

        this.loginUser = this.loginUser.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    loginUser(user) {
        Http.post('user/login', user, this.setUser, false);
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }

    setUser(user) {
        this._user = user;
    }
}