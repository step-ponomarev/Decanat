'use strict';

import {Http} from "../../http.js";

export class TableModel {
    constructor() {
        this.downloadMarks = this.downloadMarks.bind(this);
        this.setUpMarks = this.setUpMarks.bind(this);
    }

    downloadMarks() {
        Http.get('mark/all', this.setUpMarks, false);
    }

    get marks() {
        return this._marks;
    }

    setUpMarks(marks) {
        this._marks = marks;
    }
}