// size的active
$('.size > div').on('click', function () {
  const $this = $(this);

  if ($this.hasClass('active')) {
    $this.removeClass('active')
  }
  else {
    $(".size > div").removeClass('active')
    $this.addClass('active')
  }
})

// color的active
$('.color > div > img').on('click', function () {
  const $this = $(this);

  if ($this.hasClass('active')) {
    $this.removeClass('active')
  }
  else {
    $(".color > div > img").removeClass('active')
    $this.addClass('active')
  }
})

// swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 640px
    1025: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: 35
    },
  }
});