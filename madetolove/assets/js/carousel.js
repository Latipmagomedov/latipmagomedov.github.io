const swiper = new Swiper(".card-left", {
  direction: "vertical",
  loop: true,
  slidesPerView: 3.2,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".card-slider", {
  // loop: true
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    0: {
      pagination: {
        el: ".swiper-pagination",
      },
    },
    850: {
      pagination: false,
    }
  },
});

const cardsSlider = new Swiper(".cards-slider", {
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  // pagination: {
  //   el: '.swiper-pagination',
  // },

  pagination: {
    el: ".cards-slider-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".cards-slider-next",
    prevEl: ".cards-slider-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2.1,
    },
    850: {
      slidesPerView: 4,
    }
  },

});
