"use strict";

export class Http {
    static get(url, render) {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('GET', url, true);

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

    static post(url, obj, render) {
        const xmlHttpRequest = new XMLHttpRequest();
        let personJSON = JSON.stringify(obj);

        xmlHttpRequest.open('POST', url);
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
}