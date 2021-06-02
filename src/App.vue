<template>
  <div id="app">
    <navbar
      :class="{ 'sticky': scrolled }"
    />
    <router-view />
  </div>
</template>

<style lang="scss">
@for $i from 1 to 7 {
  h#{0 + $i} {
    font-size: 5vmax - ($i / 2);
    @media (max-width: $md) {
      font-size: 5.5vmax - ($i / 2);
    }
  }
}
p {
  font-size: 2vmax;
  @media (max-width: $md) {
    font-size: 3vmax;
  }
}
body {
  margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
  transition: $transitions--main;
  margin-block: 0;
  line-height: 4.5vmax;
  @media (max-width: $md) {
    line-height: 6vmax;
  }
}
a, a:hover, a:active, a:checked {
  font-size: 1.2vmax;
  text-decoration: none;
  color: initial;
  transition: $transitions--main;
}
button {
  transition: $transitions--main;
  border: none;
  padding: 2vmax 3.5vmax;
  border-radius: 10px;
  background: $colors--linear;
  &:hover, &:active, &:checked {
    background: $colors--light-green;
  }
  > * {
    color: $colors--white;
  }
}
ul {
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
}
li {
  list-style: none;
}
header {
  padding: 2vmax 8vmax;
  @media (max-width: $md) {
    padding: 2vmax;
  }
}
section {
  padding: 80px 8vmax;
  @media (max-width: $md) {
    padding: 80px 2vmax;
  }
}
img {
  height: 100%;
  width: 100%;
}
#app {
  font: $font--basic;
  color: $colors--black;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    isScrolled() {
      window.onscroll = () => {
        if (window.scrollY > 30) {
          this.scrolled = true;
        } else {
          this.scrolled = false;
        }
      };
    },
  },
  mounted() {
    this.isScrolled();
  },
});
</script>
