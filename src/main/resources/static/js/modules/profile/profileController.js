"use strict";
export class ProfileController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.m_view.personListView.onchangeListener = (event) => {
            this.onChange();
            event.preventDefault();
        };

        this.m_view.personFormView.onclickListener = (event) => {
            this.onSubmit();
            event.preventDefault();
        };
    }

    start() {
        this.m_model.getPersonList(this.m_view.render);
    }

    onSubmit(event) {
        let person = {
            id: null,
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            pathername: document.querySelector("#pathername").value,
            group: null,
            type: null
        };

        this.m_model.addPerson(person, this.m_view.personListView.addPerson);
        event.preventDefault();
    }

    onChange(event) {
        console.log('changed');
        event.preventDefault();
    }
}