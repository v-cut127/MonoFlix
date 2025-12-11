const rentData = [
  {
    img: "https://cinestarcinemas.hr/remote/185.155.226.145/Ostalo%2Faboutus/CINESTAR%20MEGAPLEX%2012.jpg?width=750",
    badge: "Cinema Hall 1",
    text: "Larger screen, upgraded audio, and extra-plush seats for a more immersive experience."
  },
  {
    img: "https://cinestarcinemas.hr/remote/185.155.226.145/Ostalo%2Faboutus/CINESTAR%20MEGAPLEX%2014.jpg?width=750",
    badge: "Cinema Hall 2",
    text: "High-end surround sound and pristine visuals built for blockbuster-level impact."
  },
  {
    img: "https://cinestarcinemas.hr/remote/185.155.226.145/Ostalo%2Faboutus/CINESTAR%20MEGAPLEX%2015.jpg?width=750",
    badge: "Cinema Hall 3",
    text: "Recliners, catered options, and a private lounge area for exclusive events."
  },
  {
    img: "https://cinestarcinemas.hr/remote/185.155.226.145/Ostalo%2Faboutus/CINESTAR%20MEGAPLEX%2016.jpg?width=750",
    badge: "Cinema Hall 4",
    text: "Cozy, intimate space ideal for birthdays, meetings, or small-group movie nights."
  },
  {
    img: "https://cinestarcinemas.hr/remote/185.155.226.145/Ostalo%2Faboutus/CINESTAR%20MEGAPLEX%2020.jpg?width=750",
    badge: "Cinema Hall 5",
    text: "Comfortable seating, sharp projection, and solid sound for small private screenings."
  }
];
const sliderContainer = document.getElementById("rentSlider");

sliderContainer.innerHTML = rentData
  .map(item => `
        <li class="card-item swiper-slide">
            <a href="#" class="card-link">
                <img src="${item.img}" class="card-image">
                <p class="badge">${item.badge}</p>
                <h2 class="card-title">${item.text}</h2>
                <button class="card-button"><i class="fa-solid fa-arrow-right"></i></button>
            </a>
        </li>
    `)
  .join("");




new Swiper('.card-wrapper', {  
  loop: true,  
  speed: 700,  
  spaceBetween: 30,  

  pagination: {  
    el: '.swiper-pagination',  
    clickable: true,  
    dynamicBullets: true,  
  },  

  navigation: {  
    nextEl: '.swiper-button-next',  
    prevEl: '.swiper-button-prev',  
  },  
  
  breakpoints: { 
    0: {  
      slidesPerView: 1  
    },  
    768: {  
      slidesPerView: 2  
    },  
    1024: {  
      slidesPerView: 3  
    },  
  }  
});  
