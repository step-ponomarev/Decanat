"use strict";

export class ProfileController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.m_view.personFormView.onclickListener = (event) => {
            this.onSubmit(event);
            event.preventDefault();
        };
    }

    start() {
        this.m_model.getPersonList(this.m_view.render);
        this.m_model.getSubjects(this.m_view.renderSubjects);
    }

    onSubmit(event) {
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
    }

    onChange() {
        console.log('changed');
    }
}