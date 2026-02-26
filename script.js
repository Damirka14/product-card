// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const aquaHashColor = '#afffff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = aquaHashColor;
});

// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const pinkHashColor = '#ffd4ff';

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = pinkHashColor
  );
  });

// Переход на страницу Google

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на страницу Google?');
  
  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
};

// Вывод текста в консоли при наведении на главный заголок страницы

const mainTitle = document.querySelector('.product-card-selection');

mainTitle.addEventListener('mouseover', () => {
  console.log('Выберите свой продукт');
});

// Кнопка со сменным цветом

const recolorButton = document.getElementById('recolor-button');

recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('recolor-button__active');
});