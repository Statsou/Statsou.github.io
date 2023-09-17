export const addSwiperHero = function () {
  const sliderHeroContent = new Swiper('.slider-hero', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    autoplay: {
    delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 0,
      },
    }
  });
}
