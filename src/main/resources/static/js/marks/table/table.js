'use strict';

import {TableView} from "./tableView.js";

export class Table {
    constructor(model) {
        this.model = model;
        this.model.downloadMarks();

        this.renderMarks = this.renderMarks.bind(this);
    }

    start() {
        this.view = new TableView(document.querySelector('#subjectsTable'));
        this.render();
    }

    render() {
        this.view.render();

        this.renderMarks();
    }

    renderMarks() {
        const marks = this.model.marksByFilters;

        this.view.clearTable();

        marks.forEach(mark => {
            this.view.insertMark(mark);
        });
    }
}