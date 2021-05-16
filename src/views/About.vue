<template>
  <section id="about" class="content">
    <!-- <header /> -->
    <div class="content__block">
      <div class="content__title">
        <h1>О нас</h1>
      </div>
      <div class="content__sub-title">
        <h4>Проще. Умнее. Быстрее</h4>
      </div>
      <div class="content__text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nulla architecto
          debitis qui laboriosam voluptatum earum!
          Autem perspiciatis, quae dolorum deleniti magnam alias, in vero voluptates natus iusto
          commodi quas!
        </p>
      </div>
      <div class="content__facts">
        <fun-facts
          :propsNum=8
          propsText='Movies'
          :propsTime='550'
        />
        <fun-facts
          :propsNum='2'
          propsText='TV Shows'
          :propsTime='950'
        />
        <fun-facts
          :propsNum='2112'
          propsText='Total Views'
          :propsTime='0.2'
        />
      </div>
    </div>
    <div class="content__block">
      <div class="content__imgs">
        <img src="@/assets/img/about-0.jpg" alt="">
        <img src="@/assets/img/about-1.jpeg" alt="">
        <img src="@/assets/img/about-2.png" alt="">
      </div>
      <div>
        <div class="content__promo">
          <h6>Развлечения</h6>
        </div>
        <div class="content__title">
          <h3>
            Все новинки театра и кино доступны для Вас в день релиза. Где угодно. Когда угодно.
          </h3>
        </div>
        <div class="content__text">
          <h6>
            Мы любим кино! Этот сайт был создан для таких-же ценителей кино, как и мы.
            Фильмы, представленные здесь, помогут Вам развеять скуку, от души посмеяться,
            или максимально проникнуться переживаниями героев. У нас Вы найдете целый ворох
            Комедий, Мелодрамм, Ужастиков, Экшен-фильмов и много-много чего еще. Милости
            просим, и - Хорошего просмотра!
          </h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
#about
  header
    height 50vh
  .content
    &__imgs
      position relative
      height 45vmax
      width 100%
      img
        border-radius 10px
        width 37vmax
        position absolute
        &:nth-child(1)
          top 5%
          left 5%
        &:nth-child(2)
          top 15%
          right 5%
        &:nth-child(3)
          bottom 15%
          right 20%

    &__block
      padding 1vmax
      @media (max-width: sm)
        margin-left 10vmax
      &:nth-child(1)
        display flex
        flex-flow column wrap
        justify-content space-around
        align-items center
        text-align center
      &:last-child
        display grid
        grid-template 1fr\/repeat(auto-fit, minmax(65vmin, 1fr))
        grid-gap 1vmax
    &__facts
      display flex
      flex-flow row wrap
    &__text
      h6
        font-weight 400

</style>

<script lang="ts">
import FunFacts from '@/components/Fun-facts.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    FunFacts,
  },
});
</script>
