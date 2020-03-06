import {PersonTableView} from "./personTableView.js";
import {SortFormView} from "./sortFormView.js";

export class SubjectView {
    constructor(element) {
        this.m_element = element;
        this.m_sortForm = new SortFormView(this.createChild('sortPersonForm'));
        this.m_personTable = new PersonTableView(this.createChild('personTable'));

        this.m_404 = `<img 
                    src="pic/404.png" 
                    style="display:block;  width:100%; height:100%; object-fit: cover;"
                    />`;

        this.m_greeting = null;
        // TODO сделать гритинг для сабджект окна

        this.render = this.render.bind(this);
    }

    render(marks) {
        this.m_element.insertAdjacentHTML('afterbegin', this.m_greeting);

        this.m_sortForm.render();

        if (marks.length !== 0) {
            this.m_personTable.render(marks);
        } else {
            this.m_element.insertAdjacentHTML('beforeend', this.m_404);
        }
    }

    set greeting(greeting) {
        this.m_greeting = greeting;
    }

    createChild(name) {
        let currentDiv = document.createElement('div');

        currentDiv.id = name;

        this.m_element.append(currentDiv);

        return currentDiv;
    }
}

