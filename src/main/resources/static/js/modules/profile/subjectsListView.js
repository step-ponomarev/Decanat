export class SubjectsListView {
    constructor(element) {
        this.m_template = (subject) =>
            `<div class="card border-primary mb-3 subjCard-transitions mt-3" style="max-width: 18rem;" name="subjCard" id="${subject.id}">
                <div class="card-header" id="${subject.id}">${subject.name}</div>
                <div class="card-body text-primary" id="${subject.id}">
                    <h5 class="card-title" id="${subject.id}">Amosov A.V.</h5>
                    <p class="card-text" id="${subject.id}">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>`;

        this.m_element = element;
        this.m_element.classList.add('card-columns');

        this.m_id = null;
        this.m_mouseChoose = event => {
                event.target.classList.remove('border-primary');
                event.target.classList.add('border-info');
            };
        this.m_mouseLeave = event => {
            event.target.classList.remove('border-info');
            event.target.classList.add('border-primary');
        };

        this.m_click = null;

        this.render = this.render.bind(this);
    }

    render(subjects) {
        this.removeActionListeners();
        this.createCards(subjects);
        this.addActionListeners();
    }

    createCards(subjects) {
        subjects.forEach((subject) => {
            this.m_element.insertAdjacentHTML('beforeend', this.m_template(subject));
        });
    }

    set click(action) {
        this.m_click = action;
    }

    addActionListeners() {
        let cards = document.getElementsByName("subjCard");

        cards.forEach(card => {
           card.addEventListener('mouseenter', this.m_mouseChoose);
           card.addEventListener('mouseleave', this.m_mouseLeave);
           card.addEventListener('click', this.m_click);
        });
    }

    removeActionListeners() {
        let cards = document.getElementsByName("subjCard");

        if (cards.length === 0) {
            return;
        }

        

        cards.forEach(card => {
            card.removeEventListener('mouseenter', this.m_mouseChoose);
            card.removeEventListener('mouseleave', this.m_mouseLeave);
            card.removeEventListener('click', this.m_click);
        });
    }
}