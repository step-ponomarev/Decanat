'use strict';

import {Http} from "../http.js";

export class MarksModel {
    constructor() {
        // Filters
        this.downloadSubjects = this.downloadSubjects.bind(this);
        this.downloadGroups = this.downloadGroups.bind(this);
        this.downloadTeachers = this.downloadTeachers.bind(this);

        //Table
        this.downloadMarks = this.downloadMarks.bind(this);

        this._subjectFilter = null;
        this._teacherFilter = null;
        this._groupFilter = null;

        this.resetFilters = this.resetFilters.bind(this);
    }

    // Filters
    downloadSubjects() {
        return Http.get('subject/all');
    }

    downloadGroups() {
        return Http.get('group/all');
    }

    downloadTeachers() {
        return Http.get('person/teachers');
    }

    set groups(groups) {
        this._gropus = groups;
    }

    set subjects(subjects) {
        this._subjects = subjects
    }

    set teachers(teachers) {
        this._teachers = teachers;
    }

    get subjects() {
        return this._subjects;
    }

    get groups() {
        return this._gropus;
    }

    get teachers() {
        return this._teachers;
    }

    // Table
    downloadMarks() {
        return Http.get('mark/all');
    }

    get marks() {
        return this._marks;
    }

    set marks(marks) {
        this._marks = marks;
    }

    get marksByFilters() {
        if (this.filtersIsEmpty()) {
            return this._marks;
        }

        let marks = this._marks;

        marks = this.filterByGroup(marks);
        marks = this.filterBySubject(marks);
        marks = this.filterByTeacher(marks);

        return marks;
    }

    filterByGroup(marks) {
        if (this._groupFilter === null) {
            return marks;
        }

        return marks.filter(mark =>
            (mark.student.group != null)
                ? (mark.student.group.name  === this._groupFilter)
                : ('' === this._groupFilter)
        );
    }

    filterBySubject(marks) {
        if (this._subjectFilter === null) {
            return marks;
        }

        return marks.filter(mark => mark.subject.name === this._subjectFilter);
    }

    filterByTeacher(marks) {
        if (this._teacherFilter === null) {
            return marks;
        }

        return marks.filter(mark =>
            `${mark.teacher.firstname} ${mark.teacher.lastname} ${mark.teacher.pathername}` === this._teacherFilter);
    }

    filtersIsEmpty() {
        return ( (this._groupFilter === null) && (this._subjectFilter === null) && (this._teacherFilter === null) );
    }

    set groupFilter(filter) {
        this._groupFilter = filter;
    }

    set subjectFilter(filter) {
        this._subjectFilter = filter;
    }

    set teacherFilter(filter) {
        this._teacherFilter = filter;
    }

    resetFilters() {
        this.groupFilter = null;
        this._subjectFilter = null;
        this._teacherFilter = null;
    }
}