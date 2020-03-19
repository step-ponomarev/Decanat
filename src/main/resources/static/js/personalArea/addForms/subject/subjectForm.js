'use strict';

import {SubjectFormView} from "./subjectFormView.js";

export class SubjectForm {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const form = frm.target;

            const subjName = form.subjectname.value;

            const subject = {
                id: null,
                name: subjName
            };

            this.model.postSubject(subject);

            form.subjectname.value = '';

            alert(`Subject "${subjName}" was added.`);

            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new SubjectFormView(document.querySelector('#personalAreaContent'));
        this.view.onsubmit = this.onSubmit;
        this.render();
    }

    render() {
        this.view.render();
    }
}