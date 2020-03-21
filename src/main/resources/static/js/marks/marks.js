'use strict';

import {MarksView} from "./marksView.js";
import {Table} from "./table/table.js";
import {Filters} from "./filters/filters.js";
import {MarksModel} from "./marksModel.js";

export class Marks {
    constructor() {
        this.model = new MarksModel();

        this.table = new Table(this.model);
        this.filters = new Filters(this.model);

        this.onClickSubject = elem => {
            const link = elem.target;

            this.model.subjectFilter = link.text;

            document.querySelector('#subjectFilterBtn').value = link.text;

            this.table.renderMarks();
        };

        this.onClickTeacher = elem => {
            const link = elem.target;

            this.model.teacherFilter = link.text;

            document.querySelector('#teacherFilterBtn').value = link.text;

            this.table.renderMarks();
        };

        this.onClickGroup = elem => {
            const link = elem.target;

            this.model.groupFilter = link.text;

            document.querySelector('#groupFilterBtn').value = link.text;

            this.table.renderMarks();
        };

        this.onClickReset = elem => {
          this.model.resetFilters();

          this.table.renderMarks();
          this.filters.start();
        };

        this.filters.onClickSubject = this.onClickSubject;
        this.filters.onClickTeacher = this.onClickTeacher;
        this.filters.onClickGroup = this.onClickGroup;
        this.filters.onClickReset = this.onClickReset;

        this.start = this.start.bind(this);
    }

    start() {
        this.prepareModel();
        this.view = new MarksView(document.querySelector('#container'));

        this.view.render();
        this.filters.start();
        this.table.start();
    }

    prepareModel() {
        this.model.resetFilters();
    }
}