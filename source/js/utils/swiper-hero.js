export const swiperHero = function () {
  const sliderHero = new Swiper('.swiper-hero', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const sliderHeroContent = new Swiper('.swiper-hero-content', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    autoHeight: true,
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

  sliderHero.controller.control = sliderHeroContent;
  sliderHeroContent.controller.control = sliderHero;
}
