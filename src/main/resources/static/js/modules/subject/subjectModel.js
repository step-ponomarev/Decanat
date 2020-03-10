"use strict";

import {Http} from "../http.js";

export class SubjectModel {
    constructor() {
        this.m_marks = null;
    }

    getMarksById(id, render) {
        const getMark = (mark) => {
            this.m_marks = mark;
            render(mark);
        };

        Http.get(`/mark/${id}`, getMark);
    }

    get currentMarks() {
        return this.m_marks;
    }
}