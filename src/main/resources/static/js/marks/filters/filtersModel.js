'use strict';

import {Http} from "../../http.js";

export class FiltersModel {
    constructor() {
        this.downloadSubjects = this.downloadSubjects.bind(this);
        this.downloadGroups = this.downloadGroups.bind(this);
        this.downloadTeachers = this.downloadTeachers.bind(this);
        this.setUpSubjects = this.setUpSubjects.bind(this);
        this.setUpGroups = this.setUpGroups.bind(this);
        this.setUpTeachers = this.setUpTeachers.bind(this);
    }

    downloadSubjects() {
        Http.get('subject/all').then(result => this.setUpSubjects(result));
    }

    downloadGroups() {
        Http.get('group/all').then(result => this.setUpGroups(result));
    }

    downloadTeachers() {
        Http.get('person/teachers').then(result => this.setUpTeachers(result));
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

    setUpSubjects(subjects) {
        this._subjects = subjects
    }

    setUpGroups(groups) {
        this._gropus = groups;
    }

    setUpTeachers(teachers) {
        this._teachers = teachers;
    }
}