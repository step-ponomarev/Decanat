'use strict';

export class GroupFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            Group
          </div>
          <form method="POST" class="editblock__form">
            <input type="text" placeholder="group name" required />
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