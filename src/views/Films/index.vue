<template>
  <section id="films" class="content">
    <!-- <header /> -->
    <div class="content__block">
      <div class="content__form">
        <form>
          <legend>Фильтр кинофильмов</legend>
          <fieldset>
            <label v-for="filter in customFilters" :key="filter.param">
              {{ filter.title }}
              <!-- <select @change="setFilter($event, filter.param)"
                :value="getList({ where: 'films', what: filter.param })"
              > -->
              <select v-model="filters[filter.param]">
                <option value="" disabled>{{ filter.title }} не выбран/-a</option>
                <option
                  v-for="option in getList({ where: 'films', what: filter.param })"
                  :key="option"
                  :value="option"
                >{{ option }}</option>
              </select>
            </label>
          </fieldset>
        </form>
        <button @click.prevent="filters = {}">Сбросить фильтры</button>
        <div class="content__item">
          <select v-model="filters.sort">
            <option value="">Сортировать по ...</option>
            <option
              v-for="sort in customSorts"
              :key="sort.title"
              :value="sort.param"
            >{{ sort.title }}</option>
          </select>
          <h5>
            Всего {{ getFilms(filters).length }}
            /
            Показано {{
              getFilms(filters).slice(pagination.current === 1
              ? 0
              : pagination.max * (pagination.current - 1), pagination.max * pagination.current)
                .length
              }}
          </h5>
        </div>
      </div>
    </div>
    <div class="content__block">
      <transition name="fade">
        <div class="content__error" v-show="getFilms(filters).length === 0">
          <h3>
            К сожалению, по Вашим параметрам ничего не найдено.
            Попробуйте изменить данные для фильтрации
          </h3>
        </div>
      </transition>
      <transition-group name="fade" tag="p">
        <div class="content__item"
          v-for="film in getFilms(filters).slice(
              pagination.current === 1
              ? 0
              : pagination.max * (pagination.current - 1), pagination.max * pagination.current
            )"
          :key="film.id"
        >
          <router-link :to="`films/${film.id}`">
            <figure>
              <img :src="film.hero" alt="">
              <figcaption>
                <span>
                  <h5
                    v-for="genre in film.params.genre"
                    :key="genre"
                  >{{ genre }}</h5>
                </span>
              </figcaption>
              <div class="content__info">
                <span>
                  <h5>IMBD</h5>
                </span>
                <h5>{{ film.params.imbd[0] }}</h5>
              </div>
            </figure>
            <div class="content__title">
              <h3>{{ film.title }} - {{ film.params.year[0] }}</h3>
            </div>
          </router-link>
        </div>
      </transition-group>
      <paginations
        v-show="getFilms(filters).length > pagination.max"
        :pages="Math.ceil(getFilms(filters).length / pagination.max)"
      />
    </div>
  </section>
</template>

<style lang="stylus">
#films
  header
    height 25vmin
    background linear-gradient(327deg, rgba(240,20,82,1) 33%, rgba(19,24,34,1) 100%)
  .content
    &__error
      display flex
      flex-flow column wrap
      justify-content center
      height 45vh
      padding 1vmax
      margin auto 0
      text-align center
    &__title
      @media (max-width: sm)
        padding-left: 7vmax
    &__info
      display flex
      flex-flow row nowrap
      position absolute
      right 10%
      bottom 15%
      > *
        padding 1vmax
      span
        border solid 2px colorsWhite
        border-radius 5px
        > *
          transform translateY(-1px)

    &__block
      &:last-child p
        display flex
        flex-flow row wrap
        h3
          text-align right
        a
          &:hover, &:active, &:checked
            img
              opacity .5
            figcaption
              opacity 1
          figure
            position relative
            display flex
            background-color #2e5d5a
          img
            width 100%
            height 100%
          figcaption
            text-transform capitalize
            text-align right
            border-right solid 1px colorsWhite
            padding 0 1vmax
            top 25%
            left 25%
            opacity 0
            position absolute
    &__item
      display flex
      flex-flow row wrap
      justify-content space-around
      padding 1vmax
      margin 1vmax
      flex-grow 1
      @media (min-width: sm)
        width 45%
    &__form
      display flex
      flex-flow row wrap
      justify-content space-around
      align-items center

      label, legend
        font-size 3vmax
        font-weight 700
      button
        padding 1vmax
        margin 2vmax 20vmin
      form
        display flex
        flex-flow column wrap
        color colorsWhite
      fieldset
        padding: 1vmax;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
      legend
        align-self center
      label
        padding 1vmax
        display flex
        flex-flow column wrap
        justify-content space-around
        align-items center
        min-width 31%
        flex-grow 1
        @media (max-width: sm)
          min-width: 47%
          max-width 70%
        select
          width 100%
          text-align-last center
          text-align center
</style>

<script lang="ts">
import Paginations from '@/components/Paginations.vue';
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

interface Filter {
  title: string,
  param: string,
}
interface Data {
  // pagination: {[index: string]: number},
  filters: {[index: string]: string},
  customFilters: Filter[],
  customSorts: Filter[],
}

export default Vue.extend({
  metaInfo: {
    title: 'Смотреть фильмы онлайн, бесплатно, без регистрации',
  },
  components: {
    Paginations,
  },
  data(): Data {
    return {
      filters: {},
      customFilters: [
        {
          title: 'Жанр',
          param: 'genre',
        },
        {
          title: 'Год выпуска',
          param: 'year',
        },
        {
          title: 'Режиссёр',
          param: 'director',
        },
        {
          title: 'Язык',
          param: 'lang',
        },
        {
          title: 'Студия',
          param: 'studio',
        },
        {
          title: 'Страна',
          param: 'country',
        },
      ],
      customSorts: [
        {
          title: 'Именам: от А до Я',
          param: 'sort',
        },
        {
          title: 'Именам: от Я до А',
          param: 'sort.reverse',
        },
        {
          title: 'Дате выхода: Новые',
          param: 'sort.year',
        },
        {
          title: 'Дате выхода: Старые',
          param: 'sort.year.reverse',
        },
      ],
    };
  },
  computed: {
    ...mapState([
      'pagination',
      'sortBy',
    ]),
    ...mapGetters([
      'getList',
      'getFilms',
    ]),
  },
  // methods: {
  //   ...mapActions([
  //     'set',
  //     'add',
  //   ]),
  // },
});
</script>
