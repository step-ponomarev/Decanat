import {NavView} from './navView.js';

export class Nav {
    constructor(model) {
        this._model = model;

        this.onSubmitLogin = null;
    }

    start() {
        this.view = new NavView(document.querySelector("#nav"));
        this.view.onSubmitLogin = this.onSubmitLogin;

        if (this._model.user !== null) {
            this.view.user = this._model.user.username;
        }

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

    set onLogin(onsubmit) {
        this.onSubmitLogin = onsubmit;
    }
}