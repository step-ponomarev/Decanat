'use strict';

export class PersonFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
          <div class="editblock__title">
            People
          </div>
          <form method="POST" class="editblock__form">
            <input type="text" placeholder="firstname" required />
            <input type="text" placeholder="lastname" required />
            <input type="text" placeholder="pathername" required />
            <div class="form__select">
              <label for="role">role:</label>
              <select name="role">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div class="form__select">
              <label for="group">group:</label>
              <select name="group">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
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