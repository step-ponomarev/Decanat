'use strict';

import {AboutView} from "./aboutView.js";
import {Project} from './project/project.js';
import {Team} from './team/team.js';

export class About {
    constructor() {
        this.view = new AboutView(document.querySelector('#container'));
        this.project = new Project();
        this.team = new Team();

        this.start = this.start.bind(this);
    }

    start() {
        this.view.render();
        this.project.start();
        this.team.start();
    }
}