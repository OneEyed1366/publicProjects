<template>
  <section id="greetings" class="content">
    <div class="content__block">
      <div class="content__title">
        <h5>Let your dream pool</h5>
        <h1>design begin right now!</h1>
      </div>
      <div class="content__text">
        <h6>
          We are dedicated to building pools and spas that are customized to the client's individual
          needs, taste, architectural design, and budget. Utilizing the latest innovations in pool
          technology, our pools are built to the highest standard of workmanship.
        </h6>
      </div>
      <div class="content__btn">
        <button>
          <h6>Contact us</h6>
        </button>
      </div>
    </div>
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#benefits-1'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#greetings {
  background: url(../../assets/img/bg-0.jpg) center/cover;
  padding-top: 11vmax;
  display: grid;
  @include arrow(
    '../../assets/img/arrow-top-white.png',
    $pos: bottom,
    $pseudo-pos: 0,
    $class-pos: 18px,
    $class-hover: 8px,
    $a-color: $colors--main,
  );
  .content {
    &__title, &__text, &__btn {
      > * {
        color: $colors--white;
      }
    }
    &__title, &__btn {
      > * {
        text-transform: uppercase;
        margin: 3vmax;
      }
    }
    &__block {
      height: 100%;
      display: grid;
      grid:
        "title title title"
        "text text text"
        "... btn ...";
      gap: 2vmax;
      justify-content: space-around;
      align-items: flex-end;
      text-align: center;
    }
    &__title {
      grid-area: title;
    }
    &__text {
      grid-area: text;
    }
    &__btn {
      grid-area: btn;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
