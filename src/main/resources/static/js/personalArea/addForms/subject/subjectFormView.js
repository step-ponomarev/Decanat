'use strict';

export class SubjectFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Subject
          </div>
          <form class="editblock__form" id="addSubjectForm">
            <input name="subjectname" type="text" placeholder="subject name" required />
            <input type="submit" value="add" class="from__submitBtn" />
          </form>
        </div>`;

        this.element = element;

        this.submitForm = null

        this.render = this.render.bind(this);
    }

    render() {
        this.removeEventListener();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListener();
    }

    addEventListener() {
        this.submitForm = document.querySelector('#addSubjectForm');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    removeEventListener() {
        if (this.submitForm === null) {
            return;
        }

        this.submitForm.removeEventListener('submit', this._onsubmit);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }
}