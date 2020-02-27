function start() {
    createForm();
    createSelect();
    updatePersons();
}

function createSelect() {
    document.getElementById("app").innerHTML +=
        '<select id="personList" onchange="changePerson(this)"></select>';
}


function createForm() {
    document.getElementById("app").innerHTML +=
        '<form>' +
        '<div class="input-group">' +
        '   <div class="input-group-prepend">' +
        '     <span class="input-group-text">First, last and pather name</span>' +
        '  </div>' +
        '  <input type="text" aria-label="First name" class="form-control mr-2 ml-2" id="firstname"' +
        ' placeholder="First name">' +
        '  <input type="text" aria-label="Last name" class="form-control" id="lastname" placeholder="Last name">' +
        '  <input type="text" aria-label="Last name" class="form-control" id="pathername" placeholder="Pather name">' +
        '  <button type="submit" class="btn btn-primary" onclick="addStudent()">Add Person</button>' +
        '</div>' +
        '</form>';
}

function addStudent() {
    let person = {
        id : null,
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        pathername : document.getElementById("pathername").value,
        group : null,
        type : null
    };

    let personJSON = JSON.stringify(person);

    let xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open('POST', '/people', true);
    xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xmlHttpRequest.send(personJSON);

    let html = '<option value="">' + 'First name: ' + person.firstname + ' Last name: ' + person.lastname + ' Pather' +
        ' name: ' + person.pathername + '</option>';
    document.getElementById("personList").innerHTML += html;
}

function updatePersons() {
    let xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open('GET', '/people', true);

    xmlHttpRequest.send();

    xmlHttpRequest.onload = () => {
        if (xmlHttpRequest.status != 200) {
            alert(xmlHttpRequest.status + ': ' + xmlHttpRequest.statusText);
        } else {
            const objs = JSON.parse(xmlHttpRequest.responseText);

            let html = '';
            document.getElementById("personList").innerHTML = '';
            for (let i = 0; i < objs.length; i++) {
                html = '<option value="' + objs[i].id + '">' + 'First name: ' + objs[i].firstname + ' Last name: ' + objs[i].lastname + ' Pather name: ' + objs[i].pathername +
                    '</option>';
                document.getElementById("personList").innerHTML += html;
            }
        }

    }
}

start();