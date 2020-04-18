'use strict';

import {SubjectForm} from "./subject/subjectForm.js";
import {PersonForm} from "./person/personForm.js";
import {MarkForm} from "./mark/markForm.js";
import {AddFormsView} from "./addFormsView.js";
import {GroupForm} from "./group/groupForm.js";
import {UpdateForm} from "./update/updateForm.js";
import {DeleteMark} from "./deleteMark/deleteMark.js";

export class AddForms {
    constructor(model) {
        this.model = model;
        this.personForm = new PersonForm(this.model);
        this.markForm = new MarkForm(this.model);
        this.subjectForm = new SubjectForm(this.model);
        this.groupForm = new GroupForm(this.model);
        this.updateForm = new UpdateForm(this.model);
        this.deleteForm = new DeleteMark(this.model);

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new AddFormsView(document.querySelector('#personalArea'));
        this.view.render();
        this.personForm.start();
        this.markForm.start();
        this.subjectForm.start();
        this.groupForm.start();
        this.updateForm.start();
        this.deleteForm.start();
    }
}