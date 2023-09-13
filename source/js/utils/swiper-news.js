export const swiperNews = function () {
  new Swiper('.swiper-news', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: '.swiper-news-button-next',
      prevEl: '.swiper-news-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1200: {
        spaceBetween: 32,
        slidesPerView: 'auto',
        grid: {
          rows: 1,
        },
      },
    },
  });
}
