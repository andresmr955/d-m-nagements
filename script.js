
const hero = document.querySelector('.hero');
const btn = document.getElementById('change-bg-btn');
console.log(hero, btn)
const backgrounds = [
  'imag1.jpg',
  'imag2.jpg',
  'imag3.jpg',
];

let currentIndex = 0;

btn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgrounds.length; 
    hero.style.backgroundImage = `url('/assets/${backgrounds[currentIndex]}')`;
});

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
