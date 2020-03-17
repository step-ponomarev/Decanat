'use strict';

import {SubjectFilterView} from "./subjectFilterView.js";

export class SubjectFilter {
    constructor(model) {
        this.model = model;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new SubjectFilterView(document.querySelector('#subjectsFilters'));

        this.view.render();
        this.renderFilters();
    }

    renderFilters() {
        const subjects = this.model.subjects;

        if (!subjects) {
            return;
        }

        subjects.forEach(subject => {
            this.view.insertFilter(subject.name);
        });
    }
}