export class PersonFormView {
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

    set onclickListener(onclick) {
        this.m_onclickListener = onclick;
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