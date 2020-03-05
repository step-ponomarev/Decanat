import {PersonTableView} from "./personTableView.js";
import {SortFormView} from "./sortFormView.js";

export class SubjectView {
    constructor(element) {
        this.m_element = element;
        this.m_sortForm = new SortFormView(this.createChild('sortPersonForm'));
        this.m_personTable = new PersonTableView(this.createChild('personTable'));

        this.render = this.render.bind(this);
    }

    render(marks) {
        this.m_sortForm.render();
        this.m_personTable.render(marks);
    }

    createChild(name) {
        let currentDiv = document.createElement('div');

        currentDiv.id = name;

        this.m_element.append(currentDiv);

        return currentDiv;
    }
}

