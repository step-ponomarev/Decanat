'use strict';

import {Nav} from '../nav/nav.js';
import {About} from '../about/about.js';

export class App {
    constructor() {
        //this.subjects = new Subjects();
        this.about = new About();
        this.nav = new Nav();
    }

    start() {
        this.nav.start();
        this.about.start();
    }
}