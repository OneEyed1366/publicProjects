<template>
  <div class="split"
    :style="propsStyleTemplate ? propsStyleTemplate : 'background: transparent'"
  >
    <div class="split__arrow">
      <a href="#" v-scroll-to="'#contacts'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
    <div class="split__item"
      v-for="item in propsListItems" :key="item.class"
      :style="propsStyleItems ? propsStyleItems : 'background: transparent'"
    >
      <a :href="item.link">
        <i :class="item.class"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.split {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
  @include arrow(
    '../assets/img/arrow-top-darkGreen.png',
    $class: '.split__arrow',
    $class-hover: -38px,
  );

  a {
    font-size: .7vmax;
  }
  &__item {
    padding: 2vmax;
    &:hover, :active {
      a {
        color: $colors--light-green;
      }
    }
    a {
      color: $colors--white;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsStyleTemplate: String,
    propsStyleItems: String,
    propsListItems: Array,
  },
});
</script>
