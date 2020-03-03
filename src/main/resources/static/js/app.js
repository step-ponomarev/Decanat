"use strict";
import {MainView} from './modules/main/mainView.js';
import {MainController} from './modules/main/mainController.js';

document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("application");

    let view = new MainView(element);

    let controller = new MainController(null, view);

    controller.start();
});
