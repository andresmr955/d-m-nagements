
const hero = document.querySelector('.hero');
const btn = document.getElementById('change-bg-btn');
console.log(hero, btn)
const backgrounds = [
  'imag1.jpg',
  'imag2.jpg',
  'imag3.jpg',
];
const backgroundImages = [
  "url('./assets/imag1.jpg')",
  "url('./assets/imag2.jpg')",
  "url('./assets/imag3.jpg')"
];
let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  hero.style.backgroundImage = `url('./assets/${backgrounds[currentIndex]}')`;
}

btn.addEventListener('click', () => {
    changeBackground();
});

setInterval(changeBackground, 5000);

const form = document.getElementById('form-contact');
const responseMessage = document.getElementById('reponse');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const action = form.action;

  try {
    const response = await fetch(action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      responseMessage.textContent = "Message envoyé avec succès ! Merci d'avoir pris contact avec nous.";
      responseMessage.style.color = "green";
      responseMessage.classList.add('show');  // Mostrar mensaje con transición
      form.reset();
    } else {
      responseMessage.textContent = "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
      responseMessage.style.color = "red";
      responseMessage.classList.add('show');  // Mostrar mensaje con transición
    }
  } catch (error) {
    responseMessage.textContent = "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
    responseMessage.style.color = "red";
    responseMessage.classList.add('show');  // Mostrar mensaje con transición
  }
});

setTimeout(() => {
  responseMessage.classList.remove('show');
}, 5000); 



  const swiper = new Swiper('.swiper', {
  loop: false,
  speed: 5000,
  autoplay: {
    delay: 1000,  // tiempo en milisegundos (3 segundos)
    disableOnInteraction: false, // para que no se detenga si el usuario interactúa
  },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
   
    slideChange: function () {
      const currentIndex = swiper.realIndex;
      const hero = document.querySelector('.swiper-slide-active .hero');
      if (hero) {
        hero.style.backgroundImage = backgroundImages[currentIndex];
      }
    }
  }
});

// Inicializa Swiper manualmente para que se dispare 'init'
swiper.init();