import {NavModel} from './navModel.js';
import {NavView} from './navView.js';

export class Nav {
    constructor() {
        this._model = new NavModel();

        this.onSubmitLogin = frm => {
            const form = frm.target;

            const login = form.login.value;
            const password = form.password.value;

            const user = {
                id: null,
                login: login,
                password: password
            };

            this._model.loginUser(user);
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new NavView(document.querySelector("#app"));
        this.view.user = this._model.user;
        this.view.onSubmitLogin = this.onSubmitLogin;

        this.render();
    }

    render() {
        this.view.render();
    }

    get aboutLink() {
        return document.querySelector('#aboutLink');
    }

    get subjectsLink() {
        return document.querySelector('#subjectsLink');
    }

    get personalAreaLink() {
        return document.querySelector('#personalAreaLink');
    }

    get links() {
        return Array.from(document.getElementsByClassName('nav__item'));
    }

    get model() {
        return this._model;
    }
}