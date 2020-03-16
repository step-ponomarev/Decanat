'use strict';

export class NavView {
    constructor(element) {
        this.template = `<nav class="nav" id="nav">
        <div class="nav__items">
          <a class="nav__item nav__item__active">
            about
          </a>
          <a class="nav__item">
            subjects
          </a>
        </div>

        <div class="nav__logo"></div>

        <div class="nav__login">
          <a class="nav__username">
            ${this.user}
          </a>
          <a class="nav__loginLink">
            login
          </a>
        </div>
      </nav>`;

        this.element = element;
        this._user = null;

        this.render = this.render.bind(this);
    }

    render() {
        //removeActions;
        this.element.insertAdjacentHTML('beforeend', this.template);
        //addActions;
    }

    set user(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}