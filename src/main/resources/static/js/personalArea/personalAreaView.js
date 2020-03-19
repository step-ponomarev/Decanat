'use strict';

export class PersonalAreaView {
    constructor(element) {
        this.template =
            `<div class="personalArea" id="personalArea">
                <div class="personalArea__content" id="personalAreaContent"></div>
            </div>`;

        this.element = element;
        this.render = this.render.bind(this);
    }

    render() {
        this.element.innerHTML = '';
        this.element.insertAdjacentHTML('beforeend', this.template);
    }
}