'use strict';

export class SubjectFilterView {
    constructor(element) {
        this.template =
            `<div class="filter" id="subjectFilter">
              <input type="button" value="Subject" class="filters__btn">
              <div class="filters__dropdownContent" id="subjectFilterContent">
              </div>
            </div>`;
        this.aFilter = (filter) => `<a>${filter}</a>`;
        this._element = element;

        this.render = this.render.bind(this);
        this.insertFilter = this.insertFilter.bind(this);
    }

    render() {
        this._element.insertAdjacentHTML('beforeend', this.template);
    }

    insertFilter(filter) {
        const filterContent = document.querySelector('#subjectFilterContent');

        filterContent.insertAdjacentHTML('beforeend', this.aFilter(filter));
    }
}