"use strict";

import {Http} from './http.js';

export class Model {
    getPersonList(render) {
        Http.get('/person/all', render);
    }

    getSubjects(render) {
        Http.get('/subject/all', render);
    }

    getSubject(id, render) {
        Http.get(`/subject/${id}`, render)
    }

    addPerson(person, render) {
        Http.post('/person', person, render)
    }

    getMarks(id, render) {
        Http.get(`/mark/${id}`, render);
    }
}
