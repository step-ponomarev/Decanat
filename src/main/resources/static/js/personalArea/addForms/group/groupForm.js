'use strict';

import {GroupFormView} from "./groupFormView.js";

export class GroupForm {
    constructor(model) {
        this.model = model;
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new GroupFormView(document.querySelector('#personalAreaContent'));
        this.view.render();
    }
}