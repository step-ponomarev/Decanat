"use strict";

import {SubjectController} from "../subject/subjectController.js";
import {SubjectView} from "../subject/subjectView.js";
import {SubjectModel} from "../subject/subjectModel.js";

export class SubjectsController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.selectSubject = this.selectSubject.bind(this);

        this.m_view.subjectsView.click = (event) => {
            this.selectSubject(event);
        };
    }

    start() {
        this.m_view.render();
        this.m_model.getSubjects(this.m_view.renderSubjects);
    }

    selectSubject(event) {
        let subjectId = event.target.id;

        this.m_view.clear();

        let subjectsView = new SubjectView(this.m_view.m_element);
        let subjectController = new SubjectController(new SubjectModel(), subjectsView);

        subjectController.markId = subjectId;
        this.m_model.getSubject(subjectId, subjectController.start);
    }

    //TODO Переместить в решистрацию
   /* onSubmit(event) {
        const form = event.target;

        let person = {
            id: null,
            firstname: form.querySelector("#firstname").value,
            lastname: form.querySelector("#lastname").value,
            pathername: form.querySelector("#pathername").value,
            group: null,
            type: null,
            role: form.querySelector("#selectRoles").options[form.querySelector("#selectRoles").selectedIndex].value
        };

        form.reset();

        this.m_model.addPerson(person, null);
    }*/
}