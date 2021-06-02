<template>
  <div class="services">
    <div class="services__hero">
      <button>
        <h1>{{ propsHero }}</h1>
      </button>
    </div>
    <div class="services__title">
      <h5>{{ propsTitle }}</h5>
    </div>
    <div class="services__text">
      <p>{{ propsText }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  display: grid;
  justify-content: space-around;
  grid:
    "hero title"
    "... text" /1fr 3fr;
  gap: 2vmax;
  @media (max-width: $md) {
    grid:
    "hero title"
    "text text" /1fr 3fr;
  }
  > * {
    display: flex;
    flex-flow: column nowrap;
  }
  &__hero, &__text {
    > * {
      color: #808080;
      > * {
        color: #808080;
      }
    }
  }
  &__hero {
    grid-area: hero;
    button {
      justify-content: space-around;
      border-radius: 50%;
      border: 3px solid lightgray;
      height: 15vmax;
      width: 15vmax;
      transition: $transitions--main;
      background: transparent;
      &:hover, &:active {
        background-color: $colors--light-green;
        border-color: $colors--light-green;
        > * {
          color: $colors--white;
        }
      }
    }
  }
  &__title {
    grid-area: title;
    color: $colors--main;
    text-transform: uppercase;
    min-height: 10vmax;
    justify-content: space-around;
  }
  &__text {
    grid-area: text;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsHero: {
      required: true,
      type: String,
    },
    propsTitle: {
      required: true,
      type: String,
    },
    propsText: {
      required: true,
      type: String,
    },
  },
});
</script>
