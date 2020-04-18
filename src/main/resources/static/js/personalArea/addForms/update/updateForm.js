'use strict';

import {UpdateFormView} from "./updateFormView.js";
import {Http} from "../../../http.js";

export class UpdateForm {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const from = frm.target;
            const select = from.updateSelect;
            const roleSelect = from.selectRole;

            const person = {
                id: select.options[select.selectedIndex].value,
                firstname: null,
                lastname: null,
                pathername: null,
                role: roleSelect.options[roleSelect.selectedIndex].value,
                type: null,
                group_id: null
            };

            Http.update('person', person);

            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new UpdateFormView(document.querySelector('#personalAreaContent'));
        this.view.onsubmit = this.onSubmit;
        this.render();
    }

    render() {
        this.view.render();
        this.addPeople();
    }

    addPeople() {
        const people = this.model.people;

        people.forEach(person => {
            this.view.addPerson(person);
        });
    }
}