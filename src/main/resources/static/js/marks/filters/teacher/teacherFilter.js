'use strict';

import {TeacherFilterView} from "./teacherFilterView.js";

export class TeacherFilter {
    constructor(model) {
        this.model = model;

        this.onClick = null;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new TeacherFilterView(document.querySelector('#subjectsFilters'));
        this.view.onclick = this.onClick;
        this.model.downloadTeachers();

        this.render();
    }

    render() {
        this.view.render();
        this.renderFilters();
    }

    renderFilters() {
        this.view.removeEventListeners();
        const teachers = this.model.teachers;
        if (!teachers) {
            return;
        }

        teachers.forEach(teacher => {
            this.view.insertFilter(`${teacher.firstname} ${teacher.lastname} ${teacher.pathername}`);
        });
        this.view.addEventListeners();
    }

    set onclick(onclick) {
        this.onClick = onclick;
    }
}