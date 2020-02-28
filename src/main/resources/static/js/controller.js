function newPerson() {
    let person = {
        id: null,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        pathername: document.getElementById("pathername").value,
        group: null,
        type: null
    };

    addPerson(person);
}
