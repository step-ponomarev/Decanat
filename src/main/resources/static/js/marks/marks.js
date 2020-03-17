'use strict';

import {MarksView} from "./marksView.js";
import {Table} from "./table/table.js";
import {Filters} from "./filters/filters.js";

export class Marks {
    constructor() {
        this.view = new MarksView(document.querySelector('#container'));
        this.table = new Table();
        this.filters = new Filters();
        this.start = this.start.bind(this);
    }

    start() {
        this.view.render();
        this.filters.start();
        this.table.start();
    }
}