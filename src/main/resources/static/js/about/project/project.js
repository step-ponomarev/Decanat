'use strict';

import {ProjectView} from "./projectView.js";

export class Project {
    constructor() {
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new ProjectView(document.querySelector('#about_content'));
        this.view.render();
    }
}