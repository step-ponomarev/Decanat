'use strict';

export class TeamView {
    constructor(element) {
        this.template =
            `<div class="team">
              <div class="team__title title">
                team
              </div>
              <div class="team__content">
                <div class="teammate">
                  <div class="teammate__title">developer</div>
                  <div class="teammate__content">
                    <div class="teammate__img">
                      <img src="../../../img/about/developer.png" />
                      <div class="teammate__subtitle">
                        Ponomarev S.P.
                      </div>
                    </div>
                    <div class="teammate__contacts">
                      <a>git</a>
                      <a>vk.com</a>
                      <a>telegramm</a>
                    </div>
                  </div>
                </div>

                <div class="team__decorator">
                  <div class="decorator__task task__left">
                    - Помоги диалог придумать, <strong>пожалуйста</strong>!!1
                  </div>
                  <div class="decorator__task task__right">
                    Степа, ты что творишь? Я сейчас не дома. -
                  </div>
                  <div class="decorator__task task__left">
                    - ...
                  </div>
                  <div class="decorator__task task__right">
                    А давай созвонимся, я тебе расскажу что-нибудь вечерком. А? -
                  </div>
                </div>

                <div class="teammate">
                  <div class="teammate__title">artis</div>
                  <div class="teammate__content">
                    <div class="teammate__img">
                      <img src="../../../img/about/artist.png" />
                      <div class="teammate__subtitle">
                        Avgustinovich N.N.
                      </div>
                    </div>
                    <div class="teammate__contacts">
                      <a>git</a>
                      <a>vk.com</a>
                      <a>telegramm</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        this.element = element;

        this.render = this.render.bind(this);
    }

    render() {
        this.element.insertAdjacentHTML('beforeend', this.template);
    }
}