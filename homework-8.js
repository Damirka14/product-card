import { products } from "./products.js";

// Домашнее задание Уровень 1: № 8.3
// По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const productCardTemplate = document.getElementById('product-card-template');
const productsWrapper = document.querySelector('.product-card-wrapper');

function createProductCard(product) {
  const productClone = productCardTemplate.content.cloneNode(true);
  productClone.querySelector(".product-card__img").src = product.imgSrc;
  productClone.querySelector(".product-card__img").alt = product.title;
  productClone.querySelector(".product-card__for-skin").textContent = product.forSkin;
  productClone.querySelector(".product-card__title").textContent = product.title;
  productClone.querySelector(".product-card__descr").textContent = product.description;
  productClone.querySelector(".product-card__price").textContent = `${product.price} ${product.currency}`;

const productCompositionList = productClone.querySelector(".product-card__composition");
product.composition.forEach(item => {
  const li = document.createElement("li");
  li.className = 'product-card__item';
  li.textContent = item;
  productCompositionList.appendChild(li);
});
  return productClone;
};

// Домашнее задание Уровень 1: № 8.4
// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getProductDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log(getProductDescriptions);

// Домашнее задание Уровень 1: № 8.5
// Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt)
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество.
// Должна быть защита от ввода других значений (проверка if).
// То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

function getProductsCount() {
  while (true) {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  if (count === null) return null;
  const parsedCount = parseInt(count); 
  if (!isNaN(parsedCount) && parsedCount >= 1 && parsedCount <= 5) {
    return parsedCount;
  }
  alert("Неверный ввод. Пожалуйста, введите число от 1 до 5.");
  }
};

function renderProducts(products, limit) {
  productsWrapper.innerHTML = '';
  const productsToRender = products.slice (0, limit);
  productsToRender.forEach(product => {
    const card = createProductCard(product);
    productsWrapper.appendChild(card);
  });
};

const limit = getProductsCount();
if (limit === null) {
  renderProducts(products, null);
} else {
  renderProducts(products, limit);
};