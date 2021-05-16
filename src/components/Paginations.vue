<template>
<!-- Pagination Component -->
  <div class="paginations">
    <ul>
      <li
        v-show="
          pages === pagination.current
          && pagination.current - pagination.step > 1
          || pages > pagination.step
            && pagination.current !== 1
            && pagination.current >= (1 + pagination.step)
        "
      >
        <button
          @click="set({ to: 'pagination', sub: 'current', content: 1 })"
        >
          ...
        </button>
      </li>
      <li
        v-for="page in calculatePages()"
        :key="page"
      >
        <button
          :class="{ 'active': page === pagination.current }"
          @click="set({ to: 'pagination', sub: 'current', content: page })"
        >{{ page }}</button>
      </li>
      <li
        v-show="
          pagination.current === 1
          && pagination.current + pagination.step < pages
          || pagination.current < pages
            && pagination.current <= (pages - pagination.step)
        "
      >
        <button
          @click="set({ to: 'pagination', sub: 'current', content: pages })"
        >
          ...
        </button>
      </li>
    </ul>
  </div>
<!-- END Pagination Component -->
</template>

<style lang="stylus" scoped>
.paginations
  padding 1vmax
  &, ul
    display flex
    justify-content space-around
    align-items center
  button
    padding .5vmax 1vmax
    margin .5vmax
</style>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  props: {
    pages: Number,
  },
  computed: {
    ...mapState([
      'pagination',
    ]),
  },
  methods: {
    ...mapActions([
      'set',
    ]),
    calculatePages() {
      const result: number[] = [];

      for (let num = 1; num <= this.pages; num += 1) {
        result.push(num);
      }

      return result.slice(
        this.pagination.current === 1
          ? this.pagination.current - 1
          : this.pagination.current - 2,
        (this.pagination.current - 1) + this.pagination.step,
      );
      // if (this.pagination.current + this.pagination.step <= this.pages) {
      //   return result.slice(this.pagination.current)
      // }
    },
  },
});
</script>
