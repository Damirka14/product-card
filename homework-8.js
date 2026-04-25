import { products } from "./products.js";

// Домашнее задание Уровень 1: № 8.3

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
  const li = document.createElement ("li");
  li.className = 'product-card__item';
  li.textContent = item;
  productCompositionList.appendChild(li);
});
  return productClone;
};

// Домашнее задание Уровень 1: № 8.4

const productDescriptions = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});

console.log(productDescriptions);

// Домашнее задание Уровень 1: № 8.5

function getProductsCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  if (count === null) return null;
  const parsedCount = parseInt(count); 
  if (isNaN(parsedCount) || parsedCount < 1 || parsedCount > 5) {
    alert("Неверный ввод. Пожалуйста, введите число от 1 до 5.");
    return 0;
  };
  return parsedCount;
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
if (limit > 0) {
  renderProducts(products, limit);
} else {
  renderProducts(products, 5);
};