'use strict';

export class MarksView {
    constructor(element) {
        this.template =
            `<div class="subjects">
          <div class="subjects__filters" id="subjectsFilters"></div>
          <div class="subjects__table" id="subjectsTable"></div>
        </div>`;

        this._element = element;
        this.render = this.render.bind(this);
    }

    render() {
        this._element.innerHTML = '';
        this._element.insertAdjacentHTML('beforeend', this.template);
    }
}