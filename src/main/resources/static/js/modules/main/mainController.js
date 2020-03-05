'use strict';

import {ProfileView} from '../profile/profileView.js';
import {ProfileController} from '../profile/profileController.js';

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
        let profileView = new ProfileView(document.querySelector('#application'));

        let profileController = new ProfileController(this.m_model, profileView);

        let main = document.querySelector('#greeting');
        this.m_view.element.removeChild(main);

        profileController.start();
    }

}

