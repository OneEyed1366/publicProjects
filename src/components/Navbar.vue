<template>
  <section id="navbar"
    class="content"
    :class="{ 'active': blurred }"
  >
    <router-link to="/" class="content__logo">
      <h1>M</h1>
    </router-link>
    <div class="content__title">
      <router-link to="/">
        <h5>Movie</h5>
      </router-link>
    </div>
    <div class="content__nav">
      <ul>
        <li
          v-for="link in links" :key="link.title"
        >
          <router-link exact exact-active-class="active"
            :to="link.to"
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content__hamburger" @click="change('blurred')">
      <div v-for="i in 2" :key="i"
        :class="{ 'active': blurred }"
      />
    </div>
  </section>
</template>

<style lang="stylus">
@keyframes show
  0%
    opacity 0
    height 130%
  100%
    opacity 1
    height 100%

hamburger(
  line-color = black,
  line-height = 5px,
  line-width = 35px,
  line-margin = 8px,
  transitiions = all ease .4s,
)
  display flex
  flex-flow column wrap
  align-content space-around

  > *
    background-color: line-color
    transition: transitiions
    height: line-height
    width: line-width
    margin: line-margin

    &:first-child.active
      transform rotate(-45deg) translate(-6px, 6px)

    &:last-child.active
      transform rotate(45deg) translate(-8px, -9px)

#navbar
  @media screen and (min-width sm)
    background-color colorsBlack
  @media screen and (max-width sm)
    background-color transparent
  z-index 999
  transition transitionsMain
  position fixed
  top 0
  left 0
  height 100%
  width 6vmax
  max-width 50%
  // &::after
  //   content ''
  //   display block
  //   width 0%
  //   height 100%
  //   position fixed
  //   left 0
  //   opacity .5
  //   background-color transparent
  //   transition transitionsMain

  &.active
    @media screen and (max-width sm)
      width navWidth--sm
      background-color colorsBlack
    @media screen and (min-width sm)
      width navWidth--lg
    &::after
      width 100%
      background-color colorsBlack
      @media screen and (min-width: xs)
        left clamp(230px, 49%, 430px)
        @media screen and (max-width: sm)
          left clamp(110px, 45%, 240px)

    .content
      &__title
        overflow visible
      &__nav
        display flex

  .content
    transition transitionsMain
    height 100%

    &__logo, &__title, &__hamburger
      position fixed
      left 0
      display flex
      flex-flow column wrap
      justify-content center
      @media screen and (max-width sm)
        height 10vmax
        width 10vmax
      @media screen and (min-width sm)
        height 6vmax
        width 6vmax
    // &__logo, &__hamburger
    //   @media screen and (min-width sm)
    //     width 100px
    //     @media screen and (max-width sm)
    //       width 90px
    &__logo
      z-index 2
      font-size 3rem
      align-content center
      background-color colorsMain
      top 0
      h1
        transform translateY(-5%)
        @media screen and (max-width: sm)
          font-size 3rem
    &__title
      overflow hidden
      height 100%
      top 0
      letter-spacing -3px
      align-content center
      writing-mode vertical-rl
      text-orientation upright
      @media screen and (max-width: sm)
        display none
    &__nav
      display none
      height 100%
      position absolute
      top 0
      @media screen and (min-width: sm)
        left 120px
        @media screen and (max-width: sm)
          left 80px

      ul
        display flex
        flex-flow column nowrap
        justify-content center
        animation show 1s both
        text-orientation initial
        writing-mode horizontal-tb
        padding-inline 6vw

        li
          font-weight 700
          font-size 25px
          padding 1vw 0

          a
            &.active, &:hover
              color colorsGrey
              &::after
                width 30%

            &::after
              content ''
              display block
              transition transitionsMain
              background-color colorsGrey
              height 2px
              width 0

    &__hamburger
      hamburger(line-color = colorsWhite)
      position absolute
      bottom 0
      @media screen and (max-width sm)
        // height 90px
        // width fit-content
        background-color colorsBlack
</style>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import Nav from '@/interfaces/navbar';

export default Vue.extend({
  data(): Nav {
    return {
      links: [
        {
          to: '/',
          title: 'Главная',
        },
        {
          to: '/films',
          title: 'Фильмы',
        },
        {
          to: '/about',
          title: 'О нас',
        },
        {
          to: '/contact',
          title: 'Связаться',
        },
      ],
    };
  },
  computed: {
    ...mapState([
      'blurred',
    ]),
  },
  methods: {
    ...mapMutations([
      'change',
    ]),
  },
});
</script>
