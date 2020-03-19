'use strict';

export class SubjectFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Subject
          </div>
          <form method="POST" class="editblock__form">
            <input type="text" placeholder="subject name" required />
            <input type="submit" value="add" class="from__submitBtn" />
          </form>
        </div>`;

        this.element = element;

        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('beforeend', this.template);
    }
}