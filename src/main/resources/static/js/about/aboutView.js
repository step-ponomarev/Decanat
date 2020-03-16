'use strict';

export class AboutView {
    constructor(element) {
        this.template =
            `<div class="about">
                <div class="about__content" id="about_content"> </div>
             </div>`;
        this._element = element;

        this.render = this.render.bind(this);
    }

    render() {
        this._element.insertAdjacentHTML('beforeend', this.template);
    }
}