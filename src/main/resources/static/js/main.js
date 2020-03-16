'use strict';

import {Http} from './http.js';
import {App} from './app/app.js';

export const http = new Http();

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();

    app.start();
});