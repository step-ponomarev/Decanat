'use strict';

export class UpdateFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Update
          </div>
          <form class="editblock__form" id="updateForm">
            <select id="updateSelect" name="updateSelect"></select>
            
            <select name="selectRole">
                <option id="student">STUDENT</option>
                <option id="teacher">TEACHER</option>
            </select>            
             
            <input type="submit" value="Update" class="from__submitBtn" />
          </form>
        </div>`;

        this.element = element;

        this.submitForm = null
        this.peopleSelect = null

        this.addPerson = this.addPerson.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListener();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListener();
    }

    addEventListener() {
        this.submitForm = document.querySelector('#updateForm');
        this.peopleSelect = document.querySelector('#peopleSelect');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    removeEventListener() {
        if (this.submitForm === null || this.peopleSelect === null) {
            return;
        }

        this.submitForm.removeEventListener('submit', this._onsubmit);
    }

    addPerson(person) {
        const select = document.querySelector("#updateSelect");
        const option =
            `<option value="${person.id}">${person.firstname} ${person.lastname} ${person.pathername}</option>`;

        select.insertAdjacentHTML('beforeend', option);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }

}