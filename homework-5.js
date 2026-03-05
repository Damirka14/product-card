// Домашнее задание № 5.3

const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Алматы', -10);

// Домашнее задание № 5.4

const SPEED_LIGHT = '299792458 м/с';

function checkSpeed(speed){
    if (speed > SPEED_LIGHT) {
        console.log('Сверхсветовая скорость');
    } else if (speed < SPEED_LIGHT) {
        console.log('Субсветовая скорость');
    } else {
        console.log('Скорость света');
    }
}

checkSpeed("399792458 м/с")
checkSpeed("199792458 м/с")
checkSpeed("299792458 м/с")

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