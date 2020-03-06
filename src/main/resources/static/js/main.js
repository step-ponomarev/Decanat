"use strict";
import {MainView} from './modules/main/mainView.js';
import {MainController} from './modules/main/mainController.js';
import {Model} from "./modules/model.js";
import {NavController} from "./modules/nav/navController.js";

export const navController = new NavController();

document.addEventListener("DOMContentLoaded", () => {

    navController.start();

    let element = document.getElementById("application");

    let view = new MainView(element);

    let model = new Model();

    let controller = new MainController(model, view);

    controller.start();
});

