'use strict';

export class MainView {
    constructor(element) {
        this.m_template =
            `<div class="mx-auto"id="greeting' ">
               <h1 id="personalGreeting">Hello, guest(authorisation wasn't finished)</h1>
               This simple SPA application is created as course project of 'Object Oriented Programming in Java'     
            </div>`;

        this.m_profileLink = null;
        this.m_element = element;
        this.m_navbar = this.m_element.querySelector('#navBar');
        this.render = this.render.bind(this);
    }

    render() {
        this.removeListeners();
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);
        this.addListeners();

    }

    addListeners() {
        let profileButton = this.m_navbar.querySelector('#profileLink');

        profileButton.addEventListener('click', this.m_profileLink, false);
    }

    removeListeners() {
        let profileButton = this.m_navbar.querySelector('#profileLink');

        if (profileButton) {
            profileButton.removeEventListener('click', this.m_profileLink, false);
        }
    }

    set profileLinkAction(action) {
        this.m_profileLink = action;
    }
}