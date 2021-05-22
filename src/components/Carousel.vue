<template>
  <section id="carousel" class="content">
    <div class="content__title">
      <h1>{{ propsTitle }}</h1>
    </div>
    <swiper :options="propsOptions">
      <swiper-slide v-for="slide in propsSlides" :key="slide.id">
        <template v-if="'id' in slide">
          <router-link :to="`films/${slide.id}`" class="content__slide">
            <img alt=""
              :src="slide.hero"
              style="width: 100%"
            >
            <h6>
              {{ slide.title || slide.name }}
              --
              {{ slide.params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) || '' }}
            </h6>
          </router-link>
        </template>
        <template v-else>
          <img :src="slide.hero" alt="">
          <h6>{{ slide.name }}</h6>
        </template>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="stylus" scoped>
#carousel
  .content
    &__title, &__slide
      h1, h6
        @media screen and (max-width: 456px)
          padding-left 80px
    &__title
      display flex
      justify-content center
      align-content center
      padding 1rem
    &__slide
      h6
        padding 1rem
        text-align right
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsTitle: {
      required: true,
      type: String,
    },
    propsSlides: Array,
    propsOptions: Object,
  },
});
</script>
