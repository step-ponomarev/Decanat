"use strict";

class MainController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.view.personListViev.onchangeListener = this.onChange;
        this.view.personFormView.onclickListener = this.onSubmit;
    }

    start() {
        this.model.getPersonList(this.view.render);
    }

    onSubmit() {
        alert('hi!');
        /*let person = {
            id: null,
            firstname: element.querySelector("#firstname").value,
            lastname: element.querySelector("#lastname").value,
            pathername: element.querySelector("#pathername").value,
            group: null,
            type: null
        };

        this.model.addPerson(person);*/
    }

    onChange() {
        console.log('changed');
    }
}