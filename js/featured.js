document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var paginationBullets = document.querySelectorAll(
    ".swiper-pagination-bullet"
  );
  if (paginationBullets) {
    paginationBullets.forEach(function (bullet) {
      bullet.style.backgroundColor = "#005555"; // Change to your desired color
    });
  }
});
