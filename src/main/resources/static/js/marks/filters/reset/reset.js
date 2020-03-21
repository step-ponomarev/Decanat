'use strict';

import {ResetView} from "./resetView.js";

export class Reset {
    constructor(model) {
        this.model = model;

        this.onClick = null;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new ResetView(document.querySelector('#subjectsFilters'));
        this.view.onclick = this.onClick;

        this.render();
    }

    render() {
        this.view.render();
    }

    set onclick(onclick) {
        this.onClick = onclick;
    }
}