class Model {
    constructor(XMLHttpRequest) {
        this.xmlHttpRequest = XMLHttpRequest;
    }

    addPerson(person) {
        let personJSON = JSON.stringify(person);

        this.xmlHttpRequest.open('POST', '/people', true);
        this.xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        this.xmlHttpRequest.send(personJSON);

        if (this.xmlHttpRequest.status !== 204) {
            addToPersonList(person);
        }
    }

    getPersonList() {
        this.xmlHttpRequest.open('GET', '/people', true);

        this.xmlHttpRequest.send();

        this.xmlHttpRequest.onload = () => {
            if (this.xmlHttpRequest.status !== 200) {
                alert(this.xmlHttpRequest.status + ': ' + this.xmlHttpRequest.statusText);
            } else {
                let people = JSON.parse(this.xmlHttpRequest.responseText);
                updatePersonList(people);
            }

        }
    }
}

let model = new Model(new XMLHttpRequest());
