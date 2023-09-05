export const swiperPrograms = function () {
  new Swiper('.swiper-programs', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-programs-button-next',
      prevEl: '.swiper-programs-button-prev',
    },
  });
}
