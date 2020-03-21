'use strict';

export class FiltersView {
    constructor(element) {
        this.template =
            `<div class="filters__title title">
              Filters
            </div>`;

        this._element = element;

        this.render = this.render.bind(this);
    }


    render() {
        this._element.innerHTML = '';
        this._element.insertAdjacentHTML('beforeend', this.template);
    }

}