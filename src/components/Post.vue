<template>
  <section class="posts">
    <div class="posts__header">
      <slot name="header">
        <h1>Some basic title</h1>
      </slot>
    </div>
    <div class="posts__dynamic">
      <slot name="content">
        <h6>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorum voluptatibus
          sed velit quos pariatur eum est modi. Ullam numquam voluptate facilis, laudantium qui
          dolores deleniti doloremque! Minima, deserunt iusto?
        </h6>
      </slot>
    </div>
  </section>
</template>

<style lang="stylus">
.posts
  background-color colorsBlack
  height fit-content
  padding 1rem 0

  &__header, &__dynamic
    display flex
    flex-flow row wrap
    padding 1 rem
    @media (max-width: sm)
      padding-left 11vmax
      // text-align right
  &__header
    text-transform uppercase
    text-align center
    justify-content space-around
    font-weight 700
    font-size 9.5vmin
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
