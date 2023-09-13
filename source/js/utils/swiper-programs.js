export const swiperPrograms = function () {
  new Swiper('.swiper-programs', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-programs-button-next',
      prevEl: '.swiper-programs-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
