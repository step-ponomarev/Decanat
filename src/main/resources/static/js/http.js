'use strict';

export class Http {
    constructor() {
    }

    static get(url, async = true) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, async);

        xhr.send();

        return new Promise(function (resolve, reject) {
            xhr.onload = () => {
                let obj = JSON.parse(xhr.responseText);
                resolve(obj);
            };

            xhr.onerror = () => reject(new Error(`Get method ${xhr.status} : ${xhr.statusText}`));
        });
    }

    static post(url, obj, async = true) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, async);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let jsonObj = JSON.stringify(obj);
        xhr.send(jsonObj);

        return new Promise(function (resolve, reject) {
            xhr.onload = () => {
                if (xhr.responseText === null || xhr.responseText === "") {
                    return;
                }

                let obj = JSON.parse(xhr.responseText);
                resolve(obj);
            };

            xhr.onerror = () => {
               reject(new Error(`Post error ${xhr.status} : ${xhr.statusText}`));
            };
        });
    }
}