<template>
  <div class="fun-facts">
    <div class="fun-facts__num">
      <h1>{{ num }}</h1>
    </div>
    <div class="fun-facts__text">
      <h6>{{ propsText }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fun-facts {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  > * {
    text-align: center;
    padding: 1vmax;
  }
  &__text {
    > * {
      color: $colors--black;
    }
    &::before {
      content: '';
      display: block;
      height: 3px;
      width: 70px;
      background-color: $colors--main;
      margin: 1vmax auto;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsNum: {
      required: true,
      type: Number,
    },
    propsText: {
      required: true,
      type: String,
    },
    propsTime: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    count(): void {
      const counter = setInterval(() => {
        if (this.propsNum > this.num) {
          this.num += 1;
        }
      }, this.propsTime);

      if (this.propsNum === this.num) {
        clearInterval(counter);
      }
    },
  },
  mounted() {
    this.count();
  },
});
</script>
