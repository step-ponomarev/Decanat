'use strict';

import {SubjectFormView} from "./subjectFormView.js";

export class SubjectForm {
    constructor(model) {
        this.model = model;
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new SubjectFormView(document.querySelector('#personalAreaContent'));
        this.view.render();
    }
}