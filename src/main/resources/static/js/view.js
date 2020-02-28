function createSelect() {
    document.getElementById("app").innerHTML +=
        '<select id="personList" onchange="changePerson(this)"></select>';
}


function createForm() {
    document.getElementById("app").innerHTML +=
        '<form id="addPersonForm">' +
        '<div class="input-group">' +
        '   <div class="input-group-prepend">' +
        '     <span class="input-group-text">First, last and pather name</span>' +
        '  </div>' +
        '  <input type="text" aria-label="First name" class="form-control mr-2 ml-2" id="firstname"' +
        ' placeholder="First name">' +
        '  <input type="text" aria-label="Last name" class="form-control" id="lastname" placeholder="Last name">' +
        '  <input type="text" aria-label="Last name" class="form-control" id="pathername" placeholder="Pather name">' +
        '  <button type="submit" class="btn btn-primary" id="addPersonButton" onclick="newPerson()">Add' +
        ' Person</button>' +
        '</div>' +
        '</form>';
}

function updatePersonList(people) {
    document.getElementById("personList").innerHTML = '';
    people.forEach(person => {
        addToPersonList(person);
    });
}

function addToPersonList(person) {
    let html = '<option value="' + (person.id == null ? '' : person.id) + '">' + 'First name: ' + person.firstname + ' Last' +
        ' name: ' + person.lastname + ' Pather name: ' + person.pathername +
        '</option>';
    document.getElementById("personList").innerHTML += html;
}