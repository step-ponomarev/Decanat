function addPerson(person) {
    let personJSON = JSON.stringify(person);

    let xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open('POST', '/people', true);
    xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xmlHttpRequest.send(personJSON);

    if (xmlHttpRequest.status !== 204) {
        addToPersonList(person);
    }
}

function updatePersons() {
    let xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open('GET', '/people', true);

    xmlHttpRequest.send();

    xmlHttpRequest.onload = () => {
        if (xmlHttpRequest.status !== 200) {
            alert(xmlHttpRequest.status + ': ' + xmlHttpRequest.statusText);
        } else {
            const people = JSON.parse(xmlHttpRequest.responseText);
            updatePersonList(people);
        }

    }
}