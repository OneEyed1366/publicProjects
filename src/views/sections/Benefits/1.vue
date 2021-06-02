<template>
  <section id="benefits-1" class="content">
    <div class="content__title">
      <h3>Why choosing us is a smart idea?</h3>
    </div>
    <div class="content__block">
      <vertical v-for="benefit in listBenefits" :key="benefit.text"
        :propsHero="benefit.hero"
        :propsTitle="benefit.title"
        :propsText="benefit.text"
      />
    </div>
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#benefits-3'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#benefits-1 {
  background: url('../../../assets/img/bg-1.jpg') center / cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  @include arrow(
    '../../../assets/img/arrow-top-white.png',
    $pos: bottom,
    $pseudo-pos: 0,
    $class-pos: 0px,
    $class-hover: -10px,
    $a-color: $colors--main,
  );
  > * {
    padding: 2vmax 0;
  }
  .content {
    &__block {
      display: grid;
      grid-template: auto/repeat(4, 1fr);
      @media (max-width: $md) {
        grid-template: auto/repeat(auto-fit, minmax(40vmax, 1fr));
      }
    }
    &__title {
      text-align: center;
      > * {
        color: $colors--white;
        text-transform: uppercase;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Vertical from '@/components/Vertical.vue';

interface Data {
  [indes: string]: string | { hero: string, title: string, text: string }[]
}

export default Vue.extend({
  components: {
    Vertical,
  },
  data(): Data {
    return {
      listBenefits: [
        {
          hero: 'fa fa-5x fa-star',
          title: 'Service range',
          text: 'If you`re a lucky owner of a pool, we can make you even happier by taking care of all the maintenance - from checking filters & heating to chlorine levels!',
        },
        {
          hero: 'fa fa-5x fa-leaf',
          title: 'Skilled pros',
          text: 'Each single member of our pool maintenace crew is skilled enough to make any kind of a check, repair or maintenance work for your pool.',
        },
        {
          hero: 'fa fa-5x fa-paint-brush',
          title: 'Best equipment',
          text: 'As we`re doing a lot of technical maintenace, sometimes we either need special tools or special equipment to repait your pool`s parts/ Be sure that we have it all!',
        },
        {
          hero: 'fa fa-5x fa-money',
          title: 'Affordable prices',
          text: 'While the pricing for servicing an average swimming pool throughout all the seasons of he year may be pricy, we always have special promo offers to lighten things up!',
        },
      ],
    };
  },
});
</script>
