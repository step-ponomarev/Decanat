"use strict";
import {MainView} from './modules/main/mainView.js';
import {MainController} from './modules/main/mainController.js';
import {Model} from "./modules/model.js";

document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("application");

    let view = new MainView(element);

    let model = new Model();

    let controller = new MainController(model, view);

    controller.start();
});

