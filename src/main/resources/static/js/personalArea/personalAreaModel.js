'use strict';

import {Http} from "../http.js";

export class PersonalAreaModel {
    constructor() {
        this.downloadStudents = this.downloadStudents.bind(this);
        this.downloadTeachers = this.downloadTeachers.bind(this);
        this.downloadSubjects = this.downloadSubjects.bind(this);

        this.setStudents = this.setStudents.bind(this);
        this.setTeachers = this.setTeachers.bind(this);
        this.setSubjects = this.setSubjects.bind(this);

        this.postMark = this.postMark.bind(this);

        this.getStudent = this.getStudent.bind(this);
        this.getTeacher = this.getTeacher.bind(this);
        this.getSubject = this.getSubject.bind(this);
    }

    postMark(mark) {
        Http.post('mark', mark, null);
    }


    downloadStudents() {
        Http.get('person/students', this.setStudents);
    }

    downloadTeachers() {
        Http.get('person/teachers', this.setTeachers);
    }

    downloadSubjects() {
        Http.get('subject/all', this.setSubjects);
    }


    setStudents(students) {
        this._students = students;
    }

    setTeachers(teachers) {
        this._teachers = teachers;
    }

    setSubjects(subjects) {
        this._subjects = subjects;
    }

    get students() {
        return this._students;
    }

    get teachers() {
        return this._teachers;
    }

    get subjects() {
        return this._subjects;
    }

    getStudent(id) {
        return this._students.find(student =>
            student.id === id);
    }

    getTeacher(id) {
        return this._teachers.find(teacher =>
            teacher.id === id);

    }

    getSubject(id) {
        return this._subjects.find(subject =>
            subject.id === id);
    }
}