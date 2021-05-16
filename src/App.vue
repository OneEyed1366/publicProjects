<template>
  <div id="app">
    <navbar />
    <router-view
      :class="{ 'blurred': blurred }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar,
  },
  computed: {
    ...mapState([
      'blurred',
    ]),
  },
});
</script>

<style lang="stylus">
body
  box-sizing border-box
  font-family system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif
  margin 0
  padding 0
h1, h2, h3, h4, h5, h6, p, a, figure, figcaption, img, input, textarea
  color colorsWhite
  margin 0
  text-decoration none
  transition transitionsMain
h1
  font-size 5vmax
h2
  font-size 4.5vmax
h3
  font-size 4vmax
h4
  font-size 3.5vmax
h5
  font-size 3vmax
h6, a
  font-size 2vmax
p
  font-size 1.5vmax
a
  &:hover, &:active
    color colorsMain
button
  outline none
  border none
  transition transitionsMain
  color colorsWhite
  background-color transparent
  border 2px solid colorsWhite
  border-radius 5px
  font-size 3vmax
  &:hover, &:active, &.active
    color colorsBlack
    border-color colorsGrey
    background-color colorsWhite
ul
  margin-inline 0
  margin-block 0
  padding-inline 0
li
  list-style none
select
  font-size 2vmax
  text-transform capitalize
fieldset
  border none
section
  transition transitionsMain
  background-color colorsLighterBlack
  &.blurred
    filter brightness(.3)
@media screen and (min-width: sm)
  section:nth-child(n + 2)
    margin-left 6vmax
.fade
  &-enter-active, &-leave-active
    transition: opacity .5s
  &-enter, &-leave-to
    opacity: 0
</style>
