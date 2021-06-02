<template>
  <section id="benefits-2" class="content">
    <horizontal v-for="service in listServices" :key="service.title"
      :propsHero="service.hero"
      :propsTitle="service.title"
      :propsText="service.text"
    />
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#services'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#benefits-2 {
  display: grid;
  grid-template: auto/repeat(auto-fill, minmax(40vmax, 1fr));
  gap: 2vmax;
  justify-content: space-around;
  @include arrow(
    '../../../assets/img/arrow-top-darkGreen.png',
    $pos: bottom,
    $pseudo-pos: 0,
    $class-pos: 0px,
    $class-hover: -10px,
  );
}
</style>

<script lang="ts">
import Vue from 'vue';
import Horizontal from '@/components/Horizontal.vue';

interface Data {
  [indes: string]: string | { hero: string, title: string, text: string }[]
}

export default Vue.extend({
  components: {
    Horizontal,
  },
  data(): Data {
    return {
      listServices: [
        {
          hero: '01',
          title: 'Design & Construction',
          text: 'Whether you want a unique freeform shape, or a traditional kidney or ractangle design, we have the knowledge, resources, and experience to design and construct any pool you want',
        },
        {
          hero: '02',
          title: 'Swimming pool & SPA repair',
          text: 'We offer extensive swimming pool & spa repair services. We set our standards high, our response time is almost immediate, we provide quality workmanship and value every customer.',
        },
        {
          hero: '03',
          title: 'Maintenance & water treatment',
          text: 'Routine pool maintenance will prolong the life of your swimming pool. Our experienced team can advise you on regular maintenance schedules for new or existing pools.',
        },
        {
          hero: '04',
          title: 'Environmental solutions',
          text: 'Are you looking to add a pool and spa to your backyard, but don`t want to alter the environment in doing so? With us, you can have the luxury, knowing that you`re being environmentally friendly.',
        },
      ],
    };
  },
});
</script>
