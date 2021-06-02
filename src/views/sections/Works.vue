<template>
  <section id="works" class="content">
    <div class="content__title">
      <h4>Our works</h4>
    </div>
    <div class="content__works">
      <div class="content__item" v-for="item in 40" :key="item">
        <img src="@/assets/img/bg-1.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#works {
  display: flex;
  flex-flow: column nowrap;

  .content {
    &__title {
      text-align: center;
    }
    &__works {
      display: grid;
      grid-template: auto/repeat(40, 1fr);
      @media (max-width: $md) {
        grid-template: auto/repeat(15, 1fr);
      }
    }
    &__item {
      img {
        height: 100%;
        width: 100%;
      }
      &:nth-child(odd) {
        grid-column: span 6;
        grid-row: span 6;
      }
      &:nth-child(even) {
        grid-column: span 3;
        grid-row: span 2;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
