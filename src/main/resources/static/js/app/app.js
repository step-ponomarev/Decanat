'use strict';

import {Nav} from '../nav/nav.js';
import {AppModel} from "./appModel.js";
import {About} from '../about/about.js';
import {Marks} from '../marks/marks.js';
import {PersonalArea} from "../personalArea/personalArea.js";

export class App {
    constructor() {
        this.element = document.querySelector('#app');
        this.model = new AppModel();
        this.nav = new Nav(this.model);
        this.marks = new Marks();
        this.about = new About();
        this.personalArea = new PersonalArea();

        this.onSubmitLogin = frm => {
            const form = frm.target;

            const username = form.username.value;
            const password = form.password.value;

            let user = {
                id: null,
                username: username,
                password: password
            };

            this.model.loginUser(user);

            this.nav.start();
            this.addActions();

            frm.preventDefault();
        };

        this.openSubjects = (event) => {
            this.marks.start();
        };

        this.openAbout = (event) => {
            this.about.start();
        };

        this.nav.onSubmitLogin = this.onSubmitLogin;
    }

    start() {
        this.nav.start();
        this.about.start();
        this.addActions();
    }

    addActions() {
        const links = this.nav.links;

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                const currentLink = event.target;

                links.forEach(link => {
                    if (link.id ===  currentLink.id) {
                        link.classList.add('nav__item__active');
                    } else {
                        link.classList.remove('nav__item__active');
                    }
                });

            });
        });

        const subjectsLink = this.nav.subjectsLink;
        subjectsLink.addEventListener('click', this.openSubjects);

        const aboutLink = this.nav.aboutLink;
        aboutLink.addEventListener('click', this.openAbout);

        const personalAreaLink = this.nav.personalAreaLink;

        personalAreaLink.addEventListener('click', (event) => {
            this.personalArea.start();
            this.nav.links.forEach(link => {
                link.classList.remove('nav__item__active');
            })

        });
    }
}