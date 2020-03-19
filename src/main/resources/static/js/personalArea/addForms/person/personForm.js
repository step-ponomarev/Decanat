'use strict';

import {PersonFormView} from "./personFormView.js";

export class PersonForm {
    constructor(model) {
        this.model = model;

        this.onSubmit = (frm) => {
            const form = frm.target;

            const firstname = form.firstname.value;
            const lastname = form.lastname.value;
            const pathername = form.pathername.value;

            const roles = form.role;
            const role = roles.options[roles.selectedIndex].text;

            const groups = form.group;
            const groupId = parseInt(groups.options[groups.selectedIndex].value);

            const newPerson = {
                id: null,
                firstname: firstname,
                lastname: lastname,
                pathername: pathername,
                group: this.model.getGroup(groupId),
                role: role
            };

            this.model.postPerson(newPerson);

            form.firstname.value = '';
            form.lastname.value = '';
            form.pathername.value = '';

            alert(`${role} ${newPerson.firstname} ${newPerson.lastname} ${newPerson.pathername} was added.`);

            frm.preventDefault();
        };

        this.start = this.start.bind(this);
    }

    start() {
        this.view = new PersonFormView(document.querySelector('#personalAreaContent'));
        this.view.onsubmit = this.onSubmit;
        this.prepareModel();

        this.render();
    }

    render() {
        this.view.render();

        this.addRoles();
        this.addGroups();

    }

    addRoles() {
        const roles = this.model.roles;

        roles.forEach(role => {
            this.view.addRole(role);
        });
    }

    addGroups() {
        const groups = this.model.groups;

        groups.forEach(group => {
            this.view.addGroup(group);
        });
    }

    prepareModel() {
        this.model.downloadRoles();
        this.model.downloadGroups();
        this.model.addGroupToViewMethod = this.view.addGroup;
    }
}