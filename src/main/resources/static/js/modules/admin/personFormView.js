"use strict";

export class PersonFormView {
    constructor(element) {
        this.m_template =
            `<form id="addPersonForm">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Add Person:</span>
                    </div>
                    <input type="text" aria-label="First name" class="form-control mr-2 ml-2" id="firstname" placeholder="First name">
                    <input type="text" aria-label="Last name" class="form-control" id="lastname" placeholder="Last name">
                    <input type="text" aria-label="Last name" class="form-control" id="pathername" placeholder="Pather name">
                    <select class="form-control mr-2 ml-2" id="selectRoles">
                    <option selected="selected">STUDENT</option>
                    <option>TEACHER</option>
                    </select>
                    <input type="submit", value="Add person" class="btn btn-primary" id="addPersonButton"/>
                </div>
            </form>`;

        this.m_element = element;
        this.m_element.classList.add('mb-3');
        this.m_onclickListener = null;
        this.render = this.render.bind(this);
    }

    render() {
        this.m_element.innerHTML = ``;
        this.removeEventListeners();

        this.m_element.insertAdjacentHTML('beforeend', this.m_template);

        this.addEventListeners();
    }

    set onclickListener(onclick) {
        this.m_onclickListener = onclick;
    }

    addEventListeners() {
        let form = this.m_element.querySelector('#addPersonForm');

        form.addEventListener('submit', this.m_onclickListener, false);

    }

    removeEventListeners() {
        let form = this.m_element.querySelector('#addPersonForm');

        if (form) {
            form.removeEventListener('submit', this.m_onclickListener, false);
        }
    }
}