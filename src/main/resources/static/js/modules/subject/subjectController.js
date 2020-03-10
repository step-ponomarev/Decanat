"use strict";

import {SubjectsView} from "../subjects/subjectsView.js";
import {SubjectsController} from "../subjects/subjectsController.js";
import {navController} from "../../main.js";

export class SubjectController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.m_view.sortForm.onchange = (event) => {
            let marks = this.m_model.currentMarks;

            const select = event.target;

            const sortMode = select.options[select.selectedIndex].value;

            if (sortMode === 'highLow') {
                marks.sort((a, b) => {
                    if (a.value < b.value) {
                        return 1;
                    }

                    if (a.value > b.value) {
                        return -1;
                    }

                    return 0;
                });
            } else if (sortMode === 'lowHigh') {
                marks.sort((a, b) => {
                    if (a.value > b.value) {
                        return 1;
                    }

                    if (a.value < b.value) {
                        return -1;
                    }

                    return 0;
                });
            }

            this.m_view.personTable.element.innerHTML = '';
            this.m_view.personTable.render(marks);
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

    set markId(id) {
        this.m_markId = id;
    }
}