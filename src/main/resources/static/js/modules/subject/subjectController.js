"use strict";

import {ProfileView} from "../profile/profileView.js";
import {ProfileController} from "../profile/profileController.js";

export class SubjectController {
    constructor(model, view) {
        this.m_model = model;
        this.m_view = view;
    }

    start() {
        this.m_view.render();
        this.addActions();
    }

    addActions() {
        let profileButton = document.querySelector('#profileLink');

        profileButton.addEventListener('click', () => {
            //TODO Доделать очистку
            this.m_view.m_element.innerHTML = '';
            let profileView = new ProfileView(document.querySelector('#application'));

            let profileController = new ProfileController(this.m_model, profileView);

            profileController.start();
        }, false);
    }
}