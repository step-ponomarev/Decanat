'use strict';

import {GroupFilterView} from "./groupFilterView.js";

export class GroupFilter {
    constructor(model) {
        this.model = model;
        this.model.downloadGroups();

        this.onClick = null;

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new GroupFilterView(document.querySelector('#subjectsFilters'));

        this.view.onclick = this.onClick;

        this.render();
    }

    render() {
        this.view.render();
        this.renderFilters();
    }

    renderFilters() {
        this.view.removeEventListeners();
        const groups = this.model.groups;

        if (!groups) {
            return;
        }

        groups.forEach(group => {
            this.view.insertFilter(group.name);
        });
        this.view.addEventListeners();
    }

    set onclick(onclick) {
        this.onClick = onclick;
    }
}