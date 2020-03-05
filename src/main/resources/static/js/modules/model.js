"use strict";

import {Http} from './http.js';

export class Model {
    getPersonList(render) {
        Http.get('/profile', render);
    }

    getSubjects(render) {
        Http.get('/profile/subjects', render);
    }

    addPerson(person, render) {
        Http.post('/profile', person, render)
    }
}
