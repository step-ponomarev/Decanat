"use strict";

export class Model {
    addPerson(person, render) {
        const xmlHttpRequest = new XMLHttpRequest();
        let personJSON = JSON.stringify(person);

        xmlHttpRequest.open('POST', '/profile');
        xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xmlHttpRequest.onload = () => {
            if (xmlHttpRequest.readyState !== 4 || render == null) {
                return;
            }

            let addedPerson = JSON.parse(xmlHttpRequest.responseText);
            render(addedPerson);
        };

        xmlHttpRequest.send(personJSON);
    }

    getPersonList(render) {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('GET', '/profile', true);

        xmlHttpRequest.onload = () => {
            if (xmlHttpRequest.status !== 200) {
                alert(xmlHttpRequest.status + ': ' + xmlHttpRequest.statusText);
            } else {
                let people = JSON.parse(xmlHttpRequest.responseText);
                render(people);
            }

        };

        xmlHttpRequest.send();
    }

    getSubjects(render) {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('GET', '/profile/subjects', true);

        xmlHttpRequest.onload = () => {
            if (xmlHttpRequest.status !== 200) {
                alert(xmlHttpRequest.status + ': ' + xmlHttpRequest.statusText);
            } else {
                let subjects = JSON.parse(xmlHttpRequest.responseText);
                render(subjects);
            }

        };

        xmlHttpRequest.send();
    }
}
