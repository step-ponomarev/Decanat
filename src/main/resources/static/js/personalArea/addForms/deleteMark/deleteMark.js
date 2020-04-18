'use strict';

import {DeleteMarkView} from "./deleteMarkView.js";
import {Http} from "../../../http.js";

export class DeleteMark {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const from = frm.target;
            const select = from.deleteSelect;

            const mark = {
                id: select.options[select.selectedIndex].value
            };

            Http.delete('mark', mark);

            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new DeleteMarkView(document.querySelector('#personalAreaContent'));
        this.view.onsubmit = this.onSubmit;
        this.render();
    }

    render() {
        this.view.render();
        this.addMarks();
    }

    addMarks() {
        const marks = this.model.marks;

        marks.forEach(mark => {
            this.view.addMark(mark);
        });
    }
}