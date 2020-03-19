'use strict';

import {GroupFilterView} from "./groupFilterView.js";

export class GroupFilter {
    constructor(model) {
        this.model = model;
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new GroupFilterView(document.querySelector('#subjectsFilters'));

        this.view.render();
        this.model.downloadGroups();
        this.renderFilters();
    }

    renderFilters() {
        const groups = this.model.groups;

        if (!groups) {
            return;
        }

        groups.forEach(group => {
           this.view.insertFilter(group.name);
        });
    }
}