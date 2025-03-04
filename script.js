// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     // slidesPerView: 2,  Отображать два слайда одновременно
//     // spaceBetween: 10,  Расстояние между слайдами (по желанию)
  
//     // If we need pagination
    
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
    
//   });


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

// Rangi o'zgarishi kerak bo'lgan element
const body = document.body;

// Har bir slaydga mos ranglar
const colors = ["#F24F4F", "#ADB0B0", "#30A357", "#F24F4F", "#F24F4F"]; // Kulrang, Yashil, Qizil

swiper.on('slideChange', () => {
  let index = swiper.realIndex; // Joriy slayd indexi
  body.style.background = colors[index]; // Foni rangini o'zgartirish
});

