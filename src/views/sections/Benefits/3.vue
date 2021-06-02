<template>
  <section id="benefits-3" class="content">
    <div class="content__title">
      <h4>What we offer</h4>
    </div>
    <div class="content__block">
      <vertical v-for="offer in listOffers" :key=offer.text
        :propsHero="offer.hero"
        :propsTitle="offer.title"
        :propsText="offer.text"
      />
    </div>
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#works'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#benefits-3 {
  background: linear-gradient(180deg, $colors--dark-green 34%, $colors--light-green 66%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  @include arrow(
    '../../../assets/img/arrow-bottom-lightGreen.png',
    $class-hover: -65px,
    $pos: bottom
  );

  .content {
    &__block {
      display: grid;
      grid-template: auto/repeat(3, 1fr);
      @media (max-width: $md) {
        grid-template: auto/repeat(auto-fill, minmax(40vmax, 1fr));
      }
    }
    &__title {
      text-transform: uppercase;
      text-align: center;
      > * {
        color: $colors--white;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Vertical from '@/components/Vertical-img.vue';

interface Data {
  [index: string]: string | { hero: string, title: string, text: string }[]
}

export default Vue.extend({
  components: {
    Vertical,
  },
  data(): Data {
    return {
      listOffers: [
        {
          hero: '0.jpg',
          title: 'A leader in the swimming pool service industry',
          text: 'iPool is widelu known for increasing efficiency and lowering prices with a proven system and technological advances in pool design and construction as well as in repair and maintenance',
        },
        {
          hero: '1.jpg',
          title: 'Superior training & Performance',
          text: 'Our certified pool professionals have completeed the nationally-recognized training program. Our Certified Pool Operators have completed continual education classess to stay on top of the industry competition.',
        },
        {
          hero: '2.jpg',
          title: 'The brand pool owners trust',
          text: 'Our customers choose us for affordable, reliable, and knowledgeable service they can trust. iPool`s strong reputation sets customers at ease trusting us in the hearts of people.',
        },
      ],
    };
  },
});
</script>
