<template>
  <section id="contact" class="content">
    <div class="content__block">
      <div class="content__map"></div>
    </div>
    <div class="content__block">
      <div class="content__title">
        <h2>Свяжитесь с нами</h2>
      </div>
      <div class="content__item">
        <div class="content__hero"></div>
        <div class="content__title">
          <h3>Позвоните нам</h3>
        </div>
        <div class="content__text">
          <h6>А.Прокопенко</h6>
          <a href="tel:+79204549507">+7(920)454-95-07</a>
          <h6>Пн - Пт, 08:30 - 19:00</h6>
        </div>
      </div>
      <div class="content__item">
        <div class="content__hero"></div>
        <div class="content__title">
          <h3>Приходите к нам в офис</h3>
        </div>
        <div class="content__text">
          <h6>
            г.Россошь, Воронежская обл., РФ,
            <br />
            Пролетарская ул., д.120
          </h6>
        </div>
      </div>
      <div class="content__item">
        <div class="content__hero"></div>
        <div class="content__title">
          <h3>Наша почта</h3>
        </div>
        <div class="content__text">
          <h6>Прокопенко А.</h6>
          <a href="mailto:prokar41@mail.ru">prokar41@mail.ru</a>
          <a href="mailto:hidden_assassin@mail.ru">hidden_assassin@mail.ru</a>
        </div>
      </div>
      <div class="content__item">
        <div class="content__hero"></div>
        <div class="content__title">
          <h3>Наша юридическая информация</h3>
        </div>
        <div class="content__text">
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo doloremque
          </h6>
        </div>
      </div>
    </div>
    <div class="content__block">
      <div class="content__title">
        <h2>Напишите нам</h2>
      </div>
      <form>
        <label v-for="input in customInputs" :key="input.title">
          {{ input.title }}
          <input
            v-model="form[input.model]"
            :type="input.type"
            placeholder="Пишите здесь..."
          >
        </label>
        <label for="">
          Текст сообщения
          <textarea rows="10"
            placeholder="Введите текст сообщения"
            v-model="form.msg"
          ></textarea>
        </label>
      </form>
      <button>Свяжитесь с нами</button>
    </div>
  </section>
</template>

<style lang="stylus">
label
  color colorsWhite
  input, textarea
    background-color colorsGrey
    color colorsWhite
    border none
    border-radius 4px
    padding .5vmax 1vmax
    &:focus, &:hover, &:active
      outline 2px auto colorsMain
      &::placeholder
        opacity 0
    &::placeholder
      transition transitionsMain
      opacity 1
      color colorsWhite
#contact
  button
    align-items center
  .content
    &__title:first-of-type
      text-align center
      grid-area 1/1/1/-1
    &__block
      display grid
      grid-gap 1vmax
      justify-content space-around
      padding 1vmax
      > *
        display flex
        flex-flow column wrap
        justify-content space-around
        @media (max-width: 456px)
          margin-left 7vmax
          text-align right
        > *
          display flex
          flex-flow column wrap
          justify-content space-around
          padding 1vmax 0
      &:nth-child(1)
        height 25vmax
      &:nth-child(2)
        grid repeat(auto-fit, minmax(10vmax, 1fr))\/repeat(auto-fit, minmax(45vmax, 1fr))
</style>

<script lang="ts">
import Vue from 'vue';

interface Input {
  title: string,
  type: string,
  placeholder?: string,
  model: string,
}
interface Data {
  [index: string]: string | { [index: string]: string } | Input[],
}

export default Vue.extend({
  data(): Data {
    return {
      form: {},
      customInputs: [
        {
          title: 'Имя',
          type: 'text',
          // placeholder: '1F582',
          model: 'name',
        },
        {
          title: 'E-mail',
          type: 'mail',
          // placeholder: 'test',
          model: 'email',
        },
        {
          title: 'Номер телефона',
          type: 'tel',
          // placeholder: 'test',
          model: 'tel',
        },
        {
          title: 'Тема сообщения',
          type: 'text',
          // placeholder: 'test',
          model: 'subject',
        },
      ],
    };
  },
});
</script>
