'use strict';

export class ResetView {
    constructor(element) {
        this.template =
            `<input type="button" id="resetBtn" value="Reset" class="resetBtn">`;

        this.element = element;

        this.onClick = null;
        this.resetButton = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListeners();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListeners();
    }

    removeEventListeners() {
        if (this.resetButton === null) {
            return;
        }

        this.resetButton.removeEventListener('click', this.onClick);
    }

    addEventListeners() {
        this.resetButton = this.element.querySelector('#resetBtn');

        this.resetButton.addEventListener('click', this.onClick);
    }

    set onclick(onclick) {
        this.onClick = onclick;
    }
}