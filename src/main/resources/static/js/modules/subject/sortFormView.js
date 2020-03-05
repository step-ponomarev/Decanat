"use strict";

export class SortFormView {
    constructor(element) {
        this.m_template = `<form class="form-control" id="sortForm">
                                <select id="sortSelection">
                                   <option selected="selected">High -> Low</option>
                                   <option>Low -> High</option>
                                </select>
                            </form>`;
        this.m_element = element;

        this.m_onchage = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);
    }

    set onchange(action) {
        this.m_onchage = action;
    }
}