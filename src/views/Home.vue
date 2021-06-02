<template>
  <main id="home" class="content">
    <greetings />
    <about />
    <facts />
    <benefits />
    <benefits-2 />
    <benefits-3 />
    <services />
    <works />
    <split
      propsStyleTemplate="background-color: #42b773"
      propsStyleItems="color: #ffffff"
      :propsListItems="listSocials"
    />
    <contacts />
  </main>
</template>

<style lang="scss">
#home {
}
</style>

<script lang="ts">
import Vue from 'vue';
import Split from '@/components/Split-bar.vue';
import Greetings from './sections/Greetings.vue';
import About from './sections/About.vue';
import Facts from './sections/Facts.vue';
import Benefits from './sections/Benefits/1.vue';
import Benefits2 from './sections/Benefits/2.vue';
import Benefits3 from './sections/Benefits/3.vue';
import Services from './sections/Services.vue';
import Works from './sections/Works.vue';
import Contacts from './sections/Contact.vue';

interface Data {
  [index: string]: string | {[index: string]: string}[]
}

export default Vue.extend({
  metaInfo: {
    title: 'iPool - проектирование бассейнов под ключ!',
  },
  components: {
    Greetings,
    About,
    Facts,
    Benefits,
    Benefits2,
    Benefits3,
    Services,
    Works,
    Contacts,
    Split,
  },
  data(): Data {
    return {
      listPromoBenefits: [
        {
          hero: 'fa fa-5x fa-star',
          title: 'Service range',
          text: 'If you"re a lucky owner of a pool, we can make you even happier by taking care of all the maintenance - from checking filters & hearing to chlorine levels!',
        },
        {
          hero: 'fa fa-5x fa-leaf',
          title: 'Skilled pros',
          text: 'Each single member of our pool maintenance crew is skilled enough to make any kind of a check, repair or maintenance work for your pool',
        },
        {
          hero: 'fa fa-5x fa-paint-brush',
          title: 'Best equipment',
          text: 'As we`re doing a lot of technical maintenance, sometimes we either need special tools or special equipment to repair your pool`s parts. Be sure that we have it all!',
        },
        {
          hero: 'fa fa-5x fa-money',
          title: 'Affordable prices',
          text: 'While the pricing for servicing an average swimming pool throughout all the seasong of the year may be price, we always have special promo offers to lighten things up!',
        },
      ],
      listPromoServices: [
        {
          title: 'Design & construction',
          text: 'Whether you want a unique freedorm shape, or a traditional kidney or rectangle design, we have the knowledge, resources, and experience to design and construct any pool you want',
        },
        {
          title: 'Maintenance & water treatment',
          text: 'Routine pool maintenance will prokong the life of your swimming pool. Our experienced team can advise you on regular maintenance schedules for new or existing pools.',
        },
        {
          title: 'Swimming poll & spa repair',
          text: 'We offer extensive swimming pool & spa repair services. We set our standards high, our response time is almost immediate, we provide quality wokmanship and value every customer.',
        },
        {
          title: 'Environmental solutions',
          text: 'Are you looking to add a pool and spa to your backyard, but don`t want to alter the environment in doing so? With us, you can have the luxury, knowing that you`re being environmentally friendly.',
        },
      ],
      listServices: [
        {
          hero: 'fa fa-5x fa-img',
          title: 'Swimming pool design',
          text: 'Our experts will design a pool of our dreams regardless of its possible complexity and size',
        },
        {
          hero: 'fa fa-5x fa-schedule',
          title: 'Pool construction',
          text: 'We are ready to bring your pool into reality using the latest pool construction techniques and materials.',
        },
        {
          hero: 'fa fa-5x fa-mail',
          title: 'Maintenance',
          text: 'Spend more time swimming and enjoying your pool and we`l take care of any necessary maintenance.',
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Repair',
          text: 'Don`t let a leak of mechanical issue keep you from enjoying your pool. Our service technicals are here to help!',
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Pool renovations',
          text: 'Has your pool seen better dayys? We can update and upgrade equipment, renovate liners, decks and more.',
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Automatic pool covers',
          text: 'Our techniians install and maintain automatic pool covers. We can help with torn fabrics, mechanical issues and more!',
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Spa restoration',
          text: 'iPool has done multiple spa resurfacing and restoration on the individual ad corporate basis.',
        },
        {
          hero: 'fa fa-5x fa-question',
          title: 'Pool closings',
          text: 'Let our service technicians prepare your pool and close it for the winter so that it could serve you better.',
        },
      ],
      listOffers: [
        {
          hero: '@/assets/img/bg-0.jpg',
          title: 'A leader in the swimming pool service industry',
          text: 'iPool is widely known for increasing efficiency and lowering prices with a proven system and technological advances in pool design and construction as well as in repair and maintenance.',
        },
        {
          hero: '@/assets/img/bg-0.jpg',
          title: 'Superior training & performance',
          text: 'Our certified pool professionals have completed the nationally-recognized training program. Our Certified Pool Operators have completed continual education classes to stay on top the industry competition.',
        },
        {
          hero: '@/assets/img/bg-0.jpg',
          title: 'The brand pool owners trust',
          text: 'Our customers choose us for affordable, reliable, and knowledgeable service they can trust. iPool`s strong reputation sets customers at ease trusting us in the hearts of people.',
        },
      ],
      listSocials: [
        {
          class: 'fa fa-5x fa-vk',
          link: 'https://vk.com/oneeyed1366',
        },
        {
          class: 'fa fa-5x fa-instagram',
          link: 'https://www.instagram.com/psevdoproger',
        },
        {
          class: 'fa fa-5x fa-telegram',
          link: 'https://t.me/AluCaRD1377',
        },
      ],
    };
  },
});
</script>
