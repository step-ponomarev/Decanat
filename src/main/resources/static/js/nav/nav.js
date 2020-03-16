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
}