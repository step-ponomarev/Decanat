"use strict";

import {Http} from "../http.js";

export class SubjectModel {
    constructor() {
        this.m_mark = null;
    }

    getMarksById(id, render) {
        const getMark = (mark) => {
            this.m_mark = mark;
            render(mark);
        };

        Http.get(`/mark/${id}`, getMark);
    }
}