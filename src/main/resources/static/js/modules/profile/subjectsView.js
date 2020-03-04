export class SubjectsView {
    constructor(element) {
        this.m_template = (subject) =>
            `<div class="card border-primary mb-3" style="max-width: 18rem;" name="subjCard" if="${subject.toLowerCase()}">
                <div class="card-header">${subject}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Amosov A.V.</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>`;

        this.m_element = element;
        this.m_element.classList.add('card-columns');
        this.m_mouseAction = event => {
                console.log(event.target.id);
            };
        //this.m_element.style = 'width: 25;';

        this.render = this.render.bind(this);
    }

    render(subjects) {
        this.removeActionListeners();
        this.createCards(subjects);
        this.addActionListeners();
    }

    set mouseAction(action) {
        this.m_mouseAction = action;
    }

    createCards(subjects) {
        subjects.forEach((subject) => {
            this.m_element.insertAdjacentHTML('beforeend', this.m_template(subject));
        });
    }

    addActionListeners() {
        let cards = document.getElementsByName("subjCard");

        cards.forEach(card => {
           card.addEventListener('mouseenter', this.m_mouseAction)
        });
    }

    removeActionListeners() {
        let cards = document.getElementsByName("subjCard");
//TODO Пофиксить
        if (cards.length === 0) {
            return;
        }

        cards.forEach(card => {
            card.removeEventListener('mouseenter', this.m_mouseAction)
        });
    }
}