<template>
  <section id="promo" class="content"
    :style="{
      background: `url(${propsImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }"
  >
    <div class="content__block">
      <div class="content__title">
        <span>
          <h6>{{ propsSubTitle }}</h6>
        </span>
        <span>
          <h1>{{ propsTitle }}</h1>
        </span>
      </div>
      <div class="content__text">
        <span>{{ propsText }}</span>
      </div>
      <div class="content__btn">
        <router-link :to="propsLink">Посмотреть фильм</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="stylus" scoped>
#promo
  height 65vmax
  display grid
  grid-template 1fr\/repeat(2, 1fr)

  .content
    &__block
      display flex
      flex-flow column nowrap
      align-self flex-start
      height fit-content
      padding 1rem
      grid-area 1/1/1/1
      @media screen and (max-width: sm)
        grid-area 1/1/1/-1
      > *:nth-child(2)
        padding 1rem
    &__title, &__text, &__btn
      align-self flex-start
      @media (max-width: sm)
        align-self flex-end
    &__title
      text-align left
      @media (max-width: sm)
        text-align right

      span
        margin 1rem
        &:first-child
          font-size 15px
    &__text
      span
        font-size 19px
        font-weight 400
        letter-spacing 2px
    &__btn
      a
        display flex
        flex-flow row nowrap
        text-transform uppercase
        padding 2vmax
        background-color colorsMain
        border-radius 5px
        &:hover, &:active
          color colorsBlack
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsImg: {
      required: true,
      type: String,
    },
    propsTitle: {
      required: true,
      type: String,
    },
    propsSubTitle: String,
    propsText: String,
    propsLink: String,
  },
});
</script>
