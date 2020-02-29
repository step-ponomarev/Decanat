class PersonFormView {
    constructor(element) {
        this.template = '<form id="addPersonForm">' +
            '<div class="input-group">' +
            '   <div class="input-group-prepend">' +
            '     <span class="input-group-text">First, last and pather name</span>' +
            '  </div>' +
            '  <input type="text" aria-label="First name" class="form-control mr-2 ml-2" id="firstname"' +
            ' placeholder="First name">' +
            '  <input type="text" aria-label="Last name" class="form-control" id="lastname" placeholder="Last name">' +
            '  <input type="text" aria-label="Last name" class="form-control" id="pathername" placeholder="Pather name">' +
            '  <button type="submit" class="btn btn-primary" id="addPersonButton">Add person</button>' +
            '</div>' +
            '</form>';

        this._element = element;
        this._onclickListener = null;
        this.render = this.render.bind(this);
    }

    render() {
        this._removeEventListeners();
        this._element.innerHTML += this.template;
        this._addEventListeners();
    }

    set element(element) {
        return this._element = element;
    }

    get element() {
        return this._element;
    }

    set onclickListener(onclick) {
        this._onclickListener = onclick;
    }

    get onclickListener() {
        return this._onclickListener;
    }

    get form() {
        return this._element.querySelector('#addPersonButton');
    }

    _addEventListeners() {
        this._element.querySelector('#addPersonButton').addEventListener('click', this._onclickListener); // Не работает
        this._element.querySelector('#addPersonButton').addEventListener('click', this.say); // не работает
    }

    say() {
        alert('Hi!');
    }

    _removeEventListeners() {
        const button = this._element.querySelector('#addPersonButton');
        if (button) {
            button.removeEventListener('click', this._onclickListener);
        }
    }
}

class PersonListView {
    constructor(element) {
        this.template = '<select id="personList"></select>';
        this._element = element;

        this._onchangeListener = null;
        this.render = this.render.bind(this);
    }

    render(person) {
        this._removeEventListeners();

        if (this._element.querySelector('#personlist')) {
            this._element.querySelector('#personlist').remove();
        }
        this._element.innerHTML += this.template;

        this._updatePersonList(person);
        this._addEventListener();
    }

    set onchangeListener(onchange) {
        this._onchangeListener = onchange;
    }

    get onchangeListener() {
        return this._onchangeListener;
    }

    set element(element) {
        return this._element = element;
    }

    get element() {
        return this._element;
    }

    _updatePersonList(people) {
        this._element.querySelector('#personList').innerHTML = '';
        people.forEach(person => {
            this._addPerson(person);
        });
    }

    _addPerson(person) {
        const html = `<option value="${person.id || ''}">First name: ${person.firstname} Last name: ${person.lastname} Pather name: ${person.pathername} </option>`;
        this._element.querySelector("#personList").innerHTML += html;
    }

    _addEventListener() {
        this._element.querySelector("#personList").addEventListener('change', this._onchangeListener);
    }

    _removeEventListeners() {
        const select = this._element.querySelector("#personList");
        if (select) {
            select.removeEventListener('change', this._onchangeListener);
        }
    }
}

class MainView {
    constructor(element) {
        this._element = element;
        this._personFormView = new PersonFormView(element);
        this._personListViev = new PersonListView(element);
        this.render = this.render.bind(this);
    }

    render(person) {
        this._element.innerHTML = '';
        this._personFormView.render();
        this._personListViev.render(person);
    }

    get personFormView() {
        return this._personFormView;
    }

    get personListViev() {
        return this._personListViev;
    }
}