'use strict';

export class Http {
    static get(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GER', url);

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

    static post(url, obj, callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.onload = () => {
            if (xhr.readyState !== 4 || callback == null) {
                return;
            }

            let obj = JSON.parse(xhr.responseText);
            callback(obj);
        };


        let jsonObj = JSON.stringify(obj);
        xhr.send(jsonObj);
    }
}