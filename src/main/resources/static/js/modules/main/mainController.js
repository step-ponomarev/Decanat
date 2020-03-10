'use strict';

import {SubjectsView} from '../subjects/subjectsView.js';
import {SubjectsController} from '../subjects/subjectsController.js';
import {navController} from "../../main.js";
import {SubjectsModel} from "../subjects/subjectsModel.js";

export class MainController {
    constructor(model, view) {
        this.openProfile = this.openProfile.bind(this);

        this.m_view = view;

        this.m_view.profileLinkAction = (event) => {
            this.openProfile();

            event.preventDefault();

            this.m_view.removeListeners();
        };

        this.m_model = model;

    }

    start() {
        this.m_view.render();
    }

    openProfile() {
        let profileView = new SubjectsView(document.querySelector('#application'));

        navController.choose('subjectsLink');

        let profileController = new SubjectsController(new SubjectsModel(), profileView);

        let main = document.querySelector('#greeting');
        this.m_view.element.removeChild(main);

        profileController.start();
    }

}

