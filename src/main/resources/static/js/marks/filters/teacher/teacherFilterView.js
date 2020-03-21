'use strict';

export class TeacherFilterView {
    constructor(element) {
        this.template =
            `<div class="filter" id="teacherFilter">
              <input type="button" value="Teacher" class="filters__btn" id="teacherFilterBtn">
              <div class="filters__dropdownContent" id="teacherFilterContent">
                
              </div>
            </div>`;
        this.aFilter = (filter) => `<a>${filter}</a>`;
        this._element = element;

        this.links = null;
        this._onclick = null;

        this.render = this.render.bind(this);
        this.insertFilter = this.insertFilter.bind(this);
        this.setUpLinks = this.setUpLinks.bind(this);
        this.addEventListeners = this.addEventListeners.bind(this);
        this.removeEventListeners = this.removeEventListeners.bind(this);
    }

    render() {
        this._element.insertAdjacentHTML('beforeend', this.template);
    }

    insertFilter(filter) {
        const filterContent = document.querySelector('#teacherFilterContent');

        filterContent.insertAdjacentHTML('beforeend', this.aFilter(filter));
    }

    removeEventListeners() {
        if (this.links === null) {
            return;
        }

        this.links.forEach(link => {
            link.removeEventListener('click', this._onclick);
        });
    }

    addEventListeners() {
        this.setUpLinks();

        this.links.forEach(link => {
            link.addEventListener('click', this._onclick);
        });
    }

    setUpLinks() {
        const filterContent = document.querySelector('#teacherFilterContent');

        this.links = Array.from(filterContent.getElementsByTagName('a'));
    }

    set onclick(onclick) {
        this._onclick = onclick;
    }
}