"use strict";

export class PersonTableView {
    constructor(element) {
        this.m_template = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Pathername</th>
                    <th scope="col">Mark</th>
                </tr>
            </thead>
        <tbody id="markTableBody">
        </tbody>
        </table>`;

        this.m_tableElement = (mark) =>
            `<tr>
                <td>${mark.student.firstname}</td>
                <td>${mark.student.lastname}</td>
                 <td>${mark.student.pathername}</td>
                <td>${mark.value}</td>
            </tr>`;
        this.m_element = element;

        this.m_onchangeListener = null;

        this.render = this.render.bind(this);
    }

    render(marks) {
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);
        this.fillTable(marks)
    }

    fillTable(marks) {
        let table = this.m_element.querySelector("#markTableBody");
        marks.forEach(mark => {
            table.insertAdjacentHTML('beforeend', this.m_tableElement(mark))
        });
    }

}