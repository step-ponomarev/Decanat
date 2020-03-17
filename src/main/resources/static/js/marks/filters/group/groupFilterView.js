'use strict';

export class GroupFilterView {
    constructor(element) {
        this.template = `<div class="filter" id="groupFilter">
              <input type="button" value="Group" class="filters__btn">
              <div class="filters__dropdownContent" id="groupFilterContent"></div>
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
        const filterContent = document.querySelector('#groupFilterContent');
        filterContent.insertAdjacentHTML('beforeend', this.aFilter(filter));
    }
}