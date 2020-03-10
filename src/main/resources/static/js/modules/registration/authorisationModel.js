"use strict";

import {Http} from "../http.js";

export class AuthorisationModel {
    getPersonList(render) {
        Http.get('/person/all', render);
    }

    addPerson(person, render) {
        Http.post('/person', person, render)
    }
}