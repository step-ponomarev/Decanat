'use strict';

export class AddFormsView {
    constructor(element) {
        this.template =
            `<div class="personalArea__title title">Edit</div>`;

        this.element = element;
        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('afterbegin', this.template);
    }
}