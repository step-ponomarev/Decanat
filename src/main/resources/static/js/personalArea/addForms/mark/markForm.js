'use strict';

import {MarkFormView} from "./markFormView.js";

export class MarkForm {
    constructor(model) {
        this.model = model;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new MarkFormView(document.querySelector('#personalAreaContent'));
        this.view.render();
    }
}