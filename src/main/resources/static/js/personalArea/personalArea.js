'use strict';

import {AddForms} from "./addForms/addForms.js";
import {PersonalAreaModel} from "./personalAreaModel.js";
import {PersonalAreaView} from "./personalAreaView.js";

export class PersonalArea {
    constructor() {
        this.model = new PersonalAreaModel();
        this.model.downloadStudents();
        this.model.downloadTeachers();
        this.model.downloadSubjects();

        this.view = new PersonalAreaView(document.querySelector('#container'));
        this.addForms = new AddForms(this.model);

        this.start = this.start.bind(this);
    }

    start() {
        this.view.render();
        this.addForms.start();
    }
}