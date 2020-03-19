'use strict';

import {MarkFormView} from "./markFormView.js";

export class MarkForm {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const form = frm.target;

            const students = form.student;
            const studentId = parseInt(students.options[students.selectedIndex].value);

            const subjects = form.subject;
            const subjectId = parseInt(subjects.options[subjects.selectedIndex].value);

            const teachers = form.teacher;
            const teacherId = parseInt(teachers.options[teachers.selectedIndex].value);

            const marks = form.mark;
            const mark = marks.options[marks.selectedIndex].text;

            const newMark = {
                student: this.model.getStudent(studentId),
                subject: this.model.getSubject(subjectId),
                teacher: this.model.getTeacher(teacherId),
                value: mark
            };

            this.model.postMark(newMark);

            alert('Added');
            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new MarkFormView(document.querySelector('#personalAreaContent'));
        this.prepareModel();
        this.setActions();
        this.render();
    }

    setActions() {
        this.view.onsubmit = this.onSubmit;
    }

    render() {
        this.view.render();
        this.addStudents();
        this.addTeachers();
        this.addSubjects();
    }

    prepareModel() {
        this.model.addStudentToViewMethod = this.view.addStudent;
        this.model.addTeacherToViewMethod = this.view.addTeacher;
        this.model.addSubjectToViewMethod = this.view.addSubject;
    }

    addStudents() {
        const students = this.model.students;

        students.forEach(student => {
           this.view.addStudent(student);
        });
    }

    addTeachers() {
        const teachers = this.model.teachers;

        teachers.forEach(teacher => {
            this.view.addTeacher(teacher);
        });
    }

    addSubjects() {
        const subjects = this.model.subjects;

        subjects.forEach(subject => {
            this.view.addSubject(subject);
        });
    }

}