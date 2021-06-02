<template>
  <div class="services">
    <div class="services__hero"
      :style="propsStyleHero ? propsStyleHero : 'color: #ffffff'"
    >
      <i :class="propsHero"></i>
    </div>
    <div class="services__title">
      <button>
        <h6
          :style="propsStyleTitle ? propsStyleTitle : 'color: #ffffff'"
        >{{ propsTitle }}</h6>
      </button>
    </div>
    <div class="services__text">
      <p
        :style="propsStyleText ? propsStyleText : 'color: #ffffff'"
      >{{ propsText }}</p>
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
    text-align: center;
  }
  &__title {
    button {
      text-transform: uppercase;
      font-weight: 700;
      margin: 2vmax 0;
      padding: 0;
      transition: $transitions--main;
      background: none;
      min-height: 10vmax;

      &::after {
        content: "";
        display: block;
        transition: $transitions--main;
        background-color: $colors--dark-green;
        width: 0;
        height: 2px;
      }
      &:hover, &:active, &:focus {
        > * {
          color: $colors--dark-green;
        }
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
    propsStyleHero: String,
    propsStyleTitle: String,
    propsStyleText: String,
  },
});
</script>
