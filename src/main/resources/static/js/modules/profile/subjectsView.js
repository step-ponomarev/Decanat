export class SubjectsView {
    constructor(element) {
        this.m_template = (subject) =>
            `<div class="card border-primary mb-3 subjCard-transitions mt-3" style="max-width: 18rem;" name="subjCard" id="${subject.name.toLowerCase()}">
                <div class="card-header">${subject.name}</div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Amosov A.V.</h5>
                    <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>`;

        this.m_element = element;
        this.m_element.classList.add('card-columns');

        this.m_mouseChoose = event => {
                event.target.classList.remove('border-primary');
                event.target.classList.add('border-info');
            };
        this.m_mouseLeave = event => {
            event.target.classList.remove('border-info');
            event.target.classList.add('border-primary');
        };

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

    addActionListeners() {
        let cards = document.getElementsByName("subjCard");

        cards.forEach(card => {
           card.addEventListener('mouseenter', this.m_mouseChoose);
            card.addEventListener('mouseleave', this.m_mouseLeave);
        });
    }

    removeActionListeners() {
        let cards = document.getElementsByName("subjCard");

        if (cards.length === 0) {
            return;
        }

        cards.forEach(card => {
            card.removeEventListener('mouseenter', this.m_mouseChoose);
            card.addEventListener('mouseleave', this.m_mouseLeave);
        });
    }
}