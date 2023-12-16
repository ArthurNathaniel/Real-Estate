document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Change the color of the pagination bullets dynamically
  var paginationBullets = document.querySelectorAll(
    ".swiper-pagination-bullet"
  );
  if (paginationBullets) {
    paginationBullets.forEach(function (bullet) {
      bullet.style.backgroundColor = "#005555"; // Change to your desired color
    });
  }
});
