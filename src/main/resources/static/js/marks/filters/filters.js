'use strict';

import {FiltersView} from "./filtersView.js";
import {GroupFilter} from "./group/groupFilter.js";
import {SubjectFilter} from "./subject/subjectFilter.js";
import {TeacherFilter} from "./teacher/teacherFilter.js";
import {FiltersModel} from "./filtersModel.js";

export class Filters {
    constructor() {
        this.model = new FiltersModel();

        this.subjectFilter = new SubjectFilter(this.model);
        this.groupFilter = new GroupFilter(this.model);
        this.teacherFilter = new TeacherFilter(this.model);

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new FiltersView(document.querySelector('#subjectsFilters'));
        this.view.render();

        this.subjectFilter.start();
        this.groupFilter.start();
        this.teacherFilter.start();
    }
}