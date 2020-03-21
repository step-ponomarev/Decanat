'use strict';

export class TableView {
    constructor(element) {
        this.template =
            `<div class="table__title title">
              Students
            </div>
            <table>
              <thead>
                <tr>
                  <th class="table__columnName">Subject</th>
                  <th class="table__columnName">Group</th>
                  <th class="table__columnName">Student</th>
                  <th class="table__columnName">Teacher</th>
                  <th class="table__columnName">Mark</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                
              </tbody>
            </table>`;

        this.tableRow = (mark) => `<tr>
                  <td class="table__column">${mark.subject.name}</td>
                  <td class="table__column">${mark.student.group !== null ? mark.student.group.name : '-'}</td>
                  <td class="table__column">${mark.student.firstname} ${mark.student.lastname} ${mark.student.pathername}</td>
                  <td class="table__column">${mark.teacher.firstname} ${mark.teacher.lastname} ${mark.teacher.pathername}</td>
                  <td class="table__column">${mark.value}</td>
                </tr>`;

        this._element = element;

        this.render = this.render.bind(this);
        this.insertMark = this.insertMark.bind(this);
        this.clearTable = this.clearTable.bind(this);
    }

    render() {
        this._element.innerHTML = '';
        this._element.insertAdjacentHTML('beforeend', this.template);
    }

    insertMark(mark) {
        const tableBody = document.querySelector('#tableBody');

        tableBody.insertAdjacentHTML('beforeend', this.tableRow(mark));
    }

    clearTable() {
        this._element.querySelector('#tableBody').innerHTML = '';
    }
}

