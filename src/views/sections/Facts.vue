<template>
  <section id="facts" class="content">
    <counter v-for="counter in listCounters" :key="counter.text"
      :propsNum="counter.number"
      :propsText="counter.text"
      :propsTime="counter.time"
    />
    <div class="content__arrow">
      <a href="#" v-scroll-to="'#services'">
        <i class="fa fa-2x fa-arrow-down"></i>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#facts {
  display: grid;
  grid-template: auto/repeat(4, 1fr);
  background-color: $colors--grey;
  padding: 2vmax 0;
  @media (max-width: $md) {
    grid-template: auto/repeat(auto-fit, minmax(40vmax, 1fr));
  }
  @include arrow(
    '../../assets/img/arrow-bottom-white.png',
    $pos: bottom,
    $class-hover: -65px,
    $a-color: $colors--main,
  );
}
</style>

<script lang="ts">
import Vue from 'vue';
import Counter from '@/components/Counter.vue';

interface Data {
  [index: string]: string | {text: string, number: number, time: number}[]
}

export default Vue.extend({
  components: {
    Counter,
  },
  data(): Data {
    return {
      listCounters: [
        {
          text: 'Offers',
          number: 254,
          time: 40,
        },
        {
          text: 'Years of Experience',
          number: 10,
          time: 250,
        },
        {
          text: 'Qualified Specialists',
          number: 26,
          time: 190,
        },
        {
          text: 'Satisfied Clients',
          number: 99,
          time: 150,
        },
      ],
    };
  },
});
</script>
