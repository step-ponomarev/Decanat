export class ProfileGreeting {
    constructor(element) {
        this.m_template = `
         <div class="text-center">
            <h1>Guest</h1>
        </div>`;

        this.m_element = element;
        this.render = this.render.bind(this);
    }

    render() {
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);
    }
}