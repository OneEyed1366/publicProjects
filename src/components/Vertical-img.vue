<template>
  <div class="services">
    <div class="services__hero">
      <img :src="require(`@/assets/img/offers/${propsHero}`)" alt="">
    </div>
    <div class="services__title">
      <button>
        <h4>{{ propsTitle }}</h4>
      </button>
    </div>
    <div class="services__text">
      <p>{{ propsText }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 2vmax;
  > * {
    color: $colors--white;
  }
  &__hero {
    img {
      border-radius: 50%;
      height: 22vmax;
      width: 22vmax;
    }
  }
  &__title {
    button {
      background: none;
      text-transform: uppercase;
      font-weight: 700;
      padding: 1vmax 0;
      min-height: 20vmax;

      &::after {
        content: "";
        display: block;
        transition: $transitions--main;
        background-color: $colors--white;
        width: 0;
        height: 2px;
      }
      &:hover, &:active {
        &::after {
          width: 100%;
        }
      }
    }
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
