export const swiperNews = function () {
  new Swiper('.swiper-news', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 'auto',
    spaceBetween: 32,
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
  });
}
