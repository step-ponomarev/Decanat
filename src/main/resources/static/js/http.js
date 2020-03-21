'use strict';

export class Http {
    constructor() {
    }
    static get(url, callback, async = true) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, async);

        xhr.onload = () => {
            if (xhr.status !== 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                let obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        };


        xhr.send();
    }

    static post(url, obj, callback, async = true) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, async);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.onload = () => {
            if (xhr.readyState !== 4 || callback == null) {
                return;
            }

            if (xhr.responseText === null) {
                callback(null);
            }
            
            let obj = JSON.parse(xhr.responseText);
            callback(obj);
        };


        let jsonObj = JSON.stringify(obj);
        xhr.send(jsonObj);
    }
}