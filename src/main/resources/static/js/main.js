"use strict";
import {MainView} from './modules/main/mainView.js';
import {MainController} from './modules/main/mainController.js';
import {NavController} from "./modules/nav/navController.js";

export const navController = new NavController();

document.addEventListener("DOMContentLoaded", () => {

    navController.start();

    let element = document.getElementById("application");

    // TODO MainModel

    let view = new MainView(element);


    let controller = new MainController(null, view);

    controller.start();
});

