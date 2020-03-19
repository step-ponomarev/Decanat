'use strict';

import {PersonFormView} from "./personFormView.js";

export class PersonForm {
    constructor(model) {
        this.model = model;
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new PersonFormView(document.querySelector('#personalAreaContent'));
        this.view.render();
    }
}