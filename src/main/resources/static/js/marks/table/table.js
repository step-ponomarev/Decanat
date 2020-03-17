'use strict';

import {TableView} from "./tableView.js";
import {TableModel} from "./tableModel.js";

export class Table {
    constructor() {
        this.model = new TableModel();
        this.model.downloadMarks();
    }

    start() {
        this.view = new TableView(document.querySelector('#subjectsTable'));
        this.view.render();
        this.renderMarks();
    }

    renderMarks() {
        const marks = this.model.marks;

        marks.forEach(mark => {
            this.view.insertMark(mark);
        });
    }
}