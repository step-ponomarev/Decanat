"use strict";

class Model {
    constructor(XMLHttpRequest) {
        this.m_xmlHttpRequest = XMLHttpRequest;
    }

    addPerson(person, render) {
        let personJSON = JSON.stringify(person);

        this.m_xmlHttpRequest.open('POST', '/people');
        this.m_xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        this.m_xmlHttpRequest.onreadystatechange = () => {
            if (this.m_xmlHttpRequest.readyState !== 4) return;

            const addedPerson = JSON.parse(this.m_xmlHttpRequest.responseText);
            render(addedPerson);
        };

        this.m_xmlHttpRequest.send(personJSON);
    }

    getPersonList(render) {
        this.m_xmlHttpRequest.open('GET', '/people', true);

        this.m_xmlHttpRequest.send();

        this.m_xmlHttpRequest.onload = () => {
            if (this.m_xmlHttpRequest.status !== 200) {
                alert(this.m_xmlHttpRequest.status + ': ' + this.m_xmlHttpRequest.statusText);
            } else {
                let people = JSON.parse(this.m_xmlHttpRequest.responseText);
                render(people);
            }

        }
    }
}
