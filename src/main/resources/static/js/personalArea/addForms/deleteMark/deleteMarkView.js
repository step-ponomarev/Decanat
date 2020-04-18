'use strict';

export class DeleteMarkView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Update and Delete
          </div>
          <form class="editblock__form" id="deleteForm">
            <select id="deleteSelect" name="deleteSelect"></select>      
             
            <input type="submit" value="Delete" class="from__submitBtn" />
          </form>
        </div>`;

        this.element = element;

        this.submitForm = null
        this.deleteSelect = null

        this.addMark = this.addMark.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListener();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListener();
    }

    addEventListener() {
        this.submitForm = document.querySelector('#deleteForm');
        this.deleteSelect = document.querySelector('#deleteSelect');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    removeEventListener() {
        if (this.submitForm === null || this.deleteSelect === null) {
            return;
        }

        this.submitForm.removeEventListener('submit', this._onsubmit);
    }

    addMark(mark) {
        const option =
            `<option value="${mark.id}">${mark.subject.name} ${mark.student.firstname} ${mark.student.lastname} ${mark.student.pathername} ${mark.value}</option>`;

        this.deleteSelect.insertAdjacentHTML('beforeend', option);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }

}