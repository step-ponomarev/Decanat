"use strict";

export class NavController {

    constructor() {
        this.m_nav = document.getElementById("#navBar");
        this.m_buttons = document.getElementsByTagName("li");

        this.choose = this.choose.bind(this);
        this.start = this.start.bind(this);
    }

    choose(id) {
        for (let elem of this.m_buttons) {
            if (elem.id === id) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        }
    }

    start() {
        this.choose('homeLink');
    }
}