document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("app");

    let model = new Model(new XMLHttpRequest());
    let view = new MainView(element);

    let personCreateController = new PersonCreateController(model, view.personListViev);

    let personFormController = new PersonFormController(model, view.personFormView);

    let mainController = new MainController(model, view);

    mainController.start();
});