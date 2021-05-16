interface Swiper {
  slidesPerView?: number,
  effect?: 'cube'|'fade'|'coverflow'|'flip'|'slide',
  spaceBetween?: number,
  loop?: boolean,
  flipEffect?: {
    slideShadows?: boolean,
  },
  autoplay?: {
    delay: number,
    disableOnInteraction?: boolean,
  },
  navigation?: {
    hideOnClick: boolean,
    nextEl: string,
    prevEl: string,
  },
  breakpoints?: Object,
  pagination?: {
    el: string | '.swiper-pagination',
    clickable: boolean,
    dynamicBullets: boolean,
    progressbarOpposite: boolean,
  },
  controller?: {
    inverse: boolean,
  },
}

export default interface Home {
  swiperOption: Swiper,
  swiperExport: Swiper,
}
