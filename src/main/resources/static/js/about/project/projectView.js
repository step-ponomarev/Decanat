'use strict';

export class ProjectView {
    constructor(element) {
        this.template = `<div class="project">
              <div class="project__title title">
                project
              </div>
              <div class="project__content">
                <div class="project__databaseImg">
                  <img src="./img/about/db.png" alt="db" />
                  <div class="project__subtitle">
                    Схемма базы данных.
                  </div>
                </div>

                <div class="project__text">
                  <div class="project__task">
                    <div class="text__title">Задача</div>
                      <p>
                      Перед инженерами нашей команды стояла непростая и творческая задача.
                      В рамках курса "Объектно-ориентированное программирование" был разработан курсовой проект
                      с необычной постановкой задачи:
                      <div class="project__tz">
                        <p>
                          - Вот база данных, сделай чтобы можно было что-то добавлять, а и аторизацию туда прикрути.
                        </p>
                        <p>
                          - ...
                        </p>
                        <p>
                         - А, и аторизацию туда прикрути.
                        </p>
                      </div>
                    </p>
                    Что ж, мы принимаем вызов. Наши инженеры не боятся 
                    С учетом всех требований был выбран минимальный стек технологий для реализации задачи.
                  
                    </div>
                  
                  <div class="technology">
                    <div class="text__title">Технологии</div>
                    <div class="technologyList">
                      <a>Java 13</a>
                      <a>Spring Boot</a>
                      <a>Spring Security</a>
                      <a>Hibernate</a>
                      <a>Java Script</a>
                      <a>HTML</a>
                      <a>CSS</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="blockSeparator"></div>
            </div>`;

        this.element = element;
        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('beforeend', this.template);
    }
}