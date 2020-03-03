"use strict";

class PersonFormView {
    constructor(element) {
        this.m_template =
            `<form id="addPersonForm">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">First, last and pather name</span>
                    </div>
                    <input type="text" aria-label="First name" class="form-control mr-2 ml-2" id="firstname" placeholder="First name">
                    <input type="text" aria-label="Last name" class="form-control" id="lastname" placeholder="Last name">
                    <input type="text" aria-label="Last name" class="form-control" id="pathername" placeholder="Pather name">
                    <input type="submit", value="Add person" class="btn btn-primary" id="addPersonButton"/>
                </div>
            </form>`;

        this.m_element = element;
        this.m_onclickListener = null;
        this.render = this.render.bind(this);
    }

    render() {
        this.m_element.innerHTML = ``;
        this.removeEventListeners();

        this.m_element.insertAdjacentHTML('beforeend', this.m_template);

        this.addEventListeners();
    }

    set element(element) {
        return this.m_element = element;
    }

    get element() {
        return this.m_element;
    }

    set onclickListener(onclick) {
        this.m_onclickListener = onclick;
    }

    get onclickListener() {
        return this.m_onclickListener;
    }

    addEventListeners() {
        let form = this.m_element.querySelector('#addPersonForm');

        form.addEventListener('submit', this.m_onclickListener, false);
    }

    removeEventListeners() {
        let elem = this.m_element.querySelector('#addPersonForm');

        if (elem) {
            elem.removeEventListener('submit', this.m_onclickListener, false);
        }
    }
}

class PersonListView {
    constructor(element) {
        this.m_template = `<select id="personList"></select>`;
        this.m_element = element;

        this.m_onchangeListener = null;

        this.render = this.render.bind(this);
        this.addPerson = this.addPerson.bind(this);
    }

    render(person) {
        this.m_element.innerHTML = ``;

        this.removeEventListeners();

        if (this.m_element.querySelector('#personList')) {
            this.m_element.querySelector('#personList').remove();
        }
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);

        this.updatePersonList(person);
        this.addEventListener();
    }

    updatePersonList(people) {
        this.m_element.querySelector('#personList').innerHTML = '';
        people.forEach(person => {
            this.addPerson(person);
        });
    }

    addPerson(person) {
        const html = `<option value="${person.id || ''}">First name: ${person.firstname} Last name: ${person.lastname} Pather name: ${person.pathername} </option>`;
        this.m_element.querySelector("#personList").insertAdjacentHTML('beforeend', html);
    }

    set onchangeListener(onchange) {
        this.m_onchangeListener = onchange;
    }

    addEventListener() {
        this.m_element.querySelector("#personList").addEventListener('change', this.m_onchangeListener, false);
    }

    removeEventListeners() {
        const select = this.m_element.querySelector("#personList");
        if (select) {
            select.removeEventListener('change', this.m_onchangeListener, false);
        }
    }
}

class MainView {
    constructor(element) {
        this.m_element = element;
        this.m_personFormView = new PersonFormView(this.createChild('formDiv'));
        this.m_personListViev = new PersonListView(this.createChild('personListDiv'));
        this.render = this.render.bind(this);
    }

    render(person) {
        this.m_personFormView.render();
        this.m_personListViev.render(person);
    }

    get personFormView() {
        return this.m_personFormView;
    }

    get personListView() {
        return this.m_personListViev;
    }

    createChild(name) {
        let currentDiv = document.createElement('div');

        currentDiv.id = name;

        this.m_element.append(currentDiv);

        return currentDiv;

    }
}
