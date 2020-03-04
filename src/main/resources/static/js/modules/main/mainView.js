'use strict';

export class MainView {
    constructor(element) {
        this.m_template =
            `<div class="mx-auto text-center" id="greeting">
               <h1 id="personalGreeting">Hello, guest(authorisation wasn't finished)</h1>
               This simple SPA application is created as course project of 'Object Oriented Programming in Java'
               <img src="pic/stepan.png" class="rounded float-right" alt="Author" height="400" width="200">
            </div>`;

        this.m_profileLink = null;
        this.m_element = element;
        this.m_navbar = document.querySelector('#navBar');

        this.render = this.render.bind(this);
        this.removeListeners = this.removeListeners.bind(this);
        this.addListeners = this.addListeners.bind(this);
    }

    render() {
        this.m_element.innerHTML = '';
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

    get element() {
        return this.m_element;
    }
}