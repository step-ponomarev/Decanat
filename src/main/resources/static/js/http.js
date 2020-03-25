'use strict';

export class Http {
    constructor() {
    }
    static get(url, async = true) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, async);

            xhr.onload = () => {
                let obj = JSON.parse(xhr.responseText);
                resolve(obj);
            };

            xhr.onerror = () => reject(new Error(`Get method ${xhr.status} : ${xhr.statusText}`));


            xhr.send();
        });
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