// Домашнее задание № 5.3

const weather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

weather('Алматы', -10);

// Домашнее задание № 5.4

const SPEED_LIGHT = "299 792 458 м/с";

if (SPEED_LIGHT > "299 792 458 м/с") {
  console.log('Сверхсветовая скорость');

} else if (SPEED_LIGHT === "299 792 458 м/с") {
  console.log('Скорость света');
} else {
  console.log('Субсветовая  скорость');
}

// Домашнее задание № 5.5

function checkPurchase(budget) {
  const arms = "Ак 47";
  const price = 1000;

  const message = budget >= price 
    ? `${arms} приобретён. Спасибо за покупку!` 
    : `Вам не хватает ${price - budget}$, пополните баланс`;

  console.log(message);
}

checkPurchase(2000);
checkPurchase(500);

// Домашнее задание № 5.6

function sayBro(name) {
  console.log(`Ассалямуалейкум, ${name}! Пускай Аллах будет доволен тобой! Аминь!`);
}

sayBro('ахи');

// Домашнее задание № 5.7

const myAge = 33;
const myProfession = 'фронтенд-разработчик';
const firstCity = 'Мекку';
const secondCity = 'Медину';

console.log(`Я Абдул Азиз, мне ${myAge} года!`);
console.log(`Моя будущая профессия ${myProfession}!`);
console.log(`Я совершу хиджру в ${firstCity} или в ${secondCity} ин щаа Аллах!`);
