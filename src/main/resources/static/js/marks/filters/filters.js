'use strict';

import {FiltersView} from "./filtersView.js";
import {GroupFilter} from "./group/groupFilter.js";
import {SubjectFilter} from "./subject/subjectFilter.js";
import {TeacherFilter} from "./teacher/teacherFilter.js";
import {Reset} from "./reset/reset.js";

export class Filters {
    constructor(model) {
        this.model = model;

        this.subjectFilter = new SubjectFilter(this.model);
        this.groupFilter = new GroupFilter(this.model);
        this.teacherFilter = new TeacherFilter(this.model);

        this.reset = new Reset(this.model);

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new FiltersView(document.querySelector('#subjectsFilters'));
        this.view.render();

        this.subjectFilter.start();
        this.groupFilter.start();
        this.teacherFilter.start();

        this.reset.start();
    }

    set onClickSubject(onclick) {
        this.subjectFilter.onclick = onclick;
    }

    set onClickTeacher(onclick) {
        this.teacherFilter.onclick = onclick;
    }

    set onClickGroup(onclick) {
        this.groupFilter.onclick = onclick;
    }

    set onClickReset(onclick) {
        this.reset.onclick = onclick;
    }
}