'use strict';

import {SubjectFilterView} from "./subjectFilterView.js";

export class SubjectFilter {
    constructor(model) {
        this.model = model;

        this.onClick = null;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new SubjectFilterView(document.querySelector('#subjectsFilters'));
        this.view.onclick = this.onClick;
        this.render();
    }

    render() {
        this.view.render();

        this.model.downloadSubjects().then(result => {
            this.model.subjects = result;
            this.renderFilters();
        });
    }

    renderFilters() {
        this.view.removeEventListeners();
        const subjects = this.model.subjects;

        if (!subjects) {
            return;
        }

        subjects.forEach(subject => {
            this.view.insertFilter(subject.name);
        });
        this.view.addEventListeners();
    }

    set onclick(onclick) {
        this.onClick = onclick;
    }
}