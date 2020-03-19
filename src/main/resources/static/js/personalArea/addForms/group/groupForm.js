'use strict';

import {GroupFormView} from "./groupFormView.js";

export class GroupForm {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const form = frm.target;

            const groupname = form.groupname.value;

            const group = {
                id: null,
                name: groupname
            };

            this.model.postGroup(group);

            form.groupname.value = '';

            alert(`Group "${group.name}" was added.`);

            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new GroupFormView(document.querySelector('#personalAreaContent'));
        this.view.onsubmit = this.onSubmit;
        this.render();
    }

    render() {
        this.view.render();
    }
}