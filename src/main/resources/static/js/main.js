document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("app");

    let model = new Model(new XMLHttpRequest());
    let view = new MainView(element);

    let controller = new MainController(model, view);

    controller.start();
});