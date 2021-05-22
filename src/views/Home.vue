<template>
  <section id="main" class="content">
    <swiper ref="mySwiper" class="content__block"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="film in films"
        :key="film.id"
      >
        <a :href="`films/${film.id}`" class="content__slider"
          :style="{
            background: `url(${film.hero})`, backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }"
        >
          <div class="content__title">
            <h1>{{ film.title }}</h1>
          </div>
          <div class="content__desc">
            <h6>{{ film.desc }}</h6>
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="content__block">
      <carousel
        propsTitle="Популярные фильмы"
        :propsSlides="films"
        :propsOptions="swiperExport"
      ></carousel>
    </div>
    <div class="content__block">
      <promo
        :propsImg="films[0].hero"
        :propsLink="`films/${films[0].id}`"
        :propsTitle="films[0].title"
        :propsSubTitle="films[0].params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase())"
      />
    </div>
    <div class="content__block">
      <carousel
        propsTitle="Недавно добавленные"
        :propsSlides="films"
        :propsOptions="swiperExport"
      ></carousel>
    </div>
    <div class="content__block">
      <post />
    </div>
    <div class="content__block">
      <promo
        :propsImg="films[0].hero"
        :propsLink="`films/${films[0].id}`"
        :propsTitle="films[0].title"
        :propsSubTitle="films[0].params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase())"
      />
    </div>
    <div class="content__block">
      <post>
        <template v-slot:header>
          <h1>Oscar winners 2020: see the full list</h1>
        </template>
        <template v-slot:content>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus, labore
            provident cupiditate, molestiae magni magnam totam sequi, nam cum quia. Unde incidunt
            quia debitis quas ea quod ab sapiente?
          </h6>
          <router-link to="/">Узнать подробности</router-link>
        </template>
      </post>
    </div>
    <div class="content__block">
      <promo
        :propsImg="films[0].hero"
        :propsLink="`films/${films[0].id}`"
        :propsTitle="films[0].title"
        :propsSubTitle="films[0].params.genre.join(', ').replace(/\b\w/g, (l) => l.toUpperCase())"
      />
    </div>
  </section>
</template>

<style lang="stylus">
@keyframes descShow
  0%
    padding-left 3rem
    opacity 0
  100%
    padding-left 0
    opacity 1
#main
  height 100%

  .content
    &__block:nth-child(7)
      .posts__dynamic
        justify-content space-around

        > *
          padding 1rem
          text-align center
        a
          background-color transparent
          transition transitionsMain
          border-radius 5px
    &__slider
      display grid
      grid-template repeat(4, 1fr)\/repeat(4, 1fr)
      height 100vh

    &__title, &__desc
      animation descShow .6s both
      align-self center
    &__title
      grid-area 2/2/3/3
      animation-delay 1.5s
      font-size 5vmax
    &__desc
      grid-area 3/2/4/4
      animation-delay 3s
  .swiper
    &-button-prev, &-button-next
      transition transitionsMain
      color colorsWhite
      border 1px solid colorsWhite
      border-radius 25%
      opacity 0
      padding 1.5rem
      margin 0 5rem

      &:hover
        background-color colorsMain
    &-container:first-child:hover
      @media screen and (min-width: sm)
        .swiper-button-prev, .swiper-button-next
          opacity 1
          margin 0 2rem
</style>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import intfHome from '@/interfaces/home';
import Carousel from '@/components/Carousel.vue';
import Promo from '@/components/Promo.vue';
import Post from '@/components/Post.vue';

export default Vue.extend({
  metaInfo: {
    title: 'Movie - кинофильмы онлайн',
  },
  name: 'Home',
  components: {
    Carousel,
    Promo,
    Post,
  },
  data(): intfHome {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 9000,
        },
        navigation: {
          hideOnClick: false,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperExport: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
          delay: 6000,
        },
        controller: {
          inverse: true,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   dynamicBullets: true,
        //   progressbarOpposite: true,
        // },
        breakpoints: {
          1000: {
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
    ...mapState([
      'films',
    ]),
  },
});
</script>
