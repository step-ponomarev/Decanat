'use strict';

export class GroupFilterView {
    constructor(element) {
        this.template = `<div class="filter" id="groupFilter">
              <input type="button" value="Group" class="filters__btn" id="groupFilterBtn">
              <div class="filters__dropdownContent" id="groupFilterContent"></div>
            </div>`;
        this.aFilter = (filter) => `<a>${filter}</a>`;
        this._element = element;

        this._onclick = null;
        this.links = null;

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
        const filterContent = document.querySelector('#groupFilterContent');
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
        const filterContent = document.querySelector('#groupFilterContent');

        this.links = Array.from(filterContent.getElementsByTagName('a'));
    }

    set onclick(onclick) {
        this._onclick = onclick;
    }
}