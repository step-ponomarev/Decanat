'use strict';

export class GroupFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Group
          </div>
          <form class="editblock__form" id="addGroupForm">
            <input name="groupname" type="text" placeholder="group name" required />
            <input type="submit" value="add" class="from__submitBtn"/>
          </form>
        </div>`;

        this.element = element;

        this.submitForm = null;
        this._onsubmit = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListeners();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListeners();
    }

    addEventListeners() {
        this.submitForm = document.querySelector('#addGroupForm');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    removeEventListeners() {
        if (this.submitForm === null) {
            return;
        }

        this.submitForm.removeEventListener('submit', this._onsubmit);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }
}