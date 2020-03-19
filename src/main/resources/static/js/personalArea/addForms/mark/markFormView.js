'use strict';


export class MarkFormView {
    constructor(element) {
        this.template =
            `<div class="personalArea__editblock">
            <div class="editblock__title">
                Mark
            </div>
            <form class="editblock__form" id="addMarkForm">
                <div class="form__select">
                    <label for="student">student:</label>
                    <select name="student" id="studentsSelect">
                    </select>
                </div>
                 <div class="form__select">
                    <label for="subject">subject:</label>
                    <select name="subject"  id="subjectSelect">
                    </select>
                </div>
                <div class="form__select">
                    <label for="teacher">teacher:</label>
                    <select name="teacher"  id="teachersSelect">
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

        this.submitForm = null;
        this._onsubmit = null;

        this.render = this.render.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.addSubject = this.addSubject.bind(this);
    }

    render() {
        this.removeEventListeners();
        this.element.insertAdjacentHTML('beforeend', this.template);
        this.addEventListeners();
    }

    addStudent(student) {
        const studentSelect = document.querySelector('#studentsSelect');

        const studentOption = `<option value='${student.id}'>${student.firstname} ${student.lastname} ${student.pathername}</option>`;

        studentSelect.insertAdjacentHTML('beforeend', studentOption);
    }

    addTeacher(teacher) {
        const teacherSelect = document.querySelector('#teachersSelect');

        const teacherOption = `<option value='${teacher.id}'>${teacher.firstname} ${teacher.lastname} ${teacher.pathername}</option>`;

        teacherSelect.insertAdjacentHTML('beforeend', teacherOption);
    }

    addSubject(subject) {
        const subjectsSelect = document.querySelector('#subjectSelect');

        const subjectOption = `<option value='${subject.id}'>${subject.name}</option>`;

        subjectsSelect.insertAdjacentHTML('beforeend', subjectOption);
    }

    set onsubmit(onsubmit) {
        this._onsubmit = onsubmit;
    }

    removeEventListeners() {
        if (this.submitForm === null) {
            return;
        }


        this.submitForm.addEventListener('submit', this._onsubmit);
    }

    addEventListeners() {
        this.submitForm = document.querySelector('#addMarkForm');

        this.submitForm.addEventListener('submit', this._onsubmit);
    }
}
