'use strict';

export class TeacherFilterView {
    constructor(element) {
        this.template =
            `<div class="filter" id="teacherFilter">
              <input type="button" value="Teacher" class="filters__btn">
              <div class="filters__dropdownContent" id="teacherFilterContent">
                
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
        const filterContent = document.querySelector('#teacherFilterContent');

        filterContent.insertAdjacentHTML('beforeend', this.aFilter(filter));
    }
}