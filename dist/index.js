// size的active
$(".size > div").on("click", function () {
  const $this = $(this);

  if ($this.hasClass("active")) {
    $this.removeClass("active");
  } else {
    $(".size > div").removeClass("active");
    $this.addClass("active");
  }
});

// color的active
$(".color > div > img").on("click", function () {
  const $this = $(this);
  if ($this.hasClass("active")) {
    $this.removeClass("active");
  } else {
    $(".color > div > img").removeClass("active");
    $this.addClass("active");
  }
});

// accordion
$(".accordion").on("click", function () {
  // const $title = $(this).find(".title");
  const $collapse = $(this).find(".collapse");
  if ($(this).hasClass("active")) {
    // 關閉
    $(this).removeClass("active");
    $collapse.slideUp();
  } else {
    // 打開
    $(this).addClass("active");
    $collapse.slideDown();
  }
});

// 點選menu跳到指定區塊
$(".article > .menu > p").on("click", function (e) {
  const targetBlock = e.target.dataset.name;
  $("html, body").animate(
    {
      scrollTop: $(`#${targetBlock}`).offset().top,
    },
    { duration: 500, easing: "swing" }
  );
  return false;
});

// 回到最上方
$(".go-top").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");
  return false;
});

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
      spaceBetween: 35,
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});
