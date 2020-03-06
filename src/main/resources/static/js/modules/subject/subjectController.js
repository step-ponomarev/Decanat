"use strict";

import {SubjectsView} from "../profile/subjectsView.js";
import {SubjectsController} from "../profile/subjectsController.js";
import {navController} from "../../main.js";

export class SubjectController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.start = this.start.bind(this);
    }

    start(subject) {
        this.setGreetingToView(subject);

        this.m_model.getMarks(subject.id, this.m_view.render);
        this.addActions();
    }

    setGreetingToView(subject) {
        this.m_view.greeting =
            `<div class="text-center">
                ${subject.name}
            </div>`;
    }

    addActions() {
        let profileButton = document.querySelector('#subjectsLink');

        profileButton.addEventListener('click', () => {

            navController.choose('subjectsLink');

            //TODO Доделать очистку
            this.m_view.m_element.innerHTML = '';
            let profileView = new SubjectsView(document.querySelector('#application'));

            let profileController = new SubjectsController(this.m_model, profileView);

            profileController.start();
        }, false);
    }
}