"use strict";

import {PersonFormView} from './personFormView.js';
import {ProfileGreeting} from "./profileGreeting.js";
import {SubjectsView} from "./subjectsView.js";

export class ProfileView {
    constructor(element) {
        this.m_element = element;
        this.m_profileGreeting = new ProfileGreeting(this.createChild('greeting'));
        this.m_personFormView = new PersonFormView(this.createChild('formDiv'));
        this.m_profileSubjects = new SubjectsView(this.createChild('subjects'));

        this.render = this.render.bind(this);
        this.renderSubjects = this.renderSubjects.bind(this);
    }

    render(person) {
        this.m_profileGreeting.render();
        this.m_personFormView.render();
    }

    renderSubjects(subjects) {
        this.m_profileSubjects.render(subjects)
    }

    get personFormView() {
        return this.m_personFormView;
    }

    get personListView() {
        return this.m_personListViev;
    }

    createChild(name) {
        let currentDiv = document.createElement('div');

        currentDiv.id = name;

        this.m_element.append(currentDiv);

        return currentDiv;
    }
}
