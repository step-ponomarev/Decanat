"use strict";

import {ProfileGreeting} from "./profileGreeting.js";
import {SubjectsView} from "./subjectsView.js";

export class ProfileView {
    constructor(element) {
        this.m_element = element;
        this.m_profileGreeting = new ProfileGreeting(this.createChild('greeting'));
        this.m_profileSubjects = new SubjectsView(this.createChild('subjects'));

        this.render = this.render.bind(this);
        this.renderSubjects = this.renderSubjects.bind(this);
    }

    render() {
        this.m_profileGreeting.render();
    }

    clear() {
        this.m_profileSubjects.removeActionListeners();

        this.m_element.innerHTML = '';
    }

    renderSubjects(subjects) {
        this.m_profileSubjects.render(subjects)
    }

    get subjectsView() {
        return this.m_profileSubjects;
    }

    createChild(name) {
        let currentDiv = document.createElement('div');

        currentDiv.id = name;

        this.m_element.append(currentDiv);

        return currentDiv;
    }
}
