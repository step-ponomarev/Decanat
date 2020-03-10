"use strict";

export class SortFormView {
    constructor(element) {
        this.m_template = `<form class="form-control" id="sortForm">
                                <select id="sortSelection">
                                   <option selected="selected" value="highLow">High -> Low</option>
                                   <option value="lowHigh">Low -> High</option>
                                </select>
                            </form>`;
        this.m_element = element;

        this.m_onchage = null;

        this.render = this.render.bind(this);
    }

    render() {
        this.removeListener();
        this.m_element.insertAdjacentHTML('beforeend', this.m_template);
        this.addLister();
    }

    addLister() {
        this.m_element.querySelector('#sortForm').addEventListener('change', this.m_onchage);
    }

    removeListener() {
        const form = this.m_element.querySelector('#sortForm');
        if (!form) {
            return;
        }

        this.m_element.querySelector('#sortForm').removeEventListener('change', this.m_onchage);
    }

    set onchange(action) {
        this.m_onchage = action;
    }
}