class PersonFormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onChange = this.onChange.bind(this);

        this.view.onchangeListener = this.onChange;
    }

    onChange() {
        console.log('changed');
    }
}

class PersonCreateController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onclickListener = this.onSubmit;

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let person = {
            id: null,
            firstname: this.view.element.querySelector("#firstname").value,
            lastname: this.view.element.querySelector("#lastname").value,
            pathername: this.view.element.querySelector("#pathername").value,
            group: null,
            type: null
        };

        this.model.addPerson(person);
        this.view.render(person);
    }
}

class MainController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    start() {
        this.model.getPersonList(this.view.render);
    }
}