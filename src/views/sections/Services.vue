<template>
  <section id="services" class="content">
    <div class="content__title">
      <h4>Services</h4>
    </div>
    <div class="content__block">
      <vertical v-for="service in listServices" :key="service.text"
        :propsHero="service.hero"
        :propsTitle="service.title"
        :propsText="service.text"
        :propsStyleHero="service.style.hero"
        :propsStyleTitle="service.style.title"
        :propsStyleText="service.style.text"
      />
    </div>
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#contacts'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#services {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: $colors--grey;
  @include arrow(
    '../../assets/img/arrow-top-white.png',
    $pos: bottom,
    $pseudo-pos: 0,
    $class-pos: 18px,
    $class-hover: 8px,
    $a-color: $colors--main,
  );

  .content {
    &__block {
      display: grid;
      grid-template: auto/repeat(4, 1fr);
      @media (max-width: $md) {
        grid-template: auto/repeat(auto-fill, minmax(40vmax, 1fr));
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Vertical from '@/components/Vertical.vue';

interface Data {
  [index: string]: string | { hero: string, title: string, text: string, style: {
    hero: string, title: string, text: string, } }[]
}

export default Vue.extend({
  components: {
    Vertical,
  },
  data(): Data {
    return {
      listServices: [
        {
          hero: 'fa fa-5x fa-image',
          title: 'Swimming pool design',
          text: 'Our experts will design a pool of your dreams regardless of its possible complexity and size',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-calendar',
          title: 'Pool construction',
          text: 'We are ready to bring your pool into reality using the latest pool construction techniques and materials',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-male',
          title: 'Maintenance',
          text: 'Spend more time swimming and enjoying your pool and we`ll take care of any necessary maintenance.',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Repair',
          text: 'Don`t let a leak or mechanical issue keep you from enojying your pool. Our service technicians are here to help!',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-level-up',
          title: 'Pool renovations',
          text: 'Has your pool seen better days? We can update and upgrade equipment, renovaet liners, decks and more.',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-area-chart',
          title: 'Automatic pool covers',
          text: 'Our technicians install and maintain auromatic pool covers. We can help with torn fabrics, mechanical issues and more!',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-cogs',
          title: 'Spa restoration',
          text: 'iPool has done multiple spa resurfacing and restoration on the individual and corporate basis.',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
        {
          hero: 'fa fa-5x fa-calendar',
          title: 'Pool closings',
          text: 'Let our service techicians prepare your pool and close it for the winter so that it could serve you better.',
          style: {
            hero: 'color: #48b971',
            title: 'color: #42464f',
            text: 'color: #42464f',
          },
        },
      ],
    };
  },
});
</script>
