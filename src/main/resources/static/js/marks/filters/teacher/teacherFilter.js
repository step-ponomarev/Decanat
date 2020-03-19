'use strict';

import {TeacherFilterView} from "./teacherFilterView.js";

export class TeacherFilter {
    constructor(model) {
        this.model = model;
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new TeacherFilterView(document.querySelector('#subjectsFilters'));

        this.view.render();
        this.model.downloadTeachers();
        this.renderFilters();
    }

    renderFilters() {
        const teachers = this.model.teachers;

        if (!teachers) {
            return;
        }

        teachers.forEach(teacher => {
            this.view.insertFilter(teacher.firstname + ' ' + teacher.lastname + ' ' + teacher.pathername);
        });
    }
}