"use strict";

import {Http} from "../http.js";

export class SubjectsModel {
    constructor() {
        this.m_subjects = null;
        this.m_subject = null;
    }


    getSubjects(render) {
        const setSubjects = (subjects) => {
            this.m_subjects= subjects;

            render(subjects);
        };

        Http.get('/subject/all', setSubjects);
    }

    getSubject(id, render) {

        const setSubject = (subject) => {
            this.m_subject = subject;
            render(subject);
        };

        Http.get(`/subject/${id}`, setSubject);
    }
}