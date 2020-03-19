'use strict';


export class MarkFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
            <div class="editblock__title">
                Mark
            </div>
            <form method="POST" class="editblock__form">
                <div class="form__select">
                    <label for="student">student:</label>
                    <select name="student">
                        <option>Гарри Поттер</option>
                        <option selected>Гермиона Грейнджер</option>
                    </select>
                </div>
                <div class="form__select">
                    <label for="teacher">teacher:</label>
                    <select name="teacher">
                        <option selected>Николай Августинович</option>
                    </select>
                </div>
                <div class="form__select">
                    <label for="mark">mark:</label>
                    <select name="mark">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option selected>5</option>
                    </select>
                </div>
                <input type="submit" value="add" class="from__submitBtn"/>
            </form>
        </div>`;

        this.element = element;

        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('beforeend', this.template);
    }
}
