<template>
  <section id="contacts" class="content">
    <div class="content__title">
      <h4>Contacts</h4>
    </div>
    <div class="content__info">
      <a href="tel:+80023456789">
        <i class="fa fa-2x fa-phone">
          800-2345-6789
        </i>
      </a>
      <a href="tel:+80023456789">
        <i class="fa fa-2x fa-fax">
          800-2345-6789
        </i>
      </a>
      <p>4578 Marmora Road, Glasgow D04 89GR</p>
    </div>
    <div class="content__form">
      <form>
        <textarea v-model="form.name" type="text" placeholder="Name" />
        <textarea v-model="form.phone" type="text" placeholder="Phone" />
        <textarea v-model="form.email" type="text" placeholder="E-mail" />
        <textarea v-model="form.message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
#contacts {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > * {
    padding: 1vmax 0;
  }

  .content {
    &__title {
      text-transform: uppercase;
      > * {
        color: $colors--black;
      }
    }
    &__info {
      text-align: center;
      a {
        padding: 0 3vmax;
        color: $colors--main;
        &:hover, &:active {
          color: $colors--light-green;
        }
      }
    }
    &__form {
      width: 100%;
      form {
        display: grid;
        grid-template: auto/repeat(3, 1fr);
        gap: 2vmax;
        @media (max-width: $md) {
          grid-template: auto/1fr;
        }
        textarea {
          background-color: $colors--white;
          border-radius: 5px;
          grid-row: span 2;
          height: 6vmax;
          &::placeholder {
            color: $colors--black;
          }
          @media (max-width: $md) {
            grid-column: 1/-1;
          }
        }
        @media (min-width: $md) {
          textarea:nth-last-of-type(1) {
            grid-column: 1/-1;
            grid-row: span 2;
          }
        }
        button {
          background: $colors--main;
          color: $colors--white;
          text-transform: uppercase;
          &:hover, &:active {
            background: $colors--light-green;
          }
          @media (min-width: $md) {
            grid-column: 2;
          }
        }
      }
    }
    &__item {
      > * {
        color: $colors--white;
      }
      &:hover, &:active {
        > * {
          color: $colors--light-green;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

interface Data {
  [index: string]: string
  | { name: string, phone: string, email: string, message: string }
  | { class: string, link: string }[]
}

export default Vue.extend({
  data(): Data {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
    };
  },
});
</script>
