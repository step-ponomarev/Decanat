'use strict';

import {Http} from "../http.js";

export class NavModel {
    constructor() {
        this._user = null;
    }

    loginUser(user) {
        Http.post('user/login', user, this.user, false)
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
}