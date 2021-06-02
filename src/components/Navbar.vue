<template>
  <header id="navbar" class="content">
    <div class="content__hamburger"
      @click="navClicked = !navClicked"
    >
      <div :class="{ 'active': navClicked }" />
      <div :class="{ 'active': navClicked }" />
      <div :class="{ 'active': navClicked }" />
    </div>
    <div class="content__logo">
      <a href="#" v-scroll-to="'#greetings'">
        <img src="@/assets/img/logo.png" alt="">
      </a>
    </div>
    <div class="content__navs"
      :class="{ 'active': navClicked }"
    >
      <ul>
        <li><a href="#" v-scroll-to="'#greetings'">Home</a></li>
        <li><a href="#" v-scroll-to="{ el: '#about', offset: -100 }">About</a></li>
        <li><a href="#" v-scroll-to="'#benefits-1'">Advantages</a></li>
        <li><a href="#" v-scroll-to="'#services'">Services</a></li>
        <li><a href="#" v-scroll-to="'#works'">Gallery</a></li>
        <li><a href="#" v-scroll-to="'#contacts'">Contacts</a></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
#navbar {
  z-index: 999;
  width: 100%;
  transition: $transitions--main;
  background-color: $colors--white;
  position: fixed;
  box-shadow: 0px 0px 3px 0px #808080;
  @media (min-width: $md) {
    &:not(.sticky) {
      box-shadow: none;
      background: transparent;
    }
  }
  display: grid;
  grid:
    "logo navs" 1fr;
  grid-gap: 2vmax;
  align-items: center;
  @media (max-width: $md) {
    grid:
      "hamburger logo" 1fr/max-content 7fr;
  }

  .content {
    &__logo {
      grid-area: logo;
      height: max-content;
      width: max-content;
    }
    &__navs {
      grid-area: navs;
      transition: $transitions--main;
      @media (max-width: $md) {
        padding-top: 1vmax;
        background-color: $colors--white;
        width: 250px;
        height: 100%;
        max-width: 40%;
        z-index: -1;
        position: fixed;
        top: 10vmax;
        left: 0;

        &:not(.active) {
          left: -250px;
        }
      }
      > * {
        display: flex;
        flex-flow: row wrap;
        @media (max-width: $md) {
          flex-flow: column nowrap;
        }
        > * {
          @media (min-width: $md) {
            text-align: center;
          }
          text-transform: uppercase;
          transition: $transitions--main;
          margin: 1vmax;
          padding: .5vmax;
          border-radius: 5px;
          &:active, &:hover, &.active {
            background-color: $colors--white;
            a {
              color: $colors--dark-green;
            }
            @media (max-width: $md) {
              background-color: $colors--dark-green;
              a {
                color: $colors--white;
              }
            }
          }
        }
      }
    }
    &__hamburger {
      @include hamburger(
        $md,
        $colors--main,
      );
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

interface Data {
  [index: string]: string | boolean
}

export default Vue.extend({
  data(): Data {
    return {
      navClicked: false,
    };
  },
});
</script>
