"use strict";

import {SubjectsView} from "../subjects/subjectsView.js";
import {SubjectsController} from "../subjects/subjectsController.js";
import {navController} from "../../main.js";

export class SubjectController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.m_marks = null;

        this.m_view.sortForm.onchange = (event) => {
            const id = this.m_view.personTable.getElementsByTagName('tr')[0].id;

            this.m_model.getMarks(id, this.getMarks);

            const select = event.target;

            const sortMode = select.options[select.selectedIndex].value;

            if (sortMode === 'highLow') {
                this.m_marks.sort((a, b) => {
                    if (a > b) {
                        return 1;
                    }

                    if (a < b) {
                        return -1;
                    }

                    return 0;
                });
            } else if (sortMode === 'lowHigh') {
                this.m_marks.sort((a, b) => {
                    if (a > b) {
                        return 1;
                    }

                    if (a < b) {
                        return -1;
                    }

                    return 0;
                });
            }

            this.m_view.render(this.m_marks);
        };

        this.start = this.start.bind(this);
        this.getMarks = this.getMarks.bind(this);
    }

    start(subject) {
        this.setGreetingToView(subject);

        this.m_model.getMarksById(subject.id, this.m_view.render);
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

    getMarks(marks) {
        this.m_marks = marks;
    }
}