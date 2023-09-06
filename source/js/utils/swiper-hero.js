export const swiperHero = function () {
  return new Swiper('.swiper-hero', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
