'use strict';

import {TeamView} from './teamView.js';

export class Team {
    constructor() {
        this.start = this.start.bind(this);
    }

    start() {
        this.view = new TeamView(document.querySelector('#container'));
        this.view.render();
    }
}