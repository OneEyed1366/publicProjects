import Vue from 'vue';
import Vuex from 'vuex';
import intfStore from '../interfaces/store';

Vue.use(Vuex);
interface storeStateFilmsActors {
  name: string[];
  hero: string[] | URL[];
}
interface storeStateFilms {
  id: number,
  title: string,
  hero: string | URL,
  imgs: string[] | URL[],
  desc: string | string[],
  trailer?: string[] | URL[],
  film: string[] | URL[],
  // params: {
  //   [index: string]: string[] | number[] | storeStateFilmsActors[]
  // },
  params: {
    genre: string[],
    year?: number[],
    country?: string[],
    lang?: string[],
    duration: number[],
    studio: string[],
    director: string[],
    imbd?: number[],
    cast: storeStateFilmsActors[],
  },
}

export default new Vuex.Store({
  state: {
    blurred: false,
    pagination: {
      max: 6,
      current: 1,
      step: 3,
    },
    films: [
      {
        id: 0,
        title: 'Alladin',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here',
        film: '',
        params: {
          genre: [
            'comedy',
            'action',
          ],
          year: [2017],
          country: [
            'USA',
            'India',
          ],
          lang: [
            'Ru',
            'En',
          ],
          duration: [169],
          studio: ['Paramount Pictures'],
          director: ['Some cool men'],
          imbd: [7.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 1,
        title: 'Alladin 2',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [7.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'Alladin 3',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'Китай',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [7.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 3,
        title: 'Alladin 3',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'Боевик',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Джеки Чан'],
          imbd: [7.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 4,
        title: 'Alladin 4',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'China',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Gipehhramount Pictures'],
          director: ['Some cool men 2'],
          imbd: [8.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 5,
        title: 'Alladin 5',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [9.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 6,
        title: 'Alladin 6',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [9.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 7,
        title: 'Alladin 7',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [9.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 8,
        title: 'Alladin 8',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [9.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
      {
        id: 9,
        title: 'Alladin 9',
        hero: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/2588807/2588807-1576184167093-ebcb361a34e76.jpg',
        imgs: [''],
        desc: 'Some aaaawesome text righ here (ver.2)',
        film: '',
        params: {
          genre: [
            'comedy',
          ],
          year: [2018],
          country: [
            'USA',
          ],
          lang: [
            'En',
          ],
          duration: [169],
          studio: ['Giperamount Pictures'],
          director: ['Some cool men 2'],
          imbd: [9.4],
          cast: [
            {
              name: 'Shaya La Baff',
              hero: 'https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5b98cd2c23420100aaa0e192_5b9909fc343d6c00a9f56630/scale_1200',
            },
          ],
        },
      },
    ],
  },
  mutations: {
    add(state: any, data: intfStore): void {
      state[data.to].push(data.content);
    },
    set(state: {[index: string]: any}, data: intfStore): void {
      if (data.sub !== '') {
        state[data.to][data.sub] = data.content;
      } else {
        state[data.to] = data.content;
      }

      // state[data.to] = data.content;
    },
    change(state: any, data: string): void {
      state[data] = !state[data];
    },
  },
  actions: {
    add({ commit }, data: intfStore) {
      commit('add', data);
    },
    set({ commit }, data: intfStore) {
      commit('set', data);
    },
  },
  getters: {
    popular: (state) => state.films.find((film: storeStateFilms) => film.title !== ''),
    getList: (state) => (params: {[index: string]: string}) => [...new Set(
      state[params.where].reduce(
        (prev: string[], item: any) => [...prev, ...item.params[params.what]],
        [],
      ),
    )],
    getFilms: (state) => (filters: {[index: string]: string}) => state.films
      .filter((film: storeStateFilms) => Object.values(filters)
        .every((filter: string) => Object.values(film.params)
          .reduce((acc: any, curr: any) => [...acc, ...curr], []).includes(filter))),
  },
  modules: {
  },
});
