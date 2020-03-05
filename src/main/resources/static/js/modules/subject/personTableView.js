export class PersonTableView {
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