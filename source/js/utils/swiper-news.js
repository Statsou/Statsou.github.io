export const addSwiperNews = function () {
  const initialSwiper = function () {
    swiperSettings = new Swiper('.swiper-news', {
      loop: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: false,
      slidesPerView: 1,
      spaceBetween: 20,
      updateOnWindowResize: true,
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

  const controlsList = document.querySelector('.news__filter-list');
  const sliderList = document.querySelector('.slider-news__list');
  const controls = controlsList.querySelectorAll('.news__filter-button');
  const slides = sliderList.querySelectorAll('.slider-news__item');
  let swiperSettings = null;

  initialSwiper();

  function toggleControls () {
    if (controls.length !== 0) {
      for (let i = 0; i < controls.length; i++) {
        if (controls[i].classList.contains('is-active')) {
          controls[i].classList.remove('is-active');
        }
      }
    }
  }

  function cleanSlider (slide) {
    slide.classList.remove('swiper-slide');
    slide.style.display = 'none';
  }

  function renderingSlide (slide) {
    slide.classList.add('swiper-slide');
    slide.style.display = 'flex';
    swiperSettings.slideTo(0);
    swiperSettings.update();
  }

  if (controls.length !== 0) {
    controls.forEach((control) => {
      control.addEventListener('click', (evt) => {
        toggleControls();

        if (!control.classList.contains('is-active')) {
          control.classList.add('is-active');
        }

        slides.forEach((slide) => {
          swiperSettings.update();
          cleanSlider(slide);

          if (slide.dataset.filter === evt.target.dataset.filter) {
            cleanSlider(slide);
            sliderList.prepend(slide);
            renderingSlide(slide);
          }

          if (evt.target.dataset.filter === 'all') {
            cleanSlider(slide);
            sliderList.append(slide);
            renderingSlide(slide);
          }
        });
      });
    });
  }

  const breakpoint = window.matchMedia('(min-width:1200px)');

  window.addEventListener('resize', () => {
    swiperSettings.update();

    if (breakpoint.matches) {
      swiperSettings.destroy();
      swiperSettings = null;
      initialSwiper();
    }
  });
}
