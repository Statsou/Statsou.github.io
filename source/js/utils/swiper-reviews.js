export const swiperReviews = function () {
  new Swiper('.swiper-reviews', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
  });
}
