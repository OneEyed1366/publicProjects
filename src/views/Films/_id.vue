<template>
  <section id="film" class="content">
    <header
      :style="{
        background: `url(${film.hero}) center top / cover`,
      }"
    />
    <div id="watch" class="content__block">
      <div class="content__title">
        <h1>{{ film.title }}</h1>
        <h4>{{ film.params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}</h4>
      </div>
      <!-- <div class="content__item">
        <img :src="film.hero" alt="">
      </div> -->

      <div class="content__item">
        <div class="content__btn">
          <button v-show="film.trailer" @click="toWatch = film.trailer">
            Трейлер
          </button>
          <button v-show="film.film" @click="toWatch = film.film">
            Фильм
          </button>
        </div>
        <iframe
          :src="toWatch"
          allowfullscreen
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture
          "
        ></iframe>
      </div>
    </div>
    <div class="content__block content__block_no-display">
      <div class="content__item">
        <ul>
          <li>
            <h5>
              Год выпуска:
              {{ film.params.year.join('-').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              Страна:
              {{ film.params.country.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              Язык:
              {{ film.params.lang.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              Жанр:
              {{ film.params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              Продолжительность:
              {{ parseInt(film.params.duration[0] / 60) }} ч.
              {{ film.params.duration[0] - (parseInt(film.params.duration[0] / 60) * 60) }} мин.
            </h5>
          </li>
          <li>
            <h5>
              Студия:
              {{ film.params.studio.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              Режиссёр:
              {{ film.params.director.join(', ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
            </h5>
          </li>
          <li>
            <h5>
              IMBD:
              {{ film.params.imbd[0] }}
            </h5>
          </li>
        </ul>
      </div>
      <div class="content__item">
        <carousel
          propsTitle="Актёры"
          :propsSlides="film.params.cast"
          :propsOptions="swiperOption"
        />
      </div>
    </div>
    <div class="content__block content__block_no-display">
      <div class="content__item">
        <carousel
          propsTitle="Похожие фильмы"
          :propsSlides="getFilmsSimilars(film)"
          :propsOptions="swiperOption"
        />
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
#film
  header
    height 45vmax
  .content
    &__item
      img
        width 100%
    &__block:not(.content__block_no-display)
      padding 1vmax
      display flex
      flex-flow column wrap
      > *
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
#watch
  .content
    &__btn
      > *
        margin 1vmax
</style>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Carousel from '@/components/Carousel.vue';
import intfSwiper from '@/interfaces/swiper-options';

interface Data {
  [index: string]: string | number | intfSwiper | boolean,
}

export default Vue.extend({
  metaInfo: {
    title: 'Смотреть фильм онлайн',
  },
  components: {
    Carousel,
  },
  data(): Data {
    return {
      toWatch: false,
      swiperOption: {
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        navigation: {
          hideOnClick: false,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1000: {
            slidesPerView: 4,
          },
          778: {
            slidesPerView: 3,
          },
          556: {
            slidesPerView: 2,
          },
          226: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      'getById',
      'getFilmsSimilars',
    ]),
    film(): any {
      return this.getById(Number(this.$route.params.id));
    },
  },
});
</script>
