'use strict';

export class PersonFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            People
          </div>
          <form class="editblock__form" id="addPersonForm">
            <input type="text" name="firstname" placeholder="firstname" required />
            <input type="text" name="lastname" placeholder="lastname" required />
            <input type="text" name="pathername" placeholder="pathername" required />
            <div class="form__select">
              <label for="role">role:</label>
              <select name="role" id="roleSelect">
              </select>
            </div>

            <div class="form__select">
              <label for="group">group:</label>
              <select name="group" id="groupSelect">
              </select>
            </div>
            <input type="submit" value="add" class="from__submitBtn" />
          </form>
        </div>`;

        this.element = element;

        this.submitForm = null;
        this._onsubmit = null;

        this.render = this.render.bind(this);
        this.addRole = this.addRole.bind(this);
        this.addGroup = this.addGroup.bind(this);
    }

    render() {
        this.removeEventListeners();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListeners();
    }

    addRole(role) {
        const roleSelect = document.querySelector('#roleSelect');

        const roleOption = `<option>${role}</option>`;

        roleSelect.insertAdjacentHTML('beforeend', roleOption);
    }

    addGroup(group) {
        const groupSelect = document.querySelector('#groupSelect');

        const groupOption = `<option value="${group.id}">${group.name}</option>`;

        groupSelect.insertAdjacentHTML('beforeend', groupOption);
    }

    addEventListeners() {
        this.submitForm = document.querySelector('#addPersonForm');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    removeEventListeners() {
        if (this.submitForm == null) {
            return;
        }

        this.submitForm.removeEventListener('submit', this._onsubmit);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }
}