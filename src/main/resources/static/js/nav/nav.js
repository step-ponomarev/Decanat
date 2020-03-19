import {NavModel} from './navModel.js';
import {NavView} from './navView.js';

export class Nav {
    constructor() {
        this.view = new NavView(document.querySelector("#app"));
        this.model = new NavModel();
        this.start = this.start.bind(this);
    }

    start() {
        this.view.user = 'kek';
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
}