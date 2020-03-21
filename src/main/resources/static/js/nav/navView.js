'use strict';

export class NavView {
    constructor(element) {
        this.template =
            `<nav class="nav" id="nav">
                <div class="nav__items">
                    <a class="nav__item nav__item__active" id="aboutLink">
                        about
                    </a>
                    <a class="nav__item" id="subjectsLink">
                        marks
                    </a>
                </div>
                <div class="nav__logo"></div>
                     <div class="nav__login">
                        <a class="nav__username" id="personalAreaLink" hidden> </a>
                        <a class="nav__loginLink" id="loginLink">
                            login
                            <div class="loginLink__dropDown">
                                <form class="loginForm" id="loginForm">
                                    <input name="login" type="text" placeholder="login" required/>
                                    <input name="password" type="password" placeholder="password" required />
                                    <input type="submit" value="login" class="loginForm__submit" />
                                </form>
                            </div>
                        </a>
                    </div>
            </nav>`;

        this.element = element;
        this._user = null;
        this.loginForm = null;
        this.loginSubmit = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListeners();
        this.element.insertAdjacentHTML('afterbegin', this.template);
        this.addUser();
        this.addEventListeners();
    }

    removeEventListeners() {
        if (this.loginForm === null) {
            return;
        }

        this.loginForm.removeEventListener('submit', this.loginSubmit);
    }

    addEventListeners() {
        this.loginForm = document.querySelector('#loginForm');

        this.loginForm.addEventListener('submit', this.loginSubmit);
    }

    addUser() {
        if (this._user == null) {
            return;
        }

        const userLink = document.querySelector('#personalAreaLink');

        userLink.insertAdjacentHTML('beforeend', `${this._user}`);
        userLink.hidden = false;
    }

    set user(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }

    set onSubmitLogin(onsubmit) {
        this.loginSubmit = onsubmit;
    }
}