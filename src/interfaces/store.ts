interface storeStateFilmsActors {
  name: string[],
  hero: string[] | URL[],
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
};
interface storeStateFilters {
  title: string[],
}

export default interface store {
  to: string,
  sub: string,
  content: storeStateFilms | storeStateFilters,
}
